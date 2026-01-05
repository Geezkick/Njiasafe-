'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Camera, 
  Mail, 
  Phone, 
  MapPin, 
  Car, 
  Globe, 
  Shield, 
  Save,
  X,
  Check
} from 'lucide-react'
import Image from 'next/image'
import { toast } from 'sonner'

export default function ProfileSettings() {
  const [user, setUser] = useState({
    name: 'Brian Nyarienya',
    email: 'brian@njiasafe.com',
    phone: '+254 712 345 678',
    location: 'Nairobi, Kenya',
    mode: 'drive',
    language: 'en',
    subscription: 'premium',
  })

  const [profilePicture, setProfilePicture] = useState('/logo.png')
  const [isEditing, setIsEditing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size should be less than 5MB')
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfilePicture(e.target.result as string)
          toast.success('Profile picture updated')
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    setIsEditing(false)
    toast.success('Profile updated successfully')
  }

  const handleCancel = () => {
    setIsEditing(false)
    toast.info('Changes cancelled')
  }

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-8">
            <div className="flex flex-col items-center">
              {/* Profile Picture */}
              <div className="relative mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-48 h-48 rounded-full border-4 border-primary-gold border-t-primary-orange overflow-hidden"
                >
                  <Image
                    src={profilePicture}
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                
                {/* Upload Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-gradient-to-r from-primary-orange to-primary-gold flex items-center justify-center shadow-lg"
                >
                  <Camera className="w-5 h-5 text-primary-950" />
                </motion.button>
                
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>

              <h3 className="text-2xl font-bold mb-2 text-center">{user.name}</h3>
              <p className="text-gray-400 mb-6 text-center">Premium User</p>

              {/* Subscription Status */}
              <div className="w-full mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Subscription</span>
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary-gold to-primary-orange text-primary-950 font-bold text-sm">
                    {user.subscription.toUpperCase()}
                  </span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary-orange to-primary-gold" style={{ width: '85%' }} />
                </div>
                <p className="text-xs text-gray-500 mt-1">Renews on: 15 Jan 2024</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-2xl font-bold text-gradient-premium">98%</div>
                  <div className="text-sm text-gray-400">Safety</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-2xl font-bold text-gradient-premium">42</div>
                  <div className="text-sm text-gray-400">Trips</div>
                </div>
              </div>
            </div>
          </div>

          {/* Developer Credit */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center"
          >
            <p className="text-sm text-gray-500">
              Developed with ❤️ by <span className="text-primary-gold font-semibold">Brian Nyarienya</span>
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Making African roads safer through technology
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column - Profile Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Profile Settings</h2>
              {isEditing ? (
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCancel}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSave}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary-orange to-primary-gold text-primary-950 font-bold flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </motion.button>
                </div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary-orange to-primary-gold text-primary-950 font-bold flex items-center gap-2"
                >
                  Edit Profile
                </motion.button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary-orange" />
                  Personal Information
                </h3>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={user.name}
                      onChange={(e) => setUser({...user, name: e.target.value})}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-orange disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      value={user.email}
                      onChange={(e) => setUser({...user, email: e.target.value})}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-orange disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={user.phone}
                      onChange={(e) => setUser({...user, phone: e.target.value})}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-orange disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-orange" />
                  Preferences
                </h3>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={user.location}
                      onChange={(e) => setUser({...user, location: e.target.value})}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-orange disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Default Navigation Mode</label>
                  <div className="relative">
                    <select
                      value={user.mode}
                      onChange={(e) => setUser({...user, mode: e.target.value})}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-orange disabled:opacity-50 disabled:cursor-not-allowed appearance-none"
                    >
                      <option value="drive">Drive</option>
                      <option value="cycle">Cycle</option>
                      <option value="pedestrian">Walk</option>
                    </select>
                    <Car className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Language</label>
                  <div className="relative">
                    <select
                      value={user.language}
                      onChange={(e) => setUser({...user, language: e.target.value})}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-orange disabled:opacity-50 disabled:cursor-not-allowed appearance-none"
                    >
                      <option value="en">English</option>
                      <option value="sw">Swahili</option>
                    </select>
                    <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Account Security */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-lg font-semibold mb-4">Account Security</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left">
                  <div className="font-medium mb-1">Change Password</div>
                  <div className="text-sm text-gray-400">Update your password regularly</div>
                </button>
                <button className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left">
                  <div className="font-medium mb-1">Two-Factor Authentication</div>
                  <div className="text-sm text-gray-400">Add extra security layer</div>
                </button>
                <button className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left">
                  <div className="font-medium mb-1">Connected Devices</div>
                  <div className="text-sm text-gray-400">Manage your devices</div>
                </button>
                <button className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left">
                  <div className="font-medium mb-1">Privacy Settings</div>
                  <div className="text-sm text-gray-400">Control your data</div>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
