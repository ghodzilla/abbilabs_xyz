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

export default function AICEOBlueprintPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <a href="/templates" className="hover:underline">Templates</a> / AI CEO Blueprint Kit
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">🧠 AI CEO Blueprint Kit</h1>
            <p className="text-xl text-gray-600">Your AI agent can write code. Can it run a business?</p>
            <div className="flex gap-2 mt-3">
              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">✅ Live in Production</span>
              <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium">Framework Agnostic</span>
              <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full font-medium">Instant Download</span>
            </div>
          </div>
          <div className="text-right ml-8 flex-shrink-0">
            <div className="text-5xl font-bold text-blue-600">$29</div>
            <div className="text-gray-500 mb-3">one-time · own forever</div>
            <button onClick={() => handleCheckout("ai-ceo-blueprint")} className="btn-primary block text-center text-lg px-8 py-3 w-full">Get the Blueprint — $29</button>
            <p className="text-xs text-gray-500 mt-2">Instant download. No subscription.</p>
          </div>
        </div>
      </div>

      {/* The problem */}
      <div className="bg-gray-50 rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Most AI agents fail for the same reason</h2>
        <p className="text-gray-700 mb-4">
          Most builders stop at prompts. They chain a few LLM calls, wire up an API, and call it an agent.
          Then they wonder why it forgets context, repeats mistakes, and needs hand-holding on every decision.
        </p>
        <p className="text-gray-700 font-semibold">
          The problem isn't the model. It's the missing operating system.
        </p>
      </div>

      {/* What it is */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">The production-ready architecture for AI agents</h2>
        <p className="text-gray-700 mb-6">
          The AI CEO Blueprint Kit is the complete structural layer I built to run Abbi Labs — an AI-operated startup
          that has been live and autonomous for <strong>8+ days</strong> without a human CEO. It's not a set of prompts.
          It's the operating system that makes an AI agent actually reliable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-5">
            <div className="text-2xl mb-2">🗂️</div>
            <h3 className="font-bold text-lg mb-2">Three-Tier Memory System</h3>
            <p className="text-gray-600 text-sm">Hot (session), warm (daily), cold (long-term). Your agent remembers what matters and forgets what doesn't — automatically.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-5">
            <div className="text-2xl mb-2">🪜</div>
            <h3 className="font-bold text-lg mb-2">Trust Ladder</h3>
            <p className="text-gray-600 text-sm">Exactly what your agent can do autonomously (Level 1), what it flags and proceeds on (Level 2), and what it must escalate (Level 3).</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-5">
            <div className="text-2xl mb-2">💓</div>
            <h3 className="font-bold text-lg mb-2">Heartbeat Rhythm</h3>
            <p className="text-gray-600 text-sm">A proactive check-in pattern that keeps your agent working between conversations — not just when you ping it.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-5">
            <div className="text-2xl mb-2">🎭</div>
            <h3 className="font-bold text-lg mb-2">SOUL.md + IDENTITY.md</h3>
            <p className="text-gray-600 text-sm">Give your agent a consistent persona, values, and decision framework that survives across sessions.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-bold text-lg mb-2">Daily Reporting Structure</h3>
            <p className="text-gray-600 text-sm">How the agent summarises what it did, what it decided, and what it needs from you. Stay in control without micromanaging.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-5">
            <div className="text-2xl mb-2">🏭</div>
            <h3 className="font-bold text-lg mb-2">Live Working Examples</h3>
            <p className="text-gray-600 text-sm">Every pattern is pulled directly from a live AI startup operating right now — not a demo, not a tutorial.</p>
          </div>
        </div>
      </div>

      {/* Who it's for */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Who this is for</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>Solopreneurs and indie hackers building AI-operated businesses</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>Developers building with Claude, GPT, or any LLM who want production-grade architecture</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>Anyone whose agent keeps forgetting context, taking wrong actions, or failing silently</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 mt-0.5">✗</span>
            <span className="text-gray-500">Not for: people looking for prompts, tutorials, or getting-started guides</span>
          </li>
        </ul>
      </div>

      {/* Day 8 proof */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-10">
        <h2 className="text-2xl font-bold mb-4">Day 8. Still running.</h2>
        <p className="text-gray-700 mb-4">
          Abbi Labs launched on 2026-03-11. The AI CEO has shipped a product, written marketing copy,
          handled customer ops, filed daily reports, and managed a DeFi yield simulation —
          without a human in the loop on routine decisions.
        </p>
        <p className="text-gray-700 font-semibold">This blueprint is what made that possible.</p>
      </div>

      {/* What you get */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">What you get</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-3"><span className="text-blue-500">→</span> SOUL.md template — give your agent identity and values</li>
          <li className="flex items-center gap-3"><span className="text-blue-500">→</span> IDENTITY.md template — operational mandate and authority levels</li>
          <li className="flex items-center gap-3"><span className="text-blue-500">→</span> HEARTBEAT.md template — proactive rhythm and cron schedule</li>
          <li className="flex items-center gap-3"><span className="text-blue-500">→</span> Three-tier memory architecture (ready to adapt)</li>
          <li className="flex items-center gap-3"><span className="text-blue-500">→</span> Trust ladder with decision trees (Levels 1–3)</li>
          <li className="flex items-center gap-3"><span className="text-blue-500">→</span> Daily reporting template</li>
          <li className="flex items-center gap-3"><span className="text-blue-500">→</span> 30+ page guide with real examples from a live AI company</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="bg-gray-900 text-white rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-2">$29. One-time. Instant download.</h2>
        <p className="text-gray-400 mb-6">If you're serious about building AI agents that work without you watching, this is the architecture to start with.</p>
        <button onClick={() => handleCheckout("ai-ceo-blueprint")} className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-10 py-4 rounded-lg transition-colors">
          Get the Blueprint — $29
        </button>
        <p className="text-gray-500 text-sm mt-3">Instant download · No subscription · Own forever</p>
      </div>
    </main>
  );
}
