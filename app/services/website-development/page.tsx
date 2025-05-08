'use client';

import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
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

export default function WebsiteDevelopmentPage() {
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
            <CodeBracketIcon className="w-12 h-12 text-white" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">Website Development</h1>
              <p className="text-xl mt-2 text-gray-200">
                Custom web solutions tailored to your business needs
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Main Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold mb-4">Our Website Development Services</h2>
              <p className="text-gray-600 mb-6">
                We create custom web solutions that are tailored to your business needs, 
                ensuring optimal performance, security, and user experience.
              </p>
              
              <div className="prose max-w-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3>What We Offer</h3>
                  <motion.ul
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <motion.li variants={scaleIn}>
                      <strong>Custom Web Application Development</strong>
                      <p className="text-gray-600 mt-1">Tailored solutions built with modern frameworks like React, Next.js, and Node.js. We focus on creating scalable, maintainable, and high-performance applications that meet your specific business requirements.</p>
                    </motion.li>
                    <motion.li variants={scaleIn}>
                      <strong>E-commerce Solutions</strong>
                      <p className="text-gray-600 mt-1">Complete online store development with features like product management, secure payment gateways, inventory tracking, and analytics. We integrate with popular platforms like Shopify, WooCommerce, or build custom solutions.</p>
                    </motion.li>
                    <motion.li variants={scaleIn}>
                      <strong>Content Management Systems</strong>
                      <p className="text-gray-600 mt-1">Custom CMS development or integration with platforms like WordPress, Strapi, or Contentful. We ensure easy content management with intuitive interfaces and robust security features.</p>
                    </motion.li>
                    <motion.li variants={scaleIn}>
                      <strong>Responsive Web Design</strong>
                      <p className="text-gray-600 mt-1">Mobile-first approach ensuring your website looks and functions perfectly across all devices. We use modern CSS frameworks and follow best practices for optimal user experience.</p>
                    </motion.li>
                    <motion.li variants={scaleIn}>
                      <strong>Progressive Web Apps</strong>
                      <p className="text-gray-600 mt-1">Web applications that provide native app-like experience with offline capabilities, push notifications, and fast loading times. Perfect for businesses looking to enhance user engagement.</p>
                    </motion.li>
                    <motion.li variants={scaleIn}>
                      <strong>API Development & Integration</strong>
                      <p className="text-gray-600 mt-1">Custom API development and third-party service integration. We ensure secure, efficient, and well-documented APIs that enable seamless data exchange between systems.</p>
                    </motion.li>
                    <motion.li variants={scaleIn}>
                      <strong>Website Maintenance & Support</strong>
                      <p className="text-gray-600 mt-1">Ongoing support, updates, and maintenance services to keep your website secure, up-to-date, and performing optimally. We offer various support packages to suit your needs.</p>
                    </motion.li>
                  </motion.ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3>Our Process</h3>
                  <motion.ol
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <motion.li variants={scaleIn}>
                      <strong>Requirement Analysis (1-2 weeks)</strong>
                      <p className="text-gray-600 mt-1">In-depth discussions to understand your business goals, target audience, and technical requirements. We create detailed project specifications and timelines.</p>
                    </motion.li>
                    <motion.li variants={scaleIn}>
                      <strong>Design & Prototyping (2-3 weeks)</strong>
                      <p className="text-gray-600 mt-1">UI/UX design process including wireframes, mockups, and interactive prototypes. We focus on creating intuitive and engaging user experiences.</p>
                    </motion.li>
                    <motion.li variants={scaleIn}>
                      <strong>Development & Testing (4-8 weeks)</strong>
                      <p className="text-gray-600 mt-1">Agile development process with regular testing and quality assurance. We maintain transparent communication and provide regular progress updates.</p>
                    </motion.li>
                    <motion.li variants={scaleIn}>
                      <strong>Deployment & Launch (1-2 weeks)</strong>
                      <p className="text-gray-600 mt-1">Thorough testing, performance optimization, and secure deployment. We ensure smooth transition to production with minimal downtime.</p>
                    </motion.li>
                    <motion.li variants={scaleIn}>
                      <strong>Ongoing Support</strong>
                      <p className="text-gray-600 mt-1">Continuous monitoring, updates, and support services. We provide various maintenance packages to keep your website running smoothly.</p>
                    </motion.li>
                  </motion.ol>
                </motion.div>
              </div>
            </motion.div>

            {/* Case Studies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold mb-4">Industry Use Cases</h2>
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
                  <h3 className="text-xl font-semibold">Education</h3>
                  <p className="text-gray-600">
                    Developed a comprehensive Learning Management System (LMS) for a university, enabling online course delivery, student progress tracking, and automated grading.
                  </p>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-300 p-2 rounded-r-lg"
                >
                  <h3 className="text-xl font-semibold">Healthcare</h3>
                  <p className="text-gray-600">
                    Created a patient portal for a hospital network, allowing secure access to medical records, appointment scheduling, and telemedicine consultations.
                  </p>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-300 p-2 rounded-r-lg"
                >
                  <h3 className="text-xl font-semibold">Travel</h3>
                  <p className="text-gray-600">
                    Built a booking platform for a travel agency, integrating real-time availability, payment processing, and itinerary management.
                  </p>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-300 p-2 rounded-r-lg"
                >
                  <h3 className="text-xl font-semibold">E-commerce</h3>
                  <p className="text-gray-600">
                    Developed a multi-vendor marketplace with advanced search, personalized recommendations, and secure payment integration.
                  </p>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-300 p-2 rounded-r-lg"
                >
                  <h3 className="text-xl font-semibold">Finance</h3>
                  <p className="text-gray-600">
                    Created a secure online banking platform with real-time transaction processing, account management, and financial analytics.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold mb-4">Technologies We Use</h2>
              <motion.div 
                className="grid md:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={scaleIn}
                  className="border rounded-lg p-6 h-full hover:border-primary transition-colors duration-300"
                >
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Vue.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="border rounded-lg p-6 h-full hover:border-primary transition-colors duration-300"
                >
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>Node.js</li>
                    <li>Python/Django</li>
                    <li>PHP/Laravel</li>
                    <li>Java Spring</li>
                    <li>.NET Core</li>
                  </ul>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="border rounded-lg p-6 h-full hover:border-primary transition-colors duration-300"
                >
                  <h4 className="font-semibold mb-2">Database</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Redis</li>
                    <li>Firebase</li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold mb-4">Benefits of Our Web Development</h2>
              <motion.div 
                className="grid md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={scaleIn}
                  className="flex gap-4"
                >
                  <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">High Performance</h4>
                    <p className="text-gray-600">Optimized code and efficient database queries ensure fast loading times and smooth user experience.</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="flex gap-4"
                >
                  <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Enhanced Security</h4>
                    <p className="text-gray-600">Built-in security features protect against common vulnerabilities and cyber threats.</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="flex gap-4"
                >
                  <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scalable Architecture</h4>
                    <p className="text-gray-600">Future-proof design that grows with your business needs and user base.</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="flex gap-4"
                >
                  <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quality Assurance</h4>
                    <p className="text-gray-600">Rigorous testing and QA processes ensure reliable and bug-free applications.</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <motion.div 
                className="grid md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={scaleIn}
                  className="border rounded-lg p-6 h-full hover:border-primary transition-colors duration-300"
                >
                  <h4 className="font-semibold mb-2">Responsive Design</h4>
                  <p className="text-gray-600">
                    Websites that look great on all devices and screen sizes.
                  </p>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="border rounded-lg p-6 h-full hover:border-primary transition-colors duration-300"
                >
                  <h4 className="font-semibold mb-2">SEO Optimization</h4>
                  <p className="text-gray-600">
                    Built-in SEO features to improve your search engine rankings.
                  </p>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="border rounded-lg p-6 h-full hover:border-primary transition-colors duration-300"
                >
                  <h4 className="font-semibold mb-2">Performance</h4>
                  <p className="text-gray-600">
                    Fast-loading websites with optimized performance.
                  </p>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="border rounded-lg p-6 h-full hover:border-primary transition-colors duration-300"
                >
                  <h4 className="font-semibold mb-2">Security</h4>
                  <p className="text-gray-600">
                    Secure websites with regular updates and maintenance.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold mb-4">Success Metrics</h2>
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
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <p className="text-gray-600">Client Satisfaction Rate</p>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="text-center p-6 bg-gray-50 rounded-lg"
                >
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-gray-600">Projects Completed</p>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="text-center p-6 bg-gray-50 rounded-lg"
                >
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <p className="text-gray-600">Uptime Guarantee</p>
                </motion.div>
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
                  <p className="text-gray-600 italic">"The team delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and commitment to quality was impressive."</p>
                  <p className="font-semibold mt-2">- Sarah Johnson, CEO of FashionHub</p>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="border-l-4 border-primary pl-4 hover:bg-gray-50 transition-colors duration-300 p-2 rounded-r-lg"
                >
                  <p className="text-gray-600 italic">"Our new website has significantly improved our online presence and customer engagement. The team's technical expertise and creative solutions were invaluable."</p>
                  <p className="font-semibold mt-2">- Michael Chen, CTO of TechSolutions</p>
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
              <h3 className="text-xl font-bold mb-4">Ready to Build Your Website?</h3>
              <p className="text-white mb-4">
                Let's discuss your website development needs and create a solution that drives your business forward.
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
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with creative excellence to deliver exceptional web solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Our team consists of experienced developers, designers, and project managers who are passionate about creating exceptional web experiences.',
                icon: (
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: 'Quality Assurance',
                description: 'We follow rigorous testing and quality control processes to ensure your website is bug-free and performs optimally.',
                icon: (
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Ongoing Support',
                description: 'We provide comprehensive support and maintenance services to ensure your website remains secure and up-to-date.',
                icon: (
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals with a custom web solution
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 