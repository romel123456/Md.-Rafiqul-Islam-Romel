
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Home: React.FC = () => {
  const { services, testimonials, pageContent } = useAppContext();

  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            {pageContent.home.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
            {pageContent.home.heroSubtitle}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition">
              Get a Quote
            </Link>
            <Link to="/services" className="inline-block bg-gray-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-600 transition">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Core Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              We provide a wide range of services to bring your ideas to life.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{service.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
             <h2 className="text-3xl font-extrabold">What Our Clients Say</h2>
             <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
               We are proud to have built strong relationships with our clients.
             </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-800 p-8 rounded-lg">
                <blockquote className="text-lg text-gray-300">
                  <p>"{testimonial.quote}"</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center">
                  <img className="h-12 w-12 rounded-full" src={testimonial.avatarUrl} alt={testimonial.name} />
                  <div className="ml-4">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </figcaption>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
                <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Why SolverCircle</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    A Better Approach to Software Development
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
                    We combine expertise, innovation, and a client-centric focus to deliver exceptional results.
                </p>
            </div>
             <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                        <dt>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Expert Team</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                            Our team consists of highly skilled professionals with years of experience in the tech industry.
                        </dd>
                    </div>
                     <div className="relative">
                        <dt>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Client-Centric Process</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                            We work closely with you at every stage, ensuring transparency and alignment with your goals.
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
