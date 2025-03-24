
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Home, Image, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import WorkCarousel from '@/components/WorkCarousel';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      quote: "John and his team did an amazing job on our bathroom renovation. Professional, punctual, and the quality of work is outstanding.",
      author: "Sarah Johnson",
      role: "Homeowner",
    },
    {
      quote: "Excellent service from start to finish. The roof repair was done efficiently and at a very reasonable price. Highly recommend!",
      author: "Michael Davis",
      role: "Property Manager",
    },
    {
      quote: "The attention to detail in their painting work is remarkable. Our living room looks brand new. Will definitely use their services again.",
      author: "Emily Wilson",
      role: "Homeowner",
    },
  ];

  const workImages = [
    {
      src: "/uploads/421db153-9183-441f-8951-5e2dce2b4dda.png",
      alt: "Bathroom remodeling",
      caption: "Modern Bathroom Remodeling"
    },
    {
      src: "/uploads/f88be52a-363f-4c30-b60c-ff78f9a20ab8.png",
      alt: "Roof repair",
      caption: "Professional Roof Repairs"
    },
    {
      src: "/uploads/8556ce32-651d-41d0-8f0d-5b1635194eb3.png",
      alt: "Bathroom renovation",
      caption: "Luxury Bathroom Renovation"
    },
    {
      src: "/uploads/cfa9f7f9-10f8-4d05-a1d5-85d68430d8a9.png",
      alt: "Exterior house painting",
      caption: "Exterior Home Refinishing"
    },
    {
      src: "/uploads/94e5ca79-040d-481e-8763-7a449c5b41ce.png",
      alt: "Home renovation",
      caption: "Complete Home Renovation"
    },
    {
      src: "/uploads/431254c2-b7c1-4cae-9b06-653c68c55acc.png",
      alt: "Outdoor painting",
      caption: "Professional Exterior Painting"
    },
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 stagger-animation">
              <span className="text-brand-green text-sm font-medium uppercase tracking-wider">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">Professional Handyman Services</h2>
              <p className="text-gray-600">
                We provide comprehensive handyman solutions to transform and maintain your home with quality craftsmanship.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                title="Interior Painting" 
                description="Professional interior painting services with premium materials and perfect finishes."
                icon={<Home size={28} />}
                delay={100}
              />
              <ServiceCard 
                title="Bathroom Remodeling" 
                description="Transform your bathroom with our comprehensive remodeling services from concept to completion."
                icon={<Wrench size={28} />}
                delay={200}
              />
              <ServiceCard 
                title="Roof Repairs" 
                description="Expert roof repair and maintenance services to protect your home from the elements."
                icon={<Home size={28} />}
                delay={300}
              />
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
                    Quality Workmanship & Professional Service
                  </h2>
                  <p className="text-gray-600">
                    With over 15 years of experience in the industry, John's Handyman Services has built a reputation for excellence, reliability, and customer satisfaction. Our team of skilled professionals is dedicated to delivering high-quality workmanship on every project.
                  </p>
                  <p className="text-gray-600">
                    We pride ourselves on our attention to detail, honest pricing, and commitment to completing projects on time and within budget. No job is too big or too small for our experienced team.
                  </p>
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
                      src="/uploads/94e5ca79-040d-481e-8763-7a449c5b41ce.png" 
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
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">See Our Recent Projects</h2>
              <p className="text-gray-600">
                Browse through our portfolio of completed projects and see the quality of our workmanship.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <WorkCarousel images={workImages} />
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
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">What Our Clients Say</h2>
              <p className="text-gray-600">
                We take pride in our work and our clients' satisfaction is our top priority.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
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
                Ready to Transform Your Home?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Contact us today for a free quote on your next home improvement project.
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
  );
};

export default Index;
