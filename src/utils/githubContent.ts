import {
  AboutPageContent,
  GalleryPageContent,
  ServicesPageContent,
  ContactPageContent,
  HomePageContent,
  TestimonialsContent
} from "@/types/content";
import * as LucideIcons from "lucide-react";
import frontMatter from "front-matter";
import { cleanupMdxContent } from "./mdxCleanup";

// Import fallback data from JSON files
import aboutFallback from "../backup/aboutFallback.json";
import servicesFallback from "../backup/servicesFallback.json";
import galleryFallback from "../backup/galleryFallback.json";
import contactFallback from "../backup/contactFallback.json";
import testimonialsFallback from "../backup/testimonialsFallback.json";

/**
 * Loads content from local public folder
 */
async function loadLocalContent(path: string): Promise<string> {
  try {
    console.log("Loading local content:", path);

    // Fetch the file from the public directory
    const response = await fetch(`/${path}`);

    if (!response.ok) {
      throw new Error(
        `Failed to load ${path}: ${response.status} ${response.statusText}`
      );
    }

    const rawContent = await response.text();

    // Clean up the MDX content before processing
    const cleanContent = cleanupMdxContent(rawContent);
    return cleanContent;
  } catch (error) {
    console.error(`Error loading local content:`, error);
    throw error;
  }
}

/**
 * Parse MDX content with frontmatter
 * Using the front-matter library
 */
function parseContent<T>(content: string): Promise<T> {
  try {
    console.log("Raw content (first 100 chars):", content.substring(0, 100));

    // Parse frontmatter using the front-matter library
    const parsed = frontMatter(content);
    console.log("Parsed frontmatter attributes:", parsed.attributes);

    // Return the attributes
    return Promise.resolve(parsed.attributes as T);
  } catch (error) {
    console.error("Error parsing MDX content:", error);
    console.log("Content that caused the error:", content);
    return Promise.resolve({} as T);
  }
}

/**
 * Fetch About page content
 */
export async function getAboutContent(): Promise<AboutPageContent> {
  try {
    const content = await loadLocalContent("content/about.md");
    return parseContent<AboutPageContent>(content);
  } catch (error) {
    console.error("Error fetching About content:", error);
    // Return fallback content from JSON file
    return aboutFallback as AboutPageContent;
  }
}

/**
 * Fetch Services page content
 */
export async function getServicesContent(): Promise<ServicesPageContent> {
  try {
    const content = await loadLocalContent("content/services.md");
    return parseContent<ServicesPageContent>(content);
  } catch (error) {
    console.error("Error fetching Services content:", error);
    // Return fallback content from JSON file
    return servicesFallback as ServicesPageContent;
  }
}

/**
 * Fetch Gallery page content
 */
export async function getGalleryContent(): Promise<GalleryPageContent> {
  try {
    const content = await loadLocalContent("content/gallery.md");
    return parseContent<GalleryPageContent>(content);
  } catch (error) {
    console.error("Error fetching Gallery content:", error);
    // Return fallback content from JSON file
    return galleryFallback as GalleryPageContent;
  }
}

/**
 * Fetch Contact page content
 */
export async function getContactContent(): Promise<ContactPageContent> {
  try {
    const content = await loadLocalContent("content/contact.md");
    return parseContent<ContactPageContent>(content);
  } catch (error) {
    console.error("Error fetching Contact content:", error);
    // Return fallback content from JSON file
    return contactFallback as ContactPageContent;
  }
}

/**
 * Helper for dynamically loading icons from Lucide React
 */
export function getLucideIcon(iconName: string) {
  return (LucideIcons as unknown)[iconName] || LucideIcons.HelpCircle;
}

/**
 * Fetch Testimonials content
 */
export async function getTestimonialsContent(): Promise<TestimonialsContent> {
  try {
    const content = await loadLocalContent("content/testimonials.md");
    return parseContent<TestimonialsContent>(content);
  } catch (error) {
    console.error("Error fetching Testimonials content:", error);
    // Return fallback content from JSON file
    return testimonialsFallback as TestimonialsContent;
  }
}

export async function getHomeContent(): Promise<HomePageContent> {
  try {
    // Get content from existing markdown files
    const servicesContent = await getServicesContent();
    const aboutContent = await getAboutContent();
    const galleryContent = await getGalleryContent();
    const testimonialsContent = await getTestimonialsContent();
    
    // Construct home content from these sources
    return {
      // Services section content
      servicesTitle: "Professional Handyman Services",
      servicesDescription: "We provide comprehensive handyman solutions to transform and maintain your home with quality craftsmanship.",
      featuredServices: servicesContent.services.slice(0, 3), // Take first 3 services
      
      // About section content
      aboutTitle: aboutContent.storyTitle,
      aboutDescription: aboutContent.storyContent.slice(0, 2), // Take first 2 paragraphs for brevity
      aboutImage: aboutContent.team[0].image, // Use founder's image
      
      // Gallery section content
      galleryTitle: "See Our Recent Projects",
      galleryDescription: "Browse through our portfolio of completed projects and see the quality of our workmanship.",
      workImages: galleryContent.galleryItems.slice(0, 6).map(item => ({
        src: item.image,
        alt: item.title,
        caption: item.title
      })),
      
      // Testimonials section
      testimonialsTitle: testimonialsContent.title,
      testimonialsDescription: testimonialsContent.description,
      testimonials: testimonialsContent.featuredTestimonials || testimonialsContent.testimonials.slice(0, 3),
      
      // CTA section
      ctaTitle: aboutContent.ctaTitle,
      ctaDescription: aboutContent.ctaDescription
    };
  } catch (error) {
    console.error('Error fetching home content:', error);
    throw error;
  }
}
