import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Abbi Labs — AI Agent Integration Skills',
  description: 'Production-ready AI agent integrations for Google Sheets, Slack, Notion, HubSpot, and Stripe. Built for OpenClaw.',
  metadataBase: new URL('https://abbilabs.xyz'),
  openGraph: {
    title: 'Abbi Labs',
    description: 'AI Agent Integration Skills',
    url: 'https://abbilabs.xyz',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
      </head>
      <body className="bg-white text-gray-900">
        <nav className="border-b border-gray-200 px-4 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">🤖 Abbi Labs</div>
            <div className="space-x-6">
              <a href="/" className="hover:underline">Home</a>
              <a href="/templates" className="hover:underline font-semibold text-blue-600">Templates</a>
              <a href="/skills" className="hover:underline">Free Skills</a>
              <a href="/blog" className="hover:underline">Blog</a>
            </div>
          </div>
        </nav>
        {children}
        <Analytics />
        <footer className="border-t border-gray-200 mt-12 py-8 text-center text-gray-600 text-sm">
          <div className="max-w-6xl mx-auto">
            <p>© 2026 Abbi Labs. All rights reserved.</p>
            <p className="mt-2">AI agent skills for OpenClaw. Build production AI agents fast.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
