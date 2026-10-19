import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, X } from 'lucide-react';
import gsap from 'gsap';

interface WorkPageProps {
  onNavigate: (page: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.work-hero-animate',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
        gsap.fromTo(
          '.work-gallery-card',
          { opacity: 0, scale: 0.95, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power3.out' }
        );
      }, containerRef);

      return () => ctx.revert();
    }
  }, [activeCategory]);

  // All 19 client work images provided by user in public folder
  const portfolioItems = [
    { id: 1, src: '/1.png', title: 'Performance Ad Creative #1', category: 'ads', metric: '+340% ROAS' },
    { id: 2, src: '/2.png', title: 'E-commerce Conversion Campaign', category: 'ecommerce', metric: '4.8x Return' },
    { id: 3, src: '/3.png', title: 'Direct-Response Creative Asset', category: 'ads', metric: '-42% CAC' },
    { id: 4, src: '/4.png', title: 'Omnichannel Scale Campaign', category: 'brand', metric: '$120k/mo Spend' },
    { id: 5, src: '/5.png', title: 'High-Converting Offer Asset', category: 'ecommerce', metric: '+65% AOV' },
    { id: 6, src: '/6.png', title: 'Social Video Ad Production', category: 'ads', metric: '1.2M Views' },
    { id: 7, src: '/7.png', title: 'Google Search & PMax Asset', category: 'brand', metric: '6.2x ROAS' },
    { id: 8, src: '/8.png', title: 'Direct-Response Static Hook', category: 'ads', metric: '3.8% CTR' },
    { id: 9, src: '/9.png', title: 'Full Funnel Retargeting Asset', category: 'ecommerce', metric: '5.1x Return' },
    { id: 10, src: '/10.png', title: 'Brand Scaling Creative Sprint', category: 'brand', metric: '+210% MoM' },
    { id: 11, src: '/11.png', title: 'TikTok & Reels UGC Creative', category: 'ads', metric: '850k Reach' },
    { id: 12, src: '/12.png', title: 'Direct Response Landing Asset', category: 'ecommerce', metric: '4.4% CVR' },
    { id: 13, src: '/13.png', title: 'Lead Generation Funnel Asset', category: 'leadgen', metric: '$18 Cost/Lead' },
    { id: 14, src: '/14.png', title: 'High-Intent Acquisition Ad', category: 'ads', metric: '4.9x ROAS' },
    { id: 16, src: '/16.png', title: 'VIP Customer Retention Asset', category: 'ecommerce', metric: '+48% LTV' },
    { id: 17, src: '/17.png', title: 'B2B Qualified Pipeline Asset', category: 'leadgen', metric: '140+ MQLs' },
    { id: 18, src: '/18.png', title: 'Direct Response Video Ad', category: 'ads', metric: '+520% Sales' },
    { id: 20, src: '/20.png', title: 'Multi-Product Catalog Scale', category: 'ecommerce', metric: '5.4x ROAS' },
    { id: 21, src: '/21.png', title: 'Brand Transformation Campaign', category: 'brand', metric: '3.1x Profit' },
  ];

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div ref={containerRef} style={{ paddingTop: '80px', minHeight: '100vh', background: '#FAFAFB' }}>
      {/* 1. Page Hero with Visible White/Light Background (case-study-client.jpg) */}
      <section
        style={{
          position: 'relative',
          padding: '110px 0 90px',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.94)), url(/case-study-client.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#0F172A',
          textAlign: 'center',
          borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        }}
      >
        <div className="app-container" style={{ position: 'relative', zIndex: 1, maxWidth: '850px', margin: '0 auto' }}>
          <div
            className="work-hero-animate"
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
            Proof Of Execution
          </div>
          <h1
            className="work-hero-animate"
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#0F172A',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            Client Campaigns & Real Work <br />
            <span style={{ color: '#EF4444' }}>That Generated Millions.</span>
          </h1>
          <p className="work-hero-animate" style={{ color: '#475569', fontSize: '1.15rem', lineHeight: 1.7, margin: '0 auto 30px', maxWidth: '720px' }}>
            Browse through real creative assets, campaign snapshots, and e-commerce scale prints delivered for businesses worldwide. Click any project to inspect.
          </p>
        </div>
      </section>

      {/* 2. Interactive Portfolio Gallery (NO SHADOWS ON CARDS) */}
      <section className="section-wrapper" style={{ background: '#FFFFFF' }}>
        <div className="app-container">
          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '40px',
            }}
          >
            {[
              { id: 'all', label: 'All Work (19)' },
              { id: 'ads', label: 'Paid Ads & Creatives' },
              { id: 'ecommerce', label: 'E-Commerce Brands' },
              { id: 'brand', label: 'Growth Sprints' },
              { id: 'leadgen', label: 'Lead Generation' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '999px',
                  border: activeCategory === tab.id ? '2px solid #EF4444' : '1px solid #CBD5E1',
                  background: activeCategory === tab.id ? '#FFF1F2' : '#FFFFFF',
                  color: activeCategory === tab.id ? '#DC2626' : '#475569',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: 'none',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid (NO SHADOWS) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="work-gallery-card"
                onClick={() => setSelectedImage(item.src)}
                style={{
                  padding: '16px',
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid rgba(226, 232, 240, 1)',
                  boxShadow: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#EF4444';
                  e.currentTarget.style.borderWidth = '2px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 1)';
                  e.currentTarget.style.borderWidth = '1px';
                }}
              >
                {/* Image Container - NO SHADOW */}
                <div
                  style={{
                    width: '100%',
                    height: '210px',
                    borderRadius: '10px',
                    background: '#FAFAFB',
                    border: '1px solid rgba(241, 245, 249, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                    marginBottom: '14px',
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    style={{
                      maxWidth: '92%',
                      maxHeight: '92%',
                      objectFit: 'contain',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </div>

                {/* Card Meta */}
                <div>
                  <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0F172A', marginBottom: '2px' }}>
                    {item.title}
                  </h3>
                  <div style={{ fontSize: '0.76rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 600 }}>
                    Ignite Growth Portfolio
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Unique Mid-Page Immersive Background Section (work-analytics.jpg) - BRIGHT WHITE VISIBLE */}
      <section
        style={{
          position: 'relative',
          padding: '95px 0',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.94)), url(/work-analytics.jpg)',
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
            Live Tracking & Telemetry
          </span>

          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, color: '#0F172A', marginBottom: '18px', lineHeight: 1.25 }}>
            Real-Time Revenue Attribution. <br />
            <span style={{ color: '#EF4444' }}>Zero Vanity Guesswork.</span>
          </h2>

          <p style={{ maxWidth: '720px', margin: '0 auto 36px', color: '#475569', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Every campaign we launch is instrumented with server-side Conversion APIs (CAPI), custom offline conversion mapping, and real-time ROAS dashboards so you see exact customer acquisition costs.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              maxWidth: '880px',
              margin: '0 auto 40px',
            }}
          >
            <div style={{ background: '#FFFFFF', padding: '24px 20px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#EF4444', fontFamily: 'var(--font-heading)' }}>5.8x</div>
              <div style={{ color: '#64748B', fontSize: '0.88rem', marginTop: '6px', fontWeight: 600 }}>Peak Campaign ROAS</div>
            </div>
            <div style={{ background: '#FFFFFF', padding: '24px 20px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>-46%</div>
              <div style={{ color: '#64748B', fontSize: '0.88rem', marginTop: '6px', fontWeight: 600 }}>Avg Cost Per Acquisition</div>
            </div>
            <div style={{ background: '#FFFFFF', padding: '24px 20px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#EF4444', fontFamily: 'var(--font-heading)' }}>19+</div>
              <div style={{ color: '#64748B', fontSize: '0.88rem', marginTop: '6px', fontWeight: 600 }}>Live Brand Portfolios</div>
            </div>
            <div style={{ background: '#FFFFFF', padding: '24px 20px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>100%</div>
              <div style={{ color: '#64748B', fontSize: '0.88rem', marginTop: '6px', fontWeight: 600 }}>Verified Data</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal (Clean border, NO SHADOW) */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '88vh',
              background: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid rgba(226, 232, 240, 1)',
              boxShadow: 'none',
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: '#0F172A',
                color: '#FFFFFF',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
              }}
            >
              <X size={20} />
            </button>
            <img
              src={selectedImage}
              alt="Project Fullscreen Preview"
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
          </div>
        </div>
      )}

      {/* Bottom CTA - Clean White */}
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
            Want Similar Scalable Results For Your Business?
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 30px' }}>
            Let our senior media buyers build a custom growth roadmap specifically tailored to your brand's unit economics.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="btn-primary"
            style={{ padding: '14px 32px', fontSize: '1rem' }}
          >
            <span>Book 1-on-1 Strategy Session</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};
