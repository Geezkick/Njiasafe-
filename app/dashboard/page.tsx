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
  TrendingUp,
  Brain,
  BatteryCharging,
  Map,
  Route,
  Layers,
  Cpu,
  MessageSquare,
  Filter,
  Star,
  Target,
  Eye,
  Lock,
  Leaf,
  DollarSign,
  TrendingDown,
  RefreshCw,
  Share2,
  Download,
  Radio,
  Satellite,
  CloudRain,
  Construction,
  TrafficCone
} from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PremiumLayout from '@/components/layout/PremiumLayout'
import SafeButton from '@/components/ui/SafeButton'
import { useAuth } from '@/components/providers/AuthProvider'
import { toast } from 'sonner'

export default function Dashboard() {
  const [activeMode, setActiveMode] = useState('drive')
  const [notificationCount] = useState(3)
  const [activeFeature, setActiveFeature] = useState(0)
  const [mapLayer, setMapLayer] = useState('traffic')
  const router = useRouter()
  const { logout } = useAuth()

  // Your original quick stats
  const quickStats = [
    { icon: MapPin, label: 'Distance Today', value: '42.5 km', change: '+12%', color: 'text-blue-400' },
    { icon: Clock, label: 'Time Saved', value: '1.5 hrs', change: 'Smart routing', color: 'text-green-400' },
    { icon: Heart, label: 'Safety Score', value: '98%', change: 'Excellent', color: 'text-purple-400' },
    { icon: Users, label: 'V2V Connected', value: '42', change: 'Vehicles nearby', color: 'text-orange-400' },
  ]

  // NEW: Advanced features from loading screen
  const dashboardFeatures = [
    {
      id: 'ai-assistant',
      icon: Brain,
      title: 'AI Assistant',
      description: 'Smart navigation with neural networks',
      stats: { accuracy: '99.7%', response: '<50ms', networks: '256' },
      color: 'from-purple-500 to-pink-500',
      route: '/ai-assistant'
    },
    {
      id: 'ev-charging',
      icon: BatteryCharging,
      title: 'EV Charging Map',
      description: 'Find & reserve charging stations',
      stats: { stations: '4,450+', available: '87%', networks: '4' },
      color: 'from-green-500 to-emerald-500',
      route: '/ev-charging'
    },
    {
      id: 'smart-maps',
      icon: Map,
      title: 'Smart Maps',
      description: 'Live traffic & incident updates',
      stats: { cities: '25+', layers: '8', updates: 'Real-time' },
      color: 'from-blue-500 to-cyan-500',
      route: '/smart-maps'
    },
    {
      id: 'safe-routes',
      icon: Shield,
      title: 'Safe Routes',
      description: 'Crime-free pathfinding',
      stats: { safety: '98%', incidents: '0', coverage: '100%' },
      color: 'from-red-500 to-orange-500',
      route: '/safer-routes'
    },
    {
      id: 'short-routes',
      icon: Route,
      title: 'Short Routes',
      description: 'Time-optimized navigation',
      stats: { savings: '30% faster', efficiency: '95%', distance: 'Optimal' },
      color: 'from-indigo-500 to-blue-500',
      route: '/shortest-routes'
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Live Analytics',
      description: 'Real-time insights & predictions',
      stats: { data: '2.4PB/day', speed: '15.8 TFLOPS', accuracy: '99.5%' },
      color: 'from-yellow-500 to-orange-500',
      route: '/analytics'
    }
  ]

  // Map layers for smart maps
  const mapLayers = [
    { id: 'traffic', label: 'Traffic', icon: TrafficCone, color: 'bg-orange-500' },
    { id: 'incidents', label: 'Incidents', icon: AlertTriangle, color: 'bg-red-500' },
    { id: 'weather', label: 'Weather', icon: CloudRain, color: 'bg-blue-500' },
    { id: 'construction', label: 'Construction', icon: Construction, color: 'bg-yellow-500' },
    { id: 'satellite', label: 'Satellite', icon: Satellite, color: 'bg-purple-500' },
    { id: 'terrain', label: 'Terrain', icon: Layers, color: 'bg-green-500' },
  ]

  // Navigation modes
  const navigationModes = [
    { id: 'drive', label: 'Drive', icon: Car, color: 'from-blue-500 to-purple-500' },
    { id: 'cycle', label: 'Cycle', icon: Bike, color: 'from-green-500 to-emerald-500' },
    { id: 'pedestrian', label: 'Walk', icon: PedestrianIcon, color: 'from-orange-500 to-red-500' },
  ]

  // Quick actions - UPDATED with new routes
  const quickActions = [
    { icon: Navigation, label: 'Find Route', action: () => router.push('/navigation') },
    { icon: Brain, label: 'AI Assistant', action: () => router.push('/ai-assistant') },
    { icon: BatteryCharging, label: 'EV Charging', action: () => router.push('/ev-charging') },
    { icon: Shield, label: 'Safe Routes', action: () => router.push('/safer-routes') },
    { icon: Route, label: 'Short Routes', action: () => router.push('/shortest-routes') },
    { icon: Map, label: 'Smart Maps', action: () => router.push('/smart-maps') },
    { icon: BarChart3, label: 'Analytics', action: () => router.push('/analytics') },
    { icon: Users, label: 'Community', action: () => router.push('/community') },
  ]

  const handleLogout = () => {
    logout()
    toast.success('Logged out successfully')
    router.push('/')
  }

  const handleUpgrade = () => {
    console.log('Upgrade clicked')
    router.push('/subscription')
    toast.info('Redirecting to subscription page')
  }

  const handleProfile = () => {
    console.log('Profile clicked')
    router.push('/profile')
  }

  const handleSOS = () => {
    console.log('SOS Emergency clicked!')
    toast.error('🚨 EMERGENCY SOS ACTIVATED! Authorities notified.', {
      duration: 5000,
      icon: '🚨'
    })
  }

  const handleServiceAlert = (service: string) => {
    console.log(`${service} alerted`)
    toast.warning(`${service} has been notified of your location`, {
      icon: '📞'
    })
  }

  const handleNavigationMode = (mode: string) => {
    console.log(`Navigation mode changed to: ${mode}`)
    setActiveMode(mode)
    toast.info(`Navigation mode set to: ${mode.charAt(0).toUpperCase() + mode.slice(1)}`)
  }

  const handleFeatureClick = (feature: any) => {
    console.log(`Opening ${feature.title}`)
    router.push(feature.route)
  }

  return (
    <PremiumLayout showHeader={true} showFooter={false}>
      <div className="space-y-8">
        {/* Welcome Header - ENHANCED */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-purple backdrop-blur-xl border border-primary-gold/30 rounded-2xl shadow-lg overflow-hidden p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl font-bold">
                  Welcome back, <span className="text-gradient-premium">Brian</span>! 👋
                </h1>
              </div>
              <p className="text-gray-300">
                Your <span className="text-green-400 font-bold">AI-powered safety dashboard</span> is ready with all premium features
              </p>
              <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>AI Assistant Online</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <span>EV Map Active</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <span>Real-time Updates</span>
                </div>
              </div>
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
                <span>Premium Features</span>
              </SafeButton>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats - ENHANCED */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:border-primary-gold/50 p-4 sm:p-6 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} group-hover:scale-110 transition-transform`} />
                <span className="text-xs sm:text-sm text-gray-400">{stat.change}</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold mb-1 group-hover:text-gradient-premium transition-all">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* NEW: Premium Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Premium Features</h2>
              <p className="text-gray-400">Access all AI-powered navigation tools</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50">
                <Filter className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dashboardFeatures.map((feature, index) => {
              const Icon = feature.icon
              const isActive = activeFeature === index
              
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-5 rounded-xl border cursor-pointer transition-all group ${
                    isActive 
                      ? `bg-gradient-to-br ${feature.color} border-transparent` 
                      : 'bg-gray-800/30 border-gray-700/50 hover:border-gray-600/50'
                  }`}
                  whileHover={{ y: -5 }}
                  onClick={() => handleFeatureClick(feature)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${isActive ? 'bg-white/20' : 'bg-gray-800/50'}`}>
                        <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
                      </div>
                      <div>
                        <h3 className={`font-bold ${isActive ? 'text-white' : 'text-white group-hover:text-gray-100'}`}>
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    {isActive && (
                      <div className="p-1 rounded-full bg-white/20">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(feature.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className={`text-lg font-bold ${isActive ? 'text-white' : 'text-gray-300'}`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={`h-1 rounded-full overflow-hidden ${isActive ? 'bg-white/30' : 'bg-gray-700'}`}>
                    <div 
                      className={`h-full ${isActive ? 'bg-white' : 'bg-gray-600'} rounded-full`}
                      style={{ width: `${(index + 1) * (100 / dashboardFeatures.length)}%` }}
                    />
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <span className={`text-sm ${isActive ? 'text-white/80' : 'text-gray-500 group-hover:text-gray-400'}`}>
                      Click to open
                    </span>
                    <div className={`p-1 rounded ${isActive ? 'bg-white/20' : 'bg-gray-800'}`}>
                      <TrendingUp className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Navigation & SOS - UPDATED */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Navigation Modes - ENHANCED */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-purple backdrop-blur-xl border border-primary-gold/30 rounded-2xl shadow-lg overflow-hidden p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Navigation className="w-6 h-6 text-primary-orange" />
                Navigation Mode
              </h3>
              <div className="text-sm text-gray-400">AI-optimized</div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              {navigationModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => handleNavigationMode(mode.id)}
                  className={`p-4 sm:p-6 rounded-xl flex flex-col items-center justify-center transition-all ${
                    activeMode === mode.id
                      ? `bg-gradient-to-br ${mode.color} text-white shadow-lg scale-105`
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <mode.icon className="w-8 h-8 sm:w-10 sm:h-10 mb-3" />
                  <span className="text-sm sm:text-base font-semibold">{mode.label}</span>
                  {activeMode === mode.id && (
                    <div className="mt-2 w-3 h-3 rounded-full bg-white animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* NEW: Map Layers */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-5 h-5 text-blue-400" />
                <h4 className="text-lg font-semibold text-white">Map Layers</h4>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {mapLayers.map((layer) => (
                  <button
                    key={layer.id}
                    onClick={() => setMapLayer(layer.id)}
                    className={`p-2 rounded-lg flex flex-col items-center justify-center transition-all ${
                      mapLayer === layer.id
                        ? 'bg-gray-800/50 border border-gray-600'
                        : 'bg-gray-900/30 hover:bg-gray-800/30'
                    }`}
                  >
                    <layer.icon className={`w-4 h-4 ${layer.color} mb-1`} />
                    <span className="text-xs text-gray-300">{layer.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Current Route</span>
                <span className="font-semibold">Nairobi → Mombasa</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary-orange to-primary-gold rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '65%' }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-gray-300">483 km remaining</span>
                <span className="text-green-400 font-semibold">6h 30m (94% safe)</span>
              </div>
            </div>
          </motion.div>

          {/* SOS Emergency - ENHANCED */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-purple backdrop-blur-xl border border-primary-gold/30 rounded-2xl shadow-lg overflow-hidden p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                Emergency SOS
              </h3>
              <div className="text-sm text-red-400 font-bold">24/7 ACTIVE</div>
            </div>
            
            <div className="flex flex-col items-center">
              <motion.button 
                onClick={handleSOS}
                className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-red-600 to-red-500 shadow-lg flex flex-col items-center justify-center mb-6 sm:mb-8 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(239, 68, 68, 0.3)',
                    '0 0 40px rgba(239, 68, 68, 0.6)',
                    '0 0 20px rgba(239, 68, 68, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400/20 to-transparent animate-ping" />
                <AlertTriangle className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 text-white" />
                <span className="text-2xl sm:text-3xl font-bold text-white">SOS</span>
                <span className="text-sm sm:text-base text-white/80">Emergency Alert</span>
              </motion.button>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full mb-4">
                {[
                  { label: 'Police', color: 'bg-blue-500/20 hover:bg-blue-500/30', icon: '👮', emoji: '🚨' },
                  { label: 'Ambulance', color: 'bg-red-500/20 hover:bg-red-500/30', icon: '🚑', emoji: '🏥' },
                  { label: 'Fire Service', color: 'bg-orange-500/20 hover:bg-orange-500/30', icon: '🚒', emoji: '🔥' },
                  { label: 'Road Rescue', color: 'bg-yellow-500/20 hover:bg-yellow-500/30', icon: '🛣️', emoji: '🆘' },
                ].map((service) => (
                  <motion.button
                    key={service.label}
                    onClick={() => handleServiceAlert(service.label)}
                    className={`p-4 rounded-xl ${service.color} transition-all flex items-center justify-center gap-3`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-2xl">{service.icon}</div>
                    <div>
                      <div className="text-sm font-medium text-white">{service.label}</div>
                      <div className="text-xs text-gray-300">{service.emoji} Tap to alert</div>
                    </div>
                  </motion.button>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-2">
                  Press in case of emergency to notify nearby services
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <Radio className="w-3 h-3" />
                  <span>Connected to emergency network</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions - UPDATED with new features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white">Quick Actions</h3>
              <p className="text-gray-400">Access all features in one click</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {quickActions.map((action, index) => (
              <motion.button
                key={action.label}
                onClick={action.action}
                className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all flex flex-col items-center justify-center group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <action.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 text-primary-orange group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-center">{action.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* NEW: AI Assistant Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 rounded-2xl p-6 sm:p-8 border border-purple-500/30"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
                  AI Assistant Ready
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </h3>
                <p className="text-gray-300">
                  Your personal navigation AI is online. Ask for routes, traffic updates, or safety alerts.
                </p>
                <div className="flex items-center gap-4 mt-3 text-sm">
                  <div className="flex items-center gap-1 text-green-400">
                    <Target className="w-4 h-4" />
                    <span>99.7% Accuracy</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-400">
                    <Zap className="w-4 h-4" />
                    <span>&lt;50ms Response</span>
                  </div>
                  <div className="flex items-center gap-1 text-purple-400">
                    <Cpu className="w-4 h-4" />
                    <span>256 Neural Nets</span>
                  </div>
                </div>
              </div>
            </div>
            <SafeButton
              onClick={() => router.push('/ai-assistant')}
              variant="premium"
              className="px-6 sm:px-8 py-3 sm:py-4 whitespace-nowrap"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Talk to AI</span>
            </SafeButton>
          </div>
        </motion.div>

        {/* Subscription Upgrade Card - UPDATED */}
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
                Unlock All Premium Features
              </h3>
              <p className="text-gray-300 mb-4">
                Get full access to AI routing, real-time government data, priority support, and advanced safety features.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                {[
                  { icon: Brain, text: 'Advanced AI' },
                  { icon: Shield, text: 'Max Safety' },
                  { icon: Zap, text: 'Priority Support' },
                  { icon: Star, text: 'Exclusive Features' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-400">
                    <item.icon className="w-4 h-4" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <SafeButton
                onClick={handleUpgrade}
                variant="premium"
                className="px-6 sm:px-8 py-3 sm:py-4"
              >
                Upgrade to Premium
              </SafeButton>
              <SafeButton
                onClick={() => router.push('/subscription')}
                variant="secondary"
                className="px-6 sm:px-8 py-3 sm:py-4"
              >
                View Plans
              </SafeButton>
            </div>
          </div>
        </motion.div>

        {/* Logout Button */}
        <div className="text-center">
          <SafeButton
            onClick={handleLogout}
            variant="danger"
            className="flex items-center gap-2 mx-auto"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </SafeButton>
        </div>
      </div>
    </PremiumLayout>
  )
}
