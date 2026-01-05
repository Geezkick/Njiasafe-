'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'

interface SafeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'danger' | 'premium'
  isLoading?: boolean
}

export default function SafeButton({
  children,
  onClick,
  disabled,
  className = '',
  variant = 'primary',
  isLoading = false,
  type = 'button',
  ...props
}: SafeButtonProps) {
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`SafeButton clicked: ${type}`, { disabled, isLoading })
    
    if (disabled || isLoading) {
      e.preventDefault()
      e.stopPropagation()
      console.log('Button is disabled or loading, click blocked')
      return
    }
    
    if (onClick) {
      onClick(e)
    }
  }
  
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 px-6 py-3',
    secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/20 px-6 py-3',
    danger: 'bg-red-600 text-white hover:bg-red-700 px-6 py-3',
    premium: 'btn-premium px-8 py-4'
  }
  
  const loadingClasses = isLoading ? 'opacity-50 cursor-not-allowed' : ''
  
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${variantClasses[variant]} ${loadingClasses} ${className}`}
      style={{
        pointerEvents: (disabled || isLoading) ? 'none' : 'auto',
        cursor: (disabled || isLoading) ? 'not-allowed' : 'pointer',
        zIndex: 1000
      }}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  )
}
