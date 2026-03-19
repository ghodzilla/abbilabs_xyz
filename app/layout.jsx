import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Script from 'next/script'

export const metadata = {
  title: 'Abbi Labs — AI Agents That Do Real Work',
  description: 'Production-ready AI agent templates for founders. Automate your sales pipeline, payment monitoring, and more. Works with any LLM.',
  metadataBase: new URL('https://abbilabs.xyz'),
  openGraph: {
    title: 'Abbi Labs — AI Agents That Do Real Work',
    description: 'Production-ready AI agent templates for founders. Works with Claude, GPT, Gemini, LangChain, and more.',
    url: 'https://abbilabs.xyz',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="/brand/logo-icon.svg" />
      </head>
      <body className="bg-white text-gray-900">
        <nav className="border-b border-gray-200 px-4 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <a href="/" className="flex items-center gap-2">
              <img src="/brand/logo-icon.svg" alt="Abbi Labs" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold">Abbi Labs</span>
            </a>
            <div className="space-x-6">
              <a href="/" className="hover:underline">Home</a>
              <a href="/templates" className="hover:underline font-semibold text-blue-600">Templates</a>
              <a href="/skills" className="hover:underline">Free Skills</a>
              <a href="/blog" className="hover:underline">Blog</a>
              <a href="/faq" className="hover:underline">FAQ</a>
            </div>
          </div>
        </nav>
        {children}
        <Analytics />
        <SpeedInsights />
        {/* Google Analytics 4 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-RG0QE0RKT7" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RG0QE0RKT7', {
            page_path: window.location.pathname,
          });
        `}</Script>
        <footer className="border-t border-gray-200 mt-12 py-10 text-gray-600 text-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                <img src="/brand/logo-icon.svg" alt="Abbi Labs" className="w-7 h-7 rounded-md" />
                <span className="text-lg font-bold text-gray-900">Abbi Labs</span>
              </div>
                <p className="text-gray-500 text-xs">AI agents that do real work — built for founders.</p>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-3">Products</div>
                <div className="space-y-2">
                  <a href="/templates/ai-ceo-blueprint" className="block hover:underline">AI CEO Blueprint Kit</a>
                  <a href="/templates/ai-sales-agent" className="block hover:underline">AI Sales Agent</a>
                  <a href="/templates/ai-customer-support-agent" className="block hover:underline">AI Customer Support Agent</a>
                  <a href="/templates/ai-payment-monitor" className="block hover:underline">AI Payment Monitor</a>
                  <a href="/skills" className="block hover:underline">Free Skills</a>
                </div>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-3">Solutions</div>
                <div className="space-y-2">
                  <a href="/hubspot-pipeline-automation" className="block hover:underline">HubSpot Automation</a>
                  <a href="/stripe-dispute-monitor" className="block hover:underline">Stripe Dispute Monitor</a>
                  <a href="/ai-customer-support-automation" className="block hover:underline">Support Automation</a>
                </div>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-3">Company</div>
                <div className="space-y-2">
                  <a href="/blog" className="block hover:underline">Blog</a>
                  <a href="/faq" className="block hover:underline">FAQ</a>
                  <a href="mailto:support@abbilabs.xyz" className="block hover:underline">Support</a>
                </div>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-3">Newsletter</div>
                <p className="text-xs text-gray-500 mb-2">The AI Operator — weekly tactics for AI-powered founders.</p>
                <a href="https://abbilabs.beehiiv.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs">Subscribe free →</a>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
              © 2026 Abbi Labs. All rights reserved. · <a href="mailto:support@abbilabs.xyz" className="hover:underline">support@abbilabs.xyz</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
