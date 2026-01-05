'use client'

import { 
  Home, Navigation, Shield, BatteryCharging, 
  Map, Route, Brain, Settings, User, LogOut,
  Bell, BarChart3, Users
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const navigationItems = [
  { href: '/dashboard', icon: Home, label: 'Dashboard' },
  { href: '/navigation', icon: Navigation, label: 'Navigation' },
  { href: '/ai-assistant', icon: Brain, label: 'AI Assistant' },
  { href: '/ev-charging', icon: BatteryCharging, label: 'EV Charging' },
  { href: '/smart-maps', icon: Map, label: 'Smart Maps' },
  { href: '/safer-routes', icon: Shield, label: 'Safe Routes' },
  { href: '/shortest-routes', icon: Route, label: 'Short Routes' },
  { href: '/analytics', icon: BarChart3, label: 'Analytics' },
  { href: '/community', icon: Users, label: 'Community' },
  { href: '/notifications', icon: Bell, label: 'Notifications' },
  { href: '/settings', icon: Settings, label: 'Settings' },
  { href: '/profile', icon: User, label: 'Profile' },
]

export default function NavigationUpdate() {
  const pathname = usePathname()

  return (
    <nav className="space-y-2">
      {navigationItems.map((item, index) => {
        const isActive = pathname === item.href
        const Icon = item.icon
        
        return (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-primary-orange/20 to-primary-gold/20 border border-primary-gold/30 shadow-lg text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="ml-auto w-2 h-2 bg-primary-orange rounded-full"
                />
              )}
            </Link>
          </motion.div>
        )
      })}
    </nav>
  )
}
