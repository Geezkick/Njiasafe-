'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert('Login successful! (Demo mode)')
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md"
    >
      <div className="card-glass p-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-primary-gold border-t-primary-orange animate-spin-slow">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-purple rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">NS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-400">Login to your NjiaSafe account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                className="input-field pl-12"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                className="input-field pl-12 pr-12"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary flex items-center justify-center gap-2"
          >
            <LogIn className="w-5 h-5" />
            {isLoading ? 'Logging in...' : 'Login'}
          </motion.button>
        </form>

        {/* Links */}
        <div className="mt-6 text-center space-y-2">
          <a href="#" className="text-primary-orange hover:text-primary-gold text-sm">
            Forgot Password?
          </a>
          <p className="text-gray-400">
            Don't have an account?{' '}
            <a href="#" className="text-primary-orange hover:text-primary-gold font-medium">
              Sign up
            </a>
          </p>
        </div>

        {/* Quick Features */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-4">Quick Access Features</p>
            <div className="flex justify-center gap-4">
              <button className="p-3 rounded-xl bg-primary-blue/50 hover:bg-primary-blue border border-primary-blue/50">
                <span className="text-sm font-semibold">V2V</span>
              </button>
              <button className="p-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 border border-red-500/30">
                <span className="text-sm font-semibold">SOS</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
