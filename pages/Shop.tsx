import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { ScrollReveal } from '../components/ScrollReveal';

export const Shop = () => {
  const [category, setCategory] = useState<string>('All');
  const { addToCart } = useCart();

  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = category === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === category);

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
            <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Creations</h1>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
                Handmade with precision, patience, and passion by our neurodiverse artisans.
            </p>
            </div>
        </ScrollReveal>

        {/* Filter */}
        <ScrollReveal delay={100}>
            <div className="flex justify-center mb-12 flex-wrap gap-3">
            {categories.map((cat) => (
                <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    category === cat 
                    ? 'bg-brand-600 text-white shadow-md' 
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-brand-200'
                }`}
                >
                {cat}
                </button>
            ))}
            </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredProducts.map((product, idx) => (
            <ScrollReveal key={product.id} delay={idx * 50}>
                <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative">
                {/* Image & Quick Actions */}
                <div className="relative aspect-w-1 aspect-h-1 overflow-hidden bg-gray-100">
                    <Link to={`/shop/${product.id}`}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-80 object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        />
                    </Link>
                    <div className="absolute inset-0 pointer-events-none group-hover:bg-black/20 transition-colors duration-500"></div>
                    
                    {/* Floating Add to Cart Button */}
                    <button
                       onClick={(e) => {
                           e.preventDefault();
                           addToCart(product);
                       }}
                       className="absolute bottom-4 right-4 bg-white text-brand-900 p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-600 hover:text-white z-10"
                       aria-label="Add to cart"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </button>
                </div>

                <div className="p-6 flex flex-col flex-1">
                    <div className="flex-1">
                    <p className="text-xs text-brand-500 font-bold tracking-wider uppercase mb-2">{product.category}</p>
                    <Link to={`/shop/${product.id}`} className="block">
                        <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-brand-700 transition-colors mb-2">
                        {product.name}
                        </h3>
                    </Link>
                    <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-4">{product.shortDescription}</p>
                    </div>
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                        <Link
                            to={`/shop/${product.id}`}
                            className="text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
                </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};
