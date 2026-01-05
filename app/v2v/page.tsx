'use client'

import PremiumLayout from '@/components/layout/PremiumLayout'
import { Car, Radio, Users, Zap } from 'lucide-react'
import Link from 'next/link'

export default function V2VPage() {
  return (
    <PremiumLayout showHeader={true} showFooter={false}>
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/20 border border-blue-500/30 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <Car className="w-12 h-12 text-blue-400" />
            <div>
              <h1 className="text-3xl font-bold">V2V Communication</h1>
              <p className="text-gray-400">Vehicle-to-Vehicle real-time alert network</p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Radio className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="font-bold">Connected</h3>
                  <p className="text-2xl font-bold">42</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">Vehicles in network</p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-yellow-400" />
                <div>
                  <h3 className="font-bold">Alerts</h3>
                  <p className="text-2xl font-bold">8</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">Shared today</p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="font-bold">Range</h3>
                  <p className="text-2xl font-bold">5km</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">Communication radius</p>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="text-center p-8 bg-white/5 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Vehicle-to-Vehicle Network</h2>
          <p className="text-gray-400 mb-6">Instant communication between vehicles for collision avoidance</p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard">
              <button className="px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600">
                Back to Dashboard
              </button>
            </Link>
            <button 
              onClick={() => console.log('V2V settings clicked')}
              className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
            >
              V2V Settings
            </button>
          </div>
        </div>
      </div>
    </PremiumLayout>
  )
}
