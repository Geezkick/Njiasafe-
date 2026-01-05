'use client'

import { motion } from 'framer-motion'
import { Navigation, Shield, Zap, Users, Car, Globe, MapPin } from 'lucide-react'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-premium overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main Logo */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: 'spring' }}
        className="relative mb-12"
      >
        <div className="relative w-64 h-64">
          {/* Outer Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-8 border-transparent border-t-primary-orange border-r-primary-gold border-b-primary-purple border-l-primary-blue"
          />
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-8 rounded-full border-6 border-transparent border-t-primary-gold border-r-primary-purple border-b-primary-blue border-l-primary-orange"
          />
          
          {/* Middle Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-16 rounded-full border-4 border-transparent border-t-primary-purple border-r-primary-blue border-b-primary-orange border-l-primary-gold"
          />
          
          {/* Center Logo */}
          <div className="absolute inset-24 rounded-full bg-gradient-to-br from-primary-blue to-primary-purple flex items-center justify-center">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-orange to-primary-gold animate-ping opacity-20" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary-blue to-primary-purple flex items-center justify-center">
                <Navigation className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
          
          {/* Floating Icons */}
          {[Shield, Car, MapPin, Users, Zap, Globe].map((Icon, index) => {
            const angle = (index * 60) * (Math.PI / 180)
            const radius = 120
            const x = radius * Math.cos(angle)
            const y = radius * Math.sin(angle)
            
            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                <div className="p-3 rounded-full bg-gradient-to-br from-primary-orange to-primary-gold shadow-lg">
                  <Icon className="w-6 h-6 text-primary-darkblue" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-6xl font-bold text-gradient-premium mb-4">
          NjiaSafe
        </h1>
        <p className="text-2xl text-gray-300">Premium Smart Navigation</p>
        <p className="text-lg text-gray-400 mt-2">Built for Africa</p>
      </motion.div>

      {/* Loading Progress */}
      <div className="w-96 mb-8">
        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-orange via-primary-gold to-primary-orange"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          />
        </div>
      </div>

      {/* Loading Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center"
      >
        <p className="text-gray-400 mb-4">Initializing Premium Features</p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { text: 'AI Navigation', color: 'bg-blue-500/20 text-blue-400' },
            { text: 'V2V System', color: 'bg-purple-500/20 text-purple-400' },
            { text: 'Emergency SOS', color: 'bg-red-500/20 text-red-400' },
            { text: 'Government Data', color: 'bg-green-500/20 text-green-400' },
            { text: 'Real-time Analytics', color: 'bg-orange-500/20 text-orange-400' },
          ].map((feature, index) => (
            <motion.span
              key={feature.text}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className={`px-4 py-2 rounded-full text-sm font-medium ${feature.color}`}
            >
              {feature.text}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Bottom Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-400">Connecting to African Road Network</span>
          </div>
          <p className="text-xs text-gray-500">
            Using real-time data to save lives across Africa
          </p>
        </div>
      </motion.div>
    </div>
  )
}
