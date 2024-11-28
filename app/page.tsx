'use client'
import { useState } from 'react'
import Link from 'next/link'
import { 
  Building, 
  Ticket, 
  Gift, 
  Tags, 
  Users, 
  Shield, 
  Zap, 
  Star,
  ArrowRight,
  CheckCircle 
} from 'lucide-react'

export default function Home() {
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

  const benefits = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade encryption and secure authentication protect your data."
    },
    {
      icon: Zap,
      title: "Instant Updates",
      description: "Real-time updates and notifications keep everyone informed."
    },
    {
      icon: Users,
      title: "Easy Management",
      description: "Intuitive dashboard for managing all your digital passes."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Event Director",
      company: "TechConf",
      content: "Switching to Privly was the best decision we made. Our attendees love it!",
      image: "/api/placeholder/48/48"
    },
    {
      name: "Michael Chen",
      role: "Property Manager",
      company: "Skyline Corp",
      content: "Access control has never been easier. Highly recommended!",
      image: "/api/placeholder/48/48"
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section with animated gradient background */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
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

      {/* Features Section with hover effects */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Solutions</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="relative p-6 bg-white rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none">
                  <div className="flex items-center">
                    <feature.icon className="h-8 w-8 text-indigo-600" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        {feature.description}
                      </p>
                      <Link
                        href={feature.href}
                        className="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-500"
                      >
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section with icons */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Choose Privly?
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-indigo-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">&quot;{testimonial.content}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section with gradient background */}
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
    </main>
  )
}

