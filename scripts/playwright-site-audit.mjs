#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { chromium, devices } from "playwright";

const baseUrl = process.env.BASE_URL || "http://127.0.0.1:4173";
const maxPages = Number(process.env.MAX_PAGES || 200);
const outDir = path.resolve(process.cwd(), "tmp", "playwright-audit");
fs.mkdirSync(outDir, { recursive: true });
const base = new URL(baseUrl);
const origin = base.origin;
const basePath = base.pathname.endsWith("/") ? base.pathname : `${base.pathname}/`;

const variants = [
  {
    name: "desktop",
    contextOptions: { viewport: { width: 1440, height: 900 } },
  },
  {
    name: "mobile",
    contextOptions: { ...devices["iPhone 12"] },
  },
];

function normalizePath(url) {
  try {
    const u = new URL(url, origin);
    if (u.origin !== origin) return null;
    if (!u.pathname.startsWith("/")) return null;
    if (basePath !== "/" && !u.pathname.startsWith(basePath)) return null;
    return `${u.pathname}${u.search || ""}`;
  } catch {
    return null;
  }
}

function headingIssues(headings) {
  const issues = [];
  let prev = 0;
  for (const h of headings) {
    if (prev && h.level > prev + 1) {
      issues.push(`Heading jump from h${prev} to h${h.level}`);
    }
    prev = h.level;
  }
  return issues;
}

async function auditVariant(browser, variant) {
  const context = await browser.newContext(variant.contextOptions);
  const page = await context.newPage();
  const queue = [basePath];
  const seen = new Set();
  const pages = [];
  const brokenInternalLinks = [];

  while (queue.length && seen.size < maxPages) {
    const current = queue.shift();
    if (!current || seen.has(current)) continue;
    seen.add(current);

    const consoleErrors = [];
    const pageErrors = [];
    const failedRequests = [];

    page.removeAllListeners("console");
    page.removeAllListeners("pageerror");
    page.removeAllListeners("requestfailed");

    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    page.on("pageerror", (err) => pageErrors.push(err.message));
    page.on("requestfailed", (req) => {
      failedRequests.push({
        url: req.url(),
        method: req.method(),
        failure: req.failure()?.errorText || "unknown",
      });
    });

    const target = new URL(current, baseUrl).toString();
    let response = null;
    let navError = null;
    try {
      response = await page.goto(target, {
        waitUntil: "domcontentloaded",
        timeout: 30000,
      });
      await page.waitForTimeout(900);
    } catch (err) {
      navError = err instanceof Error ? err.message : String(err);
    }

    const status = response?.status() ?? null;
    const ok = response?.ok() ?? false;

    let dom = null;
    if (!navError) {
      dom = await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll("a[href]")).map((a) => ({
          href: a.getAttribute("href"),
          text: (a.textContent || "").trim(),
        }));

        const images = Array.from(document.querySelectorAll("img")).map((img) => ({
          src: img.getAttribute("src"),
          alt: img.getAttribute("alt"),
        }));

        const headings = Array.from(
          document.querySelectorAll("h1, h2, h3, h4, h5, h6")
        ).map((h) => ({
          level: Number(h.tagName.slice(1)),
          text: (h.textContent || "").trim(),
        }));

        const doc = document.documentElement;
        const hasOverflowX = doc.scrollWidth > window.innerWidth + 1;
        const mainCount = document.querySelectorAll("main").length;

        return {
          title: document.title || "",
          lang: doc.getAttribute("lang"),
          metaDescription:
            document.querySelector('meta[name="description"]')?.getAttribute("content") || "",
          canonical:
            document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "",
          h1Count: headings.filter((h) => h.level === 1).length,
          headings,
          links,
          images,
          mainCount,
          hasOverflowX,
          bodyText: (document.body?.innerText || "").slice(0, 40000),
        };
      });
    }

    if (dom) {
      for (const l of dom.links) {
        const href = l.href || "";
        if (!href || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) {
          continue;
        }
        const normalized = normalizePath(href);
        if (normalized && !seen.has(normalized)) queue.push(normalized);
      }
    }

    if (dom?.links?.length) {
      for (const l of dom.links) {
        const href = l.href || "";
        if (!href || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) {
          continue;
        }
        const normalized = normalizePath(href);
        if (!normalized) continue;
        if (normalized.includes(".") && !normalized.endsWith(".html")) continue;
        try {
          const linkUrl = new URL(normalized, baseUrl).toString();
          const headResp = await context.request.get(linkUrl, { timeout: 15000 });
          if (headResp.status() >= 400) {
            brokenInternalLinks.push({
              from: current,
              to: normalized,
              status: headResp.status(),
            });
          }
        } catch {
          brokenInternalLinks.push({ from: current, to: normalized, status: null });
        }
      }
    }

    const pageRecord = {
      path: current,
      url: target,
      status,
      ok,
      navError,
      consoleErrors,
      pageErrors,
      failedRequests,
      checks: null,
    };

    if (dom) {
      const missingAltImages = dom.images
        .filter((img) => img.alt === null)
        .map((img) => img.src)
        .filter(Boolean);
      const encodingArtifacts = [];
      if (/[�]/.test(dom.bodyText)) encodingArtifacts.push("replacement-character-found");
      if (/(Ã.|â€™|â€“|â€œ|â€|â„¢)/.test(dom.bodyText)) encodingArtifacts.push("likely-mojibake");

      const placeholderText = [];
      const placeholderPatterns = ["lorem ipsum", "todo", "placeholder", "coming soon"];
      const lowered = dom.bodyText.toLowerCase();
      for (const p of placeholderPatterns) {
        if (lowered.includes(p)) placeholderText.push(p);
      }

      pageRecord.checks = {
        titleMissing: dom.title.trim().length === 0,
        metaDescriptionMissing: dom.metaDescription.trim().length === 0,
        langMissing: !dom.lang,
        canonicalMissing: dom.canonical.trim().length === 0,
        h1Count: dom.h1Count,
        headingIssues: headingIssues(dom.headings),
        missingAltImages,
        mainCount: dom.mainCount,
        hasOverflowX: dom.hasOverflowX,
        encodingArtifacts,
        placeholderText,
      };
    }

    pages.push(pageRecord);
  }

  await context.close();

  const uniqueBroken = [];
  const seenBroken = new Set();
  for (const b of brokenInternalLinks) {
    const key = `${b.from}|${b.to}|${b.status}`;
    if (!seenBroken.has(key)) {
      uniqueBroken.push(b);
      seenBroken.add(key);
    }
  }

  return {
    variant: variant.name,
    baseUrl,
    scannedPages: pages.length,
    pages,
    brokenInternalLinks: uniqueBroken,
  };
}

function summarize(report) {
  const findings = [];
  for (const page of report.pages) {
    if (page.navError) findings.push(`[${page.path}] Navigation error: ${page.navError}`);
    if (!page.ok) findings.push(`[${page.path}] HTTP status ${page.status}`);
    if (page.consoleErrors.length) findings.push(`[${page.path}] Console errors: ${page.consoleErrors.length}`);
    if (page.pageErrors.length) findings.push(`[${page.path}] Page errors: ${page.pageErrors.length}`);
    if (page.failedRequests.length) findings.push(`[${page.path}] Failed requests: ${page.failedRequests.length}`);
    const checks = page.checks;
    if (!checks) continue;
    if (checks.titleMissing) findings.push(`[${page.path}] Missing <title>`);
    if (checks.metaDescriptionMissing) findings.push(`[${page.path}] Missing meta description`);
    if (checks.langMissing) findings.push(`[${page.path}] Missing html lang`);
    if (checks.canonicalMissing) findings.push(`[${page.path}] Missing canonical link`);
    if (checks.h1Count === 0) findings.push(`[${page.path}] Missing h1`);
    if (checks.h1Count > 1) findings.push(`[${page.path}] Multiple h1 (${checks.h1Count})`);
    if (checks.headingIssues.length) {
      for (const issue of checks.headingIssues) findings.push(`[${page.path}] ${issue}`);
    }
    if (checks.mainCount !== 1) findings.push(`[${page.path}] main landmarks: ${checks.mainCount} (expected 1)`);
    if (checks.hasOverflowX) findings.push(`[${page.path}] Horizontal overflow detected`);
    if (checks.missingAltImages.length) {
      findings.push(`[${page.path}] Images missing alt: ${checks.missingAltImages.length}`);
    }
    if (checks.encodingArtifacts.length) {
      findings.push(`[${page.path}] Encoding artifacts: ${checks.encodingArtifacts.join(", ")}`);
    }
    if (checks.placeholderText.length) {
      findings.push(`[${page.path}] Placeholder text found: ${checks.placeholderText.join(", ")}`);
    }
  }
  for (const b of report.brokenInternalLinks) {
    findings.push(`[${b.from}] Broken internal link to ${b.to} (status: ${b.status ?? "unknown"})`);
  }
  return findings;
}

const browser = await chromium.launch({ headless: true });
const reports = [];
for (const v of variants) {
  const report = await auditVariant(browser, v);
  reports.push(report);
}
await browser.close();

const output = {
  generatedAt: new Date().toISOString(),
  baseUrl,
  reports,
};

const outJson = path.join(outDir, "site-audit-report.json");
fs.writeFileSync(outJson, JSON.stringify(output, null, 2), "utf8");

let summary = `Playwright Site Audit\nBase URL: ${baseUrl}\nGenerated: ${output.generatedAt}\n\n`;
for (const report of reports) {
  summary += `Variant: ${report.variant}\nScanned pages: ${report.scannedPages}\n`;
  const findings = summarize(report);
  if (!findings.length) {
    summary += "Findings: none\n\n";
  } else {
    summary += `Findings (${findings.length}):\n`;
    for (const f of findings) summary += `- ${f}\n`;
    summary += "\n";
  }
}

const outTxt = path.join(outDir, "site-audit-summary.txt");
fs.writeFileSync(outTxt, summary, "utf8");

console.log(summary);
console.log(`JSON report: ${outJson}`);
console.log(`Summary: ${outTxt}`);
