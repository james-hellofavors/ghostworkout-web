// Public store URLs and availability for download CTAs.
//
// IMPORTANT: do not invent App Store availability. The iOS build is uploading
// to App Store Connect at the time of writing — set IOS_APP_STORE_URL to the
// real public URL once the listing goes live, and flip IOS_AVAILABLE to true.
// Until then the App Store CTA renders as a non-link "Coming soon on iPhone".

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.hellofavors.ghostworkout";

// TODO(launch): replace with real App Store URL once approved and live.
export const IOS_APP_STORE_URL: string | null = null;
export const IOS_AVAILABLE = false;

export const SITE_URL = "https://www.ghostworkout.com";
export const SITE_NAME = "Ghost Workout";
export const TAGLINE = "Race your past self";
export const SUPPORTING_LINE =
  "Every run or walk becomes a ghost you can beat next time.";
