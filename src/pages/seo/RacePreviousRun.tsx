import React from "react";
import SeoLanding from "@/components/SeoLanding";

const RacePreviousRun: React.FC = () => (
  <SeoLanding
    path="/running-app-to-race-previous-run/"
    title="Running app to race your previous run | Ghost Workout"
    description="Ghost Workout lets you race a replay of any previous run or walk. Pick a saved workout, start a session, and see live ahead/behind feedback."
    h1="A running app to race a previous run"
    intro="If you've ever wanted to literally race your last run, Ghost Workout does exactly that — pick a previous workout and race its ghost the next time you head out."
    analyticsSource="seo:race-previous-run"
    sections={[
      {
        heading: "Pick any previous workout",
        body: (
          <p>
            Open the ghost picker, choose a saved run or walk, and start.
            Outdoor sessions race by GPS route; indoor sessions race by
            pedometer distance.
          </p>
        ),
      },
      {
        heading: "See where you're winning, live",
        body: (
          <p>
            During the race you see a live ahead/behind delta — how far ahead
            of or behind your previous self you are right now, in feet and in
            seconds. Same Route, Route Variant, and New Route states are
            classified for you at the end.
          </p>
        ),
      },
      {
        heading: "Get a clear result",
        body: (
          <p>
            When you finish, Ghost Workout shows whether you beat the specific
            ghost you raced, plus shared-section comparison metrics and splits
            so you can see exactly where you gained or lost.
          </p>
        ),
      },
    ]}
  />
);

export default RacePreviousRun;
