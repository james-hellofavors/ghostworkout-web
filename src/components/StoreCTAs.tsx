// Download CTAs for App Store and Google Play.
//
// Google Play: always rendered as a live external link.
// App Store: rendered as a real link when IOS_APP_STORE_URL is set; otherwise
// rendered as a disabled "Coming soon on iPhone" placeholder. We never imply
// availability we do not have.
//
// `data-analytics` attributes mark each CTA for outbound click tracking. No
// analytics vendor is wired up yet — see TODO(analytics) at end of file.

import React from "react";
import {
  IOS_APP_STORE_URL,
  IOS_AVAILABLE,
  PLAY_STORE_URL,
} from "@/config/store";

type Props = {
  /**
   * Where the CTAs are used (e.g. "hero", "footer", "seo:treadmill"). Forwarded
   * to data attributes so analytics can attribute clicks to the page surface.
   */
  source: string;
  className?: string;
};

const StoreCTAs: React.FC<Props> = ({ source, className }) => {
  return (
    <div
      className={
        "flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 " +
        (className ?? "")
      }
    >
      {/* Google Play — live */}
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Ghost Workout on Google Play"
        data-analytics="cta-google-play"
        data-analytics-source={source}
        className="inline-flex items-center gap-3 px-5 py-3 bg-black hover:bg-gray-900 border border-gray-600 rounded-lg shadow-lg transition transform hover:-translate-y-0.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="28"
          height="28"
          aria-hidden="true"
        >
          <path fill="#EA4335" d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1z" />
          <path fill="#FBBC04" d="M104.6 499 325.3 277.7l59.6 59.6L104.6 499z" />
          <path fill="#4285F4" d="m385.4 337.3-59.7-59.7L499 256 385.4 337.3z" />
          <path fill="#34A853" d="M104.6 13v486l220.7-221.3-220.7-264.7z" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[10px] text-gray-300 tracking-wider">
            GET IT ON
          </span>
          <span className="block text-base font-semibold text-white">
            Google Play
          </span>
        </span>
      </a>

      {/* App Store — live iff URL is set, otherwise honest "coming soon" */}
      {IOS_AVAILABLE && IOS_APP_STORE_URL ? (
        <a
          href={IOS_APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Ghost Workout on the App Store"
          data-analytics="cta-app-store"
          data-analytics-source={source}
          className="inline-flex items-center gap-3 px-5 py-3 bg-black hover:bg-gray-900 border border-gray-600 rounded-lg shadow-lg transition transform hover:-translate-y-0.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width="26"
            height="26"
            aria-hidden="true"
            fill="#ffffff"
          >
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM256.5 89.7c19.7-23.1 33.6-55.1 33.6-87.7-26.4 1.4-58.7 17.8-77.6 39.6-17.4 19.7-31.5 51.9-33.6 84.1 28.9 1.6 56.5-15.4 77.6-36z" />
          </svg>
          <span className="text-left leading-tight">
            <span className="block text-[10px] text-gray-300 tracking-wider">
              Download on the
            </span>
            <span className="block text-base font-semibold text-white">
              App Store
            </span>
          </span>
        </a>
      ) : (
        <span
          aria-disabled="true"
          data-analytics="cta-app-store-comingsoon"
          data-analytics-source={source}
          className="inline-flex items-center gap-3 px-5 py-3 bg-black/70 border border-gray-700 rounded-lg shadow-lg text-gray-400 cursor-not-allowed"
          title="Coming soon on iPhone"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width="26"
            height="26"
            aria-hidden="true"
            fill="currentColor"
          >
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM256.5 89.7c19.7-23.1 33.6-55.1 33.6-87.7-26.4 1.4-58.7 17.8-77.6 39.6-17.4 19.7-31.5 51.9-33.6 84.1 28.9 1.6 56.5-15.4 77.6-36z" />
          </svg>
          <span className="text-left leading-tight">
            <span className="block text-[10px] tracking-wider">
              COMING SOON
            </span>
            <span className="block text-base font-semibold">on iPhone</span>
          </span>
        </span>
      )}
    </div>
  );
};

export default StoreCTAs;

// TODO(analytics): no analytics vendor is wired up yet. When one is added,
// listen for clicks on elements with [data-analytics] and forward
// `data-analytics` + `data-analytics-source` as the event name + source.
