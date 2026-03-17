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
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <a href="/templates" className="hover:underline">Templates</a> / AI Sales Agent
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">🤝 AI Sales Agent</h1>
            <p className="text-xl text-gray-600">Your AI agent manages your entire sales pipeline. Autonomously.</p>
            <div className="flex gap-2 mt-3">
              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">✅ Production Tested</span>
              <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium">Framework Agnostic</span>
              <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full font-medium">Zero Dependencies</span>
            </div>
          </div>
          <div className="text-right ml-8 flex-shrink-0">
            <div className="text-5xl font-bold text-blue-600">$79</div>
            <div className="text-gray-500 mb-3">one-time · own forever</div>
            <button onClick={() => handleCheckout("ai-sales-agent")} className="btn-primary block text-center text-lg px-8 py-3 w-full">Buy Now — $79</button>
            <p className="text-xs text-gray-500 mt-2">30-day money-back guarantee</p>
          </div>
        </div>
      </div>

      {/* What it does */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">What your agent does</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: '🎯', title: 'Lead Scoring', desc: 'Scores every new HubSpot contact against configurable rules (job title, company size, industry, engagement)' },
            { icon: '🔥', title: 'Hot Lead Alerts', desc: 'Instant Slack alert when a lead scores above your threshold — before they go cold' },
            { icon: '📊', title: 'Daily Pipeline Report', desc: 'Every morning: pipeline value, new leads, deals progressed, top 5 deals by value' },
            { icon: '⚠️', title: 'Follow-up Detection', desc: 'Flags deals that haven\'t been touched in X days — before you lose them' },
            { icon: '📈', title: 'Weekly Performance Report', desc: 'Revenue, win rate, pipeline growth, recommendations — every Monday' },
            { icon: '📝', title: 'Auto-logging', desc: 'Every lead and deal change logged to Google Sheets automatically' },
          ].map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-lg p-4">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">What&apos;s included</h2>
        <div className="bg-gray-50 rounded-lg p-6 font-mono text-sm">
          <div className="text-gray-500 mb-2">ai-sales-agent/</div>
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
            <div key={file} className="flex gap-4 py-1 border-b border-gray-200 last:border-0">
              <span className="text-blue-600 w-64 flex-shrink-0">{file}</span>
              <span className="text-gray-500">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Framework compatibility */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Works with any AI framework</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            ['OpenClaw', 'Drop into skills directory. Done.'],
            ['Claude API', 'Load AGENT.md as system prompt'],
            ['GPT API', 'Load AGENT.md as system message'],
            ['LangChain', 'Scripts as tools, WORKFLOWS as chain'],
            ['CrewAI', 'AGENT.md → agent, WORKFLOWS → tasks'],
            ['Any other', 'Scripts are standalone Node.js'],
          ].map(([fw, how]) => (
            <div key={fw} className="border border-gray-200 rounded p-3">
              <div className="font-bold text-sm">{fw}</div>
              <div className="text-gray-500 text-xs mt-1">{how}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Requirements</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Node.js 18+</li>
            <li>✓ HubSpot account (free tier works)</li>
            <li>✓ Google account + service account (free)</li>
            <li>✓ Slack workspace (free)</li>
            <li>✓ Any LLM (Claude, GPT, Gemini, etc.)</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Setup time</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">HubSpot API key</span>
              <span className="text-gray-500">~5 min</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Google service account</span>
              <span className="text-gray-500">~5 min</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Slack bot</span>
              <span className="text-gray-500">~3 min</span>
            </div>
            <div className="flex justify-between items-center border-t pt-3 font-bold">
              <span>Total</span>
              <span className="text-blue-600">~15 min</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to automate your sales pipeline?</h2>
        <p className="text-gray-600 mb-6">One-time purchase. Own it forever. 30-day money-back guarantee.</p>
        <div className="text-4xl font-bold text-blue-600 mb-4">$79</div>
        <button onClick={() => handleCheckout("ai-sales-agent")} className="btn-primary text-lg px-12 py-4">Buy Now — $79</button>
        <p className="text-gray-500 text-sm mt-4">Instant download · Full source code included</p>
      </section>
    </main>
  )
}
