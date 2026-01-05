'use client'

import { motion } from 'framer-motion'
import PremiumLayout from '@/components/layout/PremiumLayout'
import SafeButton from '@/components/ui/SafeButton'
import { 
  Shield, Navigation, MapPin, Clock, Users, AlertTriangle,
  BarChart, TrendingUp, Target, CheckCircle, XCircle,
  Bell, Eye, Lock, Heart, Star, Filter,
  Car, Bike, User as PedestrianIcon, Zap
} from 'lucide-react'
import { useState } from 'react'

export default function SaferRoutesPage() {
  const [selectedRoute, setSelectedRoute] = useState(0)
  const [transportMode, setTransportMode] = useState('drive')

  const safeRoutes = [
    {
      id: 1,
      from: 'Nairobi CBD',
      to: 'JKIA Airport',
      distance: '18.5 km',
      time: '35 min',
      safetyScore: 98,
      crimeRisk: 'Low',
      accidentHistory: 'None (6 months)',
      roadCondition: 'Excellent',
      lighting: 'Good',
      traffic: 'Moderate',
      features: ['CCTV Coverage', 'Police Patrols', 'Emergency Phones', 'Well-lit'],
      alerts: []
    },
    {
      id: 2,
      from: 'Westlands',
      to: 'Kasarani',
      distance: '22.3 km',
      time: '45 min',
      safetyScore: 92,
      crimeRisk: 'Medium',
      accidentHistory: '2 minor (6 months)',
      roadCondition: 'Good',
      lighting: 'Moderate',
      traffic: 'Heavy',
      features: ['CCTV Coverage', 'Police Patrols', 'Speed Cameras'],
      alerts: ['Road construction in section']
    },
    {
      id: 3,
      from: 'Karen',
      to: 'Thika',
      distance: '35.7 km',
      time: '55 min',
      safetyScore: 95,
      crimeRisk: 'Low',
      accidentHistory: '1 minor (6 months)',
      roadCondition: 'Excellent',
      lighting: 'Good',
      traffic: 'Light',
      features: ['CCTV Coverage', 'Emergency Phones', 'Rest Stops', 'Well-lit'],
      alerts: []
    },
    {
      id: 4,
      from: 'Eastleigh',
      to: 'Langata',
      distance: '15.2 km',
      time: '30 min',
      safetyScore: 88,
      crimeRisk: 'High',
      accidentHistory: '3 incidents (6 months)',
      roadCondition: 'Fair',
      lighting: 'Poor',
      traffic: 'Moderate',
      features: ['Police Patrols', 'Speed Cameras'],
      alerts: ['High crime area - travel in daylight']
    }
  ]

  const safetyFactors = [
    { factor: 'Crime Rate', weight: 35, value: 92, color: 'from-red-500 to-orange-500' },
    { factor: 'Accident History', weight: 30, value: 95, color: 'from-yellow-500 to-orange-500' },
    { factor: 'Road Conditions', weight: 20, value: 88, color: 'from-blue-500 to-cyan-500' },
    { factor: 'Lighting & Visibility', weight: 15, value: 85, color: 'from-purple-500 to-pink-500' },
  ]

  const transportModes = [
    { id: 'drive', label: 'Drive', icon: Car, color: 'from-blue-500 to-purple-500' },
    { id: 'cycle', label: 'Cycle', icon: Bike, color: 'from-green-500 to-emerald-500' },
    { id: 'walk', label: 'Walk', icon: PedestrianIcon, color: 'from-orange-500 to-red-500' },
  ]

  const safetyTips = [
    "Avoid poorly lit areas at night",
    "Keep doors locked while driving",
    "Share your route with trusted contacts",
    "Use well-populated roads during off-hours",
    "Keep emergency numbers accessible",
    "Regular vehicle maintenance reduces breakdown risk"
  ]

  const handleNavigate = (route: any) => {
    alert(`Starting navigation via safest route to ${route.to}...`)
  }

  const handleShareRoute = (route: any) => {
    alert(`Sharing safe route to ${route.to} with emergency contacts...`)
  }

  return (
    <PremiumLayout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 backdrop-blur-xl border border-orange-500/30 rounded-2xl shadow-lg overflow-hidden p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-600">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  Safe<span className="text-gradient-premium">Routes</span>
                </h1>
                <p className="text-gray-300">
                  AI-powered safest route calculation with real-time crime and accident data
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-sm text-gray-400">Overall Safety Score</div>
                <div className="text-lg font-bold text-green-400">94%</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Transport Mode Selection */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
          <h3 className="text-lg font-bold text-white mb-4">Transport Mode</h3>
          <div className="grid grid-cols-3 gap-4">
            {transportModes.map((mode) => {
              const Icon = mode.icon
              const isActive = transportMode === mode.id
              return (
                <button
                  key={mode.id}
                  onClick={() => setTransportMode(mode.id)}
                  className={`p-6 rounded-xl flex flex-col items-center justify-center transition-all ${
                    isActive
                      ? `bg-gradient-to-br ${mode.color} text-white shadow-lg`
                      : 'bg-gray-800/50 hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className="w-8 h-8 mb-3" />
                  <span className="text-lg font-semibold">{mode.label}</span>
                  <span className="text-sm opacity-80 mt-1">
                    {isActive ? 'Selected' : 'Click to select'}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Safety Factors */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Safety Score Breakdown */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Safety Score Breakdown</h3>
              <div className="space-y-4">
                {safetyFactors.map((factor, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">{factor.factor}</span>
                      <span className="font-bold text-white">{factor.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${factor.color} rounded-full`}
                        style={{ width: `${factor.value}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Weight: {factor.weight}% of total score
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Tips */}
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-2xl p-6 border border-orange-500/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                Safety Tips
              </h3>
              <div className="space-y-3">
                {safetyTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center: Safe Routes List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Recommended Safe Routes</h2>
                <div className="text-sm text-gray-400">Sorted by safety score</div>
              </div>

              <div className="space-y-4">
                {safeRoutes.map((route, index) => (
                  <motion.div
                    key={route.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-xl border cursor-pointer transition-all hover:scale-[1.01] ${
                      selectedRoute === index
                        ? 'bg-gradient-to-r from-red-900/30 to-orange-900/30 border-orange-500/50'
                        : 'bg-gray-800/30 border-gray-700/50 hover:border-orange-500/30'
                    }`}
                    onClick={() => setSelectedRoute(index)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">
                            {route.from} → {route.to}
                          </h3>
                          <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                            route.safetyScore >= 95 ? 'bg-green-500/20 text-green-400' :
                            route.safetyScore >= 90 ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {route.safetyScore}% Safe
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{route.distance}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{route.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{route.traffic} traffic</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white mb-1">{route.safetyScore}%</div>
                        <div className="text-sm text-gray-400">Safety Score</div>
                      </div>
                    </div>

                    {/* Route Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      {[
                        { label: 'Crime Risk', value: route.crimeRisk, icon: Lock },
                        { label: 'Accidents', value: route.accidentHistory, icon: AlertTriangle },
                        { label: 'Road Condition', value: route.roadCondition, icon: Zap },
                        { label: 'Lighting', value: route.lighting, icon: Eye },
                      ].map((detail, idx) => {
                        const Icon = detail.icon
                        const isGood = ['Low', 'None', 'Excellent', 'Good'].includes(detail.value)
                        return (
                          <div key={idx} className="p-3 rounded-lg bg-gray-900/50">
                            <div className="flex items-center gap-2 mb-1">
                              <Icon className={`w-4 h-4 ${isGood ? 'text-green-400' : 'text-yellow-400'}`} />
                              <span className="text-sm text-gray-400">{detail.label}</span>
                            </div>
                            <div className={`text-sm font-medium ${isGood ? 'text-green-400' : 'text-yellow-400'}`}>
                              {detail.value}
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Features & Alerts */}
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm text-gray-400 mb-2">Safety Features:</div>
                        <div className="flex flex-wrap gap-2">
                          {route.features.map((feature, idx) => (
                            <span key={idx} className="px-3 py-1.5 rounded-lg bg-green-500/10 text-green-400 text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      {route.alerts.length > 0 && (
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-yellow-400">
                            <Bell className="w-4 h-4" />
                            <span className="text-sm">Alerts Active</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 mt-4">
                      <SafeButton
                        onClick={() => handleNavigate(route)}
                        variant="premium"
                        className="flex-1"
                      >
                        <Navigation className="w-4 h-4" />
                        Navigate This Route
                      </SafeButton>
                      <SafeButton
                        onClick={() => handleShareRoute(route)}
                        variant="secondary"
                      >
                        <Users className="w-4 h-4" />
                        Share
                      </SafeButton>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Safety Statistics */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Accidents Prevented', value: '1,240+', color: 'text-green-400', icon: CheckCircle },
                { label: 'High-risk Routes Avoided', value: '580+', color: 'text-blue-400', icon: Shield },
                { label: 'Users Protected', value: '50K+', color: 'text-purple-400', icon: Users },
                { label: 'Response Time', value: '<2s', color: 'text-yellow-400', icon: Zap },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Safety Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Route Safety Comparison</h2>
            <BarChart className="w-6 h-6 text-blue-400" />
          </div>
          
          <div className="space-y-4">
            {safeRoutes.map((route, index) => (
              <div key={route.id} className="flex items-center">
                <div className="w-32 text-sm text-gray-400">{route.from} → {route.to}</div>
                <div className="flex-1 mx-4">
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-green-500 rounded-full"
                      style={{ width: `${route.safetyScore}%` }}
                    />
                  </div>
                </div>
                <div className="w-16 text-right font-bold text-white">{route.safetyScore}%</div>
                <div className="w-20 text-right">
                  <div className={`text-sm ${
                    route.safetyScore >= 95 ? 'text-green-400' :
                    route.safetyScore >= 90 ? 'text-yellow-400' :
                    'text-red-400'
                  }`}>
                    {route.safetyScore >= 95 ? 'Very Safe' :
                     route.safetyScore >= 90 ? 'Safe' :
                     route.safetyScore >= 85 ? 'Moderate' : 'Risky'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PremiumLayout>
  )
}
