'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Octobit8 Logo"
                width={150}
                height={50}
                className="h-8 w-auto sm:h-10"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Empowering businesses with cutting-edge technology solutions and digital transformation services.
            </p>
            {/* Social Media Links */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/octobit8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/octobit8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/octobit8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/octobit8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/industries" className="text-gray-400 hover:text-white transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="/career" className="text-gray-400 hover:text-white transition-colors">
                  Career
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/services/website-development" className="text-gray-400 hover:text-white transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="/services/devops-cloud" className="text-gray-400 hover:text-white transition-colors">
                  DevOps & Cloud Solutions
                </a>
              </li>
              <li>
                <a href="/services/ai-development" className="text-gray-400 hover:text-white transition-colors">
                  AI Development
                </a>
              </li>
              <li>
                <a href="/services/staff-augmentation" className="text-gray-400 hover:text-white transition-colors">
                  Staff Augmentation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <PhoneIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-gray-400">+91-9923706784</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <EnvelopeIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-gray-400">contact@octobit8.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Addresses */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPinIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Varanasi Office</h3>
              <p className="text-gray-400">185 BARA LAL CHRAIST NAGAR, Varanasi, Uttar Pradesh, India, 221007</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPinIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Noida Office</h3>
              <p className="text-gray-400">7th Floor, Plot A/8A, Knowledge Boulevard, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Octobit8. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 