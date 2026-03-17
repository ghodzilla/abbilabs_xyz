export async function generateStaticParams() {
  return [
    { slug: 'google-sheets' },
    { slug: 'slack' },
    { slug: 'notion' },
    { slug: 'hubspot' },
    { slug: 'stripe' },
  ]
}

const skillData = {
  'google-sheets': {
    name: 'AI Agent for Google Sheets',
    price: 19,
    icon: '📊',
    description: 'Your AI agent that manages Google Sheets',
    longDescription: 'Stop building spreadsheets by hand. Give your AI agent the ability to read, write, append, search, and manage Google Sheets autonomously. Production-tested with real Google Sheets API. Set up in 5 minutes with a Google service account — share your spreadsheet, and your agent handles the rest.',
    features: ['Read, write, and append rows', 'Search across spreadsheets', 'Add new sheet tabs', 'Update specific cell ranges', 'Clear ranges', 'List all sheets', 'Works with any LLM', 'Zero dependencies — pure Node.js'],
    useCases: ['Daily revenue tracking', 'Meeting notes & action items', 'Inventory management', 'Automated report generation', 'Data pipelines', 'CRM data logging'],
    tested: true,
    setupTime: '5 minutes',
    link: 'https://gumroad.com/l/abbi-google-sheets',
  },
  'slack': {
    name: 'AI Agent for Slack',
    price: 29,
    icon: '💬',
    description: 'Your AI agent that manages Slack',
    longDescription: 'Your agent posts messages, reads channels, manages threads, reacts with emoji, and automates team communication. Production-tested against live Slack API. Set up in 5 minutes with a Slack bot token.',
    features: ['Send messages to channels and DMs', 'Read channel history', 'Manage threads and replies', 'React to messages with emoji', 'Pin/unpin messages', 'List all channels', 'Join channels automatically', 'Zero dependencies — pure Node.js'],
    useCases: ['Daily standup bot', 'Alert system', 'Customer support', 'Meeting recaps', 'Team updates', 'Incident notifications'],
    tested: true,
    setupTime: '5 minutes',
    link: 'https://gumroad.com/l/abbi-slack',
  },
  'notion': {
    name: 'AI Agent for Notion',
    price: 29,
    icon: '📝',
    description: 'Your AI agent that manages Notion',
    longDescription: 'Create pages, query databases, update content, search your entire workspace. Production-tested against live Notion API. Supports markdown conversion, database entries, page archiving, and content appending.',
    features: ['Search pages and databases', 'Create pages with markdown', 'Query databases with filters', 'Create database entries', 'Update page properties', 'Append content blocks', 'Archive pages', 'Zero dependencies — pure Node.js'],
    useCases: ['Knowledge base management', 'Task database', 'CRM management', 'Content calendar', 'Meeting notes', 'Wiki automation'],
    tested: true,
    setupTime: '5 minutes',
    link: 'https://gumroad.com/l/abbi-notion',
  },
  'hubspot': {
    name: 'AI Agent for HubSpot',
    price: 49,
    icon: '🧲',
    description: 'Your AI agent that operates your CRM',
    longDescription: 'Manage contacts, companies, deals, tickets, and notes in HubSpot. Your agent becomes a sales rep who never forgets a follow-up.',
    features: ['Search and create contacts', 'Manage companies', 'Track deals through stages', 'Create support tickets', 'Log notes and activities', 'List owners and pipelines'],
    useCases: ['Sales pipeline automation', 'Customer onboarding', 'Lead qualification', 'Support triage', 'Revenue operations'],
    setupTime: '5 minutes',
    link: 'https://gumroad.com/l/abbi-hubspot',
  },
  'stripe': {
    name: 'AI Agent for Stripe',
    price: 29,
    icon: '💳',
    description: 'Your AI agent that manages payments',
    longDescription: 'Track revenue, manage subscriptions, process refunds, create invoices. Production-tested against live Stripe API. 22 commands covering customers, products, payments, subscriptions, invoices, payouts, disputes, and revenue reporting.',
    features: ['Search customers and payments', 'Create and manage subscriptions', 'Process refunds', 'Create and send invoices', 'Manage products and pricing', 'Revenue reporting and balance', 'Track payouts and disputes', 'Zero dependencies — pure Node.js'],
    useCases: ['Daily revenue tracking', 'Subscription management', 'Refund handling', 'Invoice automation', 'Financial reporting', 'Customer lifecycle management'],
    tested: true,
    setupTime: '5 minutes',
    link: 'https://gumroad.com/l/abbi-stripe',
  },
}

export default function SkillPage({ params }) {
  const skill = skillData[params.slug]
  if (!skill) return <div>Skill not found</div>

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-4">
            <span className="text-5xl">{skill.icon}</span>
            {skill.name}
          </h1>
          <p className="text-xl text-gray-600 mt-4">{skill.longDescription}</p>
        </div>
        <div className="text-right">
          {skill.tested && <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">✅ Production Tested</span>}
          <div className="text-5xl font-bold text-blue-600">${skill.price}</div>
          <a href={skill.link} className="btn-primary mt-6 text-lg">
            Buy Now
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">What's Included</h2>
          <ul className="space-y-3">
            {skill.features.map((feature, i) => (
              <li key={i} className="text-gray-700">✅ {feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
          <ul className="space-y-3">
            {skill.useCases.map((useCase, i) => (
              <li key={i} className="text-gray-700">→ {useCase}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 my-12">
        <h2 className="text-2xl font-bold mb-4">Quick Install</h2>
        <p className="text-gray-700 mb-4">Setup takes ~{skill.setupTime}:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Download the skill package</li>
          <li>Create an API key (free tier available for most tools)</li>
          <li>Extract and install in your OpenClaw workspace</li>
          <li>Set environment variable with your API key</li>
          <li>Start using immediately</li>
        </ol>
      </div>

      <div className="border-2 border-blue-200 rounded-lg p-8 text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <a href={skill.link} className="btn-primary text-lg">
          Buy {skill.name} - ${skill.price}
        </a>
        <p className="text-gray-600 mt-4">30-day money-back guarantee. No questions asked.</p>
      </div>
    </main>
  )
}
