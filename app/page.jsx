export const metadata = {
  title: 'Abbi Labs — AI Agent Templates for Business',
  description: 'Complete AI agent setups for your business. Sales pipeline management, payment monitoring, and more. Works with any LLM.',
}

export default function Home() {
  const skills = [
    { name: 'Google Sheets', price: '$19', slug: 'google-sheets', icon: '📊' },
    { name: 'Slack', price: '$29', slug: 'slack', icon: '💬' },
    { name: 'Notion', price: '$29', slug: 'notion', icon: '📝' },
    { name: 'HubSpot', price: '$49', slug: 'hubspot', icon: '🧲' },
    { name: 'Stripe', price: '$29', slug: 'stripe', icon: '💳' },
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Complete AI Agent Setups for Your Business</h1>
        <p className="text-xl text-gray-600 mb-8">
          Not just API wrappers. Full agent configurations with decision logic, workflows, and reporting built in.
          Works with Claude, GPT, Gemini, or any LLM. Deploy in minutes.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/templates" className="btn-primary">Browse Templates</a>
          <a href="/skills" className="border border-gray-300 rounded px-6 py-3 hover:border-blue-500 transition">Free Skills</a>
        </div>
      </section>

      {/* Templates Feature */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Agent Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🤝</span>
              <div>
                <h3 className="font-bold text-xl">AI Sales Agent</h3>
                <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">Most Popular</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">Scores leads, monitors your HubSpot pipeline, alerts your team on Slack, and sends daily reports. Connects to HubSpot, Slack, and Google Sheets.</p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-blue-600">$79</span>
              <a href="/templates/ai-sales-agent" className="btn-primary">View Details</a>
            </div>
          </div>
          <div className="border-2 border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">💳</span>
              <div>
                <h3 className="font-bold text-xl">AI Payment Monitor</h3>
                <span className="bg-gray-600 text-white text-xs px-2 py-0.5 rounded-full">Simplest Setup</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">Never miss a Stripe dispute again. Instant Slack alerts for disputes, failed payments, and subscription changes. 5-minute setup.</p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-blue-600">$39</span>
              <a href="/templates/ai-payment-monitor" className="btn-primary">View Details</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <a href="/templates" className="text-blue-600 font-semibold hover:underline">View all templates →</a>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Available Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <a
              key={skill.slug}
              href={`/skills/${skill.slug}`}
              className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
              <p className="text-blue-600 font-semibold">{skill.price}</p>
            </a>
          ))}
        </div>
      </section>

      {/* What is Abbi Labs */}
      <section className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6">What is Abbi Labs?</h2>
        <p className="text-gray-700 mb-4">
          Abbi Labs builds production-ready AI agent integration skills for OpenClaw. We solve a specific problem: your AI agent needs to connect to the tools your business actually uses.
        </p>
        <p className="text-gray-700 mb-4">
          Each skill is:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li><strong>Production-grade:</strong> Error handling, rate limiting, retry logic built-in</li>
          <li><strong>Zero dependencies:</strong> Pure Node.js, no npm packages to bloat your agent</li>
          <li><strong>Well documented:</strong> 200+ lines of setup guides, commands, and real-world patterns</li>
          <li><strong>Quick install:</strong> 5 minutes from download to first API call</li>
          <li><strong>Yours to own:</strong> Modify, extend, or integrate as needed</li>
        </ul>
        <p className="text-gray-700">
          This is not a SaaS. You buy the skill once, install it in your OpenClaw workspace, and own it forever.
        </p>
      </section>

      {/* Blog Preview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="/blog/ai-agent-for-hubspot" className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition">
            <h3 className="font-bold text-lg mb-2">How to Build an AI Agent for HubSpot</h3>
            <p className="text-gray-600 mb-4">Give your CRM superpowers. Your agent can manage contacts, deals, and tickets autonomously.</p>
            <span className="text-blue-600 font-semibold">Read →</span>
          </a>
          <a href="/blog/ai-agent-for-notion" className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition">
            <h3 className="font-bold text-lg mb-2">Building an AI Agent for Notion</h3>
            <p className="text-gray-600 mb-4">Your agent manages databases, creates pages, and organizes your workspace automatically.</p>
            <span className="text-blue-600 font-semibold">Read →</span>
          </a>
        </div>
        <div className="text-center mt-8">
          <a href="/blog" className="btn-primary">
            Read More Articles
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
        <div className="space-y-6">
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-bold cursor-pointer">Can I use these with GPT or other LLMs?</summary>
            <p className="mt-4 text-gray-700">Yes. These are OpenClaw skills, which work with any LLM. The scripts are framework-agnostic — they just need Node.js.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-bold cursor-pointer">What if I don't have an API key yet?</summary>
            <p className="mt-4 text-gray-700">Each skill includes step-by-step setup instructions. Most tools offer free API keys or free tiers. No credit card required.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-bold cursor-pointer">Do I have to buy all 5 skills?</summary>
            <p className="mt-4 text-gray-700">No. Buy only what you need. But if you buy all 5, the bundle saves you $26.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-4">
            <summary className="font-bold cursor-pointer">What's the refund policy?</summary>
            <p className="mt-4 text-gray-700">30-day money-back guarantee if the skill doesn't work as described. No questions asked.</p>
          </details>
        </div>
      </section>
    </main>
  )
}
