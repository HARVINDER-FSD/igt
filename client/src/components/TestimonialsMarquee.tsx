import React, { useState } from 'react';
import { ShieldCheck, UserCheck, Key, Eye, X } from 'lucide-react';

export const TestimonialsMarquee: React.FC = () => {
  const [selectedPreview, setSelectedPreview] = useState<string | null>(null);

  const pillars = [
    {
      title: 'Dedicated Senior Media Buyer',
      desc: 'You work directly with the expert managing your budget—never a junior intern or third-party outsourcing.',
      icon: <UserCheck size={22} color="#EF4444" />,
    },
    {
      title: '100% Account Ownership',
      desc: 'You retain full master ownership of your Meta, Google, and analytics accounts. We never hold your data hostage.',
      icon: <Key size={22} color="#DC2626" />,
    },
    {
      title: 'Zero Hidden Markups',
      desc: 'Your ad spend is billed directly by Google and Meta. We charge a flat, transparent retainer with no hidden percentages.',
      icon: <ShieldCheck size={22} color="#B91C1C" />,
    },
    {
      title: 'Weekly Video Performance Reports',
      desc: 'Every week you receive a personalized video walkthrough explaining exactly what we tested, what scaled, and next steps.',
      icon: <Eye size={22} color="#991B1B" />,
    },
  ];

  const partners = [
    'GOOGLE PREMIER PARTNER',
    'META BUSINESS PARTNER',
    'SHOPIFY CERTIFIED EXPERTS',
    'KLAVIYO EMAIL PARTNERS',
    'TIKTOK FOR BUSINESS',
    'HUBSPOT CERTIFIED',
  ];

  // User's real work PNG images from public folder
  const row1Images = [
    { src: '/1.png', label: 'Client Campaign #1' },
    { src: '/2.png', label: 'Client Campaign #2' },
    { src: '/3.png', label: 'Client Campaign #3' },
    { src: '/4.png', label: 'Client Campaign #4' },
    { src: '/5.png', label: 'Client Campaign #5' },
    { src: '/6.png', label: 'Client Campaign #6' },
    { src: '/7.png', label: 'Client Campaign #7' },
    { src: '/8.png', label: 'Client Campaign #8' },
    { src: '/9.png', label: 'Client Campaign #9' },
    { src: '/10.png', label: 'Client Campaign #10' },
  ];

  const row2Images = [
    { src: '/11.png', label: 'Client Campaign #11' },
    { src: '/12.png', label: 'Client Campaign #12' },
    { src: '/13.png', label: 'Client Campaign #13' },
    { src: '/14.png', label: 'Client Campaign #14' },
    { src: '/16.png', label: 'Client Campaign #16' },
    { src: '/17.png', label: 'Client Campaign #17' },
    { src: '/18.png', label: 'Client Campaign #18' },
    { src: '/20.png', label: 'Client Campaign #20' },
    { src: '/21.png', label: 'Client Campaign #21' },
    { src: '/1.png', label: 'Client Campaign #1' },
  ];

  return (
    <section className="section-wrapper" style={{ background: '#FFFFFF', position: 'relative', overflow: 'hidden', padding: '70px 0 60px' }}>
      <div className="app-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Partner Badges */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#64748B', fontWeight: 700, marginBottom: '18px' }}>
            Official Marketing Platform Accreditations
          </div>
          <div className="partners-flex">
            {partners.map((partner, idx) => (
              <div key={idx} className="partner-badge">
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', flexShrink: 0 }} />
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Section Header for Real Work / Campaigns */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 36px' }}>
          <h2 className="section-heading">
            Proven Work & Brands We Scaled
          </h2>
          <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.6 }}>
            Direct snapshots and campaign creatives from brands and businesses we've helped grow. Hover to inspect, click to expand.
          </p>
        </div>
      </div>

      {/* Floating Carousel Rows - Full Width */}
      <div className="floating-marquee-container">
        {/* High performance edge fade overlays (zero CPU cost, pure GPU) */}
        <div className="marquee-edge-fade-left" />
        <div className="marquee-edge-fade-right" />

        {/* Row 1 - Marquee Left */}
        <div className="marquee-track marquee-left">
          {[...row1Images, ...row1Images].map((item, idx) => (
            <div
              key={`r1-${idx}`}
              className="work-card"
              onClick={() => setSelectedPreview(item.src)}
              title="Click to view full image"
            >
              <div className="work-image-wrapper">
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  decoding="async"
                  className="work-img"
                />
                <div className="work-card-overlay">
                  <span>View</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Marquee Right */}
        <div className="marquee-track marquee-right" style={{ marginTop: '16px' }}>
          {[...row2Images, ...row2Images].map((item, idx) => (
            <div
              key={`r2-${idx}`}
              className="work-card"
              onClick={() => setSelectedPreview(item.src)}
              title="Click to view full image"
            >
              <div className="work-image-wrapper">
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  decoding="async"
                  className="work-img"
                />
                <div className="work-card-overlay">
                  <span>View</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="app-container" style={{ position: 'relative', zIndex: 1, marginTop: '60px' }}>
        {/* Human Commitments Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px' }}>
          <h2 className="section-heading">
            Built On Complete <span className="gradient-text">Transparency & Integrity</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.6 }}>
            Too many agencies hide behind vanity metrics and complex contracts. Here is exactly how our team operates with every business partner.
          </p>
        </div>

        {/* 4 Trust Pillars */}
        <div className="trust-pillars-grid">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '28px 22px',
                background: '#FFFFFF',
                border: '1px solid rgba(226, 232, 240, 1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(239, 68, 68, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                }}
              >
                {p.icon}
              </div>
              <h3 style={{ fontSize: '1.08rem', color: '#0F172A', fontWeight: 700 }}>{p.title}</h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for enlarged work preview */}
      {selectedPreview && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedPreview(null)}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setSelectedPreview(null)}
              aria-label="Close Preview"
            >
              <X size={20} />
            </button>
            <img
              src={selectedPreview}
              alt="Work Preview Fullscreen"
              className="lightbox-img"
            />
          </div>
        </div>
      )}

      <style>{`
        .section-heading {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          line-height: 1.2;
          margin-bottom: 16px;
          color: #0F172A;
        }
        .partners-flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }
        .partner-badge {
          padding: 8px 16px;
          border-radius: 10px;
          background: #F8FAFC;
          border: 1px solid rgba(226, 232, 240, 1);
          font-size: 0.72rem;
          font-weight: 700;
          color: #1E293B;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }

        /* Floating Marquee Showcase - Pure GPU Composited */
        .floating-marquee-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 10px 0;
        }
        .marquee-edge-fade-left {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 100px;
          background: linear-gradient(to right, #FFFFFF 15%, rgba(255, 255, 255, 0) 100%);
          z-index: 2;
          pointer-events: none;
        }
        .marquee-edge-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: 100px;
          background: linear-gradient(to left, #FFFFFF 15%, rgba(255, 255, 255, 0) 100%);
          z-index: 2;
          pointer-events: none;
        }
        .marquee-track {
          display: flex;
          gap: 20px;
          width: max-content;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        .marquee-left {
          animation: marqueeScrollLeft 45s linear infinite;
        }
        .marquee-right {
          animation: marqueeScrollRight 45s linear infinite;
        }
        .floating-marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marqueeScrollLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes marqueeScrollRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        .work-card {
          width: 220px;
          height: 140px;
          flex-shrink: 0;
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px solid rgba(226, 232, 240, 1);
          box-shadow: none;
          cursor: pointer;
          overflow: hidden;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          contain: paint;
          transition: transform 0.25s ease, border-color 0.25s ease;
          position: relative;
        }
        .work-card:hover {
          transform: translate3d(0, -4px, 0) scale(1.02);
          border-color: #EF4444;
          box-shadow: none;
        }
        .work-image-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          background: #FAFAFB;
        }
        .work-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .work-card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.75);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #FFFFFF;
          font-size: 0.8rem;
          font-weight: 600;
          transition: opacity 0.2s ease;
        }
        .work-card:hover .work-card-overlay {
          opacity: 1;
        }

        /* Lightbox Modal */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.2s ease;
        }
        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 85vh;
          background: #FFFFFF;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }
        .lightbox-img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 8px;
        }
        .lightbox-close-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(15, 23, 42, 0.75);
          color: #FFFFFF;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          z-index: 10;
        }
        .lightbox-close-btn:hover {
          background: #EF4444;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .trust-pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        @media (max-width: 1024px) {
          .trust-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .work-card {
            width: 190px;
            height: 120px;
          }
        }
        @media (max-width: 768px) {
          .trust-pillars-grid {
            grid-template-columns: 1fr;
          }
          .partner-badge {
            padding: 6px 12px;
            font-size: 0.65rem;
          }
          .work-card {
            width: 160px;
            height: 105px;
          }
        }
      `}</style>
    </section>
  );
};
