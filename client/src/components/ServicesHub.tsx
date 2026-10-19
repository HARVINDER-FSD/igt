import React, { useState } from 'react';
import {
  Search,
  Target,
  Globe,
  Share2,
  Mail,
  Users,
  BarChart3,
  Award,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Layers,
} from 'lucide-react';

interface ServicesHubProps {
  onSelectService: (serviceName: string) => void;
}

export interface ServiceItem {
  id: string;
  category: 'paid' | 'organic' | 'creative' | 'retention';
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  metrics: string;
  keyDeliverables: string[];
  toolsUsed: string[];
  caseSnippet: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'google-ads',
    category: 'paid',
    title: 'Google & YouTube Search Ads',
    tagline: 'Capture high-intent customers who are already searching to buy your product or service.',
    description:
      'We build and actively manage high-ROI Google Search, Shopping, and YouTube video ad campaigns. We eliminate wasted budget on negative keywords and continually test ad copy to drive qualified sales.',
    icon: <Target size={26} />,
    accentColor: '#EF4444',
    metrics: '4.8x Average Return On Ad Spend',
    keyDeliverables: [
      'High-Intent Keyword Research & Competitor Bid Auditing',
      'Negative Keyword Filtering (stops burning budget on bad clicks)',
      'High-Converting Ad Copywriting & Extension Setup',
      'Google Shopping & Performance Max Feed Optimization',
      'Accurate Conversion & Revenue Tracking Setup',
    ],
    toolsUsed: ['Google Ads', 'Google Merchant Center', 'Keyword Planner', 'Google Analytics'],
    caseSnippet: 'Lowered cost-per-lead by 38% while scaling monthly qualified demos from 45 to 130.',
  },
  {
    id: 'meta-ads',
    category: 'paid',
    title: 'Meta Ads (Facebook & Instagram)',
    tagline: 'Turn social media browsing into consistent revenue and loyal paying customers.',
    description:
      'We produce scroll-stopping video ads, test targeted audience angles, and scale profitable Meta ad budgets. Our team handles everything from creative briefing to daily bid adjustments.',
    icon: <Share2 size={26} />,
    accentColor: '#DC2626',
    metrics: '+310% Scale in Profitable Ad Spend',
    keyDeliverables: [
      'Creative Strategy & Direct-Response Ad Scripts',
      'Audience Persona Testing & Lookalike Modeling',
      'Server-Side Pixel Tracking & Conversions API Setup',
      'Weekly Creative Testing to prevent ad fatigue',
      'Retargeting & Abandoned Cart Ad Sequences',
    ],
    toolsUsed: ['Meta Ads Manager', 'Canva Pro', 'Figma', 'Premiere Pro'],
    caseSnippet: 'Scaled an e-commerce brand from $15k to $120k monthly revenue within 5 months at 4.2x ROAS.',
  },
  {
    id: 'seo-organic',
    category: 'organic',
    title: 'Search Engine Optimization (SEO)',
    tagline: 'Rank higher on Google Page 1 and generate free, sustainable organic customer traffic.',
    description:
      'We fix technical website errors, write authoritative content around keywords your customers search, and secure genuine editorial backlinks that sustainably improve your Google rankings.',
    icon: <Search size={26} />,
    accentColor: '#B91C1C',
    metrics: '+280% Organic Search Traffic Growth',
    keyDeliverables: [
      'Full Website Technical SEO & Speed Audit',
      'Keyword Research focused on High-Buying Intent',
      'Content Strategy & On-Page Keyword Optimization',
      'High-Quality Editorial Backlink Outreach',
      'Local SEO & Google Business Profile Optimization',
    ],
    toolsUsed: ['Ahrefs', 'Google Search Console', 'Semrush', 'Screaming Frog'],
    caseSnippet: 'Ranked client on Page 1 for 42 high-volume industry keywords, driving $60k+ in free monthly traffic.',
  },
  {
    id: 'landing-pages',
    category: 'creative',
    title: 'High-Converting Landing Pages & Web Design',
    tagline: 'Stop sending ad traffic to pages that fail to convert visitors into buyers.',
    description:
      'We design and build clean, fast, mobile-friendly landing pages specifically tailored to turn clicks into paying customers. Every headline, button, and layout element is tested for maximum conversions.',
    icon: <Globe size={26} />,
    accentColor: '#EF4444',
    metrics: '+45% Increase in Checkout Conversions',
    keyDeliverables: [
      'Custom Direct-Response Landing Page Design',
      'Fast Sub-Second Page Load Speeds on Mobile',
      'Clear, Persuasive Sales Copywriting & Offers',
      'A/B Headline and Call-to-Action Split Testing',
      'Frictionless Lead Forms & Checkout Experience',
    ],
    toolsUsed: ['React', 'Figma', 'WordPress', 'Shopify', 'Hotjar'],
    caseSnippet: 'Redesigned a client landing page, boosting their lead conversion rate from 1.8% to 4.6%.',
  },
  {
    id: 'email-sms',
    category: 'retention',
    title: 'Email & SMS Marketing Automation',
    tagline: 'Generate 25% to 35% of your total revenue from automated follow-up sequences.',
    description:
      'We set up automated customer journeys in Klaviyo and Mailchimp that recover lost sales, welcome new subscribers, and turn one-time shoppers into repeat, long-term buyers.',
    icon: <Mail size={26} />,
    accentColor: '#DC2626',
    metrics: '32% Of Total Store Revenue via Emails',
    keyDeliverables: [
      'Abandoned Cart & Browse Abandonment Sequences',
      'Welcome Series with High-Converting Introductory Offers',
      'Post-Purchase Thank You & Repeat Purchase Flows',
      'Monthly Newsletter Design & Promotional Campaigns',
      'List Segmentation to prevent unsubscribes and spam flags',
    ],
    toolsUsed: ['Klaviyo', 'Mailchimp', 'Postscript', 'Shopify Email'],
    caseSnippet: 'Added $28,000 per month in passive sales purely through automated abandoned cart flows.',
  },
  {
    id: 'content-social',
    category: 'creative',
    title: 'Social Media Content & Video Ads',
    tagline: 'Authentic short-form video content that builds real community and brand trust.',
    description:
      'We script, edit, and produce engaging short-form videos for Instagram Reels, TikTok, and YouTube Shorts that capture consumer attention and communicate your value proposition clearly.',
    icon: <Award size={26} />,
    accentColor: '#B91C1C',
    metrics: '6M+ Organic Video Views Generated',
    keyDeliverables: [
      'Short-Form Video Concepting & Hook Writing',
      'Professional Video Editing with Subtitles & Sound Design',
      'User-Generated Content (UGC) Direct-Response Ads',
      'Organic Social Media Posting Calendar & Graphics',
      'Brand Visual Consistency across all channels',
    ],
    toolsUsed: ['Premiere Pro', 'CapCut Pro', 'Canva', 'Photoshop'],
    caseSnippet: 'Produced 24 viral TikTok videos resulting in 1,200+ direct website orders.',
  },
  {
    id: 'influencer-partnerships',
    category: 'paid',
    title: 'Influencer & Creator Partnerships',
    tagline: 'Partner with trusted voices in your niche for authentic reviews and word-of-mouth growth.',
    description:
      'We scout vetted creators who genuinely resonate with your target audience, negotiate fair collaboration terms, and coordinate real product reviews that drive traffic and social proof.',
    icon: <Users size={26} />,
    accentColor: '#EF4444',
    metrics: '3.8x Return on Creator Collaborations',
    keyDeliverables: [
      'Vetted Creator Scouting in your specific niche',
      'Fair Price Negotiation & Content Rights Contracts',
      'Creative Briefing to ensure genuine, authentic messaging',
      'Trackable Promo Codes & Custom Referral Links',
      'Whitelisting Creator Videos for Paid Ad Amplification',
    ],
    toolsUsed: ['Modash', 'Instagram', 'TikTok Creator Marketplace'],
    caseSnippet: 'Coordinated 15 micro-creator reviews generating over 450 new customers in 3 weeks.',
  },
  {
    id: 'analytics-reporting',
    category: 'retention',
    title: 'Analytics & Transparent Weekly Reporting',
    tagline: 'Know exactly where every dollar goes and what revenue it brought back.',
    description:
      'No complicated jargon or confusing spreadsheets. We provide a clean dashboard and a personalized weekly video walk-through showing your exact cost-per-lead, ROAS, and profit growth.',
    icon: <BarChart3 size={26} />,
    accentColor: '#DC2626',
    metrics: '100% Clear, Understandable Reports',
    keyDeliverables: [
      'Setup of Google Analytics 4 (GA4) with Custom Conversions',
      'Clean Executive Dashboard updated in real-time',
      'Weekly Monday Video Walkthrough from your Media Buyer',
      'Monthly Strategy Meeting to review revenue targets',
      'Direct Private Slack / WhatsApp Channel for quick questions',
    ],
    toolsUsed: ['GA4', 'Google Looker Studio', 'Google Tag Manager'],
    caseSnippet: 'Identified and eliminated $6,400/mo of wasted ad budget within the first 14 days.',
  },
];

export const ServicesHub: React.FC<ServicesHubProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'paid' | 'organic' | 'creative' | 'retention'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = servicesData.filter(
    (s) => activeFilter === 'all' || s.category === activeFilter
  );

  return (
    <section id="services" className="section-wrapper" style={{ background: '#FFFFFF', position: 'relative' }}>
      <div className="app-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Layers size={14} /> Comprehensive Digital Marketing Services
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.15, marginBottom: '20px', color: '#0F172A' }}>
            Everything You Need To <span className="gradient-text">Scale Online</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Every service is managed directly by seasoned human specialists with proven track records. No interns, no shortcuts, just practical execution that generates real revenue.
          </p>

          {/* Filter Tabs */}
          <div
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '32px',
              padding: '6px',
              background: '#F1F5F9',
              border: '1px solid rgba(226, 232, 240, 1)',
              borderRadius: '999px',
            }}
          >
            {[
              { id: 'all', label: 'All Services (8)' },
              { id: 'paid', label: 'Paid Ads & Creators' },
              { id: 'organic', label: 'Search & SEO' },
              { id: 'creative', label: 'Landing Pages & Video' },
              { id: 'retention', label: 'Email & Analytics' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                style={{
                  background: activeFilter === tab.id ? '#DC2626' : 'transparent',
                  color: activeFilter === tab.id ? '#FFFFFF' : '#334155',
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

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderLeft: `4px solid ${service.accentColor}`,
                background: '#FFFFFF',
              }}
            >
              <div>
                {/* Top Row: Icon and Metric */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '14px',
                      background: 'rgba(239, 68, 68, 0.08)',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: service.accentColor,
                    }}
                  >
                    {service.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '99px',
                      background: 'rgba(239, 68, 68, 0.08)',
                      color: '#DC2626',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                    }}
                  >
                    {service.metrics}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 style={{ fontSize: '1.35rem', marginBottom: '8px', color: '#0F172A' }}>{service.title}</h3>
                <p style={{ fontSize: '0.86rem', color: '#DC2626', fontWeight: 700, marginBottom: '14px' }}>
                  {service.tagline}
                </p>
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                  {service.description}
                </p>

                {/* Key Deliverables List */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#64748B', fontWeight: 700, marginBottom: '10px' }}>
                    What We Do For You:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {service.keyDeliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.86rem', color: '#1E293B' }}>
                        <CheckCircle2 size={15} color={service.accentColor} style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div>
                {/* Tools used */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {service.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      style={{
                        fontSize: '0.72rem',
                        padding: '3px 8px',
                        background: '#F1F5F9',
                        border: '1px solid rgba(226, 232, 240, 1)',
                        borderRadius: '6px',
                        color: '#475569',
                        fontWeight: 600,
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="btn-primary"
                    style={{
                      flex: 1,
                      padding: '11px 16px',
                      fontSize: '0.86rem',
                    }}
                  >
                    <span>Inquire About Service</span>
                    <ArrowUpRight size={15} />
                  </button>

                  <button
                    onClick={() => setSelectedService(service)}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid rgba(226, 232, 240, 1)',
                      color: '#0F172A',
                      borderRadius: '999px',
                      padding: '10px 14px',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                    title="View Full Scope"
                  >
                    Details <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Detailed Service Breakdown */}
        {selectedService && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999,
              background: 'rgba(15, 23, 42, 0.65)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
            onClick={() => setSelectedService(null)}
          >
            <div
              className="glass-panel"
              style={{
                maxWidth: '680px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '36px',
                position: 'relative',
                background: '#FFFFFF',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.2)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: '#F1F5F9',
                  border: 'none',
                  color: '#0F172A',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ✕
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'rgba(239, 68, 68, 0.1)',
                    color: '#EF4444',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {selectedService.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: '#0F172A' }}>{selectedService.title}</h3>
                  <p style={{ color: '#DC2626', fontSize: '0.85rem', fontWeight: 700 }}>
                    {selectedService.tagline}
                  </p>
                </div>
              </div>

              <div
                style={{
                  background: '#FFF1F2',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  color: '#DC2626',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  marginBottom: '20px',
                }}
              >
                Typical Benchmark: {selectedService.metrics}
              </div>

              <h4 style={{ color: '#0F172A', marginBottom: '12px', fontSize: '1rem' }}>Detailed Scope of Deliverables:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                {selectedService.keyDeliverables.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#334155' }}>
                    <CheckCircle2 size={16} color={selectedService.accentColor} style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  background: '#F8FAFC',
                  borderLeft: `4px solid ${selectedService.accentColor}`,
                  padding: '16px',
                  borderRadius: '8px',
                  marginBottom: '28px',
                }}
              >
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748B', fontWeight: 700, marginBottom: '4px' }}>
                  Real Campaign Example:
                </div>
                <div style={{ color: '#0F172A', fontStyle: 'italic', fontSize: '0.92rem' }}>
                  "{selectedService.caseSnippet}"
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedService(null);
                  onSelectService(selectedService.title);
                }}
                className="btn-primary"
                style={{ width: '100%', padding: '14px' }}
              >
                <span>Inquire About This Service</span>
                <ArrowUpRight size={17} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
