"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="https://i.postimg.cc/439mX8nw/Whats-App-Image-2025-03-19-at-12-17-48-PM-removebg-preview.png" 
            alt="Hobby Lobby Logo" 
            width={150} 
            height={150} 
            className="mr-2" 
          />
          
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {['About', 'Sports', 'Booking', 'Events', 'Gallery', 'Contact'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-700 hover:text-green-600"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center">
          <Button className="hidden md:inline">Book Now</Button>
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden text-gray-700 hover:text-green-600 focus:outline-none"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 p-4">
            {['About', 'Sports', 'Booking', 'Events', 'Gallery', 'Contact'].map((item) => (
              <motion.li key={item} whileTap={{ scale: 0.95 }}>
                <Link 
                  onClick={() => setMobileMenuOpen(false)} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-700 hover:text-green-600"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
            <Button onClick={() => setMobileMenuOpen(false)}>Book Now</Button>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
