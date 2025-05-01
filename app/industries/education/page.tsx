'use client';

import { AcademicCapIcon, BookOpenIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EducationIndustryPage() {
  const solutions = [
    {
      title: 'Learning Management Systems',
      description: 'Custom LMS platforms for seamless online education delivery',
      icon: <BookOpenIcon className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Student Information Systems',
      description: 'Comprehensive systems for managing student data and academic records',
      icon: <UserGroupIcon className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Analytics & Reporting',
      description: 'Advanced analytics tools for tracking student performance and outcomes',
      icon: <ChartBarIcon className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-12">
        {/* Hero Section */}
        <div className="flex items-center gap-4 mb-12">
          <AcademicCapIcon className="w-12 h-12 text-primary" />
          <div>
            <h1 className="text-4xl font-bold">Education</h1>
            <p className="text-xl text-gray-600 mt-2">
              Transforming education through innovative technology solutions
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Industry Overview */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Education Industry Overview</h2>
              <p className="text-gray-600 mb-6">
                The education sector is undergoing a digital transformation, with institutions seeking innovative solutions to enhance learning experiences and streamline administrative processes.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold mb-2">Market Size</h3>
                  <p className="text-gray-600">
                    The global EdTech market is projected to reach $404 billion by 2025, growing at a CAGR of 16.3%.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold mb-2">Key Trends</h3>
                  <p className="text-gray-600">
                    Increasing adoption of online learning platforms, AI-powered personalized learning, and digital assessment tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Challenges in Education</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <AcademicCapIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Digital Transformation</h3>
                    <p className="text-gray-600">
                      Many educational institutions struggle with outdated systems and lack the technical expertise to implement modern solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <UserGroupIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Student Engagement</h3>
                    <p className="text-gray-600">
                      Maintaining student engagement in virtual learning environments requires innovative approaches and interactive tools.
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
                  <h3 className="text-lg font-semibold mb-2">Learning Management Systems</h3>
                  <p className="text-gray-600">
                    Custom LMS platforms that provide seamless course delivery, student tracking, and assessment tools.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold mb-2">Virtual Classrooms</h3>
                  <p className="text-gray-600">
                    Interactive online learning environments with real-time collaboration and engagement features.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold mb-2">Student Portals</h3>
                  <p className="text-gray-600">
                    Comprehensive platforms for course registration, grade tracking, and communication.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Enhanced student engagement and learning outcomes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Streamlined administrative processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Improved communication between stakeholders</span>
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
                  <h4 className="font-semibold">K-12 Schools</h4>
                  <p className="text-gray-600 text-sm">
                    Solutions for primary and secondary education institutions
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold">Higher Education</h4>
                  <p className="text-gray-600 text-sm">
                    Technology solutions for colleges and universities
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold">Training Organizations</h4>
                  <p className="text-gray-600 text-sm">
                    Custom solutions for professional training providers
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Case Studies</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">University LMS Implementation</h4>
                  <p className="text-gray-600 text-sm">
                    Successfully implemented a custom LMS for a major university, resulting in a 40% increase in student engagement.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">School District SIS</h4>
                  <p className="text-gray-600 text-sm">
                    Developed a comprehensive student information system for a large school district, improving administrative efficiency by 60%.
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
              <h3 className="text-xl font-bold mb-4">Ready to Transform Education?</h3>
              <p className="text-white mb-4">
                Let's discuss how we can help you modernize your educational institution with technology.
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