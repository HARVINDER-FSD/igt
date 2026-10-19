import React from 'react';
import { Search, PenTool, Rocket, MessageSquareText } from 'lucide-react';

export const GrowthProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: '1-on-1 Discovery & Account Audit',
      desc: 'We hop on a call to review your current ad accounts, historical data, landing pages, and past blockers. We identify exactly where ad budget was being wasted.',
      icon: <Search size={24} color="#EF4444" />,
      accent: '#EF4444',
    },
    {
      num: '02',
      title: 'Tailored Strategy & Ad Creative Production',
      desc: 'Our senior team writes persuasive ad copy, outlines direct-response video scripts, designs high-converting landing pages, and structures your ad campaigns.',
      icon: <PenTool size={24} color="#DC2626" />,
      accent: '#DC2626',
    },
    {
      num: '03',
      title: 'Launch & Daily Active Management',
      desc: 'We go live and monitor your campaigns daily. Our media buyers prune underperforming keywords, reallocate budget to top performers, and scale winning angles.',
      icon: <Rocket size={24} color="#B91C1C" />,
      accent: '#B91C1C',
    },
    {
      num: '04',
      title: 'Weekly Video Reviews & Direct Communication',
      desc: 'No confusing dashboards. Every Monday you receive a 5-minute video walkthrough of your results and have direct Slack/WhatsApp access to your dedicated strategist.',
      icon: <MessageSquareText size={24} color="#991B1B" />,
      accent: '#991B1B',
    },
  ];

  return (
    <section id="process" className="section-wrapper" style={{ background: '#FAFAFB', position: 'relative' }}>
      <div className="app-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            Our Human Process
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', lineHeight: 1.2, marginBottom: '16px', color: '#0F172A' }}>
            How We Work With You, <span className="gradient-text">Step by Step</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            No secret algorithms or hidden methods. We keep our process transparent, collaborative, and focused on driving real revenue into your bank account.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            position: 'relative',
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              className="glass-card"
              style={{
                padding: '32px 24px',
                position: 'relative',
                borderTop: `4px solid ${step.accent}`,
                background: '#FFFFFF',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(239, 68, 68, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                  }}
                >
                  {step.icon}
                </div>
                <span
                  style={{
                    fontSize: '1.8rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 800,
                    color: 'rgba(239, 68, 68, 0.25)',
                  }}
                >
                  {step.num}
                </span>
              </div>

              <h3 style={{ fontSize: '1.18rem', color: '#0F172A', marginBottom: '12px', lineHeight: 1.3 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
