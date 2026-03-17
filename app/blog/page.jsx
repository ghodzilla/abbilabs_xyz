export const metadata = {
  title: 'Blog | Abbi Labs',
  description: 'Learn how to build AI agents for your business tools.',
}

const posts = [
  {
    slug: 'ai-agent-for-hubspot',
    title: 'How to Build an AI Agent for HubSpot',
    excerpt: 'Give your CRM superpowers. Learn how to build an agent that manages contacts, deals, and tickets autonomously.',
    date: '2026-03-17',
  },
  {
    slug: 'ai-agent-for-notion',
    title: 'Building an AI Agent for Notion',
    excerpt: 'Your agent manages databases, creates pages, and organizes your workspace automatically.',
    date: '2026-03-17',
  },
  {
    slug: 'ai-agent-for-slack',
    title: 'AI Agent for Slack: Automate Your Team Communication',
    excerpt: 'Let your agent handle daily standups, alerts, and support workflows on Slack.',
    date: '2026-03-17',
  },
  {
    slug: 'ai-agent-for-stripe',
    title: 'Revenue Operations: Building an AI Agent for Stripe',
    excerpt: 'Automate revenue tracking, subscriptions, refunds, and financial reporting.',
    date: '2026-03-17',
  },
  {
    slug: 'ai-agent-for-google-sheets',
    title: 'AI Agent for Google Sheets: Data Management at Scale',
    excerpt: 'Your agent logs data, generates reports, and keeps your spreadsheets synchronized.',
    date: '2026-03-17',
  },
]

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-xl text-gray-600 mb-12">
        How to build, deploy, and operate AI agents for your business tools.
      </p>

      <div className="space-y-6">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <span className="text-gray-500 text-sm whitespace-nowrap ml-4">{post.date}</span>
            </div>
            <p className="text-gray-600">{post.excerpt}</p>
          </a>
        ))}
      </div>
    </main>
  )
}
