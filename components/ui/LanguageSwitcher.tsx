'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'
import { toast } from 'sonner'

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'sw' : 'en'
    console.log(`Language switched to: ${newLang}`)
    setLanguage(newLang)
    
    // Show toast notification
    toast.success(
      language === 'en' 
        ? 'Lugha imebadilishwa kuwa Kiswahili' 
        : 'Language changed to English',
      {
        icon: '🌍',
        duration: 2000,
      }
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-4 py-2 rounded-xl glass-effect hover:border-primary-gold/50 transition-colors"
        title={language === 'en' ? 'Switch to Kiswahili' : 'Badilisha lugha kuwa Kiingereza'}
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
        <span className="text-xs opacity-70">
          {language === 'en' ? 'SW' : 'EN'}
        </span>
      </button>
    </motion.div>
  )
}
