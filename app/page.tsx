'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import StepByStepGuide from './components/StepByStepGuide'
import { 
  Building, 
  Ticket, 
  Gift, 
  Tags, 
  Shield, 
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Phone,
  Lock,
  Star,
  MousePointerClick,
  BarChart
} from 'lucide-react'

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime = null
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / duration

      if (progress < 1) {
        setCount(Math.min(Math.floor(end * progress), end))
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration])

  return <span>{count}</span>
}

// Animated Feature Card Component
const AnimatedFeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative p-6 bg-white rounded-xl shadow-lg transition-all duration-500 ease-out transform 
        ${isHovered ? 'scale-105 shadow-xl' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative px-7 py-6 bg-white rounded-lg">
        <div className={`flex items-center transition-all duration-300 ${isHovered ? 'translate-x-2' : ''}`}>
          <div className="shrink-0">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg">
              <feature.icon className={`w-6 h-6 text-indigo-600 transition-all duration-300 ${isHovered ? 'scale-110' : ''}`} />
            </div>
          </div>
          <div className="ml-6">
            <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
            <Link 
              href={feature.href}
              className={`inline-flex items-center mt-4 text-indigo-600 group transition-all duration-300 ${isHovered ? 'translate-x-2' : ''}`}
            >
              Learn more 
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        {isHovered && (
          <div className="absolute inset-0 bg-indigo-50 opacity-10 rounded-lg transition-opacity duration-300" />
        )}
      </div>
    </div>
  )
}

export default function Home() {
  const [isVisible, setIsVisible] = useState({
    features: false,
    howItWorks: false,
    clients: false,
    metrics: false
  });

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = ['features', 'howItWorks', 'clients', 'metrics'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Ticket,
      title: "Digital Event Tickets",
      description: "Create tickets that your attendees will never lose, built into their phone's wallet.",
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
  ];

  const stats = [
    { number: 1000000, label: "Digital Passes Created", prefix: "" },
    { number: 99.9, label: "Uptime", prefix: "", suffix: "%" },
    { number: 50, label: "Enterprise Clients", prefix: "" },
    { number: 24, label: "Support Available", prefix: "", suffix: "/7" }
  ];

  const clients = [
    "TechCorp Industries",
    "Global Events Co.",
    "Smart Buildings Inc.",
    "Retail Giants Ltd.",
    "Innovation Tech",
    "Future Systems"
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute transform -translate-y-1/2 left-1/2 -translate-x-1/2">
            <svg
              viewBox="0 0 100 100"
              className="w-[40rem] h-[40rem] opacity-10"
            >
              <defs>
                <pattern
                  id="grid"
                  x="0"
                  y="0"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Business with</span>
              <span className="block text-indigo-200">Smart Digital Passes</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Replace physical cards, tickets, and fobs with secure digital passes that live right in your customers' phones.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 space-x-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div id="metrics" className="relative -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                isVisible.metrics ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <p className="text-3xl font-bold text-indigo-600">
                {stat.prefix}<AnimatedCounter end={stat.number} />{stat.suffix}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

 {/* Step By Step Guide */}
      'use client'
import { useState, useEffect } from 'react'
import { 
  Smartphone, 
  QrCode, 
  Check, 
  ArrowRight, 
  Building,
  Lock
} from 'lucide-react'

const StepByStepGuide = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const steps = [
    {
      title: "Create Your Pass",
      description: "Design and customize your digital passes in minutes.",
      icon: Smartphone,
      demo: (
        <div className="bg-gray-900 rounded-xl p-4 relative overflow-hidden">
          <div className={`transform transition-transform duration-500 ${
            isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className="bg-indigo-600 rounded-lg p-4 text-white">
              <div className="w-48 h-72 bg-white rounded-lg mx-auto relative">
                <div className="absolute top-4 left-4 right-4 h-20 bg-indigo-100 rounded-lg" />
                <div className="absolute top-28 left-4 right-4 h-4 bg-gray-200 rounded" />
                <div className="absolute top-36 left-4 right-4 h-4 bg-gray-200 rounded" />
                <div className="absolute bottom-4 left-4 right-4">
                  <QrCode className="w-12 h-12 mx-auto text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Distribute to Users",
      description: "Send passes instantly via email or SMS.",
      icon: Building,
      demo: (
        <div className="bg-gray-900 rounded-xl p-4">
          <div className={`transform transition-all duration-500 ${
            isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600">Pass sent successfully!</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Secure Access",
      description: "Users access facilities with a simple tap of their phone.",
      icon: Lock,
      demo: (
        <div className="bg-gray-900 rounded-xl p-4">
          <div className={`transform transition-all duration-500 ${
            isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}>
            <div className="w-full h-32 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <Check className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>
      )
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setIsAnimating(false)
        setCurrentStep((prev) => (prev + 1) % steps.length)
      }, 3000)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            How to Get Started
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            Set Up Digital Passes in Minutes
          </p>
        </div>

        <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          {/* Steps */}
          <div className="relative space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${currentStep === index ? 'opacity-100' : 'opacity-50'}`}
              >
                <div className="flex items-center">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    currentStep === index ? 'bg-indigo-600' : 'bg-gray-200'
                  }`}>
                    <step.icon className={`w-6 h-6 ${
                      currentStep === index ? 'text-white' : 'text-gray-500'
                    }`} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-1 text-gray-500">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Demo */}
          <div className="mt-10 lg:mt-0">
            <div className="relative">
              {steps[currentStep].demo}
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 flex justify-center space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentStep === index ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentStep(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StepByStepGuide
      
{/* How It Works Section */}
<div className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Simple Implementation, Powerful Results
      </p>
    </div>

    <div className="mt-20 relative">
      {/* Connection lines */}
      <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gray-200 transform -translate-y-1/2" />
      
      <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Step 1 */}
        <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
            1
          </div>
          <h3 className="mt-4 text-xl font-semibold text-center">Quick Setup</h3>
          <p className="mt-2 text-gray-600 text-center">
            Integrate our secure API with your existing systems in minutes.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
            2
          </div>
          <h3 className="mt-4 text-xl font-semibold text-center">Distribute Passes</h3>
          <p className="mt-2 text-gray-600 text-center">
            Send digital passes directly to your users' mobile wallets.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
            3
          </div>
          <h3 className="mt-4 text-xl font-semibold text-center">Manage & Track</h3>
          <p className="mt-2 text-gray-600 text-center">
            Real-time control and analytics through our dashboard.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Industry Solutions Section */}
<div className="py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Industry Solutions</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Tailored For Your Industry
      </p>
    </div>

    <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Event Venues */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-lg">
            <Ticket className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="mt-6 text-xl font-semibold">Event Venues</h3>
          <p className="mt-4 text-gray-600">
            Streamline entry, reduce wait times, and enhance the attendee experience.
          </p>
        </div>
      </div>

      {/* Office Buildings */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-lg">
            <Building className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="mt-6 text-xl font-semibold">Office Buildings</h3>
          <p className="mt-4 text-gray-600">
            Secure access control with real-time management and monitoring.
          </p>
        </div>
      </div>

      {/* Retail */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-lg">
            <Tags className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="mt-6 text-xl font-semibold">Retail</h3>
          <p className="mt-4 text-gray-600">
            Boost customer engagement with digital loyalty cards and coupons.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
      
      {/* Features Section */}
      <div id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Solutions</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <AnimatedFeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>

{/* How It Works Section with Interactive Elements */}
<div className="py-24 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Three Simple Steps to Digital Transformation
      </p>
    </div>

    <div className="mt-20 relative">
      {/* Connection lines */}
      <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-600" />
      
      <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Step 1: Integration */}
        <div className="relative p-2">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12">
              <div className="bg-indigo-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                1
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-center text-gray-900">Quick Integration</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <p className="ml-3 text-gray-600">Simple API integration</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <p className="ml-3 text-gray-600">Secure key management</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <p className="ml-3 text-gray-600">Expert support team</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Distribution */}
        <div className="relative p-2">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12">
              <div className="bg-indigo-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                2
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-center text-gray-900">Pass Distribution</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <p className="ml-3 text-gray-600">Instant delivery</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <p className="ml-3 text-gray-600">Bulk distribution</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <p className="ml-3 text-gray-600">Automated updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Management */}
        <div className="relative p-2">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12">
              <div className="bg-indigo-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                3
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-center text-gray-900">Real-time Management</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <p className="ml-3 text-gray-600">Live monitoring</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <p className="ml-3 text-gray-600">Usage analytics</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <p className="ml-3 text-gray-600">Instant updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Security & Compliance Section */}
<div className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Security & Compliance</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Enterprise-Grade Security
      </p>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
        Your security is our top priority. We maintain the highest standards of data protection and compliance.
      </p>
    </div>

    <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Encryption */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl">
          <Lock className="w-6 h-6 text-indigo-600" />
        </div>
        <h3 className="mt-6 text-lg font-semibold text-gray-900">End-to-End Encryption</h3>
        <p className="mt-4 text-gray-600">
          Military-grade encryption for all data in transit and at rest with regular security audits.
        </p>
      </div>

      {/* Compliance */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl">
          <Shield className="w-6 h-6 text-indigo-600" />
        </div>
        <h3 className="mt-6 text-lg font-semibold text-gray-900">Compliance Standards</h3>
        <p className="mt-4 text-gray-600">
          GDPR compliant, SOC 2 certified, and adherent to international data protection regulations.
        </p>
      </div>

      {/* Authentication */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl">
          <Key className="w-6 h-6 text-indigo-600" />
        </div>
        <h3 className="mt-6 text-lg font-semibold text-gray-900">Secure Authentication</h3>
        <p className="mt-4 text-gray-600">
          Multi-factor authentication and advanced access controls protect your account.
        </p>
      </div>
    </div>

    {/* Security Metrics */}
    <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <p className="text-4xl font-bold text-indigo-600">256-bit</p>
        <p className="mt-2 text-gray-600">AES Encryption</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <p className="text-4xl font-bold text-indigo-600">99.99%</p>
        <p className="mt-2 text-gray-600">Uptime SLA</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <p className="text-4xl font-bold text-indigo-600">24/7</p>
        <p className="mt-2 text-gray-600">Monitoring</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <p className="text-4xl font-bold text-indigo-600">ISO 27001</p>
        <p className="mt-2 text-gray-600">Certified</p>
      </div>
    </div>
  </div>
</div>
      
      {/* Clients Section */}
      <div id="clients" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-6">
            {clients.map((client, index) => (
              <div
                key={client}
                className={`flex justify-center items-center py-8 px-8 bg-white rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                  isVisible.clients ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <span className="text-gray-400 font-medium">{client}</span>
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
