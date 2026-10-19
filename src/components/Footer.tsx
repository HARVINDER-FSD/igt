import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      scrollToTop();
    }
  };

  return (
    <footer
      style={{
        background: '#0F172A',
        borderTop: '3px solid #EF4444',
        padding: '75px 0 35px',
        position: 'relative',
        color: '#94A3B8',
        fontSize: '0.9rem',
      }}
    >
      <div className="app-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '50px',
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <img
                src="/companylogo.png"
                alt="Ignite Growth Advertising"
                style={{
                  height: '48px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
              <span style={{ fontSize: '1.28rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                IGNITE GROWTH<span style={{ color: '#EF4444' }}>.</span>
              </span>
            </div>
            <p style={{ lineHeight: 1.6, marginBottom: '20px', fontSize: '0.88rem', color: '#94A3B8' }}>
              Ignite Growth Advertising is a dedicated performance marketing agency scaling e-commerce brands, B2B companies, and local businesses with profitable Google Ads, Meta campaigns, and high-ranking SEO.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#EF4444', fontSize: '0.8rem', fontWeight: 600 }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444' }} />
              Direct Senior Media Buyers • Zero Junior Fluff
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '16px', letterSpacing: '0.5px' }}>
              Growth Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: 0, textAlign: 'left', fontSize: 'inherit' }}
                >
                  Google & YouTube Search Ads
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: 0, textAlign: 'left', fontSize: 'inherit' }}
                >
                  Meta (Facebook & Instagram) Advantage+
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: 0, textAlign: 'left', fontSize: 'inherit' }}
                >
                  Search Engine Optimization (SEO & AI GEO)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: 0, textAlign: 'left', fontSize: 'inherit' }}
                >
                  High-Converting Landing Pages & CRO
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: 0, textAlign: 'left', fontSize: 'inherit' }}
                >
                  Klaviyo Email & SMS Lifecycle Flows
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: 0, textAlign: 'left', fontSize: 'inherit' }}
                >
                  Creator Partnerships & UGC Video Ads
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Navigation Pages */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '16px', letterSpacing: '0.5px' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home')}
                  style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: 0, textAlign: 'left', fontSize: 'inherit' }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: 0, textAlign: 'left', fontSize: 'inherit' }}
                >
                  About Our Agency
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: 0, textAlign: 'left', fontSize: 'inherit' }}
                >
                  Services Breakdown
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('work')}
                  style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: 0, textAlign: 'left', fontSize: 'inherit' }}
                >
                  Our Work & Campaigns (19)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: 0, textAlign: 'left', fontSize: 'inherit' }}
                >
                  Contact & Strategy Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '16px', letterSpacing: '0.5px' }}>
              Direct Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.86rem' }}>
              <div>
                <strong style={{ color: '#CBD5E1' }}>Email:</strong>{' '}
                <a href="mailto:ignitegrowthadvertising@gmail.com" style={{ color: '#EF4444', textDecoration: 'none' }}>
                  ignitegrowthadvertising@gmail.com
                </a>
              </div>
              <div>
                <strong style={{ color: '#CBD5E1' }}>Mobile / WhatsApp:</strong>{' '}
                <a href="tel:+917489778541" style={{ color: '#EF4444', textDecoration: 'none' }}>
                  +91 7489778541
                </a>
              </div>
              <div>
                <strong style={{ color: '#CBD5E1' }}>Availability:</strong> Mon - Sat (9:00 AM - 7:00 PM)
              </div>
              <div style={{ marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="btn-primary"
                  style={{ padding: '9px 20px', fontSize: '0.84rem' }}
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.8rem',
            color: '#64748B',
          }}
        >
          <div>
            © {new Date().getFullYear()} Ignite Growth Advertising. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#CBD5E1',
                padding: '6px 14px',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.78rem',
              }}
            >
              Back to top <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
