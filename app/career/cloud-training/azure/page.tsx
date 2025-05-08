'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function AzureCloudTraining() {
  const courseModules = [
    {
      title: 'Azure Fundamentals',
      topics: [
        'Azure Architecture and Services',
        'Azure Resource Manager',
        'Azure Virtual Networks',
        'Azure Storage Solutions'
      ]
    },
    {
      title: 'Compute Services',
      topics: [
        'Azure Virtual Machines',
        'Azure App Services',
        'Azure Container Instances',
        'Azure Kubernetes Service'
      ]
    },
    {
      title: 'Data and Storage',
      topics: [
        'Azure SQL Database',
        'Azure Cosmos DB',
        'Azure Blob Storage',
        'Azure Data Lake'
      ]
    },
    {
      title: 'Networking and Security',
      topics: [
        'Azure Virtual Network',
        'Azure Load Balancer',
        'Azure Firewall',
        'Azure Security Center'
      ]
    },
    {
      title: 'Monitoring and Management',
      topics: [
        'Azure Monitor',
        'Azure Log Analytics',
        'Azure Automation',
        'Azure Policy'
      ]
    }
  ];

  const courseFeatures = [
    'Lifetime access to course materials',
    'Self-paced learning with video tutorials',
    'Hands-on labs and practice exercises',
    'Downloadable resources and cheat sheets',
    'Community forum access',
    'Course completion certificate',
    'Certification guidance and resources'
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
              Self-Paced Azure Cloud Training
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Master Microsoft Azure cloud services at your own pace with our comprehensive self-paced training program
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Course Demo Video
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch this demo to get a preview of our self-paced Azure Cloud training program
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/your-video-id"
                title="Azure Cloud Training Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Self-Paced Course Overview
              </h2>
              <p className="text-gray-600 mb-6">
                Our self-paced Azure Cloud training program provides comprehensive knowledge of Microsoft Azure services. Learn at your own pace with video tutorials, hands-on labs, and practical exercises. Set your own schedule and progress through the material as quickly or as slowly as you need.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-2" />
                  <span className="text-gray-700">40+ hours of self-paced video content</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-2" />
                  <span className="text-gray-700">Lifetime access to materials</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-2" />
                  <span className="text-gray-700">Community support</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What You'll Learn
              </h3>
              <ul className="space-y-3">
                {courseModules.map((module, index) => (
                  <motion.li
                    key={module.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="text-gray-600"
                  >
                    <span className="font-medium text-gray-900">{module.title}</span>
                    <ul className="ml-6 mt-2 space-y-2">
                      {module.topics.map((topic) => (
                        <li key={topic} className="flex items-center">
                          <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Features */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Self-Paced Course Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to master Azure Cloud at your own pace
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-center bg-white rounded-lg p-4"
              >
                <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-600">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Self-Paced Course Price
            </h2>
            <div className="text-4xl font-bold text-blue-600 mb-6">
              ₹15,000
            </div>
            <p className="text-gray-600 mb-8">
              One-time payment for lifetime access to all self-paced course materials
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Enroll Now
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
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
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Master Azure Cloud at Your Own Pace?
            </h2>
            <p className="text-xl mb-8">
              Start your self-paced learning journey today
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