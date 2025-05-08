'use client';

import { motion } from 'framer-motion';
import { CloudIcon, CheckCircleIcon, ArrowPathIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

export default function DevOpsCloudPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
              DevOps & Cloud Solutions
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Transform your infrastructure with our comprehensive DevOps and Cloud services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
              <CloudIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Cloud Infrastructure</h3>
            <p className="text-gray-600">
              Design, implement, and manage cloud infrastructure across AWS, Azure, and GCP.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
              <ArrowPathIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">CI/CD Pipelines</h3>
            <p className="text-gray-600">
              Implement automated CI/CD pipelines for faster and more reliable software delivery.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
              <CodeBracketIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Infrastructure as Code</h3>
            <p className="text-gray-600">
              Manage your infrastructure using code with Terraform, Ansible, and CloudFormation.
            </p>
          </div>
        </div>
      </div>

      {/* Existing Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our DevOps & Cloud Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Cloud Infrastructure Management</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Design and implement scalable cloud architectures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Multi-cloud strategy and implementation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Cloud security and compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Cost optimization and monitoring</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">CI/CD Pipeline Implementation</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Automated build and deployment pipelines</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Continuous testing and quality assurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Version control and release management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Monitoring and alerting integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CI/CD Implementation */}
          <Link href="/services/devops-cloud/case-studies/cicd-implementation" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full transform transition-transform duration-300 group-hover:scale-105">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
                <ArrowPathIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">CI/CD Implementation</h3>
              <p className="text-gray-600 mb-4">
                Transforming software delivery through comprehensive CI/CD pipeline implementation across multiple platforms.
              </p>
              <div className="flex items-center text-primary">
                <span className="mr-2">Learn more</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Infrastructure as Code */}
          <Link href="/services/devops-cloud/case-studies/infrastructure-as-code" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full transform transition-transform duration-300 group-hover:scale-105">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
                <CodeBracketIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Infrastructure as Code</h3>
              <p className="text-gray-600 mb-4">
                Revolutionizing infrastructure management through comprehensive IaC implementation across multiple cloud platforms.
              </p>
              <div className="flex items-center text-primary">
                <span className="mr-2">Learn more</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Cloud Migration */}
          <Link href="/services/devops-cloud/case-studies/cloud-migration" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full transform transition-transform duration-300 group-hover:scale-105">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
                <CloudIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cloud Migration</h3>
              <p className="text-gray-600 mb-4">
                Successfully migrating enterprise workloads to the cloud with minimal disruption and maximum efficiency.
              </p>
              <div className="flex items-center text-primary">
                <span className="mr-2">Learn more</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss how we can help you with your DevOps and Cloud journey.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 