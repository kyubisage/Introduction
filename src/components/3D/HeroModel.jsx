
import { useGLTF } from '@react-three/drei';

export default function HeroModel() {
  const { scene } = useGLTF('/models/hero.glb');

  return <primitive object={scene} scale={1.5} />;
}
    