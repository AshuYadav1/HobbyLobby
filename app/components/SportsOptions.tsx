'use client'

import { SetStateAction, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const sports = [
  {
    name: 'Cricket',
    description: 'Experience the thrill of cricket on our world-class pitch.',
    rules: ['11 players per team', '20 overs per innings', 'LBW rule applies'],
    tips: ['Focus on your stance', 'Practice your bowling accuracy', 'Communicate with your teammates'],
    icon: '🏏',
    gradient: 'from-blue-500 to-cyan-500',
    video: 'https://www.example.com/cricket.mp4', // Example video link
  },
  {
    name: 'Football',
    description: 'Play the beautiful game on our pristine turf.',
    rules: ['11 players per team', '90 minutes game time', 'Offside rule applies'],
    tips: ['Improve your ball control', 'Work on your stamina', 'Practice set pieces'],
    icon: '⚽',
    gradient: 'from-green-500 to-emerald-500',
    video: 'https://www.example.com/football.mp4',
  },
  {
    name: 'Volleyball',
    description: 'Spike your way to victory on our professional court.',
    rules: ['6 players per team', 'Best of 5 sets', 'Rotation after each serve'],
    tips: ['Master your serve', 'Communicate during rallies', 'Practice your vertical jump'],
    icon: '🏐',
    gradient: 'from-orange-500 to-amber-500',
    video: 'https://www.example.com/volleyball.mp4',
  },
]

export default function SportsOptions() {
  const [selectedSport, setSelectedSport] = useState(sports[0].name)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')

  const handleVideoPlay = (videoUrl: SetStateAction<string>) => {
    setVideoUrl(videoUrl)
    setIsVideoOpen(true)
  }

  return (
    <section id="sports" className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0 opacity-30">
        <source src="/turf.mp4" type="video/mp4" />
      </video>
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-6">
            Sports & Activities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </div>

        <Tabs 
          defaultValue={sports[0].name} 
          onValueChange={setSelectedSport}
          className="relative"
        >
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {sports.map((sport) => (
              <TabsTrigger 
                key={sport.name} 
                value={sport.name}
                className="group data-[state=active]:bg-white relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-2xl">{sport.icon}</span>
                  {sport.name}
                </span>
                <div className={`absolute inset-0 bg-gradient-to-r ${sport.gradient} opacity-0 group-data-[state=active]:opacity-10 transition-opacity duration-300`} />
              </TabsTrigger>
            ))}
          </TabsList>

          {sports.map((sport) => (
            <TabsContent 
              key={sport.name} 
              value={sport.name}
              className="transition-all duration-500"
            >
              <Card className="border border-gray-200 hover:border-gray-300 transition-colors duration-300 backdrop-blur-sm bg-white/80">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{sport.icon}</span>
                    <div>
                      <CardTitle className={`text-3xl font-bold bg-gradient-to-r ${sport.gradient} bg-clip-text text-transparent`}>
                        {sport.name}
                      </CardTitle>
                      <CardDescription className="text-lg mt-2">
                        {sport.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        Rules
                      </h4>
                      <ul className="space-y-3">
                        {sport.rules.map((rule, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${sport.gradient}`} />
                            <span className="text-gray-600">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        Pro Tips
                      </h4>
                      <ul className="space-y-3">
                        {sport.tips.map((tip, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${sport.gradient}`} />
                            <span className="text-gray-600">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Play Video Button */}
              <div className="mt-8 text-center">
                <button 
                  onClick={() => handleVideoPlay(sport.video)}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition duration-300"
                >
                  Play {sport.name} Video
                </button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative w-full max-w-3xl bg-white rounded-lg overflow-hidden">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✕
            </button>
            <video controls className="w-full h-72">
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  )
}
