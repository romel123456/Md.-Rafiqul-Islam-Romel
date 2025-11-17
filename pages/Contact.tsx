
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">Contact Us</h1>
            <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-400">
                Have a project in mind? We'd love to hear from you.
            </p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
             <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow">
                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Office</h2>
                 <p className="mt-4 text-gray-600 dark:text-gray-300">
                     123 Tech Avenue<br/>
                     Innovation City, 10101<br/>
                     United States
                 </p>
                 <h3 className="mt-8 text-xl font-bold text-gray-900 dark:text-white">Contact Info</h3>
                 <p className="mt-2 text-gray-600 dark:text-gray-300">Email: contact@solvercircle.com</p>
                 <p className="mt-1 text-gray-600 dark:text-gray-300">Phone: +1 (234) 567-890</p>
                 <div className="mt-8 bg-gray-300 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
                     [Google Maps Placeholder]
                 </div>
             </div>
          </div>
          <div className="lg:col-span-2">
            <form action="#" method="POST" className="space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full name
                </label>
                <div className="mt-1">
                  <input type="text" name="full-name" id="full-name" autoComplete="name" className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <div className="mt-1">
                  <input id="email" name="email" type="email" autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <div className="mt-1">
                  <textarea id="message" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
