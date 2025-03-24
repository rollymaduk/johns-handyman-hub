
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'bathroom',
      image: '/lovable-uploads/421db153-9183-441f-8951-5e2dce2b4dda.png',
      title: 'Modern Bathroom Remodel',
      description: 'Complete bathroom renovation with custom tile work.'
    },
    {
      id: 2,
      category: 'bathroom',
      image: '/lovable-uploads/8556ce32-651d-41d0-8f0d-5b1635194eb3.png',
      title: 'Luxury Bathroom Design',
      description: 'Elegant bathroom remodel with marble finishes.'
    },
    {
      id: 3,
      category: 'roofing',
      image: '/lovable-uploads/f88be52a-363f-4c30-b60c-ff78f9a20ab8.png',
      title: 'Roof Repair',
      description: 'Professional roof repair and waterproofing.'
    },
    {
      id: 4,
      category: 'painting',
      image: '/lovable-uploads/431254c2-b7c1-4cae-9b06-653c68c55acc.png',
      title: 'Exterior Painting',
      description: 'Fresh exterior paint job for improved curb appeal.'
    },
    {
      id: 5,
      category: 'exterior',
      image: '/lovable-uploads/cfa9f7f9-10f8-4d05-a1d5-85d68430d8a9.png',
      title: 'Home Exterior',
      description: 'Exterior maintenance and repairs.'
    },
    {
      id: 6,
      category: 'renovation',
      image: '/lovable-uploads/94e5ca79-040d-481e-8763-7a449c5b41ce.png',
      title: 'Home Renovation',
      description: 'Interior renovation and structural improvements.'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'bathroom', label: 'Bathroom' },
    { id: 'roofing', label: 'Roofing' },
    { id: 'painting', label: 'Painting' },
    { id: 'renovation', label: 'Renovation' },
    { id: 'exterior', label: 'Exterior' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gray-50 pt-16 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center stagger-animation">
              <span className="bg-brand-green bg-opacity-10 text-brand-green px-4 py-1 rounded-full text-sm font-medium">Our Work</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-brand-dark">
                Project Gallery
              </h1>
              <p className="text-gray-600 text-lg">
                Browse through our completed projects and see the quality of our workmanship.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-5 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-brand-green text-white shadow-md'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div 
                  key={item.id} 
                  className="image-card bg-white rounded-xl shadow-md overflow-hidden hover-scale"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-brand-dark mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <span className="inline-block px-3 py-1 bg-brand-green bg-opacity-10 text-brand-green rounded-full text-sm font-medium capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No projects found in this category. Please try another filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-green text-sm font-medium uppercase tracking-wider">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-brand-dark">
                From Concept to Completion
              </h2>
              <p className="text-gray-600">
                Every project follows our detailed process to ensure quality results and customer satisfaction.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <h3 className="text-xl font-display font-semibold text-brand-dark mb-2">Initial Consultation</h3>
                    <p className="text-gray-600">We meet with you to understand your vision, requirements, and budget.</p>
                  </div>
                  <div className="md:w-1/2 md:pl-12 relative">
                    <div className="hidden md:block absolute left-0 top-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-brand-green"></div>
                    <img 
                      src="/lovable-uploads/94e5ca79-040d-481e-8763-7a449c5b41ce.png" 
                      alt="Initial Consultation" 
                      className="rounded-xl shadow-md w-full"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:order-2">
                    <h3 className="text-xl font-display font-semibold text-brand-dark mb-2">Detailed Planning</h3>
                    <p className="text-gray-600">We create a comprehensive plan including materials, timeline, and detailed pricing.</p>
                  </div>
                  <div className="md:w-1/2 md:pl-12 relative md:order-1 md:text-right">
                    <div className="hidden md:block absolute right-0 top-0 transform translate-x-1/2 w-6 h-6 rounded-full bg-brand-green"></div>
                    <img 
                      src="/lovable-uploads/8556ce32-651d-41d0-8f0d-5b1635194eb3.png" 
                      alt="Detailed Planning" 
                      className="rounded-xl shadow-md w-full"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <h3 className="text-xl font-display font-semibold text-brand-dark mb-2">Expert Execution</h3>
                    <p className="text-gray-600">Our skilled team completes your project with precision and craftsmanship.</p>
                  </div>
                  <div className="md:w-1/2 md:pl-12 relative">
                    <div className="hidden md:block absolute left-0 top-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-brand-green"></div>
                    <img 
                      src="/lovable-uploads/431254c2-b7c1-4cae-9b06-653c68c55acc.png" 
                      alt="Expert Execution" 
                      className="rounded-xl shadow-md w-full"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:order-2">
                    <h3 className="text-xl font-display font-semibold text-brand-dark mb-2">Final Walkthrough</h3>
                    <p className="text-gray-600">We review the completed project together to ensure your complete satisfaction.</p>
                  </div>
                  <div className="md:w-1/2 md:pl-12 relative md:order-1 md:text-right">
                    <div className="hidden md:block absolute right-0 top-0 transform translate-x-1/2 w-6 h-6 rounded-full bg-brand-green"></div>
                    <img 
                      src="/lovable-uploads/421db153-9183-441f-8951-5e2dce2b4dda.png" 
                      alt="Final Walkthrough" 
                      className="rounded-xl shadow-md w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-green bg-opacity-10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto stagger-animation">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Contact us today to discuss your project and get a free estimate.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-brand-green text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium text-lg hover-scale"
              >
                Start Your Project <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
