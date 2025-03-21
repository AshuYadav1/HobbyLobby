"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState([]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  // Fetch Google Reviews from your API route
  useEffect(() => {
    async function fetchGoogleReviews() {
      try {
        const res = await fetch("/api/googleReviews");
        const data = await res.json();
        // Ensure that the API response contains a reviews property
        if (data?.reviews) {
          setReviews(data.reviews);
        }
      } catch (error) {
        console.error("Error fetching Google reviews:", error);
      }
    }
    fetchGoogleReviews();
  }, []);

  // Set up slider interval only when reviews are available
  useEffect(() => {
    if (reviews.length > 0) {
      const interval = setInterval(nextTestimonial, 5000);
      return () => clearInterval(interval);
    }
  }, [reviews]);

  // Show a loading state if reviews have not loaded yet
  if (reviews.length === 0) {
    return (
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-100 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Our Members Say
          </motion.h2>
          <p className="text-center text-gray-500">Loading reviews...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-100 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Members Say
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 w-20 h-20 bg-primary/10 rounded-full -z-10 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -z-10 transform translate-x-1/4 translate-y-1/4" />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Card className="bg-white shadow-lg border-0 overflow-visible">
                <CardContent className="p-8">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <Avatar className="h-16 w-16 ring-4 ring-white">
                      <AvatarImage
                        src={"https://i.postimg.cc/ZRvzyg6v/Whats-App-Image-2025-03-19-at-12-17-48-PM.jpg"}
                        alt={reviews[currentIndex].author_name}
                      />
                      <AvatarFallback>
                        {reviews[currentIndex].author_name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="mt-8 text-center">
                    <Quote className="text-primary h-8 w-8 mx-auto mb-4 opacity-50" />
                    <p className="text-xl mb-6 italic text-gray-700">
                      "{reviews[currentIndex].text}"
                    </p>
                    <p className="font-semibold text-lg">
                      {reviews[currentIndex].author_name}
                    </p>
                    <div className="flex justify-center items-center space-x-1 mt-2">
                      {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
