'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // This would typically fetch the blog post data based on the slug
  const post = {
    title: 'Getting Started with DevOps: A Comprehensive Guide',
    content: `
      <h2>Introduction</h2>
      <p>DevOps has revolutionized the way software development and operations teams work together. In this comprehensive guide, we'll explore the fundamentals of DevOps and how it can transform your software development process.</p>
      
      <h2>What is DevOps?</h2>
      <p>DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the development lifecycle and provide continuous delivery with high software quality.</p>
      
      <h2>Key Principles</h2>
      <ul>
        <li>Continuous Integration and Continuous Deployment (CI/CD)</li>
        <li>Infrastructure as Code (IaC)</li>
        <li>Monitoring and Logging</li>
        <li>Communication and Collaboration</li>
        <li>Automation</li>
      </ul>
      
      <h2>Benefits of DevOps</h2>
      <p>Implementing DevOps practices can bring numerous benefits to your organization:</p>
      <ul>
        <li>Faster time to market</li>
        <li>Improved collaboration</li>
        <li>Higher quality products</li>
        <li>Better resource utilization</li>
        <li>Enhanced security</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To begin your DevOps journey, follow these steps:</p>
      <ol>
        <li>Assess your current processes</li>
        <li>Identify areas for improvement</li>
        <li>Start with small, manageable changes</li>
        <li>Implement automation gradually</li>
        <li>Measure and iterate</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>DevOps is not just a set of tools or practices; it's a cultural shift that requires commitment from the entire organization. By embracing DevOps principles, you can achieve faster delivery, better quality, and improved collaboration.</p>
    `,
    date: 'March 15, 2024',
    author: 'John Doe',
    category: 'DevOps',
    readTime: '5 min read',
    image: '/images/blog/devops-guide.jpg'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-300">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <article className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Author Section */}
          <div className="mt-16 border-t border-gray-200 pt-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gray-200"></div>
              <div>
                <h3 className="text-xl font-bold">{post.author}</h3>
                <p className="text-gray-600">DevOps Engineer at Octobit8</p>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Stay updated with the latest insights and updates from our team
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 