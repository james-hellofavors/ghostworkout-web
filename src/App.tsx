import React from "react";
import GhostWorkout from "./pages/GhostWorkout/GhostWorkout";
import GhostWorkoutTerms from "./pages/GhostWorkout/GhostWorkoutTerms";
import GhostWorkoutPrivacy from "./pages/GhostWorkout/GhostWorkoutPrivacy";
import GhostWorkoutSupport from "./pages/GhostWorkout/GhostWorkoutSupport";
import DeleteAccount from "./pages/GhostWorkout/DeleteAccount";
import WhatIsAGhostWorkout from "./pages/seo/WhatIsAGhostWorkout";
import RaceYourPastSelfRunningApp from "./pages/seo/RaceYourPastSelfRunningApp";
import RacePreviousRun from "./pages/seo/RacePreviousRun";
import TreadmillGhostWorkout from "./pages/seo/TreadmillGhostWorkout";
import TargetPaceRunningApp from "./pages/seo/TargetPaceRunningApp";
import WalkingAppRaceYourself from "./pages/seo/WalkingAppRaceYourself";
import RouterAnalytics from "./components/RouterAnalytics";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <RouterAnalytics />
      <Routes>
        <Route path="/" element={<GhostWorkout />} />
        <Route path="/terms-and-conditions" element={<GhostWorkoutTerms />} />
        <Route path="/privacy-policy" element={<GhostWorkoutPrivacy />} />
        <Route path="/support" element={<GhostWorkoutSupport />} />
        <Route path="/delete-account" element={<DeleteAccount />} />

        {/* SEO landing pages — each is real and lightweight. Trailing slash
            paths match the canonical URLs declared inside each page. */}
        <Route
          path="/what-is-a-ghost-workout"
          element={<WhatIsAGhostWorkout />}
        />
        <Route
          path="/what-is-a-ghost-workout/"
          element={<WhatIsAGhostWorkout />}
        />
        <Route
          path="/race-your-past-self-running-app"
          element={<RaceYourPastSelfRunningApp />}
        />
        <Route
          path="/race-your-past-self-running-app/"
          element={<RaceYourPastSelfRunningApp />}
        />
        <Route
          path="/running-app-to-race-previous-run"
          element={<RacePreviousRun />}
        />
        <Route
          path="/running-app-to-race-previous-run/"
          element={<RacePreviousRun />}
        />
        <Route
          path="/treadmill-ghost-workout-app"
          element={<TreadmillGhostWorkout />}
        />
        <Route
          path="/treadmill-ghost-workout-app/"
          element={<TreadmillGhostWorkout />}
        />
        <Route
          path="/target-pace-running-app"
          element={<TargetPaceRunningApp />}
        />
        <Route
          path="/target-pace-running-app/"
          element={<TargetPaceRunningApp />}
        />
        <Route
          path="/walking-app-race-yourself"
          element={<WalkingAppRaceYourself />}
        />
        <Route
          path="/walking-app-race-yourself/"
          element={<WalkingAppRaceYourself />}
        />

        <Route
          path="*"
          element={
            <div style={{ textAlign: 'center', padding: '4rem' }}>
              <h1>404 - Page Not Found</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
