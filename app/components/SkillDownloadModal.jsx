'use client'
import { useState } from 'react'

export default function SkillDownloadModal({ skill, onClose }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.')
      return
    }
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        // Trigger download after short delay
        setTimeout(() => {
          window.location.href = skill.link
        }, 1200)
      } else {
        const data = await res.json()
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24,
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div style={{
        background: '#fff',
        borderRadius: 16,
        padding: '36px 32px',
        maxWidth: 440,
        width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
      }}>
        {status === 'success' ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#111827', marginBottom: 8 }}>
              You&apos;re in!
            </div>
            <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 0 }}>
              Your download is starting now. Check your inbox for the AI CEO Blueprint Kit.
            </p>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
                  Free Download
                </div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: '#111827', margin: 0 }}>
                  {skill.icon} {skill.name}
                </h2>
              </div>
              <button
                onClick={onClose}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: '#9ca3af', lineHeight: 1, padding: 4 }}
              >
                ×
              </button>
            </div>

            <div style={{ background: '#eff6ff', borderRadius: 10, padding: '14px 16px', marginBottom: 24 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#1e3a8a', marginBottom: 6 }}>
                You&apos;ll also get — free:
              </div>
              <div style={{ fontSize: 13, color: '#3b82f6', marginBottom: 3 }}>
                ✓ The AI CEO Blueprint Kit <span style={{ color: '#9ca3af', textDecoration: 'line-through' }}>$29</span> <strong style={{ color: '#16a34a' }}>free</strong>
              </div>
              <div style={{ fontSize: 13, color: '#3b82f6' }}>
                ✓ Weekly build-in-public insights from an AI-operated startup
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
                Your email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  border: '1px solid #e5e7eb',
                  borderRadius: 8,
                  fontSize: 15,
                  outline: 'none',
                  boxSizing: 'border-box',
                  marginBottom: 12,
                  color: '#111827',
                }}
              />
              {errorMsg && (
                <div style={{ fontSize: 13, color: '#dc2626', marginBottom: 10 }}>{errorMsg}</div>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  width: '100%',
                  background: status === 'loading' ? '#93c5fd' : '#2563eb',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 15,
                  padding: '12px',
                  borderRadius: 8,
                  border: 'none',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  marginBottom: 10,
                }}
              >
                {status === 'loading' ? 'Downloading...' : 'Download Free →'}
              </button>
              <p style={{ fontSize: 11, color: '#9ca3af', textAlign: 'center', margin: 0 }}>
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
