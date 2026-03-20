import { newsletters } from '@/data/newsletters/index'
import NewsletterSignup from '@/app/components/NewsletterSignup'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return newsletters.map((issue) => ({ slug: issue.slug }))
}

export async function generateMetadata({ params }) {
  const meta = newsletters.find((n) => n.slug === params.slug)
  if (!meta) return {}
  return {
    title: `${meta.title} | The AI CEO Brief`,
    description: meta.preview,
  }
}

async function getIssue(slug) {
  try {
    const mod = await import(`@/data/newsletters/${slug}.js`)
    return mod.newsletter || mod.default || null
  } catch {
    return null
  }
}

export default async function NewsletterIssuePage({ params }) {
  const issue = await getIssue(params.slug)
  if (!issue) notFound()

  const meta = newsletters.find((n) => n.slug === params.slug)
  const issueIndex = newsletters.findIndex((n) => n.slug === params.slug)
  const issueNumber = newsletters.length - issueIndex

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Back link */}
      <a
        href="/newsletter"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition mb-8"
      >
        ← All issues
      </a>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-700 rounded-full px-2.5 py-0.5">
            Issue #{issueNumber}
          </span>
          <span className="text-gray-400 text-sm">{issue.date}</span>
          {issue.readTime && (
            <span className="text-gray-400 text-sm">{issue.readTime}</span>
          )}
        </div>
        <h1 className="text-3xl font-bold leading-tight">{issue.title}</h1>
        {meta?.preview && (
          <p className="text-gray-600 mt-3 text-lg">{meta.preview}</p>
        )}
      </div>

      <hr className="border-gray-200 mb-8" />

      {/* Content */}
      <article
        className="prose prose-gray max-w-none text-gray-800 leading-relaxed space-y-4"
        style={{ lineHeight: '1.8' }}
        dangerouslySetInnerHTML={{ __html: issue.content }}
      />

      <hr className="border-gray-200 my-12" />

      {/* Bottom signup */}
      <div>
        <p className="text-gray-500 text-sm mb-4 text-center">
          Enjoyed this issue? Get the next one in your inbox.
        </p>
        <NewsletterSignup variant="inline" />
      </div>

      {/* Back link bottom */}
      <div className="mt-8 text-center">
        <a href="/newsletter" className="text-sm text-gray-500 hover:text-blue-600 transition">
          ← Back to all issues
        </a>
      </div>
    </main>
  )
}
