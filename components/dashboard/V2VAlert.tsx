'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Car, MessageSquare, Radio, Users, Zap, Bell } from 'lucide-react'
import { useSocket } from '../providers/SocketProvider'

interface V2VMessage {
  id: string
  type: 'warning' | 'info' | 'emergency' | 'traffic'
  message: string
  sender: string
  distance: string
  timestamp: string
  priority: 'low' | 'medium' | 'high'
}

export default function V2VAlert() {
  const [messages, setMessages] = useState<V2VMessage[]>([
    {
      id: '1',
      type: 'warning',
      message: 'Accident ahead - 2km',
      sender: 'Toyota Hilux KCB 123A',
      distance: '800m',
      timestamp: '2 min ago',
      priority: 'high'
    },
    {
      id: '2',
      type: 'traffic',
      message: 'Heavy traffic on Mombasa Road',
      sender: 'Mazda Demio KDE 456B',
      distance: '1.2km',
      timestamp: '5 min ago',
      priority: 'medium'
    },
    {
      id: '3',
      type: 'info',
      message: 'Police checkpoint ahead',
      sender: 'Isuzu D-Max KCQ 789C',
      distance: '2.5km',
      timestamp: '8 min ago',
      priority: 'medium'
    },
    {
      id: '4',
      type: 'emergency',
      message: 'Ambulance approaching - please give way',
      sender: 'Emergency Services',
      distance: '500m',
      timestamp: '1 min ago',
      priority: 'high'
    }
  ])

  const [isConnected, setIsConnected] = useState(false)
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const { socket } = useSocket()

  useEffect(() => {
    if (socket) {
      socket.on('v2v-message', (data: any) => {
        const newMessage: V2VMessage = {
          id: Date.now().toString(),
          type: data.type || 'info',
          message: data.message,
          sender: data.sender || 'Nearby Vehicle',
          distance: data.distance || 'Unknown',
          timestamp: 'Just now',
          priority: data.priority || 'medium'
        }
        
        setMessages(prev => [newMessage, ...prev.slice(0, 9)])
      })

      socket.on('connect', () => setIsConnected(true))
      socket.on('disconnect', () => setIsConnected(false))

      return () => {
        socket.off('v2v-message')
        socket.off('connect')
        socket.off('disconnect')
      }
    }
  }, [socket])

  const filteredMessages = activeFilter === 'all' 
    ? messages 
    : messages.filter(msg => msg.type === activeFilter)

  const sendTestMessage = () => {
    if (socket && isConnected) {
      const testMessages = [
        "Heavy rain ahead, reduce speed",
        "Road construction, use alternative route",
        "Animals crossing, be cautious",
        "Fog alert, low visibility"
      ]
      
      const randomMessage = testMessages[Math.floor(Math.random() * testMessages.length)]
      
      socket.emit('v2v-message', {
        type: 'warning',
        message: randomMessage,
        sender: 'Your Vehicle',
        distance: '0m',
        priority: 'medium'
      })
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'warning': return '⚠️'
      case 'emergency': return '🚨'
      case 'traffic': return '🚗'
      case 'info': return 'ℹ️'
      default: return '📡'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'warning': return 'bg-yellow-500/20 text-yellow-400'
      case 'emergency': return 'bg-red-500/20 text-red-400'
      case 'traffic': return 'bg-blue-500/20 text-blue-400'
      case 'info': return 'bg-purple-500/20 text-purple-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  return (
    <div>
      {/* Connection Status */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
          <span className="text-sm">{isConnected ? 'Connected to V2V Network' : 'Connecting...'}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Radio className="w-4 h-4 text-primary-orange" />
          <span>{messages.length} vehicles nearby</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {['all', 'warning', 'emergency', 'traffic', 'info'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${activeFilter === filter
                ? 'bg-gradient-to-r from-primary-orange to-primary-gold text-primary-darkblue'
                : 'bg-white/5 hover:bg-white/10'
              }`}
          >
            {filter === 'all' ? 'All Alerts' : filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Messages List */}
      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
        <AnimatePresence>
          {filteredMessages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: index * 0.1 }}
              className={`p-3 rounded-lg border ${msg.priority === 'high' 
                  ? 'border-red-500/30 bg-red-500/10' 
                  : msg.priority === 'medium'
                  ? 'border-yellow-500/30 bg-yellow-500/10'
                  : 'border-white/10 bg-white/5'
                }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg ${getTypeColor(msg.type)}`}>
                  {getTypeIcon(msg.type)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="font-medium">{msg.message}</p>
                    <span className="text-xs text-gray-400">{msg.timestamp}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Car className="w-3 h-3" />
                      {msg.sender}
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      {msg.distance} away
                    </span>
                    <span className={`px-2 py-0.5 rounded-full ${getTypeColor(msg.type)}`}>
                      {msg.priority.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Send Message */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type a V2V alert..."
            className="flex-1 input-field text-sm"
            onKeyPress={(e) => {
              if (e.key === 'Enter' && socket && isConnected) {
                const target = e.target as HTMLInputElement
                if (target.value.trim()) {
                  socket.emit('v2v-message', {
                    type: 'info',
                    message: target.value,
                    sender: 'You',
                    distance: '0m',
                    priority: 'medium'
                  })
                  target.value = ''
                }
              }
            }}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={sendTestMessage}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-orange to-primary-gold text-primary-darkblue font-medium"
          >
            <MessageSquare className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMessages([])}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10"
          >
            <Bell className="w-4 h-4" />
          </motion.button>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Press Enter to send. Alerts are broadcast to nearby vehicles (500m radius)
        </p>
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="p-2 rounded-lg bg-white/5">
          <div className="text-lg font-semibold text-gradient">{messages.length}</div>
          <div className="text-xs text-gray-400">Alerts Today</div>
        </div>
        <div className="p-2 rounded-lg bg-white/5">
          <div className="text-lg font-semibold text-gradient">42</div>
          <div className="text-xs text-gray-400">Vehicles Nearby</div>
        </div>
        <div className="p-2 rounded-lg bg-white/5">
          <div className="text-lg font-semibold text-gradient">98%</div>
          <div className="text-xs text-gray-400">Network Health</div>
        </div>
      </div>
    </div>
  )
}
