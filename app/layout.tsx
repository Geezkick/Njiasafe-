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
  title: 'NjiaSafe - Smart Navigation Built for Africa',
  description: 'Premium navigation app using real-time data for African roads to ensure safety and minimize road carnage',
  keywords: ['navigation', 'Africa', 'road safety', 'smart navigation', 'traffic', 'V2V'],
  authors: [{ name: 'NjiaSafe Team' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-primary-darkblue text-white antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <AuthProvider>
              <SocketProvider>
                <div className="min-h-screen bg-gradient-to-br from-primary-darkblue via-primary-black to-primary-blue">
                  {children}
                </div>
                <Toaster 
                  position="top-right"
                  toastOptions={{
                    className: 'bg-white/10 backdrop-blur-lg border border-white/20 text-white',
                  }}
                />
              </SocketProvider>
            </AuthProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
