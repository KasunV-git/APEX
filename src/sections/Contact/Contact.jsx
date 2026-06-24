import { motion } from 'framer-motion';
import { 
  FaBuilding, 
  FaHeadset, 
  FaMapMarkerAlt, 
  FaUser, 
  FaEnvelope, 
  FaCar, 
  FaCommentDots, 
  FaChevronDown, 
  FaArrowRight, 
  FaLock 
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(0,229,255,0.2)] w-max">
              CONNECT WITH APEX
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Connect with <span className="text-gradient">Apex</span>
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-lg leading-relaxed">
              Experience the future of mobility. Connect with our concierge specialists to explore, configure, and reserve your Apex vehicle.
            </p>

            <div className="space-y-6">
              {/* Headquarters Card */}
              <div className="glass-panel p-6 rounded-2xl relative group hover:border-primary/40 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-surface border border-glass-border flex items-center justify-center flex-shrink-0 text-primary shadow-[0_0_15px_rgba(0,229,255,0.15)] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all">
                    <FaBuilding className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 tracking-wide">Global Headquarters</h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      Apex Innovation Center<br />
                      100 Future Drive<br />
                      Silicon Valley, CA 94025, USA
                    </p>
                  </div>
                </div>
              </div>

              {/* Concierge Card */}
              <div className="glass-panel p-6 rounded-2xl relative group hover:border-primary/40 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-surface border border-glass-border flex items-center justify-center flex-shrink-0 text-primary shadow-[0_0_15px_rgba(0,229,255,0.15)] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all">
                    <FaHeadset className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 tracking-wide">Concierge Assistance</h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      Our specialists are available to help you explore, configure, and reserve your Apex vehicle.
                    </p>
                  </div>
                </div>
              </div>

              {/* Showrooms */}
              <div className="pt-4">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2 tracking-wide">
                  <FaMapMarkerAlt className="text-primary" /> Future Showrooms
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['Los Angeles', 'New York', 'London', 'Dubai', 'Tokyo'].map((city) => (
                    <span 
                      key={city} 
                      className="px-4 py-2 rounded-full border border-glass-border bg-surface hover:bg-primary/10 hover:text-primary hover:border-primary/50 cursor-pointer transition-all duration-300 text-sm text-text-muted font-medium"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            {/* Soft background glow behind the form */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-transparent to-primary/5 rounded-[2.5rem] blur-xl opacity-50 pointer-events-none"></div>
            
            <div className="glass-panel p-8 md:p-12 rounded-[2rem] relative z-10 border border-white/5 bg-[#0a0f1f]/80 backdrop-blur-xl shadow-2xl">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                
                <div className="relative group">
                  <label className="block text-text-muted text-xs font-bold uppercase tracking-widest mb-2 pl-1 group-focus-within:text-primary transition-colors">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted group-focus-within:text-primary transition-colors z-10">
                      <FaUser />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Your Full Name" 
                      className="w-full bg-[#050816]/70 border border-glass-border rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-text-muted/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-primary/5 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="relative group">
                  <label className="block text-text-muted text-xs font-bold uppercase tracking-widest mb-2 pl-1 group-focus-within:text-primary transition-colors">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted group-focus-within:text-primary transition-colors z-10">
                      <FaEnvelope />
                    </div>
                    <input 
                      type="email" 
                      placeholder="name@example.com" 
                      className="w-full bg-[#050816]/70 border border-glass-border rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-text-muted/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-primary/5 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-text-muted text-xs font-bold uppercase tracking-widest mb-2 pl-1 group-focus-within:text-primary transition-colors">Vehicle Interest</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted group-focus-within:text-primary transition-colors z-10">
                      <FaCar />
                    </div>
                    <select className="w-full bg-[#050816]/70 border border-glass-border rounded-xl pl-11 pr-10 py-3.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-primary/5 transition-all duration-300 appearance-none relative z-0">
                      <option value="" className="bg-[#0a0f1f]">Select a Vehicle</option>
                      <option value="Anora" className="bg-[#0a0f1f]">Anora</option>
                      <option value="Electra" className="bg-[#0a0f1f]">Electra</option>
                      <option value="Prestige" className="bg-[#0a0f1f]">Prestige</option>
                      <option value="Leos" className="bg-[#0a0f1f]">Leos</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-text-muted z-10">
                      <FaChevronDown />
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-text-muted text-xs font-bold uppercase tracking-widest mb-2 pl-1 group-focus-within:text-primary transition-colors">Message (Optional)</label>
                  <div className="relative">
                    <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-text-muted group-focus-within:text-primary transition-colors z-10">
                      <FaCommentDots />
                    </div>
                    <textarea 
                      placeholder="How can we assist you?" 
                      rows="4"
                      className="w-full bg-[#050816]/70 border border-glass-border rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-text-muted/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-primary/5 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-4">
                  <motion.button 
                    whileHover={{ y: -2, boxShadow: '0 10px 30px -10px rgba(0,229,255,0.6)' }}
                    whileTap={{ y: 1 }}
                    className="w-full h-[56px] rounded-full bg-[#00E5FF] text-[#050816] font-bold text-[15px] tracking-wide flex items-center justify-center gap-2 hover:bg-[#33ebff] transition-colors relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Request Information <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </motion.button>
                  
                  <p className="text-center text-text-muted/60 text-xs mt-6 flex items-center justify-center gap-1.5">
                    <FaLock className="text-[10px] text-primary/70" /> Your information is secure and will never be shared.
                  </p>
                </div>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
