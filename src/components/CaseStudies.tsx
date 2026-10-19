import React, { useState } from 'react';
import { TrendingUp, ArrowUpRight, BarChart, CheckCircle2, Star, Sparkles } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'ecommerce' | 'saas' | 'b2b'>('all');

  const cases = [
    {
      id: 'lumina-apparel',
      category: 'ecommerce',
      client: 'Lumina Premium Apparel',
      industry: 'Direct-To-Consumer (D2C)',
      heroMetric: '+380% ROAS',
      secondaryMetric: '$2.8M Scaled in Q4',
      badge: 'E-Commerce Scale',
      summary:
        'Combated ad fatigue and rising Meta CPMs by deploying high-velocity creator whitelisting ads, server-side CAPI tracking, and behavioral Klaviyo SMS flows.',
      results: [
        'Blended ROAS increased from 1.8x to 5.4x in 90 days',
        'Recovered $340,000 from abandoned carts via smart SMS flows',
        'Customer Acquisition Cost (CAC) dropped by 42%',
      ],
      tags: ['Meta Advantage+', 'TikTok Spark Ads', 'Klaviyo Retention', 'Server-Side CAPI'],
    },
    {
      id: 'apex-cloud',
      category: 'saas',
      client: 'ApexCloud Infrastructure',
      industry: 'B2B Enterprise SaaS',
      heroMetric: '+520% Organic Leads',
      secondaryMetric: '$4.2M Added Pipeline',
      badge: 'SEO & Generative AI',
      summary:
        'Outranked legacy cloud giants through technical programmatic SEO, Generative AI search optimization (Perplexity/SearchGPT), and a high-converting 3D interactive product tour.',
      results: [
        'Captured 84 Page 1 keywords for high-intent search terms',
        'Increased interactive demo conversion rate from 1.4% to 4.9%',
        'Closed 24 enterprise contracts directly from inbound SEO',
      ],
      tags: ['Programmatic SEO', 'Generative Search', 'Three.js Interactive', 'ABM'],
    },
    {
      id: 'zenith-health',
      category: 'ecommerce',
      client: 'Zenith BioNutra',
      industry: 'Health & Wellness Subscriptions',
      heroMetric: '14.8M Viral Views',
      secondaryMetric: '+290% LTV Retention',
      badge: 'Viral Creative & Retention',
      summary:
        'Scripted and produced over 120 viral short-form videos across TikTok & Instagram Reels, turning organic virality into a recurring monthly subscription flywheel.',
      results: [
        '14.8M organic views generated with $0 media spend',
        'Built 65,000+ member email waitlist prior to major restock',
        '90-day subscription retention rate increased from 28% to 64%',
      ],
      tags: ['Short-Form Studio', 'Creator Whitelisting', 'Subscription CRO', 'Klaviyo'],
    },
    {
      id: 'vanguard-logistics',
      category: 'b2b',
      client: 'Vanguard Freight Global',
      industry: 'Industrial Logistics & Supply Chain',
      heroMetric: '3.6x Sales Qualified Leads',
      secondaryMetric: '$12M+ Closed Contract Value',
      badge: 'LinkedIn & Account-Based Marketing',
      summary:
        'Engineered a laser-targeted LinkedIn ABM campaign targeting VP of Supply Chain executives at Fortune 1000 retailers, backed by automated CRM email nurturing.',
      results: [
        'Generated 140+ RFP invitations in 6 months',
        'Average contract deal size grew by 65%',
        'Zero ad budget wasted on non-decision makers',
      ],
      tags: ['LinkedIn Ads', 'HubSpot Workflows', 'Cold Inbound', 'Lead Qualification'],
    },
  ];

  const filtered = cases.filter((c) => activeTab === 'all' || c.category === activeTab);

  return (
    <section id="case-studies" className="section-wrapper" style={{ background: '#FFFFFF', position: 'relative' }}>
      <div className="app-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            <BarChart size={14} /> Proven Performance Track Record
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', lineHeight: 1.2, marginBottom: '16px', color: '#0F172A' }}>
            Real Case Studies. <span className="gradient-text">Verifiable ROI.</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            We don't brag about vanity impressions. We measure success strictly in pipeline generated, revenue scaled, and market dominance achieved.
          </p>

          {/* Filter Tabs */}
          <div
            style={{
              display: 'inline-flex',
              gap: '8px',
              marginTop: '28px',
              padding: '6px',
              background: '#F1F5F9',
              borderRadius: '999px',
              border: '1px solid rgba(226, 232, 240, 1)',
            }}
          >
            {[
              { id: 'all', label: 'All Results' },
              { id: 'ecommerce', label: 'E-Commerce / D2C' },
              { id: 'saas', label: 'B2B SaaS' },
              { id: 'b2b', label: 'Enterprise B2B' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  background: activeTab === tab.id ? '#DC2626' : 'transparent',
                  color: activeTab === tab.id ? '#FFFFFF' : '#334155',
                  fontWeight: 600,
                  border: 'none',
                  borderRadius: '6px',
                  padding: '7px 16px',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '28px',
          }}
        >
          {filtered.map((cs) => (
            <div
              key={cs.id}
              className="glass-card"
              style={{
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#FFFFFF',
              }}
            >
              <div>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span className="badge-pill" style={{ fontSize: '0.72rem', padding: '3px 10px' }}>
                    {cs.badge}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>{cs.industry}</span>
                </div>

                <h3 style={{ fontSize: '1.4rem', color: '#0F172A', marginBottom: '14px' }}>{cs.client}</h3>

                {/* Big Metric Box */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '12px',
                    padding: '16px',
                    background: '#FFF1F2',
                    border: '1px solid rgba(239, 68, 68, 0.25)',
                    borderRadius: '12px',
                    marginBottom: '20px',
                  }}
                >
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#DC2626', lineHeight: 1 }}>
                    {cs.heroMetric}
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>
                    • {cs.secondaryMetric}
                  </div>
                </div>

                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                  {cs.summary}
                </p>

                {/* Bullet Points */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {cs.results.map((r, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.86rem', color: '#1E293B' }}>
                      <CheckCircle2 size={16} color="#DC2626" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '16px', borderTop: '1px solid rgba(226, 232, 240, 1)' }}>
                {cs.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: '0.72rem',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background: '#F1F5F9',
                      color: '#475569',
                      fontWeight: 600,
                    }}
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
