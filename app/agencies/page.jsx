export const metadata = {
  title: 'AI Agent Templates for Agencies — Deploy for Clients, Bill Premium | Abbi Labs',
  description: 'Buy AI agent templates once, deploy for every client. Payment monitoring, CRM automation, support agents. Agency bundle: $179 for all three.',
}

export default function AgenciesPage() {
  return (
    <main style={{ maxWidth: '56rem', margin: '0 auto', padding: '3rem 1rem' }}>

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <h1 style={{ fontSize: '2.75rem', fontWeight: 700, color: '#111827', lineHeight: 1.2, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          You pay $39–$99. You bill $500–$8,000. Per client.
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#6b7280', lineHeight: 1.6, maxWidth: '36rem', margin: '0 auto 1.5rem' }}>
          Three AI agent templates. One purchase each. Deploy for every client you have. One purchase. Unlimited clients. No per-seat fees.
        </p>
        <a
          href="mailto:support@abbilabs.xyz?subject=Agency Bundle Pricing"
          style={{ background: '#2563eb', color: '#fff', padding: '0.875rem 2rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', display: 'inline-block' }}
        >
          Get the Agency Bundle — $179
        </a>
      </section>

      {/* How it works */}
      <section style={{ marginBottom: '3.5rem' }}>
        <p style={{ color: '#374151', lineHeight: 1.7, marginBottom: '1rem', fontSize: '1rem' }}>
          Swap in their API keys. Adjust the config file. Deploy. 15 minutes per client. The code is clean, documented, and built to be customised without touching the logic.
        </p>
        <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '1rem' }}>
          <strong>Your clients get a working AI agent. You get a high-margin deliverable.</strong> One purchase. Unlimited clients. No per-seat fees. No per-client fees.
        </p>
      </section>

      {/* Economics */}
      <section style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem' }}>The economics</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>💳</span>
                <h3 style={{ fontWeight: 700, color: '#111827', margin: 0 }}>AI Payment Monitor</h3>
              </div>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>Your e-commerce client misses one $500 dispute — that&apos;s more than your whole cost. Stripe dispute alerts in Slack. 5-minute setup.</p>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>You pay</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827' }}>$39</div>
              <div style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.25rem' }}>You bill</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#16a34a' }}>$500+</div>
            </div>
          </div>

          <div style={{ border: '2px solid #bfdbfe', borderRadius: '0.75rem', padding: '1.5rem', background: '#eff6ff', display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🤝</span>
                <div>
                  <h3 style={{ fontWeight: 700, color: '#111827', margin: 0 }}>AI Sales Agent</h3>
                  <span style={{ background: '#2563eb', color: '#fff', fontSize: '0.7rem', padding: '0.1rem 0.5rem', borderRadius: '9999px', fontWeight: 600 }}>Most Popular</span>
                </div>
              </div>
              <p style={{ color: '#374151', fontSize: '0.9rem', margin: 0 }}>Your SaaS client is paying $800/month for HubSpot Marketing Hub Pro just to get lead scoring. You give them the same outcome for $79. Scoring rules per client, no code changes.</p>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>You pay</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827' }}>$79</div>
              <div style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.25rem' }}>You bill</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#16a34a' }}>$2K–$5K</div>
            </div>
          </div>

          <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🎧</span>
                <h3 style={{ fontWeight: 700, color: '#111827', margin: 0 }}>AI Support Agent</h3>
              </div>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>Auto-resolves 70% of their support tickets. The other 30% land in Slack with full context and a drafted reply. Deploy in under an hour, customise the knowledge base per client.</p>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>You pay</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827' }}>$99</div>
              <div style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.25rem' }}>You bill</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#16a34a' }}>$3K–$8K</div>
            </div>
          </div>

        </div>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '1rem', textAlign: 'center' }}>Worst-case: 12x return on your first deployment. One purchase covers every client after that.</p>
      </section>

      {/* What's included */}
      <section style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#111827', marginBottom: '1.25rem' }}>What&apos;s included in every template</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {[
            { icon: '💻', title: 'Full source code', desc: 'Pure Node.js, zero dependencies, documented. Easy to extend for any client.' },
            { icon: '📝', title: 'AGENT.md system prompts', desc: 'Agent instructions for any LLM. Load into Claude, GPT, Gemini — or run without one.' },
            { icon: '⚙️', title: 'Config files', desc: 'One config file per deployment. Customise per client without touching any code.' },
            { icon: '📚', title: 'Setup guides', desc: 'Hand it to your client or walk through it yourself. Step-by-step, under 15 minutes.' },
          ].map((item) => (
            <div key={item.title} style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1.25rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
              <h3 style={{ fontWeight: 700, color: '#111827', margin: '0 0 0.25rem', fontSize: '0.95rem' }}>{item.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Agency Bundle CTA */}
      <section style={{ background: '#111827', borderRadius: '0.75rem', padding: '2.5rem', textAlign: 'center', marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Get all three. $179.</h2>
        <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>All 3 templates. $38 off. Deploy for every client you ever take on.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap', fontSize: '0.875rem' }}>
          <div style={{ color: '#e2e8f0' }}>✓ AI Payment Monitor <span style={{ color: '#9ca3af' }}>($39)</span></div>
          <div style={{ color: '#e2e8f0' }}>✓ AI Sales Agent <span style={{ color: '#9ca3af' }}>($79)</span></div>
          <div style={{ color: '#e2e8f0' }}>✓ AI Support Agent <span style={{ color: '#9ca3af' }}>($99)</span></div>
        </div>
        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#60a5fa', marginBottom: '1.5rem' }}>$179 <span style={{ fontSize: '1rem', color: '#9ca3af', textDecoration: 'line-through' }}>$217</span></div>
        <a
          href="mailto:support@abbilabs.xyz?subject=Agency Bundle Pricing"
          style={{ background: '#2563eb', color: '#fff', padding: '1rem 2.5rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', display: 'inline-block' }}
        >
          Email support@abbilabs.xyz — we&apos;ll send you the link
        </a>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '1rem' }}>Need white-label or custom deployments? Tell us what you need.</p>
      </section>

      {/* Individual links */}
      <section style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Or buy individual templates</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="/templates/ai-payment-monitor" style={{ border: '1px solid #e5e7eb', color: '#111827', padding: '0.75rem 1.25rem', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
            Payment Monitor — $39
          </a>
          <a href="/templates/ai-sales-agent" style={{ background: '#2563eb', color: '#fff', padding: '0.75rem 1.25rem', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
            Sales Agent — $79
          </a>
          <a href="/templates/ai-customer-support-agent" style={{ border: '1px solid #e5e7eb', color: '#111827', padding: '0.75rem 1.25rem', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
            Support Agent — $99
          </a>
        </div>
      </section>

    </main>
  )
}
