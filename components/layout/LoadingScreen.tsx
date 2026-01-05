'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Users, Car, Globe, MapPin, Code } from 'lucide-react'
import Image from 'next/image'

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

      {/* Main Logo - CIRCULAR with your logo.png */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: 'spring' }}
        className="relative mb-8 sm:mb-12"
      >
        <div className="relative w-48 h-48 sm:w-64 sm:h-64">
          {/* Outer Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-6 sm:-inset-8 rounded-full border-4 border-primary-orange/20"
          />
          
          {/* Circular Spinning Logo Container */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full border-8 border-primary-gold border-t-primary-orange animate-spin-slow">
            {/* Inner Circle with your logo */}
            <div className="absolute inset-6 sm:inset-8 rounded-full bg-gradient-to-br from-primary-600 to-primary-purple flex items-center justify-center overflow-hidden">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full"
              >
                <Image
                  src="/logo.png"
                  alt="NjiaSafe Logo"
                  fill
                  className="object-contain p-4"
                  priority
                  sizes="(max-width: 640px) 144px, 192px"
                />
              </motion.div>
            </div>
          </div>
          
          {/* Floating Icons Around Circle */}
          {[Shield, Car, MapPin, Users, Zap, Globe].map((Icon, index) => {
            const angle = (index * 60) * (Math.PI / 180)
            const radius = 140
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
                  <Icon className="w-6 h-6 text-primary-950" />
                </div>
              </motion.div>
            )
          })}
          
          {/* Pulsing Outer Circle */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary-gold/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mb-6 sm:mb-8"
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-gradient-premium mb-3 sm:mb-4">
          NjiaSafe
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300">Premium Smart Navigation</p>
        <p className="text-lg sm:text-lg text-gray-400 mt-1 sm:mt-2">Built for Africa</p>
      </motion.div>

      {/* Loading Progress */}
      <div className="w-64 sm:w-96 mb-6 sm:mb-8">
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
        <p className="text-gray-400 mb-3 sm:mb-4">Initializing Premium Features</p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
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
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium ${feature.color}`}
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
        className="absolute bottom-4 sm:bottom-8 left-0 right-0 text-center"
      >
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-gray-400">Connecting to African Road Network</span>
          </div>
          <div className="flex items-center gap-2">
            <Code className="w-3 h-3 sm:w-4 sm:h-4 text-primary-gold" />
            <p className="text-xs text-gray-500">
              Developed by <span className="text-primary-gold font-semibold">Brian Nyarienya</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
