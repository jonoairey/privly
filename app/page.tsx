'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
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
