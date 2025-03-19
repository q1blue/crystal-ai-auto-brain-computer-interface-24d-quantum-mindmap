import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Text } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

function QuantumNode({ position, label }: { position: [number, number, number]; label: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial
          color="#4299e1"
          emissive="#2b6cb0"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
      <Text
        position={[0, 0.3, 0]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

function QuantumConnections() {
  const nodes = [
    { position: [-2, 2, 0], label: "Quantum Core" },
    { position: [2, 2, 0], label: "Neural Network" },
    { position: [0, -2, 2], label: "Data Processing" },
    { position: [0, -2, -2], label: "Memory Matrix" },
    { position: [-2, -2, 0], label: "Security Layer" },
    { position: [2, -2, 0], label: "Interface" },
  ];

  return (
    <group>
      {nodes.map((node, i) => (
        <QuantumNode key={i} position={node.position as [number, number, number]} label={node.label} />
      ))}
      {/* Add connection lines between nodes */}
      {nodes.map((node, i) => 
        nodes.slice(i + 1).map((target, j) => (
          <line key={`${i}-${j}`}>
            <bufferGeometry attach="geometry" {...new THREE.BufferGeometry().setFromPoints([
              new THREE.Vector3(...node.position),
              new THREE.Vector3(...target.position)
            ])} />
            <lineBasicMaterial attach="material" color="#4299e1" opacity={0.4} transparent />
          </line>
        ))
      )}
    </group>
  );
}

function Visualization() {
  return (
    <div className="h-screen">
      <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-sm p-4 rounded-xl">
        <h2 className="text-xl font-bold mb-2">24D Quantum Mindmap</h2>
        <p className="text-gray-400">Interactive holographic visualization of neural architecture</p>
      </div>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Suspense fallback={null}>
          <Environment preset="night" />
          <QuantumConnections />
          <EffectComposer>
            <Bloom
              intensity={1.5}
              luminanceThreshold={0.9}
              luminanceSmoothing={0.9}
            />
          </EffectComposer>
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 right-4 z-10 bg-black/50 backdrop-blur-sm p-4 rounded-xl">
        <div className="space-y-2">
          <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition">
            Reset View
          </button>
          <button className="w-full px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition">
            Toggle Connections
          </button>
          <button className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition">
            Export Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default Visualization;