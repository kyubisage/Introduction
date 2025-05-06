
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useFrame } from 'react-three/fiber';
import SceneManager from './components/3D/SceneManager';
import OverlayText from './components/UI/OverlayText';
import ScrollSections from './components/UI/ScrollSections';

export default function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} className="absolute top-0 left-0 w-full h-full">
        <Suspense fallback={null}>
          <SceneManager />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <OverlayText />
      <ScrollSections />
    </div>
  );
}
    