'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Car, Bike, User as PedestrianIcon, Navigation } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'

type Mode = 'drive' | 'cycle' | 'pedestrian'

export default function NavigationMode() {
  const [activeMode, setActiveMode] = useState<Mode>('drive')
  const { t } = useLanguage()

  const modes: Array<{ id: Mode; label: string; icon: any; color: string; description: string }> = [
    {
      id: 'drive',
      label: t('drive'),
      icon: Car,
      color: 'from-blue-500 to-purple-500',
      description: 'Optimized for vehicle navigation with traffic updates'
    },
    {
      id: 'cycle',
      label: t('cycle'),
      icon: Bike,
      color: 'from-green-500 to-emerald-500',
      description: 'Bike routes with elevation and safety features'
    },
    {
      id: 'pedestrian',
      label: t('pedestrian'),
      icon: PedestrianIcon,
      color: 'from-orange-500 to-red-500',
      description: 'Walking routes with pedestrian crossings'
    }
  ]

  return (
    <div className="card-premium p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Navigation className="w-5 h-5 text-primary-orange" />
            {t('mode')}
          </h3>
          <p className="text-sm text-gray-400 mt-1">Switch based on your travel method</p>
        </div>
        <div className="px-3 py-1 rounded-full bg-primary-blue/50 border border-primary-blue/50 text-xs">
          AI-Optimized
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {modes.map((mode) => {
          const Icon = mode.icon
          const isActive = activeMode === mode.id
          
          return (
            <motion.button
              key={mode.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveMode(mode.id)}
              className={`relative p-4 rounded-xl flex flex-col items-center justify-center transition-all ${isActive
                  ? `bg-gradient-to-br ${mode.color} text-white shadow-lg`
                  : 'bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeMode"
                  className="absolute inset-0 rounded-xl border-2 border-primary-gold"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              
              <div className="relative z-10 flex flex-col items-center">
                <div className={`p-3 rounded-full mb-3 ${isActive ? 'bg-white/20' : 'bg-white/5'}`}>
                  <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                </div>
                <span className="font-medium">{mode.label}</span>
                <span className="text-xs text-center mt-2 opacity-75">
                  {mode.description}
                </span>
              </div>
              
              {isActive && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-primary-gold rounded-full flex items-center justify-center"
                >
                  <span className="text-xs text-primary-darkblue">✓</span>
                </motion.div>
              )}
            </motion.button>
          )
        })}
      </div>

      {/* Current Route Info */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Current Route</span>
          <span className="text-sm font-semibold text-primary-gold">Nairobi to Mombasa</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div>
            <span className="text-gray-400">Distance: </span>
            <span className="font-semibold">483 km</span>
          </div>
          <div>
            <span className="text-gray-400">Est. Time: </span>
            <span className="font-semibold">6h 30m</span>
          </div>
          <div>
            <span className="text-gray-400">Safety: </span>
            <span className="font-semibold text-green-400">94%</span>
          </div>
        </div>
        
        <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-orange to-primary-gold"
            initial={{ width: '0%' }}
            animate={{ width: '65%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </div>
  )
}
