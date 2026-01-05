'use client'

import PremiumLayout from '@/components/layout/PremiumLayout'
import { Settings, Bell, Shield, User, Globe, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export default function SettingsPage() {
  return (
    <PremiumLayout showHeader={true} showFooter={false}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-purple backdrop-blur-xl border border-primary-gold/30 rounded-2xl shadow-lg overflow-hidden p-8">
          <div className="flex items-center gap-4 mb-8">
            <Settings className="w-12 h-12 text-primary-orange" />
            <div>
              <h1 className="text-3xl font-bold">Settings</h1>
              <p className="text-gray-400">Manage your NjiaSafe preferences</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Account Settings
              </h3>
              <p className="text-gray-400 mb-4">Manage your profile and account preferences</p>
              <button 
                onClick={() => console.log('Account settings clicked')}
                className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700"
              >
                Edit Profile
              </button>
            </div>
            
            <div className="p-6 bg-white/5 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </h3>
              <p className="text-gray-400 mb-4">Configure your alert preferences</p>
              <button 
                onClick={() => console.log('Notification settings clicked')}
                className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700"
              >
                Notification Settings
              </button>
            </div>
            
            <div className="p-6 bg-white/5 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Privacy & Security
              </h3>
              <p className="text-gray-400 mb-4">Manage your privacy and security settings</p>
              <button 
                onClick={() => console.log('Privacy settings clicked')}
                className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700"
              >
                Privacy Settings
              </button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex gap-4">
              <Link href="/dashboard">
                <button className="px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600">
                  Back to Dashboard
                </button>
              </Link>
              <button 
                onClick={() => console.log('Save settings clicked')}
                className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </PremiumLayout>
  )
}
