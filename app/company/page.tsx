'use client'
import { Star, Award, BookOpen, Flag, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CompanyHistory() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Event Director",
      company: "TechConf Events",
      image: "/api/placeholder/64/64",
      content: "Privly transformed how we handle event access. Our attendees love having their tickets right on their phones, and our staff loves the easy validation process."
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "Skyline Properties",
      image: "/api/placeholder/64/64",
      content: "Since implementing Privly's access control system, we've eliminated the headaches of managing physical keycards. The real-time control and security features are outstanding."
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "RetailCo",
      image: "/api/placeholder/64/64",
      content: "Our customer engagement has skyrocketed since implementing Privly's digital rewards program. The personalization options and analytics have been game-changing."
    }
  ]

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Privly was founded with a vision to modernize digital passes and transform how businesses connect with customers."
    },
    {
      year: "2021",
      title: "First Enterprise Client",
      description: "Launched our first enterprise-scale implementation, proving the platform's capability to handle large-scale deployments."
    },
    {
      year: "2022",
      title: "Platform Expansion",
      description: "Expanded our platform to include rewards programs and digital coupons, broadening our impact on customer engagement."
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Extended our services internationally, helping businesses across multiple continents modernize their operations."
    },
    {
      year: "2024",
      title: "Innovation Award",
      description: "Received industry recognition for our innovative approach to digital access and customer engagement solutions."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              Our Journey
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Building the future of digital passes and customer engagement
            </p>
          </div>
        </div>
      </div>

      {/* Company History Timeline */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Our History</h2>
            <p className="mt-4 text-xl text-gray-600">A journey of innovation and growth</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-200" />

            {/* Timeline Events */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2" />
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center z-10">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-1/2 p-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <span className="text-indigo-600 font-bold">{milestone.year}</span>
                      <h3 className="text-xl font-bold mt-2">{milestone.title}</h3>
                      <p className="text-gray-600 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Client Success Stories</h2>
            <p className="mt-4 text-xl text-gray-600">What our clients say about working with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-indigo-600">{testimonial.company}</p>
                  </div>
                </div>
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="inline-block h-5 w-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 italic">&quot;{testimonial.content}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Ready to join our success story?
            </h2>
            <p className="mt-4 text-xl text-indigo-100">
              Transform your business with Privly today.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
