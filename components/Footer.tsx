import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-brand-800 text-brand-100 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-white">A&N Craft House</h3>
            <p className="text-brand-200 text-sm leading-relaxed">
              Handcrafted with love. Empowering neurodiverse individuals through dignity, creativity, and meaningful work.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/inclusion" className="hover:text-white transition-colors">Our Mission</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get in Touch</h4>
            <p className="text-sm text-brand-200 mb-2">support@ancrafthouse.com</p>
            <p className="text-sm text-brand-200">+91 98765 43210</p>
            <div className="mt-4 flex space-x-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 bg-brand-700 rounded-full flex items-center justify-center hover:bg-brand-600 cursor-pointer transition-colors">F</div>
               <div className="w-8 h-8 bg-brand-700 rounded-full flex items-center justify-center hover:bg-brand-600 cursor-pointer transition-colors">I</div>
               <div className="w-8 h-8 bg-brand-700 rounded-full flex items-center justify-center hover:bg-brand-600 cursor-pointer transition-colors">W</div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-brand-700 text-center text-xs text-brand-300">
          &copy; {new Date().getFullYear()} A&N Craft House. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
