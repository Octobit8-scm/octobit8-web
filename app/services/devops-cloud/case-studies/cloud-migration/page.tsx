'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircleIcon, ServerIcon, CloudIcon, CodeBracketIcon, ChartBarIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function CloudMigrationCaseStudy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Cloud Migration Case Study
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Successfully migrating enterprise workloads to the cloud with minimal disruption and maximum efficiency.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-gray-600 mb-8">
            A large financial institution sought to modernize their infrastructure by migrating on-premises workloads to the cloud. The goal was to improve scalability, reduce costs, and enhance security while maintaining business continuity.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Challenges</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Legacy infrastructure
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Complex dependencies
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Data security concerns
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Business continuity
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Compliance requirements
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  AWS migration strategy
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Azure migration plan
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  GCP migration approach
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Hybrid cloud strategy
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Security-first approach
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Results</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  40% cost reduction
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  99.99% uptime
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Zero data loss
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Enhanced security
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Improved scalability
                </li>
              </ul>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-primary text-white p-6 rounded-lg text-center">
              <ClockIcon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">40%</div>
              <p className="text-sm">Cost Reduction</p>
            </div>
            <div className="bg-primary text-white p-6 rounded-lg text-center">
              <ChartBarIcon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">99.99%</div>
              <p className="text-sm">Uptime</p>
            </div>
            <div className="bg-primary text-white p-6 rounded-lg text-center">
              <ShieldCheckIcon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">0</div>
              <p className="text-sm">Data Loss</p>
            </div>
            <div className="bg-primary text-white p-6 rounded-lg text-center">
              <ServerIcon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">100%</div>
              <p className="text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Implementation Details</h2>
          
          {/* AWS Migration */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Image src="/images/aws-logo.png" alt="AWS" width={32} height={32} className="mr-2" />
              AWS Migration Strategy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Migration Approach</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Lift and shift strategy
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    EC2 instance migration
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    RDS database migration
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    S3 storage migration
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    VPC network setup
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Key Services</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    AWS Migration Hub
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Database Migration Service
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Server Migration Service
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Application Discovery Service
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    CloudWatch monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Azure Migration */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Image src="/images/azure-logo.png" alt="Azure" width={32} height={32} className="mr-2" />
              Azure Migration Strategy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Migration Approach</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Azure Migrate assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Azure VM migration
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    SQL Server migration
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Storage migration
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Network migration
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Key Services</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Azure Migrate
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Azure Site Recovery
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Azure Database Migration Service
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Azure Monitor
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Azure Security Center
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* GCP Migration */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Image src="/images/gcp-logo.png" alt="GCP" width={32} height={32} className="mr-2" />
              GCP Migration Strategy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Migration Approach</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Compute Engine migration
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Cloud SQL migration
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Storage migration
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Network migration
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Security setup
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Key Services</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Migrate for Compute Engine
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Database Migration Service
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Cloud Storage
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Cloud Monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Security Command Center
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <p className="text-gray-600">Cost Reduction</p>
              <p className="text-sm text-gray-500 mt-2">Infrastructure costs</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.99%</div>
              <p className="text-gray-600">Uptime</p>
              <p className="text-sm text-gray-500 mt-2">Service availability</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">0</div>
              <p className="text-gray-600">Data Loss</p>
              <p className="text-sm text-gray-500 mt-2">Incidents</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Migrate to the Cloud?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss how we can help you migrate your workloads to the cloud.
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