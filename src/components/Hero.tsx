
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-100 flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 lg:py-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 stagger-animation">
            <div>
              <span className="bg-brand-green bg-opacity-10 text-brand-green px-4 py-1 rounded-full text-sm font-medium">Professional & Reliable</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-brand-dark hero-text-shadow">
              Quality Handyman <br />
              <span className="text-brand-green">Services</span> You <br />
              Can Trust
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Professional repairs, renovations, and home improvement services delivered with excellence and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-brand-green text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium text-center hover-scale flex items-center justify-center"
              >
                Get Free Quote <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="bg-transparent border-2 border-brand-green text-brand-dark px-8 py-4 rounded-md hover:bg-brand-green hover:bg-opacity-10 transition-all duration-300 font-medium text-center hover-scale"
              >
                Our Services
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-brand-green rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
              
              <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10 transform transition-all duration-500 hover:scale-[1.02]">
                <img 
                  src="/lovable-uploads/b15e162b-7952-4a92-a11e-4fb6a75cdffb.png" 
                  alt="Handyman service" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
