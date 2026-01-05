import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { LanguageProvider } from '@/components/providers/LanguageProvider'
import { AuthProvider } from '@/components/providers/AuthProvider'
import { SocketProvider } from '@/components/providers/SocketProvider'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NjiaSafe Premium - Smart Navigation Built for Africa',
  description: 'Premium navigation app using real-time data and AI to ensure safety on African roads',
  keywords: ['navigation', 'Africa', 'road safety', 'smart navigation', 'V2V', 'SOS', 'premium'],
  authors: [{ name: 'NjiaSafe Team' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://njiasafe.com',
    title: 'NjiaSafe Premium',
    description: 'Smart Navigation Built for Africa',
    siteName: 'NjiaSafe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NjiaSafe Premium',
    description: 'Smart Navigation Built for Africa',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className={`${inter.className} antialiased`}>
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
      </body>
    </html>
  )
}
