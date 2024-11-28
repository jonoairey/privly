'use client'
import { Shield, Key, Smartphone, Clock, Lock, Users, Building, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function AccessControl() {
  const benefits = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade encryption and secure authentication protect your facilities."
    },
    {
      icon: Smartphone,
      title: "Phone-Based Access",
      description: "No more lost keycards or fobs. Access is always available on your phone."
    },
    {
      icon: Clock,
      title: "Real-Time Control",
      description: "Grant or revoke access instantly, manage permissions in real-time."
    }
  ]

  const features = [
    "Instant access management",
    "Multi-location support",
    "Time-based restrictions",
    "Visitor management",
    "Access logs and analytics",
    "Emergency lockdown capability"
  ]

  const securityFeatures = [
    {
      icon: Lock,
      title: "Advanced Encryption",
      description: "End-to-end encryption ensures secure access credentials."
    },
    {
      icon: Users,
      title: "User Management",
      description: "Easily manage permissions for employees and visitors."
    },
    {
      icon: Building,
      title: "Multi-Site Support",
      description: "Control access across multiple buildings and locations."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              Modern Access Control
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Replace outdated physical access systems with secure digital passes built into your phone.
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

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Benefits</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Enterprise-Grade Security
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Security</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Advanced Security Features
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features List */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Complete Access Control
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <span className="ml-3 text-lg text-gray-600">{feature}</span>
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
              Ready to upgrade your access control?
            </h2>
            <p className="mt-4 text-xl text-indigo-100">
              Get started with Privly today and transform your security.
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
