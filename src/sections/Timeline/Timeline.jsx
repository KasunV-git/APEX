import { motion } from 'framer-motion';
import SectionTitle from '../../components/ui/SectionTitle';

const Timeline = () => {
  const events = [
    { year: "2020", title: "Inception", description: "Apex Motors is founded with a vision to redefine mobility." },
    { year: "2022", title: "First Prototype", description: "The Apex Alpha is unveiled, showcasing the Quantum Battery." },
    { year: "2024", title: "Model X Launch", description: "Our flagship SUV hits the market, setting new sales records." },
    { year: "2026", title: "Autonomy Level 5", description: "Neural AI Core achieves fully autonomous driving capabilities." }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Journey" 
          subtitle="A relentless pursuit of excellence and innovation over the years."
        />
        
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Timeline Line: left aligned on mobile, centered on md+ */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-white/10 rounded-full"></div>
          
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Empty space for alternating layout on md+ */}
              <div className="hidden md:block w-5/12"></div>
              
              {/* Timeline Dot: left aligned on mobile, centered on md+ */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 mt-1.5 md:mt-0 w-6 h-6 rounded-full bg-primary border-4 border-background z-10"></div>
              
              {/* Content Card */}
              <div className={`w-full md:w-5/12 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-left ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <span className="text-accent font-bold text-xl block mb-2">{event.year}</span>
                <h3 className="text-white font-bold text-lg mb-2">{event.title}</h3>
                <p className="text-gray-400 text-sm">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
