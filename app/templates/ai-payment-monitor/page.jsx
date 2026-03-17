'use client';

async function handleCheckout(product) {
  const res = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ product }),
  });
  const data = await res.json();
  if (data.url) window.location.href = data.url;
}

export default function AIPaymentMonitorPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <a href="/templates" className="hover:underline">Templates</a> / AI Payment Monitor
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">💳 AI Payment Monitor</h1>
            <p className="text-xl text-gray-600">Never miss a Stripe dispute again.</p>
            <div className="flex gap-2 mt-3">
              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">✅ Production Tested</span>
              <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full font-medium">⚡ 5-Minute Setup</span>
              <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full font-medium">Zero Dependencies</span>
            </div>
          </div>
          <div className="text-right ml-8 flex-shrink-0">
            <div className="text-5xl font-bold text-blue-600">$39</div>
            <div className="text-gray-500 mb-3">one-time · own forever</div>
            <button onClick={() => handleCheckout('ai-payment-monitor')} className="btn-primary block text-center text-lg px-8 py-3 w-full">Buy Now — $39</button>
            <p className="text-xs text-gray-500 mt-2">30-day money-back guarantee</p>
          </div>
        </div>
      </div>

      <section className="bg-red-50 border border-red-200 rounded-lg p-6 mb-10">
        <h2 className="text-lg font-bold text-red-800 mb-2">The problem this solves</h2>
        <p className="text-red-700">Stripe disputes have a <strong>7-day response window</strong>. Miss it and you lose automatically — no appeal, no recourse. Most founders check Stripe when they remember. By then, it&apos;s often too late.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">What gets monitored</h2>
        <div className="space-y-4">
          {[
            { icon: '🚨', title: 'Disputes', desc: 'Immediate Slack alert the moment a chargeback opens — with the 7-day deadline and a direct link to respond', urgent: true },
            { icon: '❌', title: 'Failed Payments', desc: '3+ failures in one hour triggers an urgent fraud alert. Every failure logged regardless.' },
            { icon: '📉', title: 'Subscription Changes', desc: 'New subscribers, cancellations, and past-due accounts — with revenue impact' },
            { icon: '↩️', title: 'Refund Rate', desc: 'Daily check. Alerts when rolling 7-day refund rate exceeds your threshold (default 5%)' },
            { icon: '📊', title: 'Daily Summary', desc: 'One Slack message every morning. Yesterday\'s revenue, failed payments, open disputes.' },
          ].map((item) => (
            <div key={item.title} className={`border rounded-lg p-4 flex gap-4 ${item.urgent ? 'border-red-200 bg-red-50' : 'border-gray-200'}`}>
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h3 className="font-bold">{item.title}{item.urgent && <span className="ml-2 text-xs text-red-600 font-normal">Immediate alert</span>}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Example Slack alerts</h2>
        <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm space-y-4">
          <div className="text-green-400">
            <div>🚨 DISPUTE: $149 — customer@email.com</div>
            <div>Reason: fraudulent | Opened: 6 minutes ago</div>
            <div>Action: Respond within 7 days → stripe.com/disputes/dp_xxx</div>
          </div>
          <div className="text-yellow-400">
            <div>❌ Failed payment: $89 — customer@email.com</div>
            <div>Reason: insufficient_funds (3rd failure this hour)</div>
          </div>
          <div className="text-blue-400">
            <div>📊 Yesterday: $1,240 | 14 payments | 1 failed | 0 refunds</div>
            <div>0 open disputes ✅</div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Setup: just 2 environment variables</h2>
        <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm text-green-400">
          <div>export STRIPE_SECRET_KEY=&quot;sk_live_...&quot;</div>
          <div>export SLACK_BOT_TOKEN=&quot;xoxb-...&quot;</div>
        </div>
        <p className="text-gray-600 mt-3 text-sm">No database. No Google account. No complex configuration.</p>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">FAQ</h2>
        <div className="space-y-3">
          {[
            { q: "How quickly does it alert on a dispute?", a: "Within minutes. The monitor runs on your configured interval (default: every 30 min via cron). We recommend 15–30 minute intervals for 24/7 coverage." },
            { q: "Do I need a paid Stripe plan?", a: "No. Works with any Stripe account that has live payments enabled." },
            { q: "Can I customise the refund rate threshold?", a: "Yes — it's a single value in config.json. Default is 5%. Change it to whatever makes sense for your business." },
            { q: "Does it work without Slack?", a: "Slack is the primary notification channel. Email support is on the roadmap — contact us if that's a blocker." },
            { q: "What's the refund policy?", a: "30-day money-back guarantee. Email support@abbilabs.xyz if it doesn't work as described." },
          ].map((item, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">{item.q}</summary>
              <p className="mt-3 text-gray-700 text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Stop missing disputes.</h2>
        <p className="text-gray-600 mb-6">One-time purchase. 5-minute setup. 30-day money-back guarantee.</p>
        <div className="text-4xl font-bold text-blue-600 mb-4">$39</div>
        <button onClick={() => handleCheckout('ai-payment-monitor')} className="btn-primary text-lg px-12 py-4">Buy Now — $39</button>
      </section>
    </main>
  )
}
