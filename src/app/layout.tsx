import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Scaler Knowledge Hub',
  description: 'A curated Q&A knowledge base for developers. Find answers to programming, system design, and interview questions.',
  openGraph: {
    title: 'Scaler Knowledge Hub',
    description: 'A curated Q&A knowledge base for developers',
    siteName: 'Scaler Knowledge Hub',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <header className="bg-scaler-dark text-white">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <a href="/knowledge" className="flex items-center gap-2">
                {/* Scaler Logo - Arrow/Graduation Cap */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xl font-bold tracking-tight">
                  SCALER
                </span>
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="/knowledge"
                  className="hover:text-scaler-blue transition-colors"
                >
                  Browse Questions
                </a>
                <button className="bg-scaler-blue hover:bg-scaler-blue-dark px-4 py-2 font-medium transition-colors">
                  Sign In
                </button>
              </div>
            </nav>
          </div>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-scaler-dark text-white py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-scaler-gray-light">
              © {new Date().getFullYear()} Scaler Knowledge Hub. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
