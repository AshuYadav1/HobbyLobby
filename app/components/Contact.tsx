'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      className="py-20 relative"
      style={{
        backgroundImage: `url('/background-image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80"></div>

      <div className="relative container mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.h2
          className="text-5xl font-extrabold text-center text-white mb-10 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        {/* Form Section */}
        <div className="max-w-lg mx-auto bg-white shadow-xl rounded-lg p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Your Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-2"
                required
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email Address
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-2"
                required
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Write your message"
                rows={5}
                className="mt-2"
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Button
                type="submit"
                className="w-full py-3 text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md hover:from-purple-600 hover:to-blue-500 transition-all"
              >
                Send Message
              </Button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
}
