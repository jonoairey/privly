'use client'
import { Shield, Users, Zap, Award } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the security and privacy of your data with enterprise-grade encryption and protection."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our solutions are built around real customer needs and feedback to deliver maximum value."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously evolve our technology to stay ahead of industry trends and needs."
    },
    {
      icon: Award,
      title: "Quality",
      description: "We maintain the highest standards in our technology and customer service."
    }
  ]

  const stats = [
    { value: "50+", label: "Enterprise Clients" },
    { value: "1M+", label: "Digital Passes Created" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              About Privly
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Transforming how businesses connect with their customers through modern digital solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              To revolutionize how businesses manage access, rewards, and customer engagement by providing secure, 
              user-friendly digital solutions that enhance both business operations and customer experience.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl font-extrabold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-indigo-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Approach
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with user-centered design to create solutions that are both powerful 
              and easy to use. Our team of experts works closely with each client to ensure successful implementation 
              and ongoing support.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Ready to get started?
            </h2>
            <p className="mt-4 text-xl text-indigo-100">
              Join the digital transformation with Privly today.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
