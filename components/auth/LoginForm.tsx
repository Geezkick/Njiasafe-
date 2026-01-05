'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Mail, Lock, Eye, EyeOff, LogIn, AlertCircle } from 'lucide-react'
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
  const { login, isLoading } = useAuth()
  const { t } = useLanguage()

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      await login(data.email, data.password)
      toast.success('Login successful!')
      reset()
    } catch (error) {
      toast.error('Login failed. Please check your credentials.')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-md"
    >
      <div className="card-premium p-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 rounded-full border-2 border-primary-orange/30"
            />
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
          <h2 className="text-3xl font-bold text-gradient mb-2">{t('welcome')}</h2>
          <p className="text-gray-400">{t('slogan')}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">{t('email')}</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                {...register('email')}
                type="email"
                className="input-field pl-12"
                placeholder="user@example.com"
                disabled={isLoading}
              />
            </div>
            {errors.email && (
              <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium">{t('password')}</label>
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
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                className="input-field pl-12 pr-12"
                placeholder="••••••••"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white disabled:opacity-50"
                disabled={isLoading}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="rounded bg-white/10 border-white/20 text-primary-orange focus:ring-primary-orange"
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
            className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <LogIn className="w-5 h-5" />
            {isLoading ? 'Logging in...' : t('login')}
          </motion.button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            {t('noAccount')}{' '}
            <button
              onClick={() => onSwitchView('signup')}
              className="text-primary-orange hover:text-primary-gold font-medium transition-colors"
              disabled={isLoading}
            >
              {t('signup')}
            </button>
          </p>
        </div>

        {/* Quick Features */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-gray-400 text-center mb-4">Quick Access Features</p>
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-xl bg-primary-blue/50 hover:bg-primary-blue border border-primary-blue/50 transition-colors"
              disabled={isLoading}
            >
              <span className="text-sm font-semibold">V2V</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 transition-colors"
              disabled={isLoading}
            >
              <span className="text-sm font-semibold">SOS</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-xl bg-primary-purple/50 hover:bg-primary-purple border border-primary-purple/50 transition-colors"
              disabled={isLoading}
            >
              <span className="text-sm font-semibold">AI</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>By logging in, you agree to our Terms of Service and Privacy Policy</p>
        <p className="mt-2">© 2024 NjiaSafe. {t('slogan')}</p>
      </div>
    </motion.div>
  )
}
