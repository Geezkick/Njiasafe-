'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Navigation, 
  Shield, 
  Zap, 
  Users, 
  MapPin, 
  Car, 
  Bike, 
  User as PedestrianIcon,
  Bell,
  BarChart3,
  Globe,
  Smartphone,
  Clock,
  TrendingUp,
  AlertTriangle,
  Heart
} from 'lucide-react'
import LoadingScreen from '@/components/layout/LoadingScreen'
import LoginForm from '@/components/auth/LoginForm'
import SignupForm from '@/components/auth/SignupForm'
import ForgotPassword from '@/components/auth/ForgotPassword'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import { useLanguage } from '@/components/providers/LanguageProvider'

type AuthView = 'login' | 'signup' | 'forgot'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [authView, setAuthView] = useState<AuthView>('login')
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-darkblue via-primary-black to-primary-blue">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #F97316 1px, transparent 1px),
                            linear-gradient(to bottom, #F97316 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
        
        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div className={`w-${Math.floor(Math.random() * 4) + 2} h-${Math.floor(Math.random() * 4) + 2} rounded-full ${
              i % 3 === 0 ? 'bg-primary-orange/20' : 
              i % 3 === 1 ? 'bg-primary-gold/20' : 
              'bg-primary-purple/20'
            }`} />
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -ins-2 rounded-full border-4 border-transparent border-t-primary-orange border-r-primary-gold"
                />
                <div className="w-16 h-16 rounded-full border-4 border-primary-gold border-t-primary-orange animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-blue to-primary-purple flex items-center justify-center">
                    <Navigation className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-orange via-primary-gold to-primary-orange bg-clip-text text-transparent">
                  NjiaSafe
                </h1>
                <p className="text-sm text-gray-400">Smart Navigation Built for Africa</p>
              </div>
            </motion.div>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>Learn More</span>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - App Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-8">
                <h2 className="text-5xl font-bold mb-4">
                  <span className="text-white">Safer Roads, </span>
                  <span className="text-gradient">Smarter Travel</span>
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Real-time navigation powered by AI to minimize road carnage and save lives across Africa.
                </p>
                
                {/* Feature Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Shield, text: 'AI Safety Alerts', color: 'text-green-400' },
                    { icon: Zap, text: 'Real-time Updates', color: 'text-yellow-400' },
                    { icon: Users, text: 'V2V Community', color: 'text-blue-400' },
                    { icon: BarChart3, text: 'Smart Analytics', color: 'text-purple-400' },
                    { icon: Bell, text: 'SOS Emergency', color: 'text-red-400' },
                    { icon: MapPin, text: 'Accurate Routing', color: 'text-orange-400' },
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <feature.icon className={`w-5 h-5 ${feature.color}`} />
                      <span className="text-sm">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { value: '99%', label: 'Safety Score', icon: Heart },
                    { value: '24/7', label: 'Live Monitoring', icon: Clock },
                    { value: '50K+', label: 'Users Protected', icon: Users },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-center p-4 rounded-xl card-glass"
                    >
                      <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary-orange" />
                      <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Navigation Modes Preview */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Switch Navigation Mode</h3>
                <div className="flex gap-3">
                  {[
                    { mode: 'Drive', icon: Car, color: 'from-blue-500 to-purple-500' },
                    { mode: 'Cycle', icon: Bike, color: 'from-green-500 to-emerald-500' },
                    { mode: 'Walk', icon: PedestrianIcon, color: 'from-orange-500 to-red-500' },
                  ].map((item) => (
                    <motion.button
                      key={item.mode}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br ${item.color} text-white`}
                    >
                      <item.icon className="w-6 h-6 mb-2" />
                      <span className="text-sm font-medium">{item.mode}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Auth Forms */}
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
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-12">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-blue to-primary-purple flex items-center justify-center">
                <Navigation className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold">NjiaSafe</p>
                <p className="text-sm text-gray-400">Making African roads safer</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Government Partnership</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
            
            <div className="mt-4 md:mt-0 text-center md:text-right">
              <p className="text-sm text-gray-500">
                © 2024 NjiaSafe. Using real-time data for safer African roads.
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Powered by AI • Government Integrated • Community Driven
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
