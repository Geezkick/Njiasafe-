'use client'

import { motion } from 'framer-motion'
import PremiumLayout from '@/components/layout/PremiumLayout'
import SafeButton from '@/components/ui/SafeButton'
import { 
  Brain, MessageSquare, Mic, Zap, Cpu, Shield,
  Navigation, AlertTriangle, Clock, Users, Settings,
  Sparkles, Bot, Radio, Satellite, Server, Database,
  TrendingUp, BarChart, Wifi, Globe, Lock, Eye
} from 'lucide-react'
import { useState } from 'react'

export default function AiAssistantPage() {
  const [isListening, setIsListening] = useState(false)
  const [aiResponse, setAiResponse] = useState('')
  const [activeFeature, setActiveFeature] = useState(0)

  const aiFeatures = [
    {
      icon: Brain,
      title: 'Neural Navigation',
      description: 'AI-powered route optimization using deep learning',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: 'Voice Assistant',
      description: 'Natural language processing for voice commands',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Safety AI',
      description: 'Real-time threat detection and prevention',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Cpu,
      title: 'Predictive Analytics',
      description: 'Anticipate traffic patterns and hazards',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Sub-50ms AI decision making',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Navigation,
      title: 'Smart Routing',
      description: 'Adaptive pathfinding based on live conditions',
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  const aiCapabilities = [
    { icon: Globe, text: 'Multi-language Support', status: 'Active' },
    { icon: Wifi, text: 'Real-time Processing', status: 'Online' },
    { icon: Lock, text: 'Encrypted Communication', status: 'Secure' },
    { icon: Eye, text: 'Visual Recognition', status: 'Enabled' },
    { icon: Radio, text: 'V2V Communication', status: 'Connected' },
    { icon: Satellite, text: 'Satellite Integration', status: 'Live' }
  ]

  const handleVoiceCommand = () => {
    setIsListening(true)
    setAiResponse('Listening... What can I help you with?')
    
    // Simulate AI response
    setTimeout(() => {
      setIsListening(false)
      setAiResponse("I've found the safest route to your destination. There's moderate traffic ahead but I've calculated an alternative that saves 15 minutes.")
    }, 2000)
  }

  const handleAskAI = (question: string) => {
    setAiResponse(`Processing: "${question}"...`)
    
    setTimeout(() => {
      const responses = [
        "Based on current traffic, I recommend taking the Eastern Bypass. It's 12 minutes faster.",
        "Weather alert: Light rain expected in 20 minutes. Suggest delaying departure by 15 minutes.",
        "Safety check: Your route passes through a high-risk area. I've adjusted to a safer alternative.",
        "EV charging: There are 3 available stations along your route. The nearest is 2km ahead.",
        "Road conditions: Construction on Mombasa Road. Detour via Langata Road recommended."
      ]
      setAiResponse(responses[Math.floor(Math.random() * responses.length)])
    }, 1500)
  }

  return (
    <PremiumLayout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-lg overflow-hidden p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  NjiaSafe <span className="text-gradient-premium">AI Assistant</span>
                </h1>
                <p className="text-gray-300">
                  Your intelligent navigation partner powered by quantum neural networks
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-sm text-gray-400">AI Status</div>
                <div className="text-lg font-bold text-green-400 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Active & Learning
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Conversation Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: AI Chat */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Brain className="w-6 h-6 text-purple-400" />
                  AI Conversation
                </h2>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-green-400">Live</span>
                </div>
              </div>

              {/* AI Response Display */}
              <div className="mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                        <Bot className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-purple-400 mb-1">NjiaSafe AI Assistant</div>
                      <div className="text-white text-lg leading-relaxed">
                        {aiResponse || "Hello! I'm your NjiaSafe AI Assistant. How can I help you navigate safely today?"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Questions */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  "Find safest route",
                  "Check traffic",
                  "EV charging",
                  "Weather update"
                ].map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleAskAI(question)}
                    className="p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors text-sm text-left"
                  >
                    "{question}"
                  </button>
                ))}
              </div>

              {/* Voice Input */}
              <div className="flex items-center gap-4">
                <SafeButton
                  onClick={handleVoiceCommand}
                  variant={isListening ? "danger" : "premium"}
                  className="flex-1"
                >
                  {isListening ? (
                    <>
                      <Mic className="w-5 h-5 animate-pulse" />
                      <span>Listening... Speak now</span>
                    </>
                  ) : (
                    <>
                      <Mic className="w-5 h-5" />
                      <span>Voice Command</span>
                    </>
                  )}
                </SafeButton>
                <button className="p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* AI Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {aiFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-xl bg-gradient-to-br ${feature.color}/20 border ${feature.color.replace('from-', 'border-').split(' ')[0]}/30 cursor-pointer hover:scale-105 transition-transform`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.color}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: AI Stats & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* AI Stats */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Server className="w-5 h-5 text-blue-400" />
                AI Statistics
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Neural Networks', value: '256 layers', color: 'text-purple-400' },
                  { label: 'Processing Speed', value: '15.8 TFLOPS', color: 'text-blue-400' },
                  { label: 'Accuracy Rate', value: '99.7%', color: 'text-green-400' },
                  { label: 'Response Time', value: '<50ms', color: 'text-yellow-400' },
                  { label: 'Data Processed', value: '2.4PB/day', color: 'text-cyan-400' },
                  { label: 'Active Models', value: '42', color: 'text-pink-400' },
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-400">{stat.label}</span>
                    <span className={`font-bold ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Capabilities */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Active Capabilities
              </h3>
              <div className="space-y-3">
                {aiCapabilities.map((capability, index) => {
                  const Icon = capability.icon
                  return (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-gray-400" />
                        <span className="text-white">{capability.text}</span>
                      </div>
                      <span className="px-2 py-1 text-xs rounded bg-green-500/20 text-green-400">
                        {capability.status}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Current AI Focus */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Current Focus</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600">
                  {(() => {
                    const Icon = aiFeatures[activeFeature].icon
                    return <Icon className="w-6 h-6 text-white" />
                  })()}
                </div>
                <div>
                  <div className="text-white font-bold">{aiFeatures[activeFeature].title}</div>
                  <div className="text-sm text-gray-300">{aiFeatures[activeFeature].description}</div>
                </div>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-3/4" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* AI Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              AI Performance Metrics
            </h2>
            <div className="text-sm text-gray-400">Real-time</div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Route Accuracy', value: '98.5%', change: '+2.3%', color: 'text-green-400' },
              { label: 'Hazard Detection', value: '99.1%', change: '+1.7%', color: 'text-blue-400' },
              { label: 'Time Savings', value: '32%', change: '+5.2%', color: 'text-yellow-400' },
              { label: 'User Satisfaction', value: '4.8/5', change: '+0.3', color: 'text-purple-400' },
            ].map((metric, index) => (
              <div key={index} className="p-4 rounded-xl bg-gray-800/30">
                <div className="text-sm text-gray-400 mb-1">{metric.label}</div>
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className={`text-sm ${metric.color}`}>{metric.change} improvement</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PremiumLayout>
  )
}
