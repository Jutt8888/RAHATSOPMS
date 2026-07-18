import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }} // Screen goes up
      transition={{ delay: 1.5, duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="text-white text-4xl md:text-6xl font-display tracking-widest"
      >
        RAHAT SOPMS
      </motion.h1>
    </motion.div>
  );
}