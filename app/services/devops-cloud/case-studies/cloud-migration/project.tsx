'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircleIcon, ServerIcon, CloudIcon, CodeBracketIcon, ChartBarIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function CloudMigrationProject() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-12">
              Financial Institution Cloud Migration Project
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Successfully migrating a large financial institution's on-premises workloads to the cloud while ensuring security, compliance, and business continuity.
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
                A large financial institution with legacy on-premises infrastructure. The company needed to modernize their infrastructure, improve scalability, and reduce costs while maintaining strict security and compliance requirements.
              </p>
            </div>
            
            <div className="bg-gray-700 p-10 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 text-white">Project Scope</h3>
              <ul className="space-y-6 text-gray-300">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">Migrate 200+ servers to cloud</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">Implement multi-cloud strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">Ensure zero data loss</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">Maintain business continuity</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Architecture */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-12 text-white">Architecture</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-gray-700 p-10 rounded-lg">
                <h4 className="text-lg font-semibold mb-6 text-white">AWS Migration</h4>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">EC2 instance migration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">RDS database migration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">S3 storage migration</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-10 rounded-lg">
                <h4 className="text-lg font-semibold mb-6 text-white">Azure Migration</h4>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Azure VM migration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">SQL Server migration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Storage migration</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-10 rounded-lg">
                <h4 className="text-lg font-semibold mb-6 text-white">GCP Migration</h4>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Compute Engine migration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Cloud SQL migration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Storage migration</span>
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
                <h4 className="text-lg font-semibold mb-6 text-white">Phase 1: Assessment & Planning (4 weeks)</h4>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Infrastructure assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Cloud strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Migration planning</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-10 rounded-lg">
                <h4 className="text-lg font-semibold mb-6 text-white">Phase 2: Migration (12 weeks)</h4>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Pilot migration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Full-scale migration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Data migration</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-10 rounded-lg">
                <h4 className="text-lg font-semibold mb-6 text-white">Phase 3: Testing & Optimization (4 weeks)</h4>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Performance testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Security validation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Cost optimization</span>
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
                <div className="text-4xl font-bold text-primary mb-4">40%</div>
                <p className="text-gray-300 font-medium text-lg mb-2">Cost Reduction</p>
                <p className="text-gray-400">Infrastructure costs</p>
              </div>
              
              <div className="bg-gray-700 p-10 rounded-lg text-center">
                <ChartBarIcon className="h-14 w-14 mx-auto mb-6 text-primary" />
                <div className="text-4xl font-bold text-primary mb-4">99.99%</div>
                <p className="text-gray-300 font-medium text-lg mb-2">Uptime</p>
                <p className="text-gray-400">Service availability</p>
              </div>
              
              <div className="bg-gray-700 p-10 rounded-lg text-center">
                <ShieldCheckIcon className="h-14 w-14 mx-auto mb-6 text-primary" />
                <div className="text-4xl font-bold text-primary mb-4">0</div>
                <p className="text-gray-300 font-medium text-lg mb-2">Data Loss</p>
                <p className="text-gray-400">Incidents</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-10 py-5 rounded-md font-medium hover:bg-primary-dark transition-colors text-lg"
            >
              Start Your Cloud Migration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 