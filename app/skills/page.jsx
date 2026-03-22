'use client'
import { useState } from 'react'
import SkillDownloadModal from '@/app/components/SkillDownloadModal'

const skills = [
  {
    slug: 'google-sheets',
    name: 'AI Agent for Google Sheets',
    icon: '📊',
    description: 'Read, write, and manage Google Sheets. Your agent logs data, generates reports, tracks metrics.',
    features: ['Read & write data', 'Create sheets', 'Search across sheets', 'Works with any LLM', '~300 lines of code'],
    link: 'https://abbilabs.xyz/downloads/google-sheets.tar.gz',
  },
  {
    slug: 'slack',
    name: 'AI Agent for Slack',
    icon: '💬',
    description: 'Send messages, read channels, manage threads. Your agent becomes a team member.',
    features: ['Send messages', 'Read channel history', 'Manage threads', 'React to messages', 'Search conversations'],
    link: 'https://abbilabs.xyz/downloads/slack-agent.tar.gz',
  },
  {
    slug: 'notion',
    name: 'AI Agent for Notion',
    icon: '📝',
    description: 'Create pages, query databases, update content. Your agent manages your Notion workspace.',
    features: ['Search pages', 'Create entries', 'Query databases', 'Update properties', 'Markdown conversion'],
    link: 'https://abbilabs.xyz/downloads/notion-agent.tar.gz',
  },
  {
    slug: 'hubspot',
    name: 'AI Agent for HubSpot',
    icon: '🧲',
    description: 'Manage contacts, deals, tickets. Your agent runs your CRM.',
    features: ['Manage contacts', 'Track deals', 'Create tickets', 'Log notes', 'Associate records'],
    link: 'https://abbilabs.xyz/downloads/hubspot-agent.tar.gz',
  },
  {
    slug: 'stripe',
    name: 'AI Agent for Stripe',
    icon: '💳',
    description: 'Track revenue, manage subscriptions, process refunds. Your agent handles payments.',
    features: ['Manage customers', 'Track payments', 'Create invoices', 'Process refunds', 'Revenue reports'],
    link: 'https://abbilabs.xyz/downloads/stripe-agent.tar.gz',
  },
]

export default function SkillsPage() {
  const [activeSkill, setActiveSkill] = useState(null)

  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '48px 24px' }}>

      {/* Modal */}
      {activeSkill && (
        <SkillDownloadModal skill={activeSkill} onClose={() => setActiveSkill(null)} />
      )}

      {/* Header */}
      <div style={{ marginBottom: 48, textAlign: 'center' }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: '#111827', marginBottom: 12 }}>
          Free AI Agent Integration Skills
        </h1>
        <p style={{ fontSize: 18, color: '#6b7280', maxWidth: 600, margin: '0 auto 8px' }}>
          Production-ready API integrations for your agents. Download instantly.
        </p>
        <p style={{ fontSize: 15, color: '#9ca3af', maxWidth: 560, margin: '0 auto' }}>
          Enter your email to download. You&apos;ll also get the AI CEO Blueprint Kit — the architecture behind an AI-operated startup. Normally $29. Free.
        </p>
      </div>

      {/* Skill cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {skills.map((skill) => (
          <div
            key={skill.slug}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              padding: '28px 32px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 24 }}>{skill.icon}</span>
                  {skill.name}
                </h2>
                <p style={{ fontSize: 14, color: '#6b7280', margin: 0 }}>{skill.description}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#16a34a', marginBottom: 8 }}>Free</div>
                <button
                  onClick={() => setActiveSkill(skill)}
                  style={{
                    background: '#2563eb',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 13,
                    padding: '8px 18px',
                    borderRadius: 7,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Download Free
                </button>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }}>
              {skill.features.map((feature, i) => (
                <span key={i} style={{ fontSize: 13, color: '#6b7280' }}>✓ {feature}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Templates upsell */}
      <section style={{
        marginTop: 56,
        background: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        padding: '36px 32px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: '#111827', marginBottom: 10 }}>
          Want a complete AI agent setup?
        </h2>
        <p style={{ fontSize: 15, color: '#6b7280', marginBottom: 24, maxWidth: 520, margin: '0 auto 24px' }}>
          The free skills are raw integrations. Our templates combine them into full agent configurations with decision logic, lead scoring, reporting, and workflows built in.
        </p>
        <a
          href="/templates"
          style={{
            display: 'inline-block',
            background: '#2563eb',
            color: '#fff',
            fontWeight: 700,
            fontSize: 15,
            padding: '12px 28px',
            borderRadius: 8,
            textDecoration: 'none',
          }}
        >
          Browse Agent Templates →
        </a>
      </section>
    </main>
  )
}
