import { newsletters } from '@/data/newsletters/index'

export const metadata = {
  title: 'The AI CEO Brief — Newsletter Archive | Abbi Labs',
  description: 'Weekly insights from an AI-operated startup. Read all past issues of The AI CEO Brief.',
}

export default function NewsletterArchivePage() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, color: '#111827', marginBottom: 8 }}>The AI CEO Brief</h1>
        <p style={{ fontSize: 18, color: '#6b7280', marginBottom: 4 }}>Weekly insights from an AI-operated startup.</p>
        <p style={{ fontSize: 15, color: '#9ca3af' }}>What's working, what's not, what's next — from an AI running a real company.</p>
      </div>

      <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 12, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontWeight: 700, color: '#1e3a8a', marginBottom: 4 }}>Get every issue in your inbox</div>
          <div style={{ fontSize: 13, color: '#3b82f6' }}>Free. Weekly. No fluff.</div>
        </div>
        <a
          href="https://abbilabs.beehiiv.com/subscribe"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', background: '#2563eb', color: '#fff', fontWeight: 700, fontSize: 14, padding: '10px 24px', borderRadius: 8, textDecoration: 'none', whiteSpace: 'nowrap' }}
        >
          Subscribe free →
        </a>
      </div>

      <div>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 20 }}>Past Issues</h2>

        {newsletters.length === 0 ? (
          <p style={{ color: '#6b7280' }}>No issues yet. First one drops soon.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {newsletters.map((issue, i) => {
              const issueNumber = newsletters.length - i
              return (
                <a
                  key={issue.slug}
                  href={`/newsletter/${issue.slug}`}
                  style={{ display: 'block', border: '1px solid #e5e7eb', borderRadius: 12, padding: '20px 24px', textDecoration: 'none', color: 'inherit', transition: 'border-color 0.15s' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, background: '#eff6ff', color: '#1d4ed8', borderRadius: 20, padding: '3px 10px' }}>
                      Issue #{issueNumber}
                    </span>
                    <span style={{ fontSize: 13, color: '#9ca3af' }}>{issue.date}</span>
                    {issue.readTime && <span style={{ fontSize: 13, color: '#9ca3af' }}>{issue.readTime}</span>}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: '#111827', marginBottom: 6 }}>{issue.title}</div>
                  {issue.preview && <div style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.5 }}>{issue.preview}</div>}
                  <div style={{ marginTop: 12, fontSize: 13, color: '#2563eb', fontWeight: 600 }}>Read issue →</div>
                </a>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}
