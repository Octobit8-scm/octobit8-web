'use client';

import { GlobeAltIcon, TicketIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Chatbot from '@/app/components/Chatbot';

export default function TravelIndustryPage() {
  const solutions = [
    {
      title: 'Booking Systems',
      description: 'Custom booking platforms for seamless travel reservations',
      icon: <TicketIcon className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Customer Management',
      description: 'Comprehensive systems for managing traveler information and preferences',
      icon: <UserGroupIcon className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Analytics & Insights',
      description: 'Advanced analytics tools for tracking booking patterns and customer behavior',
      icon: <ChartBarIcon className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <GlobeAltIcon className="w-12 h-12 text-white" />
            <div>
              <h1 className="text-4xl font-bold">Travel</h1>
              <p className="text-xl text-gray-200 mt-2">
                Revolutionizing travel experiences with innovative technology solutions
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Industry Overview */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-3xl font-bold mb-4">Our Travel Solutions</h2>
              <p className="text-lg text-gray-600 mb-6">
                We understand the dynamic nature of the travel industry. Our solutions 
                are designed to enhance customer experiences, streamline operations, and 
                drive business growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="bg-primary/10 p-3 rounded-full mb-3">
                      {solution.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                    <p className="text-gray-600 text-sm">{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Streamlined booking and reservation processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Enhanced customer experience and satisfaction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Improved operational efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Data-driven decision making</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Travel Industry Overview</h2>
                <p className="text-gray-600 mb-4">
                  The travel industry is embracing digital transformation to enhance customer experiences and optimize operations.
                </p>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-3">
                    <h3 className="text-lg font-semibold mb-1">Market Size</h3>
                    <p className="text-gray-600 text-sm">
                      The global travel technology market is projected to reach $13.5 billion by 2025, growing at a CAGR of 8.2%.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-3">
                    <h3 className="text-lg font-semibold mb-1">Key Trends</h3>
                    <p className="text-gray-600 text-sm">
                      Mobile booking, AI-powered recommendations, and contactless travel experiences are shaping the future of travel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Challenges in Travel</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <GlobeAltIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Global Operations</h3>
                      <p className="text-gray-600 text-sm">
                        Managing operations across different time zones and regulatory environments.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <UserGroupIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Customer Experience</h3>
                      <p className="text-gray-600 text-sm">
                        Delivering seamless and personalized experiences across multiple touchpoints.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Our Solutions</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-3">
                    <h3 className="text-lg font-semibold mb-1">Booking Systems</h3>
                    <p className="text-gray-600 text-sm">
                      Comprehensive platforms for flight, hotel, and activity reservations.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-3">
                    <h3 className="text-lg font-semibold mb-1">Travel Management</h3>
                    <p className="text-gray-600 text-sm">
                      Tools for itinerary management, expense tracking, and travel policy compliance.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-3">
                    <h3 className="text-lg font-semibold mb-1">Customer Portals</h3>
                    <p className="text-gray-600 text-sm">
                      Personalized platforms for booking management, loyalty programs, and customer support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Voice Agent Case Study */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">AI Voice Agent Case Study</h2>
              <p className="text-gray-600 mb-4">
                A major travel agency revolutionized their customer service through AI-powered voice automation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Challenges</h3>
                  <ul className="space-y-2">
                    {[
                      'High call volume during peak seasons',
                      'Long wait times for customers',
                      'Limited multilingual support',
                      'Inconsistent service quality',
                      'After-hours support needs'
                    ].map((challenge, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span className="text-primary mr-2">✓</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Solutions</h3>
                  <ul className="space-y-3">
                    {[
                      {
                        title: 'AI Voice Assistant',
                        description: 'Implemented an intelligent voice assistant to handle customer inquiries and bookings'
                      },
                      {
                        title: '24/7 Support',
                        description: 'Round-the-clock automated support for common travel queries'
                      },
                      {
                        title: 'Multilingual Support',
                        description: 'Support for multiple languages to serve international travelers'
                      },
                      {
                        title: 'Booking Integration',
                        description: 'Seamless integration with booking systems for real-time availability'
                      }
                    ].map((solution, index) => (
                      <li key={index}>
                        <h4 className="text-base font-semibold text-gray-900">{solution.title}</h4>
                        <p className="text-gray-600 text-sm">{solution.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Technology Stack</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      Natural Language Processing (NLP)
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      Machine Learning
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      Cloud Infrastructure
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      Secure API Integration
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      Multi-language Support
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Key Results</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { metric: '65%', description: 'Reduction in call wait times' },
                    { metric: '80%', description: 'Customer satisfaction rate' },
                    { metric: '40%', description: 'Increase in booking efficiency' },
                    { metric: '24/7', description: 'Support availability' }
                  ].map((result, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-primary mb-1">
                        {result.metric}
                      </div>
                      <p className="text-gray-600 text-xs">
                        {result.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Implementation Process</h3>
                  <ol className="list-decimal pl-5 text-gray-600 text-sm space-y-2">
                    <li>Requirements gathering</li>
                    <li>Development & training</li>
                    <li>System integration</li>
                    <li>Staff training</li>
                    <li>Testing & deployment</li>
                  </ol>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Security & Compliance</h3>
                  <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                    <li>PCI DSS compliance</li>
                    <li>End-to-end encryption</li>
                    <li>Security audits</li>
                    <li>Data privacy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Who We Serve</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                  <h4 className="font-semibold">Travel Agencies</h4>
                  <p className="text-gray-600 text-sm">
                    Custom solutions for travel agencies and tour operators
                  </p>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                  <h4 className="font-semibold">Hotels & Resorts</h4>
                  <p className="text-gray-600 text-sm">
                    Technology solutions for accommodation providers
                  </p>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                  <h4 className="font-semibold">Transportation Services</h4>
                  <p className="text-gray-600 text-sm">
                    Solutions for airlines, car rentals, and other transport providers
                  </p>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                  <h4 className="font-semibold">Tour Operators</h4>
                  <p className="text-gray-600 text-sm">
                    Custom platforms for tour and activity providers
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Case Studies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-200 p-3">
                  <h4 className="font-semibold">Travel Agency Platform</h4>
                  <p className="text-gray-600 text-sm">
                    Developed a custom booking platform for a travel agency, resulting in a 50% increase in online bookings.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-200 p-3">
                  <h4 className="font-semibold">Hotel Management System</h4>
                  <p className="text-gray-600 text-sm">
                    Implemented a comprehensive management system for a hotel chain, improving operational efficiency by 45%.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-200 p-3">
                  <h4 className="font-semibold">Airline Booking System</h4>
                  <p className="text-gray-600 text-sm">
                    Created a streamlined booking system for an airline, reducing booking time by 60%.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-200 p-3">
                  <h4 className="font-semibold">Tour Operator Platform</h4>
                  <p className="text-gray-600 text-sm">
                    Built a custom platform for tour operators, increasing customer engagement by 70%.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Technology Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      React & Next.js
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      TypeScript
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      Tailwind CSS
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      Node.js
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      Express.js
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      MongoDB
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-3">Ready to Revolutionize Travel?</h3>
              <p className="text-white mb-4 text-sm">
                Let's discuss how we can help you transform your travel business with technology.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm">
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Chatbot />
    </div>
  );
} 