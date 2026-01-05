'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  Navigation, Shield, Zap, Users, Bell, Settings, 
  User, LogOut, Car, Bike, BarChart3, MapPin,
  AlertTriangle, Heart, Clock, Crown, TrendingUp,
  Facebook, Twitter, Instagram, Linkedin, Youtube, Github,
  Brain, BatteryCharging, Map, Route, Cpu, Loader2,
  Sparkles, Wifi, Satellite, Server, CheckCircle,
  Battery, Globe, Radio, Target, Lock, Eye, MessageSquare
} from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Loading() {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [activeSection, setActiveSection] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const loadingSteps = [
    {
      title: 'Welcome Header',
      description: 'Loading user profile and safety score...',
      icon: User,
      color: 'from-primary-900 via-primary-800 to-primary-purple',
      features: ['User Profile', 'Safety Score: 98%', 'Premium Status']
    },
    {
      title: 'Quick Stats',
      description: 'Calculating your daily metrics...',
      icon: BarChart3,
      color: 'from-blue-500/20 to-purple-500/20',
      features: ['Distance Today', 'Time Saved', 'V2V Connected']
    },
    {
      title: 'Navigation Modes',
      description: 'Initializing route options...',
      icon: Navigation,
      color: 'from-green-500/20 to-emerald-500/20',
      features: ['Drive Mode', 'Cycle Mode', 'Walk Mode']
    },
    {
      title: 'Emergency SOS',
      description: 'Connecting to emergency services...',
      icon: AlertTriangle,
      color: 'from-red-500/20 to-orange-500/20',
      features: ['Police', 'Ambulance', 'Fire Service', 'Road Rescue']
    },
    {
      title: 'AI Assistant',
      description: 'Starting neural networks...',
      icon: Brain,
      color: 'from-purple-500/20 to-pink-500/20',
      features: ['Smart Routing', 'Predictive Alerts', 'Voice Assistant']
    },
    {
      title: 'EV Charging Map',
      description: 'Scanning charging stations...',
      icon: BatteryCharging,
      color: 'from-teal-500/20 to-green-500/20',
      features: ['4,450+ Stations', '87% Available', '4 Networks']
    },
    {
      title: 'Smart Maps',
      description: 'Loading live traffic data...',
      icon: Map,
      color: 'from-blue-500/20 to-cyan-500/20',
      features: ['25+ Cities', 'Real-time Updates', '8 Map Layers']
    },
    {
      title: 'Safe Routes',
      description: 'Calculating safest paths...',
      icon: Shield,
      color: 'from-red-500/20 to-yellow-500/20',
      features: ['98% Safety Score', 'Zero Incidents', '100% Coverage']
    }
  ]

  const quickStats = [
    { icon: MapPin, label: 'Distance Today', value: '42.5 km', color: 'text-blue-400' },
    { icon: Clock, label: 'Time Saved', value: '1.5 hrs', color: 'text-green-400' },
    { icon: Heart, label: 'Safety Score', value: '98%', color: 'text-purple-400' },
    { icon: Users, label: 'V2V Connected', value: '42', color: 'text-orange-400' },
  ]

  const navigationModes = [
    { id: 'drive', label: 'Drive', icon: Car, color: 'from-blue-500 to-purple-500' },
    { id: 'cycle', label: 'Cycle', icon: Bike, color: 'from-green-500 to-emerald-500' },
    { id: 'walk', label: 'Walk', icon: User, color: 'from-orange-500 to-red-500' },
  ]

  const socialPlatforms = [
    { icon: Facebook, name: 'Facebook', color: 'bg-blue-600 hover:bg-blue-500', url: '#' },
    { icon: Twitter, name: 'X (Twitter)', color: 'bg-black hover:bg-gray-800', url: '#' },
    { icon: Instagram, name: 'Instagram', color: 'bg-gradient-to-br from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500', url: '#' },
    { icon: Linkedin, name: 'LinkedIn', color: 'bg-blue-700 hover:bg-blue-600', url: '#' },
    { icon: Youtube, name: 'YouTube', color: 'bg-red-600 hover:bg-red-500', url: '#' },
    { icon: Github, name: 'GitHub', color: 'bg-gray-800 hover:bg-gray-700', url: '#' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 0.5
      })
    }, 30)

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % loadingSteps.length)
    }, 2500)

    const componentInterval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 6)
    }, 1800)

    return () => {
      clearInterval(interval)
      clearInterval(stepInterval)
      clearInterval(componentInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-primary-darkblue to-primary-purple overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-20 bg-gradient-to-b from-primary-orange/10 to-transparent"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              y: [null, '-100px'],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 mb-4">
            {/* STATIC LOGO - NO ROTATION */}
            <div className="relative w-12 h-12">
              {/* Outer container with subtle pulse */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="absolute inset-0 rounded-full overflow-hidden border-2 border-primary-gold/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="NjiaSafe"
                    fill
                    className="object-contain p-2"
                    priority
                    style={{ 
                      borderRadius: '50%',
                      animation: 'none' /* Disable any rotation */
                    }}
                  />
                </div>
              </motion.div>
              {/* Status indicator */}
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent">
                NjiaSafe Dashboard
              </h1>
              <p className="text-sm text-gray-400">Loading your navigation control center</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          <div className="space-y-6">
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white">System Initialization</h3>
                <div className="px-3 py-1 rounded-lg bg-gray-800/50">
                  <span className="text-primary-gold font-bold">{loadingProgress.toFixed(1)}%</span>
                </div>
              </div>
              
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-6">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-orange via-primary-gold to-primary-purple rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {quickStats.map((stat, index) => {
                  const Icon = stat.icon
                  const loaded = loadingProgress > (index + 1) * 25
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: loaded ? 1 : 0.5, scale: loaded ? 1 : 0.9 }}
                      className={`p-3 rounded-xl ${loaded ? 'bg-gray-800/50' : 'bg-gray-900/30'} border border-gray-700/50`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className={`w-5 h-5 ${stat.color}`} />
                        {loaded && <CheckCircle className="w-4 h-4 text-green-500" />}
                      </div>
                      <div className={`text-lg font-bold ${loaded ? 'text-white' : 'text-gray-500'}`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                Join Our Community
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {socialPlatforms.map((platform, index) => {
                  const Icon = platform.icon
                  const loaded = loadingProgress > 50 + index * 5
                  return (
                    <motion.a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative ${loaded ? platform.color : 'bg-gray-800'} p-3 rounded-full text-white transition-all`}
                      initial={{ scale: 0 }}
                      animate={{ scale: loaded ? 1 : 0 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                      {loaded && (
                        <motion.div
                          className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                    </motion.a>
                  )
                })}
              </div>
              <p className="text-xs text-gray-400 text-center mt-4">
                Follow us for updates and safety tips
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {loadingSteps.map((step, index) => {
                if (index !== currentStep) return null
                const Icon = step.icon
                
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      {/* Static icon (no rotation) */}
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-white mb-2">{step.title}</h2>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                      <div className="px-4 py-2 rounded-lg bg-gray-800/50">
                        <div className="text-sm text-gray-400">Progress</div>
                        <div className="text-xl font-bold text-primary-gold">
                          {Math.min(100, Math.floor((loadingProgress / 100) * (index + 1) * 100 / loadingSteps.length))}%
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                      {step.features.map((feature, featureIndex) => {
                        const featureLoaded = loadingProgress > (index * 12.5) + (featureIndex * 3)
                        return (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: featureLoaded ? 1 : 0.5, y: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className={`p-3 rounded-lg text-center ${featureLoaded ? 'bg-gray-800/50' : 'bg-gray-900/30'}`}
                          >
                            <div className="text-sm font-medium mb-1">
                              {featureLoaded ? (
                                <span className="text-white">{feature}</span>
                              ) : (
                                <span className="text-gray-500">{feature}</span>
                              )}
                            </div>
                            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                              {featureLoaded && (
                                <motion.div
                                  className="h-full bg-gradient-to-r from-primary-orange to-primary-gold rounded-full"
                                  initial={{ width: '0%' }}
                                  animate={{ width: '100%' }}
                                  transition={{ duration: 0.5 }}
                                />
                              )}
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>

                    {step.title === 'Navigation Modes' && (
                      <div className="mt-6 p-4 rounded-xl bg-gray-800/30">
                        <h4 className="text-lg font-bold text-white mb-3">Navigation Modes</h4>
                        <div className="grid grid-cols-3 gap-3">
                          {navigationModes.map((mode, idx) => {
                            const ModeIcon = mode.icon
                            const modeLoaded = loadingProgress > 30 + idx * 10
                            return (
                              <motion.div
                                key={mode.id}
                                initial={{ scale: 0 }}
                                animate={{ scale: modeLoaded ? 1 : 0.8 }}
                                className={`p-4 rounded-xl text-center ${modeLoaded ? `bg-gradient-to-br ${mode.color}` : 'bg-gray-800/50'}`}
                              >
                                <ModeIcon className={`w-6 h-6 mx-auto mb-2 ${modeLoaded ? 'text-white' : 'text-gray-500'}`} />
                                <div className={`text-sm font-medium ${modeLoaded ? 'text-white' : 'text-gray-500'}`}>
                                  {mode.label}
                                </div>
                              </motion.div>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {step.title === 'EV Charging Map' && (
                      <div className="mt-6 p-4 rounded-xl bg-gray-800/30">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-lg font-bold text-white">EV Charging Network</h4>
                          <div className="flex items-center gap-2">
                            <Battery className="w-5 h-5 text-green-400" />
                            <span className="text-green-400 font-bold">4,450+ Stations</span>
                          </div>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                            initial={{ width: '0%' }}
                            animate={{ width: `${loadingProgress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
        >
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Server className="w-5 h-5 text-blue-400" />
            Dashboard Components
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {['AnalyticsCard', 'NavigationMode', 'SOSButton', 'V2VAlert', 'PremiumLayout', 'SafeButton'].map((name, index) => {
              const isActive = index === activeSection
              const isLoaded = loadingProgress > (index + 1) * 15
              
              return (
                <motion.div
                  key={name}
                  className={`p-3 rounded-xl text-center ${isLoaded ? 'bg-gray-800/50 border border-gray-600' : 'bg-gray-900/30'}`}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    borderColor: isActive ? 'rgba(249, 115, 22, 0.5)' : 'rgba(75, 85, 99, 0.5)'
                  }}
                >
                  <div className="text-xs text-gray-400 mb-1">{name}</div>
                  <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                    {isLoaded ? (
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                      />
                    ) : (
                      <div className="h-full bg-gradient-to-r from-primary-orange to-primary-gold rounded-full" 
                           style={{ width: `${loadingProgress}%` }} />
                    )}
                  </div>
                  <div className="mt-2">
                    {isLoaded ? (
                      <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                    ) : (
                      <Loader2 className="w-4 h-4 text-primary-orange mx-auto animate-spin" />
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>AI Assistant Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                />
                <span>EV Map Online</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 bg-purple-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                />
                <span>Safe Routes Active</span>
              </div>
            </div>
            <div className="mt-2 sm:mt-0">
              <span>Ready in </span>
              <span className="text-primary-gold font-bold">{((100 - loadingProgress) / 2).toFixed(1)}s</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
