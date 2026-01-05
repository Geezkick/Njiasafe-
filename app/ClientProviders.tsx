'use client'

import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { LanguageProvider } from '@/components/providers/LanguageProvider'
import { AuthProvider } from '@/components/providers/AuthProvider'
import { SocketProvider } from '@/components/providers/SocketProvider'
import { Toaster } from 'sonner'

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <SocketProvider>
            {children}
            <Toaster 
              position="top-right"
              toastOptions={{
                className: 'glass-effect border border-white/10',
                duration: 4000,
              }}
              theme="dark"
            />
          </SocketProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
