// Shared layout for SEO landing pages.
//
// Each landing page wraps its unique copy in this component, which renders:
//   - a per-page <title>, meta description, canonical URL, OG/Twitter tags
//   - a consistent header + StoreCTAs + footer
//   - an internal link back to the homepage so link equity flows correctly
//
// Keep landing-page copy honest. Do not keyword-stuff. Each page should add
// genuine context, not paraphrase the homepage.

import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import StoreCTAs from "@/components/StoreCTAs";
import { SITE_NAME, SITE_URL } from "@/config/store";

export type SeoLandingProps = {
  path: string; // e.g. "/treadmill-ghost-workout-app/"
  title: string; // <title> + og:title — keep under ~60 chars
  description: string; // meta description + og:description — under ~155 chars
  h1: string;
  intro: string;
  // Optional body sections rendered after the intro paragraph.
  sections?: { heading: string; body: React.ReactNode }[];
  // Analytics source for the in-page CTA cluster.
  analyticsSource: string;
  children?: React.ReactNode;
};

const SeoLanding: React.FC<SeoLandingProps> = ({
  path,
  title,
  description,
  h1,
  intro,
  sections,
  analyticsSource,
  children,
}) => {
  const canonical = `${SITE_URL}${path}`;
  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-start text-white font-sans"
      style={{
        // Slightly stronger overlay than the homepage (0.6 vs 0.5) — SEO
        // pages have denser body copy that needs to read against the
        // bright runner/dawn highlights of the painting.
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/futuristic_duel_at_dawn.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta
          property="og:image"
          content={`${SITE_URL}/futuristic_duel_at_dawn.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <main className="flex-grow w-full flex flex-col items-center pt-10 px-4">
        <nav
          aria-label="Breadcrumb"
          className="w-full max-w-3xl mx-auto text-sm text-gray-300 mb-2"
        >
          <Link to="/" className="hover:text-white underline">
            {SITE_NAME}
          </Link>
        </nav>

        <header className="w-full max-w-3xl mx-auto text-center pt-4 pb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
            {h1}
          </h1>
          <p className="mt-5 text-base md:text-lg text-gray-200">
            {intro}
          </p>
          <div className="mt-7">
            <StoreCTAs source={analyticsSource} />
          </div>
          <p className="mt-3 text-sm text-gray-300">
            Core ghost racing is free. Premium Reflection is optional.
          </p>
        </header>

        {sections && sections.length > 0 && (
          <section className="w-full max-w-3xl mx-auto px-2 py-8 space-y-6">
            {sections.map((s) => (
              <article
                key={s.heading}
                className="bg-[rgba(8,12,24,0.85)] backdrop-blur-sm border border-gray-700 rounded-xl p-5"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  {s.heading}
                </h2>
                <div className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {s.body}
                </div>
              </article>
            ))}
          </section>
        )}

        {children}

        <section className="w-full max-w-3xl mx-auto px-2 py-10 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Try {SITE_NAME}
          </h2>
          <StoreCTAs source={`${analyticsSource}:closing`} />
          <p className="mt-6 text-sm text-gray-300">
            <Link to="/" className="underline hover:text-white">
              Back to the {SITE_NAME} homepage
            </Link>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SeoLanding;
