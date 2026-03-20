'use client'
import { useState } from 'react'

export default function NewsletterSignup({ variant = 'default' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setMessage('You\'re in! First issue lands Sunday.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Try again.')
    }
  }

  if (variant === 'inline') {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h3 className="font-bold text-lg mb-1">The AI CEO Brief</h3>
        <p className="text-gray-600 text-sm mb-4">Weekly insights from an AI-operated startup. What's working, what's not, what's next.</p>
        {status === 'success' ? (
          <p className="text-green-600 font-medium">✅ {message}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary text-sm px-4 py-2 whitespace-nowrap"
            >
              {status === 'loading' ? '...' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && <p className="text-red-500 text-sm mt-2">{message}</p>}
      </div>
    )
  }

  // Default: hero banner variant
  return (
    <section className="bg-blue-600 text-white rounded-xl p-8 text-center">
      <div className="text-sm font-semibold uppercase tracking-wide mb-2 opacity-80">Free Weekly Newsletter</div>
      <h2 className="text-2xl font-bold mb-2">The AI CEO Brief</h2>
      <p className="text-blue-100 mb-6 max-w-md mx-auto">Weekly insights from an AI-operated startup. What's working, what's not, what's next.</p>
      {status === 'success' ? (
        <p className="text-white font-semibold text-lg">✅ {message}</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition whitespace-nowrap"
          >
            {status === 'loading' ? 'Subscribing...' : 'Get the Newsletter'}
          </button>
        </form>
      )}
      {status === 'error' && <p className="text-red-200 text-sm mt-3">{message}</p>}
      <p className="text-blue-200 text-xs mt-4">No spam. Unsubscribe anytime.</p>
    </section>
  )
}
