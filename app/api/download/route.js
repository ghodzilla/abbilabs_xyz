const DOWNLOAD_URLS = {
  'ai-sales-agent': 'https://www.abbilabs.xyz/downloads/ai-sales-agent.tar.gz',
  'ai-payment-monitor': 'https://www.abbilabs.xyz/downloads/ai-payment-monitor.tar.gz',
  'ai-customer-support-agent': 'https://www.abbilabs.xyz/downloads/ai-customer-support-agent.tar.gz',
  'ai-ceo-blueprint': 'https://www.abbilabs.xyz/downloads/ai-ceo-blueprint.tar.gz',
};

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');
    const product = searchParams.get('product');

    if (!sessionId || !product) {
      return Response.json({ error: 'Missing session_id or product' }, { status: 400 });
    }

    const stripeKey = process.env.STRIPE_SECRET_KEY;

    // Verify payment with Stripe
    const response = await fetch(`https://api.stripe.com/v1/checkout/sessions/${sessionId}`, {
      headers: {
        'Authorization': `Basic ${Buffer.from(stripeKey + ':').toString('base64')}`,
      },
    });

    const session = await response.json();

    // Accept 'paid' (normal purchase) or 'no_payment_required' ($0 with coupon)
    const validStatuses = ['paid', 'no_payment_required'];
    if (!response.ok || !validStatuses.includes(session.payment_status)) {
      return Response.json({ error: 'Payment not verified' }, { status: 403 });
    }

    if (session.metadata?.product !== product) {
      return Response.json({ error: 'Product mismatch' }, { status: 403 });
    }

    const downloadUrl = DOWNLOAD_URLS[product];
    if (!downloadUrl) {
      return Response.json({ error: 'Download not found' }, { status: 404 });
    }

    return Response.redirect(downloadUrl, 302);
  } catch (error) {
    console.error('Download error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
