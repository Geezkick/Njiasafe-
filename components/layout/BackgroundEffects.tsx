'use client'

import { motion } from 'framer-motion'

export default function BackgroundEffects() {
  const particles = Array.from({ length: 20 })
  const floatingIcons = Array.from({ length: 8 })

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-darkblue via-primary-blue to-primary-purple opacity-90" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #F97316 1px, transparent 1px),
                            linear-gradient(to bottom, #F97316 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>
      
      {/* Floating Particles */}
      {particles.map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary-gold rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* Large Floating Elements */}
      {floatingIcons.map((_, i) => (
        <motion.div
          key={`float-${i}`}
          className="absolute opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 100 - 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className={`w-full h-full rounded-full ${
            i % 4 === 0 ? 'bg-gradient-to-br from-primary-orange/30 to-primary-gold/30' :
            i % 4 === 1 ? 'bg-gradient-to-br from-primary-blue/30 to-primary-purple/30' :
            i % 4 === 2 ? 'bg-gradient-to-br from-primary-gold/30 to-primary-orange/30' :
            'bg-gradient-to-br from-primary-purple/30 to-primary-blue/30'
          }`} />
        </motion.div>
      ))}
      
      {/* Light Beams */}
      <div className="absolute inset-0">
        {[0, 45, 90, 135].map((angle) => (
          <motion.div
            key={angle}
            className="absolute top-1/2 left-1/2 w-[200%] h-1 bg-gradient-to-r from-transparent via-primary-gold/20 to-transparent"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: angle * 0.01,
            }}
          />
        ))}
      </div>
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-64 h-64">
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary-gold/30 rounded-tl-3xl" />
      </div>
      <div className="absolute top-0 right-0 w-64 h-64">
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary-gold/30 rounded-tr-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64">
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-primary-gold/30 rounded-bl-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64">
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary-gold/30 rounded-br-3xl" />
      </div>
    </div>
  )
}
