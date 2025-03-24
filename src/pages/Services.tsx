
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Home, ArrowRight, CheckCircle, Image } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gray-50 pt-16 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center stagger-animation">
              <span className="bg-brand-green bg-opacity-10 text-brand-green px-4 py-1 rounded-full text-sm font-medium">Our Services</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-brand-dark">
                Quality Handyman Services
              </h1>
              <p className="text-gray-600 text-lg">
                We offer a comprehensive range of handyman services to meet all your home improvement needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                title="Interior Painting" 
                description="Transform your home's interior with our professional painting services. We use premium paints and deliver flawless finishes."
                icon={<Home size={28} />}
                delay={100}
              />
              <ServiceCard 
                title="Exterior Painting" 
                description="Enhance your home's curb appeal with our exterior painting services. Weather-resistant finishes that last for years."
                icon={<Home size={28} />}
                delay={200}
              />
              <ServiceCard 
                title="Bathroom Remodeling" 
                description="From simple updates to complete renovations, we can transform your bathroom into a beautiful and functional space."
                icon={<Wrench size={28} />}
                delay={300}
              />
              <ServiceCard 
                title="Roof Repairs" 
                description="Expert roof repair services to fix leaks, replace damaged shingles, and protect your home from the elements."
                icon={<Home size={28} />}
                delay={400}
              />
              <ServiceCard 
                title="Home Renovations" 
                description="Comprehensive home renovation services to update, improve, and transform your living spaces."
                icon={<Wrench size={28} />}
                delay={500}
              />
              <ServiceCard 
                title="General Repairs" 
                description="From fixing leaky faucets to repairing drywall, we handle all types of general home repairs and maintenance."
                icon={<Wrench size={28} />}
                delay={600}
              />
            </div>
          </div>
        </section>

        {/* Featured Service */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/421db153-9183-441f-8951-5e2dce2b4dda.png" 
                    alt="Bathroom Remodeling" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="space-y-6 stagger-animation">
                <span className="text-brand-green text-sm font-medium uppercase tracking-wider">Featured Service</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark">
                  Bathroom Remodeling
                </h2>
                <p className="text-gray-600">
                  Our bathroom remodeling service transforms outdated bathrooms into beautiful, functional spaces. From simple updates to complete renovations, we handle every aspect of your bathroom project with precision and care.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-brand-green mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Custom tile installation for floors, walls, and showers</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-brand-green mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Fixture replacement and upgrades (sinks, toilets, showers)</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-brand-green mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Vanity installation and custom cabinetry</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-brand-green mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Plumbing and electrical updates to code</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center bg-brand-green text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium hover-scale"
                  >
                    Request a Quote <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Another Featured Service */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6 stagger-animation">
                <span className="text-brand-green text-sm font-medium uppercase tracking-wider">Featured Service</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark">
                  Professional Painting
                </h2>
                <p className="text-gray-600">
                  Our professional painting services cover both interior and exterior painting needs. We use premium paints and materials to ensure a beautiful, long-lasting finish for your home.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-brand-green mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Interior painting for walls, ceilings, trim, and doors</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-brand-green mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Exterior painting for siding, trim, and decks</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-brand-green mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Proper surface preparation and priming</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-brand-green mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Color consultation and premium paint options</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center bg-brand-green text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium hover-scale"
                  >
                    Request a Quote <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/431254c2-b7c1-4cae-9b06-653c68c55acc.png" 
                    alt="Professional Painting" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-green text-sm font-medium uppercase tracking-wider">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-brand-dark">
                How We Work
              </h2>
              <p className="text-gray-600">
                Our simple and transparent process ensures a smooth experience from start to finish.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center hover-scale relative">
                <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto mb-4 font-display font-bold text-xl">1</div>
                <h3 className="text-xl font-display font-semibold mb-3 text-brand-dark">Consultation</h3>
                <p className="text-gray-600">We discuss your project needs, timeline, and budget.</p>
                
                <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2">
                  <ArrowRight size={24} className="text-brand-green" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center hover-scale relative">
                <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto mb-4 font-display font-bold text-xl">2</div>
                <h3 className="text-xl font-display font-semibold mb-3 text-brand-dark">Quote</h3>
                <p className="text-gray-600">We provide a detailed quote with transparent pricing.</p>
                
                <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2">
                  <ArrowRight size={24} className="text-brand-green" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center hover-scale relative">
                <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto mb-4 font-display font-bold text-xl">3</div>
                <h3 className="text-xl font-display font-semibold mb-3 text-brand-dark">Execution</h3>
                <p className="text-gray-600">We complete your project with skill and attention to detail.</p>
                
                <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2">
                  <ArrowRight size={24} className="text-brand-green" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center hover-scale">
                <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto mb-4 font-display font-bold text-xl">4</div>
                <h3 className="text-xl font-display font-semibold mb-3 text-brand-dark">Satisfaction</h3>
                <p className="text-gray-600">We ensure you're completely satisfied with the results.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-green bg-opacity-10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Contact us today for a free consultation and estimate. We're here to help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-brand-green text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium hover-scale flex items-center justify-center"
                >
                  Contact Us <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link 
                  to="/gallery" 
                  className="bg-transparent border-2 border-brand-green text-brand-dark px-8 py-4 rounded-md hover:bg-brand-green hover:bg-opacity-10 transition-all duration-300 font-medium hover-scale flex items-center justify-center"
                >
                  View Our Work <Image size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
