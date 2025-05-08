'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Getting Started with DevOps: A Comprehensive Guide',
      excerpt: 'Learn the fundamentals of DevOps and how it can transform your software development process.',
      date: 'March 15, 2024',
      author: 'John Doe',
      category: 'DevOps',
      readTime: '5 min read',
      image: '/images/blog/devops-guide.jpg',
      slug: 'getting-started-with-devops'
    },
    {
      title: 'Cloud Computing Trends in 2024',
      excerpt: 'Explore the latest trends and innovations in cloud computing that are shaping the industry.',
      date: 'March 10, 2024',
      author: 'Jane Smith',
      category: 'Cloud Computing',
      readTime: '4 min read',
      image: '/images/blog/cloud-trends.jpg',
      slug: 'cloud-computing-trends-2024'
    },
    {
      title: 'Best Practices for CI/CD Implementation',
      excerpt: 'Discover the essential practices for implementing an effective CI/CD pipeline in your organization.',
      date: 'March 5, 2024',
      author: 'Mike Johnson',
      category: 'DevOps',
      readTime: '6 min read',
      image: '/images/blog/cicd-practices.jpg',
      slug: 'best-practices-cicd-implementation'
    }
  ];

  const categories = [
    { name: 'All', count: 3 },
    { name: 'DevOps', count: 2 },
    { name: 'Cloud Computing', count: 1 }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Insights, tutorials, and updates from our team of experts
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Categories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className="px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <span className="font-medium">{category.name}</span>
                <span className="ml-2 text-gray-500">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">{post.category}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
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
  );
} 