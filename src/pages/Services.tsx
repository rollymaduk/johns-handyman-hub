import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Image } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { getServicesContent } from '@/utils/githubContent';
import { getLucideIcon } from '@/utils/iconUtils';
import { ServicesPageContent } from '@/types/content';

const Services = () => {
  const [content, setContent] = useState<ServicesPageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    async function loadContent() {
      try {
        const servicesContent = await getServicesContent();
        setContent(servicesContent);
      } catch (error) {
        console.error('Failed to load services content:', error);
      } finally {
        setLoading(false);
      }
    }

    loadContent();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 flex items-center justify-center">
          <div className="animate-pulse text-lg">Loading services content...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!content) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 flex items-center justify-center">
          <div className="text-lg text-red-500">Failed to load content. Please try again later.</div>
        </main>
        <Footer />
      </div>
    );
  }

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
                {content.heroTitle}
              </h1>
              <p className="text-gray-600 text-lg">
                {content.heroDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.services.map((service, index) => {
                const IconComponent = getLucideIcon(service.icon);
                return (
                  <ServiceCard 
                    key={index}
                    title={service.title} 
                    description={service.description}
                    icon={<IconComponent size={28} />}
                    delay={service.delay}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        {content.featuredServices.map((service, index) => (
          <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <div className="rounded-xl overflow-hidden shadow-xl">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-6 stagger-animation">
                      <span className="text-brand-green text-sm font-medium uppercase tracking-wider">Featured Service</span>
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark">
                        {service.title}
                      </h2>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                      
                      <div className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <CheckCircle size={20} className="text-brand-green mr-3 mt-1 flex-shrink-0" />
                            <p className="text-gray-600">{feature}</p>
                          </div>
                        ))}
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
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1 space-y-6 stagger-animation">
                      <span className="text-brand-green text-sm font-medium uppercase tracking-wider">Featured Service</span>
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark">
                        {service.title}
                      </h2>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                      
                      <div className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <CheckCircle size={20} className="text-brand-green mr-3 mt-1 flex-shrink-0" />
                            <p className="text-gray-600">{feature}</p>
                          </div>
                        ))}
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
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        ))}

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
              {content.processSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover-scale relative">
                  <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto mb-4 font-display font-bold text-xl">{index + 1}</div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-brand-dark">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  {index < content.processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2">
                      <ArrowRight size={24} className="text-brand-green" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-green bg-opacity-10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6">
                {content.ctaTitle}
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                {content.ctaDescription}
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
