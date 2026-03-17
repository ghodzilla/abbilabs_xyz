import NewsletterSignup from './components/NewsletterSignup'

export const metadata = {
  title: 'Abbi Labs — AI Agent Templates for Business',
  description: 'Complete AI agent setups for your business. Sales pipeline management, payment monitoring, and more. Works with any LLM.',
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
          Abbi Labs builds production-ready AI agent templates for founders running AI-powered businesses. We solve a specific problem: setting up AI agents that actually do useful work takes weeks of boilerplate. We&apos;ve done it for you.
        </p>
        <p className="text-gray-700 mb-4">
          Every template is:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li><strong>Production-grade:</strong> Error handling, rate limiting, retry logic built-in</li>
          <li><strong>Framework-agnostic:</strong> Works with Claude, GPT, Gemini, LangChain, CrewAI — or standalone</li>
          <li><strong>Zero dependencies:</strong> Pure Node.js, no npm bloat</li>
          <li><strong>Well documented:</strong> Full setup guides, config references, and real-world patterns</li>
          <li><strong>Yours to own:</strong> One-time purchase. Modify, extend, and deploy as you need</li>
        </ul>
        <p className="text-gray-700">
          Not a SaaS. Not a subscription. Buy once, own forever, run on your own infrastructure.
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

      {/* Newsletter */}
      <NewsletterSignup />

      {/* FAQ */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
        <div className="space-y-4">
          <details className="border border-gray-200 rounded-lg p-5">
            <summary className="font-bold cursor-pointer text-lg">What&apos;s the difference between templates and free skills?</summary>
            <p className="mt-3 text-gray-700">Free skills are raw API integrations — they let your agent talk to Google Sheets, Slack, HubSpot etc. Templates are complete agent setups: they include the skills <em>plus</em> decision logic, scoring engines, workflow automation, alert rules, and reporting. Templates are production-ready out of the box. Skills are building blocks.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-5">
            <summary className="font-bold cursor-pointer text-lg">Do I need technical skills to use these?</summary>
            <p className="mt-3 text-gray-700">You need Node.js 18+ installed and basic comfort with a terminal. Templates include a SETUP.md that walks you through every step — API keys, environment variables, running the scripts. Most people are up and running in 15 minutes. No coding required to use them; coding required only if you want to customise them.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-5">
            <summary className="font-bold cursor-pointer text-lg">Which LLMs do the templates work with?</summary>
            <p className="mt-3 text-gray-700">All of them. Templates are framework-agnostic — Claude, GPT-4, Gemini, Llama, or any model you prefer. You can also run the scripts standalone as cron jobs without any LLM at all. The AGENT.md file is your system prompt — load it into whatever LLM you use.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-5">
            <summary className="font-bold cursor-pointer text-lg">Do I pay a monthly subscription?</summary>
            <p className="mt-3 text-gray-700">No. One-time purchase, you own it forever. No SaaS fees, no seats, no usage limits. You run the code on your own infrastructure — your API keys, your data.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-5">
            <summary className="font-bold cursor-pointer text-lg">What happens after I buy?</summary>
            <p className="mt-3 text-gray-700">You&apos;re taken to a download page immediately after payment. You get a .tar.gz file containing all scripts, config files, and documentation. Unzip it, follow SETUP.md, and you&apos;re live. You can re-download anytime using your purchase link.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-5">
            <summary className="font-bold cursor-pointer text-lg">What&apos;s the refund policy?</summary>
            <p className="mt-3 text-gray-700">30-day money-back guarantee. If the template doesn&apos;t work as described, email support@abbilabs.xyz and we&apos;ll refund you in full — no questions asked.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-5">
            <summary className="font-bold cursor-pointer text-lg">Can I use these for my clients?</summary>
            <p className="mt-3 text-gray-700">Yes. Single purchase covers use across your own projects. If you want to resell or white-label, contact us at support@abbilabs.xyz.</p>
          </details>
          <details className="border border-gray-200 rounded-lg p-5">
            <summary className="font-bold cursor-pointer text-lg">Do the free skills really cost nothing?</summary>
            <p className="mt-3 text-gray-700">Yes, completely free. Direct download, no email required. We make these free because they&apos;re building blocks — if you find them useful, the templates are the full solution.</p>
          </details>
        </div>
      </section>
    </main>
  )
}
