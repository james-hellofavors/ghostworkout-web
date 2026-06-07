import React from "react";
import SeoLanding from "@/components/SeoLanding";

const RaceYourPastSelfRunningApp: React.FC = () => (
  <SeoLanding
    path="/race-your-past-self-running-app/"
    title="Race your past self — running app | Ghost Workout"
    description="Ghost Workout is a running app built around one idea: race your past self. Every run becomes a ghost you can beat next time."
    h1="A running app built to race your past self"
    intro="Most running apps track your workout. Ghost Workout turns it into a race against the person who did it last time."
    analyticsSource="seo:race-your-past-self-running-app"
    sections={[
      {
        heading: "Self-competition, not social competition",
        body: (
          <p>
            Ghost Workout doesn't post your runs to a public feed. There are no
            followers, kudos, or city leaderboards. The opponent is always
            you — specifically, a previous you.
          </p>
        ),
      },
      {
        heading: "Three ways to race yourself",
        body: (
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Route replay.</strong> Re-run the same outdoor route and
              race the GPS ghost of your previous attempt.
            </li>
            <li>
              <strong>Pedometer replay.</strong> Race an indoor or treadmill
              workout by distance, using your phone's pedometer.
            </li>
            <li>
              <strong>Target pace.</strong> No past workout? Pick a pace and
              race a steady ghost moving at that pace.
            </li>
          </ul>
        ),
      },
      {
        heading: "Free to race",
        body: (
          <p>
            Every ghost type is free. There is no subscription gate on the core
            ghost-racing experience. Premium Reflection is a small optional
            add-on for AI workout reflections — never required.
          </p>
        ),
      },
    ]}
  />
);

export default RaceYourPastSelfRunningApp;
