import Link from 'next/link'
import { Building, Ticket, Gift, Tags, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

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
        <nav className="bg-white shadow-sm fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="flex items-center space-x-2">
                  <Building className="h-8 w-8 text-indigo-600" />
                  <span className="text-2xl font-bold text-indigo-600">Privly</span>
                </Link>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-8">
                <Link href="/event-tickets" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors">
                  <Ticket className="h-4 w-4" />
                  <span>Event Tickets</span>
                </Link>
                <Link href="/access-control" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors">
                  <Building className="h-4 w-4" />
                  <span>Access Control</span>
                </Link>
                <Link href="/rewards" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors">
                  <Gift className="h-4 w-4" />
                  <span>Rewards</span>
                </Link>
                <Link href="/contact" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content with padding for fixed nav */}
        <div className="pt-16">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Building className="h-8 w-8 text-indigo-400" />
                  <span className="text-2xl font-bold">Privly</span>
                </div>
                <p className="text-gray-400">
                  Modernizing digital passes for businesses and their customers.
                </p>
                <div className="flex space-x-4">
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                  <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Solutions</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/event-tickets" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                      <Ticket className="h-4 w-4" />
                      <span>Event Tickets</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/access-control" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                      <Building className="h-4 w-4" />
                      <span>Access Control</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/rewards" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                      <Gift className="h-4 w-4" />
                      <span>Rewards Program</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-gray-400">
                    <Mail className="h-4 w-4" />
                    <span>contact@privly.com</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-400">
                    <Phone className="h-4 w-4" />
                    <span>(555) 123-4567</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>123 Business St, Suite 100</span>
                  </li>
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
