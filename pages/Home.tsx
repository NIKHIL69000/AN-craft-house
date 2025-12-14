import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, CheckCircleIcon, StarIcon } from '../components/Icons';
import { PRODUCTS } from '../constants';
import { ScrollReveal } from '../components/ScrollReveal';

export const Home = () => {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* 
        HERO SECTION 
        Design: Modern SaaS style with animated blobs and glassmorphism.
      */}
      <section className="relative min-h-screen flex items-center justify-center bg-brand-50 overflow-hidden pt-20">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-20 w-96 h-96 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
          <ScrollReveal>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-200 bg-white/60 backdrop-blur-sm mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-brand-800 tracking-wide uppercase">Handcrafting Happiness</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-brand-900 mb-6 leading-[1.1] drop-shadow-sm">
              Art that Touches <br className="hidden md:block" />
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-600">Heart & Home</span>
                <span className="absolute bottom-3 left-0 w-full h-4 bg-brand-200/60 -rotate-2 -z-0 rounded-full blur-[1px]"></span>
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Discover unique handmade treasures crafted by neurodiverse artisans. 
              Celebrating creativity, dignity, and inclusion in every piece.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500} className="flex flex-col sm:flex-row gap-5 w-full justify-center">
            <Link 
              to="/shop" 
              className="group relative px-10 py-5 bg-brand-800 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
              
              <span className="relative z-20 flex items-center justify-center text-lg">
                Shop Collection 
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </Link>
            <Link 
              to="/inclusion" 
              className="px-10 py-5 bg-white/80 backdrop-blur-sm border border-brand-200 text-brand-800 font-semibold rounded-full hover:bg-white hover:border-brand-300 transition-all shadow-sm hover:shadow-md text-lg transform hover:-translate-y-1"
            >
              Our Mission
            </Link>
          </ScrollReveal>

          {/* Hero Image Collage - Hidden on small screens to save space/reduce complexity */}
          <ScrollReveal delay={700} className="hidden md:block mt-16 md:mt-24 relative w-full max-w-5xl">
            <div className="grid grid-cols-12 gap-6 items-end">
              <div className="col-span-4 transform translate-y-10 animate-float hover:z-20 transition-all duration-500 hover:scale-105">
                <img src="https://picsum.photos/seed/resin1/400/500" alt="Resin Art" className="rounded-2xl shadow-2xl object-cover h-64 w-full opacity-90 hover:opacity-100 transition-opacity ring-1 ring-white/50" />
              </div>
              <div className="col-span-4 z-10 transform -translate-y-10 hover:scale-105 transition-transform duration-500">
                <img src="https://picsum.photos/seed/lippan1/400/500" alt="Lippan Art" className="rounded-2xl shadow-2xl border-8 border-white object-cover h-96 w-full" />
              </div>
              <div className="col-span-4 transform translate-y-4 animate-float hover:z-20 transition-all duration-500 hover:scale-105" style={{ animationDelay: '2s' }}>
                <img src="https://picsum.photos/seed/macrame1/400/500" alt="Macrame" className="rounded-2xl shadow-2xl object-cover h-64 w-full opacity-90 hover:opacity-100 transition-opacity ring-1 ring-white/50" />
              </div>
            </div>
            {/* Decorative decorative circle */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-r from-brand-100/40 via-white/0 to-brand-100/40 rounded-full blur-3xl"></div>
          </ScrollReveal>
        </div>
      </section>

      {/* 
        FEATURE SECTION (BENTO GRID)
        Design: Asymmetrical grid for visual interest.
      */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-2">Why Choose Us</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-brand-900">Crafted for Good</h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Handmade (Large) */}
            <ScrollReveal className="md:col-span-2 bg-brand-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group border border-brand-100 hover:border-brand-200 transition-colors">
              <div className="relative z-10 flex-1">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md text-brand-600 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <HeartIcon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-brand-900">Handmade with Love</h4>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  Every stroke, knot, and pour is done by hand. Our products carry the unique imprint of the artisan, ensuring you own a one-of-a-kind masterpiece.
                </p>
                <Link to="/shop" className="text-brand-700 font-bold border-b-2 border-brand-300 hover:border-brand-700 transition-colors inline-flex items-center group-hover:translate-x-1 duration-300">
                  Shop Handmade <span className="ml-2">&rarr;</span>
                </Link>
              </div>
              <div className="flex-1 w-full h-64 md:h-auto rounded-2xl overflow-hidden shadow-lg transform group-hover:rotate-2 group-hover:scale-105 transition-transform duration-700">
                 <img src="https://picsum.photos/seed/artisan/600/400" alt="Hands working" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>

            {/* Card 2: Impact (Vertical) */}
            <ScrollReveal delay={200} className="bg-brand-800 text-brand-50 rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-brand-100 group-hover:scale-110 transition-transform duration-500">
                  <CheckCircleIcon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Social Impact</h4>
                <p className="text-brand-200 leading-relaxed text-lg">
                  Your purchase creates employment and dignity for neurodiverse individuals.
                </p>
              </div>
              <div className="mt-8 relative h-40 w-full rounded-xl overflow-hidden opacity-80 group-hover:opacity-100 transition-all duration-500 shadow-inner">
                 <img src="https://picsum.photos/seed/smile/400/300" alt="Smiling artisan" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
            </ScrollReveal>

            {/* Card 3: Sustainable (Wide) */}
            <ScrollReveal delay={300} className="md:col-span-3 bg-white border border-gray-100 shadow-lg rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                 <div className="w-14 h-14 bg-green-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Sustainable & Eco-Friendly</h4>
                    <p className="text-gray-500 max-w-2xl text-lg">We prioritize non-toxic resins, locally sourced clay, and recycled cotton for our macrame, ensuring our art is kind to the planet.</p>
                 </div>
              </div>
              <Link to="/inclusion" className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all shadow-md hover:shadow-lg whitespace-nowrap">Learn More</Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 
        IMMERSIVE STORY SECTION 
        Design: Parallax-feel full width image with overlay.
      */}
      <section className="relative py-32 bg-brand-900 overflow-hidden group">
         <img 
            src="https://picsum.photos/seed/workshop/1920/1080" 
            alt="Workshop background" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 transform scale-105 group-hover:scale-100 transition-transform duration-[3s]"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-brand-900"></div>
         
         <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-lg">
                "We don't just make things.<br/> We build confidence."
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="w-24 h-1 bg-brand-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl md:text-2xl text-brand-100 font-light leading-relaxed max-w-3xl mx-auto">
                A&N Craft House isn't just a store. It's a sanctuary where different abilities are celebrated. 
                When you display our art in your home, you are displaying a story of resilience, patience, and joy.
              </p>
            </ScrollReveal>
         </div>
      </section>

      {/* 
        PRODUCT PREVIEW 
        Design: Minimalist, clean grid with high-end hover effects.
      */}
      <section className="py-24 bg-brand-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <ScrollReveal>
              <h2 className="text-4xl font-serif font-bold text-gray-900">Curated Favorites</h2>
            </ScrollReveal>
            <Link to="/shop" className="group text-brand-600 font-semibold flex items-center text-lg">
              View all products 
              <span className="ml-2 transform group-hover:translate-x-2 transition-transform">&rarr;</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 100}>
                <Link to={`/shop/${product.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Fixed Glitch: Replaced 'aspect-w-4 aspect-h-3' with explicit height 'h-72' to ensure image container stability without plugins */}
                  <div className="relative h-80 w-full overflow-hidden bg-gray-200">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-out"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/10 transition-colors duration-500"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-brand-900 uppercase tracking-wide shadow-sm">
                      {product.category}
                    </div>
                    {/* Hover Button */}
                    <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="bg-white text-brand-900 p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="text-xl font-bold text-gray-900 font-serif group-hover:text-brand-700 transition-colors">{product.name}</h3>
                       <p className="text-xl font-medium text-brand-600">₹{product.price}</p>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mt-3">
                       <span className="flex items-center text-yellow-500 mr-2 bg-yellow-50 px-2 py-0.5 rounded-md">
                         <StarIcon fill="currentColor" className="w-4 h-4" />
                         <span className="ml-1 text-yellow-700 font-bold">5.0</span>
                       </span>
                       <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mx-3"></span>
                       <span className="font-medium text-gray-600">Handmade</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};