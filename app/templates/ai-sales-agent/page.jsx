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

export default function AISalesAgentPage() {
  return (
    <main style={{ maxWidth: '56rem', margin: '0 auto', padding: '3rem 1rem' }}>

      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280', marginBottom: '1.5rem' }}>
        <a href="/templates" style={{ color: '#6b7280', textDecoration: 'none' }}>Templates</a>
        <span>/</span>
        <span>AI Sales Agent</span>
      </div>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '18rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#111827', lineHeight: 1.2, marginBottom: '0.75rem' }}>
              Your morning pipeline review, done before you wake up.
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '1rem' }}>
              Lead scoring. Stale deal alerts. Daily reports. All automatic.<br />
              <strong style={{ color: '#111827' }}>$79 one-time. Setup in 15 minutes. No subscription.</strong>
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '0.8rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 600 }}>✅ Production Tested</span>
              <span style={{ background: '#dbeafe', color: '#1d4ed8', fontSize: '0.8rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 600 }}>Framework Agnostic</span>
              <span style={{ background: '#f3e8ff', color: '#7e22ce', fontSize: '0.8rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 600 }}>Zero Dependencies</span>
            </div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: '#2563eb' }}>$79</div>
            <div style={{ color: '#6b7280', marginBottom: '0.75rem', fontSize: '0.875rem' }}>one-time · own forever</div>
            <button
              onClick={() => handleCheckout('ai-sales-agent')}
              style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '0.875rem 2rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', width: '100%' }}
            >
              Buy Now — $79
            </button>
            <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>30-day money-back guarantee</p>
          </div>
        </div>
      </div>

      {/* The problem */}
      <section style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '2.5rem' }}>
        <p style={{ color: '#374151', lineHeight: 1.7, margin: 0 }}>
          You open HubSpot every morning. Check new leads. Mentally score them. Flag the stale deals. Note follow-ups. Copy numbers into a spreadsheet. Write a summary for the team. That&apos;s 30–60 minutes. Every day. On work that a script can do better than you.
        </p>
        <p style={{ color: '#374151', lineHeight: 1.7, marginTop: '0.75rem', marginBottom: 0 }}>
          The AI Sales Agent connects to your HubSpot, scores every new lead against rules you define, flags deals with no activity for 7+ days, and sends your team a daily pipeline report in Slack by 8am. <strong>You don&apos;t review the pipeline. You review the report.</strong>
        </p>
      </section>

      {/* What it does */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>What it does</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {[
            { icon: '🎯', title: 'Lead scoring engine', desc: 'Customisable rules: company size, deal value, engagement signals. Change the config anytime without touching code.' },
            { icon: '🔥', title: 'Hot lead Slack alerts', desc: 'Instant ping when a lead scores above your threshold — before they go cold.' },
            { icon: '⚠️', title: 'Stale deal detection', desc: 'Flags deals with no activity in 7/14/30 days (you choose). The silence is the signal.' },
            { icon: '📊', title: 'Daily pipeline report', desc: 'Sent to Slack every morning: hot leads, stale deals, total pipeline value, deals closing this week.' },
            { icon: '📈', title: 'Weekly performance summary', desc: 'Closed/won, closed/lost, conversion rate trends — every Monday.' },
            { icon: '📝', title: 'Google Sheets logging', desc: 'Every score and alert archived automatically for reporting and review.' },
          ].map((item) => (
            <div key={item.title} style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
              <h3 style={{ fontWeight: 700, color: '#111827', margin: '0 0 0.25rem', fontSize: '0.95rem' }}>{item.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Daily report preview */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Here&apos;s what the daily report looks like in Slack</h2>
        <div style={{ background: '#111827', borderRadius: '0.75rem', padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.875rem', color: '#60a5fa' }}>
          <div>📊 Daily Pipeline Report — March 22</div>
          <div style={{ marginTop: '0.5rem', color: '#86efac' }}>Hot leads: 3 new (score 85+)</div>
          <div style={{ color: '#fbbf24' }}>Stale deals: 2 flagged (no activity 7d+)</div>
          <div style={{ color: '#e2e8f0' }}>Revenue pipeline: $142,800</div>
          <div style={{ color: '#e2e8f0' }}>Deals closing this week: 4 ($38,200)</div>
          <div style={{ color: '#60a5fa', marginTop: '0.5rem' }}>→ View full report in Google Sheets</div>
        </div>
      </section>

      {/* Setup */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>Setup</h2>
        <ol style={{ color: '#374151', lineHeight: 2, paddingLeft: '1.5rem', margin: 0 }}>
          <li>Add your HubSpot API key</li>
          <li>Add your Slack webhook URL</li>
          <li>Add your Google Sheets ID</li>
          <li>Customise your scoring rules in config.json</li>
          <li>Run the script</li>
        </ol>
        <p style={{ color: '#6b7280', marginTop: '0.75rem', fontSize: '0.875rem' }}>15 minutes. Most of that is finding your API keys.</p>
      </section>

      {/* How it works */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>How it works under the hood</h2>
        <p style={{ color: '#374151', lineHeight: 1.7 }}>
          Pure Node.js. Zero dependencies. Handles HubSpot API pagination, OAuth, rate limiting, and retry logic. The scoring engine is a simple JSON config — change the rules anytime without touching code. The AGENT.md file is your system prompt. Load it into Claude, GPT, Gemini, or any LLM to give your agent full context on how to interpret and act on pipeline data. Or run the scripts standalone as cron jobs — no LLM required.
        </p>
      </section>

      {/* What's included */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>What&apos;s included</h2>
        <div style={{ background: '#f9fafb', borderRadius: '0.75rem', padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.825rem' }}>
          <div style={{ color: '#6b7280', marginBottom: '0.5rem' }}>ai-sales-agent/</div>
          {[
            ['AGENT.md', 'Agent personality, decision rules, alert formats'],
            ['WORKFLOWS.md', '5 complete workflows step-by-step'],
            ['SETUP.md', 'Setup guide — HubSpot, Sheets, Slack (15 min)'],
            ['config.json', 'Scoring rules, thresholds, channels — no code changes'],
            ['scripts/hubspot.cjs', 'HubSpot CRM integration'],
            ['scripts/sheets.cjs', 'Google Sheets integration'],
            ['scripts/slack.cjs', 'Slack alerts and reports'],
            ['scripts/lead-scorer.cjs', '⭐ Lead scoring engine'],
            ['scripts/pipeline-report.cjs', '⭐ Pipeline report generator'],
            ['scripts/follow-up-checker.cjs', '⭐ Stale deal detector'],
            ['examples/', 'Scoring configs for B2B SaaS, agencies, consulting'],
          ].map(([file, desc]) => (
            <div key={file} style={{ display: 'flex', gap: '1rem', padding: '0.3rem 0', borderBottom: '1px solid #e5e7eb' }}>
              <span style={{ color: '#2563eb', width: '16rem', flexShrink: 0 }}>{file}</span>
              <span style={{ color: '#6b7280' }}>{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HubSpot native comparison */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>vs HubSpot native lead scoring</h2>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>HubSpot's own lead scoring requires Marketing Hub Professional or Enterprise. Here's the math.</p>
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
            <div style={{ padding: '0.75rem 1rem', fontWeight: 700, fontSize: '0.8rem', color: '#6b7280', textTransform: 'uppercase' }}></div>
            <div style={{ padding: '0.75rem 1rem', fontWeight: 700, fontSize: '0.8rem', color: '#dc2626', borderLeft: '1px solid #e5e7eb' }}>HubSpot Marketing Hub Pro</div>
            <div style={{ padding: '0.75rem 1rem', fontWeight: 700, fontSize: '0.8rem', color: '#16a34a', borderLeft: '1px solid #e5e7eb' }}>AI Sales Agent</div>
          </div>
          {[
            ['Price', '$800/mo ($9,600/yr minimum)', '$79 one-time'],
            ['Lead scoring', '✅ Included', '✅ Included'],
            ['Works on free HubSpot', '❌ Requires Pro/Enterprise', '✅ Works on free CRM'],
            ['Custom scoring rules', '✅ UI-based', '✅ JSON config'],
            ['Slack alerts', '❌ Not included', '✅ Built in'],
            ['Stale deal detection', '❌ Not included', '✅ Built in'],
            ['Daily pipeline report', '❌ Not included', '✅ Built in'],
            ['You own the code', '❌ SaaS lock-in', '✅ Full source code'],
          ].map(([feature, hubspot, ours], i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: i < 7 ? '1px solid #e5e7eb' : 'none' }}>
              <div style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#374151', fontWeight: 500 }}>{feature}</div>
              <div style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: hubspot.startsWith('✅') ? '#374151' : '#dc2626', borderLeft: '1px solid #e5e7eb' }}>{hubspot}</div>
              <div style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#16a34a', fontWeight: 600, borderLeft: '1px solid #e5e7eb' }}>{ours}</div>
            </div>
          ))}
        </div>
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '0.5rem', padding: '0.875rem 1rem', marginTop: '0.75rem' }}>
          <strong style={{ color: '#15803d' }}>$79 once vs $9,600/year minimum.</strong>
          <span style={{ color: '#374151', fontSize: '0.875rem' }}> Same outcome. Fraction of the cost. You own it forever.</span>
        </div>
      </section>

      {/* Example config */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>Example scoring config</h2>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>Change the rules in config.json — no code changes required.</p>
        <div style={{ background: '#111827', borderRadius: '0.75rem', padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.8rem', overflowX: 'auto' }}>
          <div style={{ color: '#6b7280', marginBottom: '0.5rem' }}>{'// config.json — customise per your business'}</div>
          <pre style={{ margin: 0, color: '#e2e8f0', lineHeight: 1.8 }}>{`{
  "scoring": {
    "job_title_weight": 25,
    "company_size_weight": 20,
    "engagement_multiplier": 1.5,
    "hot_threshold": 85,
    "stale_deal_days": 7
  },
  "job_title_scores": {
    "ceo": 25, "founder": 25,
    "vp": 20, "director": 15,
    "manager": 10, "other": 5
  },
  "company_size_scores": {
    "1-10": 10, "11-50": 15,
    "51-200": 20, "201-500": 22,
    "500+": 25
  },
  "slack": {
    "webhook_url": "YOUR_WEBHOOK",
    "daily_report_time": "08:00",
    "weekly_report_day": "monday"
  }
}`}</pre>
        </div>
        <p style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: '0.5rem' }}>Examples for B2B SaaS, agencies, and consulting included in the download.</p>
      </section>

      {/* Objection handling — specific */}
      <section style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h3 style={{ fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>&ldquo;But I can build this myself.&rdquo;</h3>
        <p style={{ color: '#374151', lineHeight: 1.7, marginBottom: '0.75rem' }}>
          You can. It&apos;ll take 10–20 hours. Here&apos;s what you&apos;ll hit:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.5rem', marginBottom: '1rem' }}>
          {[
            'HubSpot API pagination quirks — handled',
            'Slack webhook formatting edge cases — handled',
            'Google Sheets OAuth token refresh — handled',
            'Lead scoring logic — pre-built',
            'Stale deal detection — pre-built',
            'Error handling and retries — production-tested',
          ].map((item) => (
            <div key={item} style={{ fontSize: '0.825rem', color: '#374151', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <span style={{ color: '#16a34a', flexShrink: 0 }}>✓</span>{item}
            </div>
          ))}
        </div>
        <p style={{ color: '#374151', lineHeight: 1.7, margin: 0, fontWeight: 600 }}>Or pay $79 and be live by lunch.</p>
      </section>

      {/* Framework compatibility */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Works with any AI framework</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
          {[
            ['OpenClaw', 'Drop into skills directory. Done.'],
            ['Claude API', 'Load AGENT.md as system prompt'],
            ['GPT API', 'Load AGENT.md as system message'],
            ['LangChain', 'Scripts as tools, WORKFLOWS as chain'],
            ['CrewAI', 'AGENT.md → agent, WORKFLOWS → tasks'],
            ['Any other', 'Scripts are standalone Node.js'],
          ].map(([fw, how]) => (
            <div key={fw} style={{ border: '1px solid #e5e7eb', borderRadius: '0.375rem', padding: '0.75rem' }}>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#111827' }}>{fw}</div>
              <div style={{ color: '#6b7280', fontSize: '0.75rem', marginTop: '0.25rem' }}>{how}</div>
            </div>
          ))}
        </div>
      </section>

      {/* For Agencies */}
      <section style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h3 style={{ fontWeight: 700, color: '#1e40af', marginBottom: '0.5rem' }}>Freelancers and agencies</h3>
        <p style={{ color: '#1d4ed8', margin: 0, lineHeight: 1.6 }}>
          Deploy this for SaaS clients in 15 minutes. Customise the scoring rules per client. Bill $2,000–$5,000 for CRM automation. One $79 purchase covers all your projects.
          <a href="/agencies" style={{ color: '#2563eb', fontWeight: 600, marginLeft: '0.5rem', textDecoration: 'none' }}>See agency bundle →</a>
        </p>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1.25rem' }}>FAQ</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { q: "Does it work with a free HubSpot account?", a: "Yes. Works with HubSpot's free CRM tier — just needs an API key, available on all plans." },
            { q: "Can I customise the lead scoring rules?", a: "Yes. All rules are in config.json — change job title weights, company size, industry, engagement multipliers without touching code." },
            { q: "Does it work with LLMs other than Claude?", a: "Yes. Framework-agnostic — works with GPT-4, Gemini, Llama, or any LLM. You can also run it as a standalone cron job with no LLM." },
            { q: "What if I don't use Google Sheets?", a: "Google Sheets is optional for logging. The lead scoring and Slack alerts work without it." },
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
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>Ready to automate your sales pipeline?</h2>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>One-time purchase. Own it forever. 30-day money-back guarantee.</p>
        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#2563eb', marginBottom: '1rem' }}>$79</div>
        <button
          onClick={() => handleCheckout('ai-sales-agent')}
          style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer' }}
        >
          Buy Now — $79
        </button>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '1rem' }}>Instant download · Full source code included</p>
      </section>

    </main>
  )
}
