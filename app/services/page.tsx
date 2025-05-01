'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CodeBracketIcon, 
  CloudIcon, 
  CpuChipIcon 
} from '@heroicons/react/24/outline';

const services = [
  {
    id: 'website-development',
    title: 'Website Development',
    icon: <CodeBracketIcon className="w-12 h-12" />,
    description: 'Custom web solutions tailored to your business needs',
    features: [
      'Custom Web Application Development',
      'E-commerce Solutions',
      'Content Management Systems',
      'Responsive Web Design',
      'Progressive Web Apps'
    ]
  },
  {
    id: 'devops-cloud',
    title: 'DevOps & Cloud Solutions',
    icon: <CloudIcon className="w-12 h-12" />,
    description: 'Streamline your operations with cloud infrastructure',
    features: [
      'Cloud Infrastructure Setup',
      'CI/CD Pipeline Implementation',
      'Containerization & Orchestration',
      'Cloud Migration Services',
      'Infrastructure as Code'
    ]
  },
  {
    id: 'ai-development',
    title: 'AI Agent Development',
    icon: <CpuChipIcon className="w-12 h-12" />,
    description: 'Intelligent solutions to automate and enhance your business',
    features: [
      'Custom AI Solutions',
      'Machine Learning Integration',
      'Natural Language Processing',
      'Computer Vision Applications',
      'AI-powered Automation'
    ]
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive IT solutions to help businesses thrive in the digital age.
            Explore our range of services below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden h-full"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="text-primary mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.id}`}
                  className="btn-primary block text-center mt-auto"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help you achieve your goals
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 