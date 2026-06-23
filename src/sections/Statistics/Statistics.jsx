import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let startTime = null;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeProgress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold font-heading text-text mb-2">
      {count}{suffix}
    </div>
  );
};

const Statistics = () => {
  const stats = [
    { label: "Vehicle Models", end: 4, color: "text-primary" },
    { label: "Horsepower", end: 1000, suffix: "+", color: "text-secondary" },
    { label: "Future Technologies", end: 50, suffix: "+", color: "text-accent" },
    { label: "Design Excellence", end: 100, suffix: "%", color: "text-primary" }
  ];

  return (
    <section className="py-20 border-y border-glass-border bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <Counter end={stat.end} suffix={stat.suffix} />
              <div className={`text-sm md:text-base tracking-widest uppercase font-semibold ${stat.color}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
