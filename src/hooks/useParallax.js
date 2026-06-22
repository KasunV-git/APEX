import { useScroll, useTransform } from 'framer-motion';

export const useParallax = (distance = 100) => {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
};

export default useParallax;
