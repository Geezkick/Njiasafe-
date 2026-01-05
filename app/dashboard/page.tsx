'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Bell, 
  Settings, 
  User, 
  LogOut, 
  Navigation, 
  Shield, 
  Zap, 
  Users, 
  MapPin,
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Car,
  Bike,
  User as PedestrianIcon,
  Smartphone,
  CreditCard,
  Globe,
  Heart,
  Clock,
  Battery,
  Wifi,
  Satellite
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/providers/AuthProvider'
import { useLanguage } from '@/components/providers/LanguageProvider'
import LoadingScreen from '@/components/layout/LoadingScreen'
import NavigationMode from '@/components/dashboard/NavigationMode'
import SOSButton from '@/components/dashboard/SOSButton'
import AnalyticsCard from '@/components/dashboard/AnalyticsCard'
import V2VAlert from '@/components/dashboard/V2VAlert'
import { toast } from 'sonner'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [userLocation, setUserLocation] = useState({ lat: -1.286389, lng: 36.817223 }) // Nairobi
  const [notificationCount, setNotificationCount] = useState(3)
  const { user, logout } = useAuth()
  const { t } = useLanguage()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [user, router])

  if (!user) {
    return <LoadingScreen />
  }

  const tabs = [
    { id: 'overview', label: t('dashboard'), icon: BarChart3 },
    { id: 'navigation', label: t('routes'), icon: Navigation },
    { id: 'alerts', label: t('alerts'), icon: Bell },
    { id: 'community', label: t('community'), icon: Users },
    { id: 'analytics', label: t('analytics'), icon: TrendingUp },
    { id: 'safety', label: t('safety'), icon: Shield },
  ]

  const handleLogout = () => {
    logout()
    toast.success('Logged out successfully')
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-darkblue to-primary-black">
      {/* Header */}
      <header className="bg-white/5 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo & App Name */}
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-2 rounded-full border-2 border-primary-orange/30"
                />
                <div className="w-12 h-12 rounded-full border-4 border-primary-gold border-t-primary-orange animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-blue to-primary-purple flex items-center justify-center">
                    <Navigation className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent">
                  NjiaSafe
                </h1>
                <p className="text-sm text-gray-400">{t('slogan')}</p>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-4">
              {/* Connection Status */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-green-400">Connected</span>
              </div>

              {/* Notifications */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
              >
                <Bell className="w-5 h-5" />
                {notificationCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center"
                  >
                    {notificationCount}
                  </motion.span>
                )}
              </motion.button>

              {/* Settings */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
                onClick={() => router.push('/dashboard/settings')}
              >
                <Settings className="w-5 h-5" />
              </motion.button>

              {/* User Profile */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl bg-gradient-to-r from-primary-orange to-primary-gold"
                onClick={() => router.push('/dashboard/profile')}
              >
                <User className="w-5 h-5 text-primary-darkblue" />
              </motion.button>

              {/* Logout */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-red-500/20 border border-white/10 hover:border-red-500/30 transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Tabs Navigation */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-orange to-primary-gold text-primary-darkblue shadow-lg'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10'
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </motion.button>
            )
          })}
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            {/* Welcome & Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-premium p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Welcome back, <span className="text-gradient">{user.name}</span>!
                  </h2>
                  <p className="text-gray-400">
                    Your safety score is 98% - Keep up the good driving! 🚗
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-gold to-primary-orange text-primary-darkblue font-semibold">
                    {user.subscription.toUpperCase()}
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center gap-1">
                      <Wifi className="w-3 h-3 text-green-400" />
                      <span>V2V Connected</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Satellite className="w-3 h-3 text-blue-400" />
                      <span>GPS Active</span>
                    </div>
                  </div>
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
                    <span className="text-sm text-gray-400">Time Saved</span>
                    <Clock className="w-4 h-4 text-primary-gold" />
                  </div>
                  <div className="text-2xl font-bold">1.5 hrs</div>
                  <div className="text-xs text-green-400">Smart routing</div>
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
                    <span className="text-sm text-gray-400">Carbon Saved</span>
                    <Leaf className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-2xl font-bold">4.2 kg</div>
                  <div className="text-xs text-green-400">Eco-friendly</div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Mode & SOS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <NavigationMode />
              <div className="card-premium p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  Emergency Services
                </h3>
                <SOSButton />
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <button className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm">
                    🚨 Police
                  </button>
                  <button className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm">
                    🚑 Ambulance
                  </button>
                  <button className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm">
                    🚒 Fire Service
                  </button>
                  <button className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm">
                    🛣️ Road Rescue
                  </button>
                </div>
              </div>
            </div>

            {/* V2V & Community Alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card-premium p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    V2V Alerts
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">
                    Live
                  </span>
                </div>
                <V2VAlert />
              </div>

              <div className="card-premium p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-400" />
                  Community Alerts
                </h3>
                <div className="space-y-3">
                  {[
                    { type: '🚧', text: 'Road construction on Mombasa Rd', time: '5 min ago' },
                    { type: '⚠️', text: 'Accident reported near Westlands', time: '12 min ago' },
                    { type: '🚨', text: 'Police checkpoint on Thika Rd', time: '25 min ago' },
                    { type: '💧', text: 'Flooding on Langata Rd', time: '45 min ago' },
                  ].map((alert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <span className="text-xl">{alert.type}</span>
                      <div className="flex-1">
                        <p className="text-sm">{alert.text}</p>
                        <p className="text-xs text-gray-400 mt-1">{alert.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Real-time Analytics */}
            <div className="card-premium p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary-orange" />
                  Real-time Road Analytics
                </h3>
                <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm">
                  <option>Nairobi</option>
                  <option>Mombasa</option>
                  <option>Kisumu</option>
                  <option>Nakuru</option>
                </select>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <AnalyticsCard
                  title="Accident Risk"
                  value="Low"
                  change="-5%"
                  icon={AlertTriangle}
                  color="text-green-400"
                  trend="down"
                />
                <AnalyticsCard
                  title="Traffic Density"
                  value="Medium"
                  change="+12%"
                  icon={Users}
                  color="text-yellow-400"
                  trend="up"
                />
                <AnalyticsCard
                  title="Route Safety"
                  value="92%"
                  change="+3%"
                  icon={Shield}
                  color="text-blue-400"
                  trend="up"
                />
                <AnalyticsCard
                  title="Avg Speed"
                  value="45km/h"
                  change="-8%"
                  icon={Zap}
                  color="text-purple-400"
                  trend="down"
                />
              </div>
            </div>
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-6">
            {/* User Profile Card */}
            <div className="card-premium p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-blue to-primary-purple flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-primary-darkblue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{user.name}</h3>
                  <p className="text-sm text-gray-400">{user.email}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-green-400">Online</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Subscription</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-primary-gold to-primary-orange rounded-full text-xs font-semibold">
                    {user.subscription.toUpperCase()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Mode</span>
                  <span className="flex items-center gap-2">
                    <Car className="w-4 h-4" />
                    <span>{t('drive')}</span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Language</span>
                  <span className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>English</span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Member Since</span>
                  <span>Jan 2024</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Profile Completion</span>
                  <span className="text-sm font-semibold">85%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary-orange to-primary-gold" style={{ width: '85%' }} />
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card-premium p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex flex-col items-center justify-center"
                  onClick={() => router.push('/dashboard/navigation')}
                >
                  <Navigation className="w-6 h-6 mb-2 text-primary-orange" />
                  <span className="text-sm">Find Route</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex flex-col items-center justify-center"
                  onClick={() => router.push('/dashboard/analytics')}
                >
                  <BarChart3 className="w-6 h-6 mb-2 text-primary-purple" />
                  <span className="text-sm">Analytics</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex flex-col items-center justify-center"
                  onClick={() => router.push('/dashboard/community')}
                >
                  <Users className="w-6 h-6 mb-2 text-primary-blue" />
                  <span className="text-sm">Community</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex flex-col items-center justify-center"
                  onClick={() => router.push('/dashboard/settings')}
                >
                  <Settings className="w-6 h-6 mb-2 text-primary-gold" />
                  <span className="text-sm">Settings</span>
                </motion.button>
              </div>
            </div>

            {/* Government Monitoring */}
            <div className="card-premium p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary-gold" />
                <h3 className="text-lg font-semibold">{t('government')} {t('monitoring')}</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                {t('realTime')} collection for road safety improvements
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Speed Violations Today</span>
                  <span className="text-primary-orange font-semibold">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Accidents Reported</span>
                  <span className="text-primary-orange font-semibold">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Traffic Jams</span>
                  <span className="text-primary-orange font-semibold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Road Safety Index</span>
                  <span className="text-green-400 font-semibold">87%</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Last Updated</span>
                  <span className="text-xs text-green-400">2 min ago</span>
                </div>
              </div>
            </div>

            {/* Subscription Upgrade */}
            <div className="card-premium p-6 bg-gradient-to-br from-primary-blue/50 to-primary-purple/50">
              <h3 className="text-lg font-semibold mb-3">Upgrade to Premium</h3>
              <p className="text-sm text-gray-300 mb-4">
                Get advanced AI routing, premium support, and government data access
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary-gold flex items-center justify-center">
                    <span className="text-xs text-primary-darkblue">✓</span>
                  </div>
                  <span className="text-sm">Advanced AI Routing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary-gold flex items-center justify-center">
                    <span className="text-xs text-primary-darkblue">✓</span>
                  </div>
                  <span className="text-sm">Priority Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary-gold flex items-center justify-center">
                    <span className="text-xs text-primary-darkblue">✓</span>
                  </div>
                  <span className="text-sm">Government Data Access</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary"
                onClick={() => router.push('/dashboard/payment')}
              >
                Upgrade Now - $9.99/month
              </motion.button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Leaf icon component
const Leaf = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)
