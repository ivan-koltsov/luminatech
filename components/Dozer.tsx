'use client';

import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export default function Dozer() {
  const dozerRef = useRef<Group>(null);
  const [keys, setKeys] = useState({ w: false, a: false, s: false, d: false });

  // Handle Keyboard Inputs
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => setKeys((k) => ({ ...k, [e.key.toLowerCase()]: true }));
    const handleKeyUp = (e: KeyboardEvent) => setKeys((k) => ({ ...k, [e.key.toLowerCase()]: false }));

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Movement Logic
  useFrame((state, delta) => {
    if (!dozerRef.current) return;

    const speed = 5 * delta;
    const rotationSpeed = 2 * delta;

    if (keys.w) dozerRef.current.translateZ(-speed);
    if (keys.s) dozerRef.current.translateZ(speed);
    if (keys.a) dozerRef.current.rotation.y += rotationSpeed;
    if (keys.d) dozerRef.current.rotation.y -= rotationSpeed;
  });

  return (
    <group ref={dozerRef} position={[0, 0.5, 0]}>
      {/* Dozer Body */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[2, 1, 3]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      {/* Dozer Blade */}
      <mesh position={[0, 0.25, -1.7]} castShadow>
        <boxGeometry args={[2.5, 1.2, 0.5]} />
        <meshStandardMaterial color="darkgrey" />
      </mesh>

      {/* Cabin */}
      <mesh position={[0, 1.25, 0.5]} castShadow>
        <boxGeometry args={[1.5, 1, 1.5]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}
