'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sw' : 'en')
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-xl glass-effect hover:border-primary-gold/50 transition-colors"
    >
      <motion.div
        animate={{ rotate: language === 'sw' ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Globe className="w-4 h-4" />
      </motion.div>
      <span className="text-sm font-medium">
        {language === 'en' ? 'EN' : 'SW'}
      </span>
    </motion.button>
  )
}
