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
            Last Updated: May 12, 2025
          </p>
        </div>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Hello Favors, LLC ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when you use Ghost Workout ("Service"), including our website at ghostworkout.com and our mobile application.
                </p>
                <p className="text-gray-700">
                  Please read this Privacy Policy carefully before using our Service. By using the Service, you consent to the practices described in this policy.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We collect several types of information from and about users of our Service, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><span className="font-semibold">Personal Information:</span> Name, email address, phone number, and billing information for subscriptions.</li>
                  <li><span className="font-semibold">Account Information:</span> Username, password (encrypted), profile information, and preferences.</li>
                  <li><span className="font-semibold">Fitness and Activity Data:</span> Workout sessions, distance, pace, duration, calories burned, and other fitness metrics.</li>
                  <li><span className="font-semibold">Location Data:</span> GPS coordinates and route information during active workouts when location services are enabled.</li>
                  <li><span className="font-semibold">Chat Data:</span> Conversations with our AI-powered chat service, including messages you send and receive.</li>
                  <li><span className="font-semibold">Device Information:</span> Operating system, device model, app version, and unique device identifiers.</li>
                  <li><span className="font-semibold">Usage Data:</span> How you interact with our app, features used, session duration, and crash reports.</li>
                  <li><span className="font-semibold">Subscription Data:</span> Information about your in-app purchases and subscription status.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Collect Information</h2>
                <p className="text-gray-700 mb-4">
                  We collect information through:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><span className="font-semibold">Direct Input:</span> When you create an account, set up your profile, or enter workout data.</li>
                  <li><span className="font-semibold">Automatic Collection:</span> GPS tracking during workouts (when enabled), app usage analytics, and device information.</li>
                  <li><span className="font-semibold">Permissions:</span> Location services, camera (for profile pictures), and other permissions you grant to our app.</li>
                  <li><span className="font-semibold">Third-Party Services:</span> App stores for subscription management, authentication services, and analytics providers.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. GPS and Location Data</h2>
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold">Collection:</span> We collect precise location data during active workout sessions when you have enabled location services. We do not track your location when the app is not actively being used for workouts.
                </p>
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold">Use:</span> Location data is used to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-3">
                  <li>Map your workout routes</li>
                  <li>Calculate distance, pace, and elevation</li>
                  <li>Provide location-based fitness insights through our AI chat service</li>
                  <li>Help you discover new running routes</li>
                </ul>
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold">Storage:</span> GPS routes are stored on our secure servers and associated with your account.
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Control:</span> You can disable location tracking through your device settings, though this will limit core functionality.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party AI Services</h2>
                <p className="text-gray-700 mb-4">
                  When you use our chat functionality, we share certain information with third-party AI providers to deliver personalized fitness advice:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li><span className="font-semibold">Data Shared:</span> Your messages, workout data, and relevant GPS route information</li>
                  <li><span className="font-semibold">Purpose:</span> To provide contextual fitness insights and advice based on your activity patterns</li>
                  <li><span className="font-semibold">Security:</span> Data is transmitted securely using encryption protocols</li>
                  <li><span className="font-semibold">Third-Party Policies:</span> AI providers have their own privacy policies governing how they handle data</li>
                </ul>
                <p className="text-gray-700">
                  You can disable the AI chat feature in settings if you prefer not to share data with third-party AI services.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Track and analyze your fitness activities and progress</li>
                  <li>Provide personalized workout recommendations and insights</li>
                  <li>Maintain your workout history and statistics</li>
                  <li>Process subscription payments through app stores</li>
                  <li>Offer location-based features and route recommendations</li>
                  <li>Improve our app's performance and functionality</li>
                  <li>Provide customer support and respond to your inquiries</li>
                  <li>Send you important updates about our service</li>
                  <li>Ensure the security and stability of our platform</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Storage and Security</h2>
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold">Security Measures:</span> We implement industry-standard security measures including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure cloud storage with access controls</li>
                  <li>Regular security audits and updates</li>
                  <li>Employee access restrictions and training</li>
                </ul>
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold">Data Retention:</span> We retain your data for as long as your account is active or as needed to provide services. GPS routes and workout data are kept until you delete them or close your account.
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Location:</span> Your data is stored on secure servers in the United States.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Sharing Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li><span className="font-semibold">Third-Party AI Services:</span> Workout data and GPS routes are shared with AI providers for chat functionality.</li>
                  <li><span className="font-semibold">Service Providers:</span> Cloud storage providers, analytics services, and customer support tools.</li>
                  <li><span className="font-semibold">App Stores:</span> Subscription information is shared with Apple/Google for in-app purchase processing.</li>
                  <li><span className="font-semibold">Legal Requirements:</span> When required by law, court order, or to protect our rights and safety.</li>
                  <li><span className="font-semibold">Emergency Situations:</span> We may share location data with emergency services if there's an imminent threat to safety.</li>
                </ul>
                <p className="text-gray-700">
                  We do not sell your personal information to third parties.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Your Privacy Rights</h2>
                <p className="text-gray-700 mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li><span className="font-semibold">Access:</span> Request copies of your personal data and workout information.</li>
                  <li><span className="font-semibold">Rectification:</span> Correct inaccurate or incomplete information.</li>
                  <li><span className="font-semibold">Erasure:</span> Request deletion of your personal data and GPS routes.</li>
                  <li><span className="font-semibold">Data Portability:</span> Export your workout data in a common format.</li>
                  <li><span className="font-semibold">Restriction:</span> Limit how we process your information.</li>
                  <li><span className="font-semibold">Objection:</span> Object to certain types of data processing.</li>
                </ul>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">How to Delete Your Account:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-blue-800">
                    <li>In the mobile app: Go to Profile → Settings → Delete Account</li>
                    <li>Contact us directly using the information below</li>
                  </ul>
                  <p className="text-blue-800 mt-3">
                    When you delete your account, we will remove your personal information, GPS routes, and workout data within 30 days. Some information may be retained for legal or security purposes as required by law.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
                <p className="text-gray-700">
                  Ghost Workout is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Mobile App Specific Privacy</h2>
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold">App Permissions:</span> Our app requests the following permissions:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                    <p className="text-gray-700 text-sm">To track workouts and map routes</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Motion & Fitness</h4>
                    <p className="text-gray-700 text-sm">To count steps and detect activities</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Camera</h4>
                    <p className="text-gray-700 text-sm">For profile pictures (optional)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Notifications</h4>
                    <p className="text-gray-700 text-sm">For workout reminders and app updates</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold">In-App Purchases:</span> Subscription payments are processed through Apple App Store or Google Play Store. We receive confirmation of payment but not your payment method details.
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Analytics:</span> We use mobile analytics tools to understand app performance and usage patterns. This data is anonymized and aggregated.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. International Data Transfers</h2>
                <p className="text-gray-700 mb-4">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during international transfers, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Contractual obligations with service providers</li>
                  <li>Data processing agreements compliant with applicable laws</li>
                  <li>Industry-standard security measures</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of changes through:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>In-app notifications for material changes</li>
                  <li>Email notifications to registered users</li>
                  <li>Updates posted on our website</li>
                </ul>
                <p className="text-gray-700">
                  Your continued use of the Service after changes are posted constitutes acceptance of the updated policy.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Your Location and Applicable Laws</h2>
                <p className="text-gray-700 mb-4">
                  Depending on your location, additional privacy rights may apply under local laws such as:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">European Union</h4>
                    <p className="text-gray-700 text-sm">GDPR rights including data portability and the right to be forgotten</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">California</h4>
                    <p className="text-gray-700 text-sm">CCPA rights including the right to know and right to delete</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Other Jurisdictions</h4>
                    <p className="text-gray-700 text-sm">Local privacy laws that may provide additional protections</p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy or want to exercise your rights, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-20 font-semibold">Email:</span>
                      <span>privacy@hellofavors.com</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-20 font-semibold">Web:</span>
                      <Link to="/contact" className="text-blue-600 hover:text-blue-800 underline">
                        Contact page
                      </Link>
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
          <Link to="/terms" className="text-blue-600 hover:text-blue-800 font-medium">
            View Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GhostWorkoutPrivacy;