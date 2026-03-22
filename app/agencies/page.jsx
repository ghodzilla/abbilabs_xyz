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
          Buy once. Deploy for every client. Bill premium.
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#6b7280', lineHeight: 1.6, maxWidth: '36rem', margin: '0 auto 1.5rem' }}>
          If you run a dev shop, automation agency, or freelance practice, these templates are your secret weapon. Each one is a production-ready AI agent setup you can customise per client and deploy in 15 minutes.
        </p>
        <a
          href="mailto:support@abbilabs.xyz?subject=Agency Bundle Pricing"
          style={{ background: '#2563eb', color: '#fff', padding: '0.875rem 2rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', display: 'inline-block' }}
        >
          Email us for agency bundle pricing
        </a>
      </section>

      {/* How it works */}
      <section style={{ marginBottom: '3.5rem' }}>
        <p style={{ color: '#374151', lineHeight: 1.7, marginBottom: '1rem', fontSize: '1rem' }}>
          Each template is a production-ready AI agent setup. You customise it per client — their API keys, their scoring rules, their Slack channels — and deploy in 15 minutes. The code is clean, well-documented, and built to be extended.
        </p>
        <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '1rem' }}>
          <strong>Your clients get an AI agent. You get a high-margin deliverable.</strong> One purchase covers all your projects. No per-seat fees. No per-client fees.
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
              <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>Deploy for e-commerce clients. Stripe dispute alerts in Slack. 5-minute setup per client.</p>
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
              <p style={{ color: '#374151', fontSize: '0.9rem', margin: 0 }}>CRM automation for SaaS clients. Lead scoring, stale deal alerts, daily pipeline reports. 15-minute setup. Customise scoring rules per client without touching code.</p>
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
              <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>Support automation for any client using email or Intercom. Connects to their knowledge base, auto-resolves 70% of tickets, escalates the rest with full context.</p>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>You pay</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827' }}>$99</div>
              <div style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.25rem' }}>You bill</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#16a34a' }}>$3K–$8K</div>
            </div>
          </div>

        </div>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '1rem', textAlign: 'center' }}>25x–100x return on a single purchase. One purchase covers all your projects.</p>
      </section>

      {/* What's included */}
      <section style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#111827', marginBottom: '1.25rem' }}>What&apos;s included in every template</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {[
            { icon: '💻', title: 'Full source code', desc: 'Pure Node.js, zero dependencies, well-documented. Easy to extend per client.' },
            { icon: '📝', title: 'AGENT.md system prompts', desc: 'Pre-built agent instructions for any LLM. Load into Claude, GPT, Gemini — anything.' },
            { icon: '⚙️', title: 'Config files', desc: 'Customise per client without touching code. One config file per deployment.' },
            { icon: '📚', title: 'Setup guides', desc: 'Hand to your client or use for onboarding. Step-by-step, no gaps.' },
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
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Agency Bundle</h2>
        <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>All 3 templates for $179 — save $38</p>
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
          Email support@abbilabs.xyz for agency bundle pricing
        </a>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '1rem' }}>Need white-label or custom deployments? Email us and we&apos;ll sort it out.</p>
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
