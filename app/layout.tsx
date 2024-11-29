import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-2xl font-bold text-indigo-600">
                  Privly
                </Link>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-8">
                <Link href="/event-tickets" className="text-gray-600 hover:text-gray-900">Event Tickets</Link>
                <Link href="/access-control" className="text-gray-600 hover:text-gray-900">Access Control</Link>
                <Link href="/rewards" className="text-gray-600 hover:text-gray-900">Rewards</Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
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
        {children}
      </body>
    </html>
  )
}
