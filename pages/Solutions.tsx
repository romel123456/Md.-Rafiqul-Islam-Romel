
import React from 'react';
import { useAppContext } from '../context/AppContext';

const Solutions: React.FC = () => {
    const { caseStudies } = useAppContext();

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Industry Solutions & Case Studies
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            We apply our technical expertise to solve unique challenges across various industries.
          </p>
        </div>
        <div className="mt-16 grid gap-12 lg:grid-cols-1">
            {caseStudies.map(study => (
                <div key={study.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <img className="h-64 w-full md:w-1/3 object-cover" src={study.imageUrl} alt={study.title} />
                    <div className="p-8 flex flex-col justify-center">
                        <p className="text-sm font-semibold text-primary uppercase tracking-wide">{study.industry}</p>
                        <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{study.title}</h3>
                        <p className="mt-4 text-base text-gray-500 dark:text-gray-400">{study.description}</p>
                         <div className="mt-6">
                            <a href="#" className="text-primary font-semibold hover:underline">Read Case Study &rarr;</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
