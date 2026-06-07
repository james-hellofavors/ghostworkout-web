import React from "react";
import SeoLanding from "@/components/SeoLanding";

const TreadmillGhostWorkout: React.FC = () => (
  <SeoLanding
    path="/treadmill-ghost-workout-app/"
    title="Treadmill ghost workout app | Ghost Workout"
    description="Treadmill and indoor workouts work in Ghost Workout — race indoor ghosts by pedometer distance, no GPS required."
    h1="A ghost workout app for the treadmill"
    intro="GPS doesn't work indoors. Ghost Workout uses your phone's pedometer to track treadmill and indoor sessions, so you can race indoor ghosts the same way you race outdoor ones."
    analyticsSource="seo:treadmill-ghost-workout-app"
    sections={[
      {
        heading: "Pedometer-based indoor tracking",
        body: (
          <p>
            Indoor workouts in Ghost Workout are tracked by step movement.
            Distance is estimated from your steps — no GPS, no Bluetooth pod
            required. The active screen shows distance, pace and elapsed time
            using the same layout as outdoor sessions.
          </p>
        ),
      },
      {
        heading: "Indoor ghosts work just like outdoor ghosts",
        body: (
          <p>
            Save an indoor workout and it becomes an indoor ghost. Next time
            you're on the treadmill, pick that ghost and race it — Ghost
            Workout shows you the same live ahead/behind feedback you'd see
            outdoors, but compared by distance instead of by route.
          </p>
        ),
      },
      {
        heading: "Same-platform indoor ghosts",
        body: (
          <p>
            For accuracy, indoor (pedometer) ghosts can be raced on the same
            platform that recorded them — iPhone ghosts on iPhone, Android
            ghosts on Android. Outdoor GPS ghosts work across platforms.
          </p>
        ),
      },
    ]}
  />
);

export default TreadmillGhostWorkout;
