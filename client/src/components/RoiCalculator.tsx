import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface RoiCalculatorProps {
  onApplyRoiBudget: (budgetStr: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onApplyRoiBudget }) => {
  const [adSpend, setAdSpend] = useState<number>(10000);
  const [dealValue, setDealValue] = useState<number>(250);
  const [cvr, setCvr] = useState<number>(2.0);

  // Calculations
  const baselineRevenue = adSpend * 2.2;
  const nexusRoasMultiplier = 4.4;
  const nexusGrossRevenue = adSpend * nexusRoasMultiplier;
  const additionalRevenue = nexusGrossRevenue - baselineRevenue;
  const estimatedNewCustomers = Math.round(nexusGrossRevenue / dealValue);
  const projectedAnnualizedLift = additionalRevenue * 12;

  const budgetLabel = `$${adSpend.toLocaleString()}/month`;

  return (
    <section id="roi-calculator" className="section-wrapper" style={{ background: '#FFFFFF', position: 'relative' }}>
      <div className="app-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            <Calculator size={14} /> Financial Projection Tool
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', lineHeight: 1.2, marginBottom: '16px', color: '#0F172A' }}>
            Calculate Your <span className="gradient-text">Projected Revenue Lift</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Estimate your expected monthly return based on your target advertising budget and average sale price.
          </p>
        </div>

        <div
          className="glass-panel"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '40px',
            background: '#FFFFFF',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '40px',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.04)',
          }}
        >
          {/* Sliders Input Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <TrendingUp size={22} color="#DC2626" /> Input Your Current Baseline
            </h3>

            {/* Slider 1: Monthly Ad Spend */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 700 }}>Monthly Ad Spend:</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#DC2626' }}>
                  ${adSpend.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={2000}
                max={100000}
                step={1000}
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '5px',
                  accentColor: '#EF4444',
                  cursor: 'pointer',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748B', marginTop: '4px' }}>
                <span>$2,000/mo</span>
                <span>$50,000/mo</span>
                <span>$100,000+/mo</span>
              </div>
            </div>

            {/* Slider 2: Average Order Value / Deal Size */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 700 }}>
                  Avg. Deal Size / Order Value (AOV):
                </span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#B91C1C' }}>
                  ${dealValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={5000}
                step={25}
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '5px',
                  accentColor: '#B91C1C',
                  cursor: 'pointer',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748B', marginTop: '4px' }}>
                <span>$50 (eCom)</span>
                <span>$1,000 (Mid-Market)</span>
                <span>$5,000+ (High-Ticket B2B)</span>
              </div>
            </div>

            {/* Slider 3: Current Conversion Rate */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 700 }}>
                  Current Website Conversion Rate:
                </span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#EF4444' }}>
                  {cvr.toFixed(1)}%
                </span>
              </div>
              <input
                type="range"
                min={0.5}
                max={6.0}
                step={0.1}
                value={cvr}
                onChange={(e) => setCvr(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '5px',
                  accentColor: '#EF4444',
                  cursor: 'pointer',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748B', marginTop: '4px' }}>
                <span>0.5% (Low)</span>
                <span>2.0% (Average)</span>
                <span>5.0%+ (Elite)</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#64748B' }}>
              <ShieldCheck size={16} color="#DC2626" /> Based on aggregate 2025-2026 performance across 1,200+ campaigns.
            </div>
          </div>

          {/* Results Output Card */}
          <div
            style={{
              background: '#FFF1F2',
              border: '2px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '16px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 15px 35px rgba(239, 68, 68, 0.08)',
            }}
          >
            <div>
              <div style={{ fontSize: '0.8rem', color: '#991B1B', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px', fontWeight: 700 }}>
                Projected Monthly Revenue
              </div>
              <div style={{ fontSize: 'clamp(2.2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#DC2626', lineHeight: 1.1, marginBottom: '16px' }}>
                ${Math.round(nexusGrossRevenue).toLocaleString()}
                <span style={{ fontSize: '1rem', color: '#64748B', fontWeight: 500 }}>/mo</span>
              </div>

              {/* Incremental Lift Highlight */}
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  marginBottom: '24px',
                }}
              >
                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Estimated Net Revenue Added:</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#B91C1C' }}>
                  +${Math.round(additionalRevenue).toLocaleString()}/month
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '2px' }}>
                  (~${Math.round(projectedAnnualizedLift).toLocaleString()} annualized ARR lift)
                </div>
              </div>

              {/* Metrics Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
                <div style={{ background: '#FFFFFF', padding: '12px', borderRadius: '10px', border: '1px solid rgba(226, 232, 240, 1)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>Target ROAS</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#DC2626' }}>{nexusRoasMultiplier}x</div>
                </div>
                <div style={{ background: '#FFFFFF', padding: '12px', borderRadius: '10px', border: '1px solid rgba(226, 232, 240, 1)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>Est. New Customers</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>
                    ~{estimatedNewCustomers.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onApplyRoiBudget(budgetLabel)}
              className="btn-primary"
              style={{ width: '100%', padding: '14px', fontSize: '0.95rem' }}
            >
              <span>Lock In This Budget & Get Strategy</span>
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
