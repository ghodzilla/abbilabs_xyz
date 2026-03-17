export const metadata = {
  title: 'FAQ | Abbi Labs',
  description: 'Frequently asked questions about Abbi Labs AI agent templates and free integration skills.',
}

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: "What does Abbi Labs sell?",
        a: "Two things: AI Agent Templates (paid, $39–$79) and free Integration Skills. Templates are complete, production-ready agent setups for specific business roles — like running your HubSpot pipeline or monitoring Stripe payments. Free Skills are the raw API integrations underneath."
      },
      {
        q: "What's the difference between templates and free skills?",
        a: "Free skills are building blocks — they let your agent talk to Google Sheets, Slack, HubSpot, Stripe etc. Templates are complete agent setups: skills + decision logic + scoring engines + workflows + alerts + reporting. Templates are production-ready out of the box."
      },
      {
        q: "Do I pay a monthly subscription?",
        a: "No. Every product is a one-time purchase. You own the code forever. No SaaS fees, no seats, no usage limits. You run it on your own infrastructure with your own API keys."
      },
    ]
  },
  {
    category: 'Technical',
    questions: [
      {
        q: "Do I need to know how to code?",
        a: "You need Node.js 18+ installed and basic comfort with a terminal. Each template includes a SETUP.md that walks you through every step — creating API keys, setting environment variables, running the scripts. Most people are live in 15 minutes. No coding required to use them; coding only needed if you want to customise."
      },
      {
        q: "Which LLMs do the templates work with?",
        a: "All of them. Claude, GPT-4, Gemini, Llama — or any model you prefer. Templates are framework-agnostic. You can also run the scripts standalone as cron jobs with no LLM at all. The AGENT.md file is your system prompt — load it into whatever LLM you use."
      },
      {
        q: "Which AI agent frameworks are supported?",
        a: "OpenClaw, LangChain, CrewAI, AutoGen, or plain Node.js scripts. The templates are pure Node.js with zero npm dependencies — they run anywhere Node runs."
      },
      {
        q: "What APIs do the templates connect to?",
        a: "AI Sales Agent connects to HubSpot CRM, Slack, and Google Sheets. AI Payment Monitor connects to Stripe and Slack. Each template includes detailed docs on the exact API scopes and permissions needed."
      },
      {
        q: "Do I need to host anything?",
        a: "The scripts run wherever you can run Node.js — your laptop, a VPS, a server, a cron job. No cloud account or hosting required. We recommend running them on a cheap VPS ($5–$24/month) for 24/7 monitoring."
      },
    ]
  },
  {
    category: 'Purchasing',
    questions: [
      {
        q: "What happens right after I buy?",
        a: "You're taken to a download page immediately after payment completes. You get a .tar.gz file containing all scripts, config files, and documentation. Unzip, follow SETUP.md, done. You can re-download anytime using your purchase link."
      },
      {
        q: "What payment methods are accepted?",
        a: "All major credit and debit cards via Stripe. Stripe also supports Apple Pay, Google Pay, and Link for one-click checkout."
      },
      {
        q: "What's the refund policy?",
        a: "30-day money-back guarantee. If a template doesn't work as described, email support@abbilabs.xyz and we'll refund you in full — no questions asked."
      },
      {
        q: "Can I use the templates for client projects?",
        a: "Yes. A single purchase covers use across your own projects and client work. If you want to resell or white-label them, contact support@abbilabs.xyz."
      },
      {
        q: "Are the free skills really free?",
        a: "Yes. Completely free, direct download, no email required. They're free because they're building blocks — if you find them useful, the templates are the full production solution."
      },
    ]
  },
  {
    category: 'AI Sales Agent',
    questions: [
      {
        q: "Does it work if I don't use HubSpot?",
        a: "The AI Sales Agent is built specifically for HubSpot CRM. A Salesforce version is on the roadmap — email support@abbilabs.xyz if that's a priority for you."
      },
      {
        q: "Can I customise the lead scoring rules?",
        a: "Yes. All scoring rules are in config.json — change job title weights, company size thresholds, industry scores, and engagement multipliers without touching a line of code."
      },
      {
        q: "Does it require a paid HubSpot plan?",
        a: "No. The template works with HubSpot's free CRM tier. You just need an API key, which is available on all plans including free."
      },
    ]
  },
  {
    category: 'AI Payment Monitor',
    questions: [
      {
        q: "How quickly does it alert on a dispute?",
        a: "Within minutes of the dispute opening in Stripe. The monitor checks your Stripe account on your configured interval (default: every 30 minutes). We recommend running it as a cron job every 15–30 minutes."
      },
      {
        q: "What Stripe events does it monitor?",
        a: "Disputes (chargebacks), failed payments, subscription cancellations, past-due subscriptions, and refund rate spikes. It also sends a daily revenue summary to Slack."
      },
      {
        q: "Do I need a paid Stripe account?",
        a: "You need a Stripe account with live payments enabled. The monitor works with any Stripe plan — there's no tier requirement."
      },
    ]
  },
]

export default function FAQPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600">Everything you need to know about Abbi Labs templates and skills.</p>
        <p className="text-gray-500 mt-2">Can't find your answer? Email <a href="mailto:support@abbilabs.xyz" className="text-blue-600 hover:underline">support@abbilabs.xyz</a></p>
      </div>

      <div className="space-y-12">
        {faqs.map((section) => (
          <section key={section.category}>
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">{section.category}</h2>
            <div className="space-y-4">
              {section.questions.map((item, i) => (
                <details key={i} className="border border-gray-200 rounded-lg p-5 group">
                  <summary className="font-semibold cursor-pointer text-gray-900 list-none flex justify-between items-center">
                    {item.q}
                    <span className="text-gray-400 ml-4 flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-2">Still have questions?</h2>
        <p className="text-gray-600 mb-4">Email us and we'll get back to you within a few hours.</p>
        <a href="mailto:support@abbilabs.xyz" className="btn-primary inline-block">Email support@abbilabs.xyz</a>
      </div>
    </main>
  )
}
