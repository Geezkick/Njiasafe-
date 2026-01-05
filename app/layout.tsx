import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClientProviders } from './ClientProviders'
import ButtonFix from '@/components/ButtonFix'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'NjiaSafe Premium - Smart Navigation Built for Africa',
  description: 'Premium navigation app using real-time data and AI to ensure safety on African roads',
  keywords: ['navigation', 'Africa', 'road safety', 'smart navigation', 'V2V', 'SOS', 'premium'],
  authors: [{ name: 'NjiaSafe Team' }],
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
        {/* Emergency button fix styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            button, 
            [type="button"],
            [type="submit"],
            [type="reset"] {
              pointer-events: auto !important;
              cursor: pointer !important;
              position: relative !important;
              z-index: 1000 !important;
            }
            
            /* Disable Framer Motion click blocking */
            [data-framer-motion-component] {
              pointer-events: auto !important;
            }
            
            /* Ensure all interactive elements are clickable */
            button:not([disabled]),
            [role="button"]:not([disabled]),
            a:not([disabled]) {
              pointer-events: auto !important;
              cursor: pointer !important;
            }
          `
        }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ClientProviders>
          <ButtonFix />
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
