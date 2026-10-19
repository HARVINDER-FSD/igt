import React, { useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, UserCheck, Key, Eye, CheckCircle2, TrendingUp } from 'lucide-react';
import gsap from 'gsap';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.about-fade-in',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
        gsap.fromTo(
          '.about-card',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7, delay: 0.3, stagger: 0.12, ease: 'power3.out' }
        );
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef} style={{ paddingTop: '80px', minHeight: '100vh', background: '#FAFAFB' }}>
      {/* 1. Page Hero with Visible White/Light Background (about-agency.jpg) */}
      <section
        style={{
          position: 'relative',
          padding: '110px 0 90px',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.94)), url(/about-agency.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#0F172A',
          textAlign: 'center',
          borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        }}
      >
        <div className="app-container" style={{ position: 'relative', zIndex: 1, maxWidth: '850px', margin: '0 auto' }}>
          <div
            className="about-fade-in"
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
            About Ignite Growth Advertising
          </div>
          <h1
            className="about-fade-in"
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#0F172A',
              marginBottom: '22px',
              letterSpacing: '-0.02em',
            }}
          >
            We Are The Growth Engine Behind <br />
            <span style={{ color: '#EF4444' }}>High-Performing Brands.</span>
          </h1>
          <p className="about-fade-in" style={{ color: '#475569', fontSize: '1.15rem', lineHeight: 1.7, margin: '0 auto 30px', maxWidth: '720px' }}>
            Born out of frustration with traditional agencies that promise the moon and deliver vanity impressions, Ignite Growth Advertising was built on one single premise: <strong>Profit-Driven Performance</strong>.
          </p>
          <div className="about-fade-in" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary"
              style={{ padding: '14px 30px', fontSize: '0.95rem' }}
            >
              <span>Work With Us</span>
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
              See Client Work (19)
            </button>
          </div>
        </div>
      </section>

      {/* 2. Agency Mission & Strategy Pod (NO SHADOWS ON IMAGES) */}
      <section className="section-wrapper" style={{ background: '#FFFFFF' }}>
        <div className="app-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '50px',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ fontSize: '0.8rem', color: '#EF4444', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
                Our Mission & Manifesto
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.25, marginBottom: '20px' }}>
                No Fluff. No Hidden Fees. <br />
                <span className="gradient-text">Just Proven Return On Ad Spend.</span>
              </h2>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '16px' }}>
                Most marketing agencies operate on a bloated model: junior account managers who have never managed a real marketing budget, automated bot reports, and endless meetings discussing vanity metrics like "impressions" and "reach."
              </p>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px' }}>
                At <strong>Ignite Growth Advertising</strong>, we operate differently. You work directly with battle-tested media buyers who live and breathe direct response advertising, customer acquisition cost reduction, and scalable ecommerce economics.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#1E293B', fontWeight: 600 }}>
                  <CheckCircle2 size={20} color="#EF4444" />
                  <span>Senior media buyers with $20M+ cumulative ad spend track record</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#1E293B', fontWeight: 600 }}>
                  <CheckCircle2 size={20} color="#EF4444" />
                  <span>100% full master account ownership — zero agency hostages</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#1E293B', fontWeight: 600 }}>
                  <CheckCircle2 size={20} color="#EF4444" />
                  <span>Custom weekly video breakdowns showing ad spend vs. cold hard profit</span>
                </div>
              </div>
            </div>

            {/* Clean Image - NO SHADOW */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(226, 232, 240, 1)',
                  background: '#F8FAFC',
                }}
              >
                <img
                  src="/hero-team.jpg"
                  alt="Ignite Growth Advertising Team"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>

              {/* Floating Stat Card with clean border (NO HEAVY SHADOW) */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '20px',
                  background: '#FFFFFF',
                  padding: '16px 22px',
                  borderRadius: '12px',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(239, 68, 68, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#EF4444',
                  }}
                >
                  <TrendingUp size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A' }}>$20M+</div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B', fontWeight: 600 }}>Profitable Ad Spend Managed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Unique Mid-Page Immersive Background Section (contact-office.jpg) - BRIGHT WHITE VISIBLE */}
      <section
        style={{
          position: 'relative',
          padding: '95px 0',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.94)), url(/contact-office.jpg)',
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
            Direct Senior Collaboration
          </span>

          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, color: '#0F172A', marginBottom: '18px', lineHeight: 1.25 }}>
            Enterprise-Caliber Growth Execution, <br />
            <span style={{ color: '#EF4444' }}>Without The Corporate Red Tape.</span>
          </h2>

          <p style={{ maxWidth: '720px', margin: '0 auto 36px', color: '#475569', fontSize: '1.05rem', lineHeight: 1.65 }}>
            When you partner with Ignite Growth Advertising, you get a dedicated media buyer, creative strategist, and conversion rate optimization architect dedicated to scaling your company's revenue.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '20px',
              maxWidth: '920px',
              margin: '0 auto 40px',
            }}
          >
            <div style={{ background: '#FFFFFF', padding: '24px 20px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#EF4444', fontFamily: 'var(--font-heading)' }}>96%</div>
              <div style={{ color: '#64748B', fontSize: '0.88rem', marginTop: '6px', fontWeight: 600 }}>Client Retention Rate</div>
            </div>
            <div style={{ background: '#FFFFFF', padding: '24px 20px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>2 Hours</div>
              <div style={{ color: '#64748B', fontSize: '0.88rem', marginTop: '6px', fontWeight: 600 }}>Avg Response SLA</div>
            </div>
            <div style={{ background: '#FFFFFF', padding: '24px 20px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#EF4444', fontFamily: 'var(--font-heading)' }}>Zero</div>
              <div style={{ color: '#64748B', fontSize: '0.88rem', marginTop: '6px', fontWeight: 600 }}>Lock-in Contracts</div>
            </div>
            <div style={{ background: '#FFFFFF', padding: '24px 20px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>100%</div>
              <div style={{ color: '#64748B', fontSize: '0.88rem', marginTop: '6px', fontWeight: 600 }}>Direct Communication</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The 4 Human Transparency Commitments (NO SHADOWS) */}
      <section className="section-wrapper" style={{ background: '#FAFAFB' }}>
        <div className="app-container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 46px' }}>
            <div style={{ fontSize: '0.8rem', color: '#EF4444', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Why Brands Choose Us
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.25, marginBottom: '16px' }}>
              The 4 Pillars of <span className="gradient-text">Ignite Growth Advertising</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.6 }}>
              We believe great client partnerships are built on radical clarity, real accountability, and zero fluff.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            <div className="about-card" style={{ padding: '32px 24px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FFF1F2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <UserCheck size={24} color="#EF4444" />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Direct Senior Media Buyer Access
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>
                You speak directly to the media buyer actively managing your Meta and Google ad accounts. No intermediaries, no diluted messages.
              </p>
            </div>

            <div className="about-card" style={{ padding: '32px 24px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FFF1F2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Key size={24} color="#DC2626" />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                100% Client Account Ownership
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>
                All pixels, tracking events, historical data, and creative assets remain in your direct ownership permanently.
              </p>
            </div>

            <div className="about-card" style={{ padding: '32px 24px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FFF1F2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <ShieldCheck size={24} color="#B91C1C" />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Zero Hidden Ad Spend Surcharges
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Your ad spend is paid directly to Google and Meta. We charge a flat, transparent retainer with absolutely zero hidden percentages.
              </p>
            </div>

            <div className="about-card" style={{ padding: '32px 24px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FFF1F2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Eye size={24} color="#991B1B" />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Weekly Video Performance Breakdowns
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Every Monday you receive a comprehensive screen recording breaking down winning creatives, CAC trends, and weekly testing plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA - Clean & Visible */}
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
            Ready To Accelerate Your Brand's Revenue?
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 30px' }}>
            Book a 1-on-1 growth consultation directly with our senior media strategist. No pitch deck, just real actionable strategy.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="btn-primary"
            style={{ padding: '14px 32px', fontSize: '1rem' }}
          >
            <span>Schedule Growth Consultation</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};
