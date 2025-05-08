'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function DevOpsTraining() {
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
            DevOps Training & Certification
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Master the art of DevOps with our comprehensive training programs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Azure DevOps Training */}
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
              Azure DevOps Training
            </h2>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Azure Pipelines & CI/CD</li>
              <li>• Azure Repos & Git</li>
              <li>• Azure Artifacts</li>
              <li>• Azure Boards</li>
              <li>• Azure Test Plans</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Enroll Now
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          {/* AWS DevOps Training */}
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
              AWS DevOps Training
            </h2>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• AWS CodePipeline</li>
              <li>• AWS CodeBuild</li>
              <li>• AWS CodeDeploy</li>
              <li>• AWS CloudFormation</li>
              <li>• AWS Systems Manager</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Enroll Now
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          {/* GCP DevOps Training */}
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
              Google Cloud DevOps Training
            </h2>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Cloud Build</li>
              <li>• Cloud Deploy</li>
              <li>• Cloud Source Repositories</li>
              <li>• Cloud Monitoring</li>
              <li>• Cloud Logging</li>
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
            Why Choose Our DevOps Training?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Hands-on Experience
              </h3>
              <p className="text-gray-600">
                Get practical experience with real-world projects and scenarios
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Expert Instructors
              </h3>
              <p className="text-gray-600">
                Learn from certified professionals with industry experience
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Certification Preparation
              </h3>
              <p className="text-gray-600">
                Comprehensive preparation for major cloud provider certifications
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Flexible Learning
              </h3>
              <p className="text-gray-600">
                Choose from online, in-person, or hybrid learning options
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 