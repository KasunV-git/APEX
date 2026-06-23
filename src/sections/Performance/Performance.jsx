import { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, duration = 2, suffix = '', prefix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let startTime = null;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function (easeOutQuart)
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCount(easeProgress * end);
        
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
    <div ref={ref} className="font-heading font-bold text-5xl md:text-7xl text-text drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
      {prefix}{count.toFixed(decimals)}{suffix}
    </div>
  );
};

const Performance = ({ selectedVehicle }) => {
  const perf = selectedVehicle.performance;
  
  const stats = [
    { label: "Horsepower", end: perf.hp, suffix: perf.hpSuffix, color: "text-primary" },
    { label: "KM Range", end: perf.range, color: "text-secondary" },
    { label: "0-100 km/h (Sec)", end: perf.acceleration, decimals: 1, prefix: perf.accelPrefix, color: "text-accent" },
    { label: "Technology", value: perf.tech, isText: true, color: "text-primary" }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-[#080b1f]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-background to-background pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            Uncompromising <span className="text-gradient">Performance</span>
          </motion.h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedVehicle.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={`${selectedVehicle.id}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-panel rounded-3xl p-8 flex flex-col items-center justify-center text-center group hover:bg-surface-hover transition-colors"
              >
                <div className="mb-4">
                  {stat.isText ? (
                    <div className="font-heading font-bold text-3xl md:text-4xl text-text drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                      {stat.value}
                    </div>
                  ) : (
                    <Counter 
                      key={`${selectedVehicle.id}-counter-${index}`}
                      end={stat.end} 
                      suffix={stat.suffix} 
                      prefix={stat.prefix} 
                      decimals={stat.decimals} 
                    />
                  )}
                </div>
                <h3 className={`text-sm font-semibold tracking-widest uppercase ${stat.color}`}>
                  {stat.label}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Performance;
