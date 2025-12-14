import React from 'react';

export const Inclusion = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-brand-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-900">Crafting Possibilities</h1>
          <p className="mt-6 text-xl text-brand-800 max-w-3xl mx-auto">
            At A&N Craft House, we believe that creativity knows no bounds, and talent exists in everyone.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Section 1 */}
        <div className="prose prose-lg text-gray-600 mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 font-serif">A Workspace for Everyone</h2>
          <p>
            Our studio is designed to be a safe, calm, and supportive environment for neurodiverse individuals. 
            We understand that traditional workspaces often fail to accommodate different sensory and processing needs. 
            Here, we focus on ability, not disability.
          </p>
          <p>
            By adapting our tools and techniques—from color-coded resin stations to ergonomic pottery wheels—we ensure 
            that every artisan can work with dignity and independence.
          </p>
        </div>

        {/* Section 2: Image break */}
        <div className="rounded-xl overflow-hidden shadow-lg">
           <img 
            src="https://picsum.photos/seed/inclusion/1200/600" 
            alt="Team working together" 
            className="w-full h-auto"
           />
        </div>

        {/* Section 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Skill Development</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We don't just offer jobs; we offer careers. Our training programs focus on:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Fine motor skill enhancement through jewellery making.</li>
              <li>Focus and patience through Mandala art.</li>
              <li>Teamwork and social interaction in a structured setting.</li>
              <li>Financial independence through fair wages.</li>
            </ul>
          </div>
          <div className="bg-brand-50 p-8 rounded-lg border border-brand-100">
            <blockquote className="text-lg italic text-brand-800">
              "Working here has given my son a sense of purpose he never had before. He wakes up excited to create."
            </blockquote>
            <p className="mt-4 font-bold text-brand-900">— Parent of an Artisan</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-10 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Support Our Mission</h2>
          <p className="text-gray-600 mb-8">Every purchase you make directly contributes to sustaining this inclusive ecosystem.</p>
          <a href="/#/shop" className="inline-block px-8 py-3 bg-brand-600 text-white font-semibold rounded-md hover:bg-brand-700 transition-colors">
            Shop Handmade
          </a>
        </div>
      </div>
    </div>
  );
};
