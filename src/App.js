import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

function Box() {
  return (
    <mesh rotation={[10, 10, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default function App() {
  return (
    <main className="h-screen w-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center">
      <div className="w-full h-1/2">
        <Canvas camera={{ position: [5, 5, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <OrbitControls enableZoom={false} />
          <Box />
        </Canvas>
      </div>
      <motion.div
        className="p-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Alex</h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          I’m a passionate UI developer crafting modern, responsive interfaces and immersive user experiences using the latest web technologies.
        </p>
        <a
          href="#"
          className="text-lg px-6 py-3 rounded-2xl bg-pink-600 hover:bg-pink-500 transition duration-300 inline-block"
        >
          View Portfolio
        </a>
      </motion.div>
    </main>
  );
}