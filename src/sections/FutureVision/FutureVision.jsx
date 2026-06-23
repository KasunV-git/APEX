import { motion } from 'framer-motion';

const FutureVision = () => {
  const visionPillars = [
    { title: "Sustainable Transportation", delay: 0.1 },
    { title: "AI Mobility Networks", delay: 0.2 },
    { title: "Smart City Integration", delay: 0.3 },
    { title: "Autonomous Technologies", delay: 0.4 },
    { title: "Carbon Neutral Manufacturing", delay: 0.5 }
  ];

  return (
    <section className="py-24 relative bg-[#03050c]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-8"
          >
            Vision for <span className="text-gradient">Tomorrow</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted mb-16 leading-relaxed"
          >
            At Apex Motors, we don't just anticipate the future—we build it. Our commitment extends beyond creating exceptional vehicles; we are architects of a new era in global mobility.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4">
            {visionPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: pillar.delay, type: 'spring' }}
                className="px-6 py-3 rounded-full border border-primary/30 bg-primary/5 text-text hover:bg-primary/20 hover:border-primary transition-colors cursor-default"
              >
                {pillar.title}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
