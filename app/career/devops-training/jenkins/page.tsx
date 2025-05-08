'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import RegistrationForm from '@/app/components/RegistrationForm';

export default function Jenkins() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const modules = [
    {
      title: 'Jenkins Fundamentals',
      topics: [
        'Introduction to Jenkins',
        'Installation and setup',
        'Pipeline basics',
        'Jobs and builds',
        'Node and executor configuration'
      ]
    },
    {
      title: 'Pipeline Development',
      topics: [
        'Declarative pipeline syntax',
        'Scripted pipeline basics',
        'Pipeline libraries',
        'Shared libraries',
        'Pipeline templates'
      ]
    },
    {
      title: 'CI/CD Implementation',
      topics: [
        'Build and test automation',
        'Deployment strategies',
        'Security scanning',
        'Code quality checks',
        'Performance testing'
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
            <Link
              href="/career/devops-training"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to DevOps Training
            </Link>
            <div className="flex justify-center mb-6">
              <Image
                src="/images/jenkins.svg"
                alt="Jenkins"
                width={120}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Jenkins Training
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Master Jenkins pipeline automation with our comprehensive training program
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
              Watch this demo to get a preview of our Jenkins training program
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
                title="Jenkins Training Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Course Content
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive modules covering everything you need to master Jenkins
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{module.title}</h3>
                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-primary flex-shrink-0 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Course Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to master Jenkins
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {courseFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-center bg-white rounded-lg p-4 shadow-md"
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
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Pricing</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl font-bold text-primary mb-4">₹20,000</div>
              <p className="text-gray-600 mb-8">
                Lifetime access to course materials and updates
              </p>
              <button
                onClick={() => setIsRegistrationOpen(true)}
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Enroll Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Master Jenkins?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join our comprehensive training program and become a CI/CD expert
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <RegistrationForm
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        courseName="Self-Paced Jenkins Training"
      />
    </main>
  );
} 