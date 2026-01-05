'use client'

import PremiumLayout from '@/components/layout/PremiumLayout'
import { Navigation, MapPin, Clock, Car } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/components/providers/LanguageProvider'

export default function NavigationPage() {
  const { t } = useLanguage()

  return (
    <PremiumLayout showHeader={true} showFooter={false}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-purple backdrop-blur-xl border border-primary-gold/30 rounded-2xl shadow-lg overflow-hidden p-8">
          <div className="flex items-center gap-4 mb-8">
            <Navigation className="w-12 h-12 text-primary-orange" />
            <div>
              <h1 className="text-3xl font-bold">Find Route</h1>
              <p className="text-gray-400">AI-powered navigation for African roads</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Enter Destination
              </h3>
              <input 
                type="text" 
                placeholder="Where do you want to go?"
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400"
              />
            </div>
            
            <div className="p-6 bg-white/5 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Car className="w-5 h-5" />
                Route Options
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <button className="p-4 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 transition-colors">
                  <div className="text-lg font-bold">Fastest</div>
                  <div className="text-sm text-gray-400">6h 30m</div>
                </button>
                <button className="p-4 rounded-xl bg-green-500/20 hover:bg-green-500/30 transition-colors">
                  <div className="text-lg font-bold">Safest</div>
                  <div className="text-sm text-gray-400">7h 15m</div>
                </button>
                <button className="p-4 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 transition-colors">
                  <div className="text-lg font-bold">Scenic</div>
                  <div className="text-sm text-gray-400">8h 45m</div>
                </button>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link href="/dashboard">
                <button className="px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600">
                  Back to Dashboard
                </button>
              </Link>
              <button 
                onClick={() => console.log('Start navigation')}
                className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600"
              >
                Start Navigation
              </button>
            </div>
          </div>
        </div>
      </div>
    </PremiumLayout>
  )
}
