'use client';

import dynamic from 'next/dynamic';
import UIOverlay from '../../components/ui/UIOverlay';
import { MachineProvider } from '../../components/MachineContext';

// Disable SSR for the 3D Canvas
const FieldSimulation = dynamic(() => import('../../components/FieldSimulation'), {
  ssr: false,
});

export default function Page() {
  return (
    <MachineProvider>
      <main style={{ width: '100vw', height: '100vh', backgroundColor: '#87CEEB', position: 'relative', overflow: 'hidden' }}>
        <FieldSimulation />
        <UIOverlay />
      </main>
    </MachineProvider>
  );
}
