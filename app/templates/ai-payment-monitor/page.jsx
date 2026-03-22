'use client';

async function handleCheckout(product) {
  const res = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ product }),
  });
  const data = await res.json();
  if (data.url) window.location.href = data.url;
}

export default function AIPaymentMonitorPage() {
  return (
    <main style={{ maxWidth: '56rem', margin: '0 auto', padding: '3rem 1rem' }}>

      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280', marginBottom: '1.5rem' }}>
        <a href="/templates" style={{ color: '#6b7280', textDecoration: 'none' }}>Templates</a>
        <span>/</span>
        <span>AI Payment Monitor</span>
      </div>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '18rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#111827', lineHeight: 1.2, marginBottom: '0.75rem' }}>
              Your Stripe account, watched 24/7.
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '1rem' }}>
              Dispute alerts. Failed payments. Revenue summaries. All in Slack.<br />
              <strong style={{ color: '#111827' }}>$39 one-time. Setup in 5 minutes. No subscription.</strong>
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '0.8rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 600 }}>✅ Production Tested</span>
              <span style={{ background: '#fef9c3', color: '#a16207', fontSize: '0.8rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 600 }}>⚡ 5-Minute Setup</span>
              <span style={{ background: '#f3e8ff', color: '#7e22ce', fontSize: '0.8rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 600 }}>Zero Dependencies</span>
            </div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: '#2563eb' }}>$39</div>
            <div style={{ color: '#6b7280', marginBottom: '0.75rem', fontSize: '0.875rem' }}>one-time · own forever</div>
            <button
              onClick={() => handleCheckout('ai-payment-monitor')}
              style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '0.875rem 2rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', width: '100%' }}
            >
              Buy Now — $39
            </button>
            <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>30-day money-back guarantee</p>
          </div>
        </div>
      </div>

      {/* The problem */}
      <section style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '2.5rem' }}>
        <p style={{ color: '#b91c1c', lineHeight: 1.7, margin: 0 }}>
          A Stripe dispute has a <strong>7-day response window</strong>. Miss it and you auto-lose the money. Your dispute rate goes up. Stripe starts watching you more closely. Most founders find out about disputes when they remember to check Stripe. That might be every few days. That might be too late.
        </p>
        <p style={{ color: '#b91c1c', lineHeight: 1.7, marginTop: '0.75rem', marginBottom: 0 }}>
          The AI Payment Monitor watches your Stripe account around the clock and sends you a Slack message the moment something needs your attention.
        </p>
      </section>

      {/* What it does */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>What it does</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { icon: '🚨', title: 'Instant dispute alerts', desc: 'Customer email, amount, reason, deadline, and a direct link to respond — the moment a dispute opens.', urgent: true },
            { icon: '❌', title: 'Failed payment clustering', desc: 'Spots patterns that could indicate fraud. Every failure logged regardless.' },
            { icon: '📉', title: 'Subscription cancellation alerts', desc: 'Know the moment a customer churns, with revenue impact.' },
            { icon: '↩️', title: 'Refund rate monitoring', desc: 'Early warning if something\'s going wrong. Alerts when rolling 7-day refund rate exceeds your threshold.' },
            { icon: '📊', title: 'Daily revenue summary', desc: 'Yesterday\'s numbers in Slack by 8am. Revenue, failed payments, open disputes — one message.' },
          ].map((item) => (
            <div key={item.title} style={{ border: `1px solid ${item.urgent ? '#fecaca' : '#e5e7eb'}`, background: item.urgent ? '#fef2f2' : '#fff', borderRadius: '0.5rem', padding: '1rem', display: 'flex', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
              <div>
                <h3 style={{ fontWeight: 700, color: '#111827', margin: '0 0 0.25rem' }}>
                  {item.title}
                  {item.urgent && <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', color: '#dc2626', fontWeight: 400 }}>Immediate alert</span>}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Slack alert preview */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Here&apos;s what the Slack alert looks like</h2>
        <div style={{ background: '#111827', borderRadius: '0.75rem', padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.875rem' }}>
          <div style={{ color: '#f87171', marginBottom: '1rem' }}>
            <div>🚨 DISPUTE OPENED</div>
            <div>Customer: sarah@example.com</div>
            <div>Amount: $247.00 | Reason: product_not_received</div>
            <div>⏰ Respond by: March 28, 2026</div>
            <div>→ Open in Stripe Dashboard</div>
          </div>
          <div style={{ color: '#fbbf24', marginBottom: '1rem' }}>
            <div>❌ Failed payment: $89 — customer@email.com</div>
            <div>Reason: insufficient_funds (3rd failure this hour)</div>
          </div>
          <div style={{ color: '#60a5fa' }}>
            <div>📊 Yesterday: $1,240 | 14 payments | 1 failed | 0 refunds</div>
            <div>0 open disputes ✅</div>
          </div>
        </div>
      </section>

      {/* Setup */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>Setup: 2 environment variables. Five minutes. Done.</h2>
        <div style={{ background: '#111827', borderRadius: '0.75rem', padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.875rem', color: '#86efac' }}>
          <div>export STRIPE_SECRET_KEY=&quot;sk_live_...&quot;</div>
          <div>export SLACK_WEBHOOK_URL=&quot;https://hooks.slack.com/...&quot;</div>
        </div>
        <p style={{ color: '#6b7280', marginTop: '0.75rem', fontSize: '0.875rem' }}>No database. No Google account. No complex configuration.</p>
      </section>

      {/* How it works */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>How it works under the hood</h2>
        <p style={{ color: '#374151', lineHeight: 1.7 }}>
          Pure Node.js. Zero npm dependencies. Runs as a cron job on any server, or pipe the output to any LLM for intelligent triage. Production-tested against live Stripe APIs with error handling, rate limiting, and retry logic built in. Works with Claude, GPT, Gemini, LangChain, CrewAI, OpenClaw — or standalone without any LLM.
        </p>
      </section>

      {/* For Agencies */}
      <section style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h3 style={{ fontWeight: 700, color: '#1e40af', marginBottom: '0.5rem' }}>Running an agency?</h3>
        <p style={{ color: '#1d4ed8', margin: 0, lineHeight: 1.6 }}>
          Deploy this for every e-commerce client in 5 minutes. Bill $500+ per setup. One purchase covers all your projects.
          <a href="/agencies" style={{ color: '#2563eb', fontWeight: 600, marginLeft: '0.5rem', textDecoration: 'none' }}>See agency pricing →</a>
        </p>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1.25rem' }}>FAQ</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { q: "How quickly does it alert on a dispute?", a: "Within minutes. The monitor runs on your configured interval (default: every 30 min via cron). We recommend 15–30 minute intervals for 24/7 coverage." },
            { q: "Do I need a paid Stripe plan?", a: "No. Works with any Stripe account that has live payments enabled." },
            { q: "Can I customise the refund rate threshold?", a: "Yes — it's a single value in config.json. Default is 5%. Change it to whatever makes sense for your business." },
            { q: "Does it work without Slack?", a: "Slack is the primary notification channel. Email support is on the roadmap — contact us if that's a blocker." },
            { q: "What's the refund policy?", a: "30-day money-back guarantee if it doesn't work as described. Email support@abbilabs.xyz first — we'll fix it or refund you." },
          ].map((item, i) => (
            <details key={i} style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', color: '#111827' }}>{item.q}</summary>
              <p style={{ marginTop: '0.75rem', color: '#374151', fontSize: '0.875rem', lineHeight: 1.6 }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: '#eff6ff', borderRadius: '0.75rem', padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>Stop missing disputes.</h2>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>One-time purchase. 5-minute setup. 30-day money-back guarantee.</p>
        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#2563eb', marginBottom: '1rem' }}>$39</div>
        <button
          onClick={() => handleCheckout('ai-payment-monitor')}
          style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer' }}
        >
          Buy Now — $39
        </button>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '1rem' }}>Instant download after payment</p>
      </section>

    </main>
  )
}
