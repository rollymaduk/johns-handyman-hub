
import { NavLink } from 'react-router-dom';
import { Phone, Mail, Home, ArrowRight, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/images/logo.png"
                alt="JohnPainter's Home Services Logo"
                className="h-12 w-auto"
              />
              <span className="ml-2 text-xl font-display font-bold text-white">John Painters</span>
            </div>
            <p className="text-gray-400 mt-4">
              Professional handyman services with quality workmanship and attention to detail.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/services" className="text-gray-400 hover:text-brand-green transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Interior Painting
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-400 hover:text-brand-green transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Bathroom Remodeling
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-400 hover:text-brand-green transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Roof Repairs
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-400 hover:text-brand-green transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Home Renovations
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-400 hover:text-brand-green transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-400 hover:text-brand-green transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="text-gray-400 hover:text-brand-green transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Our Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-400 hover:text-brand-green transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Home size={20} className="text-brand-green mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Weiland Cresent, Blubosrand, Randburg 2188, South Africa</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-brand-green mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+27740502895</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-brand-green mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">andrieschibememe@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="text-brand-green mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Mon-Fri: 8am-9pm<br />
                  Sat: 9am-2pm<br />
                  Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {currentYear} John's Handyman Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
