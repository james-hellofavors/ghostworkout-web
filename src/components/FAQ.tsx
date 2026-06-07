// FAQ section + JSON-LD structured data for Google rich results.
//
// Keep answers honest and consistent with the 1.0 PRD: core ghosting is free,
// Premium Reflection is optional/additive, and we only advertise platforms we
// actually ship on. See src/config/store.ts for the iOS availability flag.

import React from "react";
import { Helmet } from "react-helmet-async";
import { IOS_AVAILABLE } from "@/config/store";

type QA = { q: string; a: string };

const baseFaqs: QA[] = [
  {
    q: "What is a ghost workout?",
    a: "A ghost workout is a run or walk where you race a recording of a previous workout. Ghost Workout shows you in real time whether you are ahead of or behind your past self, so every workout has a clear opponent.",
  },
  {
    q: "Can I race a previous run or walk?",
    a: "Yes. Every saved workout becomes a ghost. Pick any past run or walk and Ghost Workout will replay it next to you — by route for outdoor sessions, or by pedometer distance for indoor sessions.",
  },
  {
    q: "Does it work indoors or on a treadmill?",
    a: "Yes. Indoor and treadmill workouts are tracked using your phone's pedometer — no GPS required. You can save indoor ghosts and race them later, on the same platform.",
  },
  {
    q: "Can I use a target pace instead of a previous workout?",
    a: "Yes. If you don't want to race a past workout, you can pick a target pace and Ghost Workout will race you against a steady ghost moving at that pace.",
  },
  {
    q: "Is ghost racing free?",
    a: "Yes. Core ghosting — outdoor route replays, indoor pedometer ghosts, and target-pace ghosts — is completely free. There is no subscription gate on any ghost type.",
  },
  {
    q: "What is Premium Reflection?",
    a: "Premium Reflection is an optional add-on that provides a short AI-generated reflection on your workout after you finish. It is purely additive — you never need it to race a ghost.",
  },
  {
    q: "Does Ghost Workout share my routes publicly?",
    a: "No. Ghost Workout is built for self-competition. Your routes and workouts are stored to your account and used to generate your ghosts — they are not posted to a public feed.",
  },
  {
    q: "Is it available on iPhone and Android?",
    a: IOS_AVAILABLE
      ? "Ghost Workout is available on iPhone and Android. Download links are at the top of the page."
      : "Ghost Workout is live on Android today. The iPhone version is in App Store review and will be available shortly.",
  },
];

const FAQ: React.FC<{ id?: string }> = ({ id = "faq" }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: baseFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="w-full max-w-3xl mx-auto px-4 py-12 text-gray-100"
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <h2
        id={`${id}-heading`}
        className="text-2xl md:text-3xl font-semibold text-center text-white mb-8"
      >
        Frequently asked questions
      </h2>
      <div className="space-y-3">
        {baseFaqs.map((f, i) => (
          <details
            key={i}
            className="bg-[rgba(8,12,24,0.85)] backdrop-blur-sm border border-gray-700 rounded-lg p-4 open:border-gray-500"
          >
            <summary className="cursor-pointer font-medium text-white text-base md:text-lg list-none">
              {f.q}
            </summary>
            <p className="mt-3 text-gray-300 text-sm md:text-base leading-relaxed">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
