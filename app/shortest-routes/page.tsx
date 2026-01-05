'use client'

import { motion } from 'framer-motion'
import PremiumLayout from '@/components/layout/PremiumLayout'
import SafeButton from '@/components/ui/SafeButton'
import { 
  Navigation, Clock, Zap, TrendingUp, BarChart, Filter,
  MapPin, DollarSign, Leaf, Battery, Car, Bike,
  User as PedestrianIcon, Route, Target, CheckCircle,
  RefreshCw, Share2, Download, Star
} from 'lucide-react'
import { useState } from 'react'

export default function ShortestRoutesPage() {
  const [selectedRoute, setSelectedRoute] = useState(0)
  const [optimizeFor, setOptimizeFor] = useState('time')

  const optimizedRoutes = [
    {
      id: 1,
      from: 'Nairobi CBD',
      to: 'JKIA Airport',
      distance: '18.5 km',
      time: '35 min',
      savedTime: '12 min',
      fuelCost: 'KES 450',
      fuelSaved: 'KES 120',
      co2Saved: '2.4 kg',
      traffic: 'Moderate',
      turns: 8,
      trafficLights: 12,
      features: ['Expressway', 'Toll Road', 'Minimal Traffic'],
      drawbacks: ['Toll fee: KES 200']
    },
    {
      id: 2,
      from: 'Westlands',
      to: 'Thika',
      distance: '32.7 km',
      time: '48 min',
      savedTime: '18 min',
      fuelCost: 'KES 780',
      fuelSaved: 'KES 190',
      co2Saved: '3.8 kg',
      traffic: 'Heavy',
      turns: 14,
      trafficLights: 18,
      features: ['Thika Superhighway', 'Multiple Lanes'],
      drawbacks: ['Heavy traffic in sections']
    },
    {
      id: 3,
      from: 'Karen',
      to: 'Eastleigh',
      distance: '22.3 km',
      time: '42 min',
      savedTime: '15 min',
      fuelCost: 'KES 530',
      fuelSaved: 'KES 150',
      co2Saved: '3.0 kg',
      traffic: 'Moderate',
      turns: 11,
      trafficLights: 15,
      features: ['Scenic Route', 'Less Congestion'],
      drawbacks: ['Longer distance but faster']
    },
    {
      id: 4,
      from: 'Kasarani',
      to: 'Langata',
      distance: '28.9 km',
      time: '55 min',
      savedTime: '8 min',
      fuelCost: 'KES 690',
      fuelSaved: 'KES 80',
      co2Saved: '1.6 kg',
      traffic: 'Heavy',
      turns: 16,
      trafficLights: 22,
      features: ['Direct Route', 'Major Highways'],
      drawbacks: ['Peak hour congestion']
    }
  ]

  const optimizationOptions = [
    { id: 'time', label: 'Fastest Time', icon: Clock, color: 'from-blue-500 to-cyan-500' },
    { id: 'distance', label: 'Shortest Distance', icon: Route, color: 'from-green-500 to-emerald-500' },
    { id: 'cost', label: 'Lowest Cost', icon: DollarSign, color: 'from-yellow-500 to-orange-500' },
    { id: 'eco', label: 'Most Eco-Friendly', icon: Leaf, color: 'from-teal-500 to-green-500' },
  ]

  const efficiencyStats = [
    { label: 'Average Time Saved', value: '15.2 min', change: '+12%', icon: Clock, color: 'text-blue-400' },
    { label: 'Fuel Efficiency', value: '18% better', change: '+5%', icon: Zap, color: 'text-green-400' },
    { label: 'CO2 Reduction', value: '2.8 kg/trip', change: '+8%', icon: Leaf, color: 'text-teal-400' },
    { label: 'User Satisfaction', value: '4.7/5', change: '+0.4', icon: Star, color: 'text-yellow-400' },
  ]

  const compareWith = {
    standard: { time: '47 min', distance: '20.1 km', cost: 'KES 570' },
    optimized: { time: '35 min', distance: '18.5 km', cost: 'KES 450' },
    savings: { time: '12 min', distance: '1.6 km', cost: 'KES 120' }
  }

  const handleOptimize = () => {
    alert(`Recalculating routes optimized for ${optimizeFor}...`)
  }

  const handleNavigate = (route: any) => {
    alert(`Starting navigation via optimized route to ${route.to}...`)
  }

  return (
    <PremiumLayout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-900 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-lg overflow-hidden p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600">
                <Navigation className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  Short<span className="text-gradient-premium">Routes</span>
                </h1>
                <p className="text-gray-300">
                  AI-optimized shortest and fastest routes with real-time traffic intelligence
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-sm text-gray-400">Avg Time Saved</div>
                <div className="text-lg font-bold text-green-400">15.2 min</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Optimization Options */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Optimize For</h3>
            <SafeButton
              onClick={handleOptimize}
              variant="secondary"
              className="flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Recalculate
            </SafeButton>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {optimizationOptions.map((option) => {
              const Icon = option.icon
              const isActive = optimizeFor === option.id
              return (
                <button
                  key={option.id}
                  onClick={() => setOptimizeFor(option.id)}
                  className={`p-4 rounded-xl flex flex-col items-center justify-center transition-all ${
                    isActive
                      ? `bg-gradient-to-br ${option.color} text-white shadow-lg`
                      : 'bg-gray-800/50 hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className="w-6 h-6 mb-2" />
                  <span className="text-sm font-semibold">{option.label}</span>
                  {isActive && (
                    <div className="mt-2 w-3 h-3 rounded-full bg-white animate-pulse" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Efficiency Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {efficiencyStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 hover:border-primary-gold/50 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
                  <div className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400">
                    {stat.change}
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Comparison & Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Route Comparison */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Optimization Results</h3>
              <div className="space-y-4">
                {Object.entries(compareWith).map(([key, values]) => (
                  <div key={key} className={`p-4 rounded-xl ${
                    key === 'optimized' ? 'bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30' :
                    key === 'savings' ? 'bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30' :
                    'bg-gray-800/30'
                  }`}>
                    <div className="text-sm font-bold text-white mb-3 capitalize">
                      {key === 'standard' ? 'Standard Route' :
                       key === 'optimized' ? 'Optimized Route' :
                       'Total Savings'}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">{values.time}</div>
                        <div className="text-xs text-gray-400">Time</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">{values.distance}</div>
                        <div className="text-xs text-gray-400">Distance</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">{values.cost}</div>
                        <div className="text-xs text-gray-400">Cost</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="bg-gradient-to-br from-teal-900/30 to-green-900/30 rounded-2xl p-6 border border-teal-500/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-teal-400" />
                Environmental Impact
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'CO2 Saved Per Trip', value: '2.8 kg', equivalent: '= 12 trees' },
                  { label: 'Monthly Fuel Savings', value: 'KES 3,600', equivalent: '= 84 kg CO2' },
                  { label: 'Annual Impact', value: '1.2 tons CO2', equivalent: '= 50 trees planted' },
                ].map((impact, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-300">{impact.label}</div>
                      <div className="text-xs text-gray-500">{impact.equivalent}</div>
                    </div>
                    <div className="text-lg font-bold text-white">{impact.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center: Optimized Routes List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Optimized Route Options</h2>
                <div className="text-sm text-gray-400">Sorted by {optimizeFor === 'time' ? 'time saved' : optimizeFor}</div>
              </div>

              <div className="space-y-4">
                {optimizedRoutes.map((route, index) => (
                  <motion.div
                    key={route.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-xl border cursor-pointer transition-all hover:scale-[1.01] ${
                      selectedRoute === index
                        ? 'bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border-cyan-500/50'
                        : 'bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/30'
                    }`}
                    onClick={() => setSelectedRoute(index)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">
                            {route.from} → {route.to}
                          </h3>
                          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                            <Zap className="w-4 h-4" />
                            <span className="text-sm font-bold">Save {route.savedTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <Route className="w-4 h-4" />
                            <span>{route.distance}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{route.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            <span>{route.fuelCost}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white mb-1">{route.savedTime}</div>
                        <div className="text-sm text-gray-400">Time Saved</div>
                      </div>
                    </div>

                    {/* Savings Breakdown */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {[
                        { label: 'Fuel Saved', value: route.fuelSaved, icon: Zap, color: 'text-green-400' },
                        { label: 'CO2 Saved', value: route.co2Saved, icon: Leaf, color: 'text-teal-400' },
                        { label: 'Traffic', value: route.traffic, icon: Car, color: 'text-blue-400' },
                      ].map((saving, idx) => {
                        const Icon = saving.icon
                        return (
                          <div key={idx} className="p-3 rounded-lg bg-gray-900/50">
                            <div className="flex items-center gap-2 mb-1">
                              <Icon className={`w-4 h-4 ${saving.color}`} />
                              <span className="text-sm text-gray-400">{saving.label}</span>
                            </div>
                            <div className={`text-sm font-medium ${saving.color}`}>
                              {saving.value}
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Route Details */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-sm text-gray-400 mb-2">Route Features:</div>
                        <div className="flex flex-wrap gap-2">
                          {route.features.map((feature, idx) => (
                            <span key={idx} className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400 mb-2">Considerations:</div>
                        <div className="text-sm text-yellow-400">{route.drawbacks[0]}</div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <SafeButton
                        onClick={() => handleNavigate(route)}
                        variant="premium"
                        className="flex-1"
                      >
                        <Navigation className="w-4 h-4" />
                        Navigate This Route
                      </SafeButton>
                      <button className="p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Optimization Tips */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  title: 'Peak Hours', 
                  tip: 'Avoid 7-9 AM & 5-7 PM', 
                  icon: Clock,
                  color: 'from-orange-500 to-red-500'
                },
                { 
                  title: 'Fuel Saving', 
                  tip: 'Maintain 60-80 km/h', 
                  icon: Zap,
                  color: 'from-green-500 to-emerald-500'
                },
                { 
                  title: 'Route Planning', 
                  tip: 'Combine multiple stops', 
                  icon: Route,
                  color: 'from-blue-500 to-cyan-500'
                },
                { 
                  title: 'Real-time Updates', 
                  tip: 'Enable live traffic', 
                  icon: TrendingUp,
                  color: 'from-purple-500 to-pink-500'
                },
              ].map((tip, index) => {
                const Icon = tip.icon
                return (
                  <div
                    key={index}
                    className={`p-4 rounded-xl bg-gradient-to-br ${tip.color}/20 border ${tip.color.replace('from-', 'border-').split(' ')[0]}/30`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${tip.color}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-white">{tip.title}</h4>
                    </div>
                    <p className="text-sm text-gray-300">{tip.tip}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Historical Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Optimization Performance</h2>
            <BarChart className="w-6 h-6 text-blue-400" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { period: 'Today', timeSaved: '42 min', trips: 8, efficiency: '18%' },
              { period: 'This Week', timeSaved: '4h 12min', trips: 32, efficiency: '22%' },
              { period: 'This Month', timeSaved: '18h 30min', trips: 124, efficiency: '25%' },
              { period: 'All Time', timeSaved: '92h 15min', trips: 586, efficiency: '28%' },
            ].map((stats, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-gray-800/30">
                <div className="text-lg font-bold text-white mb-2">{stats.period}</div>
                <div className="text-2xl font-bold text-cyan-400 mb-1">{stats.timeSaved}</div>
                <div className="text-sm text-gray-400">Time Saved</div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div>
                    <div className="text-lg font-bold text-white">{stats.trips}</div>
                    <div className="text-xs text-gray-400">Trips</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-400">{stats.efficiency}</div>
                    <div className="text-xs text-gray-400">Efficiency</div>
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
