
import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const ThemeCustomizer: React.FC = () => {
    const { theme, setTheme } = useAppContext();
    const [primaryColor, setPrimaryColor] = useState(theme.primaryColor);
    const [fontFamily, setFontFamily] = useState(theme.fontFamily);

    const handleSave = () => {
        setTheme({ primaryColor, fontFamily });
        alert('Theme updated successfully!');
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Theme Customizer</h1>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Primary Color</label>
                    <div className="mt-1 flex items-center gap-4">
                        <input
                            type="color"
                            value={primaryColor}
                            onChange={(e) => setPrimaryColor(e.target.value)}
                            className="w-12 h-12"
                        />
                         <input
                            type="text"
                            value={primaryColor}
                            onChange={(e) => setPrimaryColor(e.target.value)}
                            className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Font Family</label>
                    <select
                        value={fontFamily}
                        onChange={(e) => setFontFamily(e.target.value)}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    >
                        <option>'Inter', sans-serif</option>
                        <option>'Roboto', sans-serif</option>
                        <option>'Lato', sans-serif</option>
                        <option>'Georgia', serif</option>
                    </select>
                </div>
                <div>
                    <button onClick={handleSave} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90">
                        Save Theme
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThemeCustomizer;
