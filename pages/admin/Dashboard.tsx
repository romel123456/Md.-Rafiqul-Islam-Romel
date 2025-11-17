
import React from 'react';
import { useAppContext } from '../../context/AppContext';

const Dashboard: React.FC = () => {
    const { blogPosts, services } = useAppContext();

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Welcome to the SolverCircle Admin Panel.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Total Blog Posts</h2>
                    <p className="mt-2 text-4xl font-bold text-primary">{blogPosts.length}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Total Services</h2>
                    <p className="mt-2 text-4xl font-bold text-primary">{services.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
