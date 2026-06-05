import React from 'react';
import { Link } from 'react-router-dom';

const GhostWorkoutSupport: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Support
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Ghost Workout — Help and Contact
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6 space-y-8">

            {/* Contact callout */}
            <section className="bg-indigo-50 border-l-4 border-indigo-400 p-5 rounded-md">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Need help? Contact us.</h2>
              <p className="text-gray-700 mb-2">
                Email{' '}
                <a
                  href="mailto:support@hellofavors.com"
                  className="font-semibold text-indigo-700 underline"
                >
                  support@hellofavors.com
                </a>{' '}
                and we'll usually get back to you within 1–2 business days.
              </p>
              <p className="text-gray-600 text-sm">
                For privacy or data-deletion requests, please use{' '}
                <span className="font-medium">privacy@hellofavors.com</span>.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How does Ghost Workout work?
                  </h3>
                  <p className="text-gray-700">
                    Every workout you record becomes a "ghost" you can race on your next outing. Open the app,
                    pick a previous workout from the ghost picker, start a new session, and the app shows you in
                    real time whether you're ahead of or behind your past self — by distance and by time.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Why don't I see a ghost to race?
                  </h3>
                  <p className="text-gray-700">
                    You need at least one completed workout in your history. Record a run or walk first; once
                    it's saved, it'll appear in the ghost picker on your next session. If you've recorded
                    workouts but they aren't appearing, make sure you're signed in to the same account on both
                    sessions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Why does the distance differ from my phone's other fitness apps?
                  </h3>
                  <p className="text-gray-700">
                    Outdoor workouts use GPS, which is accurate to within a few meters but can drift in dense
                    cities or under tree cover. Indoor workouts use your phone's pedometer with a step-length
                    estimate, which is approximate. Different apps may also use slightly different smoothing or
                    distance-source rules, so small differences are normal.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How do I switch between running and walking?
                  </h3>
                  <p className="text-gray-700">
                    Tap the activity-type toggle on the dashboard before you start a workout. You can also let
                    the app auto-detect your activity if you've enabled that option. Ghost matching is
                    activity-aware — a walk ghost won't be offered when you're recording a run, and vice versa.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do I need to keep my screen on during a workout?
                  </h3>
                  <p className="text-gray-700">
                    No. Ghost Workout records workouts in the background. You can lock your phone or switch
                    apps — your route, distance, and ghost comparison will continue updating until you end the
                    workout.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How do I delete my account?
                  </h3>
                  <p className="text-gray-700">
                    You can delete your account from inside the app (<span className="font-medium">Settings → Delete Account</span>),
                    or follow the steps on our <Link to="/delete-account" className="text-indigo-700 underline font-medium">Delete Account</Link>{' '}
                    page. Deletion is permanent and removes all your workout history within 30 days.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Is Ghost Workout free?
                  </h3>
                  <p className="text-gray-700">
                    Yes — recording workouts and racing ghosts is free. A premium subscription unlocks an
                    AI-powered post-workout reflection that summarizes your effort and offers personalized
                    tips. You can cancel anytime from your device's subscription settings.
                  </p>
                </div>
              </div>
            </section>

            {/* Cross-links */}
            <section className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3">More information</h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link to="/privacy-policy" className="text-indigo-700 underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="text-indigo-700 underline">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link to="/delete-account" className="text-indigo-700 underline">Delete Account</Link>
                </li>
                <li>
                  <Link to="/" className="text-indigo-700 underline">Back to home</Link>
                </li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GhostWorkoutSupport;
