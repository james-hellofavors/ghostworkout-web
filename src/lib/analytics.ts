// GA4 analytics integration.
//
// Single source of truth for the measurement ID and the only place we touch
// `window.gtag` / `window.dataLayer`. All other code calls trackPageView /
// trackEvent from here.
//
// Behavior:
//   - Reads the measurement ID from VITE_GA_MEASUREMENT_ID at build time.
//   - In dev (import.meta.env.PROD === false) the loader is a no-op so local
//     workflows don't pollute production analytics.
//   - If the ID is missing OR a Do-Not-Track / GPC signal is set, init() is a
//     no-op and trackPageView/trackEvent are no-ops too.
//
// PRIVACY (mirrors docs/GHOSTWORKOUT_WEB_ANALYTICS.md):
//   - We never forward workout, location, route, pace, distance, HealthKit,
//     or any personal user-provided data to GA4. This module is wired only
//     into the marketing site, never the mobile apps, and is only ever called
//     with marketing-page parameters (path, title, CTA id).
//   - Ad personalization signals and Google Signals are off.

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

const MEASUREMENT_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as
  | string
  | undefined) ?? "";

// Run only in production builds — keeps dev navigation out of GA Realtime.
const IS_PROD = import.meta.env.PROD === true;

let initialized = false;

function userOptedOut(): boolean {
  if (typeof navigator === "undefined") return false;
  // Honor browser-level Do Not Track and Global Privacy Control.
  // Strings, because some browsers report "1" while others report numbers.
  const dnt = (navigator as Navigator & { doNotTrack?: string }).doNotTrack;
  if (dnt === "1" || dnt === "yes") return true;
  const gpc = (navigator as Navigator & { globalPrivacyControl?: boolean })
    .globalPrivacyControl;
  if (gpc === true) return true;
  return false;
}

export function analyticsEnabled(): boolean {
  return initialized;
}

/**
 * Inject the gtag.js script and configure the GA4 stream. Safe to call more
 * than once — subsequent calls are no-ops. Must be invoked once at app boot.
 */
export function initAnalytics(): void {
  if (initialized) return;
  if (!IS_PROD) return;
  if (!MEASUREMENT_ID) return;
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (userOptedOut()) return;

  window.dataLayer = window.dataLayer || [];
  // Standard gtag bootstrap from Google's snippet.
  const gtag: GtagFn = function gtag(...args) {
    window.dataLayer!.push(args);
  };
  window.gtag = gtag;

  gtag("js", new Date());
  // send_page_view: false — we send page_view ourselves on every route change
  // (including the first one), so we don't double-count.
  // anonymize_ip: true — pre-CCPA hygiene; GA4 truncates by default but we
  // make it explicit.
  // allow_ad_personalization_signals + allow_google_signals: false — this is
  // a marketing site, not a remarketing surface.
  gtag("config", MEASUREMENT_ID, {
    send_page_view: false,
    anonymize_ip: true,
    allow_ad_personalization_signals: false,
    allow_google_signals: false,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
    MEASUREMENT_ID,
  )}`;
  document.head.appendChild(script);

  initialized = true;
}

export function trackPageView(path: string, title?: string): void {
  if (!initialized || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title ?? document.title,
    page_location: window.location.href,
  });
}

export function trackEvent(
  name: string,
  params: Record<string, string | number | boolean | undefined> = {},
): void {
  if (!initialized || !window.gtag) return;
  window.gtag("event", name, params);
}
