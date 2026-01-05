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
  AlertTriangle
} from 'lucide-react'
import { useState } from 'react'

export default function Dashboard() {
  const [activeMode, setActiveMode] = useState('drive')
  const [notificationCount] = useState(3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-darkblue to-primary-black">
      {/* Header */}
      <header className="bg-white/5 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-4 border-primary-gold border-t-primary-orange animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-blue to-primary-purple flex items-center justify-center">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent">
                  NjiaSafe Dashboard
                </h1>
                <p className="text-sm text-gray-400">Smart Navigation for Africa</p>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-4">
              <button className="relative p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10">
                <Bell className="w-5 h-5" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </button>
              
              <button className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10">
                <Settings className="w-5 h-5" />
              </button>
              
              <button className="p-2.5 rounded-xl bg-gradient-to-r from-primary-orange to-primary-gold">
                <User className="w-5 h-5 text-primary-darkblue" />
              </button>
              
              <button className="p-2.5 rounded-xl bg-white/10 hover:bg-red-500/20 border border-white/10">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Welcome Card */}
            <div className="card-glass p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Welcome back, <span className="bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent">John</span>!
                  </h2>
                  <p className="text-gray-400">
                    Your safety score is 98% - Keep up the good driving! 🚗
                  </p>
                </div>
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-gold to-primary-orange text-primary-darkblue font-semibold">
                  PREMIUM
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Today's Distance</span>
                    <MapPin className="w-4 h-4 text-primary-orange" />
                  </div>
                  <div className="text-2xl font-bold">42.5 km</div>
                  <div className="text-xs text-green-400">+12% from yesterday</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Safety Score</span>
                    <Shield className="w-4 h-4 text-primary-purple" />
                  </div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs text-green-400">Excellent</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Alerts Today</span>
                    <Bell className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-xs text-green-400">-3% from avg</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">V2V Connected</span>
                    <Users className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold">42</div>
                  <div className="text-xs text-green-400">Vehicles nearby</div>
                </div>
              </div>
            </div>

            {/* Navigation Mode */}
            <div className="card-glass p-6">
              <h3 className="text-lg font-semibold mb-4">Navigation Mode</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'drive', label: 'Drive', icon: Car, color: 'from-blue-500 to-purple-500' },
                  { id: 'cycle', label: 'Cycle', icon: Bike, color: 'from-green-500 to-emerald-500' },
                  { id: 'pedestrian', label: 'Walk', icon: PedestrianIcon, color: 'from-orange-500 to-red-500' },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setActiveMode(mode.id)}
                    className={`p-4 rounded-xl flex flex-col items-center justify-center ${
                      activeMode === mode.id
                        ? `bg-gradient-to-br ${mode.color} text-white`
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <mode.icon className="w-8 h-8 mb-2" />
                    <span className="font-medium">{mode.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* SOS Button */}
            <div className="card-glass p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                Emergency SOS
              </h3>
              <div className="flex justify-center">
                <button className="relative w-48 h-48 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-red-500/30">
                  <div className="flex flex-col items-center">
                    <AlertTriangle className="w-16 h-16 mb-4" />
                    <span className="text-2xl font-bold">SOS</span>
                    <span className="text-sm mt-2">Emergency Alert</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* User Profile */}
            <div className="card-glass p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-blue to-primary-purple flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">John Doe</h3>
                  <p className="text-sm text-gray-400">Premium User</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-green-400">Online</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Subscription</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-primary-gold to-primary-orange rounded-full text-xs font-semibold">
                    PREMIUM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Mode</span>
                  <span className="flex items-center gap-2">
                    <Car className="w-4 h-4" />
                    <span>Drive</span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Language</span>
                  <span>English</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card-glass p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex flex-col items-center justify-center">
                  <Navigation className="w-6 h-6 mb-2 text-primary-orange" />
                  <span className="text-sm">Find Route</span>
                </button>
                <button className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex flex-col items-center justify-center">
                  <BarChart3 className="w-6 h-6 mb-2 text-primary-purple" />
                  <span className="text-sm">Analytics</span>
                </button>
                <button className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex flex-col items-center justify-center">
                  <Users className="w-6 h-6 mb-2 text-primary-blue" />
                  <span className="text-sm">Community</span>
                </button>
                <button className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex flex-col items-center justify-center">
                  <Settings className="w-6 h-6 mb-2 text-primary-gold" />
                  <span className="text-sm">Settings</span>
                </button>
              </div>
            </div>

            {/* Government Monitoring */}
            <div className="card-glass p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary-gold" />
                <h3 className="text-lg font-semibold">Government Monitoring</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Real-time data collection for road safety improvements
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Speed Violations</span>
                  <span className="text-primary-orange">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Accidents Reported</span>
                  <span className="text-primary-orange">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Traffic Jams</span>
                  <span className="text-primary-orange">12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
