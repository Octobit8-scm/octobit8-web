'use client';

import { AcademicCapIcon, ClockIcon, CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InternshipPage() {
  const internships = [
    {
      title: 'DevOps Engineering Intern',
      location: 'Noida, India',
      duration: '6 months',
      stipend: '₹15,000 - ₹25,000 per month',
      requirements: [
        'Currently pursuing B.Tech/M.Tech in Computer Science or related field',
        'Basic knowledge of Linux and networking',
        'Understanding of CI/CD concepts',
        'Familiarity with cloud platforms (AWS/Azure/GCP)',
        'Good problem-solving skills'
      ],
      responsibilities: [
        'Assist in implementing and maintaining CI/CD pipelines',
        'Help with cloud infrastructure management',
        'Learn and work with containerization technologies',
        'Participate in monitoring and logging implementation',
        'Collaborate with the development team on automation tasks'
      ]
    },
    {
      title: 'Cloud Computing Intern',
      location: 'Varanasi, India',
      duration: '6 months',
      stipend: '₹15,000 - ₹25,000 per month',
      requirements: [
        'Currently pursuing B.Tech/M.Tech in Computer Science or related field',
        'Basic understanding of cloud computing concepts',
        'Knowledge of programming languages (Python/Java)',
        'Familiarity with databases',
        'Strong analytical skills'
      ],
      responsibilities: [
        'Assist in cloud infrastructure deployment',
        'Help with cloud security implementation',
        'Learn and work with serverless technologies',
        'Participate in cloud cost optimization',
        'Support the team in cloud migration projects'
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
              Internship Opportunities
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Start your career journey with hands-on experience in DevOps and Cloud Computing
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Intern at Octobit8?</h2>
          <p className="text-gray-600 mb-8">
            Join our internship program to gain practical experience, learn from industry experts, 
            and kickstart your career in technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Learning & Growth</h3>
              <p className="text-gray-600 text-sm">
                Structured training program with mentorship from experienced professionals
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible Hours</h3>
              <p className="text-gray-600 text-sm">
                Balance your studies with practical work experience
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <CurrencyDollarIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Competitive Stipend</h3>
              <p className="text-gray-600 text-sm">
                Get paid while you learn and gain valuable experience
              </p>
            </div>
          </div>
        </div>

        {/* Available Internships */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8">Available Internships</h2>
          
          {internships.map((internship, index) => (
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
                    <h3 className="text-2xl font-bold mb-2">{internship.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{internship.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        <span>{internship.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CurrencyDollarIcon className="w-4 h-4" />
                        <span>{internship.stipend}</span>
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
                      {internship.requirements.map((req, i) => (
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
                      {internship.responsibilities.map((resp, i) => (
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

        {/* Application Process */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Submit Application',
                description: 'Fill out the application form with your details and resume'
              },
              {
                step: '2',
                title: 'Technical Assessment',
                description: 'Complete a brief technical assessment related to your field'
              },
              {
                step: '3',
                title: 'Interview',
                description: 'Virtual interview with our technical team'
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-8">
            Take the first step towards your career in technology
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