/**
 * check-legal-sync.mjs
 *
 * Validates that key phrases from the TSX source files appear verbatim in the
 * corresponding static HTML files under public/. Run with:
 *
 *   node scripts/check-legal-sync.mjs
 *   npm run check-legal
 *
 * Exits 0 on success, 1 if any check fails.
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

function read(relPath) {
  return readFileSync(join(root, relPath), 'utf8');
}

const checks = [
  // ── Terms of Service ──────────────────────────────────────────────────────
  {
    label: 'Terms: Last Updated date',
    html: 'public/terms-and-conditions/index.html',
    phrases: ['Last Updated: May 11, 2026'],
  },
  {
    label: 'Terms: Santa Clara County venue',
    html: 'public/terms-and-conditions/index.html',
    phrases: ['Santa Clara County, California'],
  },
  {
    label: 'Terms: $100 liability cap',
    html: 'public/terms-and-conditions/index.html',
    phrases: ['$100'],
  },
  {
    label: 'Terms: governing law and venue',
    html: 'public/terms-and-conditions/index.html',
    phrases: ['State of California', 'Santa Clara County, California'],
  },
  {
    label: 'Terms: assumption of risk',
    html: 'public/terms-and-conditions/index.html',
    phrases: ['assume all risks'],
  },
  {
    label: 'Terms: deleting app ≠ deleting account',
    html: 'public/terms-and-conditions/index.html',
    phrases: ['Deleting the app does not delete your account'],
  },
  {
    label: 'Terms: contact email',
    html: 'public/terms-and-conditions/index.html',
    phrases: ['privacy@hellofavors.com'],
  },
  {
    label: 'Terms: Hello Favors address',
    html: 'public/terms-and-conditions/index.html',
    phrases: ['6469 Almaden Expy'],
  },

  // ── Privacy Policy ────────────────────────────────────────────────────────
  {
    label: 'Privacy: Last Updated date',
    html: 'public/privacy-policy/index.html',
    phrases: ['Last Updated: May 11, 2026'],
  },
  {
    label: 'Privacy: US-only scope',
    html: 'public/privacy-policy/index.html',
    phrases: ['intended for users in the United States'],
  },
  {
    label: 'Privacy: background location iOS disclosure',
    html: 'public/privacy-policy/index.html',
    phrases: ['background location updates are used while an active workout is in progress'],
  },
  {
    label: 'Privacy: pedometer disclosure',
    html: 'public/privacy-policy/index.html',
    phrases: ['pedometer-derived distance estimates'],
  },
  {
    label: 'Privacy: AI Reflection — no GPS sent',
    html: 'public/privacy-policy/index.html',
    phrases: ['Raw GPS coordinates', 'GPS route point streams'],
  },
  {
    label: 'Privacy: no payment info stored',
    html: 'public/privacy-policy/index.html',
    phrases: ['We do not collect or store payment card details or billing addresses'],
  },
  {
    label: 'Privacy: 30-day purge',
    html: 'public/privacy-policy/index.html',
    phrases: ['hard purge of your data is completed within 30 days'],
  },
  {
    label: 'Privacy: CCPA mention',
    html: 'public/privacy-policy/index.html',
    phrases: ['California residents (CCPA)'],
  },
  {
    label: 'Privacy: children under 13',
    html: 'public/privacy-policy/index.html',
    phrases: ['children under 13'],
  },
  {
    label: 'Privacy: contact email',
    html: 'public/privacy-policy/index.html',
    phrases: ['privacy@hellofavors.com'],
  },

  // ── Delete Account ────────────────────────────────────────────────────────
  {
    label: 'Delete: 30-day data removal',
    html: 'public/delete-account/index.html',
    phrases: ['removed within 30 days'],
  },
  {
    label: 'Delete: deleting app ≠ deleting account',
    html: 'public/delete-account/index.html',
    phrases: ['Deleting the app does not delete your account'],
  },
  {
    label: 'Delete: subscription cancellation warning',
    html: 'public/delete-account/index.html',
    phrases: ['does not automatically cancel an active subscription'],
  },
  {
    label: 'Delete: email contact',
    html: 'public/delete-account/index.html',
    phrases: ['privacy@hellofavors.com'],
  },
  {
    label: 'Delete: Hello Favors address',
    html: 'public/delete-account/index.html',
    phrases: ['6469 Almaden Expy'],
  },
];

let passed = 0;
let failed = 0;

for (const check of checks) {
  const html = read(check.html);
  const missing = check.phrases.filter(p => !html.includes(p));
  if (missing.length === 0) {
    console.log(`  ✓  ${check.label}`);
    passed++;
  } else {
    console.error(`  ✗  ${check.label}`);
    for (const p of missing) {
      console.error(`       MISSING: "${p}"`);
    }
    failed++;
  }
}

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
