export const metadata = {
  title: 'How to Get HubSpot Stale Deal Alerts in Slack (Without Paying for Clari) | Abbi Labs',
  description: 'Step-by-step: set up HubSpot stale deal alerts in Slack for free — no $1,500/seat Clari subscription required. Includes a working code snippet.',
}

export default function HubspotStaleDealAlertsSlack() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">

        <p className="text-sm text-gray-500 mb-2">2026-03-23 · 7 min read</p>

        <h1>How to Get HubSpot Stale Deal Alerts in Slack (Without Paying for Clari)</h1>

        <p>
          Here's a thing that happens to every sales team. A deal has been sitting in "Proposal Sent"
          for 22 days. No update. No activity logged. Nobody noticed.
        </p>

        <p>
          The rep isn't following up because they forgot. The manager doesn't know because HubSpot
          doesn't tell them. The deal isn't dead — it just silently rotted.
        </p>

        <p>
          This is the stale deal problem. And it costs real money.
        </p>

        <p>
          The tool most people reach for is Clari. Clari is good. Clari is also <strong>$1,500 per seat per year</strong>.
          For a 10-person sales team, that's $15K/year to find out which deals haven't been touched.
        </p>

        <p>
          You don't need to spend $15K. Here's how to do it yourself.
        </p>

        <h2>Why HubSpot Doesn't Do This Out of the Box</h2>

        <p>
          HubSpot has deal activity tracking. It records when notes are logged, emails are sent,
          calls are made. What it doesn't do is proactively alert you when nothing has happened.
        </p>

        <p>
          The silence is the signal. A deal where nobody has touched it in 14 days is a deal that
          needs attention. But HubSpot only tells you what happened — not what didn't.
        </p>

        <p>
          You have to build the logic yourself: "fetch all open deals, find the ones with no activity
          in the last N days, send a Slack message."
        </p>

        <p>
          That's 40 lines of code and a cron job. Let me show you.
        </p>

        <h2>The Code (Node.js)</h2>

        <p>
          This script hits the HubSpot API, finds deals with no recent activity, and posts a digest
          to your Slack channel. Run it daily via cron or a scheduled job.
        </p>

        <pre className="bg-gray-900 text-green-300 p-6 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`const axios = require('axios');

const HUBSPOT_TOKEN = process.env.HUBSPOT_TOKEN;
const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK_URL;
const STALE_DAYS = 7; // flag deals with no activity for 7+ days

async function getStaldeDeals() {
  const cutoff = Date.now() - (STALE_DAYS * 24 * 60 * 60 * 1000);

  // Fetch all open deals with last activity timestamp
  const response = await axios.post(
    'https://api.hubapi.com/crm/v3/objects/deals/search',
    {
      filterGroups: [{
        filters: [{ propertyName: 'dealstage', operator: 'NOT_IN',
          values: ['closedwon', 'closedlost'] }]
      }],
      properties: ['dealname', 'dealstage', 'amount',
                   'notes_last_updated', 'hubspot_owner_id'],
      limit: 100
    },
    { headers: { Authorization: \`Bearer \${HUBSPOT_TOKEN}\` } }
  );

  // Filter to deals with no activity since cutoff
  return response.data.results.filter(deal => {
    const lastActivity = deal.properties.notes_last_updated;
    if (!lastActivity) return true; // never updated = always stale
    return new Date(lastActivity).getTime() < cutoff;
  });
}

async function postToSlack(staleDeals) {
  if (staleDeals.length === 0) return;

  const lines = staleDeals.map(deal => {
    const name = deal.properties.dealname;
    const stage = deal.properties.dealstage;
    const amount = deal.properties.amount
      ? \`$\${Number(deal.properties.amount).toLocaleString()}\` : 'No amount';
    const last = deal.properties.notes_last_updated
      ? new Date(deal.properties.notes_last_updated).toLocaleDateString()
      : 'Never';
    return \`• *\${name}* — \${stage} — \${amount} — last activity: \${last}\`;
  });

  await axios.post(SLACK_WEBHOOK, {
    text: \`🚨 *\${staleDeals.length} stale deals (no activity in \${STALE_DAYS}+ days)*\\n\` +
          lines.join('\\n')
  });
}

getStaldeDeals().then(postToSlack).catch(console.error);`}
        </pre>

        <p>
          Set up a cron job to run this every morning at 9 AM and your sales team gets a Slack
          message listing every deal that's gone quiet.
        </p>

        <h2>What You Need to Make This Work</h2>

        <ul>
          <li><strong>HubSpot Private App token</strong> — create one in Settings → Integrations → Private Apps. Needs CRM read access.</li>
          <li><strong>Slack Incoming Webhook URL</strong> — create in your Slack app settings. Takes 2 minutes.</li>
          <li><strong>A Node.js runtime</strong> — anywhere: your server, a Vercel cron, a DigitalOcean droplet, even a free Railway project.</li>
          <li><strong>5 minutes of setup</strong> — that's genuinely all this takes.</li>
        </ul>

        <h2>Make It Better: Add Deal Owner Tagging</h2>

        <p>
          The basic version posts a list. The better version tags the deal owner directly so
          they get a notification. Here's the addition:
        </p>

        <pre className="bg-gray-900 text-green-300 p-6 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`// Map HubSpot owner IDs to Slack user IDs
const ownerSlackMap = {
  '12345678': 'U08ABCDEF', // Sarah
  '87654321': 'U08GHIJKL', // Marcus
};

// In your message line:
const slackUser = ownerSlackMap[deal.properties.hubspot_owner_id];
const tag = slackUser ? \`<@\${slackUser}>\` : 'Unassigned';
return \`• *\${name}* — \${stage} — \${tag} — last: \${last}\`;`}
        </pre>

        <p>
          Now Sarah gets a Slack ping with exactly which of her deals needs attention.
          She doesn't need to check HubSpot. She acts directly from Slack.
        </p>

        <h2>The Numbers That Make This Worth 20 Minutes of Setup</h2>

        <p>
          Let's say your average deal size is $5,000. You have 30 open deals at any time.
          On average, 4–5 of them are stale on any given week.
        </p>

        <p>
          If this system surfaces one deal per month that would have otherwise gone cold,
          and you close it — that's $5,000 recovered. The setup takes 20 minutes.
          Clari would have cost you $15,000 for the year.
        </p>

        <p>
          The ROI math is not complicated.
        </p>

        <h2>Want the Full Automated Version?</h2>

        <p>
          The code above is the foundation. The{' '}
          <a href="/templates/ai-sales-agent" className="text-blue-600 font-semibold underline">
            AI Sales Agent
          </a>{' '}
          takes this further: it runs automatically on a schedule, scores deals by close probability,
          generates a full pipeline summary, and posts it to your Slack channel every morning.
          No setup beyond connecting HubSpot and Slack.
        </p>

        <p>
          One-time $79. No subscription. Runs forever.
        </p>

        <p>
          But if you want to build it yourself, everything you need is in this post.
          The stale deal problem is solvable. You don't need Clari to solve it.
        </p>

      </article>
    </main>
  )
}
