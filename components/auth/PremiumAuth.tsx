'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Navigation, 
  Shield, 
  Zap, 
  Users, 
  Car, 
  Bike, 
  User as PedestrianIcon,
  MapPin,
  BarChart3,
  Globe,
  Clock,
  TrendingUp
} from 'lucide-react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import ForgotPassword from './ForgotPassword'

type AuthView = 'login' | 'signup' | 'forgot'

export default function PremiumAuth() {
  const [authView, setAuthView] = useState<AuthView>('login')

  const features = [
    { icon: Shield, label: 'AI Safety Alerts', desc: 'Real-time accident prevention' },
    { icon: Zap, label: 'V2V Communication', desc: 'Vehicle-to-vehicle alerts' },
    { icon: Users, label: 'Community Network', desc: 'Connected road users' },
    { icon: MapPin, label: 'Smart Routing', desc: 'AI-optimized routes' },
    { icon: BarChart3, label: 'Live Analytics', desc: 'Real-time road data' },
    { icon: Globe, label: 'Multi-language', desc: 'English & Swahili' },
  ]

  const stats = [
    { value: '99.8%', label: 'Safety Score', icon: Shield, color: 'text-green-400' },
    { value: '24/7', label: 'Live Monitoring', icon: Clock, color: 'text-blue-400' },
    { value: '50K+', label: 'Users Protected', icon: Users, color: 'text-purple-400' },
    { value: '30%', label: 'Accident Reduction', icon: TrendingUp, color: 'text-orange-400' },
  ]

  return (
    <div className="py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Features */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Hero Section */}
          <div className="mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.3 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-6 rounded-full border-4 border-primary-orange/20"
                />
                <div className="relative w-32 h-32 rounded-full border-8 border-primary-gold border-t-primary-orange animate-spin-slow">
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary-600 to-primary-purple flex items-center justify-center">
                    <Navigation className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Welcome to </span>
              <span className="text-gradient-premium">NjiaSafe</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              Premium Smart Navigation <span className="text-gradient-premium">Built for Africa</span>
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Using real-time AI data to minimize road carnage, save lives, and transform African road safety.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-4 rounded-2xl bg-gradient-to-br from-primary-600/20 to-primary-purple/20 border border-white/10 backdrop-blur-lg"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary-orange/20 to-primary-gold/20">
                    <feature.icon className="w-5 h-5 text-primary-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.label}</h4>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-lg"
                >
                  <div className="text-center">
                    <Icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold text-gradient-premium">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Navigation Modes Preview */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Car className="w-5 h-5 text-primary-orange" />
              Smart Navigation Modes
            </h3>
            <div className="flex gap-3">
              {[
                { mode: 'Drive', icon: Car, color: 'from-blue-500 to-purple-500', desc: 'AI Traffic Routing' },
                { mode: 'Cycle', icon: Bike, color: 'from-green-500 to-emerald-500', desc: 'Safe Bike Routes' },
                { mode: 'Walk', icon: PedestrianIcon, color: 'from-orange-500 to-red-500', desc: 'Pedestrian Safety' },
              ].map((item) => (
                <motion.button
                  key={item.mode}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-1 flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                >
                  <item.icon className="w-8 h-8 mb-2" />
                  <span className="font-semibold">{item.mode}</span>
                  <span className="text-xs mt-1 opacity-90">{item.desc}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Government Partnership */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:border-primary-gold/50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary-gold" />
              <div>
                <h4 className="font-semibold">Government Partnership</h4>
                <p className="text-sm text-gray-400">Real-time data for road safety policy</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              NjiaSafe partners with African governments to provide real-time road data, helping shape policies that save lives and improve infrastructure.
            </p>
          </div>
        </motion.div>

        {/* Right Column - Auth Forms */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <AnimatePresence mode="wait">
            {authView === 'login' && (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full max-w-md"
              >
                <LoginForm onSwitchView={setAuthView} />
              </motion.div>
            )}
            
            {authView === 'signup' && (
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full max-w-md"
              >
                <SignupForm onSwitchView={setAuthView} />
              </motion.div>
            )}
            
            {authView === 'forgot' && (
              <motion.div
                key="forgot"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full max-w-md"
              >
                <ForgotPassword onSwitchView={setAuthView} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
