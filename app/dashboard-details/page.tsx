'use client';
import React from 'react';
import styles from '../../components/dashboard/Dashboard.module.css';

export default function DashboardPage() {
  return (
    <div className={styles.dashboard}>
      {/* Top Navigation */}
      <div className={styles.topNav}>
        <div className={styles.navLeft}>
          <div className={styles.logo}>LUMINA</div>
          <div className={styles.breadcrumbs}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span className={styles.breadcrumbCurrent}>Bussigny Logistics Pad <span style={{color: '#64748b', fontWeight: 400}}>VD-2026-018</span></span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>

        <div className={styles.navCenter}>
          <div className={`${styles.navStep} ${styles.active}`}><strong style={{color: '#3b82f6'}}>1</strong> Estimate</div>
          <div className={styles.navStep}><strong>2</strong> Plan / Simulate</div>
          <div className={styles.navStep}><strong>3</strong> Progress</div>
        </div>

        <div className={styles.navRight}>
          <div>Fleet <strong>7</strong> &middot; Routes <strong>5</strong> &middot; Events <strong>12</strong></div>
          <div className={styles.healthPill}>
            <div className={styles.dot}></div> Healthy
          </div>
        </div>
      </div>

      <div className={styles.mainContainer}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          
          <div style={{ background: '#f8fafc', height: '140px', position: 'relative', borderBottom: '1px solid #e2e8f0', marginBottom: '24px' }}>
             {/* Background Map Placeholder */}
             <div className={styles.floatingHeader}>
               <div className={styles.floatingPanel}>
                  <div style={{fontSize: '10px', fontWeight: 700, color: '#64748b', letterSpacing: '0.5px', marginBottom: '4px'}}>QUANTITY SURFACE</div>
                  <div style={{fontSize: '18px', fontWeight: 700}}>swissALTI3D 2021</div>
               </div>
               
               <div className={styles.floatingPanel}>
                 <div style={{fontSize: '10px', fontWeight: 700, color: '#64748b', letterSpacing: '0.5px', marginBottom: '8px'}}>CUT / FILL (M)</div>
                 <div style={{display: 'flex', gap: '16px', fontSize: '12px', color: '#64748b'}}>
                   <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                     <div style={{width: '12px', height: '12px', borderRadius: '2px', background: '#ea580c'}}></div> Cut -6 m
                   </div>
                   <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                     <div style={{width: '12px', height: '12px', borderRadius: '2px', background: '#3b82f6'}}></div> Fill +4 m
                   </div>
                 </div>
               </div>
             </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {/* Cost Composition */}
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <div className={styles.panelTitle}>Cost Composition</div>
                <div className={styles.panelSubtitle}>$833k direct</div>
              </div>
              
              <div className={styles.costRow}>
                <div className={styles.costLabel}>Labor</div>
                <div className={styles.costBarContainer}><div className={styles.costBar} style={{width: '50%', background: '#3b82f6'}}></div></div>
                <div className={styles.costValue}>$150k</div>
              </div>
              <div className={styles.costRow}>
                <div className={styles.costLabel}>Equipment</div>
                <div className={styles.costBarContainer}><div className={styles.costBar} style={{width: '100%', background: '#c2410c'}}></div></div>
                <div className={styles.costValue}>$300k</div>
              </div>
              <div className={styles.costRow}>
                <div className={styles.costLabel}>Cut + haul</div>
                <div className={styles.costBarContainer}><div className={styles.costBar} style={{width: '60%', background: '#33655c'}}></div></div>
                <div className={styles.costValue}>$183k</div>
              </div>
              <div className={styles.costRow}>
                <div className={styles.costLabel}>Place + compact</div>
                <div className={styles.costBarContainer}><div className={styles.costBar} style={{width: '40%', background: '#8b5cf6'}}></div></div>
                <div className={styles.costValue}>$117k</div>
              </div>
              <div className={styles.costRow}>
                <div className={styles.costLabel}>Import / borrow</div>
                <div className={styles.costBarContainer}><div className={styles.costBar} style={{width: '20%', background: '#d4a373'}}></div></div>
                <div className={styles.costValue}>$50k</div>
              </div>
              <div className={styles.costRow}>
                <div className={styles.costLabel}>Fuel + consumables</div>
                <div className={styles.costBarContainer}><div className={styles.costBar} style={{width: '12%', background: '#737373'}}></div></div>
                <div className={styles.costValue}>$33k</div>
              </div>

              <div className={styles.bidTotal}>
                <div>
                  <div className={styles.bidTotalLabel}>BID TOTAL</div>
                  <div className={styles.bidTotalDesc}>Direct $833k + 7% contingency &middot; margin folded into bid.</div>
                </div>
                <div className={styles.bidTotalValue}>$1.05M</div>
              </div>
            </div>

            {/* Equipment Production Chain */}
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <div className={styles.panelTitle}>Equipment Production Chain</div>
                <div className={styles.panelSubtitle}>87 m&sup3;/h system</div>
              </div>

              <div className={styles.chainItem}>
                <div className={styles.chainIcon} style={{background: '#f1f5f9', color: '#64748b'}}>EX</div>
                <div className={styles.chainInfo}>
                  <div className={styles.chainTitle}>Cut &middot; EX-01</div>
                  <div className={styles.chainSub}>Cat 336 NX &middot; 220 m&sup3;/h nominal</div>
                </div>
                <div className={styles.chainRate}>112 m&sup3;/h</div>
              </div>

              <div className={styles.chainItem}>
                <div className={styles.chainIcon} style={{background: '#f1f5f9', color: '#64748b'}}>TR</div>
                <div className={styles.chainInfo}>
                  <div className={styles.chainTitle}>Haul &middot; TR-01..04</div>
                  <div className={styles.chainSub}>4&times; Bell B40E &middot; 11 m&sup3; payload</div>
                </div>
                <div className={styles.chainRate}>236 m&sup3;/h</div>
              </div>

              <div className={styles.chainItem}>
                <div className={styles.chainIcon} style={{background: '#ea580c', color: 'white'}}>DZ</div>
                <div className={styles.chainInfo}>
                  <div className={styles.chainTitle}>Spread &middot; DZ-01 &middot; bottleneck</div>
                  <div className={styles.chainSub}>Cat D8T &middot; 200 mm lift</div>
                </div>
                <div className={styles.chainRate}>87 m&sup3;/h</div>
              </div>

              <div className={styles.chainItem}>
                <div className={styles.chainIcon} style={{background: '#f1f5f9', color: '#64748b'}}>CM</div>
                <div className={styles.chainInfo}>
                  <div className={styles.chainTitle}>Compact &middot; CM-01/02</div>
                  <div className={styles.chainSub}>2&times; Cat CS56B &middot; 95% Proctor target</div>
                </div>
                <div className={styles.chainRate}>102 m&sup3;/h</div>
              </div>

              <div className={styles.systemRate}>
                <div className={styles.bidTotalLabel}>SYSTEM RATE (MIN OF CHAIN)</div>
                <div className={styles.bidTotalValue} style={{fontSize: '18px'}}>87 m&sup3;/h</div>
              </div>
            </div>
          </div>

          {/* Risk Register */}
          <div className={styles.panel}>
            <div className={styles.panelHeader} style={{marginBottom: '8px'}}>
              <div className={styles.panelTitle}>Risk Register</div>
              <div className={styles.panelSubtitle}>+29% contingency drivers</div>
            </div>

            <div className={styles.riskItem}>
              <div className={`${styles.riskSeverity} ${styles.high}`}>H</div>
              <div className={styles.riskInfo}>
                <div className={styles.riskTitle}>Truck-down route block</div>
                <div className={styles.riskDesc}>If TR-02 fails, H2 cycle collapses; pad fill slips ~2.5 days.</div>
              </div>
              <div className={styles.riskImpact}>+14.0%</div>
            </div>
            
            <div className={styles.riskItem}>
              <div className={`${styles.riskSeverity} ${styles.med}`}>M</div>
              <div className={styles.riskInfo}>
                <div className={styles.riskTitle}>Soil swell uncertainty</div>
                <div className={styles.riskDesc}>Silty-clay shrink factor &plusmn;5% drives &plusmn;320 m&sup3; of import demand.</div>
              </div>
              <div className={styles.riskImpact}>+7.0%</div>
            </div>

            <div className={styles.riskItem}>
              <div className={`${styles.riskSeverity} ${styles.med}`}>M</div>
              <div className={styles.riskInfo}>
                <div className={styles.riskTitle}>GNSS RTK age above 6 s</div>
                <div className={styles.riskDesc}>Forces dozer to manual grade; fine-grade rate drops 22%.</div>
              </div>
              <div className={styles.riskImpact}>+5.0%</div>
            </div>

            <div className={styles.riskItem}>
              <div className={`${styles.riskSeverity} ${styles.low}`}>L</div>
              <div className={styles.riskInfo}>
                <div className={styles.riskTitle}>Rainfall during topsoil strip</div>
                <div className={styles.riskDesc}>12-month median suggests 1 weather day inside window.</div>
              </div>
              <div className={styles.riskImpact}>+3.0%</div>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          
          {/* Source Ground Truth */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <div className={styles.panelTitle}>Source Ground Truth</div>
              <div className={styles.panelSubtitle}>68 images</div>
            </div>

            <div style={{fontSize: '13px', color: '#64748b', marginBottom: '16px', lineHeight: 1.5}}>
              Quantities come from 540 &times; 540 display grid over a 0.5 m cell-size resampling of the parsed DEM.
            </div>

            <div className={styles.imageGrid}>
              {[...Array(14)].map((_, i) => (
                <div key={i} className={styles.thumb} style={{background: '#cbd5e1 url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23e2e8f0\'/%3E%3Cpath d=\'M0 100 L50 20 L100 100 Z\' fill=\'%23cbd5e1\'/%3E%3C/svg%3E") center/cover'}}></div>
              ))}
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statBlock}>
                <div className={styles.statLabel}>DEM SOURCE</div>
                <div className={styles.statValue}>swissALTI3D</div>
                <div className={styles.statSub}>0.5 m GeoTIFF</div>
              </div>
              <div className={styles.statBlock}>
                <div className={styles.statLabel}>DISPLAY GRID</div>
                <div className={styles.statValue}>540 &times; 540</div>
                <div className={styles.statSub}>0.5 m cells</div>
              </div>
              <div className={styles.statBlock}>
                <div className={styles.statLabel}>RAW RANGE</div>
                <div className={styles.statValue}>13 m</div>
                <div className={styles.statSub}>selected high-variance crop</div>
              </div>
              <div className={styles.statBlock}>
                <div className={styles.statLabel}>HEIGHTFIELD</div>
                <div className={styles.statValue}>8100 cells</div>
                <div className={styles.statSub}>existing + target = delta</div>
              </div>
            </div>
          </div>

          {/* Quantity Register */}
          <div className={styles.panel}>
            <div className={styles.panelHeader} style={{marginBottom: '8px'}}>
              <div className={styles.panelTitle}>Quantity Register</div>
              <div className={styles.panelSubtitle}>balanced</div>
            </div>

            <div className={styles.qtyItem}>
              <div>
                <div className={styles.qtyTitle}>Z1 &middot; Northwest cut</div>
                <div className={styles.qtySub}>Silty clay &middot; 92% confidence</div>
              </div>
              <div className={`${styles.qtyVal} ${styles.cut}`}>2k m&sup3;</div>
            </div>

            <div className={styles.qtyItem}>
              <div>
                <div className={styles.qtyTitle}>Z2 &middot; North ridge</div>
                <div className={styles.qtySub}>Weathered sandstone &middot; 88% confidence</div>
              </div>
              <div className={`${styles.qtyVal} ${styles.cut}`}>10k m&sup3;</div>
            </div>

            <div className={styles.qtyItem}>
              <div>
                <div className={styles.qtyTitle}>Z3 &middot; Central pad</div>
                <div className={styles.qtySub}>Engineered fill &middot; 95% confidence</div>
              </div>
              <div className={`${styles.qtyVal} ${styles.fill}`}>31k m&sup3;</div>
            </div>

            <div className={styles.qtyItem}>
              <div>
                <div className={styles.qtyTitle}>Z4 &middot; Southeast fill</div>
                <div className={styles.qtySub}>Engineered fill &middot; 93% confidence</div>
              </div>
              <div className={`${styles.qtyVal} ${styles.fill}`}>3k m&sup3;</div>
            </div>

            <div className={styles.qtyItem}>
              <div>
                <div className={styles.qtyTitle}>Z5 &middot; Access ramp</div>
                <div className={styles.qtySub}>Granular base &middot; 90% confidence</div>
              </div>
              <div className={`${styles.qtyVal} ${styles.fill}`}>5k m&sup3;</div>
            </div>

            <div className={styles.qtyItem}>
              <div>
                <div className={styles.qtyTitle}>Z6 &middot; Pond excavation</div>
                <div className={styles.qtySub}>Lean clay &middot; 85% confidence</div>
              </div>
              <div className={`${styles.qtyVal} ${styles.cut}`}>11k m&sup3;</div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
