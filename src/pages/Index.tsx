import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Home, Image, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import WorkCarousel from '@/components/WorkCarousel';
import Layout from '@/components/Layout';
import { getLocalBusinessSchema } from '@/utils/structuredData';
import { getHomeContent } from '@/utils/githubContent';
import { getLucideIcon } from '@/utils/iconUtils';
import { HomePageContent } from '@/types/content';

const Index = () => {
  const [content, setContent] = useState<HomePageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    async function loadContent() {
      try {
        const homeContent = await getHomeContent();
        setContent(homeContent);
      } catch (error) {
        console.error('Failed to load home content:', error);
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
          <div className="animate-pulse text-lg">Loading content...</div>
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
    <Layout 
      title="Professional Handyman Services" 
      description="Quality home repair and maintenance services for homeowners and businesses. Free estimates and satisfaction guaranteed."
      structuredData={getLocalBusinessSchema()}
    >
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          
          {/* Services Section */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16 stagger-animation">
                <span className="text-brand-green text-sm font-medium uppercase tracking-wider">Our Services</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">{content.servicesTitle}</h2>
                <p className="text-gray-600">
                  {content.servicesDescription}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.featuredServices.map((service, index) => {
                  const IconComponent = getLucideIcon(service.icon);
                  return (
                    <ServiceCard 
                      key={index}
                      title={service.title} 
                      description={service.description}
                      icon={<IconComponent size={28} />}
                      delay={(index + 1) * 100}
                    />
                  );
                })}
              </div>
              
              <div className="text-center mt-12">
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-brand-green hover:text-brand-dark transition-colors font-medium"
                >
                  View All Services <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </section>
          
          {/* About Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="space-y-6 stagger-animation">
                    <span className="text-brand-green text-sm font-medium uppercase tracking-wider">About Us</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark">
                      {content.aboutTitle}
                    </h2>
                    {content.aboutDescription.map((paragraph, index) => (
                      <p key={index} className="text-gray-600">
                        {paragraph}
                      </p>
                    ))}
                    <div>
                      <Link 
                        to="/about" 
                        className="inline-flex items-center bg-brand-green text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium hover-scale"
                      >
                        Learn More <ArrowRight size={18} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-full h-full rounded-xl border-2 border-brand-green transform rotate-3"></div>
                    <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                      <img 
                        src={content.aboutImage} 
                        alt="About John's Handyman Services" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Work Showcase */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-brand-green text-sm font-medium uppercase tracking-wider">Our Work</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">{content.galleryTitle}</h2>
                <p className="text-gray-600">
                  {content.galleryDescription}
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <WorkCarousel images={content.workImages} />
              </div>
              
              <div className="text-center mt-12">
                <Link 
                  to="/gallery" 
                  className="inline-flex items-center bg-transparent border-2 border-brand-green text-brand-dark px-6 py-3 rounded-md hover:bg-brand-green hover:bg-opacity-10 transition-all duration-300 font-medium hover-scale"
                >
                  View Full Gallery <Image size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </section>
          
          {/* Testimonials */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-brand-green text-sm font-medium uppercase tracking-wider">Testimonials</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">{content.testimonialsTitle}</h2>
                <p className="text-gray-600">
                  {content.testimonialsDescription}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content.testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl shadow-md p-8 hover-scale"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <svg className="h-8 w-8 text-brand-green mb-4" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                    <div>
                      <p className="font-bold text-brand-dark">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-20 bg-brand-green bg-opacity-10">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto stagger-animation">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6">
                  {content.ctaTitle}
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  {content.ctaDescription}
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-brand-green text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium text-lg hover-scale"
                >
                  Get in Touch <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default Index;
