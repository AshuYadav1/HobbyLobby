'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const backgroundImages = [
  '/sports/football-silhouette.png',
  '/sports/cricket-player.png', 
  '/sports/volleyball-jump.png',
  '/sports/basketball-dunk.png'
]

const benefits = [
  {
    title: 'Premium Facilities',
    description: 'World-class turf and cutting-edge equipment for peak performance',
    icon: '🏟️',
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Expert Coaching',
    description: 'Professional guidance tailored to your unique athletic goals',
    icon: '👨‍🏫',
    gradient: 'from-purple-500 to-pink-400'
  },
  {
    title: 'Community Events',
    description: 'Exciting tournaments and social gatherings connecting players',
    icon: '🎉',
    gradient: 'from-orange-500 to-amber-400'
  },
  {
    title: 'Smart Booking',
    description: 'Instant spot reservation with intelligent scheduling',
    icon: '📱',
    gradient: 'from-emerald-500 to-teal-400'
  }
]

export default function About() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      className="relative py-24 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.2, 0],
              scale: [0.8, 1.2, 0.8],
              x: ['-10%', '10%', '-10%']
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'loop',
              delay: index * 2.5
            }}
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ 
              backgroundImage: `url(${image})`,
              transform: `rotate(${index * 45}deg)` 
            }}
          />
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white/50 to-purple-50/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
            More Than Just a Venue
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a thriving community where passion meets performance. Your athletic journey starts here.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="text-5xl mb-4 opacity-80 transition-transform group-hover:scale-110">
                    {benefit.icon}
                  </div>
                  <CardTitle className={`text-2xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}