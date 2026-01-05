'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Navigation, 
  Bell, 
  Settings, 
  User, 
  Menu, 
  X,
  Globe,
  Shield,
  Zap,
  Crown
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import LanguageSwitcher from '../ui/LanguageSwitcher'

export default function PremiumHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [notificationCount] = useState(3)
  const router = useRouter()

  const navItems = [
    { label: 'Dashboard', icon: Navigation, path: '/dashboard' },
    { label: 'Safety', icon: Shield, path: '/safety' },
    { label: 'V2V', icon: Zap, path: '/v2v' },
    { label: 'Analytics', icon: Globe, path: '/analytics' },
    { label: 'Community', icon: User, path: '/community' },
  ]

  const handleNavClick = (path: string, label: string) => {
    console.log(`Navigating to: ${label} (${path})`)
    router.push(path)
  }

  const handleNotifications = () => {
    console.log('Notifications clicked')
    router.push('/notifications')
  }

  const handleSettings = () => {
    console.log('Settings clicked')
    router.push('/settings')
  }

  const handleProfile = () => {
    console.log('User profile clicked')
    router.push('/profile')
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="sticky top-0 z-50 bg-gradient-to-b from-primary-950/90 to-transparent backdrop-blur-2xl border-b border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - CIRCULAR VERSION matching LoadingScreen */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => router.push('/dashboard')}
              className="flex items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <div className="relative">
                {/* Outer rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-4 rounded-full border-2 border-primary-orange/30 hidden sm:block"
                />
                
                {/* Circular logo container */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-primary-gold border-t-primary-orange animate-spin-slow">
                  {/* Inner gradient circle */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-600 to-primary-purple flex items-center justify-center">
                    {/* Navigation icon */}
                    <Navigation className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl sm:text-2xl font-bold">
                  <span className="bg-gradient-to-r from-primary-orange via-primary-gold to-primary-orange bg-clip-text text-transparent">
                    NjiaSafe
                  </span>
                </h1>
                <p className="text-xs sm:text-sm text-gray-400">Premium Navigation</p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                >
                  <button
                    onClick={() => handleNavClick(item.path, item.label)}
                    className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg text-sm sm:text-base flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium hidden sm:inline">{item.label}</span>
                  </button>
                </motion.div>
              )
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            
            {/* Notifications */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <button
                onClick={handleNotifications}
                className="relative p-2 sm:p-3 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
              >
                <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-red-600 to-red-500 rounded-full text-[10px] sm:text-xs flex items-center justify-center font-bold">
                    {notificationCount}
                  </span>
                )}
              </button>
            </motion.div>

            {/* Premium Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-primary-gold to-primary-orange text-primary-950 font-bold"
            >
              <Crown className="w-4 h-4" />
              <span className="text-sm">PREMIUM</span>
            </motion.div>

            {/* Settings */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <button
                onClick={handleSettings}
                className="p-2 sm:p-3 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
              >
                <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </motion.div>

            {/* User Profile - Circular */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <button
                onClick={handleProfile}
                className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-primary-orange to-primary-gold flex items-center justify-center"
              >
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-primary-950" />
              </button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => {
                  console.log('Mobile menu toggled:', !isMenuOpen)
                  setIsMenuOpen(!isMenuOpen)
                }}
                className="lg:hidden p-2 sm:p-3 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
              >
                {isMenuOpen ? (
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4"
          >
            <div className="grid gap-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      handleNavClick(item.path, item.label)
                      setIsMenuOpen(false)
                    }}
                    className="px-6 py-4 rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg flex items-center gap-3"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                )
              })}
              <div className="pt-4 border-t border-white/10">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
