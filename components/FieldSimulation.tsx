'use client';

import { Canvas } from '@react-three/fiber';
import { Sky, OrbitControls } from '@react-three/drei';
import Terrain from './Terrain';
import Dozer from './Dozer';

export default function FieldSimulation() {
  return (
    <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

      <Terrain />
      <Dozer />

      {/* Allows the user to rotate the camera around the field */}
      <OrbitControls makeDefault />
    </Canvas>
  );
}
