'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'sw'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    'welcome': 'Welcome to NjiaSafe',
    'slogan': 'Smart Navigation Built for Africa',
    'login': 'Login',
    'signup': 'Sign Up',
    'email': 'Email',
    'password': 'Password',
    'forgotPassword': 'Forgot Password?',
    'rememberMe': 'Remember me',
    'noAccount': "Don't have an account?",
    'hasAccount': 'Already have an account?',
    'name': 'Full Name',
    'phone': 'Phone Number',
    'confirmPassword': 'Confirm Password',
    'resetPassword': 'Reset Password',
    'sendResetLink': 'Send Reset Link',
    'backToLogin': 'Back to Login',
    'dashboard': 'Dashboard',
    'profile': 'Profile',
    'settings': 'Settings',
    'logout': 'Logout',
    'mode': 'Navigation Mode',
    'drive': 'Drive',
    'cycle': 'Cycle',
    'pedestrian': 'Walk',
    'sos': 'SOS Emergency',
    'v2v': 'Vehicle-to-Vehicle',
    'analytics': 'Analytics',
    'community': 'Community',
    'alerts': 'Alerts',
    'routes': 'Routes',
    'safety': 'Safety',
    'premium': 'Premium',
    'free': 'Free',
    'subscribe': 'Subscribe',
    'payment': 'Payment',
    'mpesa': 'M-Pesa',
    'card': 'Card',
    'government': 'Government',
    'monitoring': 'Monitoring',
    'realTime': 'Real-time Data',
  },
  sw: {
    'welcome': 'Karibu NjiaSafe',
    'slogan': 'Urambazaji Mjanja Ulioundwa kwa Afrika',
    'login': 'Ingia',
    'signup': 'Jisajili',
    'email': 'Barua Pepe',
    'password': 'Nenosiri',
    'forgotPassword': 'Umesahau nenosiri?',
    'rememberMe': 'Nikumbuke',
    'noAccount': 'Huna akaunti?',
    'hasAccount': 'Tayari una akaunti?',
    'name': 'Jina Kamili',
    'phone': 'Nambari ya Simu',
    'confirmPassword': 'Thibitisha Nenosiri',
    'resetPassword': 'Weka Upya Nenosiri',
    'sendResetLink': 'Tuma Kiungo cha Kurekebisha',
    'backToLogin': 'Rudi kwenye Kuingia',
    'dashboard': 'Dashibodi',
    'profile': 'Wasifu',
    'settings': 'Mipangilio',
    'logout': 'Ondoka',
    'mode': 'Hali ya Urambazaji',
    'drive': 'Endesha',
    'cycle': 'Baiskeli',
    'pedestrian': 'Tembea',
    'sos': 'Dharura SOS',
    'v2v': 'Gari-kwa-Gari',
    'analytics': 'Uchambuzi',
    'community': 'Jumuiya',
    'alerts': 'Arifu',
    'routes': 'Njia',
    'safety': 'Usalama',
    'premium': 'Premium',
    'free': 'Bure',
    'subscribe': 'Jiandikishe',
    'payment': 'Malipo',
    'mpesa': 'M-Pesa',
    'card': 'Kadi',
    'government': 'Serikali',
    'monitoring': 'Ufuatiliaji',
    'realTime': 'Data ya Wakati Halisi',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLang = localStorage.getItem('njiasafe-language') as Language
    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('njiasafe-language', language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
