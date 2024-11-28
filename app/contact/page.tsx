'use client'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Get in touch with our team to learn more about our digital pass solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-indigo-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@privly.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-indigo-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-indigo-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Address</h3>
                  <p className="text-gray-600">123 Business Street<br />San Francisco, CA 94111</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
