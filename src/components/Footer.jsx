import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { vehicles } from '../data/vehicles';

const Footer = ({ setSelectedVehicle }) => {
  const handleVehicleClick = (e, vehicleName) => {
    e.preventDefault();
    if (setSelectedVehicle) {
      const vehicle = vehicles.find(v => v.name === vehicleName);
      if (vehicle) setSelectedVehicle(vehicle);
    }
    const showcase = document.getElementById('vehicle-showcase');
    if (showcase) {
      showcase.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tighter mb-4 block">
              <span className="text-white">APEX</span>
              <span className="text-primary">MOTORS</span>
            </a>
            <p className="text-gray-400 text-sm">
              Drive the Future. Engineering the next generation of intelligent, sustainable luxury electric vehicles.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Models</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#vehicle-showcase" onClick={(e) => handleVehicleClick(e, 'Anora')} className="hover:text-primary transition-colors">Apex Anora</a></li>
              <li><a href="#vehicle-showcase" onClick={(e) => handleVehicleClick(e, 'Electra')} className="hover:text-primary transition-colors">Apex Electra</a></li>
              <li><a href="#vehicle-showcase" onClick={(e) => handleVehicleClick(e, 'Prestige')} className="hover:text-primary transition-colors">Apex Prestige</a></li>
              <li><a href="#vehicle-showcase" onClick={(e) => handleVehicleClick(e, 'Leos')} className="hover:text-primary transition-colors">Apex Leos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Investors</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaLinkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaYoutube size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Apex Motors. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
