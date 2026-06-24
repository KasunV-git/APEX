import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const VehicleCard = ({ vehicle, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="glass-panel rounded-2xl overflow-hidden cursor-pointer group flex flex-col h-full"
      onClick={() => onClick && onClick(vehicle)}
    >
      <div className="relative h-48 w-full bg-surface overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={`${vehicle.name} model`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-1">{vehicle.category}</p>
          <h3 className="text-2xl font-bold font-heading">{vehicle.name}</h3>
        </div>
        
        <p className="text-text-muted text-sm mb-6 flex-grow line-clamp-3">
          {vehicle.overview}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {vehicle.highlights.slice(0, 2).map((highlight, index) => (
              <span key={index} className="text-xs py-1 px-3 rounded-full bg-surface-hover text-text-muted border border-glass-border">
                {highlight}
              </span>
            ))}
          </div>
          
          <button className="flex items-center text-accent font-semibold group-hover:text-primary transition-colors">
            <span className="mr-2">Learn More</span>
            <FaArrowRight className="text-sm transform group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleCard;
