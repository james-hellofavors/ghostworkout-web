import React from "react";
import GhostWorkout from "./pages/GhostWorkout/GhostWorkout";
import GhostWorkoutTerms from "./pages/GhostWorkout/GhostWorkoutTerms";
import GhostWorkoutPrivacy from "./pages/GhostWorkout/GhostWorkoutPrivacy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GhostWorkout />} />
        <Route path="/terms-and-conditions" element={<GhostWorkoutTerms />} />
        <Route path="/privacy-policy" element={<GhostWorkoutPrivacy />} />
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
