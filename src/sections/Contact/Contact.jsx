import Button from '../../components/ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full filter blur-[100px]"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Stay Connected</h2>
              <p className="text-gray-400 mb-8 max-w-md">
                Join our exclusive mailing list to receive the latest updates on new models, technological breakthroughs, and special events.
              </p>
              
              <div className="space-y-4 text-gray-300">
                <p><strong>Address:</strong> 1 Apex Way, Silicon Valley, CA</p>
                <p><strong>Email:</strong> future@apexmotors.com</p>
                <p><strong>Phone:</strong> +1 (800) 555-APEX</p>
              </div>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <Button variant="primary" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
