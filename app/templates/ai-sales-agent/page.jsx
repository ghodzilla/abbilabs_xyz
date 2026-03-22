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
            <p style={{ fontSize: '1.1rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '0.75rem' }}>
              Lead scoring. Deal priority. Stale deal alerts. Score writeback to HubSpot. Daily reports. All automatic.<br />
              <strong style={{ color: '#111827' }}>$79 one-time. Setup in 15 minutes. No subscription.</strong>
            </p>
            <p style={{ fontSize: '0.9rem', color: '#2563eb', fontWeight: 600, marginBottom: '1rem' }}>
              ✦ Scores write back to HubSpot — filter by <code style={{ background: '#eff6ff', padding: '0.1rem 0.4rem', borderRadius: '0.25rem' }}>abbi_lead_score</code> inside your CRM, build saved views, trigger workflows.
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
            <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>Try it 30 days. If it doesn&apos;t save you 2 hours/week, I&apos;ll refund you instantly — no forms, no questions.</p>
          </div>
        </div>
      </div>

      {/* Demo embed */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>See it in action</h2>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>Watch the agent score leads, flag stale deals, and send the Slack report — live.</p>
        <div style={{ borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid #e5e7eb', background: '#000' }}>
          <iframe
            src="/demo/ai-sales-agent.html"
            style={{ width: '100%', height: '600px', border: 'none', display: 'block' }}
            title="AI Sales Agent Demo"
            loading="lazy"
          />
        </div>
      </section>

      {/* The problem */}
      <section style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '2.5rem' }}>
        <p style={{ color: '#374151', lineHeight: 1.7, margin: 0 }}>
          You open HubSpot every morning. Check new leads. Mentally score them. Flag the stale deals. Note follow-ups. Copy numbers into a spreadsheet. Write a summary for the team. That&apos;s 30–60 minutes. Every day. On work that a script can do better than you.
        </p>
        <p style={{ color: '#374151', lineHeight: 1.7, marginTop: '0.75rem', marginBottom: 0 }}>
          The AI Sales Agent connects to your HubSpot, scores every new lead against rules you define, flags deals with no activity for 7+ days, auto-creates follow-up tasks in HubSpot, and sends your team a daily pipeline report in Slack by 8am. <strong>You don&apos;t review the pipeline. You review the report.</strong>
        </p>
      </section>

      {/* Test mode */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>Try it before you connect anything</h2>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
          Run <code style={{ background: '#f3f4f6', padding: '0.15rem 0.4rem', borderRadius: '0.25rem' }}>node scripts/lead-scorer.cjs --test</code> with sample data — no API key needed. See exactly what you&apos;re getting before you touch HubSpot.
        </p>
        <div style={{ background: '#0d1117', borderRadius: '0.75rem', padding: '1.25rem 1.5rem', fontFamily: '"Fira Code", "Cascadia Code", "Courier New", monospace', fontSize: '0.8rem', lineHeight: 1.9, overflowX: 'auto', color: '#e6edf3' }}>
          <div style={{ color: '#8b949e' }}>$ node scripts/lead-scorer.cjs --test</div>
          <div style={{ color: '#6e7681', marginTop: '8px' }}>Running in TEST MODE (sample data — no HubSpot connection needed)</div>
          <div style={{ color: '#6e7681' }}>─────────────────────────────────────────────────────────────────</div>
          <div style={{ marginTop: '12px' }}>
            <div><span style={{ color: '#f85149' }}>🔥 HOT</span><span>    Sarah Chen — Score: </span><span style={{ color: '#3fb950' }}>92/100</span></div>
            <div style={{ color: '#8b949e', paddingLeft: '2.5rem' }}>VP Engineering +30, 500+ employees +30, tech industry +15, pricing page +17</div>
            <div style={{ color: '#58a6ff', paddingLeft: '2.5rem' }}>→ Score written to HubSpot: abbi_lead_score=92, abbi_lead_classification=HOT</div>
          </div>
          <div style={{ marginTop: '8px' }}>
            <div><span style={{ color: '#e3b341' }}>🌡  WARM</span><span>   James Okonkwo — Score: </span><span style={{ color: '#e3b341' }}>58/100</span><span style={{ color: '#8b949e' }}> (decay: 74→58, 3 weeks inactive)</span></div>
            <div style={{ color: '#8b949e', paddingLeft: '2.5rem' }}>Director +20, 50–200 employees +20, SaaS +15, email opens +3</div>
          </div>
          <div style={{ marginTop: '8px' }}>
            <div><span style={{ color: '#6e7681' }}>❄️  COLD</span><span>   Lisa Park — Score: </span><span style={{ color: '#6e7681' }}>0/100</span></div>
            <div style={{ color: '#8b949e', paddingLeft: '2.5rem' }}>competitor.com -100, Director +30, 50–200 employees +20, SaaS +15</div>
          </div>
          <div style={{ marginTop: '8px' }}>
            <div style={{ color: '#58a6ff' }}>🧊 WENT COLD: Bob Walsh — VP Sales at BigCorp</div>
            <div style={{ color: '#8b949e', paddingLeft: '2.5rem' }}>Score: 45/100 (email bounced -30)</div>
            <div style={{ color: '#8b949e', paddingLeft: '2.5rem' }}>Would have scored 75/100 — blocked by negative signal</div>
          </div>
        </div>
        <p style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: '0.75rem' }}>
          &ldquo;Went cold&rdquo; alerts show you leads that <em>would have been HOT</em> but got blocked by negative signals — bounced email, competitor domain, unsubscribe. You can&apos;t fix what you can&apos;t see.
        </p>
      </section>

      {/* Score writeback callout */}
      <section style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '2rem', flexShrink: 0 }}>🔗</div>
          <div>
            <div style={{ fontWeight: 700, color: '#1e40af', fontSize: '1rem', marginBottom: '0.4rem' }}>Scores write back to HubSpot automatically</div>
            <p style={{ color: '#1d4ed8', margin: 0, lineHeight: 1.6, fontSize: '0.9rem' }}>
              After scoring, the agent writes <code style={{ background: '#dbeafe', padding: '0.1rem 0.4rem', borderRadius: '0.25rem' }}>abbi_lead_score</code> and <code style={{ background: '#dbeafe', padding: '0.1rem 0.4rem', borderRadius: '0.25rem' }}>abbi_lead_classification</code> directly to each contact record in HubSpot. Your reps can filter by score in list views, build saved views (&ldquo;Show me all HOT leads&rdquo;), use them in sequences and workflows — without ever leaving HubSpot. It&apos;s not a parallel system. It plugs into the CRM you already live in.
            </p>
          </div>
        </div>
      </section>

      {/* Full 13-feature grid */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>What it does — all 13 features</h2>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1.25rem' }}>Most tools give you one thing. This gives you a complete pipeline intelligence system.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {[
            { icon: '🎯', title: 'Lead scoring engine', desc: 'Scores every lead on job title, company size, industry, email opens, page views, and form submissions. Weights in config.json — change without code.' },
            { icon: '🧠', title: 'Transparent score breakdown', desc: 'Every alert shows exactly why. "VP Engineering +30, 500+ employees +30, tech +15" — not a black box your reps can\'t act on.' },
            { icon: '🔗', title: 'Score writeback to HubSpot', desc: 'Writes abbi_lead_score and abbi_lead_classification to contact records. Filter, build views, trigger workflows — inside HubSpot.' },
            { icon: '🚨', title: 'Deal priority scorer', desc: 'Scores DEALS by combining inactivity, deal size, engagement, and stage urgency into CRITICAL / WARNING / WATCH levels.' },
            { icon: '🔥', title: 'Hot lead Slack alerts', desc: 'Instant Slack ping when a lead hits your threshold. Includes name, company, score, and full breakdown.' },
            { icon: '⚠️', title: 'Stale deal detection', desc: 'Flags deals with no activity past your threshold (7/14/30 days). Auto-creates HubSpot task for each stale deal — due tomorrow, linked to deal and contact.' },
            { icon: '📊', title: 'Daily pipeline report', desc: 'Sent to Slack every morning: hot leads, stale deals, pipeline value, deals closing this week. Before you wake up.' },
            { icon: '📈', title: 'Weekly performance + velocity', desc: 'Pipeline velocity tracking — average days per stage, week-over-week trends. What sales ops pays Clari $800+/month for.' },
            { icon: '🖱️', title: 'Engagement scoring', desc: 'Three behavioural signals from HubSpot free API: page views, form submissions, email opens. Recency-weighted so old clicks don\'t inflate today\'s score.' },
            { icon: '❄️', title: 'Score decay + negative signals', desc: 'Scores decay 5%/week. Negative signals: bounce -30, unsubscribe -50, competitor domain -100. "Went cold" alerts surface near-misses.' },
            { icon: '📝', title: 'Google Sheets logging', desc: 'Every score and alert archived automatically. Pull the sheet for client reviews or board meetings anytime.' },
            { icon: '🛠️', title: 'Full HubSpot toolkit', desc: '341 lines with 20+ CLI commands: contacts, companies, deals, tickets, notes, associations, pipelines, owners. Rate limit retry built in.' },
            { icon: '⚙️', title: 'Three vertical configs', desc: 'Pre-built for B2B SaaS, Agency, Consulting. Swap vertical in 10 seconds — one config flag, no code changes.' },
          ].map((item) => (
            <div key={item.title} style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
              <h3 style={{ fontWeight: 700, color: '#111827', margin: '0 0 0.25rem', fontSize: '0.95rem' }}>{item.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deal priority scorer section */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>Deal priority scorer — not just contacts</h2>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
          Most lead scoring tools only look at contacts. This also scores your active <em>deals</em> — combining inactivity, deal size, engagement, and stage urgency into actionable priority levels. CRITICAL deals get a HubSpot task created automatically.
        </p>
        <div style={{ background: '#0d1117', borderRadius: '0.75rem', padding: '1.25rem 1.5rem', fontFamily: '"Fira Code", "Cascadia Code", "Courier New", monospace', fontSize: '0.8rem', lineHeight: 1.9, overflowX: 'auto', color: '#e6edf3' }}>
          <div style={{ color: '#8b949e' }}>$ node scripts/deal-scorer.cjs score-all</div>
          <div style={{ marginTop: '12px' }}>
            <div><span style={{ color: '#f85149' }}>🚨 CRITICAL</span><span>  MegaCorp - Full Suite      </span><span style={{ color: '#3fb950' }}>$50,000</span><span style={{ color: '#8b949e' }}>  Decision stage</span></div>
            <div style={{ color: '#8b949e', paddingLeft: '2.5rem' }}>Inactivity: 14d · No engagement · High value</div>
            <div style={{ color: '#58a6ff', paddingLeft: '2.5rem' }}>→ HubSpot task created: &quot;Urgent follow-up required&quot;</div>
          </div>
          <div style={{ marginTop: '8px' }}>
            <div><span style={{ color: '#e3b341' }}>⚠️  WARNING</span><span>   Acme Corp - Enterprise     </span><span style={{ color: '#3fb950' }}>$24,000</span><span style={{ color: '#8b949e' }}>  Proposal sent</span></div>
            <div style={{ color: '#8b949e', paddingLeft: '2.5rem' }}>Inactivity: 9d · Last note 9 days ago</div>
          </div>
          <div style={{ marginTop: '8px' }}>
            <div><span style={{ color: '#8b949e' }}>👁  WATCH</span><span style={{ color: '#e6edf3' }}>     FastMover Ltd - Hot Lead   </span><span style={{ color: '#3fb950' }}>$12,000</span><span style={{ color: '#8b949e' }}>  Contract sent</span></div>
            <div style={{ color: '#8b949e', paddingLeft: '2.5rem' }}>Inactivity: 7d · Approaching threshold</div>
          </div>
          <div style={{ marginTop: '12px', borderTop: '1px solid #21262d', paddingTop: '10px' }}>
            <div style={{ color: '#58a6ff', marginBottom: '4px' }}>Pipeline velocity (week-over-week):</div>
            <div style={{ color: '#e6edf3' }}>  Appointment → Qualified:   <span style={{ color: '#3fb950' }}>3.2d  ↓ 0.8d  ✅</span></div>
            <div style={{ color: '#e6edf3' }}>  Qualified → Proposal:      <span style={{ color: '#e3b341' }}>8.1d  ↑ 2.3d  ⚠️</span></div>
            <div style={{ color: '#e6edf3' }}>  Proposal → Decision:      <span style={{ color: '#3fb950' }}>12.4d  → 0.1d  ✅</span></div>
          </div>
        </div>
        <p style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: '0.75rem' }}>
          CRITICAL deals get a HubSpot task auto-created. The agent doesn&apos;t just report problems — it creates follow-up actions for you.
        </p>
      </section>

      {/* Pipeline velocity — Clari comparison */}
      <section style={{ marginBottom: '2.5rem' }}>
        <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '0.75rem', padding: '1.5rem' }}>
          <div style={{ fontWeight: 700, color: '#9a3412', marginBottom: '0.5rem', fontSize: '0.95rem' }}>📊 Pipeline velocity tracking — what Clari charges $800+/month for</div>
          <p style={{ color: '#374151', fontSize: '0.875rem', lineHeight: 1.7, margin: '0 0 0.75rem' }}>
            The weekly report includes stage-by-stage velocity: average days each deal spends at Appointment, Qualified, Proposal, Decision — with week-over-week trend arrows so you can see if your pipeline is accelerating or stalling.
          </p>
          <p style={{ color: '#374151', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
            Clari starts at ~$100/seat/month. InsightSquared ~$65/seat/month. You get the same velocity data in the weekly Slack report — for $79 one-time.
          </p>
        </div>
      </section>

      {/* Industry configs */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>Pre-built scoring models for your industry</h2>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
          Set <code style={{ background: '#f3f4f6', padding: '0.15rem 0.4rem', borderRadius: '0.25rem' }}>vertical</code> in config.json and the scoring weights, thresholds, and stage names switch automatically. Swap in 10 seconds.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {[
            { label: 'B2B SaaS', emoji: '💻', signals: ['Job title: VP+ / Director', 'Company size: 50–500', 'Tech industry +15', 'Pricing page visit +17', 'Free trial signup +20', 'Competitor domain -100'] },
            { label: 'Agency', emoji: '🎨', signals: ['Marketing / growth titles +25', 'SMB company size +20', 'Ecommerce / DTC +15', 'Contact form submission +15', 'Budget keyword +10', 'Unsubscribe -50'] },
            { label: 'Consulting', emoji: '📋', signals: ['C-suite / Founder +30', 'Company size 10–200 +20', 'Professional services +15', 'Multiple page views +12', 'Case study download +20', 'Email bounce -30'] },
          ].map((v) => (
            <div key={v.label} style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{v.emoji}</div>
              <div style={{ fontWeight: 700, color: '#111827', marginBottom: '0.6rem', fontSize: '0.95rem' }}>{v.label}</div>
              <ul style={{ margin: 0, padding: '0 0 0 1.1rem', color: '#6b7280', fontSize: '0.8rem', lineHeight: 1.8 }}>
                {v.signals.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Test mode */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>Try it before you connect HubSpot</h2>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>Run <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: '4px', fontSize: '0.8rem' }}>node scripts/lead-scorer.cjs --test</code> with sample data — no API key needed. See exactly what fires before touching your real data.</p>
        <div style={{ background: '#0d1117', borderRadius: '0.75rem', padding: '1.25rem 1.5rem', fontFamily: '"Fira Code", "Cascadia Code", "Courier New", monospace', fontSize: '0.8rem', lineHeight: 1.8, overflowX: 'auto' }}>
          <div style={{ color: '#8b949e', marginBottom: '8px' }}>$ node scripts/lead-scorer.cjs --test</div>
          <div style={{ color: '#6e7681', marginBottom: '8px' }}>Running in TEST MODE (sample data — no HubSpot connection needed)</div>
          <div style={{ color: '#6e7681', marginBottom: '12px' }}>─────────────────────────────────────────────────────────────────</div>
          <div><span style={{ color: '#f85149' }}>🔥 HOT</span><span style={{ color: '#e6edf3' }}>    Sarah Chen — Score: 92/100</span></div>
          <div style={{ color: '#8b949e', paddingLeft: '40px' }}>VP Engineering +30, 500+ employees +30, tech industry +15, pricing page +17</div>
          <div style={{ color: '#58a6ff', paddingLeft: '40px' }}>→ Score written to HubSpot: abbi_lead_score=92, abbi_lead_classification=HOT</div>
          <div style={{ marginTop: '8px' }}><span style={{ color: '#e3b341' }}>🌡  WARM</span><span style={{ color: '#e6edf3' }}>   James Okonkwo — Score: 58/100</span><span style={{ color: '#8b949e' }}> (decay: 74→58, 3 weeks inactive)</span></div>
          <div style={{ color: '#8b949e', paddingLeft: '40px' }}>Director +20, 50–200 employees +20, SaaS +15, email opens +3</div>
          <div style={{ marginTop: '8px' }}><span style={{ color: '#8b949e' }}>❄️  COLD</span><span style={{ color: '#e6edf3' }}>   Lisa Park — Score: 0/100</span></div>
          <div style={{ color: '#8b949e', paddingLeft: '40px' }}>competitor.com -100, Director +30, 50–200 employees +20, SaaS +15</div>
          <div style={{ marginTop: '8px' }}><span style={{ color: '#79c0ff' }}>🧊 WENT COLD</span><span style={{ color: '#e6edf3' }}>: Bob Walsh — VP Sales at BigCorp</span></div>
          <div style={{ color: '#8b949e', paddingLeft: '40px' }}>Score: 45/100 (email bounced -30) — would have scored 75/100</div>
        </div>
      </section>

      {/* Deal priority scorer */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>Deal priority scorer</h2>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>Scores open <em>deals</em> (not contacts) by inactivity, value, engagement, and stage urgency. Outputs CRITICAL / WARNING / WATCH with context — and auto-creates HubSpot tasks.</p>
        <div style={{ background: '#0d1117', borderRadius: '0.75rem', padding: '1.25rem 1.5rem', fontFamily: '"Fira Code", "Cascadia Code", "Courier New", monospace', fontSize: '0.8rem', lineHeight: 1.8, overflowX: 'auto' }}>
          <div style={{ color: '#8b949e', marginBottom: '8px' }}>$ node scripts/deal-scorer.cjs score-all</div>
          <div><span style={{ color: '#f85149' }}>🚨 CRITICAL</span><span style={{ color: '#e6edf3' }}>  MegaCorp - Full Suite      $50,000  Decision stage</span></div>
          <div style={{ color: '#8b949e', paddingLeft: '48px' }}>Inactivity: 14d · No engagement · High value</div>
          <div style={{ color: '#58a6ff', paddingLeft: '48px' }}>→ HubSpot task created: &quot;Urgent follow-up required&quot;</div>
          <div style={{ marginTop: '4px' }}><span style={{ color: '#e3b341' }}>⚠️  WARNING</span><span style={{ color: '#e6edf3' }}>   Acme Corp - Enterprise Plan $24,000  Proposal sent</span></div>
          <div style={{ color: '#8b949e', paddingLeft: '48px' }}>Inactivity: 9d · Last note 9 days ago</div>
          <div style={{ marginTop: '4px' }}><span style={{ color: '#8b949e' }}>👁  WATCH</span><span style={{ color: '#e6edf3' }}>     FastMover Ltd              $12,000  Contract sent</span></div>
          <div style={{ color: '#8b949e', paddingLeft: '48px' }}>Inactivity: 7d · Approaching threshold</div>
          <div style={{ marginTop: '16px', borderTop: '1px solid #21262d', paddingTop: '12px' }}>
            <div style={{ color: '#8b949e', marginBottom: '4px' }}>Pipeline velocity (week-over-week):</div>
            <div style={{ color: '#e6edf3' }}>{'  Appointment → Qualified:  '}<span style={{ color: '#3fb950' }}>{'3.2d  ↓ 0.8d  ✅'}</span></div>
            <div style={{ color: '#e6edf3' }}>{'  Qualified → Proposal:     '}<span style={{ color: '#e3b341' }}>{'8.1d  ↑ 2.3d  ⚠️'}</span></div>
            <div style={{ color: '#e6edf3' }}>{'  Proposal → Decision:     '}<span style={{ color: '#3fb950' }}>{'12.4d  → 0.1d  ✅'}</span></div>
          </div>
        </div>
        <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: '0.5rem', padding: '0.75rem 1rem', marginTop: '0.75rem', fontSize: '0.875rem' }}>
          <strong style={{ color: '#92400e' }}>Pipeline velocity tracking</strong>
          <span style={{ color: '#78350f' }}> — week-over-week stage trend arrows. This is what sales ops teams pay Clari and InsightSquared monthly for. It&apos;s in your weekly report.</span>
        </div>
      </section>

      {/* Vertical configs */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>Pre-built scoring models for your industry</h2>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>Don&apos;t start from a blank config. Three vertical-specific models included — swap in 10 seconds.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {[
            { label: 'B2B SaaS', desc: 'Higher weights for VP+, 50–500 employees, tech/finance/SaaS. Email open multiplier. 80-point hot threshold.', color: '#dbeafe', text: '#1d4ed8' },
            { label: 'Agency', desc: 'Weighted for CMO/Marketing Director, mid-size companies, professional services. 70-point threshold — surface more leads.', color: '#dcfce7', text: '#15803d' },
            { label: 'Consulting', desc: 'C-suite and VP-only hot leads. Conservative 85-point threshold — only the most qualified get escalated.', color: '#f3e8ff', text: '#7e22ce' },
          ].map((v) => (
            <div key={v.label} style={{ background: v.color, borderRadius: '0.5rem', padding: '1rem' }}>
              <div style={{ fontWeight: 700, color: v.text, fontSize: '0.95rem', marginBottom: '0.5rem' }}>{v.label}</div>
              <p style={{ color: v.text, fontSize: '0.8rem', margin: 0, lineHeight: 1.5, opacity: 0.85 }}>{v.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: '0.75rem' }}>All three in <code style={{ background: '#f3f4f6', padding: '2px 4px', borderRadius: '3px' }}>examples/scoring-rules.json</code> — copy, paste, adjust.</p>
      </section>

      {/* Code preview */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>The actual code</h2>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>Real Node.js code, zero dependencies, fully commented. Pure lead scoring logic — no black box.</p>
        <div style={{ background: '#0d1117', borderRadius: '0.75rem', padding: '1.25rem 1.5rem', fontFamily: '"Fira Code", "Cascadia Code", "Courier New", monospace', fontSize: '0.75rem', lineHeight: 1.8, overflowX: 'auto', maxHeight: '480px', overflow: 'auto', color: '#e6edf3' }}>
          <div style={{ color: '#8b949e' }}>{'// AI Sales Agent — Lead Scoring Engine'}</div>
          <div style={{ color: '#8b949e', marginBottom: '8px' }}>{'// Pure Node.js, 20+ rules, score decay, negative signals'}</div>
          <div style={{ color: '#7ee787' }}>{'function scoreContact(properties) {'}</div>
          <div style={{ color: '#e6edf3', paddingLeft: '1rem' }}>{'const rules = config.scoring.rules;'}</div>
          <div style={{ color: '#e6edf3', paddingLeft: '1rem' }}>{'let total = 0, breakdown = [];'}</div>
          <div style={{ color: '#8b949e', paddingLeft: '1rem' }}>{'// Score on job title, company size, industry'}</div>
          <div style={{ color: '#7ee787', paddingLeft: '1rem' }}>{'for (const rule of rules) {'}</div>
          <div style={{ color: '#e6edf3', paddingLeft: '2rem' }}>{'if (value.includes(rule.keyword)) {'}</div>
          <div style={{ color: '#e6edf3', paddingLeft: '3rem' }}>{'total += rule.points;'}</div>
          <div style={{ color: '#e6edf3', paddingLeft: '3rem' }}>{'breakdown.push({rule, value, points});'}</div>
          <div style={{ color: '#7ee787', paddingLeft: '2rem' }}>{'}'}</div>
          <div style={{ color: '#7ee787', paddingLeft: '1rem' }}>{'}'}</div>
          <div style={{ color: '#8b949e', paddingLeft: '1rem', marginTop: '8px' }}>{'// Apply negative signals'}</div>
          <div style={{ color: '#7ee787', paddingLeft: '1rem' }}>{'if (bounced) total -= 30;'}</div>
          <div style={{ color: '#7ee787', paddingLeft: '1rem' }}>{'if (competitor) total -= 100;'}</div>
          <div style={{ color: '#8b949e', paddingLeft: '1rem', marginTop: '8px' }}>{'// Apply score decay for inactive leads'}</div>
          <div style={{ color: '#7ee787', paddingLeft: '1rem' }}>{'const weeks = (now - lastActivity) / (7*24*60*60*1000);'}</div>
          <div style={{ color: '#7ee787', paddingLeft: '1rem' }}>{'total *= Math.max(0, 1 - (5% * weeks));'}</div>
          <div style={{ color: '#8b949e', paddingLeft: '1rem', marginTop: '8px' }}>{'// Return score + breakdown for Slack alert'}</div>
          <div style={{ color: '#7ee787', paddingLeft: '1rem' }}>{'return { score: Math.min(100, total), breakdown };'}</div>
          <div style={{ color: '#7ee787' }}>{'}'}</div>
          <div style={{ color: '#8b949e', marginTop: '8px' }}>{'// Full source code included in download'}</div>
        </div>
        <p style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: '0.75rem' }}>Full file in download (lead-scorer.cjs, deal-scorer.cjs, pipeline-report.cjs). This is the actual scoring logic — 200 lines does all the work.</p>
      </section>

      {/* What's included file tree */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>What&apos;s included</h2>
        <div style={{ background: '#f9fafb', borderRadius: '0.75rem', padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.825rem' }}>
          <div style={{ color: '#6b7280', marginBottom: '0.5rem' }}>ai-sales-agent/</div>
          {[
            ['AGENT.md', 'Agent personality, decision rules, alert formats'],
            ['WORKFLOWS.md', '5 complete workflows step-by-step'],
            ['SETUP.md', 'Setup guide — HubSpot, Sheets, Slack (15 min)'],
            ['config.json', 'Scoring rules, thresholds, channels — no code changes'],
            ['scripts/hubspot.cjs', 'HubSpot CRM integration, 20+ commands'],
            ['scripts/sheets.cjs', 'Google Sheets integration & logging'],
            ['scripts/slack.cjs', 'Slack alerts and daily/weekly reports'],
            ['scripts/lead-scorer.cjs', '⭐ Lead scoring engine + writeback'],
            ['scripts/deal-scorer.cjs', '⭐ Deal priority scorer'],
            ['scripts/pipeline-report.cjs', '⭐ Daily & weekly pipeline reports'],
            ['scripts/follow-up-checker.cjs', '⭐ Stale deal detector & auto-tasks'],
            ['examples/saaS.config.json', 'Pre-built B2B SaaS scoring config'],
            ['examples/agency.config.json', 'Pre-built Agency scoring config'],
            ['examples/consulting.config.json', 'Pre-built Consulting scoring config'],
          ].map(([file, desc]) => (
            <div key={file} style={{ display: 'flex', gap: '1rem', padding: '0.3rem 0', borderBottom: '1px solid #e5e7eb' }}>
              <span style={{ color: '#2563eb', width: '20rem', flexShrink: 0, fontWeight: 500 }}>{file}</span>
              <span style={{ color: '#6b7280', fontSize: '0.8rem' }}>{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HubSpot Breeze AI callout */}
      <section style={{ marginBottom: '1.5rem' }}>
        <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: '0.75rem', padding: '1.25rem 1.5rem' }}>
          <div style={{ fontWeight: 700, color: '#92400e', marginBottom: '0.5rem', fontSize: '0.95rem' }}>⚠️ What about HubSpot Breeze AI?</div>
          <p style={{ color: '#374151', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
            HubSpot Breeze AI is a black box locked inside an $800+/month subscription. You can&apos;t see the scoring logic. You can&apos;t change the rules. You can&apos;t export the code. The AI Sales Agent is the opposite: full transparency, JSON config, complete source code, $79 one-time.
          </p>
        </div>
      </section>

      {/* HubSpot native comparison */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>vs HubSpot native lead scoring</h2>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>HubSpot&apos;s own lead scoring requires Marketing Hub Professional or Enterprise. Here&apos;s the math.</p>
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
            <div style={{ padding: '0.75rem 1rem', fontWeight: 700, fontSize: '0.8rem', color: '#6b7280', textTransform: 'uppercase' }}></div>
            <div style={{ padding: '0.75rem 1rem', fontWeight: 700, fontSize: '0.8rem', color: '#dc2626', borderLeft: '1px solid #e5e7eb' }}>HubSpot Breeze AI</div>
            <div style={{ padding: '0.75rem 1rem', fontWeight: 700, fontSize: '0.8rem', color: '#16a34a', borderLeft: '1px solid #e5e7eb' }}>AI Sales Agent</div>
          </div>
          {[
            ['Price', '$800–$1,200/mo', '$79 one-time'],
            ['Lead scoring', '✅ Included', '✅ Included'],
            ['Scoring logic visible', '❌ Black box', '✅ Full source code'],
            ['Custom scoring rules', '⚠️ UI-based only', '✅ JSON config you own'],
            ['Score explanation', '❌ Not shown', '✅ "VP +30, tech +15..."'],
            ['Slack alerts', '❌ Not included', '✅ Built in'],
            ['Stale deal detection', '❌ Not included', '✅ Built in + auto-tasks'],
            ['Deal scoring', '❌ Not included', '✅ CRITICAL/WARNING/WATCH'],
            ['Daily pipeline report', '❌ Not included', '✅ Built in'],
            ['Pipeline velocity', '❌ Not included', '✅ Weekly reporting'],
            ['You own the code', '❌ SaaS lock-in', '✅ Full source, forever'],
          ].map(([feature, hubspot, ours], i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: i < 10 ? '1px solid #e5e7eb' : 'none' }}>
              <div style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#374151', fontWeight: 500 }}>{feature}</div>
              <div style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#374151', borderLeft: '1px solid #e5e7eb' }}>{hubspot}</div>
              <div style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#16a34a', fontWeight: 600, borderLeft: '1px solid #e5e7eb' }}>{ours}</div>
            </div>
          ))}
        </div>
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '0.5rem', padding: '0.875rem 1rem', marginTop: '0.75rem' }}>
          <strong style={{ color: '#15803d' }}>$79 once vs $9,600+/year.</strong>
          <span style={{ color: '#374151', fontSize: '0.875rem' }}> Transparent scoring. Full source. No lock-in. You own it forever.</span>
        </div>
      </section>

      {/* Example config */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>Example scoring config</h2>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>Change the rules in config.json — no code changes required.</p>
        <div style={{ background: '#111827', borderRadius: '0.75rem', padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.8rem', overflowX: 'auto', color: '#e2e8f0' }}>
          <div style={{ color: '#6b7280', marginBottom: '0.5rem' }}>{'// config.json — customise per your business'}</div>
          <pre style={{ margin: 0, lineHeight: 1.8 }}>{`{
  "scoring": {
    "job_title_weight": 25,
    "hot_threshold": 85,
    "warm_threshold": 50,
    "stale_deal_days": 7
  },
  "rules": [
    { "field": "jobtitle", "contains": ["ceo","founder","vp"], "points": 25 },
    { "field": "company_size", "range": {"min": 500}, "points": 30 },
    { "field": "industry", "contains": ["saas","tech"], "points": 15 }
  ],
  "negative_signals": {
    "email_bounced": -30,
    "unsubscribe": -50,
    "competitor_domains": ["competitor.com"]
  }
}`}</pre>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1.25rem' }}>FAQ</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { q: 'Does it work with a free HubSpot account?', a: 'Yes. Free tier works fine. Just needs an API key — available on all plans, including free.' },
            { q: 'Can I customise the lead scoring rules?', a: 'Yes. All in config.json. Job title weights, company size, industry, engagement. No code changes needed.' },
            { q: 'Does it work with other LLMs?', a: 'Yes. Claude, GPT, Gemini, etc. You can also run scripts as cron jobs with zero LLM — pure automation.' },
            { q: 'What if I don\'t use Google Sheets?', a: 'Optional. Lead scoring and Slack alerts work without it. Sheets is just for archiving if you want a paper trail.' },
            { q: 'What\'s the refund policy?', a: '30 days. Email us first — we\'ll fix it. If we can\'t, full refund, no questions asked.' },
          ].map((item, i) => (
            <details key={i} style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', color: '#111827' }}>{item.q}</summary>
              <p style={{ marginTop: '0.75rem', color: '#374151', fontSize: '0.875rem', lineHeight: 1.6 }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Framework compatibility */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Works with any AI framework</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
          {[
            ['OpenClaw', 'Drop in skills directory. Run. Done.'],
            ['Claude API', 'Load AGENT.md as system prompt.'],
            ['GPT API', 'Load AGENT.md as system message.'],
            ['LangChain', 'Scripts become tools, WORKFLOWS.md → chains.'],
            ['CrewAI', 'AGENT.md → config, WORKFLOWS.md → tasks.'],
            ['Any other', 'Standalone Node.js scripts. No framework required.'],
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
          Deploy this for SaaS clients in 15 minutes. Customise scoring rules per client. Bill $2,000–$5,000 for CRM automation. One $79 purchase covers all your projects.
        </p>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: '#eff6ff', borderRadius: '0.75rem', padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>HubSpot charges $9,600+/year for lead scoring. You pay $79.</h2>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>Once. Own it forever. Works on their free CRM tier. 30-day money-back guarantee.</p>
        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#2563eb', marginBottom: '1rem' }}>$79</div>
        <button
          onClick={() => handleCheckout('ai-sales-agent')}
          style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '1rem 3rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer' }}
        >
          Buy Now — $79
        </button>
        <div style={{ marginTop: '1.25rem', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '0.5rem', padding: '0.875rem 1.25rem', maxWidth: '460px', margin: '1.25rem auto 0' }}>
          <p style={{ color: '#15803d', fontSize: '0.875rem', margin: 0, lineHeight: 1.6 }}>
            <strong>30-day guarantee, no fine print:</strong> Try it for 30 days. If it doesn&apos;t save you at least 2 hours a week on pipeline management, email me and I&apos;ll refund you immediately — no questions, no forms, no hassle.
          </p>
        </div>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.75rem' }}>Instant download · Full source code included</p>
      </section>

    </main>
  )
}
