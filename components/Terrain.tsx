'use client';

import { Grid } from '@react-three/drei';

export default function Terrain() {
  return (
    <group>
      {/* Ground Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#3b5e2b" />
      </mesh>
      
      {/* Grid to make movement obvious */}
      <Grid 
        infiniteGrid 
        fadeDistance={50} 
        sectionColor="#2d3748" 
        cellColor="#4a5568" 
        position={[0, 0, 0]} 
      />

      {/* Scattered reference objects to provide a sense of speed and scale */}
      {Array.from({ length: 40 }).map((_, i) => (
        <mesh 
          key={i} 
          position={[
            (Math.random() - 0.5) * 100, 
            0.5, 
            (Math.random() - 0.5) * 100
          ]} 
          castShadow 
          receiveShadow
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#718096" />
        </mesh>
      ))}
    </group>
  );
}
