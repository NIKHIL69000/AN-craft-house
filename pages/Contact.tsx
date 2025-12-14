import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from '../components/Icons';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
  };

  return (
    <div className="bg-brand-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900">Get in Touch</h1>
          <p className="mt-4 text-lg text-gray-600">We'd love to hear from you. Questions about custom orders? Ask away!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white rounded-xl shadow-sm p-8 h-full">
            <h2 className="text-2xl font-semibold mb-8 text-gray-900">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-brand-100 rounded-lg text-brand-600">
                  <PhoneIcon />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone & WhatsApp</h3>
                  <p className="mt-1 text-gray-600">+91 98765 43210</p>
                  <a 
                    href="https://wa.me/919876543210" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-green-600 hover:text-green-700"
                  >
                    Chat on WhatsApp &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-brand-100 rounded-lg text-brand-600">
                  <MailIcon />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">hello@ancrafthouse.com</p>
                  <p className="text-sm text-gray-500">We usually reply within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-brand-100 rounded-lg text-brand-600">
                  <MapPinIcon />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Workshop Location</h3>
                  <p className="mt-1 text-gray-600">
                    123, Art Lane, Creative Quarter,<br />
                    Mumbai, Maharashtra - 400001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Send us a Message</h2>
            
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
                 <p className="text-gray-600 mt-2">Thank you for reaching out. We will get back to you shortly.</p>
                 <button onClick={() => setSubmitted(false)} className="mt-6 text-brand-600 hover:text-brand-800 font-medium">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 transition-colors text-gray-900 bg-white placeholder-gray-400"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 transition-colors text-gray-900 bg-white placeholder-gray-400"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 transition-colors text-gray-900 bg-white placeholder-gray-400"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};