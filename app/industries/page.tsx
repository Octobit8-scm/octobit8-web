'use client';

import { motion } from 'framer-motion';
import { 
  AcademicCapIcon,
  GlobeAltIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

const IndustriesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide specialized IT solutions tailored to meet the unique needs of different industries.
            Explore how we can help your sector thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Education Industry */}
          <Link href="/industries/education">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg cursor-pointer h-full"
            >
              <div className="text-primary mb-4">
                <AcademicCapIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-gray-600">
                Digital learning platforms and educational technology solutions for modern institutions.
              </p>
            </motion.div>
          </Link>

          {/* Travel Industry */}
          <Link href="/industries/travel">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg cursor-pointer h-full"
            >
              <div className="text-primary mb-4">
                <GlobeAltIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">Travel</h3>
              <p className="text-gray-600">
                Booking systems and travel management platforms for the modern travel industry.
              </p>
            </motion.div>
          </Link>

          {/* Healthcare Industry */}
          <Link href="/industries/healthcare">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg cursor-pointer h-full"
            >
              <div className="text-primary mb-4">
                <HeartIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">Healthcare</h3>
              <p className="text-gray-600">
                Healthcare management systems and patient care solutions for medical facilities.
              </p>
            </motion.div>
          </Link>
        </div>

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
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Industry?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Let's discuss how we can help you achieve your goals
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
      </div>
    </div>
  );
}

export default IndustriesPage; 