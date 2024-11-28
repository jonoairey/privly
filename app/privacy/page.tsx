'use client'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-white text-center">
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900">1. Introduction</h2>
                <p className="mt-4 text-gray-600">
                  This Privacy Policy describes how Privly (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, and shares your 
                  information when you use our digital pass services, website, and related applications.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">2. Information We Collect</h2>
                <div className="mt-4 space-y-4 text-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900">2.1 Personal Information</h3>
                  <ul className="list-disc pl-5">
                    <li>Name and contact information</li>
                    <li>Email address and phone number</li>
                    <li>Company information</li>
                    <li>Payment information</li>
                    <li>Device identifiers</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900">2.2 Usage Data</h3>
                  <ul className="list-disc pl-5">
                    <li>Access logs and activity</li>
                    <li>Device and browser information</li>
                    <li>IP address and location data</li>
                    <li>Usage patterns and preferences</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">3. How We Use Your Information</h2>
                <div className="mt-4 space-y-4 text-gray-600">
                  <p>We use your information to:</p>
                  <ul className="list-disc pl-5">
                    <li>Provide and maintain our services</li>
                    <li>Process transactions and send notifications</li>
                    <li>Improve and personalize our services</li>
                    <li>Monitor and analyze usage patterns</li>
                    <li>Prevent fraud and enhance security</li>
                    <li>Communicate with you about our services</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">4. Data Security</h2>
                <p className="mt-4 text-gray-600">
                  We implement appropriate technical and organizational measures to protect your personal information. 
                  However, no method of transmission over the Internet is 100% secure. We strive to protect your data 
                  but cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">5. Data Sharing and Disclosure</h2>
                <div className="mt-4 space-y-4 text-gray-600">
                  <p>We may share your information with:</p>
                  <ul className="list-disc pl-5">
                    <li>Service providers and business partners</li>
                    <li>Legal authorities when required by law</li>
                    <li>Other parties with your consent</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">6. Your Rights</h2>
                <div className="mt-4 space-y-4 text-gray-600">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-5">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to data processing</li>
                    <li>Request data portability</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">7. Contact Information</h2>
                <div className="mt-4 space-y-4 text-gray-600">
                  <p>
                    If you have questions about this Privacy Policy, please contact us at:
                  </p>
                  <p>
                    Email: privacy@privly.com<br />
                    Address: 123 Business Street, Suite 100<br />
                    San Francisco, CA 94111
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">8. Changes to This Policy</h2>
                <p className="mt-4 text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the effective date.
                </p>
              </section>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">Have questions about our privacy policy?</p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
