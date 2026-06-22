import { motion } from 'framer-motion';

const Sustainability = () => {
  return (
    <section id="sustainability" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary mb-6">
              Zero Emissions. Infinite Potential.
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              At Apex Motors, we believe that luxury and performance should not come at the cost of our planet. Our manufacturing processes are powered 100% by renewable energy.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Every vehicle we produce incorporates recycled materials and features a closed-loop battery recycling program, ensuring a greener tomorrow.
            </p>
            <ul className="space-y-4">
              {['100% Carbon Neutral Assembly', 'Vegan Leather Interiors', 'Solar Integrated Roof Options'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-200">
                  <div className="w-2 h-2 rounded-full bg-accent mr-4"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-2xl overflow-hidden bg-gray-900 border border-white/10 flex items-center justify-center"
          >
             <div className="text-gray-600 font-bold uppercase tracking-widest text-2xl">
               Sustainability Visual
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
