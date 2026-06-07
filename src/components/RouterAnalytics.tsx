// Router-aware analytics: emits a GA4 page_view on every route change and
// installs a single delegated click listener for [data-analytics] CTAs.
//
// Mounted inside <Router>, so it can read useLocation(). It renders nothing.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent, trackPageView } from "@/lib/analytics";

const DESTINATIONS: Record<string, string> = {
  "cta-google-play": "google_play",
  "cta-app-store": "app_store",
  "cta-app-store-comingsoon": "app_store_comingsoon",
};

const RouterAnalytics: React.FC = () => {
  const location = useLocation();

  // Page-view tracking on route change. We include the document title so GA4
  // events are labeled with the marketing page title (set per-page via Helmet).
  // Title is read on the next microtask so Helmet has already swapped it.
  useEffect(() => {
    const path = location.pathname + location.search;
    // Defer one tick — react-helmet-async applies <title> after the route
    // commits, so reading document.title synchronously here returns the
    // previous page's title.
    const id = window.setTimeout(() => {
      trackPageView(path, document.title);
    }, 0);
    return () => window.clearTimeout(id);
  }, [location.pathname, location.search]);

  // CTA click delegation. One listener for the whole app, attached once. We
  // never call preventDefault — analytics must never block navigation, and
  // the click event fires before the browser follows the link, so the GA4
  // beacon goes out either way.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const el = target.closest<HTMLElement>("[data-analytics]");
      if (!el) return;
      const ctaId = el.getAttribute("data-analytics") ?? "unknown";
      const ctaSource = el.getAttribute("data-analytics-source") ?? "unknown";
      try {
        trackEvent("store_cta_click", {
          cta_id: ctaId,
          cta_source: ctaSource,
          destination: DESTINATIONS[ctaId] ?? "other",
          page_path: window.location.pathname,
        });
      } catch {
        // Never let analytics throw into the user's navigation.
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
};

export default RouterAnalytics;
