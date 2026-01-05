'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Mail, Lock, Eye, EyeOff, LogIn, AlertCircle, Shield, Zap } from 'lucide-react'
import { useAuth } from '../providers/AuthProvider'
import { toast } from 'sonner'
import SafeButton from '@/components/ui/SafeButton'

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
})

type FormData = yup.InferType<typeof schema>

interface LoginFormProps {
  onSwitchView: (view: 'signup' | 'forgot') => void
}

export default function LoginForm({ onSwitchView }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    try {
      await login(data.email, data.password)
      toast.success('Welcome to NjiaSafe Premium!', {
        icon: '🚗',
        duration: 3000,
      })
      reset()
    } catch (error) {
      toast.error('Login failed. Please check your credentials.', {
        icon: '⚠️',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full"
    >
      <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-purple backdrop-blur-xl border border-primary-gold/30 rounded-2xl shadow-lg overflow-hidden p-8">
        {/* Animated Background Effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/10 rounded-full -translate-y-16 translate-x-16" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-purple/10 rounded-full translate-y-16 -translate-x-16" />

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-4 rounded-full border-2 border-primary-orange/30"
                />
                <div className="w-20 h-20 rounded-full border-4 border-primary-gold border-t-primary-orange animate-spin-slow">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-purple rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-orange via-primary-gold to-primary-orange bg-clip-text text-transparent mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-400">Access your premium dashboard</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-orange" />
                Email
              </label>
              <div className="relative">
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 text-lg pl-12"
                  placeholder="premium@njiasafe.com"
                  disabled={isLoading}
                />
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-red-400 flex items-center gap-1"
                >
                  <AlertCircle className="w-4 h-4" />
                  {errors.email.message}
                </motion.p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary-orange" />
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => onSwitchView('forgot')}
                  className="text-sm text-primary-orange hover:text-primary-gold transition-colors"
                  disabled={isLoading}
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 text-lg pl-12 pr-12"
                  placeholder="••••••••"
                  disabled={isLoading}
                />
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <button
                  type="button"
                  onClick={() => {
                    console.log('Toggle password visibility')
                    setShowPassword(!showPassword)
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-red-400 flex items-center gap-1"
                >
                  <AlertCircle className="w-4 h-4" />
                  {errors.password.message}
                </motion.p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="rounded bg-white/10 border-white/20 text-primary-orange focus:ring-primary-orange focus:ring-offset-primary-950"
                disabled={isLoading}
              />
              <label htmlFor="remember" className="ml-2 text-sm">
                Remember me
              </label>
            </div>

            {/* Submit Button - USING SafeButton */}
            <SafeButton
              type="submit"
              isLoading={isLoading}
              variant="premium"
              className="w-full flex items-center justify-center gap-3"
            >
              <LogIn className="w-5 h-5" />
              {isLoading ? 'Accessing Premium...' : 'Login'}
            </SafeButton>
          </form>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => onSwitchView('signup')}
                className="bg-gradient-to-r from-primary-orange via-primary-gold to-primary-orange bg-clip-text text-transparent font-semibold hover:underline transition-all"
                disabled={isLoading}
              >
                Signup Premium
              </button>
            </p>
          </div>

          {/* Quick Features */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-gray-400 text-center mb-4">Quick Access Features</p>
            <div className="flex justify-center gap-4">
              <SafeButton
                variant="secondary"
                className="p-3"
                onClick={() => console.log('V2V clicked')}
              >
                <span className="text-sm font-semibold">V2V</span>
              </SafeButton>
              <SafeButton
                variant="danger"
                className="p-3"
                onClick={() => console.log('SOS clicked')}
              >
                <span className="text-sm font-semibold">SOS</span>
              </SafeButton>
              <SafeButton
                variant="primary"
                className="p-3"
                onClick={() => console.log('Zap clicked')}
              >
                <Zap className="w-4 h-4" />
              </SafeButton>
            </div>
          </div>
        </div>
      </div>

      {/* Security Note */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          <Shield className="w-4 h-4 inline mr-1" />
          Enterprise-grade security • Government partnership • AI-powered protection
        </p>
      </div>
    </motion.div>
  )
}
