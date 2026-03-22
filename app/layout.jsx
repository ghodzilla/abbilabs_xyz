import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Script from 'next/script'

export const metadata = {
  title: 'Abbi Labs — AI Agents for Pipeline, Payments & Support | Buy Once, Own Forever',
  description: 'Production-ready AI agent templates for HubSpot, Stripe, and Intercom. Lead scoring, dispute alerts, and support automation. One-time purchase. Works with any LLM.',
  metadataBase: new URL('https://abbilabs.xyz'),
  openGraph: {
    title: 'Abbi Labs — AI Agents for Pipeline, Payments & Support | Buy Once, Own Forever',
    description: 'Production-ready AI agent templates for HubSpot, Stripe, and Intercom. Lead scoring, dispute alerts, and support automation. One-time purchase. Works with any LLM.',
    url: 'https://abbilabs.xyz',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/brand/logo-icon.svg" />
      </head>
      <body style={{ background: '#fff', color: '#111827', margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
        <nav style={{ borderBottom: '1px solid #e5e7eb', padding: '1rem' }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#111827' }}>
              <img src="/brand/logo-icon.svg" alt="Abbi Labs" style={{ width: '2rem', height: '2rem', borderRadius: '0.5rem' }} />
              <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>Abbi Labs</span>
            </a>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <a href="/" style={{ textDecoration: 'none', color: '#111827', fontSize: '0.95rem' }}>Home</a>
              <a href="/templates" style={{ textDecoration: 'none', color: '#2563eb', fontWeight: 600, fontSize: '0.95rem' }}>Templates</a>
              <a href="/skills" style={{ textDecoration: 'none', color: '#111827', fontSize: '0.95rem' }}>Free Skills</a>
              <a href="/agencies" style={{ textDecoration: 'none', color: '#111827', fontSize: '0.95rem' }}>Agencies</a>
              <a href="/blog" style={{ textDecoration: 'none', color: '#111827', fontSize: '0.95rem' }}>Blog</a>
              <a href="/newsletter" style={{ textDecoration: 'none', color: '#111827', fontSize: '0.95rem' }}>Newsletter</a>
              <a href="/faq" style={{ textDecoration: 'none', color: '#111827', fontSize: '0.95rem' }}>FAQ</a>
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
        <footer style={{ borderTop: '1px solid #e5e7eb', marginTop: '3rem', padding: '2.5rem 1rem', color: '#6b7280', fontSize: '0.875rem' }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <img src="/brand/logo-icon.svg" alt="Abbi Labs" style={{ width: '1.75rem', height: '1.75rem', borderRadius: '0.375rem' }} />
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827' }}>Abbi Labs</span>
                </div>
                <p style={{ color: '#6b7280', fontSize: '0.75rem' }}>AI agents for pipeline, payments &amp; support — built for founders.</p>
              </div>
              <div>
                <div style={{ fontWeight: 600, color: '#111827', marginBottom: '0.75rem' }}>Products</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a href="/templates/ai-ceo-blueprint" style={{ color: '#6b7280', textDecoration: 'none' }}>AI CEO Blueprint Kit</a>
                  <a href="/templates/ai-sales-agent" style={{ color: '#6b7280', textDecoration: 'none' }}>AI Sales Agent</a>
                  <a href="/templates/ai-customer-support-agent" style={{ color: '#6b7280', textDecoration: 'none' }}>AI Support Agent</a>
                  <a href="/templates/ai-payment-monitor" style={{ color: '#6b7280', textDecoration: 'none' }}>AI Payment Monitor</a>
                  <a href="/skills" style={{ color: '#6b7280', textDecoration: 'none' }}>Free Skills</a>
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 600, color: '#111827', marginBottom: '0.75rem' }}>Solutions</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a href="/hubspot-pipeline-automation" style={{ color: '#6b7280', textDecoration: 'none' }}>HubSpot Automation</a>
                  <a href="/stripe-dispute-monitor" style={{ color: '#6b7280', textDecoration: 'none' }}>Stripe Dispute Monitor</a>
                  <a href="/ai-customer-support-automation" style={{ color: '#6b7280', textDecoration: 'none' }}>Support Automation</a>
                  <a href="/agencies" style={{ color: '#6b7280', textDecoration: 'none' }}>For Agencies</a>
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 600, color: '#111827', marginBottom: '0.75rem' }}>Company</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a href="/blog" style={{ color: '#6b7280', textDecoration: 'none' }}>Blog</a>
                  <a href="/faq" style={{ color: '#6b7280', textDecoration: 'none' }}>FAQ</a>
                  <a href="mailto:support@abbilabs.xyz" style={{ color: '#6b7280', textDecoration: 'none' }}>Support</a>
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 600, color: '#111827', marginBottom: '0.75rem' }}>Newsletter</div>
                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.5rem' }}>The AI CEO Brief — weekly insights from an AI-operated startup.</p>
                <a href="/newsletter" style={{ color: '#2563eb', textDecoration: 'none', fontSize: '0.75rem', display: 'block', marginBottom: '0.25rem' }}>Read past issues →</a>
                <a href="https://abbilabs.beehiiv.com" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none', fontSize: '0.75rem' }}>Subscribe free →</a>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.75rem', color: '#9ca3af' }}>
              © 2026 Abbi Labs. All rights reserved. · <a href="mailto:support@abbilabs.xyz" style={{ color: '#9ca3af', textDecoration: 'none' }}>support@abbilabs.xyz</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
