import React from "react";
import SeoLanding from "@/components/SeoLanding";

const TargetPaceRunningApp: React.FC = () => (
  <SeoLanding
    path="/target-pace-running-app/"
    title="Target pace running app | Ghost Workout"
    description="Set a target pace and race a steady ghost moving at that pace. Useful for tempo runs and pace training. Free in Ghost Workout."
    h1="A target pace running app"
    intro="Want to run a specific pace? Ghost Workout lets you pick a target pace and race a steady ghost moving at exactly that pace — no past workout required."
    analyticsSource="seo:target-pace-running-app"
    sections={[
      {
        heading: "Set a pace, race it",
        body: (
          <p>
            Open the ghost picker, pick Target Pace, and set the pace you want
            to hold. Start the workout and a virtual ghost moves at that pace
            from the start. You see in real time whether you're ahead of or
            behind the target.
          </p>
        ),
      },
      {
        heading: "Works for runs and walks",
        body: (
          <p>
            Target pace works for both runs and walks. Useful for tempo runs,
            interval pacing, race rehearsal, or just keeping a walk above a
            steady cadence.
          </p>
        ),
      },
      {
        heading: "No subscription required",
        body: (
          <p>
            Target pace ghosts are part of core ghost racing — they're free.
            Premium Reflection is a separate optional add-on for post-workout
            AI reflections.
          </p>
        ),
      },
    ]}
  />
);

export default TargetPaceRunningApp;
