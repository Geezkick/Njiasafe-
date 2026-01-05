'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import PremiumHeader from './PremiumHeader'
import PremiumFooter from './PremiumFooter'
import BackgroundEffects from './BackgroundEffects'

interface PremiumLayoutProps {
  children: ReactNode
  showHeader?: boolean
  showFooter?: boolean
}

export default function PremiumLayout({
  children,
  showHeader = true,
  showFooter = true,
}: PremiumLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <BackgroundEffects />
      
      {/* Content */}
      <div className="relative z-10">
        {showHeader && <PremiumHeader />}
        
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          {children}
        </motion.main>
        
        {showFooter && <PremiumFooter />}
      </div>
    </div>
  )
}
