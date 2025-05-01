'use client';

import { motion } from 'framer-motion';
import { CpuChipIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

export default function AIDevelopmentPage() {
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
            <CpuChipIcon className="w-12 h-12 text-white" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">AI Development</h1>
              <p className="text-xl mt-2 text-gray-200">
                Building intelligent solutions for tomorrow's challenges
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
              <h2 className="text-3xl font-bold mb-6">Our AI Development Services</h2>
              <div className="prose max-w-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-4">Comprehensive AI Solutions</h3>
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
                      <h4 className="font-semibold text-lg mb-3">Machine Learning Solutions</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Predictive Analytics & Forecasting
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Anomaly Detection Systems
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Recommendation Engines
                        </li>
                      </ul>
                    </motion.div>
                    <motion.div
                      variants={scaleIn}
                      className="border rounded-lg p-6 hover:border-primary transition-colors duration-300"
                    >
                      <h4 className="font-semibold text-lg mb-3">Deep Learning Applications</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Computer Vision Systems
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Natural Language Processing
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Speech Recognition
                        </li>
                      </ul>
                    </motion.div>
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-4">Key Features & Benefits</h3>
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
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Advanced Analytics</h4>
                        <p className="text-gray-600">Leverage cutting-edge AI algorithms for deep insights and predictive capabilities.</p>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={scaleIn}
                      className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Automated Processes</h4>
                        <p className="text-gray-600">Streamline operations with intelligent automation and decision-making systems.</p>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={scaleIn}
                      className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Cost Efficiency</h4>
                        <p className="text-gray-600">Reduce operational costs through intelligent automation and optimization.</p>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={scaleIn}
                      className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Scalability</h4>
                        <p className="text-gray-600">Build AI solutions that grow with your business needs and data volume.</p>
                      </div>
                    </motion.div>
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-4">Implementation Process</h3>
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
                        <p className="text-gray-600">Comprehensive analysis of your business needs, data availability, and technical requirements to create a detailed AI implementation plan.</p>
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
                        <h4 className="font-semibold">Data Preparation</h4>
                        <p className="text-gray-600">Data collection, cleaning, and preprocessing to ensure your data is ready for model training and validation.</p>
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
                        <h4 className="font-semibold">Model Development</h4>
                        <p className="text-gray-600">Design and development of AI models, including training, validation, and optimization using best practices.</p>
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
                        <h4 className="font-semibold">Integration & Testing</h4>
                        <p className="text-gray-600">Integration of AI models into your systems and thorough testing to ensure seamless operation and optimal performance.</p>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={scaleIn}
                      className="flex gap-4 items-start"
                    >
                      <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-primary font-semibold">5</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Deployment & Monitoring</h4>
                        <p className="text-gray-600">Smooth deployment and continuous monitoring of AI solutions with ongoing support and model updates.</p>
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
                  <p className="text-gray-600">Model Accuracy</p>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="text-center p-6 bg-gray-50 rounded-lg"
                >
                  <div className="text-4xl font-bold text-primary mb-2">50%</div>
                  <p className="text-gray-600">Process Automation</p>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="text-center p-6 bg-gray-50 rounded-lg"
                >
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <p className="text-gray-600">AI Models Deployed</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* AI Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-4">AI Technologies & Frameworks</h3>
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
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Machine Learning Frameworks
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Core Frameworks</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          TensorFlow, PyTorch
                        </li>
                        <li className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Scikit-learn, Keras
                        </li>
                        <li className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          XGBoost, LightGBM
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={scaleIn}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    Deep Learning Models
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Neural Networks</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          CNN, RNN, LSTM
                        </li>
                        <li className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Transformers
                        </li>
                        <li className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          GANs, Autoencoders
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={scaleIn}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    NLP & Computer Vision
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Advanced Models</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          BERT, GPT, T5
                        </li>
                        <li className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          YOLO, ResNet
                        </li>
                        <li className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          OpenCV, Dlib
                        </li>
                      </ul>
                    </div>
                  </div>
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
              <h3 className="text-xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
              <p className="text-white mb-4">
                Let's discuss how we can help implement AI solutions for your specific needs.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Contact Us
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
                  <p className="text-gray-600 italic">"The AI implementation has revolutionized our customer service. Our response time has improved by 70% and customer satisfaction has increased significantly."</p>
                  <p className="font-semibold mt-2">- Sarah Johnson, CEO of TechSolutions</p>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-300 p-2 rounded-r-lg"
                >
                  <p className="text-gray-600 italic">"Their machine learning models have helped us predict market trends with 90% accuracy, giving us a significant competitive advantage."</p>
                  <p className="font-semibold mt-2">- Michael Chen, Director of Analytics at MarketPro</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 