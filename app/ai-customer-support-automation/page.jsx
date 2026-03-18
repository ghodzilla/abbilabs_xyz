export const metadata = {
  title: 'AI Customer Support Automation — Handle 70% of Tickets Without Touching Them',
  description:
    'AI agent triages tickets, auto-responds from your knowledge base, escalates to Slack with full context. Email + Intercom. $99 one-time.',
  keywords: [
    'AI customer support automation',
    'automate support tickets small business',
    'AI support agent',
    'customer support automation',
    'support ticket automation',
    'automate help desk',
    'AI triage support tickets',
  ],
  openGraph: {
    title: 'AI Customer Support Automation — Handle 70% of Tickets Without Touching Them',
    description:
      'AI agent triages tickets, auto-responds from your knowledge base, escalates to Slack with full context. Email + Intercom. $99 one-time.',
    url: 'https://abbilabs.xyz/ai-customer-support-automation',
    siteName: 'Abbi Labs',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'AI Customer Support Automation Agent',
  description:
    'AI agent that triages support tickets, auto-responds from your knowledge base, escalates complex issues to Slack with full context. Works with Email and Intercom.',
  url: 'https://abbilabs.xyz/templates/ai-customer-support-agent',
  brand: { '@type': 'Brand', name: 'Abbi Labs' },
  offers: {
    '@type': 'Offer',
    price: '99.00',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: 'https://abbilabs.xyz/templates/ai-customer-support-agent',
  },
};

export default function AICustomerSupportAutomationPage() {
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
        <span>AI Customer Support Automation</span>
      </div>

      {/* Hero */}
      <section className="mb-12">
        <div className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          🎧 Handle 70% of tickets automatically — no extra headcount
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Your Support Team Is Copy-Pasting the Same 10 Answers Every Day
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          An AI agent that triages every incoming ticket, searches your knowledge base, sends a personalised auto-response, and escalates complex issues to Slack with full context. One-time $99.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <a href="/templates/ai-customer-support-agent" className="btn-primary text-lg px-8 py-4">
            Automate Support — $99
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
      <section className="mb-12 bg-yellow-50 border border-yellow-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-yellow-900">
          Repetitive tickets are killing your team&apos;s productivity
        </h2>
        <div className="space-y-4 text-yellow-800">
          <p className="text-lg">
            Studies consistently show that 60–80% of support tickets are variations of the same 10–15 questions. Your team knows the answers. They&apos;re just typing them again. And again.
          </p>
          <p>
            Meanwhile, real problems — the escalations that need a human — sit in queue behind a wall of repetitive tickets. Slow responses hurt retention. Customers churn before you even see the ticket.
          </p>
          <p className="font-semibold">
            Hiring more support staff costs $40,000–$60,000 per year. Zendesk&apos;s AI add-ons cost $300–$700/month and are locked to their platform. There&apos;s a better way.
          </p>
          <ul className="space-y-2 mt-4">
            <li className="flex gap-2">❌ <span>Your team spends 3+ hours/day on tickets they could answer in their sleep</span></li>
            <li className="flex gap-2">❌ <span>Slow first responses (hours, not minutes) increase churn measurably</span></li>
            <li className="flex gap-2">❌ <span>Complex issues get buried under easy ones — urgency is invisible</span></li>
            <li className="flex gap-2">❌ <span>Knowledge base exists but nobody searches it before emailing support</span></li>
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How the AI customer support agent works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: '🗂️',
              title: '4-Category Triage Engine',
              desc: 'Every ticket is classified into: Billing, Technical, General FAQ, or Urgent/Escalation. Each category triggers a different response workflow — no one-size-fits-all.',
            },
            {
              icon: '🔍',
              title: 'Knowledge Base Search',
              desc: 'The agent searches your Markdown files or Notion pages to find the most relevant answer before composing a response. Works with any knowledge base structure.',
            },
            {
              icon: '✉️',
              title: 'Personalised Auto-Response',
              desc: "Responses are generated with the customer's name, their specific issue context, and a relevant knowledge base excerpt — not a generic template.",
            },
            {
              icon: '📲',
              title: 'Slack Escalation With Sentiment',
              desc: 'Complex or frustrated tickets are escalated to your Slack channel with the customer name, issue summary, sentiment score, and a link to reply — all in one message.',
            },
            {
              icon: '🌍',
              title: 'Multi-Language Support',
              desc: 'Detects the language of the incoming ticket and responds in the same language. Works across all major languages — no configuration needed.',
            },
            {
              icon: '🛡️',
              title: 'Social Engineering Detection',
              desc: "Flags tickets that show patterns of social engineering attempts — unusual refund requests, account takeover language, urgency manipulation — before a human acts on them.",
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

      {/* Integrations */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Works with your existing stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            ['📧 Email (IMAP/SMTP)', 'Gmail, Outlook, any email provider'],
            ['💬 Intercom', 'Monitor and respond to conversations'],
            ['📖 Markdown files', 'Your local or Git-hosted knowledge base'],
            ['📝 Notion', 'Search your Notion pages directly'],
            ['💬 Slack', 'Escalation channel with full context'],
            ['📊 Google Sheets', 'Log every ticket and resolution automatically'],
          ].map(([name, how]) => (
            <div key={name} className="border border-gray-200 rounded p-3">
              <div className="font-bold text-sm">{name}</div>
              <div className="text-gray-500 text-xs mt-1">{how}</div>
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
                <th className="text-center p-4 border border-gray-200 font-semibold text-gray-500">Hire Support Staff<br /><span className="font-normal text-xs">($40–60K/yr)</span></th>
                <th className="text-center p-4 border border-gray-200 font-semibold text-gray-500">Zendesk / Intercom AI<br /><span className="font-normal text-xs">($300–700/mo)</span></th>
                <th className="text-center p-4 border border-gray-200 font-semibold text-blue-700 bg-blue-50">Abbi Labs Agent<br /><span className="font-normal text-xs">($99 once)</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                ['AI triage (4 categories)', '❌ Manual', '✅ Yes', '✅ Yes'],
                ['Knowledge base search', '⚠️ Human memory', '✅ Yes', '✅ Yes'],
                ['Personalised auto-response', '✅ Yes', '⚠️ Template-based', '✅ Yes'],
                ['Sentiment-aware escalation', '✅ Experienced staff', '⚠️ Basic flags', '✅ Yes'],
                ['Multi-language support', '❌ Hire per language', '✅ Yes', '✅ Yes'],
                ['Social engineering detection', '✅ Trained humans', '❌ No', '✅ Yes'],
                ['Works outside their platform', '—', '❌ Locked in', '✅ Any stack'],
                ['You own the code', '—', '❌ No', '✅ Full source'],
                ['Monthly cost', '💸 $3,000–5,000+', '💸 $300–700/mo', '🎉 $0 after setup'],
              ].map(([feature, staff, saas, ours]) => (
                <tr key={feature} className="hover:bg-gray-50">
                  <td className="p-4 border border-gray-200 font-medium">{feature}</td>
                  <td className="p-4 border border-gray-200 text-center text-gray-500">{staff}</td>
                  <td className="p-4 border border-gray-200 text-center text-gray-500">{saas}</td>
                  <td className="p-4 border border-gray-200 text-center bg-blue-50 font-medium">{ours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA mid-page */}
      <section className="mb-12 bg-blue-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Free your team from copy-paste support</h2>
        <p className="text-blue-100 mb-6">One-time $99. Handle 70% of tickets automatically from day one.</p>
        <a href="/templates/ai-customer-support-agent" className="inline-block bg-white text-blue-600 font-bold text-lg px-10 py-4 rounded-lg hover:bg-blue-50 transition-colors">
          Automate Support — $99
        </a>
        <p className="text-blue-200 text-sm mt-4">30-day money-back guarantee · Instant download · Full source code</p>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'What does "70% of tickets handled automatically" actually mean?',
              a: "The agent auto-responds to tickets that match content in your knowledge base (FAQs, common issues, billing questions). Tickets it can't confidently answer are escalated to your team via Slack. Based on typical support queues, this covers 60–75% of volume.",
            },
            {
              q: 'Do I need to set up a knowledge base from scratch?',
              a: "No. If you have an existing Notion workspace or folder of Markdown files with answers to common questions, the agent can use that immediately. You can start with as little as 5–10 documents and expand over time.",
            },
            {
              q: 'Does it work with Gmail / standard email?',
              a: 'Yes. The agent supports IMAP for reading and SMTP for sending — compatible with Gmail, Outlook, Fastmail, and any provider that supports standard email protocols.',
            },
            {
              q: 'What happens when the agent is not confident in an answer?',
              a: "If the agent can't find a confident match in your knowledge base, it escalates the ticket to your Slack channel with a summary, sentiment score, and all context — so your team can respond with full information.",
            },
            {
              q: 'Can it detect social engineering or fraud attempts?',
              a: "Yes. The agent flags tickets with social engineering patterns: unusual urgency, account takeover language, pressure to bypass verification, or suspicious refund requests. These are always escalated to a human.",
            },
            {
              q: "What's the refund policy?",
              a: "30-day money-back guarantee. If it doesn't work as described, email support@abbilabs.xyz for a full refund.",
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
          <a href="/templates/ai-sales-agent" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 border border-gray-100 transition-colors">
            <span className="text-2xl">🤝</span>
            <div>
              <div className="font-semibold text-sm">AI Sales Agent</div>
              <div className="text-xs text-gray-500">HubSpot pipeline automation · $79</div>
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
        <h2 className="text-2xl font-bold mb-2">Your team deserves to work on problems that matter</h2>
        <p className="text-gray-600 mb-6">Let the agent handle the repetitive tickets. You handle the ones that need a human.</p>
        <div className="text-4xl font-bold text-blue-600 mb-4">$99</div>
        <a href="/templates/ai-customer-support-agent" className="btn-primary text-lg px-12 py-4 inline-block">
          Automate Support — $99
        </a>
        <p className="text-gray-500 text-sm mt-4">Instant download · Full source code · 30-day money-back guarantee</p>
      </section>
    </main>
  );
}
