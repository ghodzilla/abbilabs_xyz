import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PRODUCTS = {
  'ai-sales-agent': {
    priceId: 'price_1TC3FLDzmCNTEBpx8HkDAsVp',
    name: 'AI Sales Agent Template',
  },
  'ai-payment-monitor': {
    priceId: 'price_1TC3FMDzmCNTEBpx04UUbvm2',
    name: 'AI Payment Monitor Template',
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

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: productConfig.priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}&product=${product}`,
      cancel_url: `${baseUrl}/templates/${product}`,
      metadata: {
        product,
      },
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
