
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface AboutPageContent {
  heroTitle: string;
  heroDescription: string;
  storyTitle: string;
  storyContent: string[];
  experienceYears: number;
  values: CoreValue[];
  team: TeamMember[];
  ctaTitle: string;
  ctaDescription: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

export interface FeaturedService {
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServicesPageContent {
  heroTitle: string;
  heroDescription: string;
  services: ServiceItem[];
  featuredServices: FeaturedService[];
  processSteps: ProcessStep[];
  ctaTitle: string;
  ctaDescription: string;
}

export interface GalleryItem {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
}

export interface ProcessItem {
  title: string;
  description: string;
  image: string;
}

export interface GalleryPageContent {
  heroTitle: string;
  heroDescription: string;
  filters: {id: string, label: string}[];
  galleryItems: GalleryItem[];
  processTitle: string;
  processDescription: string;
  processItems: ProcessItem[];
  ctaTitle: string;
  ctaDescription: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  items: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactPageContent {
  heroTitle: string;
  heroDescription: string;
  contactInfoTitle: string;
  contactInfoDescription: string;
  contactInfoItems: ContactInfo[];
  locationTitle: string;
  locationDescription: string;
  mapEmbedUrl: string;
  faqTitle: string;
  faqDescription: string;
  faqItems: FaqItem[];
  whatsappNumber: string;
}
