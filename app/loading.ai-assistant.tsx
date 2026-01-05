'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  Brain, MessageSquare, Cpu, Zap, Shield, Navigation,
  BatteryCharging, Route, Map, Clock, AlertTriangle,
  Car, Users, Globe, Wifi, Satellite, Cctv,
  Sparkles, Bot, Search, Radio, Mic, Camera,
  TrendingUp, BarChart, Database, Cloud, Server,
  Lock, Eye, Bell, Star, Target, CheckCircle
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function Loading() {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [aiMessage, setAiMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [activeModule, setActiveModule] = useState(0)
  const messageIndex = useRef(0)

  const aiMessages = [
    "👋 Hello! I'm your NjiaSafe AI Assistant. Initializing neural networks...",
    "🔍 Scanning road networks and traffic patterns...",
    "⚡ Analyzing EV charging station availability...",
    "🛡️ Calculating safest routes with real-time crime data...",
    "📊 Processing shortest path algorithms...",
    "🤖 Training AI models for predictive navigation...",
    "🌍 Connecting to satellite and IoT networks...",
    "✅ Almost ready! Preparing your personalized dashboard..."
  ]

  const aiModules = [
    { 
      icon: Brain, 
      name: 'Neural Core', 
      status: 'Online',
      color: 'from-purple-500 to-pink-500',
      description: 'Deep learning navigation engine'
    },
    { 
      icon: MessageSquare, 
      name: 'Voice Assistant', 
      status: 'Calibrating',
      color: 'from-blue-500 to-cyan-500',
      description: 'Natural language processing'
    },
    { 
      icon: Cpu, 
      name: 'AI Processor', 
      status: 'Active',
      color: 'from-green-500 to-emerald-500',
      description: 'Real-time decision making'
    },
    { 
      icon: Shield, 
      name: 'Security AI', 
      status: 'Armed',
      color: 'from-red-500 to-orange-500',
      description: 'Threat detection & prevention'
    },
    { 
      icon: Navigation, 
      name: 'Route AI', 
      status: 'Optimizing',
      color: 'from-indigo-500 to-blue-500',
      description: 'Smart pathfinding algorithms'
    },
    { 
      icon: BatteryCharging, 
      name: 'EV Assistant', 
      status: 'Charging',
      color: 'from-teal-500 to-green-500',
      description: 'Electric vehicle optimization'
    }
  ]

  const features = [
    { icon: Route, title: 'Smart Route AI', desc: 'Safest & shortest paths', color: 'text-blue-400' },
    { icon: Map, title: 'EV Charging Map', desc: 'Real-time station finder', color: 'text-green-400' },
    { icon: Clock, title: 'Predictive ETA', desc: 'AI time estimation', color: 'text-purple-400' },
    { icon: AlertTriangle, title: 'Hazard Detection', desc: 'Proactive alerts', color: 'text-yellow-400' },
    { icon: Users, title: 'Crowd Intelligence', desc: 'Community data sharing', color: 'text-pink-400' },
    { icon: Globe, title: 'Global Coverage', desc: 'Worldwide navigation', color: 'text-cyan-400' }
  ]

  const aiStats = [
    { label: 'Neural Networks', value: '256', unit: 'layers' },
    { label: 'Processing Speed', value: '15.8', unit: 'TFLOPS' },
    { label: 'Data Processed', value: '2.4', unit: 'PB/day' },
    { label: 'Accuracy Rate', value: '99.7', unit: '%' },
    { label: 'Response Time', value: '<50', unit: 'ms' },
    { label: 'AI Models', value: '42', unit: 'active' }
  ]

  useEffect(() => {
    // Progress simulation
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 0.5
      })
    }, 30)

    // AI message typing simulation
    const messageInterval = setInterval(() => {
      if (messageIndex.current < aiMessages.length) {
        setIsTyping(true)
        const message = aiMessages[messageIndex.current]
        let charIndex = 0
        const typeInterval = setInterval(() => {
          setAiMessage(message.substring(0, charIndex))
          charIndex++
          if (charIndex > message.length) {
            clearInterval(typeInterval)
            setIsTyping(false)
            setTimeout(() => {
              messageIndex.current++
            }, 1500)
          }
        }, 30)
      }
    }, 3000)

    // Module cycling
    const moduleInterval = setInterval(() => {
      setActiveModule(prev => (prev + 1) % aiModules.length)
    }, 2000)

    return () => {
      clearInterval(progressInterval)
      clearInterval(messageInterval)
      clearInterval(moduleInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden p-4">
      
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-20 bg-gradient-to-b from-purple-500/20 to-transparent"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              y: [null, '-100px'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        
        {/* Header with AI Assistant Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 mb-4">
            <div className="p-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                NjiaSafe AI Assistant
              </h1>
              <p className="text-sm text-gray-400">Powering Africa's Smartest Navigation</p>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Left Column: AI Chat & Progress */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* AI Chat Interface */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">AI Assistant</h2>
                  <p className="text-sm text-gray-400">Version 3.1 • Neural Core Active</p>
                </div>
              </div>

              {/* AI Message Display */}
              <div className="mb-6">
                <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 min-h-[100px]">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-1">NjiaSafe AI • Just now</div>
                      <div className="text-white text-lg leading-relaxed">
                        {aiMessage}
                        {isTyping && (
                          <span className="inline-block w-2 h-6 ml-1 bg-purple-500 animate-pulse" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Status Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {aiStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="p-3 rounded-xl bg-gray-800/30 hover:bg-gray-700/30 transition-all cursor-pointer group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.unit}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <h2 className="text-xl font-bold text-white">AI-Powered Features</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="p-4 rounded-xl bg-gray-800/30 hover:bg-gray-700/30 transition-all group cursor-pointer"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${feature.color.replace('text-', 'bg-')}/20`}>
                          <Icon className={`w-5 h-5 ${feature.color}`} />
                        </div>
                        <h3 className="font-bold text-white">{feature.title}</h3>
                      </div>
                      <p className="text-sm text-gray-400">{feature.desc}</p>
                      <div className="mt-3 h-1 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: `${70 + Math.random() * 30}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: AI Modules & Progress */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Circular Logo with AI Badge */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <div className="relative w-48 h-48 mx-auto mb-6">
                {/* Neural network rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/20"
                />
                
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-4 rounded-full border-2 border-dashed border-pink-500/20"
                />

                {/* Circular Logo */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-gray-700/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
                  <div className="absolute inset-4 rounded-full overflow-hidden">
                    <Image
                      src="/logo.png"
                      alt="NjiaSafe AI"
                      fill
                      className="object-contain p-6"
                      priority
                      style={{
                        borderRadius: '50%',
                        filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.3))'
                      }}
                    />
                  </div>
                </div>

                {/* AI Badge */}
                <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold flex items-center gap-1">
                  <Brain className="w-3 h-3" />
                  <span>AI</span>
                </div>

                {/* Processing Dots */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                  {[0, 1, 2].map(i => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-300 mb-2">
                  <span>AI System Initialization</span>
                  <span className="font-bold text-purple-400">{loadingProgress.toFixed(1)}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* AI Modules */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-2 mb-4">
                <Server className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl font-bold text-white">AI Modules</h2>
              </div>
              
              <div className="space-y-3">
                <AnimatePresence mode="wait">
                  {aiModules.map((module, index) => {
                    const Icon = module.icon
                    const isActive = index === activeModule
                    return (
                      <motion.div
                        key={module.name}
                        initial={{ opacity: isActive ? 0 : 0.5, x: isActive ? 20 : 0 }}
                        animate={{ opacity: isActive ? 1 : 0.5, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className={`p-3 rounded-xl transition-all cursor-pointer ${isActive ? 'bg-gray-800/50 border border-gray-600' : 'bg-gray-900/30 hover:bg-gray-800/30'}`}
                        onClick={() => setActiveModule(index)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${isActive ? `bg-gradient-to-br ${module.color}` : 'bg-gray-800'}`}>
                              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                            </div>
                            <div>
                              <div className="font-medium text-white">{module.name}</div>
                              <div className="text-xs text-gray-400">{module.description}</div>
                            </div>
                          </div>
                          <div className={`px-2 py-1 rounded text-xs font-bold ${isActive ? 'bg-green-500/20 text-green-400' : 'bg-gray-800 text-gray-400'}`}>
                            {module.status}
                          </div>
                        </div>
                        {isActive && (
                          <motion.div
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            className="mt-2 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                          />
                        )}
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar: Loading Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-4 border border-gray-700/50"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                <Cpu className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Neural Processing</div>
                <div className="text-xs text-gray-400">AI models training in real-time</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">9</div>
                <div className="text-xs text-gray-400">AI Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">256</div>
                <div className="text-xs text-gray-400">Neurons Active</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.7%</div>
                <div className="text-xs text-gray-400">Accuracy</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-right">
                <div className="text-sm font-medium text-white">Ready in</div>
                <div className="text-xs text-gray-400">{(100 - loadingProgress) / 2}s</div>
              </div>
              <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-center"
        >
          <p className="text-xs text-gray-500">
            © 2024 NjiaSafe AI Navigation • Powered by Quantum Neural Networks
            <span className="mx-2">•</span>
            <span className="text-purple-400">Ethical AI</span>
            <span className="mx-2">•</span>
            <span className="text-pink-400">Privacy First</span>
            <span className="mx-2">•</span>
            <span className="text-blue-400">Africa Built</span>
          </p>
        </motion.div>
      </div>

      {/* Shimmer animation style */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  )
}
