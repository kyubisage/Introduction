
import { motion } from 'framer-motion';

export default function ScrollSections() {
  return (
    <div>
      <section className="min-h-screen bg-gray-800 text-white p-10">
        <motion.h2 className="text-4xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          About Me
        </motion.h2>
        <p className="mt-4">This is a premium 3D website built with React, Three.js, and Framer Motion.</p>
      </section>
      <section className="min-h-screen bg-gray-900 text-white p-10">
        <motion.h2 className="text-4xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          My Work
        </motion.h2>
        <p className="mt-4">I specialize in creating immersive, interactive experiences.</p>
      </section>
    </div>
  );
}
    