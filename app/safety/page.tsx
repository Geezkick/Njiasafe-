'use client'

import PremiumLayout from '@/components/layout/PremiumLayout'
import { Shield, AlertTriangle, CheckCircle, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default function SafetyPage() {
  return (
    <PremiumLayout showHeader={true} showFooter={false}>
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/20 border border-green-500/30 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-12 h-12 text-green-400" />
            <div>
              <h1 className="text-3xl font-bold">Safety Dashboard</h1>
              <p className="text-gray-400">Real-time safety monitoring and alerts for African roads</p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-yellow-400" />
                <div>
                  <h3 className="font-bold">Active Alerts</h3>
                  <p className="text-2xl font-bold">3</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">Road hazards in your area</p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="font-bold">Safety Score</h3>
                  <p className="text-2xl font-bold">98%</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">Your current rating</p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="font-bold">Incidents</h3>
                  <p className="text-2xl font-bold">12% ↓</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">Reduction this month</p>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="text-center p-8 bg-white/5 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">AI-Powered Safety Features</h2>
          <p className="text-gray-400 mb-6">Real-time monitoring, hazard detection, and emergency response</p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard">
              <button className="px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600">
                Back to Dashboard
              </button>
            </Link>
            <button 
              onClick={() => console.log('Safety settings clicked')}
              className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600"
            >
              Safety Settings
            </button>
          </div>
        </div>
      </div>
    </PremiumLayout>
  )
}
