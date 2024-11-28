export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block">Transform Your Business with</span>
          <span className="block text-indigo-600">Smart Digital Passes</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
          Replace physical cards, tickets, and fobs with secure digital passes that live right in your customers' phones.
        </p>
        <div className="mt-5">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Our Solutions
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Event Tickets */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Digital Event Tickets</h3>
              <p className="text-gray-600">
                Create tickets that your attendees will never lose, built into their phone's wallet.
              </p>
            </div>

            {/* Access Control */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Access Control</h3>
              <p className="text-gray-600">
                Replace outdated fobs with phone-based access control for your facilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
