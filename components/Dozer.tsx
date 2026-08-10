'use client';

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { useMachine } from './MachineContext';

export default function Dozer() {
  const dozerRef = useRef<Group>(null);
  const timeRef = useRef(0);
  
  const { isRunning, controlMode, setSpeed, setHeading } = useMachine();
  
  // Track keys for manual mode
  const keys = useRef({ w: false, a: false, s: false, d: false });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (keys.current.hasOwnProperty(key)) {
        keys.current[key as keyof typeof keys.current] = true;
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (keys.current.hasOwnProperty(key)) {
        keys.current[key as keyof typeof keys.current] = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  
  useFrame((state, delta) => {
    if (!dozerRef.current) return;
    
    let currentSpeed = 0;
    
    if (controlMode === 'MANUAL') {
      const moveSpeed = 4 * delta;
      const turnSpeed = 1.5 * delta;
      
      if (keys.current.w) {
        dozerRef.current.translateZ(-moveSpeed);
        currentSpeed = 4;
      }
      if (keys.current.s) {
        dozerRef.current.translateZ(moveSpeed);
        currentSpeed = -4;
      }
      if (keys.current.a) {
        dozerRef.current.rotation.y += turnSpeed;
      }
      if (keys.current.d) {
        dozerRef.current.rotation.y -= turnSpeed;
      }
    } else if (isRunning && (controlMode === 'AUTONOMY' || controlMode === 'ASSISTED')) {
      timeRef.current += delta;
      const moveSpeed = 3 * delta;
      
      dozerRef.current.translateZ(-moveSpeed);
      dozerRef.current.rotation.y -= Math.sin(timeRef.current * 0.5) * 0.3 * delta;
      currentSpeed = 3;
    }
    
    // Update context state for the UI
    setSpeed(Math.abs(Math.round(currentSpeed * 3.6 * 10) / 10));
    
    // Convert radians to degrees for heading
    const headingDeg = (dozerRef.current.rotation.y * 180 / Math.PI) % 360;
    let compassHeading = -headingDeg; 
    if (compassHeading < 0) compassHeading += 360;
    setHeading(Math.round(compassHeading));
  });



  return (
    <group ref={dozerRef} position={[0, 0, 0]}>
      {/* Left Track */}
      <mesh position={[-1.2, 0.4, 0]} castShadow>
        <boxGeometry args={[0.6, 0.8, 3.5]} />
        <meshStandardMaterial color="#1a202c" />
      </mesh>
      
      {/* Right Track */}
      <mesh position={[1.2, 0.4, 0]} castShadow>
        <boxGeometry args={[0.6, 0.8, 3.5]} />
        <meshStandardMaterial color="#1a202c" />
      </mesh>

      {/* Main Body */}
      <mesh position={[0, 0.8, -0.2]} castShadow>
        <boxGeometry args={[1.8, 1.2, 2.8]} />
        <meshStandardMaterial color="#eab308" />
      </mesh>

      {/* Cabin */}
      <mesh position={[0, 1.8, 0.5]} castShadow>
        <boxGeometry args={[1.4, 1.2, 1.4]} />
        <meshStandardMaterial color="#475569" />
      </mesh>

      {/* Blade Arms */}
      <mesh position={[-1, 0.8, -1.8]} rotation={[0.2, 0, 0]} castShadow>
        <boxGeometry args={[0.2, 0.2, 2]} />
        <meshStandardMaterial color="#eab308" />
      </mesh>
      <mesh position={[1, 0.8, -1.8]} rotation={[0.2, 0, 0]} castShadow>
        <boxGeometry args={[0.2, 0.2, 2]} />
        <meshStandardMaterial color="#eab308" />
      </mesh>

      {/* Blade */}
      <mesh position={[0, 0.6, -2.6]} castShadow>
        <boxGeometry args={[3.2, 1.4, 0.4]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
    </group>
  );
}
