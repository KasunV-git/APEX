import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Connect with <span className="text-gradient">Apex</span>
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-lg">
              Experience the future of mobility. Contact our concierge team to schedule a private viewing or configure your Apex vehicle.
            </p>

            <div className="space-y-8 mb-12">
              <div>
                <h4 className="text-accent text-sm font-bold uppercase tracking-widest mb-2">Global Headquarters</h4>
                <p className="text-text">
                  Apex Innovation Center<br />
                  100 Future Drive<br />
                  Silicon Valley, CA 94025
                </p>
              </div>
              
              <div>
                <h4 className="text-accent text-sm font-bold uppercase tracking-widest mb-2">Future Showrooms</h4>
                <div className="flex gap-4 text-text-muted">
                  <span>Los Angeles</span>
                  <span className="text-glass-border">|</span>
                  <span>New York</span>
                  <span className="text-glass-border">|</span>
                  <span>London</span>
                  <span className="text-glass-border">|</span>
                  <span>Dubai</span>
                  <span className="text-glass-border">|</span>
                  <span>Tokyo</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-text hover:text-primary hover:border-primary hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-300"
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-3xl"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-text-muted text-sm uppercase tracking-wider mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  className="w-full bg-surface-hover border border-glass-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-text-muted text-sm uppercase tracking-wider mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-surface-hover border border-glass-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-text-muted text-sm uppercase tracking-wider mb-2">Interest</label>
                <select className="w-full bg-surface-hover border border-glass-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none">
                  <option>Select a Vehicle</option>
                  <option>Anora</option>
                  <option>Electra</option>
                  <option>Prestige</option>
                  <option>Leos</option>
                </select>
              </div>

              <button className="w-full bg-primary text-background font-bold uppercase tracking-wider py-4 rounded-lg mt-4 hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                Request Information
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
