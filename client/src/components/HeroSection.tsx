import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.hero-animate-title',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
        );
        gsap.fromTo(
          '.hero-animate-text',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
        );
        gsap.fromTo(
          '.hero-animate-list',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.35, ease: 'power3.out', stagger: 0.1 }
        );
        gsap.fromTo(
          '.hero-animate-buttons',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7, delay: 0.5, ease: 'power3.out' }
        );
        gsap.fromTo(
          '.hero-image-col',
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
        );
      }, heroRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '115px',
        paddingBottom: '50px',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 10%, #FFFFFF 0%, #FAFAFB 60%, #F1F5F9 100%)',
      }}
    >
      {/* Ambient Orbs */}
      <div
        className="ambient-orb"
        style={{ width: '500px', height: '500px', top: '5%', left: '-5%', background: 'rgba(239, 68, 68, 0.08)' }}
      />
      <div
        className="ambient-orb"
        style={{ width: '550px', height: '550px', bottom: '0%', right: '-5%', background: 'rgba(220, 38, 38, 0.06)' }}
      />

      <div className="app-container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="hero-grid">
          {/* Left Text Column */}
          <div className="hero-text-col">
            <h1
              className="hero-animate-title"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                color: '#0F172A',
                marginBottom: '20px',
              }}
            >
              WE GROW YOUR BUSINESS WITH{' '}
              <span className="gradient-text">PROFITABLE DIGITAL MARKETING.</span>
            </h1>

            <p
              className="hero-animate-text"
              style={{
                fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                color: '#475569',
                lineHeight: 1.65,
                maxWidth: '560px',
                marginBottom: '26px',
              }}
            >
              No robots, no empty vanity metrics. Our dedicated team of senior media buyers, SEO strategists, and direct-response writers manage your <strong>Google Ads, Meta Campaigns, and Organic Search</strong> with complete transparency.
            </p>

            <div className="hero-animate-list" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '30px' }}>
              {[
                'Direct WhatsApp & Slack access to your senior media buyer',
                'You own 100% of your ad accounts, pixels, and campaign creative',
                'Weekly video breakdowns with real bottom-line revenue tracking',
              ].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#1E293B', fontWeight: 600 }}>
                  <CheckCircle2 size={15} color="#DC2626" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="hero-animate-buttons" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '34px' }}>
              <button onClick={onOpenContact} className="btn-primary" style={{ padding: '14px 28px', fontSize: '0.98rem' }}>
                <span>Book 30-Min Growth Consultation</span>
                <ArrowRight size={17} />
              </button>
              <a href="#/services" className="btn-secondary" style={{ padding: '13px 24px', fontSize: '0.95rem' }}>
                <span>Explore All Services</span>
              </a>
            </div>

            {/* Micro Metrics Strip */}
            <div className="hero-metrics-grid">
              <div>
                <div className="hero-metric-value" style={{ color: '#EF4444' }}>$20M+</div>
                <div className="hero-metric-label">Managed Ad Spend</div>
              </div>
              <div>
                <div className="hero-metric-value" style={{ color: '#DC2626' }}>4.8x</div>
                <div className="hero-metric-label">Average Client ROAS</div>
              </div>
              <div>
                <div className="hero-metric-value" style={{ color: '#B91C1C' }}>1,200+</div>
                <div className="hero-metric-label">Campaigns Scaled</div>
              </div>
              <div>
                <div className="hero-metric-value">100%</div>
                <div className="hero-metric-label">In-House Specialists</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Marketing Image (NO SHADOW) */}
          <div className="hero-image-col">
            <div className="hero-image-wrapper">
              <img
                src="/hero-team.jpg"
                alt="Ignite Growth Advertising campaign strategy team in action"
                decoding="async"
                className="hero-main-image"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 40px;
        }
        .hero-image-col {
          position: relative;
        }
        .hero-image-wrapper {
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(226, 232, 240, 1);
          background: #FAFAFB;
        }
        .hero-main-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          /* No shadow on image */
          box-shadow: none !important;
        }
        .hero-metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid rgba(226, 232, 240, 1);
        }
        .hero-metric-value {
          font-size: clamp(1.4rem, 2.2vw, 2rem);
          font-weight: 800;
          color: #0F172A;
          font-family: var(--font-heading);
        }
        .hero-metric-label {
          font-size: 0.72rem;
          color: #64748B;
          margin-top: 2px;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .hero-image-col {
            order: -1;
            max-width: 550px;
            margin: 0 auto;
          }
          .hero-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }

        @media (max-width: 600px) {
          .hero-grid { gap: 20px; }
          .hero-image-col { max-width: 100%; }
          .hero-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
};
