import { motion } from 'framer-motion';
import { imagePath } from '../../utils/imagePath';
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
              {/* Luxury Interior Image */}
              <img 
                src={imagePath('images/luxury.png')} 
                alt="Apex Motors Luxury Interior" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Optional overlay for aesthetic blending */}
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none transition-opacity duration-700 group-hover:opacity-0"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Luxury;
