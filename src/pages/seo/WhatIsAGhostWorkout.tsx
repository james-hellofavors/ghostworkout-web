import React from "react";
import SeoLanding from "@/components/SeoLanding";

const WhatIsAGhostWorkout: React.FC = () => (
  <SeoLanding
    path="/what-is-a-ghost-workout/"
    title="What is a ghost workout? — Ghost Workout"
    description="A ghost workout is a run or walk where you race a recording of a previous workout. Here's how Ghost Workout uses ghosts to make self-competition simple."
    h1="What is a ghost workout?"
    intro="A ghost workout is a workout where you race a replay of one of your previous workouts. Every saved run or walk becomes a ghost you can race next time."
    analyticsSource="seo:what-is-a-ghost-workout"
    sections={[
      {
        heading: "The simple definition",
        body: (
          <p>
            A ghost workout is any session where the app replays a past workout
            next to you in real time. As you move, you can see whether you're
            ahead of or behind that past version of yourself — and the goal is
            to beat it.
          </p>
        ),
      },
      {
        heading: "How Ghost Workout makes ghosts",
        body: (
          <p>
            Every workout you save in Ghost Workout becomes a ghost
            automatically. Outdoor runs and walks are saved as GPS routes you
            can race by location; indoor workouts are saved as pedometer
            sessions you can race by distance. You can also pick a target pace
            and race a steady ghost moving at that pace instead.
          </p>
        ),
      },
      {
        heading: "Why race a ghost?",
        body: (
          <p>
            A ghost gives you a real, specific opponent — your past self —
            without needing other people, leaderboards, or a coach. It turns
            "go for a run" into "beat last Tuesday's run", which is usually a
            lot more motivating.
          </p>
        ),
      },
    ]}
  />
);

export default WhatIsAGhostWorkout;
