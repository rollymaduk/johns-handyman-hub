
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-7xl md:text-9xl font-display font-bold text-brand-green mb-6">404</h1>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-dark mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center bg-brand-green text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium hover-scale"
            >
              <ArrowLeft size={20} className="mr-2" /> Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
