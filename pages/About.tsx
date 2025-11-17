
import React from 'react';
import { useAppContext } from '../context/AppContext';

const About: React.FC = () => {
    const { teamMembers, pageContent } = useAppContext();
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              About SolverCircle
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500 dark:text-gray-400">
             {pageContent.about.mainContent}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                {pageContent.about.mission}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Vision</h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                To be a global leader in technology solutions, known for our innovation, quality, and commitment to client success. We aim to create a positive impact on the world through technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">Meet Our Team</h2>
              <p className="text-xl text-gray-500 dark:text-gray-400">
                The brilliant minds behind our success.
              </p>
            </div>
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
              {teamMembers.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt={person.name} />
                    </div>
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-gray-900 dark:text-white">{person.name}</h3>
                      <p className="text-primary">{person.role}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500 dark:text-gray-400">{person.bio}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
