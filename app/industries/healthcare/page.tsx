'use client';

import { HeartIcon, UserGroupIcon, ChartBarIcon, ClipboardDocumentIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Chatbot from '@/app/components/Chatbot';

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
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <HeartIcon className="w-12 h-12 text-white" />
            <div>
              <h1 className="text-4xl font-bold">Healthcare</h1>
              <p className="text-xl text-gray-200 mt-2">
                Revolutionizing healthcare delivery with advanced technology
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Industry Overview */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-3xl font-bold mb-4">Our Healthcare Solutions</h2>
              <p className="text-lg text-gray-600 mb-6">
                We understand the critical nature of healthcare technology. Our solutions 
                are designed to improve patient care, streamline operations, and ensure 
                compliance with healthcare regulations.
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

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Healthcare Industry Overview</h2>
                <p className="text-gray-600 mb-4">
                  The healthcare sector is rapidly adopting digital solutions to improve patient care, streamline operations, and enhance data security.
                </p>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-3">
                    <h3 className="text-lg font-semibold mb-1">Market Size</h3>
                    <p className="text-gray-600 text-sm">
                      The global healthcare IT market is expected to reach $390.7 billion by 2024, growing at a CAGR of 13.4%.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-3">
                    <h3 className="text-lg font-semibold mb-1">Key Trends</h3>
                    <p className="text-gray-600 text-sm">
                      Telemedicine, electronic health records, AI diagnostics, and patient engagement platforms are transforming healthcare delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Challenges in Healthcare</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <ShieldCheckIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Data Security</h3>
                      <p className="text-gray-600 text-sm">
                        Protecting sensitive patient data while ensuring accessibility for healthcare providers.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <UserGroupIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Patient Engagement</h3>
                      <p className="text-gray-600 text-sm">
                        Improving patient participation in their healthcare journey through digital tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Our Solutions</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-3">
                    <h3 className="text-lg font-semibold mb-1">Electronic Health Records</h3>
                    <p className="text-gray-600 text-sm">
                      Secure and efficient systems for managing patient health information.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-3">
                    <h3 className="text-lg font-semibold mb-1">Telemedicine Platforms</h3>
                    <p className="text-gray-600 text-sm">
                      Virtual consultation systems that connect patients with healthcare providers.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-3">
                    <h3 className="text-lg font-semibold mb-1">Patient Portals</h3>
                    <p className="text-gray-600 text-sm">
                      User-friendly platforms for appointment scheduling, medical records access, and communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Voice Agent Case Study */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">AI Voice Agent Case Study</h2>
              <p className="text-gray-600 mb-4">
                A leading healthcare provider transformed their patient communication through intelligent voice automation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Challenges</h3>
                  <ul className="space-y-2">
                    {[
                      'High call volume overwhelming staff',
                      'Long wait times for patients',
                      'Inconsistent information provided',
                      'Limited availability of multilingual support',
                      'High operational costs for 24/7 support'
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
                        description: 'Implemented a natural language processing-based voice assistant to handle initial patient interactions'
                      },
                      {
                        title: '24/7 Availability',
                        description: 'Round-the-clock automated support for appointment scheduling and basic inquiries'
                      },
                      {
                        title: 'Multilingual Support',
                        description: 'Support for multiple languages to serve diverse patient populations'
                      },
                      {
                        title: 'Integration with EHR',
                        description: 'Seamless integration with Electronic Health Records for accurate information'
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
                    { metric: '60%', description: 'Reduction in call wait times' },
                    { metric: '45%', description: 'Decrease in operational costs' },
                    { metric: '85%', description: 'Patient satisfaction rate' },
                    { metric: '24/7', description: 'Availability for patient support' }
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
                    <li>HIPAA compliance</li>
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
                  <h4 className="font-semibold">Hospitals</h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive solutions for hospital management and patient care
                  </p>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                  <h4 className="font-semibold">Clinics</h4>
                  <p className="text-gray-600 text-sm">
                    Technology solutions for medical practices and clinics
                  </p>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                  <h4 className="font-semibold">Healthcare Providers</h4>
                  <p className="text-gray-600 text-sm">
                    Custom solutions for various healthcare service providers
                  </p>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                  <h4 className="font-semibold">Insurance Companies</h4>
                  <p className="text-gray-600 text-sm">
                    Solutions for health insurance providers and payers
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Case Studies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-200 p-3">
                  <h4 className="font-semibold">Hospital Management System</h4>
                  <p className="text-gray-600 text-sm">
                    Implemented a comprehensive management system for a major hospital, improving patient care efficiency by 35%.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-200 p-3">
                  <h4 className="font-semibold">Clinic EHR Implementation</h4>
                  <p className="text-gray-600 text-sm">
                    Successfully deployed an electronic health records system for a network of clinics, reducing administrative time by 40%.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-200 p-3">
                  <h4 className="font-semibold">Telemedicine Platform</h4>
                  <p className="text-gray-600 text-sm">
                    Created a virtual care platform that increased patient access to healthcare by 50%.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-200 p-3">
                  <h4 className="font-semibold">Patient Portal</h4>
                  <p className="text-gray-600 text-sm">
                    Developed a patient engagement portal that improved appointment adherence by 45%.
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

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
              <div className="container">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <h2 className="text-4xl font-bold mb-4">Ready to Modernize Healthcare?</h2>
                  <p className="text-xl text-gray-200 mb-8">
                    Let's discuss how we can help you transform your healthcare organization with technology.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/contact" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                      Get in Touch
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Chatbot />
    </div>
  );
} 