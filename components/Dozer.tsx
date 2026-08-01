'use client';

import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export default function Dozer() {
  const dozerRef = useRef<Group>(null);
  // Autonomous Movement Logic for Demo
  const timeRef = useRef(0);
  
  useFrame((state, delta) => {
    if (!dozerRef.current) return;
    
    timeRef.current += delta;
    const speed = 3 * delta;
    
    // Move forward continuously
    dozerRef.current.translateZ(-speed);
    
    // Gently steer left and right over time to create a curved path
    dozerRef.current.rotation.y -= Math.sin(timeRef.current * 0.5) * 0.3 * delta;
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
