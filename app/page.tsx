'use client'
import Link from 'next/link'
import { Building, Ticket, Gift, Tags } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  // Animation states for features
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const features = [
    {
      icon: Ticket,
      title: "Digital Event Tickets",
      description: "Create tickets that your attendees will never lose, built into their phone&apos;s wallet.",
      href: "/event-tickets"
    },
    {
      icon: Building,
      title: "Access Control",
      description: "Replace outdated fobs with phone-based access control for your facilities.",
      href: "/access-control"
    },
    {
      icon: Gift,
      title: "Rewards Program",
      description: "Give your customers the rewards they deserve, without any hassle.",
      href: "/rewards"
    },
    {
      icon: Tags,
      title: "Digital Coupons",
      description: "Deploy modern, trackable coupons that boost engagement and sales.",
      href: "/coupons"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with gradient background */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Business with</span>
              <span className="block text-indigo-200">Smart Digital Passes</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Replace physical cards, tickets, and fobs with secure digital passes that live right in your customers&apos; phones.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Choose the perfect solution for your business needs
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`relative p-6 bg-white rounded-xl shadow-xl transition-all duration-300 ease-in-out ${
                  hoveredFeature === index ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                    <feature.icon className="w-8 h-8 text-indigo-600" />
                    <div className="space-y-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {feature.title}
                      </p>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                      <Link
                        href={feature.href}
                        className="block text-indigo-600 hover:text-indigo-500 font-medium mt-4"
                      >
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-800 to-indigo-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Ready to modernize your business?
            </h2>
            <p className="mt-4 text-xl text-indigo-100">
              Get started with Privly today and join the digital transformation.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

