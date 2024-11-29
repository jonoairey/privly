import './globals.css'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {/* Logo */}
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                Privly
              </Link>

              {/* Navigation Links */}
<div className="hidden md:flex md:items-center md:space-x-8">
  <Link href="/event-tickets" className="text-gray-600 hover:text-gray-900">Event Tickets</Link>
  <Link href="/access-control" className="text-gray-600 hover:text-gray-900">Access Control</Link>
  <Link href="/rewards" className="text-gray-600 hover:text-gray-900">Rewards</Link>
  <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
  {/* Add the login button here */}
  <Link 
    href="/login" 
    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
  >
    Login
  </Link>
</div>
            </div>
          </div>
        </nav>

        <main>
          {children}
        </main>

        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">About Privly</h3>
                <p className="text-gray-400">
                  Modernizing digital passes for businesses and their customers.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Solutions</h3>
                <ul className="space-y-2">
                  <li><Link href="/event-tickets" className="text-gray-400 hover:text-white">Event Tickets</Link></li>
                  <li><Link href="/access-control" className="text-gray-400 hover:text-white">Access Control</Link></li>
                  <li><Link href="/rewards" className="text-gray-400 hover:text-white">Rewards Program</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">
                  Email: contact@privly.com<br />
                  Phone: (555) 123-4567
                </p>
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
