'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Career() {
  const trainingCourses = [
    {
      title: 'DevOps Training',
      description: 'Master the art of DevOps with our comprehensive training program covering tools, practices, and real-world scenarios.',
      href: '/career/devops-training',
      curriculumUrl: '/curriculum/devops-training.pdf',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Cloud Training',
      description: 'Learn cloud computing fundamentals and advanced concepts with hands-on experience on major cloud platforms.',
      href: '/career/cloud-training',
      curriculumUrl: '/curriculum/cloud-training.pdf',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
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
              Build Your Future with Octobit8
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Join our training programs and kickstart your career in DevOps and Cloud Computing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Training Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive training programs designed to help you succeed in the tech industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingCourses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <div className="flex flex-col space-y-3 mt-4">
                  <Link
                    href={course.href}
                    className="inline-block bg-primary text-white px-6 py-2 rounded-lg text-center hover:bg-primary/90 transition-colors"
                  >
                    Learn More
                  </Link>
                  <a
                    href={course.curriculumUrl}
                    download
                    className="inline-block bg-white border-2 border-primary text-primary px-6 py-2 rounded-lg text-center hover:bg-primary/10 transition-colors font-medium"
                  >
                    Download Curriculum
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Career Opportunities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our team and work on exciting projects with cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'DevOps Engineer',
                description: 'Design and implement CI/CD pipelines, automate infrastructure, and optimize deployment processes.',
                icon: '⚙️'
              },
              {
                title: 'Cloud Architect',
                description: 'Design and implement cloud solutions, ensuring scalability, security, and cost-effectiveness.',
                icon: '☁️'
              },
              {
                title: 'Training Instructor',
                description: 'Share your expertise and mentor the next generation of DevOps and Cloud professionals.',
                icon: '📚'
              }
            ].map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{job.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                <p className="text-gray-600">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact us to learn more about our training programs and career opportunities
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 