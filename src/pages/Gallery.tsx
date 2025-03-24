
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getGalleryContent } from '@/utils/githubContent';
import { GalleryPageContent } from '@/types/content';

const Gallery = () => {
  const [content, setContent] = useState<GalleryPageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);

    async function loadContent() {
      try {
        const galleryContent = await getGalleryContent();
        setContent(galleryContent);
      } catch (error) {
        console.error('Failed to load gallery content:', error);
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
          <div className="animate-pulse text-lg">Loading gallery content...</div>
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

  const filteredItems = activeFilter === 'all' 
    ? content.galleryItems 
    : content.galleryItems.filter(item => item.category === activeFilter);

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
                {content.heroTitle}
              </h1>
              <p className="text-gray-600 text-lg">
                {content.heroDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {content.filters.map(filter => (
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
                {content.processTitle}
              </h2>
              <p className="text-gray-600">
                {content.processDescription}
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {content.processItems.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center">
                    {index % 2 === 0 ? (
                      <>
                        <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                          <h3 className="text-xl font-display font-semibold text-brand-dark mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                        <div className="md:w-1/2 md:pl-12 relative">
                          <div className="hidden md:block absolute left-0 top-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-brand-green"></div>
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="rounded-xl shadow-md w-full"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:order-2">
                          <h3 className="text-xl font-display font-semibold text-brand-dark mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                        <div className="md:w-1/2 md:pl-12 relative md:order-1 md:text-right">
                          <div className="hidden md:block absolute right-0 top-0 transform translate-x-1/2 w-6 h-6 rounded-full bg-brand-green"></div>
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="rounded-xl shadow-md w-full"
                          />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
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
