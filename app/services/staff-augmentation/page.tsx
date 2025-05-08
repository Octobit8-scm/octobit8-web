'use client';

import { motion, Variants } from 'framer-motion';
import { UserGroupIcon, ClockIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const scaleIn: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function StaffAugmentationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-10"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <UserGroupIcon className="w-12 h-12 text-white" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">Staff Augmentation</h1>
              <p className="text-xl mt-2 text-gray-200">
                Scale your team with skilled professionals on demand
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold mb-6">Our Staff Augmentation Services</h2>
              <div className="prose max-w-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-4">Comprehensive Staffing Solutions</h3>
                  <motion.div 
                    className="grid md:grid-cols-2 gap-6 mb-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      variants={scaleIn}
                      className="border rounded-lg p-6 hover:border-primary transition-colors duration-300"
                    >
                      <h4 className="font-semibold text-lg mb-3">Technical Expertise</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          DevOps Engineers
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Cloud Architects
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Full Stack Developers
                        </li>
                      </ul>
                    </motion.div>
                    <motion.div
                      variants={scaleIn}
                      className="border rounded-lg p-6 hover:border-primary transition-colors duration-300"
                    >
                      <h4 className="font-semibold text-lg mb-3">Project Management</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Project Managers
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Scrum Masters
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Business Analysts
                        </li>
                      </ul>
                    </motion.div>
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <motion.div 
                    className="grid md:grid-cols-2 gap-6 mb-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      variants={scaleIn}
                      className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                        <ClockIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Rapid Deployment</h4>
                        <p className="text-gray-600">Quickly scale your team with pre-vetted professionals ready to start immediately.</p>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={scaleIn}
                      className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                        <ChartBarIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Cost Efficiency</h4>
                        <p className="text-gray-600">Reduce overhead costs while maintaining high-quality talent and expertise.</p>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={scaleIn}
                      className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                        <ShieldCheckIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Quality Assurance</h4>
                        <p className="text-gray-600">Access to thoroughly vetted professionals with proven track records.</p>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={scaleIn}
                      className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                        <UserGroupIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Flexible Engagement</h4>
                        <p className="text-gray-600">Choose from various engagement models to suit your project needs.</p>
                      </div>
                    </motion.div>
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-4">Our Process</h3>
                  <motion.div 
                    className="space-y-4"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      variants={scaleIn}
                      className="flex gap-4 items-start"
                    >
                      <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-primary font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Requirement Analysis</h4>
                        <p className="text-gray-600">We analyze your project requirements and team needs to identify the right talent.</p>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={scaleIn}
                      className="flex gap-4 items-start"
                    >
                      <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-primary font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Talent Matching</h4>
                        <p className="text-gray-600">We match you with pre-vetted professionals who meet your specific requirements.</p>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={scaleIn}
                      className="flex gap-4 items-start"
                    >
                      <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-primary font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Onboarding</h4>
                        <p className="text-gray-600">We facilitate smooth onboarding and integration with your existing team.</p>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={scaleIn}
                      className="flex gap-4 items-start"
                    >
                      <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-primary font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Continuous Support</h4>
                        <p className="text-gray-600">We provide ongoing support and ensure project success through regular check-ins.</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 mt-8"
            >
              <h2 className="text-2xl font-bold mb-6">Success Metrics</h2>
              <motion.div 
                className="grid md:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={scaleIn}
                  className="text-center p-6 bg-gray-50 rounded-lg"
                >
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <p className="text-gray-600">Client Satisfaction</p>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="text-center p-6 bg-gray-50 rounded-lg"
                >
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <p className="text-gray-600">Professionals Placed</p>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="text-center p-6 bg-gray-50 rounded-lg"
                >
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-gray-600">Successful Projects</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Engagement Models */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-4">Engagement Models</h3>
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={scaleIn}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <h4 className="font-semibold text-lg mb-3">Full-Time</h4>
                  <p className="text-gray-600">Dedicated professionals working exclusively on your project.</p>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <h4 className="font-semibold text-lg mb-3">Part-Time</h4>
                  <p className="text-gray-600">Flexible engagement for specific project needs.</p>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <h4 className="font-semibold text-lg mb-3">Project-Based</h4>
                  <p className="text-gray-600">Complete project delivery with dedicated teams.</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-4">Ready to Scale Your Team?</h3>
              <p className="text-white mb-4">
                Let's discuss how we can help you find the right talent for your project.
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

            {/* Client Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold mb-4">Client Testimonials</h2>
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={scaleIn}
                  className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-300 p-2 rounded-r-lg"
                >
                  <p className="text-gray-600 italic">"The staff augmentation service helped us quickly scale our team with highly skilled professionals. The onboarding was seamless, and the team integrated perfectly with our existing staff."</p>
                  <p className="font-semibold mt-2">- Sarah Johnson, CTO of TechSolutions</p>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-300 p-2 rounded-r-lg"
                >
                  <p className="text-gray-600 italic">"We were able to find the perfect match for our project needs within days. The quality of professionals provided exceeded our expectations."</p>
                  <p className="font-semibold mt-2">- Michael Chen, Project Manager at InnovateCorp</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
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
            <h2 className="text-4xl font-bold mb-4">Ready to Scale Your Team?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss how we can help you find the right talent for your project.
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
  );
} 