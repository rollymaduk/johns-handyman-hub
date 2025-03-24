
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="service-card bg-white rounded-lg p-6 shadow-md hover-scale" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 bg-brand-green bg-opacity-10 rounded-full flex items-center justify-center mb-4">
        <div className="text-brand-green">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-display font-semibold mb-3 text-brand-dark">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <Link 
        to="/contact" 
        className="inline-flex items-center font-medium text-brand-green hover:text-brand-dark transition-colors"
      >
        Request Service <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
