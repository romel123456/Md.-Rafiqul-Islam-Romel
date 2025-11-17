
import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { SeoSettings } from '../../types';

const SeoManager: React.FC = () => {
    const { seo, setSeo } = useAppContext();
    const [settings, setSettings] = useState<SeoSettings>(seo);

    const handleSave = () => {
        setSeo(settings);
        alert('SEO settings saved!');
    };

    const handleChange = (page: string, field: 'title' | 'description' | 'keywords', value: string) => {
        setSettings(prev => ({
            ...prev,
            [page]: {
                ...prev[page],
                [field]: value
            }
        }));
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">SEO Manager</h1>

            <div className="space-y-8">
                {Object.keys(settings).map(pageKey => (
                    <div key={pageKey} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 capitalize mb-4">{pageKey} Page</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Meta Title</label>
                                <input
                                    type="text"
                                    value={settings[pageKey].title}
                                    onChange={e => handleChange(pageKey, 'title', e.target.value)}
                                    className="mt-1 w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Meta Description</label>
                                <textarea
                                    value={settings[pageKey].description}
                                    onChange={e => handleChange(pageKey, 'description', e.target.value)}
                                    className="mt-1 w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    rows={3}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Keywords (comma-separated)</label>
                                <input
                                    type="text"
                                    value={settings[pageKey].keywords}
                                    onChange={e => handleChange(pageKey, 'keywords', e.target.value)}
                                    className="mt-1 w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                />
                            </div>
                        </div>
                    </div>
                ))}
                 <div className="flex justify-end">
                    <button onClick={handleSave} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90">
                        Save All SEO Settings
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SeoManager;
