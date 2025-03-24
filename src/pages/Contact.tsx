
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { getContactContent } from '@/utils/githubContent';
import { ContactPageContent } from '@/types/content';
import { getLucideIcon } from '@/utils/iconUtils';

const Contact = () => {
  const [content, setContent] = useState<ContactPageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchContent = async () => {
      try {
        const data = await getContactContent();
        setContent(data);
      } catch (error) {
        console.error("Error fetching contact content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading || !content) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 bg-gray-200 rounded w-64 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-96"></div>
          </div>
        </div>
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
              <span className="bg-brand-green bg-opacity-10 text-brand-green px-4 py-1 rounded-full text-sm font-medium">Contact Us</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-brand-dark">
                {content.heroTitle}
              </h1>
              <p className="text-gray-600 text-lg">
                {content.heroDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info and Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-display font-bold text-brand-dark mb-6">
                    {content.contactInfoTitle}
                  </h2>
                  <p className="text-gray-600 mb-8">
                    {content.contactInfoDescription}
                  </p>
                </div>

                <div className="space-y-6">
                  {content.contactInfoItems.map((item, index) => {
                    const Icon = getLucideIcon(item.icon);
                    return (
                      <div key={index} className="flex items-start p-6 bg-white rounded-xl shadow-md hover-scale">
                        <div className="w-12 h-12 bg-brand-green bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <Icon className="text-brand-green" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-display font-semibold text-brand-dark mb-2">{item.title}</h3>
                          {item.items.map((text, i) => (
                            <p key={i} className="text-gray-600">{text}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <ContactForm whatsappNumber={content.whatsappNumber} />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">
                {content.locationTitle}
              </h2>
              <p className="text-gray-600">
                {content.locationDescription}
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Office Location"
                src={content.mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-green text-sm font-medium uppercase tracking-wider">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-brand-dark">
                {content.faqTitle}
              </h2>
              <p className="text-gray-600">
                {content.faqDescription}
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {content.faqItems.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-display font-semibold text-brand-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
