
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Solutions = lazy(() => import('./pages/Solutions'));
const BlogList = lazy(() => import('./pages/BlogList'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));

// Lazy load admin pages
const AdminLayout = lazy(() => import('./pages/admin/AdminLayout'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const BlogManager = lazy(() => import('./pages/admin/BlogManager'));
const PageManager = lazy(() => import('./pages/admin/PageManager'));
const ThemeCustomizer = lazy(() => import('./pages/admin/ThemeCustomizer'));
const SeoManager = lazy(() => import('./pages/admin/SeoManager'));

const PublicLayout: React.FC = () => (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
);

const LoadingFallback: React.FC = () => (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <p className="text-xl">Loading...</p>
    </div>
);


const App: React.FC = () => {
  return (
    <AppProvider>
      <HashRouter>
        <Suspense fallback={<LoadingFallback />}>
            <Routes>
            {/* Public website routes */}
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="solutions" element={<Solutions />} />
                <Route path="blog" element={<BlogList />} />
                <Route path="blog/:slug" element={<BlogPost />} />
                <Route path="contact" element={<Contact />} />
            </Route>

            {/* Admin dashboard routes */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="blog" element={<BlogManager />} />
                <Route path="pages" element={<PageManager />} />
                <Route path="theme" element={<ThemeCustomizer />} />
                <Route path="seo" element={<SeoManager />} />
            </Route>
            </Routes>
        </Suspense>
      </HashRouter>
    </AppProvider>
  );
};

export default App;
