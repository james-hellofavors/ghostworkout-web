import React from 'react';
import { Link } from 'react-router-dom';

const DeleteAccount: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Delete Your Account
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Ghost Workout — Account Deletion Instructions
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6 space-y-8">

            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <p className="text-red-800 font-semibold">
                Account deletion is permanent and cannot be undone. All your workout data, GPS routes, and profile information will be removed within 30 days.
              </p>
            </div>

            {/* Option 1: In-app */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Option 1: Delete in the app (recommended)
              </h2>
              <p className="text-gray-700 mb-4">
                The fastest way to delete your account is directly from the Ghost Workout app:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Open the Ghost Workout app on your device</li>
                <li>Tap the <span className="font-medium">Profile</span> or <span className="font-medium">Settings</span> tab</li>
                <li>Scroll to the <span className="font-medium">Account</span> section</li>
                <li>Tap <span className="font-medium">Delete Account</span></li>
                <li>Confirm the deletion when prompted</li>
              </ol>
              <p className="text-gray-700 mt-4">
                This will immediately deactivate your account and schedule deletion of all associated data within 30 days.
              </p>
            </section>

            {/* Option 2: Email */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Option 2: Request deletion by email
              </h2>
              <p className="text-gray-700 mb-2">
                If you cannot access the app, send a deletion request to:
              </p>
              <p className="text-gray-900 font-medium text-lg mb-4">
                privacy@hellofavors.com
              </p>
              <p className="text-gray-700">
                Please include the email address associated with your Ghost Workout account (the Apple ID or Google account you used to sign in). We will process your request and confirm deletion within 30 days.
              </p>
            </section>

            {/* What gets deleted */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                What happens when you delete your account
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your account profile is immediately deactivated</li>
                <li>All workout sessions and GPS routes associated with your account are scheduled for permanent removal</li>
                <li>Your sign-in credentials (Apple/Google authentication link) are revoked</li>
                <li>All data is permanently deleted within 30 days</li>
                <li>Some information may be retained beyond 30 days where required by law, to resolve disputes, or for legitimate security and fraud-prevention purposes</li>
              </ul>
            </section>

            {/* Important notes */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Important: subscriptions and the app
              </h2>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <ul className="list-disc pl-6 space-y-2 text-amber-800">
                  <li><span className="font-semibold">Deleting the app does not delete your account.</span> You must follow the steps above to delete your account and data.</li>
                  <li><span className="font-semibold">Deleting your account does not automatically cancel an active subscription.</span> Cancel your subscription separately through Apple (Settings → [Your Name] → Subscriptions) or Google Play (Google Play → Subscriptions) to stop future charges.</li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Questions?</h2>
              <p className="text-gray-700">
                Contact us at <span className="font-medium">privacy@hellofavors.com</span> or write to:
              </p>
              <p className="text-gray-700 mt-2">
                Hello Favors, LLC<br />
                6469 Almaden Expy. Ste 80 #362<br />
                San Jose, CA 95120
              </p>
            </section>

          </div>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-sm">
          <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-800 font-medium">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="text-blue-600 hover:text-blue-800 font-medium">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
