'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, Navigation, Shield, BatteryCharging, 
  Map, Brain, Route, Bell, User, Settings,
  Home, BarChart3, Users, Wifi, Satellite
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SafeButton from '@/components/ui/SafeButton'
import { useRouter } from 'next/navigation'

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Dashboard' },
  { href: '/ai-assistant', icon: Brain, label: 'AI Assistant' },
  { href: '/ev-charging', icon: BatteryCharging, label: 'EV Charging' },
  { href: '/smart-maps', icon: Map, label: 'Smart Maps' },
  { href: '/safer-routes', icon: Shield, label: 'Safe Routes' },
  { href: '/shortest-routes', icon: Route, label: 'Short Routes' },
  { href: '/navigation', icon: Navigation, label: 'Navigation' },
  { href: '/analytics', icon: BarChart3, label: 'Analytics' },
  { href: '/community', icon: Users, label: 'Community' },
]

export default function PremiumHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleQuickAction = (path: string) => {
    router.push(path)
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary-darkblue/95 via-primary-blue/95 to-primary-purple/95 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 lg:hidden"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
            
            <Link href="/dashboard" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-orange to-primary-gold flex items-center justify-center">
                <Navigation className="w-6 h-6 text-primary-darkblue" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary-orange via-primary-gold to-primary-purple bg-clip-text text-transparent">
                  NjiaSafe
                </h1>
                <p className="text-xs text-gray-400">Premium Navigation</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-primary-orange/20 to-primary-gold/20 text-white border border-primary-gold/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 relative">
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </button>
            
            <Link href="/profile" className="p-2 rounded-lg bg-white/5 hover:bg-white/10">
              <User className="w-5 h-5 text-white" />
            </Link>
            
            <Link href="/settings" className="p-2 rounded-lg bg-white/5 hover:bg-white/10">
              <Settings className="w-5 h-5 text-white" />
            </Link>

            <SafeButton
              onClick={() => router.push('/subscription')}
              variant="premium"
              className="hidden sm:flex"
            >
              Premium
            </SafeButton>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-6 pb-4 space-y-2">
                {/* Quick Actions */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { icon: Brain, label: 'AI', path: '/ai-assistant' },
                    { icon: BatteryCharging, label: 'EV', path: '/ev-charging' },
                    { icon: Shield, label: 'Safe', path: '/safer-routes' },
                    { icon: Map, label: 'Maps', path: '/smart-maps' },
                    { icon: Route, label: 'Short', path: '/shortest-routes' },
                    { icon: Navigation, label: 'Nav', path: '/navigation' },
                  ].map((action) => {
                    const Icon = action.icon
                    return (
                      <button
                        key={action.label}
                        onClick={() => handleQuickAction(action.path)}
                        className="p-4 rounded-xl bg-white/5 hover:bg-white/10 flex flex-col items-center justify-center"
                      >
                        <Icon className="w-6 h-6 text-primary-orange mb-2" />
                        <span className="text-xs text-white">{action.label}</span>
                      </button>
                    )
                  })}
                </div>

                {/* Full Navigation */}
                <div className="space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-primary-orange/20 to-primary-gold/20 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-primary-orange rounded-full animate-pulse" />
                        )}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
