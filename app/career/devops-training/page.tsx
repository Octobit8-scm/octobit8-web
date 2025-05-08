'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import RegistrationForm from '@/app/components/RegistrationForm';

export default function DevOpsTraining() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const trainingPrograms = [
    {
      title: 'Self-Paced GitHub Actions Training',
      description: 'Master GitHub Actions for CI/CD automation at your own pace with our comprehensive self-paced training program',
      link: '/career/devops-training/github-actions',
      image: '/images/github-actions.svg',
      price: '₹20,000'
    },
    {
      title: 'Self-Paced GitLab CI Training',
      description: 'Learn GitLab CI/CD pipeline automation at your own pace with our self-paced training program',
      link: '/career/devops-training/gitlab-ci',
      image: '/images/gitlab-ci.svg',
      price: '₹20,000'
    },
    {
      title: 'Self-Paced Jenkins Pipeline Training',
      description: 'Master Jenkins pipeline automation at your own pace with our self-paced training program',
      link: '/career/devops-training/jenkins',
      image: '/images/jenkins.svg',
      price: '₹20,000'
    },
    {
      title: 'Self-Paced Azure DevOps Training',
      description: 'Master Microsoft Azure DevOps tools at your own pace with our comprehensive self-paced training program',
      link: '/career/devops-training/azure',
      image: '/images/azure.svg',
      price: '₹20,000'
    },
    {
      title: 'Self-Paced AWS DevOps Training',
      description: 'Learn Amazon Web Services DevOps tools at your own pace with our self-paced training program',
      link: '/career/devops-training/aws',
      image: '/images/aws.svg',
      price: '₹20,000'
    },
    {
      title: 'Self-Paced GCP DevOps Training',
      description: 'Master Google Cloud Platform DevOps tools at your own pace with our self-paced training program',
      link: '/career/devops-training/gcp',
      image: '/images/gcp.svg',
      price: '₹20,000'
    }
  ];

  const handleEnrollClick = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setIsRegistrationOpen(true);
  };

  return (
    <main className="min-h-screen bg-gray-50">
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
              Self-Paced DevOps Training
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Master DevOps tools and practices across major platforms at your own pace with our comprehensive self-paced training programs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-16 mb-6 flex items-center justify-center">
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={120}
                    height={40}
                    className="object-contain"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {program.description}
                </p>
                <div className="text-2xl font-bold text-blue-500 mb-6">
                  {program.price}
                </div>
                <Link
                  href={program.link}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center block"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg p-8 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Self-Paced DevOps Journey?
            </h2>
            <p className="text-xl mb-8">
              Enroll in our self-paced DevOps training programs today and learn at your own pace
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Get in Touch
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <RegistrationForm
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        courseName={selectedCourse}
      />
    </main>
  );
} 