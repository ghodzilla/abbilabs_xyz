/**
 * /api/purchase-complete
 * Called by the success page immediately after checkout.
 * Verifies Stripe session, sends welcome email via Resend, adds to Beehiiv.
 */

const PRODUCT_NAMES = {
  'ai-sales-agent': 'AI Sales Agent',
  'ai-payment-monitor': 'AI Payment Monitor',
  'ai-customer-support-agent': 'AI Customer Support Agent',
  'ai-ceo-blueprint': 'AI CEO Blueprint Kit',
};

function buildEmailHtml(firstName, productName, downloadUrl, isFree) {
  const steps = {
    'AI Sales Agent': [
      'Open <code style="background:#f3f4f6;padding:2px 5px;border-radius:3px;">SETUP.md</code> — connects HubSpot, Slack, and Google Sheets in ~15 minutes',
      'Run test mode first: <code style="background:#f3f4f6;padding:2px 5px;border-radius:3px;">node scripts/lead-scorer.cjs --test</code>',
      'Adjust your scoring rules in <code style="background:#f3f4f6;padding:2px 5px;border-radius:3px;">config.json</code> — no code changes needed',
      'Run against your real HubSpot data and watch the alerts come in',
    ],
    'AI Payment Monitor': [
      'Open <code style="background:#f3f4f6;padding:2px 5px;border-radius:3px;">SETUP.md</code> — connects Stripe and Slack in ~10 minutes',
      'Set your Stripe webhook endpoint',
      'Run test mode: <code style="background:#f3f4f6;padding:2px 5px;border-radius:3px;">node scripts/monitor.cjs --test</code>',
      'Deploy and receive real-time dispute and failure alerts',
    ],
  };
  const expect = {
    'AI Sales Agent': [
      'Hot lead alerts in Slack when a lead crosses your threshold',
      'Stale deal flags for anything with no activity in 7+ days',
      'Daily pipeline report at 8am',
      'Lead scores written back to your HubSpot contacts',
    ],
    'AI Payment Monitor': [
      'Instant Slack alert on any failed payment or dispute',
      'Daily revenue summary with failure rate',
      'Retry suggestions for recoverable failures',
    ],
  };

  const productSteps = steps[productName] || steps['AI Sales Agent'];
  const productExpect = expect[productName] || expect['AI Sales Agent'];

  const stepsHtml = productSteps.map((s, i) =>
    `<tr><td style="padding:6px 0;color:#374151;font-size:15px;"><strong style="color:#111827;">${i + 1}.</strong> ${s}</td></tr>`
  ).join('');

  const expectHtml = productExpect.map(e =>
    `<tr><td style="padding:4px 0;color:#374151;font-size:14px;">✅ &nbsp;${e}</td></tr>`
  ).join('');

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;max-width:600px;">
        <tr><td style="background:#2563eb;padding:28px 32px;">
          <p style="margin:0;color:#ffffff;font-size:20px;font-weight:700;">Abbi Labs</p>
          <p style="margin:4px 0 0;color:#bfdbfe;font-size:14px;">abbilabs.xyz</p>
        </td></tr>
        <tr><td style="padding:32px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding-bottom:24px;">
              <h1 style="margin:0 0 8px;font-size:22px;color:#111827;">
                ${isFree ? '🎁 Your free access is ready' : '🎉 You\'re all set'}, ${firstName}
              </h1>
              <p style="margin:0;color:#6b7280;font-size:15px;">
                ${isFree
                  ? `Thanks for being an early user of ${productName}. Here's everything you need.`
                  : `Thanks for purchasing ${productName}. Here's everything you need.`}
              </p>
            </td></tr>
            <tr><td style="padding-bottom:28px;text-align:center;">
              <a href="${downloadUrl}" style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;font-weight:600;font-size:16px;padding:14px 32px;border-radius:8px;">
                ⬇️ Download ${productName}
              </a>
              <p style="margin:10px 0 0;color:#9ca3af;font-size:12px;">Bookmark this link — you can re-download anytime.</p>
            </td></tr>
            <tr><td style="padding-bottom:8px;">
              <p style="margin:0 0 12px;font-weight:700;font-size:16px;color:#111827;">How to get started</p>
              <table width="100%" cellpadding="0" cellspacing="0">${stepsHtml}</table>
            </td></tr>
            <tr><td style="padding:20px 0 8px;">
              <p style="margin:0 0 12px;font-weight:700;font-size:16px;color:#111827;">What you'll see in the first 24 hours</p>
              <table width="100%" cellpadding="0" cellspacing="0">${expectHtml}</table>
            </td></tr>
            ${isFree ? `
            <tr><td style="padding:20px 0 0;">
              <div style="background:#fffbeb;border:1px solid #fcd34d;border-radius:8px;padding:16px;">
                <p style="margin:0 0 6px;font-weight:600;color:#92400e;font-size:14px;">One small ask</p>
                <p style="margin:0;color:#78350f;font-size:14px;line-height:1.6;">
                  Run it for a week. If it catches a stale deal or surfaces a hot lead, reply to this email with one sentence I can put on the website. That's all.
                </p>
              </div>
            </td></tr>` : ''}
            <tr><td style="padding:28px 0 0;border-top:1px solid #f3f4f6;">
              <p style="margin:0;color:#374151;font-size:15px;line-height:1.6;">
                Any questions — just reply to this email. I read every one.<br><br>
                Pritesh<br>
                <span style="color:#6b7280;font-size:13px;">Abbi Labs · support@abbilabs.xyz</span>
              </p>
            </td></tr>
          </table>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

async function sendWelcomeEmail({ toEmail, toName, product, sessionId, isFree }) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) return;

  const productName = PRODUCT_NAMES[product] || 'Your Product';
  const firstName = toName ? toName.split(' ')[0] : 'there';
  const downloadUrl = `https://www.abbilabs.xyz/api/download?session_id=${sessionId}&product=${product}`;
  const subject = isFree
    ? `Your free ${productName} is ready — here's how to get started`
    : `Your ${productName} is ready — here's how to get started`;

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${resendKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Pritesh at Abbi Labs <support@abbilabs.xyz>',
      to: [toEmail],
      subject,
      html: buildEmailHtml(firstName, productName, downloadUrl, isFree),
    }),
  });
}

async function addToBeehiiv({ email, product, isFree }) {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const pubId = process.env.BEEHIIV_PUB_ID;
  if (!apiKey || !pubId) return;

  await fetch(`https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      reactivate_existing: false,
      send_welcome_email: false,
      utm_source: isFree ? 'earlyuser5' : 'stripe',
      utm_medium: 'product_purchase',
      utm_campaign: product,
    }),
  });
}

export async function POST(request) {
  try {
    const { session_id, product } = await request.json();

    if (!session_id || !product) {
      return Response.json({ error: 'Missing session_id or product' }, { status: 400 });
    }

    // Verify Stripe session
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    const stripeRes = await fetch(`https://api.stripe.com/v1/checkout/sessions/${session_id}`, {
      headers: { 'Authorization': `Basic ${Buffer.from(stripeKey + ':').toString('base64')}` },
    });
    const session = await stripeRes.json();

    const validStatuses = ['paid', 'no_payment_required'];
    if (!stripeRes.ok || !validStatuses.includes(session.payment_status)) {
      return Response.json({ error: 'Session not valid' }, { status: 403 });
    }

    const email = session.customer_details?.email;
    const name = session.customer_details?.name || '';
    const isFree = session.payment_status === 'no_payment_required' || session.amount_total === 0;

    if (email) {
      // Fire both in parallel — don't block the response
      Promise.all([
        sendWelcomeEmail({ toEmail: email, toName: name, product, sessionId: session_id, isFree }),
        addToBeehiiv({ email, product, isFree }),
      ]).catch(console.error);
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error('purchase-complete error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
