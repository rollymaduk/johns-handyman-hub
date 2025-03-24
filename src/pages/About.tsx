
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      title: "Quality Workmanship",
      description: "We take pride in our attention to detail and commitment to excellence in every project."
    },
    {
      title: "Reliability",
      description: "We show up on time, complete projects on schedule, and deliver on our promises."
    },
    {
      title: "Transparency",
      description: "Clear communication and honest pricing with no hidden fees or surprises."
    },
    {
      title: "Customer Satisfaction",
      description: "Your satisfaction is our top priority, and we strive to exceed your expectations."
    }
  ];

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
                Our Story & Mission
              </h1>
              <p className="text-gray-600 text-lg">
                Learn about our journey, values, and commitment to delivering exceptional handyman services.
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
                    src="/lovable-uploads/94e5ca79-040d-481e-8763-7a449c5b41ce.png"
                    alt="About John's Handyman Services"
                    className="rounded-xl shadow-lg w-full object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-brand-green p-6 rounded-xl shadow-lg">
                    <p className="text-white font-display font-bold text-xl">15+ Years Experience</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 stagger-animation">
                <span className="text-brand-green text-sm font-medium uppercase tracking-wider">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark">
                  Building Trust Through Quality Work
                </h2>
                <p className="text-gray-600">
                  John's Handyman Services was founded in 2008 with a simple mission: to provide high-quality, reliable handyman services at fair prices. What started as a one-man operation has grown into a team of skilled professionals dedicated to helping homeowners maintain and improve their properties.
                </p>
                <p className="text-gray-600">
                  Our founder, John, began his career in construction and home improvement over 20 years ago. His passion for quality craftsmanship and customer satisfaction formed the foundation of our company's values. Today, we continue to uphold these principles in every project we undertake.
                </p>
                <p className="text-gray-600">
                  We specialize in a wide range of services, from minor repairs to major renovations, and we approach each project with the same level of dedication and attention to detail. Our team consists of experienced professionals who are experts in their respective fields.
                </p>
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
              {values.map((value, index) => (
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
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover-scale">
                <div className="h-64 overflow-hidden">
                  <img
                    src="/lovable-uploads/431254c2-b7c1-4cae-9b06-653c68c55acc.png"
                    alt="John Smith"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-brand-dark">John Smith</h3>
                  <p className="text-brand-green mb-4">Founder & Lead Contractor</p>
                  <p className="text-gray-600">
                    With over 20 years of experience in home improvement, John leads our team with expertise and dedication.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden hover-scale">
                <div className="h-64 overflow-hidden">
                  <img
                    src="/lovable-uploads/94e5ca79-040d-481e-8763-7a449c5b41ce.png"
                    alt="Mike Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-brand-dark">Mike Johnson</h3>
                  <p className="text-brand-green mb-4">Master Painter</p>
                  <p className="text-gray-600">
                    Mike specializes in interior and exterior painting, delivering flawless finishes on every project.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden hover-scale">
                <div className="h-64 overflow-hidden">
                  <img
                    src="/lovable-uploads/cfa9f7f9-10f8-4d05-a1d5-85d68430d8a9.png"
                    alt="David Wilson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-brand-dark">David Wilson</h3>
                  <p className="text-brand-green mb-4">Remodeling Specialist</p>
                  <p className="text-gray-600">
                    David brings creative vision and technical skill to our bathroom and kitchen remodeling projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-green bg-opacity-10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6">
                Ready to Work with Our Expert Team?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Contact us today to discuss your project and get a free quote.
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
