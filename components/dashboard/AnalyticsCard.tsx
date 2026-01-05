'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface AnalyticsCardProps {
  title: string
  value: string | number
  change: string
  icon: LucideIcon
  color: string
  trend?: 'up' | 'down'
}

export default function AnalyticsCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  color, 
  trend = 'up' 
}: AnalyticsCardProps) {
  const isPositive = !change.startsWith('-')
  
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      className="card-glass p-4 rounded-xl"
    >
      <div className="flex items-center justify-between mb-3">
        <div className={`p-2 rounded-lg ${color.replace('text-', 'bg-')}/10`}>
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
        <div className={`text-xs px-2 py-1 rounded-full ${isPositive 
            ? 'bg-green-500/20 text-green-400' 
            : 'bg-red-500/20 text-red-400'
          }`}>
          {trend === 'up' ? '↗' : '↘'} {change}
        </div>
      </div>
      
      <div>
        <div className="text-2xl font-bold mb-1">{value}</div>
        <div className="text-sm text-gray-400">{title}</div>
      </div>
      
      {/* Progress bar */}
      <div className="mt-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Low</span>
          <span>High</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isPositive ? '75%' : '40%' }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`h-full rounded-full ${isPositive 
                ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                : 'bg-gradient-to-r from-yellow-500 to-orange-500'
              }`}
          />
        </div>
      </div>
    </motion.div>
  )
}
