'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircleIcon, ArrowPathIcon, ServerIcon, CodeBracketIcon, ChartBarIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function CICDCaseStudy() {
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
              CI/CD Implementation Case Study
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming software delivery through comprehensive CI/CD pipeline implementation across multiple platforms.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-gray-600 mb-8">
            A leading financial services company sought to modernize their software delivery process by implementing comprehensive CI/CD pipelines across their development teams. The goal was to reduce deployment time, improve code quality, and enable faster feature releases.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Challenges</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Manual deployment processes taking 4+ hours
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Inconsistent testing practices across teams
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Long release cycles (2-3 weeks)
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Multiple development teams with different workflows
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  High rate of deployment failures
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Automated CI/CD pipelines with multiple stages
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Standardized testing framework
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Containerized deployments
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Cross-platform support
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  Automated rollback mechanisms
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Results</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  80% faster deployments (from 4 hours to 45 minutes)
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  90% test coverage achieved
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  50% fewer production incidents
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  24/7 deployment capability
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                  95% successful deployment rate
                </li>
              </ul>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-primary text-white p-6 rounded-lg text-center">
              <ClockIcon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">80%</div>
              <p className="text-sm">Faster Deployments</p>
            </div>
            <div className="bg-primary text-white p-6 rounded-lg text-center">
              <ChartBarIcon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">90%</div>
              <p className="text-sm">Test Coverage</p>
            </div>
            <div className="bg-primary text-white p-6 rounded-lg text-center">
              <ShieldCheckIcon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">50%</div>
              <p className="text-sm">Fewer Incidents</p>
            </div>
            <div className="bg-primary text-white p-6 rounded-lg text-center">
              <ArrowPathIcon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">95%</div>
              <p className="text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Implementation Details</h2>
          
          {/* GitLab CI/CD */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Image src="/images/gitlab-logo.png" alt="GitLab" width={32} height={32} className="mr-2" />
              GitLab CI/CD Implementation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Pipeline Structure</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Multi-stage pipeline (build, test, deploy)
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Automated testing (unit, integration, e2e)
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Security scanning (SAST, DAST)
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Deployment automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Performance testing
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Auto-scaling runners
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Cache optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Parallel jobs
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Artifact management
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Environment management
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Jenkins Pipeline */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Image src="/images/jenkins-logo.png" alt="Jenkins" width={32} height={32} className="mr-2" />
              Jenkins Pipeline Implementation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Pipeline Structure</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Declarative pipelines
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Shared libraries
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Blue Ocean interface
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Pipeline as code
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Multi-branch pipelines
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Distributed builds
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Plugin ecosystem
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Job DSL
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Integration with tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Automated testing
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* AWS CodePipeline */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Image src="/images/aws-logo.png" alt="AWS" width={32} height={32} className="mr-2" />
              AWS CodePipeline Implementation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Pipeline Structure</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Source stage (CodeCommit)
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Build stage (CodeBuild)
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Test stage (CodeBuild)
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Deploy stage (CodeDeploy)
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Approval stage
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    AWS integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Event-driven
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Manual approvals
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Cross-region
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Custom actions
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Azure DevOps */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Image src="/images/azure-logo.png" alt="Azure" width={32} height={32} className="mr-2" />
              Azure DevOps Implementation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Pipeline Structure</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    YAML pipelines
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Release pipelines
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Multi-stage
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Environment management
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Approval gates
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Azure integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Artifact feeds
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Test plans
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Variable groups
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Deployment groups
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* GitHub Actions */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Image src="/images/github-logo.png" alt="GitHub" width={32} height={32} className="mr-2" />
              GitHub Actions Implementation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Pipeline Structure</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Workflow automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Event triggers
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Matrix builds
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Reusable workflows
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Environment protection
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    GitHub integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Marketplace actions
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Self-hosted runners
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Secrets management
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                    Cache management
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
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <p className="text-gray-600">Reduction in deployment time</p>
              <p className="text-sm text-gray-500 mt-2">From 4 hours to 45 minutes</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">90%</div>
              <p className="text-gray-600">Test coverage achieved</p>
              <p className="text-sm text-gray-500 mt-2">Across all codebases</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">50%</div>
              <p className="text-gray-600">Fewer production incidents</p>
              <p className="text-sm text-gray-500 mt-2">Year over year</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your CI/CD Pipeline?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss how we can help you implement efficient CI/CD practices.
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