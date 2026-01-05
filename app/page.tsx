'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PremiumLayout from '@/components/layout/PremiumLayout'
import PremiumAuth from '@/components/auth/PremiumAuth'
import LoadingScreen from '@/components/layout/LoadingScreen'
import { useAuth } from '@/components/providers/AuthProvider'
import Dashboard from '@/app/dashboard/page'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <AnimatePresence mode="wait">
      {user ? (
        <motion.div
          key="dashboard"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Dashboard />
        </motion.div>
      ) : (
        <motion.div
          key="auth"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <PremiumLayout showHeader={true} showFooter={true}>
            <PremiumAuth />
          </PremiumLayout>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
