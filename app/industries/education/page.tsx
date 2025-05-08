'use client';

import { AcademicCapIcon, BookOpenIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Chatbot from '@/app/components/Chatbot';

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
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <AcademicCapIcon className="w-12 h-12 text-white" />
            <div>
              <h1 className="text-4xl font-bold">Education</h1>
              <p className="text-xl text-gray-200 mt-2">
                Transforming education through innovative technology solutions
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Industry Overview */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Our Education Solutions</h2>
              <p className="text-lg text-gray-600 mb-6">
                We understand the evolving needs of educational institutions. Our solutions 
                are designed to enhance learning experiences, streamline administrative processes, 
                and drive educational outcomes.
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

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Education Industry Overview</h2>
                <p className="text-gray-600 mb-4">
                  The education sector is undergoing a digital transformation, with institutions seeking innovative solutions to enhance learning experiences and streamline administrative processes.
                </p>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-3">
                    <h3 className="text-lg font-semibold mb-1">Market Size</h3>
                    <p className="text-gray-600 text-sm">
                      The global EdTech market is projected to reach $404 billion by 2025, growing at a CAGR of 16.3%.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-3">
                    <h3 className="text-lg font-semibold mb-1">Key Trends</h3>
                    <p className="text-gray-600 text-sm">
                      Increasing adoption of online learning platforms, AI-powered personalized learning, and digital assessment tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Challenges in Education</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <AcademicCapIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Digital Transformation</h3>
                      <p className="text-gray-600 text-sm">
                        Many educational institutions struggle with outdated systems and lack the technical expertise to implement modern solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <UserGroupIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Student Engagement</h3>
                      <p className="text-gray-600 text-sm">
                        Maintaining student engagement in virtual learning environments requires innovative approaches and interactive tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Our Solutions</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-3">
                    <h3 className="text-lg font-semibold mb-1">Learning Management Systems</h3>
                    <p className="text-gray-600 text-sm">
                      Custom LMS platforms that provide seamless course delivery, student tracking, and assessment tools.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-3">
                    <h3 className="text-lg font-semibold mb-1">Virtual Classrooms</h3>
                    <p className="text-gray-600 text-sm">
                      Interactive online learning environments with real-time collaboration and engagement features.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-3">
                    <h3 className="text-lg font-semibold mb-1">Student Portals</h3>
                    <p className="text-gray-600 text-sm">
                      Comprehensive platforms for course registration, grade tracking, and communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Voice Agent Case Study */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">AI Voice Agent Case Study</h2>
              <p className="text-gray-600 mb-4">
                A leading university transformed their student support services through intelligent voice automation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Challenges</h3>
                  <ul className="space-y-2">
                    {[
                      'High volume of student inquiries',
                      'Limited support staff availability',
                      'Inconsistent information delivery',
                      'Language barriers for international students',
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
                        description: 'Implemented a natural language processing-based voice assistant to handle student inquiries'
                      },
                      {
                        title: '24/7 Support',
                        description: 'Round-the-clock automated support for common student questions'
                      },
                      {
                        title: 'Multilingual Support',
                        description: 'Support for multiple languages to serve international students'
                      },
                      {
                        title: 'Integration with SIS',
                        description: 'Seamless integration with Student Information System for accurate data'
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
                    { metric: '70%', description: 'Reduction in support tickets' },
                    { metric: '55%', description: 'Decrease in response time' },
                    { metric: '90%', description: 'Student satisfaction rate' },
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
                    <li>FERPA compliance</li>
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
                  <h4 className="font-semibold">K-12 Schools</h4>
                  <p className="text-gray-600 text-sm">
                    Solutions for primary and secondary education institutions
                  </p>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                  <h4 className="font-semibold">Higher Education</h4>
                  <p className="text-gray-600 text-sm">
                    Technology solutions for colleges and universities
                  </p>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                  <h4 className="font-semibold">Training Organizations</h4>
                  <p className="text-gray-600 text-sm">
                    Custom solutions for professional training providers
                  </p>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                  <h4 className="font-semibold">Online Learning Platforms</h4>
                  <p className="text-gray-600 text-sm">
                    Solutions for e-learning and MOOC providers
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Case Studies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-200 p-3">
                  <h4 className="font-semibold">University LMS Implementation</h4>
                  <p className="text-gray-600 text-sm">
                    Successfully implemented a custom LMS for a major university, resulting in a 40% increase in student engagement.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-200 p-3">
                  <h4 className="font-semibold">School District SIS</h4>
                  <p className="text-gray-600 text-sm">
                    Developed a comprehensive student information system for a large school district, improving administrative efficiency by 60%.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-200 p-3">
                  <h4 className="font-semibold">Online Learning Platform</h4>
                  <p className="text-gray-600 text-sm">
                    Created a scalable e-learning platform that increased course completion rates by 45%.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-200 p-3">
                  <h4 className="font-semibold">Training Provider Solution</h4>
                  <p className="text-gray-600 text-sm">
                    Built a custom training management system that reduced administrative overhead by 50%.
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
                  <h2 className="text-4xl font-bold mb-4">Ready to Transform Education?</h2>
                  <p className="text-xl text-gray-200 mb-8">
                    Let's discuss how we can help you modernize your educational institution with technology.
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