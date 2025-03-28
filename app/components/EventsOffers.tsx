'use client'

import { useState } from 'react'
import { 
  ChevronLeft, ChevronRight, Trophy, Calendar, Clock, Percent, 
  Users, Medal, ArrowRight 
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

interface Event {
  id: number
  title: string
  date: string
  description: string
  fullDescription: string
  icon: React.ElementType
  gradient: string
  tag: string
  category: 'Past' | 'Upcoming' | 'Ongoing'
  imageUrl?: string
}

const events: Event[] = [
  {
    id: 1,
    title: '🏏 Hobby Lobby Cricket Tournament 2025 🏆',
    date: 'March 30 -2025',
    description: 'Limited slots available – Only 16 teams can participate on a first-come, first-serve basis! Fixtures will be confirmed by March 29th at 10 PM.',
    fullDescription: '⚡ Tournament Format & Rules:Underarm bowling ✅ 5 overs per innings✅ 1 over powerplay per team (only 2 players on the boundary)✅ 11 players per team✅ Keeper & slip player compulsory✅ All fresh bowlers✅ Umpire’s decision is final – No arguments allowed✅ A new ball for every match; 1 ball per innings in the final✅ Fiber bats are not allowed',


    icon: Trophy,
    gradient: 'from-blue-500 to-cyan-500',
    tag: 'Tournament',
    category: 'Upcoming',
    imageUrl: 'https://i.postimg.cc/GmYhWGK5/Whats-App-Image-2025-03-26-at-2-15-50-PM.jpg'
  },
  {
    id: 2,
    title: 'Youth Football Coaching Camp',
    date: 'July 15 - July 25, 2023',
    description: 'Intensive football training program for young athletes aged 12-18.',
    fullDescription: 'Our comprehensive football coaching camp focused on skill development, tactical understanding, and physical conditioning. Professional coaches from local clubs provided personalized training.',
    icon: Users,
    gradient: 'from-green-500 to-emerald-500',
    tag: 'Workshop',
    category: 'Past',
    imageUrl: 'https://i.postimg.cc/fbBLzSxg/25102017-fotress-01.jpg'
  },
  {
    id: 3,
    title: 'Weekly Night Games ',
    date: 'Every Friday',
    description: '50% Off all sports facilities between 8 PM and midnight.',
    fullDescription: 'Enjoy half-price bookings for all our sports facilities every Friday night. Perfect for after-work sports, casual games, and weekend warm-ups.',
    icon: Percent,
    gradient: 'from-orange-500 to-amber-500',
    tag: 'Ongoing Offer',
    category: 'Ongoing',
    imageUrl: 'https://i.postimg.cc/qB98VWB6/Cricket.jpg'
  },
  {
    id: 4,
    title: 'volleyball Championship',
    date: 'December 15 - 17, 2024',
    description: 'Annual multi-sport championship across cricket, football, and volleyball.',
    fullDescription: 'Our flagship winter sports event bringing together amateur and semi-professional athletes. Cash prizes, professional scouting, and community celebration.',
    icon: Medal,
    gradient: 'from-purple-500 to-pink-500',
    tag: 'Upcoming',
    category: 'Upcoming',
    imageUrl: 'https://i.postimg.cc/P5HYNZwt/20201023-005619.jpg'
  }
]

export default function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<'Past' | 'Ongoing' | 'Upcoming'>('Ongoing')

  const filteredEvents = events.filter(event => event.category === selectedCategory)
  const currentEvent = filteredEvents[currentIndex]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredEvents.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredEvents.length) % filteredEvents.length)
  }

  return (
    <section className="relative py-12 md:py-24 bg-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-4 md:mb-6">
            Our Sports Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </div>

        {/* Category Selector */}
        <div className="flex justify-center gap-2 md:gap-6 mb-8 md:mb-12">
          {(['Past', 'Ongoing', 'Upcoming'] as const).map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => {
                setSelectedCategory(category)
                setCurrentIndex(0)
              }}
              className="px-3 py-2 md:px-6 md:py-3 text-xs md:text-base"
            >
              {category} Events
            </Button>
          ))}
        </div>

        {/* Events Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Mobile/Desktop Navigation */}
            <div className="hidden md:block">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="h-12 w-12 rounded-full border-2 hover:bg-white/50 backdrop-blur-sm"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>

            <Card className="w-full border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 backdrop-blur-sm bg-white/80">
              {/* Event Image */}
              {currentEvent.imageUrl && (
                <div className="w-full h-48 md:h-64 overflow-hidden rounded-t-lg">
                  <img 
                    src={currentEvent.imageUrl} 
                    alt={currentEvent.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <CardHeader className="relative">
                <div className={`absolute top-4 right-4 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r ${currentEvent.gradient} text-white`}>
                  {currentEvent.tag}
                </div>
                <div className="flex items-center gap-4">
                  <div className={`p-2 md:p-3 rounded-lg bg-gradient-to-r ${currentEvent.gradient} text-white`}>
                    <currentEvent.icon className="h-4 w-4 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl font-bold">{currentEvent.title}</CardTitle>
                    <p className="text-sm md:text-base text-gray-500 mt-1">{currentEvent.date}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">{currentEvent.description}</p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      View Full Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl w-full max-h-[90vh] overflow-y-auto">
  <DialogHeader>
    <DialogTitle className="text-xl md:text-2xl">{currentEvent.title}</DialogTitle>
  </DialogHeader>
  <div className="space-y-6">
    {currentEvent.imageUrl && (
      <img 
        src={currentEvent.imageUrl} 
        alt={currentEvent.title} 
        className="w-full h-96 md:h-[1500px] object-cover rounded-lg"
      />
    )}
    <p className="text-gray-700 text-base md:text-lg">{currentEvent.fullDescription}</p>
    <div className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
      <Calendar className="h-5 w-5 text-gray-500" />
      <span>{currentEvent.date}</span>
    </div>
  </div>
</DialogContent>



                </Dialog>
              </CardContent>
            </Card>

            {/* Mobile/Desktop Navigation */}
            <div className="hidden md:block">
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="h-12 w-12 rounded-full border-2 hover:bg-white/50 backdrop-blur-sm"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex w-full justify-between md:hidden">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="h-10 w-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="h-10 w-10"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-4 md:mt-8">
            {filteredEvents.map((_, index) => (
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