import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-primary font-bold tracking-[0.2em]"
      >
        INITIALIZING SYSTEMS
      </motion.div>
    </div>
  );
};

export default Loader;
