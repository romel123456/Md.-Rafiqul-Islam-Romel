// FIX: Added ThemeSettings to the import to support MOCK_THEME.
import { Service, BlogPost, Testimonial, TeamMember, CaseStudy, SeoSettings, PageContent, ThemeSettings } from '../types';
import { WebDevIcon, SoftwareDevIcon, AppDevIcon, AiMlIcon, CloudIcon, UiUxIcon } from '../components/icons';

export const MOCK_SERVICES: Service[] = [
  { id: '1', title: 'Web Development', shortDescription: 'Creating responsive and high-performance websites.', longDescription: 'We build modern, scalable, and secure web applications tailored to your business needs using the latest technologies. Our expertise covers front-end, back-end, and full-stack development.', icon: WebDevIcon },
  { id: '2', title: 'Software Development', shortDescription: 'Custom software solutions for your business.', longDescription: 'From enterprise software to custom applications, we deliver robust, reliable, and efficient software that solves complex business challenges and drives growth.', icon: SoftwareDevIcon },
  { id: '3', title: 'App Development', shortDescription: 'Native and cross-platform mobile apps.', longDescription: 'Engage your users with beautiful and intuitive mobile applications for iOS and Android. We handle the entire lifecycle from idea to launch and maintenance.', icon: AppDevIcon },
  { id: '4', title: 'AI & Machine Learning', shortDescription: 'Intelligent solutions to automate and innovate.', longDescription: 'Leverage the power of AI and ML to gain insights, automate processes, and create innovative products. We specialize in natural language processing, computer vision, and predictive analytics.', icon: AiMlIcon },
  { id: '5', title: 'Cloud & DevOps', shortDescription: 'Scalable infrastructure and streamlined workflows.', longDescription: 'Accelerate your development and deployment cycles with our Cloud & DevOps services. We offer cloud migration, infrastructure automation, CI/CD pipelines, and performance monitoring.', icon: CloudIcon },
  { id: '6', title: 'UI/UX Design', shortDescription: 'User-centric and visually stunning designs.', longDescription: 'Our design team creates compelling user experiences and beautiful interfaces that are not only aesthetically pleasing but also functional and easy to use, enhancing user satisfaction and conversion rates.', icon: UiUxIcon },
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  { id: '1', slug: 'the-future-of-web-development-in-2024', title: 'The Future of Web Development in 2024', author: 'Jane Doe', date: '2024-07-15', imageUrl: 'https://picsum.photos/seed/blog1/800/400', excerpt: 'Discover the upcoming trends in web development, from AI integration to new JavaScript frameworks.', content: 'The web development landscape is ever-evolving. In 2024, we see a massive push towards AI-driven development tools, more sophisticated frontend frameworks, and a continued focus on performance and security. Serverless architectures are becoming the norm, and WebAssembly is opening new doors for performance-critical applications. Join us as we dive deep into what the future holds.', tags: ['Web Development', 'Trends', 'AI'] },
  { id: '2', slug: 'demystifying-cloud-native-applications', title: 'Demystifying Cloud-Native Applications', author: 'John Smith', date: '2024-07-10', imageUrl: 'https://picsum.photos/seed/blog2/800/400', excerpt: 'What does it mean to be cloud-native? This post breaks down the core concepts and benefits.', content: 'Cloud-native is more than just running applications in the cloud. It\'s an approach to building and running applications that exploits the advantages of the cloud computing delivery model. This article explores the key principles: containers, microservices, DevOps, and continuous delivery. We will guide you through the benefits, such as scalability, resilience, and flexibility.', tags: ['Cloud', 'DevOps', 'Architecture'] },
  { id: '33', slug: 'mastering-ui-ux-for-mobile-apps', title: 'Mastering UI/UX for Mobile Apps', author: 'Emily White', date: '2024-07-05', imageUrl: 'https://picsum.photos/seed/blog3/800/400', excerpt: 'Learn the best practices for designing mobile apps that are both beautiful and user-friendly.', content: 'A great mobile app is not just about functionality; it\'s about the experience. This post covers the essential principles of mobile UI/UX design, from intuitive navigation and clear visual hierarchy to accessibility and performance optimization. We share practical tips and real-world examples to help you create apps that users love.', tags: ['UI/UX', 'Mobile', 'Design'] },
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Alex Johnson', role: 'CEO', company: 'Innovate Inc.', quote: 'SolverCircle transformed our digital presence. Their team is professional, skilled, and delivered beyond our expectations. We saw a 200% increase in user engagement.', avatarUrl: 'https://picsum.photos/seed/avatar1/100/100' },
  { id: '2', name: 'Samantha Lee', role: 'CTO', company: 'Tech Solutions Ltd.', quote: 'Working with SolverCircle was a breeze. They understood our complex requirements and built a custom software that streamlined our operations significantly.', avatarUrl: 'https://picsum.photos/seed/avatar2/100/100' },
  { id: '3', name: 'Michael Chen', role: 'Marketing Director', company: 'Growth Co.', quote: 'The mobile app they developed for us is a masterpiece. It\'s intuitive, fast, and has received overwhelmingly positive feedback from our users.', avatarUrl: 'https://picsum.photos/seed/avatar3/100/100' },
];

export const MOCK_TEAM_MEMBERS: TeamMember[] = [
  { id: '1', name: 'Sarah Connor', role: 'Chief Executive Officer', imageUrl: 'https://picsum.photos/seed/team1/400/400', bio: 'Sarah leads SolverCircle with a vision for innovation and excellence, driving the company to new heights in the global tech industry.' },
  { id: '2', name: 'Kyle Reese', role: 'Chief Technology Officer', imageUrl: 'https://picsum.photos/seed/team2/400/400', bio: 'Kyle is the mastermind behind our technical strategy, ensuring we leverage the latest technologies to deliver cutting-edge solutions.' },
  { id: '3', name: 'John Doe', role: 'Head of Product Design', imageUrl: 'https://picsum.photos/seed/team3/400/400', bio: 'John leads our design team, focusing on creating user-centric and impactful digital experiences for our clients.' },
  { id: '4', name: 'Jane Smith', role: 'VP of Engineering', imageUrl: 'https://picsum.photos/seed/team4/400/400', bio: 'Jane oversees all engineering efforts, ensuring high standards of quality, performance, and scalability in every project.' },
];

export const MOCK_CASE_STUDIES: CaseStudy[] = [
    { id: '1', industry: 'FinTech', title: 'Revolutionizing Online Banking for a Major Financial Institution', description: 'We developed a secure, high-performance mobile banking application that increased user satisfaction by 40% and reduced operational costs through automation.', imageUrl: 'https://picsum.photos/seed/case1/600/400' },
    { id: '2', industry: 'Healthcare', title: 'AI-Powered Diagnostic Tool for Medical Imaging', description: 'Our team built an AI model that assists radiologists by detecting anomalies in medical scans with 95% accuracy, leading to earlier diagnoses and better patient outcomes.', imageUrl: 'https://picsum.photos/seed/case2/600/400' },
    { id: '3', industry: 'E-commerce', title: 'Scalable E-commerce Platform for a Global Retail Brand', description: 'We created a robust, cloud-native e-commerce platform capable of handling millions of daily users, resulting in a 50% increase in online sales and improved customer experience.', imageUrl: 'https://picsum.photos/seed/case3/600/400' },
];

export const MOCK_SEO: SeoSettings = {
    home: { title: 'SolverCircle | International Software Development', description: 'SolverCircle is a leading international software development company delivering high-quality web, mobile, and custom software solutions.', keywords: 'software development, web development, mobile apps' },
    about: { title: 'About SolverCircle | Our Mission and Team', description: 'Learn about SolverCircle, our mission to innovate, our values, and the talented team behind our success.', keywords: 'about us, company mission, software team' },
    services: { title: 'Our Services | SolverCircle', description: 'Explore our wide range of services including web development, AI & ML, cloud solutions, and UI/UX design.', keywords: 'services, software services, tech solutions' },
    solutions: { title: 'Industry Solutions | SolverCircle', description: 'Discover how we provide tailored solutions for various industries like FinTech, Healthcare, and E-commerce.', keywords: 'industry solutions, case studies, fintech' },
    blog: { title: 'Tech Blog | SolverCircle', description: 'Stay updated with the latest trends and insights in technology, software development, and design from our experts.', keywords: 'tech blog, software articles, development trends' },
    contact: { title: 'Contact Us | SolverCircle', description: 'Get in touch with SolverCircle to discuss your project. We are here to help you build the future.', keywords: 'contact us, get a quote, project inquiry' },
};

export const MOCK_PAGE_CONTENT: PageContent = {
    home: {
        heroTitle: 'Innovative Software Solutions for a Digital World',
        heroSubtitle: 'We partner with businesses to build cutting-edge web, mobile, and enterprise applications that drive growth and efficiency.',
    },
    about: {
        mainContent: 'Founded in 2010, SolverCircle has grown from a small startup into a leading international software development company. We are a team of passionate technologists, designers, and strategists dedicated to delivering exceptional digital products. Our commitment to quality, innovation, and client success is at the core of everything we do.',
        mission: 'Our mission is to empower businesses with transformative technology solutions. We strive to be a trusted partner, turning complex challenges into opportunities for growth and innovation through our expertise and dedication.'
    }
};

// FIX: Added MOCK_THEME to centralize all mock data.
export const MOCK_THEME: ThemeSettings = {
    primaryColor: '#1D4ED8',
    fontFamily: "'Inter', sans-serif",
};