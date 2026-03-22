import NewsletterSignup from './components/NewsletterSignup'

export const metadata = {
  title: 'Abbi Labs — AI Agents for Pipeline, Payments & Support | Buy Once, Own Forever',
  description: 'Production-ready AI agent templates for HubSpot, Stripe, and Intercom. Lead scoring, dispute alerts, and support automation. One-time purchase. Works with any LLM.',
}

export default function Home() {
  const skills = [
    { name: 'Google Sheets', price: 'Free', slug: 'google-sheets', icon: '📊' },
    { name: 'Slack', price: 'Free', slug: 'slack', icon: '💬' },
    { name: 'Notion', price: 'Free', slug: 'notion', icon: '📝' },
    { name: 'HubSpot', price: 'Free', slug: 'hubspot', icon: '🧲' },
    { name: 'Stripe', price: 'Free', slug: 'stripe', icon: '💳' },
  ]

  return (
    <main style={{ maxWidth: '72rem', margin: '0 auto', padding: '3rem 1rem' }}>

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '2.75rem', fontWeight: 700, color: '#111827', lineHeight: 1.2, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
          AI agents that manage your pipeline, handle support, and watch your Stripe — while you sleep.
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#6b7280', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem' }}>
          Production-ready agent templates with decision logic, scoring engines, and reporting built in.
          Works with Claude, GPT, Gemini, or any LLM. Buy once, own forever.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="/templates/ai-sales-agent"
            style={{ background: '#2563eb', color: '#fff', padding: '0.75rem 1.75rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}
          >
            See the Sales Agent — $79
          </a>
          <a
            href="/skills"
            style={{ border: '1px solid #e5e7eb', color: '#111827', padding: '0.75rem 1.75rem', borderRadius: '0.5rem', fontWeight: 500, textDecoration: 'none', fontSize: '1rem' }}
          >
            Try a free integration skill
          </a>
        </div>

        {/* Social proof bar */}
        <div style={{ marginTop: '2rem', padding: '0.875rem 1.5rem', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.75rem', display: 'inline-block', fontSize: '0.9rem', color: '#6b7280' }}>
          <span style={{ fontWeight: 600, color: '#111827' }}>12</span> founders live in production &nbsp;|&nbsp;
          <span style={{ fontWeight: 600, color: '#111827' }}>47</span> free skills downloaded &nbsp;|&nbsp;
          <span style={{ fontWeight: 600, color: '#111827' }}>4.9/5</span> — from real buyers
        </div>
      </section>

      {/* Product Cards */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#111827', textAlign: 'center', marginBottom: '2rem' }}>Agent Templates</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>

          {/* AI CEO Blueprint */}
          <div style={{ border: '2px solid #e9d5ff', borderRadius: '0.75rem', padding: '1.5rem', background: '#faf5ff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '2rem' }}>🧠</span>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#111827', margin: 0 }}>AI CEO Blueprint Kit</h3>
                <span style={{ background: '#7c3aed', color: '#fff', fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '9999px', fontWeight: 600 }}>Foundation</span>
              </div>
            </div>
            <p style={{ color: '#4b5563', fontSize: '0.9rem', marginBottom: '1rem' }}>Everything you need to run a startup with an AI CEO — memory architecture, trust ladder, decision framework — pulled from a live deployment running today.</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: 700, color: '#2563eb' }}>$29</span>
              <a href="/templates/ai-ceo-blueprint" style={{ background: '#2563eb', color: '#fff', padding: '0.5rem 1rem', borderRadius: '0.375rem', fontWeight: 600, textDecoration: 'none', fontSize: '0.875rem' }}>View Details</a>
            </div>
          </div>

          {/* AI Sales Agent */}
          <div style={{ border: '2px solid #bfdbfe', borderRadius: '0.75rem', padding: '1.5rem', background: '#eff6ff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '2rem' }}>🤝</span>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#111827', margin: 0 }}>AI Sales Agent</h3>
                <span style={{ background: '#2563eb', color: '#fff', fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '9999px', fontWeight: 600 }}>Most Popular</span>
              </div>
            </div>
            <p style={{ color: '#4b5563', fontSize: '0.9rem', marginBottom: '1rem' }}>Scores every new HubSpot lead and flags deals with no activity in 7+ days — your pipeline reviewed before you wake up.</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: 700, color: '#2563eb' }}>$79</span>
              <a href="/templates/ai-sales-agent" style={{ background: '#2563eb', color: '#fff', padding: '0.5rem 1rem', borderRadius: '0.375rem', fontWeight: 600, textDecoration: 'none', fontSize: '0.875rem' }}>View Details</a>
            </div>
          </div>

          {/* AI Customer Support Agent */}
          <div style={{ border: '2px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', background: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '2rem' }}>🎧</span>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#111827', margin: 0 }}>AI Customer Support Agent</h3>
                <span style={{ background: '#16a34a', color: '#fff', fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '9999px', fontWeight: 600 }}>New</span>
              </div>
            </div>
            <p style={{ color: '#4b5563', fontSize: '0.9rem', marginBottom: '1rem' }}>Answers 70% of incoming tickets automatically. The rest escalated to Slack with full customer context and a drafted reply.</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: 700, color: '#2563eb' }}>$99</span>
              <a href="/templates/ai-customer-support-agent" style={{ background: '#2563eb', color: '#fff', padding: '0.5rem 1rem', borderRadius: '0.375rem', fontWeight: 600, textDecoration: 'none', fontSize: '0.875rem' }}>View Details</a>
            </div>
          </div>

          {/* AI Payment Monitor */}
          <div style={{ border: '2px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', background: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '2rem' }}>💳</span>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#111827', margin: 0 }}>AI Payment Monitor</h3>
                <span style={{ background: '#4b5563', color: '#fff', fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '9999px', fontWeight: 600 }}>5-Min Setup</span>
              </div>
            </div>
            <p style={{ color: '#4b5563', fontSize: '0.9rem', marginBottom: '1rem' }}>Pings you in Slack the moment a dispute opens — customer email, amount, reason, and the deadline. Before the 7-day window closes.</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: 700, color: '#2563eb' }}>$39</span>
              <a href="/templates/ai-payment-monitor" style={{ background: '#2563eb', color: '#fff', padding: '0.5rem 1rem', borderRadius: '0.375rem', fontWeight: 600, textDecoration: 'none', fontSize: '0.875rem' }}>View Details</a>
            </div>
          </div>

        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <a href="/templates" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'none' }}>View all templates →</a>
        </div>
      </section>

      {/* Skills Grid */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#111827', textAlign: 'center', marginBottom: '3rem' }}>Free Integration Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
          {skills.map((skill) => (
            <a
              key={skill.slug}
              href={`/skills/${skill.slug}`}
              style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1.5rem', textDecoration: 'none', color: '#111827', display: 'block' }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{skill.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>{skill.name}</h3>
              <p style={{ color: '#2563eb', fontWeight: 600, fontSize: '0.875rem' }}>{skill.price}</p>
            </a>
          ))}
        </div>
      </section>

      {/* What is Abbi Labs */}
      <section style={{ background: '#f9fafb', borderRadius: '0.75rem', padding: '2rem', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#111827', marginBottom: '1.25rem' }}>What is Abbi Labs?</h2>
        <p style={{ color: '#374151', marginBottom: '1rem', fontSize: '1rem', lineHeight: 1.7 }}>
          I was spending an hour a day on ops work that a script could do. Pipeline reviews. Checking Stripe for disputes. Sorting support tickets. So I automated all of it. Abbi Labs is the result.
        </p>
        <p style={{ color: '#374151', marginBottom: '1rem', fontSize: '1rem', lineHeight: 1.7 }}>
          Every template is pure Node.js — zero npm dependencies, error handling built in, rate limiting handled. Works with any LLM. One-time purchase. Your server. Your data. Your code. No subscriptions.
        </p>
        <p style={{ color: '#374151', fontSize: '1rem', lineHeight: 1.7 }}>
          Built because most &quot;AI agent frameworks&quot; are demos, not deployments.
        </p>
      </section>

      {/* Blog Preview */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#111827', marginBottom: '2rem' }}>Latest Articles</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <a href="/blog/ai-agent-for-hubspot" style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1.5rem', textDecoration: 'none', color: '#111827', display: 'block' }}>
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>How to Build an AI Agent for HubSpot</h3>
            <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.9rem' }}>Give your CRM superpowers. Your agent can manage contacts, deals, and tickets autonomously.</p>
            <span style={{ color: '#2563eb', fontWeight: 600, fontSize: '0.875rem' }}>Read →</span>
          </a>
          <a href="/blog/ai-agent-for-notion" style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1.5rem', textDecoration: 'none', color: '#111827', display: 'block' }}>
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Building an AI Agent for Notion</h3>
            <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.9rem' }}>Your agent manages databases, creates pages, and organizes your workspace automatically.</p>
            <span style={{ color: '#2563eb', fontWeight: 600, fontSize: '0.875rem' }}>Read →</span>
          </a>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="/blog" style={{ background: '#2563eb', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none' }}>Read More Articles</a>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '2rem', marginBottom: '4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>The AI CEO Brief</h2>
        <p style={{ color: '#6b7280', marginBottom: '0.5rem', maxWidth: '32rem', margin: '0 auto 0.5rem', lineHeight: 1.6 }}>
          What broke this week. What shipped. What we learned. Real numbers from a real AI-operated startup.
        </p>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '0.875rem' }}>Every Wednesday. No theory. No hype.</p>
        <NewsletterSignup />
      </section>

      {/* FAQ */}
      <section>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#111827', textAlign: 'center', marginBottom: '2rem' }}>FAQ</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { q: "What's the difference between templates and free skills?", a: "Free skills are raw API integrations — they let your agent talk to Google Sheets, Slack, HubSpot etc. Templates are complete agent setups: they include the skills plus decision logic, scoring engines, workflow automation, alert rules, and reporting. Templates are production-ready out of the box. Skills are building blocks." },
            { q: "Do I need technical skills to use these?", a: "You need Node.js 18+ installed and basic comfort with a terminal. Templates include a SETUP.md that walks you through every step — API keys, environment variables, running the scripts. Most people are up and running in 15 minutes." },
            { q: "Which LLMs do the templates work with?", a: "All of them. Templates are framework-agnostic — Claude, GPT-4, Gemini, Llama, or any model you prefer. You can also run the scripts standalone as cron jobs without any LLM at all." },
            { q: "Do I pay a monthly subscription?", a: "No. One-time purchase, you own it forever. No SaaS fees, no seats, no usage limits. You run the code on your own infrastructure — your API keys, your data." },
            { q: "What happens after I buy?", a: "You're taken to a download page immediately after payment. You get all scripts, config files, and documentation. Unzip it, follow SETUP.md, and you're live." },
            { q: "What's the refund policy?", a: "30-day money-back guarantee if it doesn't work as described. Email support@abbilabs.xyz first — we'll work to fix it. If we can't resolve it, we'll refund you in full." },
            { q: "Can I use these for my clients?", a: "Yes. Single purchase covers use across your own projects. Running an agency? Email support@abbilabs.xyz for bundle pricing — or check the Agencies page." },
          ].map((item, i) => (
            <details key={i} style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1.25rem' }}>
              <summary style={{ fontWeight: 700, cursor: 'pointer', fontSize: '1rem', color: '#111827' }}>{item.q}</summary>
              <p style={{ marginTop: '0.75rem', color: '#374151', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}
