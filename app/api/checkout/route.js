const PRODUCTS = {
  'ai-sales-agent': {
    priceId: 'price_1TC3FLDzmCNTEBpx8HkDAsVp',
    name: 'AI Sales Agent Template',
  },
  'ai-payment-monitor': {
    priceId: 'price_1TC3FMDzmCNTEBpx04UUbvm2',
    name: 'AI Payment Monitor Template',
  },
  'ai-customer-support-agent': {
    priceId: 'price_1TCPTEDzmCNTEBpxjDWUl16G',
    name: 'AI Customer Support Agent Template',
  },
};

export async function POST(request) {
  try {
    const { product } = await request.json();
    const productConfig = PRODUCTS[product];

    if (!productConfig) {
      return Response.json({ error: 'Invalid product' }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://abbilabs.xyz';
    const stripeKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeKey) {
      return Response.json({ error: 'Stripe not configured' }, { status: 500 });
    }

    // Create Stripe Checkout session via API directly
    const body = new URLSearchParams({
      'payment_method_types[0]': 'card',
      'line_items[0][price]': productConfig.priceId,
      'line_items[0][quantity]': '1',
      'mode': 'payment',
      'success_url': `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}&product=${product}`,
      'cancel_url': `${baseUrl}/templates/${product}`,
      'metadata[product]': product,
    });

    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(stripeKey + ':').toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });

    const session = await response.json();

    if (!response.ok) {
      return Response.json({ error: session.error?.message || 'Stripe error' }, { status: 500 });
    }

    return Response.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
