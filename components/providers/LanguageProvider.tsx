'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'sw'

// Complete translations including dashboard terms
const translations = {
  en: {
    // Common
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    signup: 'Sign Up',
    hasAccount: 'Already have an account?',
    login: 'Log In',
    backToLogin: 'Back to Login',
    resetPassword: 'Reset Password',
    sendResetLink: 'Send Reset Link',
    
    // Dashboard
    dashboard: 'Dashboard',
    safety: 'Safety',
    v2v: 'V2V',
    analytics: 'Analytics',
    community: 'Community',
    profile: 'Profile',
    settings: 'Settings',
    notifications: 'Notifications',
    logout: 'Logout',
    upgrade: 'Upgrade',
    premium: 'Premium',
    
    // Navigation
    drive: 'Drive',
    cycle: 'Cycle',
    pedestrian: 'Walk',
    mode: 'Mode',
    
    // Actions
    findRoute: 'Find Route',
    emergencySOS: 'Emergency SOS',
    quickActions: 'Quick Actions',
    
    // Stats
    distanceToday: 'Distance Today',
    timeSaved: 'Time Saved',
    safetyScore: 'Safety Score',
    v2vConnected: 'V2V Connected',
    
    // Messages
    welcomeBack: 'Welcome back',
    excellentDriving: 'Excellent driving',
    enjoyingPremium: 'Enjoying Premium?',
    upgradeNow: 'Upgrade Now',
    viewProfile: 'View Profile',
  },
  sw: {
    // Common
    name: 'Jina',
    email: 'Barua Pepe',
    phone: 'Simu',
    password: 'Nenosiri',
    confirmPassword: 'Thibitisha Nenosiri',
    signup: 'Jisajili',
    hasAccount: 'Tayari una akaunti?',
    login: 'Ingia',
    backToLogin: 'Rudi kwenye Kuingia',
    resetPassword: 'Weka Upya Nenosiri',
    sendResetLink: 'Tuma Kiungo cha Kuweka Upya',
    
    // Dashboard
    dashboard: 'Dashibodi',
    safety: 'Usalama',
    v2v: 'Gari-kwa-Gari',
    analytics: 'Takwimu',
    community: 'Jumuiya',
    profile: 'Wasifu',
    settings: 'Mipangilio',
    notifications: 'Arifa',
    logout: 'Ondoka',
    upgrade: 'Boresha',
    premium: 'Bora',
    
    // Navigation
    drive: 'Endesha',
    cycle: 'Baiskeli',
    pedestrian: 'Tembea',
    mode: 'Njia',
    
    // Actions
    findRoute: 'Tafuta Njia',
    emergencySOS: 'Dharura SOS',
    quickActions: 'Vitendo Vya Haraka',
    
    // Stats
    distanceToday: 'Umbali Leo',
    timeSaved: 'Muda Uliookoka',
    safetyScore: 'Alama ya Usalama',
    v2vConnected: 'Gari Zilizounganishwa',
    
    // Messages
    welcomeBack: 'Karibu tena',
    excellentDriving: 'Kuendesha bora',
    enjoyingPremium: 'Unafurahia Bora?',
    upgradeNow: 'Boresha Sasa',
    viewProfile: 'Angalia Wasifu',
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLang = localStorage.getItem('njiasafe-language') as Language
    if (savedLang && (savedLang === 'en' || savedLang === 'sw')) {
      setLanguage(savedLang)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('njiasafe-language', language)
  }, [language])

  const t = (key: string): string => {
    const langTranslations = translations[language]
    if (langTranslations && key in langTranslations) {
      return langTranslations[key as keyof typeof langTranslations]
    }
    
    const englishTranslations = translations.en
    if (key in englishTranslations) {
      return englishTranslations[key as keyof typeof englishTranslations]
    }
    
    return key
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
