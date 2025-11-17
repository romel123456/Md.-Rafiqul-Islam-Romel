import React, { createContext, useState, useContext, useEffect } from 'react';
import { AppContextType, BlogPost, Service, Testimonial, TeamMember, CaseStudy, ThemeSettings, PageContent, SeoSettings } from '../types';
import { MOCK_SERVICES, MOCK_BLOG_POSTS, MOCK_TESTIMONIALS, MOCK_TEAM_MEMBERS, MOCK_CASE_STUDIES, MOCK_THEME, MOCK_PAGE_CONTENT, MOCK_SEO } from '../data/mockData';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [services] = useState<Service[]>(MOCK_SERVICES);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(MOCK_BLOG_POSTS);
  const [testimonials] = useState<Testimonial[]>(MOCK_TESTIMONIALS);
  const [teamMembers] = useState<TeamMember[]>(MOCK_TEAM_MEMBERS);
  const [caseStudies] = useState<CaseStudy[]>(MOCK_CASE_STUDIES);
  const [theme, setTheme] = useState<ThemeSettings>(MOCK_THEME);
  const [pageContent, setPageContent] = useState<PageContent>(MOCK_PAGE_CONTENT);
  const [seo, setSeo] = useState<SeoSettings>(MOCK_SEO);

  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', theme.primaryColor);
    document.body.style.fontFamily = theme.fontFamily;
  }, [theme]);

  const value = {
    services,
    blogPosts,
    testimonials,
    teamMembers,
    caseStudies,
    theme,
    pageContent,
    seo,
    setBlogPosts,
    setTheme,
    setPageContent,
    setSeo,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};