'use client'

import PremiumLayout from '@/components/layout/PremiumLayout'
import { BarChart3, TrendingUp, PieChart, LineChart } from 'lucide-react'
import Link from 'next/link'

export default function AnalyticsPage() {
  return (
    <PremiumLayout showHeader={true} showFooter={false}>
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/20 border border-purple-500/30 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <BarChart3 className="w-12 h-12 text-purple-400" />
            <div>
              <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
              <p className="text-gray-400">Data insights and performance metrics</p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="font-bold">Growth</h3>
                  <p className="text-2xl font-bold">24% ↑</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">User growth this month</p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <PieChart className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="font-bold">Coverage</h3>
                  <p className="text-2xl font-bold">78%</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">African road coverage</p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <LineChart className="w-8 h-8 text-orange-400" />
                <div>
                  <h3 className="font-bold">Accidents</h3>
                  <p className="text-2xl font-bold">30% ↓</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">Reduction in covered areas</p>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="text-center p-8 bg-white/5 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Data Analytics & Insights</h2>
          <p className="text-gray-400 mb-6">Advanced analytics for road safety and user behavior</p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard">
              <button className="px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600">
                Back to Dashboard
              </button>
            </Link>
            <button 
              onClick={() => console.log('Analytics settings clicked')}
              className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600"
            >
              Analytics Settings
            </button>
          </div>
        </div>
      </div>
    </PremiumLayout>
  )
}
