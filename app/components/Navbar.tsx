'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  const services = [
    { name: 'Website Development', href: '/services/website-development' },
    { name: 'DevOps & Cloud Solutions', href: '/services/devops-cloud' },
    { name: 'AI Development', href: '/services/ai-development' },
    { name: 'Staff Augmentation', href: '/services/staff-augmentation' }
  ];

  const career = [
    { name: 'DevOps Training', href: '/career/devops-training' },
    { name: 'Cloud Training', href: '/career/cloud-training' },
    { name: 'Internship', href: '/career/internship' },
    { name: 'Job Openings', href: '/career/job-openings' }
  ];

  const industries = [
    { name: 'Education', href: '/industries/education' },
    { name: 'Travel', href: '/industries/travel' },
    { name: 'Healthcare', href: '/industries/healthcare' },
  ];

  const blog = [
    { name: 'All Posts', href: '/blog' },
    { name: 'DevOps', href: '/blog?category=devops' },
    { name: 'Cloud Computing', href: '/blog?category=cloud' }
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current && 
        !servicesRef.current.contains(event.target as Node) &&
        industriesRef.current && 
        !industriesRef.current.contains(event.target as Node) &&
        careerRef.current && 
        !careerRef.current.contains(event.target as Node) &&
        blogRef.current && 
        !blogRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Octobit8 Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Services
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-gradient-to-r from-gray-900 to-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative" ref={industriesRef}>
              <button
                onClick={() => toggleDropdown('industries')}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Industries
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'industries' && (
                <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-gradient-to-r from-gray-900 to-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        href={industry.href}
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Career Dropdown */}
            <div className="relative" ref={careerRef}>
              <button
                onClick={() => toggleDropdown('career')}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Career
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'career' && (
                <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-gradient-to-r from-gray-900 to-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    {career.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Blog Dropdown */}
            <div className="relative" ref={blogRef}>
              <button
                onClick={() => toggleDropdown('blog')}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Blog
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'blog' && (
                <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-gradient-to-r from-gray-900 to-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    {blog.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('services')}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Services
              <ChevronDownIcon className="ml-1 h-4 w-4 inline-block" />
            </button>
            {activeDropdown === 'services' && (
              <div className="pl-4 mt-2 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                    onClick={() => {
                      setActiveDropdown(null);
                      setIsOpen(false);
                    }}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Industries Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('industries')}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Industries
              <ChevronDownIcon className="ml-1 h-4 w-4 inline-block" />
            </button>
            {activeDropdown === 'industries' && (
              <div className="pl-4 mt-2 space-y-2">
                {industries.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                    onClick={() => {
                      setActiveDropdown(null);
                      setIsOpen(false);
                    }}
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Career Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('career')}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Career
              <ChevronDownIcon className="ml-1 h-4 w-4 inline-block" />
            </button>
            {activeDropdown === 'career' && (
              <div className="pl-4 mt-2 space-y-2">
                {career.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                    onClick={() => {
                      setActiveDropdown(null);
                      setIsOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Blog Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('blog')}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Blog
              <ChevronDownIcon className="ml-1 h-4 w-4 inline-block" />
            </button>
            {activeDropdown === 'blog' && (
              <div className="pl-4 mt-2 space-y-2">
                {blog.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                    onClick={() => {
                      setActiveDropdown(null);
                      setIsOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 