'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM'
]

export default function BookingPreview() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  return (
    <section id="booking" className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-6">
            Book Your Slot
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 border border-gray-200 hover:border-gray-300 transition-colors duration-300 backdrop-blur-sm bg-white/80">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Select Date
                </h3>
                <div className="transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Available Time Slots
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 
                        ${selectedTime === time 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md transform scale-[1.02]' 
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-sm'
                        }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                <div className="pt-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-4">Selected Details</h4>
                  <div className="space-y-2 mb-6">
                    <p className="text-gray-600">
                      Date: <span className="font-semibold">{date?.toLocaleDateString()}</span>
                    </p>
                    <p className="text-gray-600">
                      Time: <span className="font-semibold">{selectedTime || 'Not selected'}</span>
                    </p>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Check Availability
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}