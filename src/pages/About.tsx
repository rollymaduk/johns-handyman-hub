
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAboutContent } from '@/utils/githubContent';
import { AboutPageContent } from '@/types/content';

const About = () => {
  const [content, setContent] = useState<AboutPageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    async function loadContent() {
      try {
        const aboutContent = await getAboutContent();
        console.log('About content:', aboutContent);
        setContent(aboutContent);
      } catch (error) {
        console.error('Failed to load about content:', error);
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
          <div className="animate-pulse text-lg">Loading about page content...</div>
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
              <span className="bg-brand-green bg-opacity-10 text-brand-green px-4 py-1 rounded-full text-sm font-medium">About Us</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-brand-dark">
                {content.heroTitle}
              </h1>
              <p className="text-gray-600 text-lg">
                {content.heroDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative">
                  <img
                    src="/uploads/94e5ca79-040d-481e-8763-7a449c5b41ce.png"
                    alt="About John's Handyman Services"
                    className="rounded-xl shadow-lg w-full object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-brand-green p-6 rounded-xl shadow-lg">
                    <p className="text-white font-display font-bold text-xl">{content.experienceYears}+ Years Experience</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 stagger-animation">
                <span className="text-brand-green text-sm font-medium uppercase tracking-wider">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark">
                  {content?.storyTitle}
                </h2>
                {content?.storyContent?.map((paragraph, index) => (
                  <p key={index} className="text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-green text-sm font-medium uppercase tracking-wider">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-brand-dark">
                What Sets Us Apart
              </h2>
              <p className="text-gray-600">
                Our core values guide everything we do and reflect our commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content?.values?.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-md hover-scale"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <CheckCircle size={24} className="text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold mb-2 text-brand-dark">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-green text-sm font-medium uppercase tracking-wider">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-brand-dark">
                Meet The Experts
              </h2>
              <p className="text-gray-600">
                Our team of experienced professionals is dedicated to delivering exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content?.team?.map((member) => (
                <div key={member.id} className="bg-white rounded-xl shadow-md overflow-hidden hover-scale">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-brand-dark">{member.name}</h3>
                    <p className="text-brand-green mb-4">{member.role}</p>
                    <p className="text-gray-600">
                      {member.description}
                    </p>
                  </div>
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
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-brand-green text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium text-lg hover-scale"
              >
                Contact Us <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
