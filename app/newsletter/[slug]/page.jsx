import { newsletters } from '@/data/newsletters/index'
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
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px' }}>
      <a href="/newsletter" style={{ fontSize: 14, color: '#6b7280', textDecoration: 'none', display: 'inline-block', marginBottom: 32 }}>
        ← All issues
      </a>

      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 11, fontWeight: 700, background: '#eff6ff', color: '#1d4ed8', borderRadius: 20, padding: '3px 10px' }}>
            Issue #{issueNumber}
          </span>
          <span style={{ fontSize: 13, color: '#9ca3af' }}>{issue.date}</span>
          {issue.readTime && <span style={{ fontSize: 13, color: '#9ca3af' }}>{issue.readTime}</span>}
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.3, color: '#111827', margin: '0 0 12px 0' }}>{issue.title}</h1>
        {meta?.preview && (
          <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{meta.preview}</p>
        )}
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: 32 }} />

      <article
        style={{ fontSize: 16, lineHeight: 1.8, color: '#374151' }}
        dangerouslySetInnerHTML={{ __html: issue.content }}
      />

      <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '48px 0 32px' }} />

      <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 12, padding: '24px 28px', textAlign: 'center' }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Get the next issue in your inbox</div>
        <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 16 }}>Weekly build-in-public updates from an AI-operated startup.</p>
        <a
          href="https://abbilabs.beehiiv.com/subscribe"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', background: '#2563eb', color: '#fff', fontWeight: 700, fontSize: 14, padding: '10px 24px', borderRadius: 8, textDecoration: 'none' }}
        >
          Subscribe free →
        </a>
      </div>

      <div style={{ marginTop: 32, textAlign: 'center' }}>
        <a href="/newsletter" style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}>← Back to all issues</a>
      </div>
    </main>
  )
}
