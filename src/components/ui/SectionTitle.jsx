import { motion } from 'framer-motion';
import { slideUp } from '../../animations/slideUp';

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <motion.div 
      variants={slideUp}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
