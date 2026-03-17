'use client';

const templates = [
  {
    slug: 'ai-sales-agent',
    name: 'AI Sales Agent',
    icon: '🤝',
    price: 79,
    badge: 'Most Popular',
    tagline: 'Your AI agent manages your entire sales pipeline. Autonomously.',
    description: 'Connects to HubSpot, Slack, and Google Sheets. Scores every new lead, alerts your team on hot prospects, flags stale deals, and delivers daily pipeline reports — without you lifting a finger.',
    includes: [
      'Lead scoring engine (customisable rules)',
      'Hot lead Slack alerts (instant)',
      'Daily pipeline report',
      'Follow-up detection for stale deals',
      'Weekly performance report',
      'Full setup guide (15 min)',
    ],
    tools: ['HubSpot', 'Slack', 'Google Sheets'],
    frameworks: 'Works with Claude, GPT, Gemini, LangChain, CrewAI, OpenClaw',
  },
  {
    slug: 'ai-payment-monitor',
    name: 'AI Payment Monitor',
    icon: '💳',
    price: 39,
    badge: 'Simplest Setup',
    tagline: 'Never miss a Stripe dispute again.',
    description: 'Watches your Stripe account 24/7. The moment a dispute opens, your team gets a Slack alert with the exact deadline and a direct link. Plus failed payment alerts, subscription monitoring, and daily revenue summaries.',
    includes: [
      'Instant dispute alerts (7-day deadline shown)',
      'Failed payment clustering (fraud detection)',
      'Subscription cancellation alerts',
      'Refund rate monitoring',
      'Daily revenue summary',
      'Setup in 5 minutes (just 2 env vars)',
    ],
    tools: ['Stripe', 'Slack'],
    frameworks: 'Works with Claude, GPT, Gemini, LangChain, CrewAI, OpenClaw — or standalone cron',
  },
]

async function handleCheckout(product) {
  const res = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ product }),
  });
  const data = await res.json();
  if (data.url) window.location.href = data.url;
}

export default function TemplatesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">AI Agent Templates</h1>
        <p className="text-xl text-gray-600">
          Complete AI agent setups for specific business roles. Not just API wrappers — full agent configurations with decision logic, workflows, and reporting built in.
        </p>
        <p className="text-gray-500 mt-2">Works with any LLM. Framework-agnostic. Zero npm dependencies.</p>
      </div>

      <div className="space-y-10">
        {templates.map((t) => (
          <div key={t.slug} className="border-2 border-gray-200 rounded-xl p-8 hover:border-blue-500 transition">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{t.icon}</span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold">{t.name}</h2>
                      {t.badge && (
                        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-full">
                          {t.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 font-medium">{t.tagline}</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-3 text-lg">{t.description}</p>
              </div>
              <div className="text-right ml-8 flex-shrink-0">
                <div className="text-4xl font-bold text-blue-600">${t.price}</div>
                <div className="text-gray-500 text-sm mb-3">one-time</div>
                <button onClick={() => handleCheckout(t.slug)} className="btn-primary block text-center w-full">Buy Now — ${t.price}</button>
                <p className="text-xs text-gray-500 mt-2">30-day money-back guarantee</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">What&apos;s included</h3>
                <ul className="space-y-2">
                  {t.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Connects to</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {t.tools.map((tool) => (
                    <span key={tool} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Framework compatibility</h3>
                <p className="text-gray-600 text-sm">{t.frameworks}</p>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-green-800 text-sm font-medium">✅ Production tested against live APIs</p>
                  <p className="text-green-700 text-sm">Pure Node.js · Zero dependencies · Own it forever</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
              <a href={`/templates/${t.slug}`} className="text-blue-600 hover:underline text-sm font-medium">
                View full details →
              </a>
              <button onClick={() => handleCheckout(t.slug)} className="btn-primary px-8 py-2">
                Buy Now — ${t.price}
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-16 bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Why buy a template instead of building it yourself?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-red-600 mb-4">Building from scratch</h3>
            <ul className="space-y-2 text-gray-700">
              <li>❌ 10–20 hours to build and debug</li>
              <li>❌ HubSpot API quirks and pagination</li>
              <li>❌ OAuth flows and token management</li>
              <li>❌ Error handling, rate limiting, retries</li>
              <li>❌ Figuring out what to actually track</li>
              <li>❌ Writing the agent prompts and decision logic</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-green-600 mb-4">Using an Abbi Labs template</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Working in 15 minutes</li>
              <li>✅ Production-tested, edge cases handled</li>
              <li>✅ Decision logic and workflows pre-built</li>
              <li>✅ Customisable — change scoring rules, thresholds, channels</li>
              <li>✅ Works with your existing LLM</li>
              <li>✅ Own it forever, no subscriptions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 border border-gray-200 rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-2">Also available: Free Integration Skills</h2>
        <p className="text-gray-600 mb-4">
          The raw API integrations (Google Sheets, Slack, Notion, HubSpot, Stripe) are available for free.
          Templates include these plus the agent layer on top.
        </p>
        <a href="/skills" className="text-blue-600 font-semibold hover:underline">Browse free skills →</a>
      </section>
    </main>
  )
}
