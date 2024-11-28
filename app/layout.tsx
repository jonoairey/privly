export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Privly - Digital Pass Solutions</title>
        <meta name="description" content="Transform your business with smart digital passes" />
      </head>
      <body>
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <a href="/" className="text-2xl font-bold text-indigo-600">
                  Privly
                </a>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-8">
                <a href="#" className="text-gray-600 hover:text-gray-900">Event Tickets</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Access Control</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Rewards</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Solutions</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Event Tickets</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Access Control</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Rewards Program</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-8">
              <p className="text-center text-gray-400">
                © {new Date().getFullYear()} Privly. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
