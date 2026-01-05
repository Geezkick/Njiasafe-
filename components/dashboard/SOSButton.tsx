'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Phone, Shield, Users, MessageCircle } from 'lucide-react'
import { useSocket } from '../providers/SocketProvider'
import { toast } from 'sonner'

export default function SOSButton() {
  const [isActive, setIsActive] = useState(false)
  const [countdown, setCountdown] = useState(5)
  const { socket, isConnected } = useSocket()

  const handleSOS = () => {
    if (!isConnected) {
      toast.error('No connection. Please check your internet.')
      return
    }

    setIsActive(true)
    let count = 5
    
    // Start countdown
    const countdownInterval = setInterval(() => {
      count -= 1
      setCountdown(count)
      
      if (count === 0) {
        clearInterval(countdownInterval)
        sendSOSAlert()
      }
    }, 1000)

    // Cancel button
    setTimeout(() => {
      if (isActive) {
        const cancelBtn = document.getElementById('cancel-sos')
        if (cancelBtn) {
          cancelBtn.onclick = () => {
            clearInterval(countdownInterval)
            setIsActive(false)
            setCountdown(5)
            toast.info('SOS cancelled')
          }
        }
      }
    }, 100)
  }

  const sendSOSAlert = () => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            accuracy: position.coords.accuracy
          }

          // Send via Socket.IO
          if (socket) {
            socket.emit('sos-alert', {
              type: 'SOS',
              location,
              timestamp: new Date().toISOString(),
              priority: 'CRITICAL',
              metadata: {
                vehicleInfo: 'User Vehicle',
                medicalInfo: 'No medical info provided',
                emergencyContacts: ['Police', 'Ambulance', 'Road Rescue']
              }
            })
          }

          // Also send to emergency contacts (simulated)
          sendToEmergencyServices(location)
          
          toast.success('SOS Alert Sent! Emergency services notified.')
          
          // Reset after 10 seconds
          setTimeout(() => {
            setIsActive(false)
            setCountdown(5)
          }, 10000)
        },
        (error) => {
          console.error('Error getting location:', error)
          toast.error('Unable to get location. SOS sent without precise coordinates.')
          sendToEmergencyServices(null)
        }
      )
    } else {
      toast.error('Geolocation not supported')
      sendToEmergencyServices(null)
    }
  }

  const sendToEmergencyServices = (location: any) => {
    // Simulate sending to different services
    const services = [
      { name: 'Police', icon: '👮', color: 'bg-blue-500' },
      { name: 'Ambulance', icon: '🚑', color: 'bg-red-500' },
      { name: 'Fire Service', icon: '🚒', color: 'bg-orange-500' },
      { name: 'Road Rescue', icon: '🛣️', color: 'bg-yellow-500' },
    ]

    services.forEach((service, index) => {
      setTimeout(() => {
        toast.info(`Alert sent to ${service.name}`)
      }, index * 500)
    })

    // Notify nearby users via V2V
    if (socket) {
      socket.emit('v2v-broadcast', {
        type: 'EMERGENCY_NEARBY',
        message: 'Emergency alert in your vicinity. Please proceed with caution.',
        location,
        radius: 5000, // 5km radius
        priority: 'HIGH'
      })
    }
  }

  return (
    <div className="flex flex-col items-center">
      {/* SOS Button */}
      <div className="relative">
        {/* Pulsing rings */}
        {isActive && (
          <>
            <motion.div
              animate={{ scale: [1, 2, 2.5, 1], opacity: [0.5, 0.3, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-red-500"
            />
            <motion.div
              animate={{ scale: [1, 1.8, 2.2, 1], opacity: [0.3, 0.2, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="absolute inset-0 rounded-full bg-red-500"
            />
          </>
        )}

        {/* Main Button */}
        <motion.button
          whileHover={!isActive ? { scale: 1.05 } : {}}
          whileTap={!isActive ? { scale: 0.95 } : {}}
          animate={isActive ? {
            scale: [1, 1.1, 1],
            backgroundColor: ['#EF4444', '#DC2626', '#EF4444']
          } : {}}
          transition={isActive ? {
            duration: 1,
            repeat: Infinity
          } : {}}
          onClick={handleSOS}
          disabled={isActive}
          className={`relative w-48 h-48 rounded-full flex items-center justify-center ${isActive
              ? 'bg-red-600 shadow-2xl shadow-red-500/50'
              : 'bg-gradient-to-br from-red-500 to-red-600 shadow-lg hover:shadow-xl hover:shadow-red-500/30'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isActive ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex flex-col items-center"
            >
              <div className="text-6xl font-bold mb-2">{countdown}</div>
              <div className="text-sm font-semibold">CANCEL SOS</div>
              <div className="text-xs mt-2 opacity-75">Tap to cancel</div>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center">
              <AlertTriangle className="w-16 h-16 mb-4" />
              <span className="text-2xl font-bold">SOS</span>
              <span className="text-sm mt-2">Emergency Alert</span>
            </div>
          )}
        </motion.button>
      </div>

      {/* Cancel Button (only shown during countdown) */}
      {isActive && (
        <motion.button
          id="cancel-sos"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-sm"
        >
          Cancel Emergency Alert
        </motion.button>
      )}

      {/* Emergency Contacts */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 flex flex-col items-center"
        >
          <Phone className="w-5 h-5 mb-1 text-blue-400" />
          <span className="text-xs">Police (999)</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-lg bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 flex flex-col items-center"
        >
          <Shield className="w-5 h-5 mb-1 text-red-400" />
          <span className="text-xs">Ambulance (112)</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-lg bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 flex flex-col items-center"
        >
          <Users className="w-5 h-5 mb-1 text-green-400" />
          <span className="text-xs">Road Rescue</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 flex flex-col items-center"
        >
          <MessageCircle className="w-5 h-5 mb-1 text-purple-400" />
          <span className="text-xs">V2V Alert</span>
        </motion.button>
      </div>

      {/* Instructions */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400 mb-2">
          {isActive 
            ? 'Emergency services will be notified in ' + countdown + ' seconds'
            : 'Press in case of emergency to notify nearby services'
          }
        </p>
        <p className="text-xs text-gray-500">
          Your location will be shared with emergency responders
        </p>
      </div>
    </div>
  )
}
