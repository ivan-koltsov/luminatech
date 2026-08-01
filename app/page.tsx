import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div style={{ padding: '48px', fontFamily: 'Inter, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '24px' }}>Lumina Tech Views</h1>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>
        The three requested screenshots have been implemented as separate routes:
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Link href="/machine-simulation" style={linkStyle}>
          <strong>Machine Simulation</strong>: 3D view with control overlay
        </Link>
        <Link href="/dashboard-details" style={linkStyle}>
          <strong>Dashboard Details</strong>: Cost Composition, Equipment Chain, Risk Register
        </Link>
        <Link href="/dashboard-overview" style={linkStyle}>
          <strong>Dashboard Overview</strong>: 3D Map Viewport and Project Metrics
        </Link>
      </div>
    </div>
  );
}

const linkStyle = {
  display: 'block',
  padding: '16px',
  background: '#f8fafc',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  textDecoration: 'none',
  color: '#0f172a',
  boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
};
