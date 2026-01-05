'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'sw'

// Add translations object
const translations = {
  en: {
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    signup: 'Sign Up',
    hasAccount: 'Already have an account?',
    login: 'Log In',
    welcome: 'Welcome',
    dashboard: 'Dashboard',
    settings: 'Settings',
    profile: 'Profile',
    logout: 'Logout',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    create: 'Create',
    update: 'Update',
    search: 'Search',
    filter: 'Filter',
    // Add more English translations as needed
  },
  sw: {
    name: 'Jina',
    email: 'Barua Pepe',
    phone: 'Simu',
    password: 'Nenosiri',
    confirmPassword: 'Thibitisha Nenosiri',
    signup: 'Jisajili',
    hasAccount: 'Tayari una akaunti?',
    login: 'Ingia',
    welcome: 'Karibu',
    dashboard: 'Dashibodi',
    settings: 'Mipangilio',
    profile: 'Profaili',
    logout: 'Ondoka',
    save: 'Hifadhi',
    cancel: 'Ghairi',
    delete: 'Futa',
    edit: 'Hariri',
    create: 'Unda',
    update: 'Sasisha',
    search: 'Tafuta',
    filter: 'Chuja',
    // Add more Swahili translations as needed
  }
}

// Update interface to include t function
interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string  // Add this
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
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

  // Add t function
  const t = (key: string): string => {
    // Try to get translation for current language
    const langTranslations = translations[language]
    if (langTranslations && key in langTranslations) {
      return langTranslations[key as keyof typeof langTranslations]
    }
    
    // Fallback to English if key not found in current language
    const englishTranslations = translations.en
    if (key in englishTranslations) {
      return englishTranslations[key as keyof typeof englishTranslations]
    }
    
    // Return key itself if no translation found
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
