
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarClass = isScrolled
    ? 'fixed top-0 left-0 right-0 bg-white shadow-md py-2 z-50 transition-all duration-300'
    : 'fixed top-0 left-0 right-0 bg-transparent py-4 z-50 transition-all duration-300';

  return (
    <nav className={navbarClass}>
      <div className="container px-4 mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <img
            src="/uploads/e086db08-770e-45b7-a8c8-92c0f5b5d0c4.png"
            alt="JC's Home Services Logo"
            className="h-12 w-auto"
          />
          <span className="ml-2 text-xl font-display font-bold text-brand-dark">John Painters</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `text-brand-dark hover:text-brand-green transition-colors duration-300 navbar-item ${isActive ? 'active-nav-item' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => 
              `text-brand-dark hover:text-brand-green transition-colors duration-300 navbar-item ${isActive ? 'active-nav-item' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => 
              `text-brand-dark hover:text-brand-green transition-colors duration-300 navbar-item ${isActive ? 'active-nav-item' : ''}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => 
              `text-brand-dark hover:text-brand-green transition-colors duration-300 navbar-item ${isActive ? 'active-nav-item' : ''}`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => 
              `bg-brand-green text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300 ${isActive ? 'bg-opacity-90' : ''}`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-brand-dark focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) => 
                `text-brand-dark hover:text-brand-green transition-colors duration-300 py-2 ${isActive ? 'text-brand-green font-medium' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => 
                `text-brand-dark hover:text-brand-green transition-colors duration-300 py-2 ${isActive ? 'text-brand-green font-medium' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => 
                `text-brand-dark hover:text-brand-green transition-colors duration-300 py-2 ${isActive ? 'text-brand-green font-medium' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) => 
                `text-brand-dark hover:text-brand-green transition-colors duration-300 py-2 ${isActive ? 'text-brand-green font-medium' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className="bg-brand-green text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
