'use client';

import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Octobit8</h3>
            <p className="text-white">
              Transforming businesses through innovative IT solutions and digital expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-gray-300 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/website-development" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/devops-cloud" className="text-white hover:text-gray-300 transition-colors duration-200">
                  DevOps & Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/ai-development" className="text-white hover:text-gray-300 transition-colors duration-200">
                  AI Agent Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Varanasi Office */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-4">Varanasi Office</h3>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <MapPinIcon className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-white">
                  Octobit8 (OPC) Private Limited<br />
                  185 BARA LAL CHRAIST NAGAR,<br />
                  Varanasi, Uttar Pradesh,<br />
                  India, 221007
                </span>
              </p>
            </div>
          </div>

          {/* Noida Office */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-4">Noida Office</h3>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <MapPinIcon className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-white">
                  Octobit8 (OPC) Private Limited<br />
                  7th Floor, Plot A/8A,<br />
                  Knowledge Boulevard, Block A,<br />
                  Industrial Area, Sector 62,<br />
                  Noida, Uttar Pradesh
                </span>
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-6">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5" />
                <a href="tel:+919923706784" className="text-white hover:text-gray-300 transition-colors">
                  +91-9923706784
                </a>
              </p>
              <p className="flex items-center gap-2">
                <EnvelopeIcon className="w-5 h-5" />
                <a href="mailto:contact@octobit8.com" className="text-white hover:text-gray-300 transition-colors">
                  contact@octobit8.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="md:col-span-6">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/octobit8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/octobit8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/octobit8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/octobit8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-white">&copy; {new Date().getFullYear()} Octobit8. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 