'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
      if (options.triggerOnce && entry.isIntersecting) {
        observer.disconnect();
      }
    }, {
      threshold: options.threshold || 0,
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.triggerOnce]);

  return [ref, isInView];
};

const benefits = [
  {
    title: 'Premium Facilities',
    description: 'Experience world-class turf and cutting-edge equipment designed for peak performance',
    icon: '🏟️',
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Expert Coaching',
    description: 'Train with industry-leading professionals who understand your unique goals',
    icon: '👨‍🏫',
    gradient: 'from-purple-500 to-pink-400'
  },
  {
    title: 'Community Events',
    description: 'Join exciting tournaments and social gatherings that bring players together',
    icon: '🎉',
    gradient: 'from-orange-500 to-amber-400'
  },
  {
    title: 'Smart Booking',
    description: 'Reserve your spot instantly with our intelligent scheduling system',
    icon: '📱',
    gradient: 'from-emerald-500 to-teal-400'
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      id="about" 
      className="relative py-32 overflow-hidden bg-gray-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      
      <div className="container mx-auto px-4 relative">
        <div className={`mb-24 transition-all duration-700 ease-out ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-bold text-center mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
              More Than Just a Venue
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
              Join a thriving community where passion meets performance. Whether you're a beginner or pro,
              we've created the perfect environment for your journey.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${
                inView
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <Card className="group relative hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 bg-white/80 backdrop-blur-sm overflow-hidden">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="space-y-2 relative">
                  <div className="text-4xl mb-2 transform transition-transform duration-300 group-hover:scale-110">
                    {benefit.icon}
                  </div>
                  <CardTitle className={`text-2xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  {/* Bottom Gradient Line */}
                  <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${benefit.gradient} group-hover:w-full transition-all duration-300`} />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}