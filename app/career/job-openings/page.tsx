'use client';

import { BriefcaseIcon, ClockIcon, CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function JobOpeningsPage() {
  const jobs = [
    {
      title: 'Senior DevOps Engineer',
      location: 'Noida, India',
      type: 'Full-time',
      experience: '5+ years',
      salary: '₹18-25 LPA',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'Strong experience with AWS/Azure/GCP',
        'Expertise in CI/CD tools (Jenkins, GitLab CI, GitHub Actions)',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong scripting skills (Python, Bash)',
        'Knowledge of Infrastructure as Code (Terraform, CloudFormation)',
        'Experience with monitoring tools (Prometheus, Grafana)',
        'Good communication and team collaboration skills'
      ],
      responsibilities: [
        'Design and implement CI/CD pipelines',
        'Manage and optimize cloud infrastructure',
        'Implement security best practices',
        'Automate deployment processes',
        'Monitor system performance and reliability',
        'Collaborate with development teams',
        'Mentor junior team members',
        'Participate in on-call rotation'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      location: 'Varanasi, India',
      type: 'Full-time',
      experience: '7+ years',
      salary: '₹25-35 LPA',
      requirements: [
        'Bachelor\'s/Master\'s degree in Computer Science or related field',
        'Strong experience with multiple cloud platforms',
        'Deep understanding of cloud architecture patterns',
        'Experience with microservices architecture',
        'Knowledge of security and compliance',
        'Strong problem-solving skills',
        'Excellent communication abilities',
        'Cloud certifications preferred'
      ],
      responsibilities: [
        'Design cloud architecture solutions',
        'Lead technical discussions with clients',
        'Ensure solution scalability and reliability',
        'Optimize cloud costs',
        'Implement security best practices',
        'Guide development teams',
        'Create technical documentation',
        'Drive cloud adoption strategies'
      ]
    }
  ];

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
              Job Openings
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Join our team of experts in DevOps and Cloud Computing
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Work at Octobit8?</h2>
          <p className="text-gray-600 mb-8">
            Join a dynamic team where innovation meets growth opportunities
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BriefcaseIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-600 text-sm">
                Continuous learning and advancement opportunities
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Work-Life Balance</h3>
              <p className="text-gray-600 text-sm">
                Flexible work hours and remote work options
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <CurrencyDollarIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Competitive Package</h3>
              <p className="text-gray-600 text-sm">
                Attractive salary and comprehensive benefits
              </p>
            </div>
          </div>
        </div>

        {/* Available Positions */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8">Available Positions</h2>
          
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BriefcaseIcon className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CurrencyDollarIcon className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                  >
                    Apply Now
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-primary mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-primary mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Health Insurance',
                description: 'Comprehensive medical coverage for you and your family'
              },
              {
                title: 'Learning Budget',
                description: 'Annual budget for courses, certifications, and conferences'
              },
              {
                title: 'Stock Options',
                description: 'Be a part of our growth with equity compensation'
              },
              {
                title: 'Remote Work',
                description: 'Flexible work-from-home options available'
              },
              {
                title: 'Paid Time Off',
                description: 'Generous vacation policy and paid holidays'
              },
              {
                title: 'Team Events',
                description: 'Regular team building and social activities'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-gray-600 mb-8">
            Take the next step in your career with Octobit8
          </p>
          <Link
            href="/contact"
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 inline-block"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
} 