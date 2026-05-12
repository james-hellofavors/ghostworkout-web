import React from 'react';
import { Link } from 'react-router-dom';

const GhostWorkoutPrivacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Last Updated: May 11, 2026
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-8">

              {/* 1. Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Hello Favors, LLC ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use Ghost Workout ("Service"), including our website at ghostworkout.com and our mobile application.
                </p>
                <p className="text-gray-700">
                  Please read this Privacy Policy carefully. By using the Service, you consent to the practices described here.
                </p>
              </section>

              {/* 2. Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We collect the following categories of information:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>
                    <span className="font-semibold">Account Information:</span> When you sign in with Apple or Google, we receive a user identifier and, if provided by your sign-in provider, your name and email address. We do not collect or store passwords.
                  </li>
                  <li>
                    <span className="font-semibold">Fitness and Activity Data:</span> Workout sessions including activity type (run or walk), distance, pace, duration, tracking method (GPS or pedometer), and related performance metrics.
                  </li>
                  <li>
                    <span className="font-semibold">GPS and Location Data:</span> Precise GPS coordinates and route path during active outdoor workout sessions when location services are enabled. On iOS, background location updates are used while an active workout is in progress; these are disabled when the workout ends. We do not collect location data outside of active workout sessions.
                  </li>
                  <li>
                    <span className="font-semibold">Pedometer and Motion Data:</span> Step counts and pedometer-derived distance estimates during indoor workout sessions, using your device's built-in motion sensors.
                  </li>
                  <li>
                    <span className="font-semibold">Ghost and Comparison Data:</span> Prior workout routes and performance data used to enable ghost comparison and replay features.
                  </li>
                  <li>
                    <span className="font-semibold">AI Reflection Data:</span> When you request an AI Reflection (premium), a structured workout summary is sent to our backend and forwarded to our AI provider. See Section 5 for details.
                  </li>
                  <li>
                    <span className="font-semibold">Device and Technical Information:</span> Platform (iOS or Android), device manufacturer, device model, operating system version, app version, and unique device identifiers used for diagnostics and compatibility.
                  </li>
                  <li>
                    <span className="font-semibold">Subscription Entitlement:</span> We receive confirmation of active in-app subscription status from Apple or Google. We do not collect or store payment card details or billing addresses.
                  </li>
                  <li>
                    <span className="font-semibold">Usage Data:</span> App feature usage, session events, and crash reports to help us improve the Service.
                  </li>
                </ul>
              </section>

              {/* 3. How We Collect Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Collect Information</h2>
                <p className="text-gray-700 mb-4">
                  We collect information through:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><span className="font-semibold">Sign-In Providers:</span> Name and email (if available) provided by Apple or Google at sign-in.</li>
                  <li><span className="font-semibold">Workout Recording:</span> GPS tracking during outdoor workouts (when location permission is granted) and pedometer tracking during indoor workouts (when motion permission is granted).</li>
                  <li><span className="font-semibold">App Interaction:</span> Actions you take within the app, including starting workouts, selecting ghosts, and triggering AI Reflection.</li>
                  <li><span className="font-semibold">App Stores:</span> Subscription entitlement status returned by Apple App Store or Google Play after in-app purchase.</li>
                  <li><span className="font-semibold">Automatic Collection:</span> Device information, app version, and diagnostic/crash data.</li>
                </ul>
              </section>

              {/* 4. GPS and Location Data */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. GPS and Location Data</h2>
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold">Collection:</span> We collect precise GPS location data during active outdoor workout sessions only. On iOS, background location access is enabled during an active workout so the route can be recorded continuously even if the app moves to the background; this access is disabled as soon as the workout ends. On Android, location is collected in the foreground during active workouts.
                </p>
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold">Use:</span> GPS data is used to map your route, calculate distance and pace, and enable ghost comparison on future runs of the same or similar route.
                </p>
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold">Storage:</span> GPS routes are stored on our secure servers and associated with your account for as long as your account is active.
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Control:</span> You can revoke location permissions at any time through your device settings. Doing so disables GPS-based workout recording; indoor pedometer workouts are still available.
                </p>
              </section>

              {/* 5. AI Reflection */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. AI Reflection (Premium)</h2>
                <p className="text-gray-700 mb-4">
                  Premium subscribers may request an AI Reflection after completing a workout. This feature uses Anthropic Claude to generate a short, personalized post-workout reflection.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
                  <li>
                    <span className="font-semibold">What is sent:</span> A structured workout summary containing: activity type (run or walk), tracking method (GPS or pedometer), duration, distance, average pace, ghost result type (same route / route variant / indoor comparison / target pace / no ghost), whether the ghost was beaten and by how much, and a brief history of up to 5 recent comparable workouts (date and beat/lost outcome only).
                  </li>
                  <li>
                    <span className="font-semibold">What is NOT sent:</span> Raw GPS coordinates, GPS route point streams, or any personally identifying information beyond what is described above.
                  </li>
                  <li>
                    <span className="font-semibold">Third-party provider:</span> The structured summary is forwarded to Anthropic's API to generate the reflection. Anthropic's privacy policy governs how they handle data submitted through their API.
                  </li>
                  <li>
                    <span className="font-semibold">Storage:</span> AI Reflection outputs are generated on-demand and returned to your device. We do not store the generated reflection text on our servers.
                  </li>
                  <li>
                    <span className="font-semibold">Rate limits:</span> Reflection requests are rate-limited per user per hour to protect service availability.
                  </li>
                </ul>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                  <p className="text-amber-800">
                    AI Reflection outputs are generated by a large language model and may be incomplete or inaccurate. They are for informational and motivational purposes only, not professional medical, coaching, or fitness advice.
                  </p>
                </div>
              </section>

              {/* 6. How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Record and store your workout sessions</li>
                  <li>Enable ghost comparison and replay against your prior workouts</li>
                  <li>Sync your workout history across your devices via your account</li>
                  <li>Verify premium subscription entitlement through Apple or Google</li>
                  <li>Generate AI Reflection on request (premium subscribers)</li>
                  <li>Improve app performance and fix bugs using anonymized diagnostic data</li>
                  <li>Respond to support requests</li>
                  <li>Send important service updates (e.g., changes to Terms or Privacy Policy)</li>
                </ul>
              </section>

              {/* 7. Data Storage and Security */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Storage and Security</h2>
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold">Security measures:</span> We use encryption in transit (HTTPS/TLS) and at rest, access-controlled cloud infrastructure, and Firebase Auth for identity management.
                </p>
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold">Storage location:</span> Your data is stored on servers in the United States (Fly.io infrastructure, backed by Supabase/PostgreSQL).
                </p>
                <p className="text-gray-700">
                  No security system is infallible. We cannot guarantee absolute security of your data.
                </p>
              </section>

              {/* 8. Sharing Your Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Sharing Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell your personal information. We may share your information only as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li><span className="font-semibold">AI Provider (Anthropic):</span> A structured workout summary (as described in Section 5) is forwarded to Anthropic to generate AI Reflection. No raw GPS data is shared.</li>
                  <li><span className="font-semibold">Infrastructure and Service Providers:</span> Cloud hosting, database, and authentication services required to operate the Service (e.g., Fly.io, Supabase, Firebase). These providers process data on our behalf under data processing agreements.</li>
                  <li><span className="font-semibold">App Stores:</span> Subscription purchase confirmation is processed by Apple or Google. We receive entitlement status only.</li>
                  <li><span className="font-semibold">Legal Requirements:</span> When required by law, court order, or governmental authority, or to protect the rights, safety, or property of Hello Favors, LLC, our users, or the public.</li>
                </ul>
              </section>

              {/* 9. Data Retention and Account Deletion */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Retention and Account Deletion</h2>
                <p className="text-gray-700 mb-3">
                  We retain your workout data and account information for as long as your account is active. When you delete your account:
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">How to delete your account</h3>
                  <ul className="list-disc pl-6 space-y-2 text-blue-800">
                    <li><span className="font-medium">In the app:</span> Settings → Delete Account</li>
                    <li><span className="font-medium">On the web:</span> Visit <Link to="/delete-account" className="underline font-medium">ghostworkout.com/delete-account</Link> for step-by-step instructions</li>
                    <li><span className="font-medium">By email:</span> Send a deletion request to <span className="font-medium">privacy@hellofavors.com</span></li>
                  </ul>
                </div>
                <p className="text-gray-700 mb-3">
                  On deletion, your account record and all associated workout routes are marked for removal. A hard purge of your data is completed within 30 days. Your Firebase authentication credentials are also revoked at the time of deletion.
                </p>
                <p className="text-gray-700">
                  We may retain certain information beyond 30 days where required by applicable law, to resolve disputes, enforce our agreements, or for legitimate security and fraud-prevention purposes. Any such retained data will be limited to the minimum necessary.
                </p>
              </section>

              {/* 10. Your Privacy Rights */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Your Privacy Rights</h2>
                <p className="text-gray-700 mb-4">
                  Depending on your jurisdiction, you may have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li><span className="font-semibold">Access:</span> Request a copy of the personal data we hold about you.</li>
                  <li><span className="font-semibold">Correction:</span> Request correction of inaccurate information.</li>
                  <li><span className="font-semibold">Deletion:</span> Request deletion of your account and associated personal data (see Section 9).</li>
                  <li><span className="font-semibold">Portability:</span> Request your workout data in a portable format.</li>
                  <li><span className="font-semibold">Objection or Restriction:</span> Object to or request restriction of certain data processing activities.</li>
                </ul>
                <p className="text-gray-700">
                  To exercise any of these rights, contact us at <span className="font-medium">privacy@hellofavors.com</span>.
                </p>
              </section>

              {/* 11. Children's Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Children's Privacy</h2>
                <p className="text-gray-700">
                  Ghost Workout is not intended for children under 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <span className="font-medium">privacy@hellofavors.com</span> and we will delete it promptly.
                </p>
              </section>

              {/* 12. App Permissions */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. App Permissions</h2>
                <p className="text-gray-700 mb-4">
                  Ghost Workout requests the following device permissions:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                    <p className="text-gray-700 text-sm">Required for GPS-based outdoor workout recording and route mapping. Background location is used on iOS during an active workout only.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Motion &amp; Fitness / Activity Recognition</h4>
                    <p className="text-gray-700 text-sm">Required for step counting and pedometer-based distance estimation during indoor workouts.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Notifications</h4>
                    <p className="text-gray-700 text-sm">Used for optional workout reminders and important service updates. You can disable notifications at any time in device settings.</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold">In-App Purchases:</span> Subscription payments are processed by Apple App Store or Google Play. We receive confirmation of your subscription status but not your payment method or billing details.
                </p>
              </section>

              {/* 13. International Data Transfers */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. International Data Transfers</h2>
                <p className="text-gray-700 mb-4">
                  Your data is stored and processed in the United States. If you are located outside the United States, your information will be transferred to and processed in the U.S. We rely on standard contractual safeguards and service provider agreements to protect data transferred internationally.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">European Union (GDPR)</h4>
                    <p className="text-gray-700 text-sm">EU residents have rights including data access, portability, and erasure. Contact us at privacy@hellofavors.com to exercise these rights.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">California (CCPA)</h4>
                    <p className="text-gray-700 text-sm">California residents have the right to know what personal information we collect, request deletion, and opt out of any sale of personal information. We do not sell personal information.</p>
                  </div>
                </div>
              </section>

              {/* 14. Changes to This Privacy Policy */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy from time to time. Material changes will be communicated through in-app notifications or by updating the "Last Updated" date above. Your continued use of the Service after changes are posted constitutes acceptance of the updated policy.
                </p>
              </section>

              {/* 15. Contact Us */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-20 font-semibold">Email:</span>
                      <span>privacy@hellofavors.com</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-20 font-semibold">Mail:</span>
                      <span>Hello Favors, LLC<br />6469 Almaden Expy. Ste 80 #362<br />San Jose, CA 95120</span>
                    </li>
                  </ul>
                </div>
              </section>

            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/terms-and-conditions" className="text-blue-600 hover:text-blue-800 font-medium">
            View Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GhostWorkoutPrivacy;
