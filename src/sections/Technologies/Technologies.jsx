import { motion } from 'framer-motion';
import SectionTitle from '../../components/ui/SectionTitle';
import TechnologyCard from './TechnologyCard';
import { technologies } from '../../data/technologies';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Technologies = () => {
  const [ref, isInView] = useScrollAnimation();

  return (
    <section id="technologies" className="py-24 bg-black/50 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Advanced Innovation" 
          subtitle="Powered by proprietary technology, every Apex vehicle is a marvel of modern science."
        />
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TechnologyCard tech={tech} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
