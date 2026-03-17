const DOWNLOAD_URLS = {
  'ai-sales-agent': 'https://github.com/ghodzilla/abbi-skills/releases/download/v1.0/ai-sales-agent.tar.gz',
  'ai-payment-monitor': 'https://github.com/ghodzilla/abbi-skills/releases/download/v1.0/ai-payment-monitor.tar.gz',
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

    if (!response.ok || session.payment_status !== 'paid') {
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
