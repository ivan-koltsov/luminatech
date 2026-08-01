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
          
          <div className={styles.dashboardHeader}>
            <div className={styles.headerSubtitle}>WAREHOUSE PAD &middot; BUSSIGNY-PRÈS-LAUSANNE, VAUD, CH</div>
            <div className={styles.headerTitle}>Bussigny Logistics Pad</div>
            <div className={styles.headerDesc}>
              18.0-acre site - backend estimate v0.4. The cut/fill heatmap drives the quantity register; cost composition, risk register, and production chain expose the bid build-up.
            </div>
          </div>

          <div className={styles.metricsRow}>
            <div className={styles.metricCol}>
              <div className={styles.headerSubtitle}>BID TOTAL</div>
              <div className={styles.headerTitle} style={{marginBottom: '4px', fontWeight: 700}}>$1.05M</div>
              <div className={styles.headerDesc} style={{fontSize: '12px'}}>$833k direct cost</div>
            </div>
            <div className={styles.metricCol}>
              <div className={styles.headerSubtitle}>MATERIAL MOVED</div>
              <div className={styles.headerTitle} style={{marginBottom: '4px', fontWeight: 700}}>43k m&sup3;</div>
              <div className={styles.headerDesc} style={{fontSize: '12px'}}>23k m&sup3; cut + 21k m&sup3; import</div>
            </div>
            <div className={styles.metricCol}>
              <div className={styles.headerSubtitle}>DURATION</div>
              <div className={styles.headerTitle} style={{marginBottom: '4px', fontWeight: 700}}>31 days</div>
              <div className={styles.headerDesc} style={{fontSize: '12px'}}>309 work hours</div>
            </div>
            <div className={styles.metricCol}>
              <div className={styles.headerSubtitle}>RISK SCORE</div>
              <div className={styles.headerTitle} style={{marginBottom: '4px', fontWeight: 700}}>22 / 100</div>
              <div className={styles.headerDesc} style={{fontSize: '12px'}}>inside normal band</div>
            </div>
            <div className={styles.metricCol}>
              <div className={styles.headerSubtitle}>BALANCE</div>
              <div className={styles.headerTitle} style={{marginBottom: '4px', fontWeight: 700}}>21k m&sup3; import</div>
              <div className={styles.headerDesc} style={{fontSize: '12px'}}>43k m&sup3; fill demand</div>
            </div>
          </div>

          <div className={styles.mapViewport}>
            {/* View Toggles */}
            <div className={styles.viewToggles}>
              <button className={`${styles.toggleBtn} ${styles.active}`}>Isometric</button>
              <button className={styles.toggleBtn}>Elevation 3D</button>
              <button className={styles.toggleBtn}>Cut / fill</button>
              <button className={styles.toggleBtn}>Section</button>
            </div>

            {/* Map Controls */}
            <div className={styles.mapControls}>
              <div className={styles.zoomBtns}>
                <button className={styles.zoomBtn}>+</button>
                <button className={styles.zoomBtn}>&minus;</button>
              </div>
              <div className={styles.vertScaleRow}>
                <span>VERT. SCALE</span>
                <span style={{color: '#0f172a'}}>1.0&times;</span>
              </div>
              <div style={{height: '6px', background: '#e2e8f0', borderRadius: '3px', position: 'relative'}}>
                <div style={{position: 'absolute', top: 0, bottom: 0, left: 0, width: '40%', background: '#3b82f6', borderRadius: '3px'}}></div>
                <div style={{position: 'absolute', top: '-4px', left: '40%', width: '14px', height: '14px', background: '#3b82f6', borderRadius: '50%', transform: 'translateX(-50%)'}}></div>
              </div>
              <button className={styles.resetBtn}>Reset</button>
              <div className={styles.controlHint}>Drag to rotate &middot; scroll to zoom</div>
            </div>

            {/* Placeholder for the 3D Map Image */}
            <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <div style={{
                width: '80%', height: '80%',
                background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\'%3E%3Cpath d=\'M400 50 L750 200 L400 350 L50 200 Z\' fill=\'%23e2e8f0\'/%3E%3Cpath d=\'M300 150 Q 400 100 500 200 T 600 250 Q 500 300 400 250 T 200 200 Z\' fill=\'%23ea580c\' opacity=\'0.8\'/%3E%3Cpath d=\'M500 200 Q 600 150 700 200 T 550 300 Z\' fill=\'%233b82f6\' opacity=\'0.6\'/%3E%3C/svg%3E") center/contain no-repeat'
              }}></div>
            </div>

            {/* Floating Panels Inside Map */}
            <div className={`${styles.floatingPanel} ${styles.mapFloatBottomLeft}`}>
              <div style={{fontSize: '10px', fontWeight: 700, color: '#64748b', letterSpacing: '0.5px', marginBottom: '4px'}}>QUANTITY SURFACE</div>
              <div style={{fontSize: '18px', fontWeight: 700}}>swissALTI3D 2021</div>
            </div>
            
            <div className={`${styles.floatingPanel} ${styles.mapFloatBottomRight}`}>
              <div style={{fontSize: '10px', fontWeight: 700, color: '#64748b', letterSpacing: '0.5px', marginBottom: '8px'}}>CUT / FILL (M)</div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '12px', color: '#64748b'}}>
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
