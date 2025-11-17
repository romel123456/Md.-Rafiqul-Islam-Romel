
import React from 'react';
import { useAppContext } from '../context/AppContext';

const Services: React.FC = () => {
  const { services } = useAppContext();

  return (
    <div className="bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            We offer a comprehensive suite of services to meet your digital needs and drive business growth.
          </p>
        </div>
        <div className="mt-16 space-y-12">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row items-center gap-8 lg:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2">
                <div className="w-16 h-16 rounded-lg bg-primary text-white flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8"/>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">{service.longDescription}</p>
              </div>
              <div className="md:w-1/2">
                <img src={`https://picsum.photos/seed/service${index}/600/400`} alt={service.title} className="rounded-lg shadow-lg w-full"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
