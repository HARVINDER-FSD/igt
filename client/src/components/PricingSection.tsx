import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string, price: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      id: 'starter',
      name: 'Starter Velocity',
      tagline: 'Ideal for early-stage brands looking to establish predictable paid & organic traction.',
      monthlyPrice: 2490,
      accent: '#DC2626',
      deliverables: [
        'Up to $15,000/mo Managed Ad Spend',
        'Meta (FB & IG) OR Google Ads Management',
        'Core Technical & On-Page SEO Foundations',
        'Bi-Weekly Creative Refreshes (4 Video Ads/mo)',
        'Server-Side GTM & Pixel Verification',
        'Weekly Performance Report & Slack Channel',
      ],
    },
    {
      id: 'growth',
      name: 'Hyper-Growth Scale',
      tagline: 'Our flagship full-funnel growth sprint designed to aggressively capture market share.',
      monthlyPrice: 4890,
      accent: '#EF4444',
      deliverables: [
        'Up to $60,000/mo Managed Ad Spend',
        'Omnichannel Ads: Meta Advantage+ & Google PMax & TikTok',
        'Comprehensive Google Page 1 SEO Strategy',
        'High-Converting Custom Sales Landing Page',
        'Full Klaviyo Email & SMS Lifecycle Flow Automation',
        'Weekly Creative Lab: 12 Direct-Response Video Ads/mo',
        'Dedicated Senior Growth Strategist & Daily Slack Comms',
      ],
    },
    {
      id: 'enterprise',
      name: 'Enterprise Scale',
      tagline: 'Dedicated marketing team for established brands scaling aggressively.',
      monthlyPrice: 9490,
      accent: '#B91C1C',
      deliverables: [
        'Unlimited Managed Ad Spend ($100k+/mo)',
        'Full Omnichannel: Google, Meta, TikTok, YouTube & Retargeting',
        'Custom Landing Page Suite & Continuous Conversion Optimization',
        'Influencer Whitelisting & Creator Partnership Management',
        'Server-Side Attribution Warehouse (Triple Whale / Northbeam)',
        'Dedicated 5-Person Pod (Strategist, Dev, Buyer, Editor, Copywriter)',
        'Weekly 1-on-1 Executive Growth Strategy Board Call',
      ],
    },
  ];

  return (
    <section id="pricing" className="section-wrapper" style={{ background: '#FAFAFB', position: 'relative' }}>
      <div className="app-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', lineHeight: 1.2, marginBottom: '16px', color: '#0F172A' }}>
            Predictable Pricing. <span className="gradient-text">Uncapped Upside.</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            No hidden fees. No junior account managers. Just elite execution focused on driving quantifiable profit to your bottom line.
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            alignItems: 'stretch',
          }}
        >
          {plans.map((plan) => {
            const price = plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className="glass-card"
                style={{
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: '1px solid rgba(226, 232, 240, 1)',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                  background: '#FFFFFF',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: '#0F172A', marginBottom: '8px' }}>{plan.name}</h3>
                  <p style={{ fontSize: '0.86rem', color: '#64748B', minHeight: '44px', lineHeight: 1.5, marginBottom: '20px' }}>
                    {plan.tagline}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '24px' }}>
                    <span style={{ fontSize: '2.8rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                      ${price.toLocaleString()}
                    </span>
                    <span style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 600 }}>/ month</span>
                  </div>

                  <div style={{ height: '1px', background: 'rgba(226, 232, 240, 1)', marginBottom: '24px' }} />

                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#0F172A', fontWeight: 700, marginBottom: '14px' }}>
                    Included in this plan:
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                    {plan.deliverables.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#334155' }}>
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            background: 'rgba(239, 68, 68, 0.12)',
                            color: '#DC2626',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        >
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectPlan(plan.name, `$${price.toLocaleString()}/mo`)}
                  className="btn-primary"
                  style={{ width: '100%', padding: '14px', fontSize: '0.95rem' }}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
