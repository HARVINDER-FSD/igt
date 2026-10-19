import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How quickly do we start seeing measurable revenue results from our campaigns?',
      a: 'For paid media (Google Ads, Meta Ads), we typically see initial sales and qualified leads within 7 to 14 days of launch as we dial in keywords and audience targeting. For organic SEO, keyword rankings and sustainable free traffic compound steadily over 60 to 90 days.',
    },
    {
      q: 'Do you manage our ad budget directly or do we pay Google and Meta ourselves?',
      a: 'You retain 100% direct ownership of all your ad accounts (Meta Business Manager, Google Ads). Your company credit card is billed directly by the advertising platforms. You own all data, pixels, creative assets, and account history from day one.',
    },
    {
      q: 'Why do you include custom landing page design alongside ad management?',
      a: 'Sending expensive ad traffic to a slow, generic website burns your budget. We build clean, fast, high-converting landing pages specifically matched to your ad copy, typically improving checkout and form conversion rates by 40% to 60%.',
    },
    {
      q: 'How does your contact form and Nodemailer backend work?',
      a: 'Our contact form is powered by an Express Node.js server with Nodemailer. When you submit an inquiry, an email notification is immediately routed to our senior team with all your campaign details, and an automated confirmation receipt is sent to your inbox.',
    },
    {
      q: 'What contract commitment do you require?',
      a: 'We work on transparent 90-day growth sprints or flexible month-to-month retainers. We don’t believe in trapping clients in restrictive 12-month lock-in contracts; our client retention is maintained entirely by delivering profitable, quantifiable ROI.',
    },
    {
      q: 'Who will be handling our brand day-to-day?',
      a: 'You are assigned a dedicated Senior Media Buyer, an SEO Specialist, and a Direct-Response Copywriter. You also receive direct daily access to your team via a private Slack or WhatsApp channel.',
    },
  ];

  return (
    <section id="faq" className="section-wrapper" style={{ background: '#FAFAFB', position: 'relative' }}>
      <div className="app-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            <HelpCircle size={14} /> Clear Answers
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', lineHeight: 1.2, marginBottom: '16px', color: '#0F172A' }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Everything you need to know about partnering with our senior digital marketing team.
          </p>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-panel"
                style={{
                  background: '#FFFFFF',
                  border: isOpen ? '1px solid rgba(239, 68, 68, 0.45)' : '1px solid rgba(226, 232, 240, 1)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen ? '0 8px 24px rgba(239, 68, 68, 0.08)' : '0 2px 6px rgba(0,0,0,0.02)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    color: '#0F172A',
                    textAlign: 'left',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                  }}
                >
                  <span>{faq.q}</span>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      color: isOpen ? '#EF4444' : '#64748B',
                      flexShrink: 0,
                      marginLeft: '12px',
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 22px 24px',
                      color: '#475569',
                      fontSize: '0.94rem',
                      lineHeight: 1.7,
                      borderTop: '1px solid rgba(226, 232, 240, 0.8)',
                      paddingTop: '14px',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
