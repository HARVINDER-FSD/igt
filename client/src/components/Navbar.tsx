import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrolled = false;
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== lastScrolled) {
        lastScrolled = scrolled;
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Our Work', page: 'work' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        padding: isScrolled ? '10px 0' : '16px 0',
        background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.94)',
        backdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid rgba(226, 232, 240, 1)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.05)' : 'none',
      }}
    >
      <div className="app-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo - Increased size with transparent background */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
        >
          <img
            src="/companylogo.png"
            alt="Ignite Growth Advertising"
            style={{
              height: '52px',
              width: 'auto',
              maxHeight: '56px',
              objectFit: 'contain',
              display: 'block',
              transition: 'transform 0.2s ease',
            }}
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '1.28rem', fontWeight: 800, letterSpacing: '-0.5px', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                IGNITE GROWTH<span style={{ color: '#EF4444' }}>.</span>
              </span>
            </div>
            <div style={{ fontSize: '0.66rem', color: '#64748B', letterSpacing: '0.8px', textTransform: 'uppercase', fontWeight: 700 }}>
              Advertising & Performance Marketing
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '28px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link.page)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: isActive ? '#DC2626' : '#334155',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 700 : 600,
                  transition: 'all 0.2s ease',
                  padding: '6px 4px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#EF4444')}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#DC2626' : '#334155')}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '0',
                      right: '0',
                      height: '2px',
                      background: '#EF4444',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a
            href="tel:+917489778541"
            className="call-header-link"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.86rem',
              fontWeight: 700,
              color: '#0F172A',
              textDecoration: 'none',
            }}
          >
            <Phone size={15} color="#EF4444" />
            <span>+91 7489778541</span>
          </a>

          <button
            onClick={() => onOpenContact()}
            className="btn-primary"
            style={{
              padding: '11px 22px',
              fontSize: '0.88rem',
            }}
          >
            <span>Book Strategy Call</span>
            <ArrowRight size={15} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'inline-flex',
              background: '#FFFFFF',
              border: '1px solid rgba(226, 232, 240, 1)',
              borderRadius: '10px',
              color: '#0F172A',
              padding: '8px',
              cursor: 'pointer',
            }}
            className="mobile-toggle-btn"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#FFFFFF',
            borderBottom: '1px solid rgba(226, 232, 240, 1)',
            padding: '20px 24px 28px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link.page)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  color: isActive ? '#DC2626' : '#1E293B',
                  fontWeight: isActive ? 800 : 600,
                  fontSize: '1.05rem',
                  padding: '8px 0',
                  borderBottom: '1px solid #F1F5F9',
                }}
              >
                {link.label}
              </button>
            );
          })}

          <div style={{ paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a
              href="tel:+917489778541"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#0F172A',
                fontWeight: 700,
                fontSize: '0.92rem',
                textDecoration: 'none',
              }}
            >
              <Phone size={16} color="#EF4444" />
              <span>Call / WhatsApp: +91 7489778541</span>
            </a>
            <button
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="btn-primary"
              style={{ width: '100%', padding: '12px', justifyContent: 'center' }}
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
          .call-header-link {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
};
