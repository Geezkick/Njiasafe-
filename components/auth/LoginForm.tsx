'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Mail, Lock, Eye, EyeOff, LogIn, AlertCircle, Shield, Zap } from 'lucide-react'
import { useAuth } from '../providers/AuthProvider'
import { useLanguage } from '../providers/LanguageProvider'
import { toast } from 'sonner'

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
  const { t } = useLanguage()

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
      <div className="card-premium p-8 relative overflow-hidden">
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
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-purple rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gradient-premium mb-2">Welcome Back</h2>
            <p className="text-gray-400">Access your premium dashboard</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-orange" />
                {t('email')}
              </label>
              <div className="relative">
                <input
                  {...register('email')}
                  type="email"
                  className="input-premium pl-12"
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
                  {t('password')}
                </label>
                <button
                  type="button"
                  onClick={() => onSwitchView('forgot')}
                  className="text-sm text-primary-orange hover:text-primary-gold transition-colors"
                  disabled={isLoading}
                >
                  {t('forgotPassword')}
                </button>
              </div>
              <div className="relative">
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  className="input-premium pl-12 pr-12"
                  placeholder="••••••••"
                  disabled={isLoading}
                />
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
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
                className="rounded bg-white/10 border-white/20 text-primary-orange focus:ring-primary-orange focus:ring-offset-primary-darkblue"
                disabled={isLoading}
              />
              <label htmlFor="remember" className="ml-2 text-sm">
                {t('rememberMe')}
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full btn-premium flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <LogIn className="w-5 h-5" />
              {isLoading ? 'Accessing Premium...' : t('login')}
            </motion.button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              {t('noAccount')}{' '}
              <button
                onClick={() => onSwitchView('signup')}
                className="text-gradient-premium font-semibold hover:underline transition-all"
                disabled={isLoading}
              >
                {t('signup')} Premium
              </button>
            </p>
          </div>

          {/* Quick Features */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-gray-400 text-center mb-4">Quick Access Features</p>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-gradient-to-br from-primary-blue to-primary-purple shadow-glass hover:shadow-premium"
                disabled={isLoading}
              >
                <span className="text-sm font-semibold">V2V</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-gradient-to-br from-red-600 to-red-500 shadow-sos hover:shadow-red-500/50"
                disabled={isLoading}
              >
                <span className="text-sm font-semibold">SOS</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-gradient-to-br from-primary-orange to-primary-gold shadow-glass hover:shadow-premium"
                disabled={isLoading}
              >
                <Zap className="w-4 h-4" />
              </motion.button>
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
