# Deployment Instructions for abbilabs.xyz

## Overview

The Next.js site is complete and ready to deploy to Vercel. It includes:
- Homepage with hero and skills grid
- Skills listing page
- 5 individual skill pages (with Gumroad links)
- Blog listing page
- 5 complete blog posts (AI Agent for each tool)
- Responsive design with Tailwind CSS
- SEO optimized metadata

## Deployment Steps

### 1. Push to GitHub

```bash
cd /home/node/.openclaw/workspace/abbilabs.xyz

# Initialize git repo (if not already done)
git init
git add .
git commit -m "Initial commit: Abbi Labs website"

# Create a new repo on github.com (e.g., abbilabs-xyz)
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/abbilabs-xyz.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

**Option A: Web Dashboard (Easiest)**
1. Go to https://vercel.com
2. Sign in (or create account)
3. Click "Add New..." → "Project"
4. Import the GitHub repo
5. Click "Deploy"
6. Wait ~2 minutes for deployment

**Option B: Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

### 3. Connect Custom Domain

Once deployed to Vercel:

1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add custom domain: `abbilabs.xyz`
4. Follow Vercel's DNS setup instructions
5. Update your domain registrar's nameservers (usually just copy/paste from Vercel)
6. Wait 24 hours for DNS propagation

## What's Live

- **Homepage** — `abbilabs.xyz/`
- **Skills** — `abbilabs.xyz/skills` and individual `/skills/[slug]`
- **Blog** — `abbilabs.xyz/blog` and individual posts `/blog/[slug]`
- **Product Links** — All buttons link to Gumroad (update URLs if needed)

## Next Steps (After Deployment)

1. **Add more blog posts** — Copy the template in `app/blog/[slug]/page.jsx`
2. **Add more skills** — Copy the template in `app/skills/[slug]/page.jsx`
3. **Update Gumroad links** — Replace the placeholder URLs with real Gumroad product links
4. **Add analytics** — Integrate Google Analytics for traffic tracking
5. **Monitor traffic** — Set up Search Console for SEO tracking

## Generating More Blog Posts Programmatically

Once deployed, you can generate 20+ blog posts for different tools using a simple script:

```javascript
// Example tools to target
const tools = [
  'jira', 'linear', 'asana', 'airtable', 'zapier',
  'make', 'n8n', 'pipedream', 'github', 'gitlab',
  'intercom', 'zendesk', 'freshdesk', 'twilio', 'sendgrid'
]

// For each tool, create a blog post at:
// app/blog/ai-agent-for-[tool]/page.jsx
// Using the same template as existing posts
```

Each new blog post is a new page for Google to index, increasing your SEO surface area.

## Monitoring

**After deployment:**
1. Add to Google Search Console (webmaster tools)
2. Verify domain ownership
3. Submit sitemap (Vercel generates this automatically)
4. Monitor indexed pages over 2-4 weeks

## Troubleshooting

**Build errors?**
- Check Node.js version (need 16+)
- Run `npm install` first
- Check for syntax errors in JSX files

**Domain not connecting?**
- DNS propagation takes 24-48 hours
- Check Vercel's DNS settings match your registrar
- Verify domain is correctly configured in Vercel dashboard

**Performance issues?**
- Vercel's Edge Network handles CDN automatically
- Pages should load <1s globally
- Images are optimized automatically

## Support

If anything goes wrong:
1. Check Vercel's deployment logs (Vercel dashboard → Deployments)
2. Verify git push succeeded (check GitHub repo)
3. Re-deploy by pushing a new commit to main
4. Contact Vercel support if DNS issues persist

## You're Live! 🚀

Once deployed:
- Site is live globally on abbilabs.xyz
- All product pages link to Gumroad
- Blog is indexed by Google
- You can expand content anytime by adding new pages

Every deploy to GitHub automatically updates the live site.
