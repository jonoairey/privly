export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Business with</span>
              <span className="block text-indigo-200">Smart Digital Passes</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Replace physical cards, tickets, and fobs with secure digital passes that live right in your customers' phones.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Solutions for Modern Businesses
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to modernize your customer experience
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Digital Event Tickets</h3>
              <p className="text-gray-600 mb-4">
                Create tickets that your attendees will never lose, built into their phone's wallet.
              </p>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-500">
                Learn more →
              </a>
            </div>
            <div className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Access Control</h3>
              <p className="text-gray-600 mb-4">
                Replace outdated fobs with phone-based access control for your facilities.
              </p>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-500">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Ready to modernize your business?
            </h2>
            <p className="mt-4 text-xl text-indigo-100">
              Get started with Privly today and join the digital transformation.
            </p>
            <div className="mt-8">
              <a href="#" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

