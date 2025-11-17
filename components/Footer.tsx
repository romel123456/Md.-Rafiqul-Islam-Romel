
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold text-white">Solver<span className="text-primary">Circle</span></h3>
            <p className="mt-4 text-sm text-gray-400">
              Your trusted partner for innovative software solutions. We build the future, one line of code at a time.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Quick Links</h4>
            <ul className="mt-4 space-y-4">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact</h4>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start">
                 <p>123 Tech Avenue<br/>Innovation City, 10101</p>
              </li>
              <li><a href="mailto:contact@solvercircle.com" className="hover:text-white">contact@solvercircle.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} SolverCircle. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             {/* Add Social Icons Here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
