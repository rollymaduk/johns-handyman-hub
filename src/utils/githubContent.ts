import matter from 'gray-matter';
import { AboutPageContent, GalleryPageContent, ServicesPageContent } from '@/types/content';
import * as LucideIcons from 'lucide-react';

// This should be your GitHub username and repository
const GITHUB_USERNAME = 'your-github-username';
const GITHUB_REPO = 'your-website-content';
const BRANCH = 'main';

// Base URL for raw GitHub content
const RAW_GITHUB_BASE_URL = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${GITHUB_REPO}/${BRANCH}`;

/**
 * Fetches content from a GitHub repository
 */
async function fetchFromGitHub(path: string): Promise<string> {
  try {
    const response = await fetch(`${RAW_GITHUB_BASE_URL}/${path}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch ${path}: ${response.status} ${response.statusText}`);
    }
    
    return await response.text();
  } catch (error) {
    console.error(`Error fetching content from GitHub:`, error);
    throw error;
  }
}

/**
 * Parse MDX content with frontmatter
 */
function parseContent<T>(content: string): T {
  const { data } = matter(content);
  return data as T;
}

/**
 * Fetch About page content
 */
export async function getAboutContent(): Promise<AboutPageContent> {
  try {
    const content = await fetchFromGitHub('content/about.mdx');
    return parseContent<AboutPageContent>(content);
  } catch (error) {
    console.error('Error fetching About content:', error);
    // Return fallback content
    return {
      heroTitle: 'Our Story & Mission',
      heroDescription: 'Learn about our journey, values, and commitment to delivering exceptional handyman services.',
      storyTitle: 'Building Trust Through Quality Work',
      storyContent: [
        "John's Handyman Services was founded in 2008 with a simple mission: to provide high-quality, reliable handyman services at fair prices. What started as a one-man operation has grown into a team of skilled professionals dedicated to helping homeowners maintain and improve their properties.",
        "Our founder, John, began his career in construction and home improvement over 20 years ago. His passion for quality craftsmanship and customer satisfaction formed the foundation of our company's values. Today, we continue to uphold these principles in every project we undertake.",
        "We specialize in a wide range of services, from minor repairs to major renovations, and we approach each project with the same level of dedication and attention to detail. Our team consists of experienced professionals who are experts in their respective fields."
      ],
      experienceYears: 15,
      values: [
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
      ],
      team: [
        {
          id: 1,
          name: "John Smith",
          role: "Founder & Lead Contractor",
          description: "With over 20 years of experience in home improvement, John leads our team with expertise and dedication.",
          image: "/lovable-uploads/431254c2-b7c1-4cae-9b06-653c68c55acc.png"
        },
        {
          id: 2,
          name: "Mike Johnson",
          role: "Master Painter",
          description: "Mike specializes in interior and exterior painting, delivering flawless finishes on every project.",
          image: "/lovable-uploads/94e5ca79-040d-481e-8763-7a449c5b41ce.png"
        },
        {
          id: 3,
          name: "David Wilson",
          role: "Remodeling Specialist",
          description: "David brings creative vision and technical skill to our bathroom and kitchen remodeling projects.",
          image: "/lovable-uploads/cfa9f7f9-10f8-4d05-a1d5-85d68430d8a9.png"
        }
      ],
      ctaTitle: "Ready to Work with Our Expert Team?",
      ctaDescription: "Contact us today to discuss your project and get a free quote."
    };
  }
}

/**
 * Fetch Services page content
 */
export async function getServicesContent(): Promise<ServicesPageContent> {
  try {
    const content = await fetchFromGitHub('content/services.mdx');
    return parseContent<ServicesPageContent>(content);
  } catch (error) {
    console.error('Error fetching Services content:', error);
    // Return fallback content
    return {
      heroTitle: "Quality Handyman Services",
      heroDescription: "We offer a comprehensive range of handyman services to meet all your home improvement needs.",
      services: [
        {
          title: "Interior Painting",
          description: "Transform your home's interior with our professional painting services. We use premium paints and deliver flawless finishes.",
          icon: "Home",
          delay: 100
        },
        {
          title: "Exterior Painting",
          description: "Enhance your home's curb appeal with our exterior painting services. Weather-resistant finishes that last for years.",
          icon: "Home",
          delay: 200
        },
        {
          title: "Bathroom Remodeling",
          description: "From simple updates to complete renovations, we can transform your bathroom into a beautiful and functional space.",
          icon: "Wrench",
          delay: 300
        },
        {
          title: "Roof Repairs",
          description: "Expert roof repair services to fix leaks, replace damaged shingles, and protect your home from the elements.",
          icon: "Home",
          delay: 400
        },
        {
          title: "Home Renovations",
          description: "Comprehensive home renovation services to update, improve, and transform your living spaces.",
          icon: "Wrench",
          delay: 500
        },
        {
          title: "General Repairs",
          description: "From fixing leaky faucets to repairing drywall, we handle all types of general home repairs and maintenance.",
          icon: "Wrench",
          delay: 600
        }
      ],
      featuredServices: [
        {
          title: "Bathroom Remodeling",
          description: "Our bathroom remodeling service transforms outdated bathrooms into beautiful, functional spaces. From simple updates to complete renovations, we handle every aspect of your bathroom project with precision and care.",
          features: [
            "Custom tile installation for floors, walls, and showers",
            "Fixture replacement and upgrades (sinks, toilets, showers)",
            "Vanity installation and custom cabinetry",
            "Plumbing and electrical updates to code"
          ],
          image: "/lovable-uploads/421db153-9183-441f-8951-5e2dce2b4dda.png"
        },
        {
          title: "Professional Painting",
          description: "Our professional painting services cover both interior and exterior painting needs. We use premium paints and materials to ensure a beautiful, long-lasting finish for your home.",
          features: [
            "Interior painting for walls, ceilings, trim, and doors",
            "Exterior painting for siding, trim, and decks",
            "Proper surface preparation and priming",
            "Color consultation and premium paint options"
          ],
          image: "/lovable-uploads/431254c2-b7c1-4cae-9b06-653c68c55acc.png"
        }
      ],
      processSteps: [
        {
          title: "Consultation",
          description: "We discuss your project needs, timeline, and budget."
        },
        {
          title: "Quote",
          description: "We provide a detailed quote with transparent pricing."
        },
        {
          title: "Execution",
          description: "We complete your project with skill and attention to detail."
        },
        {
          title: "Satisfaction",
          description: "We ensure you're completely satisfied with the results."
        }
      ],
      ctaTitle: "Ready to Start Your Project?",
      ctaDescription: "Contact us today for a free consultation and estimate. We're here to help bring your vision to life."
    };
  }
}

/**
 * Fetch Gallery page content
 */
export async function getGalleryContent(): Promise<GalleryPageContent> {
  try {
    const content = await fetchFromGitHub('content/gallery.mdx');
    return parseContent<GalleryPageContent>(content);
  } catch (error) {
    console.error('Error fetching Gallery content:', error);
    // Return fallback content
    return {
      heroTitle: "Project Gallery",
      heroDescription: "Browse through our completed projects and see the quality of our workmanship.",
      filters: [
        { id: 'all', label: 'All Projects' },
        { id: 'bathroom', label: 'Bathroom' },
        { id: 'roofing', label: 'Roofing' },
        { id: 'painting', label: 'Painting' },
        { id: 'renovation', label: 'Renovation' },
        { id: 'exterior', label: 'Exterior' }
      ],
      galleryItems: [
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
      ],
      processTitle: "From Concept to Completion",
      processDescription: "Every project follows our detailed process to ensure quality results and customer satisfaction.",
      processItems: [
        {
          title: "Initial Consultation",
          description: "We meet with you to understand your vision, requirements, and budget.",
          image: "/lovable-uploads/94e5ca79-040d-481e-8763-7a449c5b41ce.png"
        },
        {
          title: "Detailed Planning",
          description: "We create a comprehensive plan including materials, timeline, and detailed pricing.",
          image: "/lovable-uploads/8556ce32-651d-41d0-8f0d-5b1635194eb3.png"
        },
        {
          title: "Expert Execution",
          description: "Our skilled team completes your project with precision and craftsmanship.",
          image: "/lovable-uploads/431254c2-b7c1-4cae-9b06-653c68c55acc.png"
        },
        {
          title: "Final Walkthrough",
          description: "We review the completed project together to ensure your complete satisfaction.",
          image: "/lovable-uploads/421db153-9183-441f-8951-5e2dce2b4dda.png"
        }
      ],
      ctaTitle: "Ready to Transform Your Space?",
      ctaDescription: "Contact us today to discuss your project and get a free estimate."
    };
  }
}

/**
 * Helper for dynamically loading icons from Lucide React
 */
export function getLucideIcon(iconName: string) {
  return (LucideIcons as any)[iconName] || LucideIcons.HelpCircle;
}
