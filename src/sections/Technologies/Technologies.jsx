import { motion } from 'framer-motion';
import { FaMicrochip, FaRobot, FaWind, FaWifi, FaShieldAlt, FaBatteryFull } from 'react-icons/fa';

const techItems = [
  {
    icon: <FaMicrochip />,
    title: "Hybrid Powertrain Systems",
    description: "Seamless integration of electric efficiency and combustion power for uncompromised performance.",
    color: "from-primary/20 to-transparent",
    iconColor: "text-primary"
  },
  {
    icon: <FaRobot />,
    title: "AI Driver Assistance",
    description: "Next-generation neural networks processing environmental data in real-time for predictive safety.",
    color: "from-secondary/20 to-transparent",
    iconColor: "text-secondary"
  },
  {
    icon: <FaWind />,
    title: "Advanced Aerodynamics",
    description: "Active aero elements that adapt to speed and driving conditions to maximize efficiency and downforce.",
    color: "from-accent/20 to-transparent",
    iconColor: "text-accent"
  },
  {
    icon: <FaWifi />,
    title: "Smart Connectivity",
    description: "Always online with 5G capabilities, offering over-the-air updates and vehicle-to-everything (V2X) communication.",
    color: "from-primary/20 to-transparent",
    iconColor: "text-primary"
  },
  {
    icon: <FaShieldAlt />,
    title: "Intelligent Safety Systems",
    description: "A 360-degree shield of sensors, LiDAR, and cameras ensuring maximum passenger protection.",
    color: "from-secondary/20 to-transparent",
    iconColor: "text-secondary"
  },
  {
    icon: <FaBatteryFull />,
    title: "Next Gen Battery Tech",
    description: "Solid-state battery architecture providing higher energy density, faster charging, and extended lifespans.",
    color: "from-accent/20 to-transparent",
    iconColor: "text-accent"
  }
];

const Technologies = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            Pioneering <span className="text-gradient">Technology</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-muted max-w-2xl mx-auto"
          >
            Engineering the future of mobility through continuous innovation and cutting-edge intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techItems.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-panel rounded-2xl p-8 relative overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${tech.color} rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className={`text-4xl mb-6 ${tech.iconColor} drop-shadow-[0_0_10px_currentColor]`}>
                {tech.icon}
              </div>
              
              <h3 className="text-xl font-bold font-heading mb-4 text-text">
                {tech.title}
              </h3>
              
              <p className="text-text-muted text-sm leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
