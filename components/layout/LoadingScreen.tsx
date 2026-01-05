'use client'

import { motion } from 'framer-motion'
import { Navigation, Shield, Users, MapPin, Car, Zap, Globe } from 'lucide-react'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-primary-darkblue via-primary-blue to-primary-purple overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-orange/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Logo Animation */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="relative mb-8"
      >
        <div className="relative w-40 h-40">
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-orange border-r-primary-gold border-b-primary-purple border-l-primary-blue"
          />
          
          {/* Middle Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-8 rounded-full border-4 border-transparent border-t-primary-gold border-r-primary-purple border-b-primary-blue border-l-primary-orange"
          />
          
          {/* Inner Circle */}
          <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary-blue to-primary-purple flex items-center justify-center">
            <Navigation className="w-16 h-16 text-white" />
          </div>
          
          {/* Floating Icons */}
          {[Shield, Car, MapPin, Users, Zap, Globe].map((Icon, index) => {
            const angle = (index * 60) * (Math.PI / 180)
            const radius = 80
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
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                <div className="p-2 rounded-full bg-gradient-to-br from-primary-orange to-primary-gold shadow-lg">
                  <Icon className="w-6 h-6 text-primary-darkblue" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* App Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-4"
      >
        <h1 className="text-6xl font-bold bg-gradient-to-r from-primary-orange via-primary-gold to-primary-purple bg-clip-text text-transparent animate-pulse">
          NjiaSafe
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-300 mt-2"
        >
          Smart Navigation Built for Africa
        </motion.p>
      </motion.div>

      {/* Loading Progress */}
      <div className="w-64 mb-8">
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-orange to-primary-gold"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </div>
      </div>

      {/* Loading Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-center"
      >
        <p className="text-gray-400 mb-2">Initializing Premium Experience</p>
        <div className="flex justify-center gap-2">
          {['V2V System', 'AI Assistant', 'Real-time Analytics', 'Safety Features'].map((text, index) => (
            <motion.span
              key={text}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="px-3 py-1 bg-white/5 rounded-full text-xs"
            >
              {text}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Bottom Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <p className="text-sm text-gray-500">Using real-time data for safer African roads</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-400">Live Data</span>
          </div>
          <span className="text-gray-600">•</span>
          <span className="text-xs text-gray-400">AI-Powered Navigation</span>
          <span className="text-gray-600">•</span>
          <span className="text-xs text-gray-400">Government Integrated</span>
        </div>
      </motion.div>
    </div>
  )
}
