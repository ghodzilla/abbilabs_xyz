export async function POST(request) {
  try {
    const { email } = await request.json()
    if (!email || !email.includes('@')) {
      return Response.json({ error: 'Valid email required' }, { status: 400 })
    }

    const apiKey = process.env.BEEHIIV_API_KEY
    const pubId = process.env.BEEHIIV_PUB_ID

    if (!apiKey || !pubId) {
      return Response.json({ error: 'Newsletter not configured' }, { status: 500 })
    }

    const res = await fetch(`https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: 'abbilabs_website',
        utm_medium: 'organic',
        utm_campaign: 'signup_form',
      }),
    })

    const data = await res.json()

    if (res.ok) {
      return Response.json({ success: true })
    } else {
      console.error('Beehiiv error:', data)
      return Response.json({ error: 'Subscription failed' }, { status: 500 })
    }
  } catch (err) {
    console.error('Subscribe error:', err)
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}
