import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Send,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  Loader2,
  Calendar,
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  initialWebsite?: string;
  initialBudget?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
  initialWebsite = '',
  initialBudget = '$5,000 - $15,000/mo',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: initialWebsite,
    service: initialService || 'Google & YouTube Search Ads',
    budget: initialBudget || '$5,000 - $15,000/mo',
    timeline: 'Immediate (Within 14 Days)',
    message: '',
    auditRequested: true,
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    text: string;
    previewUrl?: string;
  } | null>(null);

  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  React.useEffect(() => {
    if (initialWebsite) {
      setFormData((prev) => ({ ...prev, website: initialWebsite }));
    }
  }, [initialWebsite]);

  React.useEffect(() => {
    if (initialBudget) {
      setFormData((prev) => ({ ...prev, budget: initialBudget }));
    }
  }, [initialBudget]);

  const serviceOptions = [
    'Google & YouTube Search Ads',
    'Meta (Facebook & Instagram) Ads',
    'Search Engine Optimization (SEO)',
    'High-Converting Landing Pages & Web Design',
    'Email & SMS Marketing (Klaviyo)',
    'Social Media Content & Video Ads',
    'Influencer & Creator Partnerships',
    'Full Omnichannel Growth Package',
  ];


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        confetti({
          particleCount: 140,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#EF4444', '#DC2626', '#FFFFFF', '#B91C1C', '#F43F5E'],
        });

        setStatusMessage({
          type: 'success',
          text: data.message || 'Your inquiry was sent successfully via Nodemailer! Our team will reach out shortly.',
          previewUrl: data.previewUrl,
        });

        setFormData((prev) => ({
          ...prev,
          name: '',
          email: '',
          phone: '',
          message: '',
        }));
      } else {
        throw new Error(data.error || 'Failed to submit form');
      }
    } catch (err: any) {
      console.error('Contact Form Error:', err);
      setStatusMessage({
        type: 'error',
        text:
          err.message.includes('Failed to fetch')
            ? 'Backend API server is initializing on port 5000. Please ensure `node server/server.js` is running!'
            : err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-wrapper" style={{ background: '#FFFFFF', position: 'relative' }}>
      <div className="app-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            <Calendar size={14} /> Start A Conversation
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', lineHeight: 1.2, marginBottom: '16px', color: '#0F172A' }}>
            Let's Talk About Your <span className="gradient-text">Revenue Goals</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Share a few details below. Our senior media buyers review your current channels and prepare actionable recommendations for our initial consultation call.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '40px',
            maxWidth: '1150px',
            margin: '0 auto',
          }}
        >
          {/* Left Side: Agency Info & Commitments */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div
                style={{
                  background: '#FFF1F2',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  borderRadius: '16px',
                  padding: '30px',
                  marginBottom: '28px',
                }}
              >
                <h3 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={22} color="#DC2626" /> What To Expect On Our Call:
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: '#334155', fontSize: '0.92rem' }}>
                  <li style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ color: '#DC2626', fontWeight: 800 }}>✓</div>
                    <span><strong>Honest Account Teardown:</strong> We will review your current ad accounts or website live on screen.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ color: '#DC2626', fontWeight: 800 }}>✓</div>
                    <span><strong>No High-Pressure Sales:</strong> You speak directly with a senior marketer, not a commissioned salesperson.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ color: '#DC2626', fontWeight: 800 }}>✓</div>
                    <span><strong>Clear 90-Day Action Plan:</strong> We tell you exactly what channels will generate the highest ROI for your budget.</span>
                  </li>
                </ul>
              </div>

              {/* Direct Contacts */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', padding: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(239, 68, 68, 0.1)',
                      color: '#DC2626',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>Direct Email:</div>
                    <a href="mailto:ignitegrowthadvertising@gmail.com" style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 700 }}>
                      ignitegrowthadvertising@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(239, 68, 68, 0.1)',
                      color: '#DC2626',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>Phone / WhatsApp:</div>
                    <a href="tel:+917489778541" style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 700 }}>
                      +91 7489778541
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(239, 68, 68, 0.1)',
                      color: '#DC2626',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>Response Time:</div>
                    <div style={{ color: '#0F172A', fontWeight: 700 }}>Within 2 Hours on business days</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email dispatch note */}
            <div
              style={{
                marginTop: '24px',
                padding: '16px 20px',
                borderRadius: '12px',
                background: '#F8FAFC',
                border: '1px solid rgba(226, 232, 240, 1)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '0.8rem',
                color: '#475569',
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444' }} />
              <span>
                Backend powered by <strong>Express + Nodemailer</strong> with real-time email dispatch and instant notification.
              </span>
            </div>
          </div>

          {/* Right Side: Nodemailer Interactive Lead Form */}
          <div
            className="glass-panel"
            style={{
              padding: '36px',
              background: '#FFFFFF',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.05)',
            }}
          >
            {statusMessage && statusMessage.type === 'success' ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: '#FFF1F2',
                    border: '2px solid #DC2626',
                    color: '#DC2626',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  <CheckCircle size={38} />
                </div>
                <h3 style={{ fontSize: '1.6rem', color: '#0F172A', marginBottom: '12px' }}>
                  Inquiry Sent Successfully!
                </h3>
                <p style={{ color: '#334155', lineHeight: 1.6, marginBottom: '20px' }}>
                  {statusMessage.text}
                </p>

                {statusMessage.previewUrl && (
                  <div
                    style={{
                      background: '#FFF1F2',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: '10px',
                      padding: '14px',
                      marginBottom: '24px',
                    }}
                  >
                    <div style={{ fontSize: '0.78rem', color: '#64748B', marginBottom: '6px', fontWeight: 600 }}>
                      ⚡ Nodemailer Ethereal Test Email Generated:
                    </div>
                    <a
                      href={statusMessage.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#DC2626',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        textDecoration: 'underline',
                      }}
                    >
                      <span>Click to View Sent Email Preview</span>
                      <ExternalLink size={15} />
                    </a>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setStatusMessage(null)}
                  className="btn-secondary"
                  style={{ marginTop: '10px' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '20px' }}>
                  Schedule Your Free Consultation
                </h3>

                {statusMessage && statusMessage.type === 'error' && (
                  <div
                    style={{
                      background: '#FFF1F2',
                      border: '1px solid rgba(239, 68, 68, 0.35)',
                      borderRadius: '10px',
                      padding: '12px 16px',
                      color: '#991B1B',
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '20px',
                    }}
                  >
                    <AlertCircle size={18} style={{ flexShrink: 0, color: '#DC2626' }} />
                    <span>{statusMessage.text}</span>
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                  {/* Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#0F172A', marginBottom: '6px', fontWeight: 700 }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: '#FFFFFF',
                        border: '1px solid #CBD5E1',
                        borderRadius: '10px',
                        color: '#0F172A',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#0F172A', marginBottom: '6px', fontWeight: 700 }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: '#FFFFFF',
                        border: '1px solid #CBD5E1',
                        borderRadius: '10px',
                        color: '#0F172A',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                  {/* Phone */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#0F172A', marginBottom: '6px', fontWeight: 700 }}>
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: '#FFFFFF',
                        border: '1px solid #CBD5E1',
                        borderRadius: '10px',
                        color: '#0F172A',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Website */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#0F172A', marginBottom: '6px', fontWeight: 700 }}>
                      Website URL
                    </label>
                    <input
                      type="text"
                      placeholder="Website URL"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: '#FFFFFF',
                        border: '1px solid #CBD5E1',
                        borderRadius: '10px',
                        color: '#0F172A',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#0F172A', marginBottom: '6px', fontWeight: 700 }}>
                    Select Primary Service Needed *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: '#FFFFFF',
                      border: '1px solid #CBD5E1',
                      borderRadius: '10px',
                      color: '#0F172A',
                      fontSize: '0.9rem',
                      outline: 'none',
                      fontWeight: 600,
                    }}
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} style={{ background: '#FFFFFF', color: '#0F172A' }}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>


                {/* Message */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#0F172A', marginBottom: '6px', fontWeight: 700 }}>
                    Tell Us About Your Business & Current Growth Goals *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: '#FFFFFF',
                      border: '1px solid #CBD5E1',
                      borderRadius: '10px',
                      color: '#0F172A',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* Account Review Checkbox */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                  <input
                    type="checkbox"
                    id="auditCheck"
                    checked={formData.auditRequested}
                    onChange={(e) => setFormData({ ...formData, auditRequested: e.target.checked })}
                    style={{ width: '18px', height: '18px', accentColor: '#EF4444', cursor: 'pointer' }}
                  />
                  <label htmlFor="auditCheck" style={{ fontSize: '0.86rem', color: '#334155', cursor: 'pointer', fontWeight: 600 }}>
                    Yes, please review our current website / ad account prior to the call
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '16px',
                    fontSize: '1rem',
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? 'not-allowed' : 'pointer',
                  }}
                >
                  {loading ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Loader2 size={20} className="animate-spin" /> Sending via Nodemailer...
                    </span>
                  ) : (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Send size={18} /> Schedule Strategy Consultation
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
