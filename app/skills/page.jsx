export const metadata = {
  title: 'AI Agent Integration Skills | Abbi Labs',
  description: 'Production-ready OpenClaw skills: Google Sheets, Slack, Notion, HubSpot, Stripe.',
}

const skills = [
  {
    slug: 'google-sheets',
    name: 'AI Agent for Google Sheets',
    icon: '📊',
    price: 0,
    description: 'Read, write, and manage Google Sheets. Your agent logs data, generates reports, tracks metrics.',
    features: ['Read & write data', 'Create sheets', 'Search across sheets', 'Works with any LLM', '~300 lines of code'],
    link: 'https://abbilabs.xyz/downloads/google-sheets.tar.gz',
  },
  {
    slug: 'slack',
    name: 'AI Agent for Slack',
    icon: '💬',
    price: 0,
    description: 'Send messages, read channels, manage threads. Your agent becomes a team member.',
    features: ['Send messages', 'Read channel history', 'Manage threads', 'React to messages', 'Search conversations'],
    link: 'https://abbilabs.xyz/downloads/slack-agent.tar.gz',
  },
  {
    slug: 'notion',
    name: 'AI Agent for Notion',
    icon: '📝',
    price: 0,
    description: 'Create pages, query databases, update content. Your agent manages your Notion workspace.',
    features: ['Search pages', 'Create entries', 'Query databases', 'Update properties', 'Markdown conversion'],
    link: 'https://abbilabs.xyz/downloads/notion-agent.tar.gz',
  },
  {
    slug: 'hubspot',
    name: 'AI Agent for HubSpot',
    icon: '🧲',
    price: 0,
    description: 'Manage contacts, deals, tickets. Your agent runs your CRM.',
    features: ['Manage contacts', 'Track deals', 'Create tickets', 'Log notes', 'Associate records'],
    link: 'https://abbilabs.xyz/downloads/hubspot-agent.tar.gz',
  },
  {
    slug: 'stripe',
    name: 'AI Agent for Stripe',
    icon: '💳',
    price: 0,
    description: 'Track revenue, manage subscriptions, process refunds. Your agent handles payments.',
    features: ['Manage customers', 'Track payments', 'Create invoices', 'Process refunds', 'Revenue reports'],
    link: 'https://abbilabs.xyz/downloads/stripe-agent.tar.gz',
  },
]

export default function SkillsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">AI Agent Integration Skills</h1>
      <p className="text-xl text-gray-600 mb-12">
        Production-ready OpenClaw skills. Choose what you need. Install in minutes. Own forever.
      </p>

      <div className="space-y-8">
        {skills.map((skill) => (
          <div key={skill.slug} className="border border-gray-200 rounded-lg p-8 hover:border-blue-500 transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <span className="text-3xl">{skill.icon}</span>
                  {skill.name}
                </h2>
                <p className="text-gray-600 mt-2">{skill.description}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">Free</div>
                <a href={skill.link} className="btn-primary mt-4">Download Free</a>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
              {skill.features.map((feature, i) => (
                <div key={i} className="text-sm text-gray-600">✓ {feature}</div>
              ))}
            </div>
            <a href={`/skills/${skill.slug}`} className="text-blue-600 font-semibold mt-4 inline-block">
              View Details →
            </a>
          </div>
        ))}
      </div>

      {/* Templates upsell */}
      <section className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Want a complete AI agent setup?</h2>
        <p className="text-gray-700 mb-6">The free skills are raw integrations. Our templates combine them into full agent configurations with decision logic, lead scoring, reporting, and workflows built in.</p>
        <a href="/templates" className="btn-primary text-lg">Browse Agent Templates →</a>
      </section>
    </main>
  )
}
