
import { motion } from 'framer-motion';

export default function OverlayText() {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      Welcome to My 3D Experience
    </motion.div>
  );
}
    