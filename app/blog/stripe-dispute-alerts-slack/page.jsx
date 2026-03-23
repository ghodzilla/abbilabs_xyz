export const metadata = {
  title: 'Stripe Dispute Alerts: How to Stop Losing Chargebacks Because You Missed the Email | Abbi Labs',
  description: 'You have 7 days to respond to a Stripe dispute. Most teams miss the email and lose automatically. Here\'s how to set up instant Stripe dispute alerts in Slack so you never forfeit another chargeback.',
}

export default function StripeDisputeAlertsSlack() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">

        <p className="text-sm text-gray-500 mb-2">2026-03-23 · 7 min read</p>

        <h1>Stripe Dispute Alerts: How to Stop Losing Chargebacks Because You Missed the Email</h1>

        <p>
          You have <strong>7 days</strong> to respond to a Stripe dispute.
        </p>

        <p>
          Not 7 business days. 7 calendar days. That includes the weekend you didn't check email.
          The bank holiday. The day your support inbox had 200 unread messages and the Stripe
          notification was buried on page 3.
        </p>

        <p>
          If you don't respond in time, you lose automatically. Stripe closes the dispute in
          the customer's favour. The money is gone. It counts against your dispute rate.
          And you never even saw the accusation.
        </p>

        <p>
          This happens more than you'd think. Let me show you how to make sure it never
          happens to you.
        </p>

        <h2>The Dispute Email Problem</h2>

        <p>
          Stripe sends an email when a dispute is opened. The problem is where it goes.
        </p>

        <p>
          If you have a busy support inbox — and most businesses do — that email sits in a queue
          with 50 other things. Your support person sees it Monday. By then it's been 3 days.
          They flag it for review. Review happens Wednesday. You start gathering evidence Thursday.
          You submit Friday. Maybe.
        </p>

        <p>
          That's a 7-day window compressed to a last-minute scramble. And if the dispute came
          in on a Thursday? Your effective window is 4 days, because the weekend disappears.
        </p>

        <p>
          Here's what makes it worse: the evidence you need — transaction records, delivery
          confirmations, customer communications — is scattered across Stripe, your email,
          your fulfillment system. Assembling it under pressure leads to weak submissions.
          Weak submissions lose.
        </p>

        <h2>What a Real-Time Alert Changes</h2>

        <p>
          When a dispute opens, you want to know in Slack within 60 seconds. Not 3 days later
          when someone finds the email.
        </p>

        <p>
          Real-time means you start the clock on day 0, not day 3. You have time to:
        </p>

        <ul>
          <li>Pull the transaction details before you forget the context</li>
          <li>Locate the delivery confirmation or fulfillment record</li>
          <li>Find the original customer communication</li>
          <li>Write a coherent, evidence-backed response</li>
          <li>Submit it with 4+ days to spare</li>
        </ul>

        <p>
          That's the difference between winning and losing. Not whether you had good evidence —
          whether you had enough time to present it.
        </p>

        <h2>How to Set Up Stripe Dispute Alerts in Slack</h2>

        <p>
          Stripe has webhooks. A webhook is a POST request Stripe sends to your server whenever
          something happens — a payment, a refund, a dispute. You listen for the right event
          and forward it to Slack.
        </p>

        <p>
          The event you want is <code>charge.dispute.created</code>.
        </p>

        <p>Here's a minimal webhook handler in Node.js:</p>

        <pre className="bg-gray-900 text-green-300 p-6 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const axios = require('axios');

const app = express();
const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK_URL;
const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  let event;

  try {
    // Verify this actually came from Stripe (important!)
    event = stripe.webhooks.constructEvent(
      req.body,
      req.headers['stripe-signature'],
      WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(\`Webhook error: \${err.message}\`);
  }

  if (event.type === 'charge.dispute.created') {
    const dispute = event.data.object;
    const charge = dispute.charge;
    const amount = (dispute.amount / 100).toFixed(2);
    const reason = dispute.reason.replace(/_/g, ' ');
    const deadline = new Date(dispute.evidence_details.due_by * 1000);
    const daysLeft = Math.ceil((deadline - Date.now()) / (1000 * 60 * 60 * 24));

    await axios.post(SLACK_WEBHOOK, {
      text: [
        \`🚨 *New Stripe Dispute — $\${amount} USD*\`,
        \`Reason: \${reason}\`,
        \`Charge ID: \${charge}\`,
        \`⏰ Evidence due: \${deadline.toDateString()} (*\${daysLeft} days left*)\`,
        \`View in Stripe: https://dashboard.stripe.com/disputes/\${dispute.id}\`
      ].join('\\n')
    });
  }

  res.json({ received: true });
});

app.listen(3000);`}
        </pre>

        <p>
          Deploy this anywhere — Vercel, Railway, DigitalOcean. Register the webhook URL
          in your Stripe dashboard (Developers → Webhooks → Add endpoint).
          Select the <code>charge.dispute.created</code> event. Done.
        </p>

        <h2>What a Good Alert Message Includes</h2>

        <p>
          The difference between a useful Slack alert and a noise alert is what's in it.
          You want to know — instantly, without clicking anywhere:
        </p>

        <ul>
          <li><strong>Amount</strong> — how much is at stake</li>
          <li><strong>Reason</strong> — fraud, unrecognized, product not received, etc.</li>
          <li><strong>Deadline</strong> — exactly how many days you have left</li>
          <li><strong>Charge ID</strong> — so you can immediately find the original transaction</li>
          <li><strong>Direct link</strong> — straight to the dispute in Stripe, no searching</li>
        </ul>

        <p>
          The code above includes all five. When that Slack message arrives, your team knows
          exactly what they're dealing with and where to start.
        </p>

        <h2>The Numbers Behind Dispute Response Rates</h2>

        <p>
          Stripe publishes data on this. Businesses that respond to disputes win about
          <strong> 40–60% of them</strong> — depending on the dispute reason.
          Fraud disputes are harder. "Product not received" disputes are very winnable
          if you have delivery confirmation.
        </p>

        <p>
          Businesses that don't respond? They win 0%.
        </p>

        <p>
          If you process $50K/month and your dispute rate is 0.5% — that's $250/month in
          disputes. Win half of them instead of none, that's $125/month recovered.
          $1,500/year from a Slack alert. The math doesn't need to be close.
        </p>

        <p>
          And this doesn't account for the dispute rate impact. Stripe's acceptable dispute
          rate is 0.75%. If you're regularly missing disputes and forfeiting them, your
          rate climbs — and Stripe starts asking questions.
        </p>

        <h2>Beyond Disputes: What Else to Monitor</h2>

        <p>
          While you're setting up payment monitoring, there are three other Stripe events
          worth alerting on:
        </p>

        <ul>
          <li><strong>payment_intent.payment_failed</strong> — a payment failed, possibly a card issue or expired card. Early alert = retry window.</li>
          <li><strong>customer.subscription.deleted</strong> — a subscription cancelled, possibly silently. Find out why before they disappear.</li>
          <li><strong>radar.early_fraud_warning.created</strong> — Stripe's fraud system flagged something before it became a dispute. Act early.</li>
        </ul>

        <p>
          Each of these has a short action window. Real-time Slack alerts turn reactive
          scrambling into proactive response.
        </p>

        <h2>The Easier Way</h2>

        <p>
          If building and maintaining a webhook server sounds like more than you want to take on,
          the{' '}
          <a href="/templates/ai-payment-monitor" className="text-blue-600 font-semibold underline">
            AI Payment Monitor
          </a>{' '}
          handles all of this for you. It connects to Stripe, listens for disputes,
          failed payments, and revenue anomalies, and posts real-time Slack alerts
          with everything your team needs to act immediately.
        </p>

        <p>
          One-time $39. Installs in 5 minutes. Runs forever.
        </p>

        <p>
          But whether you build it yourself or use the pre-built version — set this up today.
          You have a dispute sitting in Stripe right now that you might not know about.
          The clock is already running.
        </p>

      </article>
    </main>
  )
}
