import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="glowing-orb top-1/4 left-1/4"></div>
      <div className="glowing-orb bottom-1/4 right-1/4" style={{ background: 'rgba(0, 229, 255, 0.15)', animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
            DRIVE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">FUTURE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto font-light">
            Experience the apex of automotive engineering. Intelligent, sustainable, and breathtakingly fast.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="primary">Explore Models</Button>
            <Button variant="outline">Custom Build</Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest mb-2">Scroll to discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
