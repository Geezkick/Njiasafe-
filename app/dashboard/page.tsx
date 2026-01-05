'use client'

import { motion } from 'framer-motion'
import { 
  Navigation, 
  Shield, 
  Zap, 
  Users, 
  Bell, 
  Settings, 
  User, 
  LogOut,
  Car,
  Bike,
  User as PedestrianIcon,
  BarChart3,
  MapPin,
  AlertTriangle,
  Heart,
  Clock,
  Crown,
  TrendingUp
} from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PremiumLayout from '@/components/layout/PremiumLayout'
import SafeButton from '@/components/ui/SafeButton'

export default function Dashboard() {
  const [activeMode, setActiveMode] = useState('drive')
  const [notificationCount] = useState(3)
  const router = useRouter()

  const quickStats = [
    { icon: MapPin, label: 'Distance Today', value: '42.5 km', change: '+12%', color: 'text-blue-400' },
    { icon: Clock, label: 'Time Saved', value: '1.5 hrs', change: 'Smart routing', color: 'text-green-400' },
    { icon: Heart, label: 'Safety Score', value: '98%', change: 'Excellent', color: 'text-purple-400' },
    { icon: Users, label: 'V2V Connected', value: '42', change: 'Vehicles nearby', color: 'text-orange-400' },
  ]

  const quickActions = [
    { icon: Navigation, label: 'Find Route', action: () => console.log('Find Route') },
    { icon: BarChart3, label: 'Analytics', action: () => router.push('/analytics') },
    { icon: Users, label: 'Community', action: () => router.push('/community') },
    { icon: Settings, label: 'Settings', action: () => router.push('/profile') },
  ]

  const handleLogout = () => {
    console.log('Logout clicked')
    // Add actual logout logic here
  }

  const handleUpgrade = () => {
    console.log('Upgrade clicked')
    router.push('/subscription')
  }

  const handleProfile = () => {
    console.log('Profile clicked')
    router.push('/profile')
  }

  const handleSOS = () => {
    console.log('SOS Emergency clicked!')
    alert('SOS Emergency Alert Activated! Authorities notified.')
  }

  const handleServiceAlert = (service: string) => {
    console.log(`${service} alerted`)
    alert(`${service} has been notified of your emergency.`)
  }

  return (
    <PremiumLayout showHeader={true} showFooter={false}>
      <div className="space-y-8">
        {/* Welcome Header with Upgrade Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-purple backdrop-blur-xl border border-primary-gold/30 rounded-2xl shadow-lg overflow-hidden p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, <span className="text-gradient-premium">Brian</span>! 👋
              </h1>
              <p className="text-gray-300">
                Your safety score is <span className="text-green-400 font-bold">98%</span> - Excellent driving!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <SafeButton
                onClick={handleProfile}
                variant="secondary"
                className="flex items-center justify-center gap-2 px-6 py-3"
              >
                <User className="w-5 h-5" />
                <span>View Profile</span>
              </SafeButton>
              <SafeButton
                onClick={handleUpgrade}
                variant="premium"
                className="flex items-center justify-center gap-2 px-6 py-3"
              >
                <Crown className="w-5 h-5" />
                <span>Premium</span>
              </SafeButton>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:border-primary-gold/50 p-4 sm:p-6"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
                <span className="text-xs sm:text-sm text-gray-400">{stat.change}</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Navigation & SOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Navigation Modes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-purple backdrop-blur-xl border border-primary-gold/30 rounded-2xl shadow-lg overflow-hidden p-4 sm:p-6"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-primary-orange" />
              Navigation Mode
            </h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { id: 'drive', label: 'Drive', icon: Car, color: 'from-blue-500 to-purple-500' },
                { id: 'cycle', label: 'Cycle', icon: Bike, color: 'from-green-500 to-emerald-500' },
                { id: 'pedestrian', label: 'Walk', icon: PedestrianIcon, color: 'from-orange-500 to-red-500' },
              ].map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => {
                    console.log(`Navigation mode changed to: ${mode.id}`)
                    setActiveMode(mode.id)
                  }}
                  className={`p-3 sm:p-6 rounded-xl flex flex-col items-center justify-center transition-all ${
                    activeMode === mode.id
                      ? `bg-gradient-to-br ${mode.color} text-white shadow-lg`
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <mode.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3" />
                  <span className="text-xs sm:text-sm font-semibold">{mode.label}</span>
                </button>
              ))}
            </div>
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
              <div className="flex justify-between text-xs sm:text-sm mb-2">
                <span className="text-gray-400">Current Route</span>
                <span className="font-semibold">Nairobi to Mombasa</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary-orange to-primary-gold rounded-full" style={{ width: '65%' }} />
              </div>
              <div className="flex justify-between text-xs sm:text-sm mt-2">
                <span>483 km</span>
                <span className="text-green-400">6h 30m (94% safe)</span>
              </div>
            </div>
          </motion.div>

          {/* SOS Emergency */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-purple backdrop-blur-xl border border-primary-gold/30 rounded-2xl shadow-lg overflow-hidden p-4 sm:p-6"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              Emergency SOS
            </h3>
            <div className="flex flex-col items-center">
              <button 
                onClick={handleSOS}
                className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-red-600 to-red-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex flex-col items-center justify-center mb-6 sm:mb-8"
              >
                <AlertTriangle className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4" />
                <span className="text-xl sm:text-2xl font-bold">SOS</span>
                <span className="text-xs sm:text-sm">Emergency Alert</span>
              </button>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full">
                {[
                  { label: 'Police', color: 'bg-blue-500/20', icon: '👮' },
                  { label: 'Ambulance', color: 'bg-red-500/20', icon: '🚑' },
                  { label: 'Fire Service', color: 'bg-orange-500/20', icon: '🚒' },
                  { label: 'Road Rescue', color: 'bg-yellow-500/20', icon: '��️' },
                ].map((service) => (
                  <button
                    key={service.label}
                    onClick={() => handleServiceAlert(service.label)}
                    className={`p-3 sm:p-4 rounded-xl ${service.color} hover:opacity-80 transition-opacity`}
                  >
                    <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{service.icon}</div>
                    <div className="text-xs sm:text-sm">{service.label}</div>
                  </button>
                ))}
              </div>
              
              <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6 text-center">
                Press in case of emergency to notify nearby services
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:border-primary-gold/50 p-4 sm:p-6"
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            {quickActions.map((action) => (
              <button
                key={action.label}
                onClick={action.action}
                className="p-4 sm:p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex flex-col items-center justify-center"
              >
                <action.icon className={`w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 text-primary-orange`} />
                <span className="text-xs sm:text-sm font-medium">{action.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Subscription Upgrade Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-purple rounded-2xl p-6 sm:p-8 border border-primary-gold/30"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
                <Crown className="w-6 h-6 text-primary-gold" />
                Enjoying Premium?
              </h3>
              <p className="text-gray-300 mb-4">
                Upgrade to access all premium features including AI routing, government data, and priority support.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <TrendingUp className="w-4 h-4" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
            <SafeButton
              onClick={handleUpgrade}
              variant="premium"
              className="px-6 sm:px-8 py-3 sm:py-4"
            >
              Upgrade Now
            </SafeButton>
          </div>
        </motion.div>

        {/* Debug Section */}
        <div className="p-6 border border-dashed border-yellow-500/50 rounded-2xl bg-yellow-500/10">
          <h3 className="text-lg font-semibold mb-4 text-yellow-500">Debug Info</h3>
          <div className="space-y-2">
            <p className="text-sm">Active Navigation Mode: <span className="font-bold">{activeMode}</span></p>
            <p className="text-sm">Open Browser Console (F12) to see button click logs</p>
            <div className="flex gap-2">
              <button 
                onClick={() => console.log('Debug button 1 clicked')}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm"
              >
                Test Button 1
              </button>
              <button 
                onClick={() => console.log('Debug button 2 clicked')}
                className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm"
              >
                Test Button 2
              </button>
            </div>
          </div>
        </div>
      </div>
    </PremiumLayout>
  )
}
