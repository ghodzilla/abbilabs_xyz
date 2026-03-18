export const metadata = {
  title: 'HubSpot Pipeline Automation — AI Agent That Catches Stale Deals Before They Die',
  description:
    'AI agent monitors your HubSpot pipeline 24/7. Flags stale deals, scores new leads, sends Slack alerts and daily reports. $79 one-time.',
  keywords: [
    'HubSpot pipeline automation',
    'HubSpot stale deal detection',
    'HubSpot AI agent',
    'CRM pipeline automation',
    'HubSpot deal monitoring',
    'sales pipeline automation',
    'HubSpot Slack alerts',
  ],
  openGraph: {
    title: 'HubSpot Pipeline Automation — AI Agent That Catches Stale Deals Before They Die',
    description:
      'AI agent monitors your HubSpot pipeline 24/7. Flags stale deals, scores new leads, sends Slack alerts and daily reports. $79 one-time.',
    url: 'https://abbilabs.xyz/hubspot-pipeline-automation',
    siteName: 'Abbi Labs',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'HubSpot Pipeline Automation AI Agent',
  description:
    'AI agent that monitors your HubSpot CRM pipeline 24/7 — flags stale deals, scores new leads, and sends Slack alerts with a daily pipeline report.',
  url: 'https://abbilabs.xyz/templates/ai-sales-agent',
  brand: { '@type': 'Brand', name: 'Abbi Labs' },
  offers: {
    '@type': 'Offer',
    price: '79.00',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: 'https://abbilabs.xyz/templates/ai-sales-agent',
  },
};

export default function HubSpotPipelineAutomationPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <a href="/" className="hover:underline">Home</a>
        <span>/</span>
        <a href="/templates" className="hover:underline">Templates</a>
        <span>/</span>
        <span>HubSpot Pipeline Automation</span>
      </div>

      {/* Hero */}
      <section className="mb-12">
        <div className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          🔥 The silence is the signal — stale deals never get updated
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Your HubSpot Pipeline Is Full of Deals Nobody&apos;s Looked At
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          An AI agent that checks your HubSpot CRM every 30 minutes, flags deals that went quiet, scores every new lead, and sends you a Slack alert before a deal dies. One-time $79.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <a href="/templates/ai-sales-agent" className="btn-primary text-lg px-8 py-4">
            Automate Your Pipeline — $79
          </a>
          <div className="flex items-center gap-2 text-sm text-gray-500 pt-3">
            <span>✓ One-time payment</span>
            <span>·</span>
            <span>✓ Own forever</span>
            <span>·</span>
            <span>✓ 30-day guarantee</span>
          </div>
        </div>
      </section>

      {/* Pain section */}
      <section className="mb-12 bg-orange-50 border border-orange-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-orange-900">
          Pipeline reports are always stale. Deals go cold silently.
        </h2>
        <div className="space-y-4 text-orange-800">
          <p className="text-lg">
            Your reps update the CRM once a week — if you&apos;re lucky. Half the deals in your pipeline haven&apos;t been touched in two weeks. You just don&apos;t know which half.
          </p>
          <p>
            By the time you review the pipeline report, the deals that needed attention are already gone cold. The prospect moved on. The competitor got in first. You never got a signal.
          </p>
          <p className="font-semibold text-lg border-l-4 border-orange-400 pl-4">
            &quot;The silence is the signal.&quot; Stale deals never get updated — so polling for recent changes misses them entirely. You need an agent that flags what&apos;s <em>missing</em>, not just what changed.
          </p>
          <ul className="space-y-2 mt-4">
            <li className="flex gap-2">❌ <span>Manual pipeline reviews happen too late — the deal is already dead</span></li>
            <li className="flex gap-2">❌ <span>HubSpot built-in workflows don&apos;t score leads or flag stale activity intelligently</span></li>
            <li className="flex gap-2">❌ <span>Slack reminders require manual setup for every deal — doesn&apos;t scale</span></li>
            <li className="flex gap-2">❌ <span>No single place to see &quot;here are the 3 deals that need attention today&quot;</span></li>
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How the HubSpot pipeline automation agent works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: '⏱️',
              title: 'Checks Every 30 Minutes',
              desc: 'Runs on a cron schedule — 24/7. Every 30 minutes it scans your entire open pipeline for deals that need attention. No manual triggering required.',
            },
            {
              icon: '🕰️',
              title: 'Flags Deals With No Activity 7+ Days',
              desc: "Any deal where the last logged activity is older than your threshold (default: 7 days) is flagged automatically and sent to your Slack channel with a direct HubSpot link.",
            },
            {
              icon: '🎯',
              title: 'Scores Every New Lead',
              desc: 'New HubSpot contacts are scored in real-time against configurable rules — job title, company size, industry, engagement. Hot leads get an instant Slack ping.',
            },
            {
              icon: '📣',
              title: 'Slack Alerts With Context',
              desc: 'Alerts include deal name, value, owner, days since last activity, and a direct link to open in HubSpot. One click to act.',
            },
            {
              icon: '📊',
              title: 'Daily Pipeline Report',
              desc: 'Every morning: total pipeline value, deals at risk, new leads scored, stage movement, and your top 5 deals by value — all in one Slack message.',
            },
            {
              icon: '📋',
              title: 'Auto-Logging to Google Sheets',
              desc: 'Every lead score and stale deal flag is logged to a Google Sheet automatically — so you have a paper trail and can run your own analysis.',
            },
          ].map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-lg p-4">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How it compares</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 border border-gray-200 font-semibold">Feature</th>
                <th className="text-center p-4 border border-gray-200 font-semibold text-gray-500">Manual Review</th>
                <th className="text-center p-4 border border-gray-200 font-semibold text-gray-500">HubSpot Workflows<br /><span className="font-normal text-xs">(built-in)</span></th>
                <th className="text-center p-4 border border-gray-200 font-semibold text-blue-700 bg-blue-50">Abbi Labs Agent<br /><span className="font-normal text-xs">($79 once)</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Stale deal detection', '❌ Misses deals', '⚠️ Rule-based only', '✅ AI-powered'],
                ['AI lead scoring', '❌ No', '❌ No', '✅ Yes'],
                ['Slack DM alerts', '❌ No', '⚠️ Basic webhooks', '✅ Rich alerts'],
                ['Daily pipeline report', '❌ No', '❌ No', '✅ Yes'],
                ['Runs every 30 min', '❌ Manual', '⚠️ Trigger-based', '✅ Continuous'],
                ['Google Sheets logging', '❌ No', '❌ No', '✅ Yes'],
                ['Configurable thresholds', '—', '⚠️ Limited', '✅ config.json'],
                ['You own the code', '—', '❌ No', '✅ Full source'],
                ['Monthly cost after setup', '—', '⚠️ HubSpot plan cost', '🎉 $0'],
              ].map(([feature, manual, hubspot, ours]) => (
                <tr key={feature} className="hover:bg-gray-50">
                  <td className="p-4 border border-gray-200 font-medium">{feature}</td>
                  <td className="p-4 border border-gray-200 text-center text-gray-500">{manual}</td>
                  <td className="p-4 border border-gray-200 text-center text-gray-500">{hubspot}</td>
                  <td className="p-4 border border-gray-200 text-center bg-blue-50 font-medium">{ours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA mid-page */}
      <section className="mb-12 bg-blue-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Start catching stale deals before they die</h2>
        <p className="text-blue-100 mb-6">One-time $79. Runs 24/7. No HubSpot plan upgrade needed.</p>
        <a href="/templates/ai-sales-agent" className="inline-block bg-white text-blue-600 font-bold text-lg px-10 py-4 rounded-lg hover:bg-blue-50 transition-colors">
          Automate Your Pipeline — $79
        </a>
        <p className="text-blue-200 text-sm mt-4">30-day guarantee if it doesn't work as described · Instant download · Full source code</p>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'Does it work with a free HubSpot account?',
              a: "Yes. The agent uses HubSpot's standard CRM API, which is available on all plans including the free tier. No paid HubSpot add-ons required.",
            },
            {
              q: 'What counts as "stale"? Can I change the threshold?',
              a: 'The default is 7 days with no logged activity. You can change this to any number of days in config.json — no code changes needed.',
            },
            {
              q: "How is this different from HubSpot's built-in workflows?",
              a: "HubSpot workflows are trigger-based — they fire when something happens. This agent proactively scans for what's NOT happening (deals going quiet), which HubSpot's native tools can't do reliably. It also adds AI lead scoring and richer Slack alerts.",
            },
            {
              q: 'Do I need to know how to code?',
              a: "No. Setup is about 15 minutes: add your HubSpot API key, Slack webhook, and optionally Google Sheets credentials to a config file. The setup guide walks you through every step.",
            },
            {
              q: 'Can it handle large pipelines with hundreds of deals?',
              a: "Yes. The agent paginates through your full pipeline. For very large pipelines (10,000+ deals), incremental sync is on the roadmap — reach out and we'll discuss your use case.",
            },
            {
              q: "What's the refund policy?",
              a: "30-day money-back guarantee if it doesn't work as described. Email support@abbilabs.xyz first — we'll fix it or refund you in full.",
            },
          ].map((item, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">{item.q}</summary>
              <p className="mt-3 text-gray-700 text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Internal links */}
      <section className="mb-12 border border-gray-200 rounded-xl p-6">
        <h2 className="text-lg font-bold mb-4">More AI agents from Abbi Labs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a href="/templates/ai-payment-monitor" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 border border-gray-100 transition-colors">
            <span className="text-2xl">💳</span>
            <div>
              <div className="font-semibold text-sm">Stripe Dispute Monitor</div>
              <div className="text-xs text-gray-500">Instant chargeback alerts · $39</div>
            </div>
          </a>
          <a href="/templates/ai-customer-support-agent" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 border border-gray-100 transition-colors">
            <span className="text-2xl">🎧</span>
            <div>
              <div className="font-semibold text-sm">AI Support Agent</div>
              <div className="text-xs text-gray-500">Automate 70% of tickets · $99</div>
            </div>
          </a>
          <a href="/templates" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 border border-gray-100 transition-colors">
            <span className="text-2xl">📦</span>
            <div>
              <div className="font-semibold text-sm">Browse all templates</div>
              <div className="text-xs text-gray-500">Full agent library</div>
            </div>
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Your pipeline has deals going cold right now</h2>
        <p className="text-gray-600 mb-6">Set it up in 15 minutes. Your agent starts watching immediately.</p>
        <div className="text-4xl font-bold text-blue-600 mb-4">$79</div>
        <a href="/templates/ai-sales-agent" className="btn-primary text-lg px-12 py-4 inline-block">
          Automate Your Pipeline — $79
        </a>
        <p className="text-gray-500 text-sm mt-4">Instant download · Full source code · 30-day money-back guarantee</p>
      </section>
    </main>
  );
}
