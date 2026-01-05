'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navigation, Shield, Zap, Users, Car, Bike, User as PedestrianIcon } from 'lucide-react'
import LoginForm from '@/components/auth/LoginForm'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-primary-darkblue via-primary-blue to-primary-purple">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-primary-gold border-t-primary-orange animate-spin">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-blue to-primary-purple flex items-center justify-center">
              <Navigation className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-orange via-primary-gold to-primary-orange bg-clip-text text-transparent">
            NjiaSafe
          </h1>
          <p className="text-xl text-gray-300 mt-2">Smart Navigation Built for Africa</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-4 border-primary-gold border-t-primary-orange animate-spin-slow">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-blue to-primary-purple flex items-center justify-center">
                <Navigation className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent">
                NjiaSafe
              </h1>
              <p className="text-sm text-gray-400">Smart Navigation Built for Africa</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Safer Roads, </span>
              <span className="bg-gradient-to-r from-primary-orange via-primary-gold to-primary-orange bg-clip-text text-transparent">
                Smarter Travel
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Real-time navigation powered by AI to minimize road carnage and save lives across Africa.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Shield, text: 'AI Safety Alerts', color: 'text-green-400' },
                { icon: Zap, text: 'Real-time Updates', color: 'text-yellow-400' },
                { icon: Users, text: 'V2V Community', color: 'text-blue-400' },
                { icon: Car, text: 'Smart Routing', color: 'text-orange-400' },
              ].map((feature, index) => (
                <div key={feature.text} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Navigation Modes */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Navigation Modes</h3>
              <div className="flex gap-3">
                {[
                  { mode: 'Drive', icon: Car, color: 'from-blue-500 to-purple-500' },
                  { mode: 'Cycle', icon: Bike, color: 'from-green-500 to-emerald-500' },
                  { mode: 'Walk', icon: PedestrianIcon, color: 'from-orange-500 to-red-500' },
                ].map((item) => (
                  <button
                    key={item.mode}
                    className={`flex-1 flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br ${item.color} text-white`}
                  >
                    <item.icon className="w-6 h-6 mb-2" />
                    <span className="text-sm font-medium">{item.mode}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex justify-center">
            <LoginForm />
          </div>
        </div>
      </main>
    </div>
  )
}
