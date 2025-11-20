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
              <a href="/knowledge" className="flex items-center gap-3">
                {/* Scaler Logo */}
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" fill="#2563EB"/>
                  <path d="M12 28V12h4v12h8v4H12z" fill="white"/>
                  <path d="M20 12h8v4h-8v-4z" fill="white"/>
                </svg>
                <span className="text-xl font-bold">
                  <span className="text-scaler-blue">Scaler</span> Knowledge Hub
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
