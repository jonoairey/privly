'use client'
import { Gift, Zap, Target, BarChart, Star, Trophy, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function RewardsProgram() {
  const benefits = [
    {
      icon: Zap,
      title: "Instant Enrollment",
      description: "Customers join your rewards program in seconds, right from their phone."
    },
    {
      icon: Target,
      title: "Smart Targeting",
      description: "Deliver personalized rewards based on customer preferences and behavior."
    },
    {
      icon: BarChart,
      title: "Rich Analytics",
      description: "Track engagement, redemption rates, and program effectiveness."
    }
  ]

  const rewardTypes = [
    {
      icon: Star,
      title: "Points System",
      description: "Flexible points-based rewards that customers can redeem for products or services."
    },
    {
      icon: Trophy,
      title: "Tiered Benefits",
      description: "Create loyalty tiers with increasing benefits to encourage ongoing engagement."
    },
    {
      icon: Gift,
      title: "Special Perks",
      description: "Offer exclusive access, early previews, and member-only benefits."
    }
  ]

  const features = [
    "Customizable reward structures",
    "Automated point calculation",
    "Real-time reward notifications",
    "Customer engagement tracking",
    "Integration with POS systems",
    "Customer behavior analytics"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              Digital Rewards Program
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Build customer loyalty with a modern rewards program that delivers results.
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
              Engage Your Customers
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1"
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

      {/* Reward Types */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Reward Types</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Flexible Reward Options
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {rewardTypes.map((type) => (
              <div
                key={type.title}
                className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <type.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-600">
                  {type.description}
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
              Powerful Capabilities
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
              Ready to boost customer loyalty?
            </h2>
            <p className="mt-4 text-xl text-indigo-100">
              Get started with Privly today and transform your rewards program.
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
