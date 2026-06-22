import { motion } from 'framer-motion';
import SectionTitle from '../../components/ui/SectionTitle';
import Counter from '../../components/ui/Counter';
import { statistics } from '../../data/statistics';

const Performance = () => {
  return (
    <section id="performance" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Unleash the Power" 
          subtitle="Apex engineering pushes the boundaries of what an electric vehicle can achieve."
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {statistics.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="text-center"
            >
              <Counter end={stat.value} suffix={stat.suffix} />
              <p className="text-gray-400 mt-2 text-sm uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performance;
