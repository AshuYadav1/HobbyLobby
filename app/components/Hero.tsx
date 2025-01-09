'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-800 to-indigo-900">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
        style={{ filter: 'brightness(40%)' }}
      >
        <source src="/placeholder.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 text-center text-white">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-yellow-400">Hobby Lobby</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where <span className="text-yellow-400">Fun</span>,{' '}
          <span className="text-green-400">Fitness</span>, and{' '}
          <span className="text-red-400">Community</span> Unite
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" className="mr-4 bg-yellow-400 text-black hover:bg-yellow-500">
            Book Now
          </Button>
          <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
            Explore Facility
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

