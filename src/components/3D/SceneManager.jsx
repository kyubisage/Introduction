
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import HeroModel from './HeroModel';
import ParticleBackground from './ParticleBackground';

export default function SceneManager() {
  const lightRef = useRef();

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(Date.now() * 0.001) * 5;
      lightRef.current.position.z = Math.cos(Date.now() * 0.001) * 5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight ref={lightRef} intensity={1} position={[5, 5, 5]} />
      <ParticleBackground />
      <HeroModel />
    </>
  );
}
    