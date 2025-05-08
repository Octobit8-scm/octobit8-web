'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import RegistrationForm from '@/app/components/RegistrationForm';

export default function GCPCloudTraining() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const courseModules = [
    {
      title: 'GCP Fundamentals',
      topics: [
        'GCP Infrastructure and Services',
        'GCP Resource Hierarchy',
        'GCP Networking',
        'GCP Storage Solutions'
      ]
    },
    {
      title: 'Compute Services',
      topics: [
        'Compute Engine',
        'App Engine',
        'Cloud Run',
        'Google Kubernetes Engine'
      ]
    },
    {
      title: 'Data and Storage',
      topics: [
        'Cloud SQL',
        'Cloud Spanner',
        'Cloud Storage',
        'BigQuery'
      ]
    },
    {
      title: 'Networking and Security',
      topics: [
        'Virtual Private Cloud',
        'Cloud Load Balancing',
        'Cloud Armor',
        'Cloud IAM'
      ]
    },
    {
      title: 'Operations and Monitoring',
      topics: [
        'Cloud Monitoring',
        'Cloud Logging',
        'Cloud Operations Suite',
        'Cloud Deployment Manager'
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
              Self-Paced GCP Cloud Training
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Master Google Cloud Platform at your own pace with our comprehensive self-paced training program
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
              Watch this demo to get a preview of our self-paced GCP Cloud training program
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
                title="GCP Cloud Training Demo"
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
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Self-Paced Course Overview
            </h2>
            <p className="text-gray-600 mb-8">
              Our comprehensive GCP Cloud training program is designed to help you learn at your own pace. 
              With lifetime access to all course materials, you can progress through the content whenever it suits you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Course Modules</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    GCP Fundamentals
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Compute Engine and VPC
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Cloud Storage
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    IAM and Security
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    DevOps and Automation
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Course Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    40+ hours of self-paced video content
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Hands-on labs and exercises
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Downloadable resources
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Community forum access
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Course completion certificate
                  </li>
                </ul>
              </div>
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
              Everything you need to master GCP Cloud at your own pace
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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Self-Paced Course Price
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              One-time payment for lifetime access to all self-paced course materials
            </p>
            <div className="text-4xl font-bold text-blue-600 mb-8">
              ₹50,000
            </div>
            <button
              onClick={() => setIsRegistrationOpen(true)}
              className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Enroll Now
            </button>
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
            className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg p-8 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Master GCP Cloud at Your Own Pace?
            </h2>
            <p className="text-xl mb-8">
              Start your self-paced learning journey today
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Get in Touch
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <RegistrationForm
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        courseName="Self-Paced GCP Cloud Training"
      />
    </main>
  );
} 