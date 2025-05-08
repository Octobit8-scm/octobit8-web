'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function CloudTraining() {
  const trainingPrograms = [
    {
      title: 'Self-Paced Azure Cloud Training',
      description: 'Master Microsoft Azure cloud services at your own pace with our comprehensive self-paced training program',
      link: '/career/cloud-training/azure',
      image: '/images/azure.svg',
      price: '₹50,000'
    },
    {
      title: 'Self-Paced AWS Cloud Training',
      description: 'Learn Amazon Web Services cloud platform at your own pace with our self-paced training program',
      link: '/career/cloud-training/aws',
      image: '/images/aws.svg',
      price: '₹50,000'
    },
    {
      title: 'Self-Paced GCP Cloud Training',
      description: 'Master Google Cloud Platform services at your own pace with our self-paced training program',
      link: '/career/cloud-training/gcp',
      image: '/images/gcp.svg',
      price: '₹50,000'
    }
  ];

  const features = [
    {
      title: 'Self-Paced Learning',
      description: 'Learn at your own pace with lifetime access to course materials'
    },
    {
      title: 'Hands-on Projects',
      description: 'Practical exercises and real-world projects to apply your knowledge'
    },
    {
      title: 'Certification Guidance',
      description: 'Resources and guidance for industry-recognized certifications'
    },
    {
      title: 'Community Support',
      description: 'Access to our community forum for peer learning and support'
    }
  ];

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
              Self-Paced Cloud Training
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Master cloud computing across major platforms at your own pace with our comprehensive self-paced training programs
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn More
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Self-Paced Training Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our self-paced training programs include everything you need to succeed at your own pace
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
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
              Ready to Start Your Self-Paced Cloud Journey?
            </h2>
            <p className="text-xl mb-8">
              Enroll in our self-paced cloud training programs today and learn at your own pace
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
    </main>
  );
} 