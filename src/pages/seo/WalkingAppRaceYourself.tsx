import React from "react";
import SeoLanding from "@/components/SeoLanding";

const WalkingAppRaceYourself: React.FC = () => (
  <SeoLanding
    path="/walking-app-race-yourself/"
    title="Walking app to race yourself | Ghost Workout"
    description="Ghost Workout is a walking app that turns every walk into a race against your past self — outdoors, indoors, or against a target pace."
    h1="A walking app where you race yourself"
    intro="Ghost Workout works for walks the same way it works for runs. Every walk becomes a ghost you can beat next time — outdoors, indoors, or against a target pace."
    analyticsSource="seo:walking-app-race-yourself"
    sections={[
      {
        heading: "Walks are first-class",
        body: (
          <p>
            Walking is a primary activity in Ghost Workout, not an afterthought.
            Pick "Walk" on the dashboard, record a session, and it's saved as a
            walking ghost you can race later.
          </p>
        ),
      },
      {
        heading: "Race outdoor walks by route",
        body: (
          <p>
            Outdoor walks are tracked by GPS and become route-replay ghosts.
            Re-walk the same loop and Ghost Workout shows you whether you're
            ahead or behind your previous pace at every point.
          </p>
        ),
      },
      {
        heading: "Race indoor walks too",
        body: (
          <p>
            Indoor walks are tracked by step movement, so you can race them on
            a treadmill or around the house. No GPS needed.
          </p>
        ),
      },
    ]}
  />
);

export default WalkingAppRaceYourself;
