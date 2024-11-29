'use client'
import { 
  Smartphone, 
  Shield, 
  Zap, 
  Building, 
  Ticket,
  Gift,
  Key,
  Clock,
  Cloud,
  Lock
} from 'lucide-react'

export default function AboutSystem() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              The Future of Digital Access
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Transform how you manage access, loyalty, and engagement with NFC-enabled digital passes
            </p>
          </div>
        </div>
      </div>

      {/* System Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Digital Wallet Passes?
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Digital wallet passes represent a paradigm shift in how businesses manage access and engage with customers. By leveraging NFC technology and smartphone ubiquity, organizations can streamline operations while enhancing security and user experience.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Enhanced Security</h3>
              <p className="mt-2 text-gray-600">
                Digital passes employ advanced encryption and dynamic security measures, making them significantly more secure than traditional physical cards or fobs. Each pass contains unique identifiers and can be instantly revoked if needed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Instant Distribution</h3>
              <p className="mt-2 text-gray-600">
                Deploy passes instantly to users' phones. No more waiting for physical cards to be printed and shipped. Updates can be pushed in real-time, ensuring all users have the latest version.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg">
                <Cloud className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Seamless Integration</h3>
              <p className="mt-2 text-gray-600">
                Integrates with existing systems and workflows while providing modern APIs for custom implementations. Works with major mobile wallet platforms including Apple Wallet and Google Pay.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Versatile Applications
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our digital pass system adapts to numerous business needs and scenarios
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {/* Access Control */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Building className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold">Corporate Access Control</h3>
                  <p className="mt-2 text-gray-600">
                    Replace traditional key cards with smartphone-based access control. Manage permissions in real-time, track usage patterns, and enhance security with multi-factor authentication. Perfect for offices, restricted areas, and parking facilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Event Management */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Ticket className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold">Event Access</h3>
                  <p className="mt-2 text-gray-600">
                    Streamline event check-in with digital tickets that can&apos;t be lost or forgotten. Update event details instantly, send notifications, and collect valuable attendance data. Ideal for conferences, concerts, and sporting events.
                  </p>
                </div>
              </div>
            </div>

            {/* Loyalty Programs */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Gift className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold">Customer Loyalty</h3>
                  <p className="mt-2 text-gray-600">
                    Create engaging loyalty programs with digital membership cards. Send personalized offers, track rewards points, and analyze customer behavior. Perfect for retail, hospitality, and service industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Key Benefits
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative p-6 border border-gray-200 rounded-lg hover:border-indigo-500 transition-colors">
              <h3 className="text-lg font-semibold flex items-center">
                <Clock className="w-5 h-5 text-indigo-600 mr-2" />
                Time and Cost Savings
              </h3>
              <p className="mt-2 text-gray-600">
                Eliminate costs associated with physical cards, reduce administrative overhead, and save time with automated distribution and management.
              </p>
            </div>

            <div className="relative p-6 border border-gray-200 rounded-lg hover:border-indigo-500 transition-colors">
              <h3 className="text-lg font-semibold flex items-center">
                <Lock className="w-5 h-5 text-indigo-600 mr-2" />
                Enhanced Security
              </h3>
              <p className="mt-2 text-gray-600">
                Implement dynamic security measures, prevent duplication, and maintain complete control over access rights.
              </p>
            </div>

            <div className="relative p-6 border border-gray-200 rounded-lg hover:border-indigo-500 transition-colors">
              <h3 className="text-lg font-semibold flex items-center">
                <Key className="w-5 h-5 text-indigo-600 mr-2" />
                Flexibility and Control
              </h3>
              <p className="mt-2 text-gray-600">
                Update permissions instantly, customize access levels, and maintain granular control over your system.
              </p>
            </div>

            <div className="relative p-6 border border-gray-200 rounded-lg hover:border-indigo-500 transition-colors">
              <h3 className="text-lg font-semibold flex items-center">
                <Smartphone className="w-5 h-5 text-indigo-600 mr-2" />
                User Convenience
              </h3>
              <p className="mt-2 text-gray-600">
                Provide a modern, convenient experience that leverages technology users already carry with them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
