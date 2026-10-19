import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Target, Search, Smartphone, Mail, Video, Zap, Layers } from 'lucide-react';
import gsap from 'gsap';

interface ServicesPageProps {
  onSelectService: (serviceName: string) => void;
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.services-hero-animate',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
        gsap.fromTo(
          '.service-block',
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, delay: 0.25, ease: 'power3.out' }
        );
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  const detailedServices = [
    {
      id: 'google-ads',
      name: 'Google & YouTube Search & Shopping Ads',
      icon: <Target size={28} color="#EF4444" />,
      tagline: 'Capture high-intent in-market buyers searching for your exact solution right now.',
      description: 'We build and scale full-funnel Google Ads ecosystems. From high-converting Search campaigns targeting exact purchase intent, to Google Shopping and Performance Max (PMax) campaigns with automated asset optimization and custom offline conversion tracking.',
      deliverables: [
        'High-Intent Keyword Architecture & Negative Match Lists',
        'Performance Max (PMax) Asset Optimization & Signal Groups',
        'Google Merchant Center Feed Optimization & Shopping Scaling',
        'YouTube In-Stream & Shorts Video Ad Funnels',
        'Server-Side Google Tag Manager (GTM) & Enhanced Conversions',
        'Bid Strategy Tuning (Target CPA & Target ROAS Optimization)',
      ],
      tools: ['Google Ads', 'Google Merchant Center', 'GTM Server-Side', 'Google Analytics 4', 'Triple Whale'],
    },
    {
      id: 'meta-ads',
      name: 'Meta Ads (Facebook & Instagram Advantage+)',
      icon: <Smartphone size={28} color="#EF4444" />,
      tagline: 'Aggressively scale revenue with algorithm-friendly direct response creative testing.',
      description: 'Meta ads require dynamic direct-response creative frameworks. We produce, test, and iterate winning hook angles, video variations, and static formats designed specifically for Advantage+ Shopping Campaigns (ASC) and broad demographic scaling.',
      deliverables: [
        'Advantage+ Shopping Campaign (ASC) Full Funnel Setup',
        'Rapid Creative Testing Framework (Hook, Body, CTA Iterations)',
        'Dynamic Product Ads (DPA) & Behavioral Retargeting',
        'Meta Conversions API (CAPI) Server-Side Deduplication',
        'Custom Audience Exclusions & Lifetime Value Optimization',
        'Weekly Creative Production Briefs & Ad Fatigue Monitoring',
      ],
      tools: ['Meta Ads Manager', 'Meta CAPI', 'Foreplay.co', 'Motion App', 'Canva Pro'],
    },
    {
      id: 'seo',
      name: 'Search Engine Optimization (SEO & AI Search)',
      icon: <Search size={28} color="#EF4444" />,
      tagline: 'Own permanent organic market share on Google Page 1 and AI Search Overviews.',
      description: 'SEO today is not about keyword stuffing—it is about technical site health, search intent mastery, authoritative digital PR, and Generative Engine Optimization (GEO) so your brand appears as the trusted answer in ChatGPT, Perplexity, and Google AI Overviews.',
      deliverables: [
        'Comprehensive Core Web Vitals & Technical Crawl Audit',
        'High-Commercial Intent Topic Cluster Mapping',
        'High-Authority Digital PR & Contextual Backlink Outreach',
        'On-Page Schema Markup & Structured Entity Optimization',
        'Generative Engine Optimization (GEO) for AI Citations',
        'Monthly Transparent Keyword Ranking & Organic Revenue Tracking',
      ],
      tools: ['Ahrefs', 'Semrush', 'Screaming Frog', 'Google Search Console', 'SurferSEO'],
    },
    {
      id: 'landing-pages',
      name: 'High-Converting Landing Pages & CRO',
      icon: <Zap size={28} color="#EF4444" />,
      tagline: 'Turn twice as many visitors into paying customers with direct-response design.',
      description: 'The best ad campaigns in the world will fail if your website leaks traffic. We design and build dedicated, lightning-fast direct-response sales landing pages, advertorials, and offer pages optimized to maximize Average Order Value (AOV) and conversion rate.',
      deliverables: [
        'Direct-Response Copywriting & Value Proposition Structuring',
        'Mobile-First Custom Landing Page Design (Sub-Second Load Speed)',
        'Frictionless Checkout Funnels & 1-Click Post-Purchase Upsells',
        'Heatmap & Screen Recording User Behavior Tracking',
        'Continuous A/B Split Testing (Headlines, Offers, Social Proof)',
        'Shopify, Webflow & Custom Stack Integrations',
      ],
      tools: ['Shopify Liquid', 'Figma', 'Hotjar', 'Google Optimize', 'VWO'],
    },
    {
      id: 'email-marketing',
      name: 'Klaviyo Email & SMS Lifecycle Marketing',
      icon: <Mail size={28} color="#EF4444" />,
      tagline: 'Generate 25% to 40% of total company revenue from automated backend flows.',
      description: 'Acquiring customers on paid media is only step one; actual profit is forged on retention. We build hyper-personalized Klaviyo email and SMS automation flows that maximize Customer Lifetime Value (LTV) and turn one-time buyers into lifelong brand advocates.',
      deliverables: [
        'High-Converting Welcome Series with Offer Stacking',
        'Browse Abandonment & Multi-Step Cart Recovery Sequences',
        'Post-Purchase Cross-Sell, VIP Loyalty & Win-Back Automations',
        'Segmented Weekly Promotional Campaigns & Product Launches',
        'Deliverability Health & Inbox Placement Optimization',
        'SMS Compliance & Two-Way Conversational Messaging',
      ],
      tools: ['Klaviyo Elite', 'Attentive', 'Postscript', 'BEE Pro', 'Litmus'],
    },
    {
      id: 'creator-ugc',
      name: 'Creator Partnerships & Direct Response UGC',
      icon: <Video size={28} color="#EF4444" />,
      tagline: 'Authentic user-generated video ads that stop the scroll and build immediate trust.',
      description: 'Modern consumers ignore slick corporate advertisements. We manage the entire creator pipeline—sourcing vetted creators, writing high-impact scripts with proven scroll-stopping hooks, and editing high-converting UGC for TikTok, Instagram Reels, and YouTube Shorts.',
      deliverables: [
        'End-to-End Creator Sourcing & Contract Management',
        'Scriptwriting with Proven 3-Second Hook Frameworks',
        'Professional Video Post-Production & Subtitle Formatting',
        'Creator Account Whitelisting (Partnership Ads Management)',
        'Content Iterations with Different Soundtracks & Angles',
        'Full Commercial Usage Rights & Raw Footage Handoff',
      ],
      tools: ['TikTok Creative Center', 'CapCut Pro', 'Adobe Premiere', 'Instagram Partnership Hub'],
    },
  ];

  return (
    <div ref={containerRef} style={{ paddingTop: '80px', minHeight: '100vh', background: '#FAFAFB' }}>
      {/* 1. Page Hero with Visible White/Light Background (work-analytics.jpg) */}
      <section
        style={{
          position: 'relative',
          padding: '110px 0 90px',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.94)), url(/work-analytics.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#0F172A',
          textAlign: 'center',
          borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        }}
      >
        <div className="app-container" style={{ position: 'relative', zIndex: 1, maxWidth: '850px', margin: '0 auto' }}>
          <div
            className="services-hero-animate"
            style={{
              display: 'inline-block',
              padding: '6px 18px',
              borderRadius: '999px',
              background: '#FFF1F2',
              border: '1px solid rgba(239, 68, 68, 0.35)',
              color: '#DC2626',
              fontSize: '0.8rem',
              fontWeight: 800,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Full-Funnel Capabilities
          </div>
          <h1
            className="services-hero-animate"
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#0F172A',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            Digital Marketing Engineered For <br />
            <span style={{ color: '#EF4444' }}>Quantifiable Revenue Growth.</span>
          </h1>
          <p className="services-hero-animate" style={{ color: '#475569', fontSize: '1.15rem', lineHeight: 1.7, margin: '0 auto 30px', maxWidth: '720px' }}>
            Explore our specialized media buying, organic search, conversion optimization, and creator retention services designed to systematically scale your business.
          </p>
        </div>
      </section>

      {/* 2. Services Detailed List (NO SHADOWS ON CARDS) */}
      <section className="section-wrapper" style={{ background: '#FFFFFF' }}>
        <div className="app-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            {detailedServices.map((svc, index) => (
              <div
                key={svc.id}
                id={svc.id}
                className="service-block"
                style={{
                  padding: '40px 34px',
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  border: '1px solid rgba(226, 232, 240, 1)',
                  boxShadow: 'none',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '36px',
                  alignItems: 'center',
                }}
              >
                {/* Left Info Column */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '12px',
                        background: '#FFF1F2',
                        border: '1px solid rgba(239, 68, 68, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {svc.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#EF4444', letterSpacing: '1px', textTransform: 'uppercase' }}>
                        Service 0{index + 1}
                      </div>
                      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A' }}>
                        {svc.name}
                      </h2>
                    </div>
                  </div>

                  <p style={{ color: '#DC2626', fontWeight: 700, fontSize: '0.96rem', marginBottom: '14px' }}>
                    {svc.tagline}
                  </p>

                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '22px' }}>
                    {svc.description}
                  </p>

                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#64748B', fontWeight: 700, marginBottom: '10px' }}>
                      Platforms & Technologies:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {svc.tools.map((t, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: '#F1F5F9',
                            color: '#334155',
                            padding: '4px 12px',
                            borderRadius: '8px',
                            fontSize: '0.78rem',
                            fontWeight: 600,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectService(svc.name)}
                    className="btn-primary"
                    style={{ padding: '12px 24px', fontSize: '0.9rem' }}
                  >
                    <span>Inquire About {svc.name.split(' ')[0]} Ads</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

                {/* Right Deliverables Column */}
                <div
                  style={{
                    background: '#F8FAFC',
                    padding: '30px 26px',
                    borderRadius: '14px',
                    border: '1px solid rgba(226, 232, 240, 1)',
                  }}
                >
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Layers size={18} color="#EF4444" />
                    <span>Included Execution & Deliverables:</span>
                  </h3>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {svc.deliverables.map((item, dIdx) => (
                      <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.9rem', color: '#334155' }}>
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: '#FFF1F2',
                            color: '#DC2626',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        >
                          <CheckCircle2 size={13} strokeWidth={3} />
                        </div>
                        <span style={{ lineHeight: 1.5 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Unique Mid-Page Immersive Background Section (case-study-client.jpg) - BRIGHT WHITE VISIBLE */}
      <section
        style={{
          position: 'relative',
          padding: '95px 0',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.94)), url(/case-study-client.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#0F172A',
          borderTop: '1px solid rgba(226, 232, 240, 0.8)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
          overflow: 'hidden',
        }}
      >
        <div className="app-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '6px 18px',
              borderRadius: '999px',
              background: '#FFF1F2',
              border: '1px solid rgba(239, 68, 68, 0.35)',
              color: '#DC2626',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '18px',
            }}
          >
            Omnichannel Synergy
          </span>

          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, color: '#0F172A', marginBottom: '18px', lineHeight: 1.25 }}>
            Channels Don't Work In Silos. <br />
            <span style={{ color: '#EF4444' }}>They Multiply Each Other.</span>
          </h2>

          <p style={{ maxWidth: '720px', margin: '0 auto 36px', color: '#475569', fontSize: '1.05rem', lineHeight: 1.65 }}>
            A user sees a viral Meta Ad, searches for your brand on Google, converts on a speed-optimized landing page, and gets retained through automated Klaviyo flows. That is the Ignite Growth system.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary"
              style={{ padding: '14px 28px', fontSize: '0.95rem' }}
            >
              <span>Get Your Custom Omnichannel Plan</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => onNavigate('work')}
              style={{
                background: '#FFFFFF',
                border: '1px solid #CBD5E1',
                color: '#0F172A',
                padding: '14px 26px',
                borderRadius: '10px',
                fontWeight: 700,
                cursor: 'pointer',
                fontSize: '0.95rem',
              }}
            >
              See Client Results
            </button>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA - Clean White */}
      <section
        style={{
          padding: '75px 0',
          background: '#FFFFFF',
          borderTop: '1px solid #E2E8F0',
          color: '#0F172A',
          textAlign: 'center',
        }}
      >
        <div className="app-container">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
            Not Sure Which Channel To Start With?
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 30px' }}>
            Schedule an exploratory growth audit with our senior media strategist. We will review your analytics and outline the fastest path to profitability.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="btn-primary"
            style={{ padding: '14px 32px', fontSize: '1rem' }}
          >
            <span>Book Free Marketing Consultation</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};
