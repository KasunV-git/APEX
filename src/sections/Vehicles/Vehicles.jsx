import { motion } from 'framer-motion';
import SectionTitle from '../../components/ui/SectionTitle';
import VehicleCard from './VehicleCard';
import { vehicles } from '../../data/vehicles';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { parallaxContainer } from '../../animations/parallax';

const Vehicles = () => {
  const [ref, isInView] = useScrollAnimation();

  return (
    <section id="vehicles" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Lineup" 
          subtitle="Precision engineering meets unmatched performance. Discover the perfect Apex vehicle for your journey."
        />
        
        <motion.div 
          ref={ref}
          variants={parallaxContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {vehicles.map((vehicle) => (
            <motion.div 
              key={vehicle.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <VehicleCard vehicle={vehicle} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Vehicles;
