// components/PageTransition.tsx
import { motion } from 'framer-motion';

export const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }} // Starts slightly to the right
    animate={{ opacity: 1, x: 0 }}  // Slides to center
    exit={{ opacity: 0, x: -20 }}   // Slides to the left when leaving
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);