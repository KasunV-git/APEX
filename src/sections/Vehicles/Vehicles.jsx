import { motion, AnimatePresence } from 'framer-motion';
import { vehicles } from '../../data/vehicles';
import VehicleCard from './VehicleCard';
import Button from '../../components/ui/Button';

const Vehicles = ({ selectedVehicle, setSelectedVehicle }) => {
  return (
    <section id="vehicles" className="pt-24 pb-8 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            Our <span className="text-gradient">Vehicles</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-muted max-w-2xl mx-auto"
          >
            Discover our lineup of futuristic, high-performance vehicles designed to elevate your driving experience.
          </motion.p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <VehicleCard 
                vehicle={vehicle} 
                onClick={(v) => {
                  setSelectedVehicle(v);
                  document.getElementById('vehicle-showcase').scrollIntoView({ behavior: 'smooth' });
                }} 
              />
            </motion.div>
          ))}
        </div>

        {/* Vehicle Detail Showcase */}
        <div id="vehicle-showcase" className="scroll-mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-8 lg:p-12"
          >
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {vehicles.map((vehicle) => (
                <button
                  key={vehicle.id}
                  onClick={() => setSelectedVehicle(vehicle)}
                  className={`px-6 py-3 rounded-full font-heading font-semibold transition-all duration-300 ${
                    selectedVehicle.id === vehicle.id 
                      ? 'bg-primary text-background shadow-[0_0_20px_rgba(0,229,255,0.4)]' 
                      : 'bg-surface text-text hover:bg-surface-hover'
                  }`}
                >
                  {vehicle.name}
                </button>
              ))}
            </div>

            {/* Showcase Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVehicle.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image Side */}
                <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-surface to-background border border-glass-border flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-center z-10"
                  >
                    <span className="text-text-muted font-heading tracking-[0.3em] uppercase text-2xl opacity-50 block mb-4">
                      {selectedVehicle.name}
                    </span>
                    <span className="text-primary/40 font-heading tracking-widest uppercase text-xl">
                      3D Model Placeholder
                    </span>
                  </motion.div>
                  {/* Decorative lighting for showcase */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/4 bg-primary/20 blur-[50px]"></div>
                </div>

                {/* Details Side */}
                <div>
                  <h3 className="text-sm font-bold text-accent tracking-widest uppercase mb-2">
                    {selectedVehicle.category}
                  </h3>
                  <h4 className="text-4xl lg:text-5xl font-bold font-heading mb-4">
                    {selectedVehicle.name}
                  </h4>
                  <p className="text-xl text-text-muted mb-6 italic border-l-4 border-primary pl-4">
                    "{selectedVehicle.tagline}"
                  </p>

                  <div className="mb-6">
                    <h5 className="text-lg font-semibold mb-3 border-b border-glass-border pb-2">Key Specifications</h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                      {selectedVehicle.specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-center text-text-muted">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-3 shadow-[0_0_8px_rgba(123,97,255,0.8)]"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="w-full sm:w-auto">
                      Configure
                      <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </Button>
                    <Button className="w-full sm:w-auto">
                      Full Specs
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vehicles;
