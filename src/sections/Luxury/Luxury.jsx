import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';

const Luxury = () => {
  const features = [
    "Executive Lounge Configuration",
    "Premium Leather & Sustainable Materials",
    "Dynamic Ambient Lighting",
    "Unrivaled Rear Passenger Comfort",
    "Intelligent Climate Control"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-accent font-semibold tracking-widest uppercase mb-2">Prestige & Leos</h3>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                Redefining <span className="text-gradient">Luxury</span>
              </h2>
              <p className="text-text-muted text-lg mb-8 leading-relaxed">
                Step into a sanctuary of tranquility and supreme craftsmanship. Our flagship interiors are meticulously designed to provide an unparalleled travel experience, merging traditional luxury with next-generation technology.
              </p>

              <ul className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-text"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-surface-hover border border-glass-border flex items-center justify-center mr-4">
                      <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(123,97,255,0.8)]"></span>
                    </span>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <Button>
                Explore Interiors
              </Button>
            </motion.div>
          </div>

          {/* Visuals */}
          <div className="lg:w-1/2 order-1 lg:order-2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] w-full rounded-3xl overflow-hidden glass-panel group"
            >
              {/* Luxury Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20"></div>
                <span className="text-secondary/40 font-heading tracking-widest uppercase text-xl z-10">
                  Interior Showcase View
                </span>
                
                {/* Simulated ambient lighting */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/30 blur-[60px] group-hover:bg-accent/40 transition-colors duration-1000"></div>
                <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-secondary/30 blur-[80px]"></div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Luxury;
