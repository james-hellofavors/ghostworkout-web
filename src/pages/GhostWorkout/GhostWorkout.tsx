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
        <title>Ghost Workout – Race Your Past Self & Train Smarter</title>
        <meta
          name="description"
          content="Race your past self. Ghost Workout turns every run and walk into a personal-best showdown — now available on Google Play."
        />
        <meta property="og:title" content="Ghost Workout – Outrun Your Limits" />
        <meta
          property="og:description"
          content="Race your past self. Ghost Workout turns every run and walk into a personal-best showdown — now available on Google Play."
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
           Ghost Workout
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
            Ghost Workout helps you race your past performances and elevate your fitness journey.
          </p>

          {/* --- Download CTA --- */}
          <div className="my-8 flex flex-col items-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.hellofavors.ghostworkout"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Ghost Workout on Google Play"
              className="inline-flex items-center gap-3 px-6 py-3 bg-black hover:bg-gray-900 border border-gray-600 rounded-lg shadow-lg transition transform hover:-translate-y-0.5"
            >
              {/* Google Play triangle mark */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                aria-hidden="true"
              >
                <path fill="#EA4335" d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1z" />
                <path fill="#FBBC04" d="M104.6 499 325.3 277.7l59.6 59.6L104.6 499z" />
                <path fill="#4285F4" d="m385.4 337.3-59.7-59.7L499 256 385.4 337.3z" />
                <path fill="#34A853" d="M104.6 13v486l220.7-221.3-220.7-264.7z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-xs text-gray-300">GET IT ON</span>
                <span className="block text-lg font-semibold text-white">Google Play</span>
              </span>
            </a>
          </div>
          {/* --- End Download CTA --- */}


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
              <p className="text-sm md:text-base font-medium">AI Reflection (Sub)</p>
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