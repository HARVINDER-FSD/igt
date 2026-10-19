import React, { useEffect, useRef } from 'react';
import { HeroSection } from '../components/HeroSection';
import { TestimonialsMarquee } from '../components/TestimonialsMarquee';
import { ServicesHub } from '../components/ServicesHub';
import { GrowthProcess } from '../components/GrowthProcess';
import { CaseStudies } from '../components/CaseStudies';
import { ContactSection } from '../components/ContactSection';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

interface HomePageProps {
  onNavigate: (page: string, service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.home-banner-animate',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* 1. Hero Section (Clean white, NO SHADOW, GSAP) */}
      <HeroSection onOpenContact={() => onNavigate('contact')} />

      {/* 2. Real Work Floating Marquee & Partner Accreditations (19 Images, NO SHADOW) */}
      <TestimonialsMarquee />

      {/* 3. Services Hub Overview */}
      <ServicesHub onSelectService={(svc) => onNavigate('contact', svc)} />

      {/* 4. Mid-Page Background Banner - BRIGHT WHITE VISIBLE (NO DARK SHADOW/OVERLAY) */}
      <section
        style={{
          position: 'relative',
          padding: '100px 0',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.92)), url(/services-marketing.jpg)',
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
            className="home-banner-animate"
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
            Data-Driven Performance
          </span>

          <h2
            className="home-banner-animate"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0F172A', marginBottom: '20px', lineHeight: 1.2 }}
          >
            We Don't Just Run Ads. <br />
            <span style={{ color: '#EF4444' }}>We Engineer Profitable Customer Acquisition.</span>
          </h2>

          <p
            className="home-banner-animate"
            style={{ maxWidth: '720px', margin: '0 auto 40px', color: '#475569', fontSize: '1.08rem', lineHeight: 1.65 }}
          >
            Every campaign at Ignite Growth Advertising is built from scratch with custom direct-response creatives, high-converting funnel design, and rigorous conversion tracking.
          </p>

          <div
            className="home-banner-animate"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              maxWidth: '920px',
              margin: '0 auto 40px',
            }}
          >
            <div style={{ background: '#FFFFFF', padding: '24px 20px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#EF4444', fontFamily: 'var(--font-heading)' }}>$20M+</div>
              <div style={{ color: '#64748B', fontSize: '0.88rem', marginTop: '4px', fontWeight: 600 }}>Client Ad Spend Managed</div>
            </div>
            <div style={{ background: '#FFFFFF', padding: '24px 20px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>4.6x</div>
              <div style={{ color: '#64748B', fontSize: '0.88rem', marginTop: '4px', fontWeight: 600 }}>Average Client ROAS</div>
            </div>
            <div style={{ background: '#FFFFFF', padding: '24px 20px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#EF4444', fontFamily: 'var(--font-heading)' }}>120+</div>
              <div style={{ color: '#64748B', fontSize: '0.88rem', marginTop: '4px', fontWeight: 600 }}>Brands & Campaigns Scaled</div>
            </div>
            <div style={{ background: '#FFFFFF', padding: '24px 20px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>100%</div>
              <div style={{ color: '#64748B', fontSize: '0.88rem', marginTop: '4px', fontWeight: 600 }}>Account Ownership</div>
            </div>
          </div>

          <div className="home-banner-animate" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('services')}
              className="btn-primary"
              style={{ padding: '14px 28px', fontSize: '0.95rem' }}
            >
              <span>Explore Detailed Services</span>
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
              View Client Work Portfolio (19)
            </button>
          </div>
        </div>
      </section>

      {/* 5. 4-Step Collaborative Growth Process */}
      <GrowthProcess />

      {/* 6. Real-World Case Studies */}
      <CaseStudies />

      {/* 7. Direct Contact Form */}
      <ContactSection />
    </div>
  );
};
