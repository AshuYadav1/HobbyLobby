'use client'

import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Html } from '@react-three/drei'
import { Vector3 } from 'three'

// Hotspot component for interactive points of interest
const Hotspot = ({ position, title, description, onSelect }) => {
  const meshRef = useRef()
  const [hover, setHover] = useState(false)

  return (
    <mesh 
      position={position}
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={onSelect}
    >
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color={hover ? 'yellow' : 'red'} />
      {hover && (
        <Html distanceFactor={10} position={[0, 0.5, 0]}>
          <div className="p-2 bg-black/70 text-white rounded">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Html>
      )}
    </mesh>
  )
}

// Main 3D Tour Component
const FacilityTour = ({onExit}) => {
  const [currentPosition, setCurrentPosition] = useState(new Vector3(0, 2, 5))
  const [selectedArea, setSelectedArea] = useState(null)

  // Predefined tour locations
  const tourLocations = [
    { 
      id: 'Main Gate', 
      position: [0, 2, 5], 
      title: 'Main Gate Area', 
      description: 'Main gate with parking ' 
    },
    
  ]

  const handleHotspotSelect = (location) => {
    setSelectedArea(location)
    setCurrentPosition(new Vector3(...location.position))
  }

  return (
    <Canvas camera={{ position: currentPosition }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {/* Load panoramic image as background */}
      <Environment 
        background 
        files="/turf-p.jpg" // Ensure the image is placed in the public folder
      />

      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
      />

      {/* Hotspots */}
      {tourLocations.map((location) => (
        <Hotspot
          key={location.id}
          position={location.position}
          title={location.title}
          description={location.description}
          onSelect={() => handleHotspotSelect(location)}
        />
      ))}

      {/* Selected Area Information */}
      {selectedArea && (
        <Html position={[0, 4, 0]}>
          <div className="p-4 bg-black/70 text-white rounded">
            <h2>{selectedArea.title}</h2>
            <p>{selectedArea.description}</p>
          </div>
        </Html>
      )}
         <Html position={[10,10,10]}>
          <button
           onClick={onExit}
           className="text-white bg-red-500 px-4 py-2 rounded"
          >
          Exit
           </button>
        </Html>
    </Canvas>
  )
}

// Hero Section with 3D Tour Modal
export default function Hero() {
  const [showTour, setShowTour] = useState(false)

  const handleCloseTour = () => {
    setShowTour(false)
  }


  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-800 to-indigo-900">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
        style={{ filter: 'brightness(40%)' }}
      >
        <source src="/turf.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to <span className="text-yellow-400">Hobby Lobby</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Where <span className="text-yellow-400">Fun</span>,{' '}
          <span className="text-green-400">Fitness</span>, and{' '}
          <span className="text-red-400">Community</span> Unite
        </p>
        <div>
          
          <button 
            onClick={() => setShowTour(true)}
            className="px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
          >
            Explore Facility
          </button>
        </div>
      </div>

      {/* 3D Tour Modal */}
      {showTour && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="w-5/6 h-5/6 relative">
            <button 
              onClick={() => setShowTour(false)}
              className="absolute top-4 right-4 z-60 text-white bg-red-500 px-4 py-2 rounded"
            >
              Close Tour
            </button>
            <FacilityTour onExit={handleCloseTour} />
          </div>
        </div>
      )}
    </section>
  )
}