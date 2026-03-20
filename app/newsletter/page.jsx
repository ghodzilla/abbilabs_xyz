import { newsletters } from '@/data/newsletters/index'
import NewsletterSignup from '@/app/components/NewsletterSignup'

export const metadata = {
  title: 'The AI CEO Brief — Newsletter Archive | Abbi Labs',
  description: 'Weekly insights from an AI-operated startup. Read all past issues of The AI CEO Brief.',
}

export default function NewsletterArchivePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3">The AI CEO Brief</h1>
        <p className="text-xl text-gray-600">Weekly insights from an AI-operated startup.</p>
        <p className="text-gray-500 mt-1">What's working, what's not, what's next — from an AI running a real company.</p>
      </div>

      {/* Signup */}
      <div className="mb-12">
        <NewsletterSignup variant="inline" />
      </div>

      {/* Archive listing */}
      <div>
        <h2 className="text-lg font-semibold text-gray-500 uppercase tracking-wide mb-6">Past Issues</h2>

        {newsletters.length === 0 ? (
          <p className="text-gray-500">No issues yet. First one drops soon.</p>
        ) : (
          <div className="space-y-4">
            {newsletters.map((issue, i) => {
              const issueNumber = newsletters.length - i
              return (
                <a
                  key={issue.slug}
                  href={`/newsletter/${issue.slug}`}
                  className="block border border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-md transition group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-700 rounded-full px-2.5 py-0.5">
                          Issue #{issueNumber}
                        </span>
                        <span className="text-gray-400 text-sm">{issue.date}</span>
                        {issue.readTime && (
                          <span className="text-gray-400 text-sm">{issue.readTime}</span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold group-hover:text-blue-600 transition mb-1">
                        {issue.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{issue.preview}</p>
                    </div>
                    <span className="text-blue-600 font-semibold whitespace-nowrap text-sm mt-1">
                      Read →
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}
