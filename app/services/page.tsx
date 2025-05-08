'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                Our Services
              </h1>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                Comprehensive solutions to drive your business forward
              </p>
            </motion.div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              AI Development
            </h2>
            <p className="text-gray-600 mb-6">
              Custom AI solutions and machine learning applications
            </p>
            <Link
              href="/services/ai-development"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Learn More
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          {/* DevOps & Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              DevOps & Cloud
            </h2>
            <p className="text-gray-600 mb-6">
              Cloud infrastructure and DevOps automation
            </p>
            <Link
              href="/services/devops-cloud"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Learn More
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          {/* DevOps Training */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              DevOps Training
            </h2>
            <p className="text-gray-600 mb-6">
              Professional DevOps training and certification
            </p>
            <Link
              href="/services/devops-training"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Learn More
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          {/* Cloud Training */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Cloud Training
            </h2>
            <p className="text-gray-600 mb-6">
              Comprehensive cloud computing training programs
            </p>
            <Link
              href="/services/cloud-training"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Learn More
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          {/* Staff Augmentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Staff Augmentation
            </h2>
            <p className="text-gray-600 mb-6">
              Scale your team with skilled professionals on demand
            </p>
            <Link
              href="/services/staff-augmentation"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Learn More
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Get Started with Our Services
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 