
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Send, Phone, MessageSquare, MessageCircle } from 'lucide-react';

interface ContactFormProps {
  whatsappNumber: string;
}

const ContactForm = ({ whatsappNumber }: ContactFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form validation
    if (!name || !phone || !message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Format phone number without special characters for WhatsApp
    const formattedPhone = whatsappNumber.replace(/\D/g, '');
    
    // Prepare message content
    const whatsappMessage = encodeURIComponent(
      `*New Website Inquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Service:* ${service}\n*Message:* ${message}`
    );
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${formattedPhone}?text=${whatsappMessage}`, '_blank');
    
    // Show success message
    toast({
      title: "Message Sent",
      description: "Your message has been sent to WhatsApp. Please continue the conversation there.",
    });
    
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setService('');
    setMessage('');
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-8">
        <h3 className="text-2xl font-display font-bold text-brand-dark mb-6">Send Us a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
                placeholder="(123) 456-7890"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Service Needed
            </label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
            >
              <option value="">Select a service</option>
              <option value="Interior Painting">Interior Painting</option>
              <option value="Exterior Painting">Exterior Painting</option>
              <option value="Bathroom Remodeling">Bathroom Remodeling</option>
              <option value="Roof Repair">Roof Repair</option>
              <option value="Home Renovation">Home Renovation</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message *
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
              placeholder="Tell us about your project..."
              required
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-green text-white py-3 rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center font-medium hover-scale"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send to WhatsApp <Send size={18} className="ml-2" />
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">Prefer to contact us directly?</p>
          
          <div className="space-y-3">
            <a 
              href={`tel:${whatsappNumber}`} 
              className="flex items-center text-gray-700 hover:text-brand-green transition-colors"
            >
              <Phone size={18} className="mr-3" />
              <span>{whatsappNumber}</span>
            </a>
            
            <a 
              href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center text-gray-700 hover:text-brand-green transition-colors"
            >
              <MessageCircle size={18} className="mr-3" />
              <span>Message on WhatsApp</span>
            </a>
            
            <a 
              href={`sms:${whatsappNumber}`} 
              className="flex items-center text-gray-700 hover:text-brand-green transition-colors"
            >
              <MessageSquare size={18} className="mr-3" />
              <span>Send SMS</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
