// src/pages/GhostWorkout/GhostWorkout.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import StoreCTAs from "@/components/StoreCTAs";
import FAQ from "@/components/FAQ";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import {
  SITE_NAME,
  SITE_URL,
  SUPPORTING_LINE,
  TAGLINE,
} from "@/config/store";

const TITLE = `${SITE_NAME} — Race Your Past Runs and Walks`;
const DESCRIPTION =
  "Ghost Workout turns your runs and walks into ghosts you can race next time. Track outdoor routes, indoor workouts, and target pace sessions.";

const GhostWorkout: React.FC = () => {
  // Organization + SoftwareApplication structured data — helps search engines
  // understand the product and surface store links.
  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: SITE_NAME,
    applicationCategory: "HealthApplication",
    operatingSystem: "Android, iOS",
    description: DESCRIPTION,
    url: SITE_URL,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-start text-white font-sans"
      style={{
        // Dark overlay stacked on top of the artwork to keep hero copy and
        // card text readable against the brighter parts of the painting
        // (glowing runner / dawn highlights). Single background-image value
        // — no extra overlay div needed.
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/futuristic_duel_at_dawn.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta
          property="og:image"
          content={`${SITE_URL}/futuristic_duel_at_dawn.png`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/futuristic_duel_at_dawn.png`}
        />

        <script type="application/ld+json">{JSON.stringify(appJsonLd)}</script>
      </Helmet>

      <main className="flex-grow w-full flex flex-col items-center pt-10 px-4">
        {/* HERO */}
        <section
          aria-labelledby="hero-heading"
          className="w-full max-w-3xl mx-auto text-center pt-8 pb-10"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gray-300 mb-3">
            {SITE_NAME}
          </p>
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg"
          >
            {TAGLINE}
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            {SUPPORTING_LINE}
          </p>

          <div className="mt-8">
            <StoreCTAs source="hero" />
          </div>
          <p className="mt-4 text-sm text-gray-300">
            Core ghost racing is free. Premium Reflection is optional.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section
          aria-labelledby="how-heading"
          className="w-full max-w-4xl mx-auto px-2 py-10"
        >
          <h2
            id="how-heading"
            className="text-2xl md:text-3xl font-semibold text-center text-white mb-8"
          >
            How it works
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                n: "1",
                title: "Record a workout",
                body: "Go for a run or walk — outdoors with GPS, or indoors with the pedometer. Every saved workout becomes a ghost.",
              },
              {
                n: "2",
                title: "Pick a ghost",
                body: "Choose a previous workout to race, or set a target pace. Outdoor routes, indoor sessions, and steady pace targets all work.",
              },
              {
                n: "3",
                title: "Race your past self",
                body: "See in real time whether you're ahead or behind. Finish and you'll get a clear result — and a new ghost for next time.",
              },
            ].map((step) => (
              <li
                key={step.n}
                className="bg-[rgba(8,12,24,0.85)] backdrop-blur-sm border border-gray-700 rounded-xl p-5 text-center"
              >
                <div className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                  Step {step.n}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* SCREENSHOTS (placeholder until 2026-06-07 capture session) */}
        <ScreenshotGallery />

        {/* FEATURE BLOCKS */}
        <section
          aria-labelledby="features-heading"
          className="w-full max-w-5xl mx-auto px-2 py-10"
        >
          <h2
            id="features-heading"
            className="text-2xl md:text-3xl font-semibold text-center text-white mb-8"
          >
            Built for self-competition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Race outdoor routes",
                body: "Replay any past outdoor run or walk by GPS route. See your ghost on the map and your live ahead/behind delta as you move.",
              },
              {
                title: "Train indoors too",
                body: "Treadmill, hallway, or laps inside — Ghost Workout uses your phone's pedometer to track indoor distance, so you can race an indoor ghost without GPS.",
              },
              {
                title: "Set a target pace",
                body: "No past workout? Pick a target pace and race a steady ghost moving at that pace. Useful for tempo runs and pace training.",
              },
              {
                title: "Review your result",
                body: "After every workout you get a clear post-run result, with shared-section comparisons and splits — so you know exactly where you gained and lost.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-[rgba(8,12,24,0.85)] backdrop-blur-sm border border-gray-700 rounded-xl p-5"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
            <div className="bg-[rgba(8,12,24,0.85)] backdrop-blur-sm border border-gray-700 rounded-xl p-5 md:col-span-2">
              <div className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                Optional
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Premium Reflection
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Want a short AI reflection on your finished workout? Premium
                Reflection is a small optional add-on. You never need it to
                record a workout, save a ghost, or race a previous run — core
                ghost racing is always free.
              </p>
            </div>
          </div>
        </section>

        {/* SEO INTERNAL LINKS */}
        <section
          aria-labelledby="explore-heading"
          className="w-full max-w-4xl mx-auto px-2 py-10 text-center"
        >
          <h2
            id="explore-heading"
            className="text-2xl md:text-3xl font-semibold text-white mb-6"
          >
            Learn more
          </h2>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {[
              ["/what-is-a-ghost-workout/", "What is a ghost workout?"],
              ["/race-your-past-self-running-app/", "Race your past self"],
              [
                "/running-app-to-race-previous-run/",
                "Race a previous run",
              ],
              ["/treadmill-ghost-workout-app/", "Treadmill ghost workouts"],
              ["/target-pace-running-app/", "Target pace training"],
              ["/walking-app-race-yourself/", "Walking + self-competition"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link
                  to={href}
                  className="inline-block px-3 py-1.5 bg-[rgba(8,12,24,0.85)] border border-gray-700 hover:border-gray-500 rounded-full text-sm text-gray-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* CLOSING CTA */}
        <section
          aria-labelledby="closing-heading"
          className="w-full max-w-3xl mx-auto text-center pb-16"
        >
          <h2
            id="closing-heading"
            className="text-2xl md:text-3xl font-semibold text-white mb-4"
          >
            Ready to race your past self?
          </h2>
          <StoreCTAs source="closing" />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GhostWorkout;
