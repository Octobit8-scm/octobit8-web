'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircleIcon, CodeBracketIcon, ServerIcon, CloudIcon, ChartBarIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function IaCProject() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-12">
              E-commerce Infrastructure as Code Project
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Implementing Infrastructure as Code for a global e-commerce platform to achieve consistent, version-controlled, and automated infrastructure deployments.
            </p>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gray-800 rounded-lg shadow-lg p-10">
          <h2 className="text-3xl font-bold mb-12 text-white">Project Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-700 p-10 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 text-white">Client Background</h3>
              <p className="text-gray-300 leading-relaxed">
                A global e-commerce company with a complex multi-cloud infrastructure. The company was facing challenges with manual infrastructure provisioning, inconsistent environments, and lack of version control.
              </p>
            </div>
            
            <div className="bg-gray-700 p-10 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 text-white">Project Scope</h3>
              <ul className="space-y-6 text-gray-300">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">Implement IaC for 100+ cloud resources</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">Multi-cloud infrastructure management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">Automated compliance checks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">Environment consistency</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Architecture */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-12 text-white">Architecture</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-gray-700 p-10 rounded-lg">
                <h4 className="text-lg font-semibold mb-6 text-white">Terraform</h4>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Module-based architecture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Remote state management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Workspace management</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-10 rounded-lg">
                <h4 className="text-lg font-semibold mb-6 text-white">Ansible</h4>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Configuration management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Role-based organization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Inventory management</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-10 rounded-lg">
                <h4 className="text-lg font-semibold mb-6 text-white">CloudFormation</h4>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">AWS resource management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Stack management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Change sets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Implementation Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-12 text-white">Implementation Timeline</h3>
            <div className="space-y-8">
              <div className="bg-gray-700 p-10 rounded-lg">
                <h4 className="text-lg font-semibold mb-6 text-white">Phase 1: Assessment & Planning (3 weeks)</h4>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Infrastructure audit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Tool selection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Architecture design</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-10 rounded-lg">
                <h4 className="text-lg font-semibold mb-6 text-white">Phase 2: Development (6 weeks)</h4>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Terraform implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Ansible playbooks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">CloudFormation templates</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-10 rounded-lg">
                <h4 className="text-lg font-semibold mb-6 text-white">Phase 3: Testing & Deployment (3 weeks)</h4>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Infrastructure testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Production deployment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Team training</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-12 text-white">Project Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-gray-700 p-10 rounded-lg text-center">
                <ClockIcon className="h-14 w-14 mx-auto mb-6 text-primary" />
                <div className="text-4xl font-bold text-primary mb-4">70%</div>
                <p className="text-gray-300 font-medium text-lg mb-2">Faster Deployments</p>
                <p className="text-gray-400">Reduced deployment time</p>
              </div>
              
              <div className="bg-gray-700 p-10 rounded-lg text-center">
                <ChartBarIcon className="h-14 w-14 mx-auto mb-6 text-primary" />
                <div className="text-4xl font-bold text-primary mb-4">100%</div>
                <p className="text-gray-300 font-medium text-lg mb-2">Environment Consistency</p>
                <p className="text-gray-400">Across all environments</p>
              </div>
              
              <div className="bg-gray-700 p-10 rounded-lg text-center">
                <ShieldCheckIcon className="h-14 w-14 mx-auto mb-6 text-primary" />
                <div className="text-4xl font-bold text-primary mb-4">60%</div>
                <p className="text-gray-300 font-medium text-lg mb-2">Cost Reduction</p>
                <p className="text-gray-400">Infrastructure costs</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-10 py-5 rounded-md font-medium hover:bg-primary-dark transition-colors text-lg"
            >
              Start Your IaC Journey
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 