// Phone-screenshot gallery for the homepage.
//
// Final screenshots are being captured per docs/GHOSTWORKOUT_SCREENSHOT_GENERATION_RUNBOOK.md.
// Until those land we render labeled placeholder tiles in the same slot order
// as the runbook (§4), so the layout stays stable and swapping in the real
// PNGs is a one-line change per tile.
//
// SAFETY: this component must never load any of the audit-flagged assets
// (IMG_5648, Ghost Runner Watch home, empty Watch picker, Android DBG/notif
// screenshots). It only renders inline placeholders today.

import React from "react";

// TODO(screenshots-2026-06-07): replace each `src: null` with the final
// captured asset path (e.g. "/screenshots/iphone_1_race_your_past_self.png")
// once Phase C–F captures are selected. Keep alt text aligned with the runbook
// caption so the page reads correctly with images disabled.
type Slot = {
  caption: string;
  alt: string;
  src: string | null;
  // Asset filename hint pulled straight from the runbook so the next operator
  // knows exactly what to drop in.
  assetHint: string;
};

const SLOTS: Slot[] = [
  {
    caption: "Race your past self",
    alt: "Ghost Workout live ghost session — user ahead of past self",
    src: null,
    assetHint: "iphone_1_live_ghost_ahead.png (Phase C, runbook §5)",
  },
  {
    caption: "See if you beat your previous workout",
    alt: "Ghost Workout post-run result screen with a ghost win",
    src: null,
    assetHint: "iphone_2_post_run_result.png (Phase D, runbook §5)",
  },
  {
    caption: "Every run becomes a ghost",
    alt: "Saved route with Ghost Comparison section and splits",
    src: null,
    assetHint: "iphone_3_route_detail_ghost_comparison.png (Phase D)",
  },
  {
    caption: "Train indoors too",
    alt: "Indoor pedometer ghost session",
    src: null,
    assetHint: "iphone_5_indoor_pedometer.png (Phase F)",
  },
  {
    caption: "Set a target pace",
    alt: "Target pace ghost — picker or active feedback",
    src: null,
    assetHint: "iphone_6_target_pace.png (Phase E)",
  },
];

const ScreenshotGallery: React.FC = () => {
  return (
    <section
      aria-labelledby="screenshots-heading"
      className="w-full max-w-5xl mx-auto px-4 py-12"
    >
      <h2
        id="screenshots-heading"
        className="text-2xl md:text-3xl font-semibold text-center text-white mb-8"
      >
        See it in action
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {SLOTS.map((slot, i) => (
          <li
            key={i}
            className="flex flex-col items-center"
          >
            <div
              className="aspect-[9/19.5] w-full bg-gray-900/70 border border-gray-700 rounded-2xl overflow-hidden flex items-center justify-center text-center"
              data-screenshot-slot={i + 1}
            >
              {slot.src ? (
                <img
                  src={slot.src}
                  alt={slot.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="p-3 text-[10px] text-gray-400 leading-snug">
                  <div className="text-gray-300 font-semibold mb-1">
                    Slot {i + 1}
                  </div>
                  <div className="opacity-80">{slot.assetHint}</div>
                </div>
              )}
            </div>
            <p className="mt-3 text-sm text-gray-200 text-center font-medium">
              {slot.caption}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ScreenshotGallery;
