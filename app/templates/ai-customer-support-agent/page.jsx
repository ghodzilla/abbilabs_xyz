'use client';

export const metadata = {
  title: 'AI Support Agent — Auto-Resolve 70% of Tickets | $99 One-Time',
  description: 'AI agent that responds from your knowledge base and escalates with full context. Connects to Email + Intercom. Configurable confidence threshold. No subscription.',
}

async function handleCheckout(product) {
  const res = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ product }),
  });
  const data = await res.json();
  if (data.url) window.location.href = data.url;
}

export default function AICustomerSupportAgentPage() {
  return (
    <main style={{ maxWidth: '56rem', margin: '0 auto', padding: '3rem 1rem' }}>

      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280', marginBottom: '1.5rem' }}>
        <a href="/templates" style={{ color: '#6b7280', textDecoration: 'none' }}>Templates</a>
        <span>/</span>
        <span>AI Customer Support Agent</span>
      </div>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '18rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#111827', lineHeight: 1.2, marginBottom: '0.75rem' }}>
              70% of your support tickets answered before you read them.
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '1rem' }}>
              The rest escalated with full context. Confidence-scored. Fully auditable.<br />
              <strong style={{ color: '#111827' }}>$99 one-time. No subscription.</strong>
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '0.8rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 600 }}>✅ Production Tested</span>
              <span style={{ background: '#dbeafe', color: '#1d4ed8', fontSize: '0.8rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 600 }}>Email + Intercom</span>
              <span style={{ background: '#f3e8ff', color: '#7e22ce', fontSize: '0.8rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 600 }}>Zero Dependencies</span>
              <span style={{ background: '#fff7ed', color: '#c2410c', fontSize: '0.8rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 600 }}>Multi-Language</span>
            </div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: '#2563eb' }}>$99</div>
            <div style={{ color: '#6b7280', marginBottom: '0.75rem', fontSize: '0.875rem' }}>one-time · own forever</div>
            <button
              onClick={() => handleCheckout('ai-customer-support-agent')}
              style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '0.875rem 2rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', width: '100%' }}
            >
              Buy Now — $99
            </button>
            <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>30-day money-back guarantee</p>
          </div>
        </div>
      </div>

      {/* The problem */}
      <section style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '2.5rem' }}>
        <p style={{ color: '#374151', lineHeight: 1.7, margin: 0 }}>
          Most support tickets are the same 20 questions. Your knowledge base already has the answers. But your customers don&apos;t read it, and you end up copy-pasting the same responses every day.
        </p>
        <p style={{ color: '#374151', lineHeight: 1.7, marginTop: '0.75rem', marginBottom: 0 }}>
          The AI Customer Support Agent reads incoming tickets, checks your knowledge base, and responds automatically to the ones it can handle. For everything else, it escalates to your team in Slack with the customer context, ticket history, and a suggested response. <strong>Your team handles the hard 30%. The agent handles the repetitive 70%.</strong>
        </p>
      </section>

      {/* What it does */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>What it does</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { icon: '✅', title: 'Auto-response', desc: 'Matches tickets to knowledge base articles and responds with accurate, natural answers.' },
            { icon: '🧠', title: 'Smart triage', desc: 'Categorises tickets by topic, urgency, and sentiment. Four-category system: auto-resolve, needs context, escalate, urgent.' },
            { icon: '🚨', title: 'Slack escalation', desc: 'Sends unresolved tickets to Slack with full context: customer info, plan, sentiment, ticket history, and a suggested reply.' },
            { icon: '🎯', title: 'Confidence scoring', desc: 'Only responds when it\'s confident in the answer. Threshold is configurable — low confidence means auto-escalate, not auto-guess.' },
            { icon: '📊', title: 'Conversation logging', desc: 'Every interaction tracked for review and improvement. Daily reports on ticket volume, resolution rate, and sentiment.' },
          ].map((item) => (
            <div key={item.title} style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem', display: 'flex', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
              <div>
                <h3 style={{ fontWeight: 700, color: '#111827', margin: '0 0 0.25rem', fontSize: '0.95rem' }}>{item.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Escalation preview */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Here&apos;s what an escalation looks like in Slack</h2>
        <div style={{ background: '#111827', borderRadius: '0.75rem', padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.875rem' }}>
          <div style={{ color: '#fbbf24' }}>🎧 TICKET ESCALATED — Confidence: 42% (below threshold)</div>
          <div style={{ color: '#e2e8f0', marginTop: '0.5rem' }}>Customer: james@acme.co</div>
          <div style={{ color: '#e2e8f0' }}>Subject: API rate limits on enterprise plan</div>
          <div style={{ color: '#86efac' }}>Category: Technical | Urgency: Medium</div>
          <div style={{ color: '#e2e8f0', marginTop: '0.5rem' }}>Context: Enterprise customer, 3 previous tickets, all resolved</div>
          <div style={{ color: '#93c5fd', marginTop: '0.5rem' }}>Suggested response: &ldquo;Enterprise plans have a 10K/min rate limit. If you&rsquo;re hitting this...&rdquo;</div>
          <div style={{ color: '#60a5fa', marginTop: '0.5rem' }}>→ Respond in Intercom</div>
        </div>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.75rem' }}>The agent never guesses. Low confidence = escalate with context, not auto-respond with wrong info.</p>
      </section>

      {/* Connections */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Connects to</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
          <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem' }}>
            <div style={{ fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>Tickets</div>
            <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>Email (IMAP) + Intercom</div>
          </div>
          <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem' }}>
            <div style={{ fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>Knowledge base</div>
            <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>Markdown files in /docs (add, edit, remove anytime)</div>
          </div>
          <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem' }}>
            <div style={{ fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>LLM</div>
            <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>Claude, GPT, Gemini, or any model</div>
          </div>
        </div>
      </section>

      {/* The math */}
      <section style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h3 style={{ fontWeight: 700, color: '#166534', marginBottom: '0.75rem' }}>The math</h3>
        <p style={{ color: '#15803d', lineHeight: 1.7, margin: 0 }}>
          If you handle 100 tickets/week and spend 5 minutes per ticket, that&apos;s 8+ hours. At 70% auto-resolution, you get 6 hours back. Every week. That&apos;s $99 paid back in the first 2 days.
        </p>
      </section>

      {/* vs Intercom Fin */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Why not Intercom Fin?</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', fontSize: '0.875rem', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                <th style={{ textAlign: 'left', padding: '0.75rem 1rem' }}></th>
                <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#2563eb' }}>This Template</th>
                <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#6b7280' }}>Intercom Fin</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Cost', '$99 one-time', '$0.99–$2.00 per resolution'],
                ['At 500 tickets/month', '$0/month', '$495–$1,000/month'],
                ['Annual cost', '$99 total', '$5,940–$12,000/year'],
                ['Vendor lock-in', 'None — you own the code', 'Yes — their platform'],
                ['LLM choice', 'Any (Claude, GPT, Gemini)', 'Fixed'],
                ['Customisation', 'Full source code', 'Limited settings'],
                ['Data', 'On your servers', 'On theirs'],
                ['Email support', '✅ Built-in IMAP/SMTP', '❌ Intercom only'],
              ].map(([label, us, them]) => (
                <tr key={label} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#111827' }}>{label}</td>
                  <td style={{ padding: '0.75rem 1rem', color: '#2563eb', fontWeight: 500 }}>{us}</td>
                  <td style={{ padding: '0.75rem 1rem', color: '#6b7280' }}>{them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What's included */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>What&apos;s included</h2>
        <div style={{ background: '#f9fafb', borderRadius: '0.75rem', padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.825rem' }}>
          <div style={{ color: '#6b7280', marginBottom: '0.5rem' }}>ai-customer-support-agent/</div>
          {[
            ['AGENT.md', 'Agent personality, decision rules, security policies'],
            ['SETUP.md', 'Step-by-step setup guide (under 1 hour)'],
            ['config.json', 'Triage rules, thresholds, channels — no code changes'],
            ['src/triage.js', '⭐ 4-category triage engine with sentiment detection'],
            ['src/kb-search.js', '⭐ Knowledge base search (Markdown + Notion)'],
            ['src/responder.js', '⭐ Auto-response generator from KB sources'],
            ['src/escalator.js', '⭐ Slack escalation with rich context'],
            ['src/reporter.js', '⭐ Daily + weekly metrics reports'],
            ['src/integrations/email.js', 'IMAP/SMTP adapter (Gmail, Outlook, any provider)'],
            ['src/integrations/intercom.js', 'Full Intercom API adapter'],
            ['src/integrations/slack.js', 'Slack webhook integration'],
            ['cron/', 'Poll, daily report, weekly report, auto-close'],
            ['examples/kb-articles/', '3 sample KB articles to get started'],
          ].map(([file, desc]) => (
            <div key={file} style={{ display: 'flex', gap: '1rem', padding: '0.3rem 0', borderBottom: '1px solid #e5e7eb' }}>
              <span style={{ color: '#2563eb', width: '16rem', flexShrink: 0 }}>{file}</span>
              <span style={{ color: '#6b7280' }}>{desc}</span>
            </div>
          ))}
        </div>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.75rem' }}>28 files · 3,000+ lines · Zero npm dependencies · Pure Node.js</p>
      </section>

      {/* For Agencies */}
      <section style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h3 style={{ fontWeight: 700, color: '#1e40af', marginBottom: '0.5rem' }}>Running an agency?</h3>
        <p style={{ color: '#1d4ed8', margin: 0, lineHeight: 1.6 }}>
          Deploy this for clients in under an hour. Customise the knowledge base per client. Bill $3,000–$8,000 for support automation. One $99 purchase covers all your projects.
          <a href="/agencies" style={{ color: '#2563eb', fontWeight: 600, marginLeft: '0.5rem', textDecoration: 'none' }}>See agency bundle →</a>
        </p>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1.25rem' }}>FAQ</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { q: "Does it work with just email (no Intercom)?", a: "Yes. The email adapter (IMAP/SMTP) works with Gmail, Outlook, or any email provider. Intercom is optional." },
            { q: "What LLM does it use?", a: "Claude by default, but you can swap to GPT-4, Gemini, or any LLM by changing one line in config.json." },
            { q: "How does the knowledge base work?", a: "Drop markdown files into the KB folder — each file is a FAQ article. The agent searches these before responding. Or connect a Notion database." },
            { q: "What if it gets a question wrong?", a: "The confidence threshold (default 70%) prevents uncertain responses. Low confidence = auto-escalate to human. The agent never guesses." },
            { q: "Does it handle non-English tickets?", a: "Yes. It auto-detects the customer's language and responds in kind. Tested with Spanish, French, German, and more." },
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
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>Stop answering the same questions manually.</h2>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>One-time purchase. Own it forever. 30-day money-back guarantee.</p>
        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#2563eb', marginBottom: '1rem' }}>$99</div>
        <button
          onClick={() => handleCheckout('ai-customer-support-agent')}
          style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer' }}
        >
          Buy Now — $99
        </button>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '1rem' }}>Instant download · Full source code · 28 files · 3,000+ lines</p>
      </section>

    </main>
  )
}
