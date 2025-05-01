'use client';

import { GlobeAltIcon, TicketIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
        <div className="flex items-center gap-4 mb-12">
          <GlobeAltIcon className="w-12 h-12 text-primary" />
          <div>
            <h1 className="text-4xl font-bold">Travel</h1>
            <p className="text-xl text-gray-600 mt-2">
              Enhancing travel experiences with cutting-edge digital solutions
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Travel Industry Overview</h2>
              <p className="text-gray-600 mb-6">
                The travel industry is embracing digital transformation to enhance customer experiences and optimize operations.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold mb-2">Market Size</h3>
                  <p className="text-gray-600">
                    The global travel technology market is projected to reach $13.5 billion by 2025, growing at a CAGR of 8.2%.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold mb-2">Key Trends</h3>
                  <p className="text-gray-600">
                    Mobile booking, AI-powered recommendations, and contactless travel experiences are shaping the future of travel.
                  </p>
                </div>
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Challenges in Travel</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GlobeAltIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Global Operations</h3>
                    <p className="text-gray-600">
                      Managing operations across different time zones and regulatory environments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <UserGroupIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Customer Experience</h3>
                    <p className="text-gray-600">
                      Delivering seamless and personalized experiences across multiple touchpoints.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Our Solutions</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold mb-2">Booking Systems</h3>
                  <p className="text-gray-600">
                    Comprehensive platforms for flight, hotel, and activity reservations.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold mb-2">Travel Management</h3>
                  <p className="text-gray-600">
                    Tools for itinerary management, expense tracking, and travel policy compliance.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold mb-2">Customer Portals</h3>
                  <p className="text-gray-600">
                    Personalized platforms for booking management, loyalty programs, and customer support.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
              <ul className="space-y-4 text-gray-600">
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
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Who We Serve</h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold">Travel Agencies</h4>
                  <p className="text-gray-600 text-sm">
                    Custom solutions for travel agencies and tour operators
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold">Hotels & Resorts</h4>
                  <p className="text-gray-600 text-sm">
                    Technology solutions for accommodation providers
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold">Transportation Services</h4>
                  <p className="text-gray-600 text-sm">
                    Solutions for airlines, car rentals, and other transport providers
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Case Studies</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Travel Agency Platform</h4>
                  <p className="text-gray-600 text-sm">
                    Developed a custom booking platform for a travel agency, resulting in a 50% increase in online bookings.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Hotel Management System</h4>
                  <p className="text-gray-600 text-sm">
                    Implemented a comprehensive management system for a hotel chain, improving operational efficiency by 45%.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-4">Ready to Revolutionize Travel?</h3>
              <p className="text-white mb-4">
                Let's discuss how we can help you transform your travel business with technology.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 