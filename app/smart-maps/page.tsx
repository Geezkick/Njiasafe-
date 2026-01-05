'use client'

import { motion } from 'framer-motion'
import PremiumLayout from '@/components/layout/PremiumLayout'
import SafeButton from '@/components/ui/SafeButton'
import { 
  Map, Navigation, Layers, Filter, Download, Share2,
  TrafficCone, AlertTriangle, CloudRain, Construction,
  Eye, EyeOff, ZoomIn, ZoomOut, Compass, Target,
  Globe, Satellite, Wifi, Radio, Bell, Settings
} from 'lucide-react'
import { useState } from 'react'

export default function SmartMapsPage() {
  const [activeLayer, setActiveLayer] = useState('traffic')
  const [zoomLevel, setZoomLevel] = useState(15)
  const [showTraffic, setShowTraffic] = useState(true)
  const [showIncidents, setShowIncidents] = useState(true)

  const mapLayers = [
    {
      id: 'traffic',
      name: 'Live Traffic',
      icon: TrafficCone,
      color: 'from-orange-500 to-red-500',
      description: 'Real-time traffic flow and congestion'
    },
    {
      id: 'incidents',
      name: 'Incidents',
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-500',
      description: 'Accidents, breakdowns, road closures'
    },
    {
      id: 'weather',
      name: 'Weather',
      icon: CloudRain,
      color: 'from-blue-500 to-cyan-500',
      description: 'Live weather conditions and alerts'
    },
    {
      id: 'construction',
      name: 'Construction',
      icon: Construction,
      color: 'from-yellow-500 to-orange-500',
      description: 'Road works and construction zones'
    },
    {
      id: 'satellite',
      name: 'Satellite',
      icon: Satellite,
      color: 'from-purple-500 to-pink-500',
      description: 'High-resolution satellite imagery'
    },
    {
      id: 'terrain',
      name: 'Terrain',
      icon: Layers,
      color: 'from-green-500 to-emerald-500',
      description: 'Topography and elevation data'
    }
  ]

  const liveIncidents = [
    {
      id: 1,
      type: 'accident',
      location: 'Mombasa Road near ABC Place',
      severity: 'high',
      duration: '45 min',
      distance: '3.2 km',
      lanes: '2 lanes blocked'
    },
    {
      id: 2,
      type: 'construction',
      location: 'Thika Road, Kasarani section',
      severity: 'medium',
      duration: '2 hours',
      distance: '8.7 km',
      lanes: '1 lane closed'
    },
    {
      id: 3,
      type: 'breakdown',
      location: 'Waiyaki Way, Westlands',
      severity: 'low',
      duration: '20 min',
      distance: '1.5 km',
      lanes: 'Shoulder only'
    },
    {
      id: 4,
      type: 'flooding',
      location: 'Ngong Road, Adams Arcade',
      severity: 'high',
      duration: '1.5 hours',
      distance: '5.3 km',
      lanes: 'Road impassable'
    }
  ]

  const trafficConditions = [
    { road: 'Mombasa Road', condition: 'Heavy', delay: '25 min', color: 'bg-red-500' },
    { road: 'Thika Highway', condition: 'Moderate', delay: '12 min', color: 'bg-orange-500' },
    { road: 'Waiyaki Way', condition: 'Light', delay: '5 min', color: 'bg-yellow-500' },
    { road: 'Langata Road', condition: 'Clear', delay: '0 min', color: 'bg-green-500' },
    { road: 'Ngong Road', condition: 'Heavy', delay: '18 min', color: 'bg-red-500' },
    { road: 'Jogoo Road', condition: 'Moderate', delay: '10 min', color: 'bg-orange-500' },
  ]

  const mapStats = [
    { label: 'Coverage', value: '25+ Cities', icon: Globe, color: 'text-blue-400' },
    { label: 'Update Frequency', value: 'Real-time', icon: Wifi, color: 'text-green-400' },
    { label: 'Accuracy', value: '99.2%', icon: Target, color: 'text-purple-400' },
    { label: 'Response Time', value: '<2s', icon: Radio, color: 'text-yellow-400' },
  ]

  const handleZoomIn = () => {
    if (zoomLevel < 20) setZoomLevel(prev => prev + 1)
  }

  const handleZoomOut = () => {
    if (zoomLevel > 1) setZoomLevel(prev => prev - 1)
  }

  return (
    <PremiumLayout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 backdrop-blur-xl border border-blue-500/30 rounded-2xl shadow-lg overflow-hidden p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600">
                <Map className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  Smart <span className="text-gradient-premium">Maps</span>
                </h1>
                <p className="text-gray-300">
                  Real-time interactive maps with live traffic, incidents, and weather data
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-sm text-gray-400">Live Updates</div>
                <div className="text-lg font-bold text-green-400">Active</div>
              </div>
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-sm text-gray-400">Zoom Level</div>
                <div className="text-lg font-bold text-white">{zoomLevel}x</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mapStats.map((stat, index) => {
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
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div className="text-xl sm:text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Map Controls & Layers */}
          <div className="space-y-6">
            {/* Map Controls */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
            >
              <h3 className="text-lg font-bold text-white mb-4">Map Controls</h3>
              
              <div className="space-y-4">
                {/* Zoom Controls */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">Zoom Level</div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleZoomOut}
                      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
                      disabled={zoomLevel <= 1}
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="w-16 text-center font-bold">{zoomLevel}x</span>
                    <button
                      onClick={handleZoomIn}
                      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
                      disabled={zoomLevel >= 20}
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Toggle Controls */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrafficCone className="w-4 h-4 text-orange-400" />
                      <span className="text-white">Traffic Overlay</span>
                    </div>
                    <button
                      onClick={() => setShowTraffic(!showTraffic)}
                      className={`p-1 rounded-full w-12 transition-all ${showTraffic ? 'bg-green-500' : 'bg-gray-700'}`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${showTraffic ? 'translate-x-6' : 'translate-x-0'}`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      <span className="text-white">Incidents</span>
                    </div>
                    <button
                      onClick={() => setShowIncidents(!showIncidents)}
                      className={`p-1 rounded-full w-12 transition-all ${showIncidents ? 'bg-green-500' : 'bg-gray-700'}`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${showIncidents ? 'translate-x-6' : 'translate-x-0'}`} />
                    </button>
                  </div>
                </div>

                {/* Compass */}
                <div className="pt-4 border-t border-gray-700/50">
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto">
                      <div className="absolute inset-0 rounded-full border-2 border-blue-500/30" />
                      <div className="absolute inset-4 rounded-full border-2 border-blue-500/20" />
                      <Compass className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-400" />
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs text-blue-400">N</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Traffic Conditions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
            >
              <h3 className="text-lg font-bold text-white mb-4">Traffic Conditions</h3>
              <div className="space-y-3">
                {trafficConditions.map((road, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30">
                    <div>
                      <div className="font-medium text-white">{road.road}</div>
                      <div className="text-sm text-gray-400">{road.delay} delay</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${road.color}`} />
                      <span className="text-white">{road.condition}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Center: Map Visualization & Layers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Map Layers */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Map Layers</h2>
                <div className="text-sm text-gray-400">Toggle layers for detailed view</div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {mapLayers.map((layer, index) => {
                  const Icon = layer.icon
                  const isActive = activeLayer === layer.id
                  return (
                    <button
                      key={layer.id}
                      onClick={() => setActiveLayer(layer.id)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        isActive
                          ? `bg-gradient-to-br ${layer.color} text-white shadow-lg`
                          : 'bg-gray-800/50 hover:bg-gray-700/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-6 h-6" />
                        <h3 className="font-bold">{layer.name}</h3>
                      </div>
                      <p className="text-sm opacity-80">{layer.description}</p>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Live Incidents */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  Live Incidents & Alerts
                </h2>
                <Bell className="w-5 h-5 text-yellow-400 animate-pulse" />
              </div>

              <div className="space-y-4">
                {liveIncidents.map((incident, index) => (
                  <motion.div
                    key={incident.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl border border-gray-700/50 hover:border-red-500/30 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className={`px-2 py-1 rounded text-xs font-bold ${
                            incident.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                            incident.severity === 'medium' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {incident.type.toUpperCase()}
                          </div>
                          <div className="text-sm text-gray-400">{incident.distance} away</div>
                        </div>
                        <div className="text-white font-medium">{incident.location}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">{incident.duration}</div>
                        <div className="text-sm text-gray-400">Duration</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-gray-400">{incident.lanes}</div>
                      <button className="text-blue-400 hover:text-blue-300">
                        View on map →
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map Actions */}
            <div className="grid grid-cols-3 gap-4">
              <SafeButton
                variant="secondary"
                className="flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Navigate</span>
              </SafeButton>
              <SafeButton
                variant="secondary"
                className="flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </SafeButton>
              <SafeButton
                variant="secondary"
                className="flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Save</span>
              </SafeButton>
            </div>
          </motion.div>
        </div>

        {/* Weather & Environmental Data */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl p-6 border border-blue-500/30"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Weather & Environmental Data</h2>
            <CloudRain className="w-6 h-6 text-blue-400" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Temperature', value: '24°C', condition: 'Clear', icon: '☀️' },
              { label: 'Humidity', value: '65%', condition: 'Comfortable', icon: '💧' },
              { label: 'Wind Speed', value: '12 km/h', condition: 'Light breeze', icon: '🌬️' },
              { label: 'Air Quality', value: 'Good', condition: 'AQI 42', icon: '🌫️' },
            ].map((weather, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{weather.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{weather.value}</div>
                <div className="text-sm text-gray-300">{weather.label}</div>
                <div className="text-xs text-gray-400">{weather.condition}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PremiumLayout>
  )
}
