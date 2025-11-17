
import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { PageContent } from '../../types';

const PageManager: React.FC = () => {
    const { pageContent, setPageContent } = useAppContext();
    const [content, setContent] = useState<PageContent>(pageContent);

    const handleSave = () => {
        setPageContent(content);
        alert('Page content saved!');
    };

    const handleChange = (page: keyof PageContent, field: string, value: string) => {
        setContent(prev => ({
            ...prev,
            [page]: {
                ...prev[page],
                [field]: value
            }
        }));
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Manage Page Content</h1>
            
            <div className="space-y-8">
                {/* Home Page Section */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Home Page</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Hero Title</label>
                            <input 
                                type="text" 
                                value={content.home.heroTitle} 
                                onChange={e => handleChange('home', 'heroTitle', e.target.value)} 
                                className="mt-1 w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Hero Subtitle</label>
                            <textarea 
                                value={content.home.heroSubtitle} 
                                onChange={e => handleChange('home', 'heroSubtitle', e.target.value)} 
                                className="mt-1 w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                rows={3}
                            />
                        </div>
                    </div>
                </div>

                {/* About Page Section */}
                 <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">About Page</h2>
                     <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Main Content</label>
                            <textarea 
                                value={content.about.mainContent} 
                                onChange={e => handleChange('about', 'mainContent', e.target.value)} 
                                className="mt-1 w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                rows={4}
                            />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mission Statement</label>
                            <textarea 
                                value={content.about.mission} 
                                onChange={e => handleChange('about', 'mission', e.target.value)} 
                                className="mt-1 w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                rows={4}
                            />
                        </div>
                    </div>
                 </div>

                <div className="flex justify-end">
                    <button onClick={handleSave} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PageManager;
