'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Calendar, Clock, Trophy, Percent, LucideIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Event {
  title: string
  date: string
  description: string
  icon: LucideIcon
  gradient: string
  tag: string
}

const events: Event[] = [
  {
    title: 'Summer Cricket League',
    date: 'June 1 - August 31',
    description: 'Join our exciting summer cricket league and compete with the best teams in the area.',
    icon: Trophy,
    gradient: 'from-blue-500 to-cyan-500',
    tag: 'Tournament'
  },
  {
    title: 'Football Tournament',
    date: 'July 15 - July 17',
    description: 'A weekend of non-stop football action. Register your team now!',
    icon: Calendar,
    gradient: 'from-green-500 to-emerald-500',
    tag: 'Event'
  },
  {
    title: 'Volleyball Workshop',
    date: 'August 5',
    description: 'Learn advanced techniques from professional volleyball players in this intensive one-day workshop.',
    icon: Clock,
    gradient: 'from-purple-500 to-pink-500',
    tag: 'Workshop'
  },
  {
    title: '50% Off Night Games',
    date: 'Every Friday',
    description: 'Enjoy half-price bookings for all sports between 8 PM and midnight every Friday.',
    icon: Percent,
    gradient: 'from-orange-500 to-amber-500',
    tag: 'Offer'
  },
]

export default function EventsOffers() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentEvent = events[currentIndex]
  const Icon = currentEvent.icon

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length)
  }

  return (
    <section id="events" className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-6">
            Events & Offers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="h-12 w-12 rounded-full border-2 hover:bg-white/50 backdrop-blur-sm transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Card className="flex-1 border border-gray-200 hover:border-gray-300 transition-all duration-300 backdrop-blur-sm bg-white/80">
              <CardHeader className="relative">
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${currentEvent.gradient} text-white`}>
                  {currentEvent.tag}
                </div>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${currentEvent.gradient} text-white`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">{currentEvent.title}</CardTitle>
                    <CardDescription className="text-base mt-1">{currentEvent.date}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{currentEvent.description}</p>
              </CardContent>
            </Card>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="h-12 w-12 rounded-full border-2 hover:bg-white/50 backdrop-blur-sm transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}