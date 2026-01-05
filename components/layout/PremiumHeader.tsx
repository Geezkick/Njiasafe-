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
  Zap
} from 'lucide-react'
import Image from 'next/image'
import LanguageSwitcher from '../ui/LanguageSwitcher'

export default function PremiumHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [notificationCount] = useState(3)

  const navItems = [
    { label: 'Dashboard', icon: Navigation },
    { label: 'Safety', icon: Shield },
    { label: 'V2V', icon: Zap },
    { label: 'Analytics', icon: Globe },
    { label: 'Community', icon: User },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="sticky top-0 z-50 bg-gradient-to-b from-primary-darkblue/90 to-transparent backdrop-blur-2xl border-b border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border-2 border-primary-orange/30"
              />
              <div className="relative w-14 h-14 rounded-full border-4 border-primary-gold border-t-primary-orange animate-spin-slow">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-blue to-primary-purple flex items-center justify-center overflow-hidden">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/logo.png"
                      alt="NjiaSafe Logo"
                      fill
                      className="object-contain p-1"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-gradient-premium">NjiaSafe</span>
              </h1>
              <p className="text-sm text-gray-400">Premium Navigation for Africa</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="nav-item flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              )
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            
            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-3 rounded-xl glass-effect"
            >
              <Bell className="w-5 h-5" />
              {notificationCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-red-600 to-red-500 rounded-full text-xs flex items-center justify-center font-bold"
                >
                  {notificationCount}
                </motion.span>
              )}
            </motion.button>

            {/* Settings */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl glass-effect"
            >
              <Settings className="w-5 h-5" />
            </motion.button>

            {/* User Profile */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-gradient-to-r from-primary-orange to-primary-gold"
            >
              <User className="w-5 h-5 text-primary-darkblue" />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl glass-effect"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
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
                  <motion.button
                    key={item.label}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="nav-item flex items-center gap-3 p-4"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
