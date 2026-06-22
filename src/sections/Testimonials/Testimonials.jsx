import { motion } from 'framer-motion';
import SectionTitle from '../../components/ui/SectionTitle';
import Card from '../../components/ui/Card';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  return (
    <section className="py-24 bg-black/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Driver Experiences" 
          subtitle="Don't just take our word for it. Hear from the pioneers driving the future."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="h-full flex flex-col">
                <div className="mb-6 text-primary">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.41 14.414H10V3H24V14.414L19.417 21H14.017ZM0.0170002 21L2.41 14.414H-9.53674e-07V3H14V14.414L9.417 21H0.0170002Z" />
                  </svg>
                </div>
                <p className="text-gray-300 italic mb-8 flex-grow">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 mr-4 border-2 border-primary/50"></div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
