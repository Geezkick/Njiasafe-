'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Award, Clock, MapPin } from 'lucide-react'
import { useRouter } from 'next/navigation'
import ProfileSettings from '@/components/profile/ProfileSettings'
import PremiumLayout from '@/components/layout/PremiumLayout'

export default function ProfilePage() {
  const router = useRouter()

  const stats = [
    { icon: Shield, label: 'Safety Score', value: '98%', color: 'text-green-400' },
    { icon: Award, label: 'Trips Completed', value: '42', color: 'text-blue-400' },
    { icon: Clock, label: 'Time Saved', value: '18.5h', color: 'text-purple-400' },
    { icon: MapPin, label: 'Distance Covered', value: '1,250km', color: 'text-orange-400' },
  ]

  return (
    <PremiumLayout showHeader={true} showFooter={true}>
      <div className="py-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-primary-orange hover:text-primary-gold transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-2">
            Your <span className="text-gradient-premium">Profile</span>
          </h1>
          <p className="text-gray-400">
            Manage your account settings, preferences, and safety statistics
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${stat.color.replace('text-', 'bg-')}/20`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Profile Settings */}
        <ProfileSettings />

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 pt-12 border-t border-white/10"
        >
          <h3 className="text-2xl font-bold mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'Safety score improved to 98%', time: '2 hours ago', type: 'improvement' },
              { action: 'Completed trip: Nairobi to Mombasa', time: 'Yesterday', type: 'trip' },
              { action: 'Received V2V alert: Accident ahead', time: '2 days ago', type: 'alert' },
              { action: 'Profile picture updated', time: '3 days ago', type: 'update' },
              { action: 'Subscribed to Premium', time: '1 week ago', type: 'subscription' },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activity.type === 'improvement' ? 'bg-green-500/20' :
                  activity.type === 'trip' ? 'bg-blue-500/20' :
                  activity.type === 'alert' ? 'bg-red-500/20' :
                  activity.type === 'update' ? 'bg-purple-500/20' :
                  'bg-orange-500/20'
                }`}>
                  <span className="text-sm font-semibold">
                    {activity.type === 'improvement' ? '↑' :
                     activity.type === 'trip' ? '🚗' :
                     activity.type === 'alert' ? '⚠️' :
                     activity.type === 'update' ? '🔄' : '👑'}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="font-medium">{activity.action}</div>
                  <div className="text-sm text-gray-400">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PremiumLayout>
  )
}
