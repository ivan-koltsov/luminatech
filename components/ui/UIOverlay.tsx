import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './UIOverlay.module.css';

export default function UIOverlay() {
  const router = useRouter();
  const [controlMode, setControlMode] = useState('AUTONOMY');
  const [isRunning, setIsRunning] = useState(false);
  const [taskProgress, setTaskProgress] = useState(100);

  return (
    <div className={styles.overlay}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <div className={styles.logo}>LUMINA</div>
          {isRunning ? (
            <div className={styles.statusPill} style={{ color: '#22c55e', borderColor: '#22c55e', backgroundColor: '#f0fdf4' }}>
              <div className={styles.dot} style={{ background: '#22c55e' }}></div>
              RUNNING
            </div>
          ) : (
            <div className={styles.statusPill}>
              <div className={styles.dot}></div>
              STOPPED
            </div>
          )}
          <div className={styles.locationInfo}>
            <div className={styles.locationName}>Bussigny Logistics Pad</div>
            <div className={styles.locationDetail}>DZ-01 &middot; Cat D8T</div>
          </div>
        </div>
        <div className={styles.topCenter} style={{ gap: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 500, color: '#64748b', cursor: 'pointer' }} onClick={() => router.push('/dashboard-overview')}>
            <strong style={{color: 'inherit'}}>1</strong> Estimate
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 500, color: '#0f172a', background: '#f1f5f9', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }} onClick={() => router.push('/machine-simulation')}>
            <strong style={{color: '#3b82f6'}}>2</strong> Plan / Simulate
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 500, color: '#64748b', cursor: 'pointer' }} onClick={() => router.push('/dashboard-details')}>
            <strong style={{color: 'inherit'}}>3</strong> Progress
          </div>
        </div>
        <div className={styles.topRight}>
          <div className={styles.statusIndicator}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
              <line x1="22" y1="11" x2="22" y2="13"></line>
            </svg>
            79%
          </div>
          <div className={`${styles.statusIndicator} ${styles.green}`}>
            <div className={styles.dot}></div>
            LINK
          </div>
          <div className={`${styles.statusIndicator} ${styles.green}`}>
            <div className={styles.dot}></div>
            RTK FIXED
          </div>
        </div>
      </div>

      {/* Main Area with Widgets */}
      <div className={styles.mainArea}>
        {/* Production Rate Panel */}
        <div className={`${styles.panel} ${styles.topRightWidget}`}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className={styles.label}>PRODUCTION RATE</div>
            <div className={styles.label} style={{ color: '#aaa', fontWeight: 500 }}>VD-2026-018</div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '12px' }}>
            <div className={styles.productionRateVal}>87</div>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '4px', flex: 1 }}>
              <div className={styles.productionRateUnit} style={{ marginTop: '4px' }}>m&sup3;/h</div>
            </div>
            <div style={{ background: '#ffedd5', color: '#ea580c', padding: '2px 6px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>
              -64%
            </div>
          </div>

          <div style={{ display: 'flex', height: '4px', background: '#e2e8f0', borderRadius: '2px', marginTop: '12px', overflow: 'hidden' }}>
            <div style={{ width: '40%', background: '#ea580c' }}></div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#666', marginTop: '4px' }}>
            <div>vs plan <strong style={{ color: '#111' }}>240</strong></div>
            <div>shift avg <strong style={{ color: '#111' }}>218</strong></div>
          </div>

          <div className={styles.productionStats}>
            <div className={styles.statCol}>
              <div className={styles.label}>CUT</div>
              <div className={styles.statVal}>0 <span style={{ fontSize: '10px', color: '#666' }}>m&sup3;</span></div>
            </div>
            <div className={styles.statCol}>
              <div className={styles.label}>FILL</div>
              <div className={styles.statVal}>17,709 <span style={{ fontSize: '10px', color: '#666' }}>m&sup3;</span></div>
            </div>
            <div className={styles.statCol}>
              <div className={styles.label}>EXPORT</div>
              <div className={styles.statVal}>1,710 <span style={{ fontSize: '10px', color: '#666' }}>m&sup3;</span></div>
            </div>
          </div>
        </div>

        {/* Task Progress Panel */}
        <div className={`${styles.panel} ${styles.bottomLeftWidget}`}>
          <div className={styles.taskHeader}>
            <div className={styles.taskPill}>SPREAD</div>
            <div className={styles.label} style={{ flex: 1 }}>TASK T-118</div>
            <div className={styles.label}>CYCLE 7/12</div>
          </div>
          
          <div className={styles.taskTitle}>Fine grade &mdash; fill zone 1 / pass 7</div>
          <div className={styles.taskSub}>Stockpile A &rarr; Fill zone 1</div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className={styles.label}>TASK PROGRESS</div>
            <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{taskProgress}%</div>
          </div>
          
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBarFill} style={{ width: `${taskProgress}%` }}></div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
            <div>
              <div className={styles.label}>CYCLE</div>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>3:38</div>
              <div style={{ fontSize: '11px', color: '#666' }}>avg 4:00</div>
            </div>
            <div>
              <div className={styles.label}>DISTANCE</div>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>96 m</div>
              <div style={{ fontSize: '11px', color: '#666' }}>this pass</div>
            </div>
            <div>
              <div className={styles.label}>REMAINING</div>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>17709</div>
              <div style={{ fontSize: '11px', color: '#666' }}>m&sup3; fill</div>
            </div>
          </div>

          <div className={styles.checkboxRow}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span style={{ color: '#1e293b' }}>Continue pass &middot; hold target pad grade</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '4px' }}>
            <div>
              <span className={styles.label} style={{ marginRight: '6px' }}>NEXT</span>
              <strong>Compact lift &mdash; fill zone 1</strong>
            </div>
            <div style={{ color: '#666' }}>~32 min</div>
          </div>
        </div>

        {/* Control Mode Panel */}
        <div className={`${styles.panel} ${styles.bottomCenterWidget}`}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className={styles.label}>CONTROL MODE</div>
            <div className={styles.label} style={{ color: '#666' }}>Confidence <strong style={{ color: '#111' }}>94%</strong></div>
          </div>
          
          <div className={styles.controlModes}>
            <button className={`${styles.modeBtn} ${controlMode === 'MANUAL' ? styles.active : ''}`} onClick={() => setControlMode('MANUAL')}>
              <div className={styles.dot} style={{ background: controlMode === 'MANUAL' ? 'white' : '#94a3b8' }}></div> MANUAL
            </button>
            <button className={`${styles.modeBtn} ${controlMode === 'ASSISTED' ? styles.active : ''}`} onClick={() => setControlMode('ASSISTED')}>
              <div className={styles.dot} style={{ background: controlMode === 'ASSISTED' ? 'white' : '#d97706' }}></div> ASSISTED
            </button>
            <button className={`${styles.modeBtn} ${controlMode === 'AUTONOMY' ? styles.active : ''}`} onClick={() => setControlMode('AUTONOMY')}>
              <div className={styles.dot} style={{ background: controlMode === 'AUTONOMY' ? 'white' : '#22c55e' }}></div> AUTONOMY
            </button>
          </div>

          <div className={styles.actionRow}>
            <button 
              className={styles.resumeBtn} 
              style={isRunning ? { background: '#ef4444' } : {}}
              onClick={() => setIsRunning(!isRunning)}
            >
              {isRunning ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                  PAUSE
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  RESUME
                </>
              )}
            </button>
            <button className={styles.nextTaskBtn} onClick={() => setTaskProgress(taskProgress < 100 ? taskProgress + 25 : 0)}>
              NEXT TASK &gt;
            </button>
          </div>
        </div>

        {/* Machine State Panel */}
        <div className={`${styles.panel} ${styles.bottomRightWidget}`}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className={styles.label}>MACHINE STATE</div>
            <div className={`${styles.statusIndicator} ${styles.green}`}>
              <div className={styles.dot}></div> HEALTHY
            </div>
          </div>

          <div className={styles.stateGrid}>
            <div>
              <div className={styles.label}>GROUND SPEED</div>
              <div className={styles.stateVal}>0.0 <span className={styles.stateUnit}>km/h</span></div>
            </div>
            <div>
              <div className={styles.label}>HEADING</div>
              <div className={styles.stateVal}>244&deg;</div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '-4px' }}>SW</div>
            </div>
            <div>
              <div className={styles.label}>BLADE LOAD</div>
              <div className={styles.stateVal}>50 <span className={styles.stateUnit}>%</span></div>
            </div>
          </div>

          <div style={{ marginTop: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div className={styles.label}>BLADE VS GRADE</div>
                <div style={{ color: '#22c55e', fontSize: '28px', fontWeight: 'bold', lineHeight: 1, marginTop: '4px' }}>
                  +20 <span style={{ fontSize: '14px' }}>mm</span>
                </div>
              </div>
              <div style={{ color: '#22c55e', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.5px' }}>
                ON GRADE
              </div>
            </div>

            <div className={styles.sliderTrack}>
              <div style={{ position: 'absolute', top: '-4px', bottom: '-4px', left: '70%', width: '1px', background: '#94a3b8' }}></div>
              <div className={styles.sliderThumb}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className={styles.bottomNav}>
        <svg className={styles.navIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 12 12 17 22 12"></polyline><polyline points="2 17 12 22 22 17"></polyline></svg>
        <svg className={styles.navIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        <svg className={styles.navIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        <svg className={styles.navIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
        <svg className={styles.navIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </div>
    </div>
  );
}
