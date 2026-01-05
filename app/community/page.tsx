'use client'

import PremiumLayout from '@/components/layout/PremiumLayout'
import { Users, MessageSquare, ThumbsUp, Share2 } from 'lucide-react'
import Link from 'next/link'

export default function CommunityPage() {
  return (
    <PremiumLayout showHeader={true} showFooter={false}>
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/20 border border-orange-500/30 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <Users className="w-12 h-12 text-orange-400" />
            <div>
              <h1 className="text-3xl font-bold">Community</h1>
              <p className="text-gray-400">Connect with other road users across Africa</p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="font-bold">Members</h3>
                  <p className="text-2xl font-bold">50K+</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">Active community members</p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="font-bold">Reports</h3>
                  <p className="text-2xl font-bold">1.2K</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">Community reports today</p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <ThumbsUp className="w-8 h-8 text-yellow-400" />
                <div>
                  <h3 className="font-bold">Helpful</h3>
                  <p className="text-2xl font-bold">98%</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">Helpful report rate</p>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="text-center p-8 bg-white/5 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">NjiaSafe Community</h2>
          <p className="text-gray-400 mb-6">Share experiences, report hazards, and help make African roads safer</p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard">
              <button className="px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600">
                Back to Dashboard
              </button>
            </Link>
            <button 
              onClick={() => console.log('Community settings clicked')}
              className="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600"
            >
              Community Settings
            </button>
          </div>
        </div>
      </div>
    </PremiumLayout>
  )
}
