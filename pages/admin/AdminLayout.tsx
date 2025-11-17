
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
    const navLinks = [
        { name: 'Dashboard', path: '/admin' },
        { name: 'Blog Posts', path: '/admin/blog' },
        { name: 'Page Content', path: '/admin/pages' },
        { name: 'Theme', path: '/admin/theme' },
        { name: 'SEO', path: '/admin/seo' },
    ];

    const linkClass = "flex items-center px-4 py-2 text-gray-100 rounded-lg hover:bg-gray-700";
    const activeLinkClass = "bg-gray-700";

    return (
        <div className="flex h-screen bg-gray-200 dark:bg-gray-900">
            <div className="w-64 bg-gray-800 text-white flex-shrink-0">
                <div className="p-4 text-2xl font-bold">Admin Panel</div>
                <nav className="p-2">
                    {navLinks.map(link => (
                         <NavLink
                            key={link.name}
                            to={link.path}
                            end={link.path === '/admin'}
                            className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>
                 <div className="p-4 mt-auto">
                    <NavLink to="/" className="block text-center w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90">
                        View Website
                    </NavLink>
                </div>
            </div>
            <main className="flex-1 p-8 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
