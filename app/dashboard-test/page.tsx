'use client'

import { useState } from 'react'
import SafeButton from '@/components/ui/SafeButton'

export default function DashboardTestPage() {
  const [activeTab, setActiveTab] = useState('safety')
  const [log, setLog] = useState<string[]>([])

  const addLog = (message: string) => {
    setLog(prev => [`[${new Date().toLocaleTimeString()}] ${message}`, ...prev.slice(0, 9)])
  }

  const navigationItems = [
    { id: 'safety', label: 'Safety', color: 'bg-green-500' },
    { id: 'v2v', label: 'V2V', color: 'bg-blue-500' },
    { id: 'analytics', label: 'Analytics', color: 'bg-purple-500' },
    { id: 'community', label: 'Community', color: 'bg-orange-500' },
  ]

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-primary-950 to-primary-900">
      <h1 className="text-3xl font-bold mb-8">Dashboard Navigation Test</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Navigation Test */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-semibold mb-4">Navigation Buttons</h2>
            
            <div className="flex flex-wrap gap-4 mb-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    addLog(`Navigated to ${item.label}`)
                    setActiveTab(item.id)
                  }}
                  className={`px-6 py-3 rounded-xl ${item.color} text-white font-medium hover:opacity-90 transition-opacity`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="p-4 bg-black/20 rounded-lg">
              <p className="text-sm mb-2">Current active tab:</p>
              <div className="text-lg font-bold text-gradient-premium">{activeTab.toUpperCase()}</div>
            </div>
          </div>

          {/* Button Types Test */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-semibold mb-4">Different Button Types</h2>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => addLog('Regular button clicked')}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Regular Button
              </button>
              
              <SafeButton 
                onClick={() => addLog('SafeButton clicked')}
                variant="primary"
              >
                SafeButton Primary
              </SafeButton>
              
              <SafeButton 
                onClick={() => addLog('Premium button clicked')}
                variant="premium"
              >
                SafeButton Premium
              </SafeButton>
              
              <button
                disabled
                onClick={() => addLog('Disabled button clicked (should not happen)')}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg cursor-not-allowed"
              >
                Disabled Button
              </button>
            </div>
          </div>

          {/* Form Test */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-semibold mb-4">Form with Buttons</h2>
            
            <form onSubmit={(e) => { e.preventDefault(); addLog('Form submitted'); }}>
              <input 
                type="text" 
                placeholder="Enter something..."
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 mb-4 text-white"
              />
              
              <div className="flex gap-4">
                <button 
                  type="submit"
                  className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Submit Form
                </button>
                
                <button 
                  type="button"
                  onClick={() => addLog('Form reset')}
                  className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Log Panel */}
        <div className="lg:col-span-1">
          <div className="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 p-6 h-full">
            <h2 className="text-xl font-semibold mb-4">Click Log</h2>
            
            <div className="space-y-2 h-96 overflow-y-auto">
              {log.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No clicks yet. Click buttons above to see logs.</p>
              ) : (
                log.map((entry, index) => (
                  <div 
                    key={index} 
                    className="p-3 bg-white/5 rounded-lg text-sm font-mono"
                  >
                    {entry}
                  </div>
                ))
              )}
            </div>
            
            <button
              onClick={() => setLog([])}
              className="w-full mt-4 px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30"
            >
              Clear Log
            </button>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 p-6 bg-gradient-to-r from-primary-600/20 to-primary-purple/20 rounded-2xl border border-primary-gold/30">
        <h3 className="text-lg font-semibold mb-2">Instructions</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Click navigation buttons above (Safety, V2V, Analytics, Community)</li>
          <li>Click different button types to test</li>
          <li>Fill form and submit</li>
          <li>Check logs on the right side</li>
          <li>Also check browser console (F12) for additional logs</li>
          <li>If buttons work here but not in main dashboard, share PremiumHeader</li>
        </ol>
      </div>
    </div>
  )
}
