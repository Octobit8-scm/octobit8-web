'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircleIcon, CodeBracketIcon, ServerIcon, CloudIcon, ChartBarIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function CICDProject() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-12">
              Financial Services CI/CD Implementation Project
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Implementing a comprehensive CI/CD pipeline for a financial services company to automate their software delivery process and improve deployment reliability.
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
                A leading financial services company with a complex microservices architecture. The company was facing challenges with manual deployment processes, inconsistent testing practices, and frequent production incidents.
              </p>
            </div>
            
            <div className="bg-gray-700 p-10 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 text-white">Project Scope</h3>
              <ul className="space-y-6 text-gray-300">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">Implement CI/CD pipelines for 15+ microservices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">Standardize testing practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">Automate deployment processes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">Implement security scanning</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Architecture */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-12 text-white">Architecture</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-gray-700 p-10 rounded-lg">
                <h4 className="text-lg font-semibold mb-6 text-white">Source Control</h4>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">GitLab repositories</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Branch protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Code review workflow</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-10 rounded-lg">
                <h4 className="text-lg font-semibold mb-6 text-white">Build & Test</h4>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Jenkins pipelines</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Automated testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Code quality checks</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-10 rounded-lg">
                <h4 className="text-lg font-semibold mb-6 text-white">Deployment</h4>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">AWS CodePipeline</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Blue-green deployment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Rollback automation</span>
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
                <h4 className="text-lg font-semibold mb-6 text-white">Phase 1: Setup & Planning (2 weeks)</h4>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Infrastructure setup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Tool selection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Pipeline design</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-10 rounded-lg">
                <h4 className="text-lg font-semibold mb-6 text-white">Phase 2: Development (4 weeks)</h4>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Pipeline implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Test automation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Security integration</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-10 rounded-lg">
                <h4 className="text-lg font-semibold mb-6 text-white">Phase 3: Testing & Deployment (2 weeks)</h4>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">Pipeline testing</span>
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
                <div className="text-4xl font-bold text-primary mb-4">80%</div>
                <p className="text-gray-300 font-medium text-lg mb-2">Faster Deployments</p>
                <p className="text-gray-400">Reduced from 4 hours to 45 minutes</p>
              </div>
              
              <div className="bg-gray-700 p-10 rounded-lg text-center">
                <ChartBarIcon className="h-14 w-14 mx-auto mb-6 text-primary" />
                <div className="text-4xl font-bold text-primary mb-4">90%</div>
                <p className="text-gray-300 font-medium text-lg mb-2">Test Coverage</p>
                <p className="text-gray-400">Automated test coverage</p>
              </div>
              
              <div className="bg-gray-700 p-10 rounded-lg text-center">
                <ShieldCheckIcon className="h-14 w-14 mx-auto mb-6 text-primary" />
                <div className="text-4xl font-bold text-primary mb-4">50%</div>
                <p className="text-gray-300 font-medium text-lg mb-2">Fewer Incidents</p>
                <p className="text-gray-400">Year over year reduction</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-10 py-5 rounded-md font-medium hover:bg-primary-dark transition-colors text-lg"
            >
              Start Your CI/CD Journey
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 