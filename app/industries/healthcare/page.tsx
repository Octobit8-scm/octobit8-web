'use client';

import { HeartIcon, UserGroupIcon, ChartBarIcon, ClipboardDocumentIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HealthcareIndustryPage() {
  const solutions = [
    {
      title: 'Patient Management Systems',
      description: 'Comprehensive systems for managing patient records and care',
      icon: <UserGroupIcon className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Electronic Health Records',
      description: 'Secure and efficient digital health record management',
      icon: <ClipboardDocumentIcon className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Healthcare Analytics',
      description: 'Advanced analytics for improving patient outcomes and operational efficiency',
      icon: <ChartBarIcon className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-12">
        {/* Hero Section */}
        <div className="flex items-center gap-4 mb-12">
          <HeartIcon className="w-12 h-12 text-primary" />
          <div>
            <h1 className="text-4xl font-bold">Healthcare</h1>
            <p className="text-xl text-gray-600 mt-2">
              Revolutionizing healthcare delivery with advanced technology
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Our Healthcare Solutions</h2>
              <p className="text-lg text-gray-600 mb-6">
                We understand the critical nature of healthcare technology. Our solutions 
                are designed to improve patient care, streamline operations, and ensure 
                compliance with healthcare regulations.
              </p>
              
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                      <p className="text-lg text-gray-600">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Improved patient care and outcomes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Enhanced operational efficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Secure and compliant data management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Data-driven healthcare decisions</span>
                </li>
              </ul>
            </div>

            {/* Industry Overview */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Healthcare Industry Overview</h2>
              <p className="text-gray-600 mb-6">
                The healthcare sector is rapidly adopting digital solutions to improve patient care, streamline operations, and enhance data security.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold mb-2">Market Size</h3>
                  <p className="text-gray-600">
                    The global healthcare IT market is expected to reach $390.7 billion by 2024, growing at a CAGR of 13.4%.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold mb-2">Key Trends</h3>
                  <p className="text-gray-600">
                    Telemedicine, electronic health records, AI diagnostics, and patient engagement platforms are transforming healthcare delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Challenges in Healthcare</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <ShieldCheckIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Data Security</h3>
                    <p className="text-gray-600">
                      Protecting sensitive patient data while ensuring accessibility for healthcare providers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <UserGroupIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Patient Engagement</h3>
                    <p className="text-gray-600">
                      Improving patient participation in their healthcare journey through digital tools.
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
                  <h3 className="text-lg font-semibold mb-2">Electronic Health Records</h3>
                  <p className="text-gray-600">
                    Secure and efficient systems for managing patient health information.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold mb-2">Telemedicine Platforms</h3>
                  <p className="text-gray-600">
                    Virtual consultation systems that connect patients with healthcare providers.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold mb-2">Patient Portals</h3>
                  <p className="text-gray-600">
                    User-friendly platforms for appointment scheduling, medical records access, and communication.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Who We Serve</h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold">Hospitals</h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive solutions for hospital management and patient care
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold">Clinics</h4>
                  <p className="text-gray-600 text-sm">
                    Technology solutions for medical practices and clinics
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold">Healthcare Providers</h4>
                  <p className="text-gray-600 text-sm">
                    Custom solutions for various healthcare service providers
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Case Studies</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Hospital Management System</h4>
                  <p className="text-gray-600 text-sm">
                    Implemented a comprehensive management system for a major hospital, improving patient care efficiency by 35%.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Clinic EHR Implementation</h4>
                  <p className="text-gray-600 text-sm">
                    Successfully deployed an electronic health records system for a network of clinics, reducing administrative time by 40%.
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
              <h3 className="text-xl font-bold mb-4">Ready to Modernize Healthcare?</h3>
              <p className="text-white mb-4">
                Let's discuss how we can help you transform your healthcare organization with technology.
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