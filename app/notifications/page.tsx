'use client'

import PremiumLayout from '@/components/layout/PremiumLayout'
import { Bell, CheckCircle, AlertTriangle, Info } from 'lucide-react'
import Link from 'next/link'

export default function NotificationsPage() {
  const notifications = [
    { id: 1, type: 'alert', title: 'Road Hazard Ahead', message: 'Accident reported on Mombasa Road', time: '10 min ago', icon: AlertTriangle, color: 'text-red-400' },
    { id: 2, type: 'info', title: 'V2V Alert', message: 'Vehicle nearby reporting heavy traffic', time: '25 min ago', icon: Info, color: 'text-blue-400' },
    { id: 3, type: 'success', title: 'Route Updated', message: 'Your route has been optimized', time: '1 hour ago', icon: CheckCircle, color: 'text-green-400' },
  ]

  return (
    <PremiumLayout showHeader={true} showFooter={false}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-purple backdrop-blur-xl border border-primary-gold/30 rounded-2xl shadow-lg overflow-hidden p-8">
          <div className="flex items-center gap-4 mb-8">
            <Bell className="w-12 h-12 text-primary-orange" />
            <div>
              <h1 className="text-3xl font-bold">Notifications</h1>
              <p className="text-gray-400">Your alerts and updates</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {notifications.map((notif) => {
              const Icon = notif.icon
              return (
                <div key={notif.id} className="p-6 bg-white/5 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <Icon className={`w-6 h-6 ${notif.color} mt-1`} />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{notif.title}</h3>
                      <p className="text-gray-400">{notif.message}</p>
                      <p className="text-sm text-gray-500 mt-2">{notif.time}</p>
                    </div>
                    <button 
                      onClick={() => console.log(`Mark as read: ${notif.id}`)}
                      className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20"
                    >
                      Mark read
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex gap-4">
              <Link href="/dashboard">
                <button className="px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600">
                  Back to Dashboard
                </button>
              </Link>
              <button 
                onClick={() => console.log('Clear all notifications')}
                className="px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
    </PremiumLayout>
  )
}
