export default function sitemap() {
  const base = 'https://abbilabs.xyz';
  const now = new Date().toISOString();

  return [
    // Core pages
    { url: base, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/templates`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/skills`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // Product pages
    { url: `${base}/templates/ai-sales-agent`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/templates/ai-payment-monitor`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/templates/ai-customer-support-agent`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },

    // SEO landing pages — high priority for indexing
    { url: `${base}/hubspot-pipeline-automation`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/stripe-dispute-monitor`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/ai-customer-support-automation`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },

    // Skills
    { url: `${base}/skills/hubspot`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/skills/slack`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/skills/stripe`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/skills/google-sheets`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/skills/notion`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Blog posts
    { url: `${base}/blog/ai-agent-for-hubspot`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/ai-agent-for-stripe`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/ai-agent-for-slack`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/ai-agent-for-notion`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/ai-agent-for-google-sheets`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // SEO blog posts — buyer-intent keyword targeting
    { url: `${base}/blog/hubspot-stale-deal-alerts-slack`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/blog/automate-hubspot-pipeline-review`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/blog/stripe-dispute-alerts-slack`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
  ];
}
