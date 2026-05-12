// src/pages/GhostWorkout/GhostWorkout.tsx
import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer"; // Adjust path if needed

const GhostWorkout: React.FC = () => {
  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-start text-white font-sans"
      style={{
        backgroundImage: "url('/futuristic_duel_at_dawn.png')", // Use the specified background
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Optional: makes the background stay fixed during scroll
      }}
    >
      <Helmet>
        {/* Updated SEO and OG Tags for GhostWorkout */}
        <title>GhostWorkout – Race Your Past Self & Train Smarter</title>
        <meta
          name="description"
          content="Improve your running and walking workouts by racing your ghost. Get personalized AI fitness coaching with a subscription. Coming soon!"
        />
        <meta property="og:title" content="GhostWorkout – Outrun Your Limits" />
        <meta
          property="og:description"
          content="The ultimate fitness app to track workouts, race your personal best 'ghost', and get AI-powered training advice. Launching soon!"
        />
        {/* Update URL and Image when available */}
        <meta property="og:url" content="https://ghostworkout.com" /> {/* Placeholder URL */}
        <meta property="og:image" content="https://ghostworkout.com/GhostWorkout_Banner_1200x630.jpg" /> {/* Placeholder Image */}
        <meta name="twitter:card" content="https://ghostworkout.com/GhostWorkout_Banner_1200x630.jpg" /> {/* Placeholder Image */}
      </Helmet>

      {/* Main content area - uses flex-grow to push footer down */}
      <div className="flex-grow w-full flex flex-col items-center pt-10 px-4">

        {/* Title/Logo - Using text as placeholder, replace with img if you have a logo */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center my-8 sm:my-12 text-shadow-lg"> {/* Added text shadow for better readability */}
           GhostWorkout
        </h1>
        {/* If using an image logo instead:
        <img
          src="/GhostWorkout_Title.png" // Replace with your actual logo path
          alt="GhostWorkout Title"
          className="block mt-10 mb-5 mx-auto max-w-[80%] md:max-w-md lg:max-w-lg" // Adjusted max-width
        />
        */}

        {/* Central container mimicking CashGeo's app-download-container */}
        <div className="w-full max-w-xl md:max-w-2xl mx-auto p-6 md:p-8 my-8 text-center bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl text-gray-100 border border-gray-700"> {/* Adjusted background for contrast and blur */}

          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Ready to Outrun Your Limits?
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-6">
            GhostWorkout helps you race your past performances and elevate your fitness journey.
          </p>

          {/* --- Coming Soon Banner --- */}
          <div className="my-6 py-4 px-6 bg-gradient-to-r from-purple-600/80 via-indigo-600/80 to-blue-600/80 border border-indigo-400 rounded-lg shadow-md">
            <p className="text-xl md:text-2xl font-bold text-white animate-pulse"> {/* Added pulse animation */}
              🚀 COMING SOON! 🚀
            </p>
            <p className="text-base text-indigo-100 mt-2">
              Get ready to challenge your ghost on iOS & Android.
            </p>
            {/* Optional: Add an email signup form here later if desired */}
          </div>
          {/* --- End Coming Soon Banner --- */}


          {/* App Features - Adapted for GhostWorkout */}
          <div className="flex flex-col sm:flex-row justify-around my-8 flex-wrap gap-4 text-gray-200">
            <div className="flex-1 min-w-[150px] m-2">
              <span className="text-3xl md:text-4xl block mb-2" role="img" aria-label="Ghost Icon">👻</span>
              <p className="text-sm md:text-base font-medium">Race Your Ghost PBs</p>
            </div>
            <div className="flex-1 min-w-[150px] m-2">
              <span className="text-3xl md:text-4xl block mb-2" role="img" aria-label="Runner Icon">🏃‍♀️</span>
              <p className="text-sm md:text-base font-medium">Track Walks & Runs</p>
            </div>
            <div className="flex-1 min-w-[150px] m-2">
              <span className="text-3xl md:text-4xl block mb-2" role="img" aria-label="Chat Bubble Icon">💬</span>
              <p className="text-sm md:text-base font-medium">AI Fitness Coach (Sub)</p>
            </div>
          </div>

          {/* Final CTA Text */}
          <p className="font-semibold text-base md:text-lg mt-6 text-white">
            Prepare to chase your better self!
          </p>
        </div>
      </div> {/* End main content area */}

      {/* Footer */}
      <Footer />
    </div> // End container div
  );
};

export default GhostWorkout;