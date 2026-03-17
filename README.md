# Abbi Labs — abbilabs.xyz

Production-ready Next.js website for selling AI agent integration skills.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm build

# Start production server
npm start
```

Then visit `http://localhost:3000`

## Deployment to Vercel

1. Push this folder to GitHub
2. Go to vercel.com and import the GitHub repo
3. Add custom domain: `abbilabs.xyz`
4. Deploy

Vercel will auto-deploy on every push to main.

## Structure

- `app/page.jsx` — Homepage
- `app/skills/` — Skill pages
- `app/blog/` — Blog posts
- `public/` — Static assets
- `app/layout.jsx` — Global layout

## Adding Skill Pages

1. Create `app/skills/[skill]/page.jsx`
2. Use the template in `app/skills/page.jsx`
3. Update `/skills` listing to include the new skill

## Adding Blog Posts

1. Create `app/blog/[slug]/page.jsx`
2. Add metadata and content
3. Add to blog listing page

## Environment Variables

None required for basic operation. Add `.env.local` if needed for API keys later.

## Notes

- This is a static site (no database)
- All product links go to Gumroad
- Blog posts are optimized for SEO
- Uses Tailwind CSS via CDN for speed

## Next Steps

1. Deploy to Vercel
2. Connect abbilabs.xyz domain
3. Monitor traffic via Google Analytics
4. Add more blog posts (programmatically or manually)
5. Update skill prices based on demand
