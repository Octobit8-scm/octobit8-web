'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function CloudTraining() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Cloud Computing Training & Certification
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Become a cloud expert with our industry-leading training programs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Azure Cloud Training */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex justify-center mb-4">
              <Image
                src="/images/azure-logo.svg"
                alt="Microsoft Azure"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Microsoft Azure Training
            </h2>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Azure Fundamentals</li>
              <li>• Azure Administrator</li>
              <li>• Azure Solutions Architect</li>
              <li>• Azure Developer</li>
              <li>• Azure Security Engineer</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Enroll Now
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          {/* AWS Cloud Training */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex justify-center mb-4">
              <Image
                src="/images/aws-logo.svg"
                alt="Amazon Web Services"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              AWS Cloud Training
            </h2>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• AWS Cloud Practitioner</li>
              <li>• AWS Solutions Architect</li>
              <li>• AWS Developer</li>
              <li>• AWS SysOps Administrator</li>
              <li>• AWS Security Specialist</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Enroll Now
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          {/* GCP Cloud Training */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex justify-center mb-4">
              <Image
                src="/images/gcp-logo.svg"
                alt="Google Cloud Platform"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Google Cloud Training
            </h2>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Cloud Digital Leader</li>
              <li>• Cloud Engineer</li>
              <li>• Cloud Architect</li>
              <li>• Cloud Developer</li>
              <li>• Cloud Security Engineer</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Enroll Now
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Training Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Live Training Sessions
              </h3>
              <p className="text-gray-600">
                Interactive sessions with industry experts and hands-on labs
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Practice Exams
              </h3>
              <p className="text-gray-600">
                Comprehensive practice tests to prepare for certification exams
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Real-world Projects
              </h3>
              <p className="text-gray-600">
                Work on actual cloud projects to build your portfolio
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Career Support
              </h3>
              <p className="text-gray-600">
                Resume building, interview preparation, and job placement assistance
              </p>
            </div>
          </div>
        </motion.div>

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
            Get Started with Cloud Training
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 