import React, { useEffect, useRef } from 'react';
import { ContactSection } from '../components/ContactSection';
import { FaqSection } from '../components/FaqSection';
import gsap from 'gsap';

interface ContactPageProps {
  initialService?: string;
  initialWebsite?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService, initialWebsite }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.contact-hero-animate',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef} style={{ paddingTop: '80px', minHeight: '100vh', background: '#FAFAFB' }}>
      {/* 1. Page Hero with Visible White/Light Background (contact-office.jpg) */}
      <section
        style={{
          position: 'relative',
          padding: '110px 0 75px',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.94)), url(/contact-office.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#0F172A',
          textAlign: 'center',
          borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        }}
      >
        <div className="app-container" style={{ position: 'relative', zIndex: 1, maxWidth: '850px', margin: '0 auto' }}>
          <div
            className="contact-hero-animate"
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
            Direct Senior Access
          </div>
          <h1
            className="contact-hero-animate"
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#0F172A',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            Start Your Growth Sprint With <br />
            <span style={{ color: '#EF4444' }}>Ignite Growth Advertising.</span>
          </h1>
          <p className="contact-hero-animate" style={{ color: '#475569', fontSize: '1.15rem', lineHeight: 1.7, margin: '0 auto', maxWidth: '680px' }}>
            Fill in the form below or reach out directly via Phone/WhatsApp. Our senior media strategist responds within 2 hours during business days.
          </p>
        </div>
      </section>

      {/* 2. Main Interactive Contact Section with Nodemailer Form */}
      <ContactSection
        initialService={initialService}
        initialWebsite={initialWebsite}
      />

      {/* 3. Unique Mid-Page Immersive Trust Banner (about-agency.jpg) - BRIGHT WHITE VISIBLE */}
      <section
        style={{
          position: 'relative',
          padding: '90px 0',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.94)), url(/about-agency.jpg)',
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
            Zero Risk Commitment
          </span>

          <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#0F172A', marginBottom: '18px', lineHeight: 1.25 }}>
            No Long-Term Lock-Ins. <br />
            <span style={{ color: '#EF4444' }}>We Earn Your Partnership Every 30 Days.</span>
          </h2>

          <p style={{ maxWidth: '700px', margin: '0 auto 32px', color: '#475569', fontSize: '1.02rem', lineHeight: 1.65 }}>
            We don't trap clients into 6-month or 12-month agency retainers. We work on high-performing monthly sprints where our performance speaks for itself.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              maxWidth: '850px',
              margin: '0 auto',
            }}
          >
            <div style={{ background: '#FFFFFF', padding: '22px 18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>Phone / WhatsApp</div>
              <a href="tel:+917489778541" style={{ color: '#EF4444', textDecoration: 'none', fontWeight: 700, fontSize: '1.05rem' }}>
                +91 7489778541
              </a>
            </div>
            <div style={{ background: '#FFFFFF', padding: '22px 18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>Official Email</div>
              <a href="mailto:ignitegrowthadvertising@gmail.com" style={{ color: '#EF4444', textDecoration: 'none', fontWeight: 700, fontSize: '0.92rem' }}>
                ignitegrowthadvertising@gmail.com
              </a>
            </div>
            <div style={{ background: '#FFFFFF', padding: '22px 18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>Working Hours</div>
              <div style={{ color: '#64748B', fontSize: '0.9rem', fontWeight: 600 }}>
                Mon - Sat (9am - 7pm)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <FaqSection />
    </div>
  );
};
