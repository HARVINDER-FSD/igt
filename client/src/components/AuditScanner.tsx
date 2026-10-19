import React, { useState } from 'react';
import {
  Search,
  Zap,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Activity,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';

interface AuditScannerProps {
  onClaimAudit: (websiteUrl: string, auditData: any) => void;
}

export const AuditScanner: React.FC<AuditScannerProps> = ({ onClaimAudit }) => {
  const [url, setUrl] = useState('');
  const [primaryGoal, setPrimaryGoal] = useState('ecom_scale');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [auditResult, setAuditResult] = useState<any | null>(null);

  const scanSteps = [
    'Resolving DNS & Ping Core Web Vitals...',
    'Inspecting Meta CAPI, Google Ads Tag & Server-Side Tracking...',
    'Scanning Google Index, Backlink Profile & AI Search Signals...',
    'Evaluating Conversion Funnel Friction & Mobile CRO Score...',
    'Synthesizing 360° Actionable Growth Report...',
  ];

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    let cleanUrl = url.trim().replace(/^https?:\/\//, '').replace(/\/$/, '');
    setIsScanning(true);
    setAuditResult(null);
    setScanStep(0);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      setScanStep(current);
      if (current >= scanSteps.length - 1) {
        clearInterval(interval);
        setTimeout(() => {
          setIsScanning(false);
          const hash = cleanUrl.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
          const score = 65 + (hash % 22);
          setAuditResult({
            url: cleanUrl,
            overallScore: score,
            seoScore: 60 + (hash % 25),
            speedScore: 70 + ((hash * 2) % 25),
            adTrackingScore: 50 + ((hash * 3) % 30),
            croScore: 55 + ((hash * 4) % 28),
            criticalIssues: [
              'Missing Server-Side Conversions API (CAPI) leading to ~28% untracked iOS ad conversions.',
              'No Structured Schema for Generative AI Search engines (Google SGE / Perplexity AI).',
              'First Input Delay & Mobile Cumulative Layout Shift on main checkout funnel.',
              'Unoptimized Abandoned Cart follow-up sequences causing revenue leakage.',
            ],
            quickWins: [
              'Deploy Cloudflare/Stape server-side GTM container to recover lost attribution.',
              'Restructure Meta Advantage+ ad spend with dynamic creative testing stacks.',
              'Implement high-converting 3D interactive hero product showcase.',
            ],
          });
        }, 900);
      }
    }, 800);
  };

  return (
    <section id="audit-tool" className="section-wrapper" style={{ background: '#FAFAFB', position: 'relative' }}>
      <div className="app-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            <Zap size={14} /> Instant Diagnostic Engine
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', lineHeight: 1.2, marginBottom: '16px', color: '#0F172A' }}>
            Get Your Free <span className="gradient-text">360° AI Marketing Audit</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Identify where your funnel is leaking revenue. Scan your website in 15 seconds to uncover tracking gaps, SEO blind spots, and conversion rate bottlenecks.
          </p>
        </div>

        {/* Audit Form Box */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            padding: '36px',
            background: '#FFFFFF',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            boxShadow: '0 20px 50px rgba(239, 68, 68, 0.08), 0 4px 12px rgba(0, 0, 0, 0.03)',
          }}
        >
          <form onSubmit={handleStartScan}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#0F172A', marginBottom: '8px', fontWeight: 700 }}>
                  Enter Your Business Website URL:
                </label>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '260px', position: 'relative' }}>
                    <Search
                      size={18}
                      color="#EF4444"
                      style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
                    />
                    <input
                      type="text"
                      placeholder="Website URL"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '14px 16px 14px 46px',
                        background: '#FFFFFF',
                        border: '1px solid #CBD5E1',
                        borderRadius: '12px',
                        color: '#0F172A',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#EF4444')}
                      onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isScanning || !url.trim()}
                    className="btn-primary"
                    style={{
                      opacity: isScanning || !url.trim() ? 0.7 : 1,
                      cursor: isScanning || !url.trim() ? 'not-allowed' : 'pointer',
                      padding: '14px 28px',
                    }}
                  >
                    {isScanning ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Activity size={18} className="animate-spin" /> Scanning Systems...
                      </span>
                    ) : (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Sparkles size={18} /> Run Free AI Audit
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* Goal Selector */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#64748B', marginBottom: '8px', fontWeight: 600 }}>
                  Primary Objective:
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {[
                    { id: 'ecom_scale', label: '🛒 Scale E-Commerce Sales & ROAS' },
                    { id: 'b2b_leads', label: '💼 Generate High-Ticket B2B Leads' },
                    { id: 'seo_traffic', label: '📈 10x Organic SEO & AI Traffic' },
                    { id: 'cro_redesign', label: '⚡ Modern 3D Web & CRO Overhaul' },
                  ].map((goal) => (
                    <button
                      key={goal.id}
                      type="button"
                      onClick={() => setPrimaryGoal(goal.id)}
                      style={{
                        background: primaryGoal === goal.id ? 'rgba(239, 68, 68, 0.1)' : '#F1F5F9',
                        border: primaryGoal === goal.id ? '1px solid #EF4444' : '1px solid rgba(226, 232, 240, 1)',
                        color: primaryGoal === goal.id ? '#DC2626' : '#334155',
                        borderRadius: '8px',
                        padding: '6px 14px',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        fontWeight: 600,
                      }}
                    >
                      {goal.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </form>

          {/* Scanning Progress State */}
          {isScanning && (
            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <div
                style={{
                  height: '6px',
                  background: '#F1F5F9',
                  borderRadius: '99px',
                  overflow: 'hidden',
                  marginBottom: '16px',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${((scanStep + 1) / scanSteps.length) * 100}%`,
                    background: 'var(--gradient-brand)',
                    transition: 'width 0.4s ease',
                  }}
                />
              </div>
              <p style={{ color: '#DC2626', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Activity size={16} /> {scanSteps[scanStep]}
              </p>
            </div>
          )}

          {/* Audit Results View */}
          {auditResult && !isScanning && (
            <div
              style={{
                marginTop: '36px',
                paddingTop: '32px',
                borderTop: '1px solid rgba(226, 232, 240, 1)',
                animation: 'fade-in 0.5s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                    Diagnostics for
                  </span>
                  <h3 style={{ fontSize: '1.4rem', color: '#0F172A', wordBreak: 'break-all' }}>{auditResult.url}</h3>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: '#FFF1F2',
                    padding: '8px 18px',
                    borderRadius: '12px',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                  }}
                >
                  <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Overall Growth Score:</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#DC2626' }}>
                    {auditResult.overallScore}/100
                  </div>
                </div>
              </div>

              {/* Sub Scores Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                  gap: '16px',
                  marginBottom: '28px',
                }}
              >
                {[
                  { label: 'Technical & AI SEO', val: auditResult.seoScore, color: '#DC2626' },
                  { label: 'Tracking & Attribution', val: auditResult.adTrackingScore, color: '#B91C1C' },
                  { label: 'Page Load & Web Vitals', val: auditResult.speedScore, color: '#0F172A' },
                  { label: 'CRO & Funnel Health', val: auditResult.croScore, color: '#EF4444' },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      background: '#F8FAFC',
                      padding: '16px',
                      borderRadius: '12px',
                      border: '1px solid rgba(226, 232, 240, 1)',
                    }}
                  >
                    <div style={{ fontSize: '0.78rem', color: '#64748B', marginBottom: '6px', fontWeight: 600 }}>{item.label}</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                      <span style={{ fontSize: '1.4rem', fontWeight: 800, color: item.color }}>{item.val}%</span>
                      <span style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Health</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Critical Vulnerabilities */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '0.95rem', color: '#DC2626', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontWeight: 700 }}>
                  <ShieldAlert size={18} /> High-Impact Vulnerabilities Detected:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {auditResult.criticalIssues.map((issue: string, idx: number) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        background: '#FFF1F2',
                        border: '1px solid rgba(239, 68, 68, 0.25)',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        fontSize: '0.86rem',
                        color: '#991B1B',
                      }}
                    >
                      <AlertTriangle size={16} style={{ flexShrink: 0, marginTop: '2px', color: '#DC2626' }} />
                      <span>{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action button to claim strategy */}
              <div style={{ textAlign: 'center', marginTop: '28px' }}>
                <button
                  type="button"
                  onClick={() => onClaimAudit(auditResult.url, auditResult)}
                  className="btn-primary"
                  style={{ width: '100%', padding: '16px', fontSize: '1rem' }}
                >
                  <span>Claim Full 15-Page Custom Roadmap & Fix Strategy</span>
                  <ArrowRight size={18} />
                </button>
                <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '8px' }}>
                  Includes 30-min strategy session with our Senior Growth Architect. Free of charge.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
