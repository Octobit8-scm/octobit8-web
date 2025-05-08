'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircleIcon, CodeBracketIcon, ServerIcon, CloudIcon, ChartBarIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function IaCCaseStudy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Infrastructure as Code Case Study
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionizing infrastructure management through comprehensive IaC implementation across multiple cloud platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-gray-600 mb-8">
            A global e-commerce company sought to modernize their infrastructure management by implementing Infrastructure as Code (IaC) across their multi-cloud environment. The goal was to achieve consistent, version-controlled, and automated infrastructure deployments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Challenges</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Manual infrastructure provisioning
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Inconsistent environments
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Lack of version control
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Multi-cloud complexity
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Security compliance issues
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Terraform for cloud provisioning
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Ansible for configuration management
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  CloudFormation for AWS resources
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  ARM templates for Azure
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  GitOps workflow implementation
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Results</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  70% faster deployments
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  100% environment consistency
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  60% cost reduction
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Zero configuration drift
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Automated compliance checks
                </li>
              </ul>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-primary text-white p-6 rounded-lg text-center">
              <ClockIcon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">70%</div>
              <p className="text-sm">Faster Deployments</p>
            </div>
            <div className="bg-primary text-white p-6 rounded-lg text-center">
              <ChartBarIcon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">100%</div>
              <p className="text-sm">Environment Consistency</p>
            </div>
            <div className="bg-primary text-white p-6 rounded-lg text-center">
              <ShieldCheckIcon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">60%</div>
              <p className="text-sm">Cost Reduction</p>
            </div>
            <div className="bg-primary text-white p-6 rounded-lg text-center">
              <CodeBracketIcon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">0</div>
              <p className="text-sm">Configuration Drift</p>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Implementation Details</h2>
          
          {/* Terraform */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Image src="/images/terraform-logo.png" alt="Terraform" width={32} height={32} className="mr-2" />
              Terraform Implementation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Key Components</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Module-based architecture
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    State management
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Workspace management
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Remote state backend
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Variable management
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Features</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Multi-cloud support
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Plan and apply workflow
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Resource dependencies
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Output management
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Provider configuration
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ansible */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Image src="/images/ansible-logo.png" alt="Ansible" width={32} height={32} className="mr-2" />
              Ansible Implementation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Key Components</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Playbook structure
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Role-based organization
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Inventory management
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Variable precedence
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Template management
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Features</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Idempotent operations
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Task execution
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Handler management
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Conditional execution
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Error handling
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* AWS CloudFormation */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Image src="/images/aws-logo.png" alt="AWS" width={32} height={32} className="mr-2" />
              AWS CloudFormation Implementation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Key Components</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Template structure
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Resource definitions
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Parameter management
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Output configuration
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Stack management
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Features</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Change sets
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Nested stacks
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Stack policies
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Drift detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Rollback triggers
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Azure ARM Templates */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Image src="/images/azure-logo.png" alt="Azure" width={32} height={32} className="mr-2" />
              Azure ARM Templates Implementation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Key Components</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Template structure
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Resource definitions
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Parameter files
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Variable management
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Output configuration
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Features</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Template validation
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Deployment modes
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Resource dependencies
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Conditional deployment
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Template linking
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
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <p className="text-gray-600">Faster Deployments</p>
              <p className="text-sm text-gray-500 mt-2">Reduced deployment time</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-gray-600">Environment Consistency</p>
              <p className="text-sm text-gray-500 mt-2">Across all environments</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <p className="text-gray-600">Cost Reduction</p>
              <p className="text-sm text-gray-500 mt-2">Infrastructure costs</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss how we can help you implement Infrastructure as Code.
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