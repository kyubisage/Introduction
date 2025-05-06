
import { shaderMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const StarfieldShader = `
  uniform float time;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 color = vec3(1.0, 1.0, 1.0) * sin(time + length(vUv - 0.5) * 10.0);
    gl_FragColor = vec4(color, 1.0);
  }
`;

const ParticleBackground = () => {
  const ref = useRef();
  useFrame(() => {
    ref.current.material.uniforms.time.value = performance.now() * 0.001;
  });

  return (
    <mesh>
      <planeGeometry args={[10, 10]} />
      <shaderMaterial vertexShader={StarfieldShader} fragmentShader={StarfieldShader} />
    </mesh>
  );
};

export default ParticleBackground;
    