import React from 'react';
import { Link } from 'react-router-dom';

const GhostWorkoutTerms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Terms of Service
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
                  Welcome to Ghost Workout ("Service"). These Terms of Service ("Terms") govern your use of our Service operated by Hello Favors, LLC ("we," "us," or "our"), including our website at ghostworkout.com and our mobile application.
                </p>
                <p className="text-gray-700">
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-700 mb-4">
                  Ghost Workout is a fitness tracking platform that allows you to track, monitor, and analyze your running and walking workouts. Our Service includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>GPS tracking of your workout routes and performance metrics</li>
                  <li>Storage and analysis of your workout data</li>
                  <li>AI-powered chat functionality for fitness advice and insights</li>
                  <li>Progress tracking and fitness analytics</li>
                  <li>Social features to connect with other fitness enthusiasts</li>
                </ul>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                  <p className="text-amber-800">
                    <span className="font-semibold">Important Notice:</span> The information and advice provided through our Service is for informational purposes only and does not constitute professional medical or fitness advice. Always consult with qualified healthcare professionals before beginning any exercise program.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
                <p className="text-gray-700 mb-4">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
                </p>
                <p className="text-gray-700">
                  You are responsible for safeguarding your account credentials and for any activities under your account. You agree not to disclose your login information to any third party. You must notify us immediately upon becoming aware of any unauthorized use of your account.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Location Data and GPS Tracking</h2>
                <p className="text-gray-700 mb-4">
                  To provide core functionality, Ghost Workout collects and processes your location data, including GPS coordinates during workouts. By using our Service, you consent to:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Data Collection</h4>
                    <ul className="list-disc pl-4 space-y-1 text-blue-800 text-sm">
                      <li>Collection of precise location data during active workout sessions</li>
                      <li>Storage of GPS routes and workout paths on our secure servers</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Data Usage</h4>
                    <ul className="list-disc pl-4 space-y-1 text-green-800 text-sm">
                      <li>Use of location data to generate fitness metrics and analytics</li>
                      <li>Sharing of route information with our AI chat service for contextual fitness advice</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700">
                  You can control location permissions through your device settings. Disabling location services may limit the functionality of our Service. We do not track your location when the app is not actively being used for workouts.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Subscription and Billing</h2>
                <p className="text-gray-700 mb-4">
                  Some features of Ghost Workout are available through subscription plans offered via:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 text-sm font-semibold">1</span>
                      </span>
                      In-App Purchases on mobile platforms (iOS App Store, Google Play Store)
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 text-sm font-semibold">2</span>
                      </span>
                      Subscriptions managed through platform billing systems
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 text-sm font-semibold">3</span>
                      </span>
                      Direct billing through our website
                    </li>
                  </ul>
                </div>
                <p className="text-gray-700 mb-4">
                  You will be billed in advance on a recurring basis. Subscription management, including cancellations, may be handled through the respective app store or our website. Refund policies are governed by the platform's terms (Apple App Store, Google Play Store) or our refund policy for direct subscriptions.
                </p>
                <p className="text-gray-700">
                  We reserve the right to change subscription fees with reasonable notice.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party AI Services</h2>
                <p className="text-gray-700 mb-4">
                  Our chat functionality utilizes third-party Large Language Model (LLM) APIs to provide fitness insights and advice. When you use our chat feature:
                </p>
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                  <ul className="list-disc pl-6 space-y-2 text-purple-800">
                    <li>Your messages and workout data may be sent to third-party AI providers</li>
                    <li>GPS route information may be shared with AI services to provide contextual advice</li>
                    <li>We implement security measures to protect your data during transmission</li>
                    <li>Third-party providers may have their own terms of service and privacy policies</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  By using our chat features, you consent to the processing of your data by these third-party AI services.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Content and Data Ownership</h2>
                <p className="text-gray-700 mb-4">
                  You maintain ownership of your workout data, GPS routes, and user-generated content. However, you grant us a worldwide, non-exclusive, royalty-free license to:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-green-800">Store and process your workout data to provide our services</span>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-green-800">Analyze your data to improve our platform and features</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-green-800">Share anonymized, aggregated data for research and development</span>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-green-800">Use your data as necessary to provide AI-powered insights</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  You represent and warrant that you have the right to share any content you upload and that it doesn't violate any third-party rights or applicable laws.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Prohibited Uses</h2>
                <p className="text-gray-700 mb-4">
                  You agree not to use Ghost Workout to:
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <ul className="list-disc pl-6 space-y-2 text-red-800">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Attempt to interfere with or disrupt our services</li>
                    <li>Access other users' accounts or data without authorization</li>
                    <li>Upload false, misleading, or harmful information</li>
                    <li>Use our services for commercial purposes without authorization</li>
                    <li>Attempt to bypass or disable our security measures</li>
                    <li>Share dangerous or harmful fitness advice through our chat features</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Security and Privacy</h2>
                <p className="text-gray-700 mb-4">
                  We implement industry-standard security measures to protect your personal information and workout data. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.
                </p>
                <p className="text-gray-700">
                  For detailed information about how we collect, use, and protect your data, please review our Privacy Policy.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  In no event shall Hello Favors, LLC be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="list-disc pl-4 space-y-2 text-gray-700 text-sm">
                      <li>Loss of data or workout information</li>
                      <li>Injuries resulting from fitness activities tracked by our Service</li>
                      <li>Decisions made based on AI-generated fitness advice</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="list-disc pl-4 space-y-2 text-gray-700 text-sm">
                      <li>Inaccuracies in GPS tracking or fitness metrics</li>
                      <li>Service disruptions or technical issues</li>
                      <li>Any other intangible losses</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <p className="text-red-800">
                    <span className="font-semibold">Fitness Disclaimer:</span> You acknowledge that physical exercise involves inherent risks. You assume full responsibility for your fitness activities. Always warm up properly and stop exercising if you feel pain or discomfort.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
                <p className="text-gray-700 mb-4">
                  We may terminate or suspend your account immediately, without prior notice, for any violation of these Terms.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                  <p className="text-blue-800 mb-3">
                    You may delete your account at any time through the mobile app or website. For details on how to delete your account and what happens to your data, please see our Privacy Policy.
                  </p>
                </div>
                <p className="text-gray-700 mb-4">
                  Upon termination, you may:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Export your workout data within 30 days of termination</li>
                  <li>Retain access to previously purchased services until expiration</li>
                  <li>Contact us to delete your data permanently if desired</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
                <p className="text-gray-700 mb-4">
                  These Terms shall be governed by the laws of the State of California, United States, without regard to conflict of law provisions.
                </p>
                <p className="text-gray-700">
                  Any disputes arising from these Terms or your use of Ghost Workout shall be subject to the exclusive jurisdiction of the courts in San Jose, California.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We may modify these Terms at any time. Material changes will be communicated through:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 2L3 7v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7l-7-5zM9 17H7v-3h2v3zm4 0h-2v-3h2v3zm-3-5H8v-2h2v2zm4 0h-2v-2h2v2z"/>
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">In-app notifications</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118L10 12.118 2 8.118V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">Email notifications to registered users</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">Website announcements</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  We will provide at least 30 days' notice for material changes. Your continued use of the Service after changes take effect constitutes acceptance of the new Terms.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-20 font-semibold">Email:</span>
                      <span>legal@hellofavors.com</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-20 font-semibold">Web:</span>
                      <Link to="/contact" className="text-blue-600 hover:text-blue-800 underline">
                        Contact page
                      </Link>
                    </li>
                    <li className="flex items-start">
                      <span className="w-20 font-semibold">Mail:</span>
                      <span>Hello Favors, LLC<br />6469 Almaden Expy. Ste80 #362<br />San Jose, CA 95120</span>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/privacy" className="text-blue-600 hover:text-blue-800 font-medium">
            View Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GhostWorkoutTerms;