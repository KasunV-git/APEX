import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-3 rounded-full font-semibold tracking-wider transition-all duration-300 relative overflow-hidden";
  
  const variants = {
    primary: "bg-primary text-background hover:bg-accent hover:shadow-[0_0_20px_rgba(0,255,179,0.5)]",
    secondary: "bg-transparent border-2 border-secondary text-white hover:bg-secondary/20 hover:shadow-[0_0_20px_rgba(123,97,255,0.4)]",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/10"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default Button;
