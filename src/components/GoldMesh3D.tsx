'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function GoldMesh({ speed = 0.3, wireframe = false, scale = 1 }: { speed?: number; wireframe?: boolean; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);

  const { geometry, edges } = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.1, 1);
    const ed = new THREE.EdgesGeometry(geo);
    return { geometry: geo, edges: ed };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * speed * 0.4;
      meshRef.current.rotation.y = t * speed * 0.6;
      meshRef.current.position.y = Math.sin(t * 0.8) * 0.15;
    }
    if (edgesRef.current) {
      edgesRef.current.rotation.x = t * speed * 0.4;
      edgesRef.current.rotation.y = t * speed * 0.6;
      edgesRef.current.position.y = Math.sin(t * 0.8) * 0.15;
    }
  });

  return (
    <group scale={scale}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          color="#d4af37"
          metalness={0.9}
          roughness={0.15}
          transparent
          opacity={wireframe ? 0.08 : 0.12}
          wireframe={wireframe}
          emissive="#d4af37"
          emissiveIntensity={0.15}
        />
      </mesh>
      <lineSegments ref={edgesRef} geometry={edges}>
        <lineBasicMaterial color="#d4af37" transparent opacity={wireframe ? 0.5 : 0.35} />
      </lineSegments>
    </group>
  );
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 25;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    let seed = 42;
    const rand = () => {
      seed = (seed * 16807 + 0) % 2147483647;
      return seed / 2147483647;
    };
    for (let i = 0; i < count; i++) {
      const r = 1.6 + rand() * 1;
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#d4af37" size={0.02} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function GoldMesh3D({ speed = 0.3, wireframe = false, scale = 1, className = '' }: { speed?: number; wireframe?: boolean; scale?: number; className?: string }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 35 }}
        gl={{ alpha: true, antialias: false }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.2]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#f5d061" />
        <pointLight position={[-3, -2, 4]} intensity={0.4} color="#d4af37" />
        <GoldMesh speed={speed} wireframe={wireframe} scale={scale} />
        <Particles />
      </Canvas>
    </div>
  );
}
