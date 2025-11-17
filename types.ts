// FIX: Added React type import to resolve 'Cannot find namespace' errors.
import type * as React from 'react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface SeoSettings {
  [key: string]: {
    title: string;
    description: string;
    keywords: string;
  };
}

export interface PageContent {
  home: {
    heroTitle: string;
    heroSubtitle: string;
  };
  about: {
    mainContent: string;
    mission: string;
  }
}

export interface ThemeSettings {
  primaryColor: string;
  fontFamily: string;
}

export interface AppContextType {
  services: Service[];
  blogPosts: BlogPost[];
  testimonials: Testimonial[];
  teamMembers: TeamMember[];
  caseStudies: CaseStudy[];
  seo: SeoSettings;
  pageContent: PageContent;
  theme: ThemeSettings;
  setBlogPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
  setTheme: React.Dispatch<React.SetStateAction<ThemeSettings>>;
  setPageContent: React.Dispatch<React.SetStateAction<PageContent>>;
  setSeo: React.Dispatch<React.SetStateAction<SeoSettings>>;
}