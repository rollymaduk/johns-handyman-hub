
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, Home, Clock } from 'lucide-react';

const Contact = () => {
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
              <span className="bg-brand-green bg-opacity-10 text-brand-green px-4 py-1 rounded-full text-sm font-medium">Contact Us</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-brand-dark">
                Get In Touch
              </h1>
              <p className="text-gray-600 text-lg">
                Have questions or ready to start your project? Contact us today for a free consultation.
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
                    Contact Information
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Feel free to reach out to us through any of the methods below. We're here to answer your questions and help with your home improvement needs.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start p-6 bg-white rounded-xl shadow-md hover-scale">
                    <div className="w-12 h-12 bg-brand-green bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="text-brand-green" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-brand-dark mb-2">Phone</h3>
                      <p className="text-gray-600">+27 70 405 02895</p>
                      <p className="text-gray-600">Mon-Fri: 8am-9pm</p>
                      <p className="text-gray-600">Saturday: 9am-2pm</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-white rounded-xl shadow-md hover-scale">
                    <div className="w-12 h-12 bg-brand-green bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="text-brand-green" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-brand-dark mb-2">Email</h3>
                      <p className="text-gray-600">info@johnshandyman.com</p>
                      <p className="text-gray-600">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-white rounded-xl shadow-md hover-scale">
                    <div className="w-12 h-12 bg-brand-green bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Home className="text-brand-green" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-brand-dark mb-2">Office</h3>
                      <p className="text-gray-600">Weiland Cresent, Blubosrand</p>
                      <p className="text-gray-600">Randburg 2188, South Africa</p>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-white rounded-xl shadow-md hover-scale">
                    <div className="w-12 h-12 bg-brand-green bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="text-brand-green" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-brand-dark mb-2">Business Hours</h3>
                      <p className="text-gray-600">Monday-Friday: 8am-9pm</p>
                      <p className="text-gray-600">Saturday: 9am-2pm</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <ContactForm whatsappNumber="+27704050289" />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">
                Our Location
              </h2>
              <p className="text-gray-600">
                Visit our office or we can come to you for an on-site consultation.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.0252900836273!2d28.0014184!3d-26.0424979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95755ad4ba4da5%3A0xe17a5362a8be5b52!2sBlubosrand%2C%20Randburg%2C%202188%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1622227525493!5m2!1sen!2sus"
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
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Find answers to our most commonly asked questions.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-display font-semibold text-brand-dark mb-3">What areas do you serve?</h3>
                <p className="text-gray-600">We currently serve Anytown and surrounding areas within a 30-mile radius. Contact us to confirm service availability in your location.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-display font-semibold text-brand-dark mb-3">Are you licensed and insured?</h3>
                <p className="text-gray-600">Yes, we are fully licensed and insured. We can provide proof of insurance upon request.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-display font-semibold text-brand-dark mb-3">Do you provide free estimates?</h3>
                <p className="text-gray-600">Yes, we provide free estimates for all projects. Contact us to schedule a consultation.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-display font-semibold text-brand-dark mb-3">How soon can you start on my project?</h3>
                <p className="text-gray-600">Our availability varies based on current workload. Typically, we can start new projects within 2-3 weeks of quote approval. For urgent repairs, we try to accommodate as soon as possible.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-display font-semibold text-brand-dark mb-3">What forms of payment do you accept?</h3>
                <p className="text-gray-600">We accept cash, checks, and all major credit cards. For larger projects, we typically require a deposit upfront with the balance due upon completion.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
