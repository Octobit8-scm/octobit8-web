'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function HealthcareVoiceAgentCaseStudy() {
  const challenges = [
    'High call volume overwhelming staff',
    'Long wait times for patients',
    'Inconsistent information provided',
    'Limited availability of multilingual support',
    'High operational costs for 24/7 support'
  ];

  const solutions = [
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
  ];

  const results = [
    {
      metric: '60%',
      description: 'Reduction in call wait times'
    },
    {
      metric: '45%',
      description: 'Decrease in operational costs'
    },
    {
      metric: '85%',
      description: 'Patient satisfaction rate'
    },
    {
      metric: '24/7',
      description: 'Availability for patient support'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Voice Agent in Healthcare
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Transforming patient communication and support through intelligent voice automation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Case Study Overview
            </h2>
            <p className="text-gray-600 mb-8">
              A leading healthcare provider faced significant challenges in managing patient communications and support. 
              The implementation of an AI-powered voice agent transformed their patient interaction model, improving efficiency 
              and patient satisfaction while reducing operational costs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Challenges</h3>
                <ul className="space-y-2">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-blue-500 mr-2">✓</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Solutions</h3>
                <ul className="space-y-4">
                  {solutions.map((solution, index) => (
                    <li key={index}>
                      <h4 className="text-lg font-semibold text-gray-900">{solution.title}</h4>
                      <p className="text-gray-600">{solution.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Results
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The implementation of the AI voice agent delivered significant improvements across multiple metrics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {result.metric}
                </div>
                <p className="text-gray-600">
                  {result.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Implementation Details
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technology Stack</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Natural Language Processing (NLP) for voice recognition</li>
                <li>Machine Learning for intent classification</li>
                <li>Cloud-based infrastructure for scalability</li>
                <li>Secure API integration with EHR systems</li>
                <li>Multi-language support with translation services</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation Process</h3>
              <ol className="list-decimal pl-6 mb-6">
                <li>Initial assessment and requirements gathering</li>
                <li>Custom voice agent development and training</li>
                <li>Integration with existing healthcare systems</li>
                <li>Staff training and change management</li>
                <li>Pilot testing and refinement</li>
                <li>Full-scale deployment and monitoring</li>
              </ol>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Security and Compliance</h3>
              <ul className="list-disc pl-6">
                <li>HIPAA-compliant data handling</li>
                <li>End-to-end encryption for all communications</li>
                <li>Regular security audits and updates</li>
                <li>Patient data privacy protection</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Healthcare Communication?
            </h2>
            <p className="text-xl mb-8">
              Let's discuss how AI voice agents can improve your patient experience
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Get in Touch
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 