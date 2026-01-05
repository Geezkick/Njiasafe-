'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Mail, ArrowLeft, Send, AlertCircle } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'
import { toast } from 'sonner'

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
})

type FormData = yup.InferType<typeof schema>

interface ForgotPasswordProps {
  onSwitchView: (view: 'login') => void
}

export default function ForgotPassword({ onSwitchView }: ForgotPasswordProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useLanguage()

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    try {
      // TODO: Implement actual password reset API
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSubmitted(true)
      reset()
      toast.success('Password reset link sent to your email!')
    } catch (error) {
      toast.error('Failed to send reset link. Please try again.')
    } finally {
      setIsLoading(false)
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
        {/* Back Button */}
        <button
          onClick={() => onSwitchView('login')}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors"
          disabled={isLoading}
        >
          <ArrowLeft className="w-4 h-4" />
          {t('backToLogin')}
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 rounded-full border-2 border-primary-purple/30"
            />
            <div className="w-20 h-20 rounded-full border-4 border-primary-blue border-t-primary-purple animate-spin-slow">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-gold rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-darkblue" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gradient mb-2">{t('resetPassword')}</h2>
          <p className="text-gray-400">
            Enter your email address and we'll send you a link to reset your password
          </p>
        </div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Check Your Email</h3>
            <p className="text-gray-400 mb-6">
              We've sent a password reset link to your email address. Please check your inbox and follow the instructions.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false)
                onSwitchView('login')
              }}
              className="btn-primary"
            >
              Return to Login
            </button>
          </motion.div>
        ) : (
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

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              {isLoading ? 'Sending...' : t('sendResetLink')}
            </motion.button>
          </form>
        )}

        {/* Security Note */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-300 font-medium mb-1">Security Notice</p>
              <p className="text-xs text-gray-400">
                For security reasons, the password reset link will expire in 1 hour. 
                If you don't receive the email, check your spam folder or contact support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
