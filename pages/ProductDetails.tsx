import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { StarIcon, CheckCircleIcon } from '../components/Icons';
import { ScrollReveal } from '../components/ScrollReveal';

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'handmade' | 'reviews'>('desc');
  
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
        <Link to="/shop" className="text-brand-600 hover:underline">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    setIsCartOpen(true); // Open cart immediately
  };

  return (
    <div className="bg-white min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
             <Link to="/shop" className="text-gray-500 hover:text-brand-600 transition-colors inline-flex items-center text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Back to Shop
             </Link>
        </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-start">
          {/* Image Gallery */}
          <ScrollReveal className="relative">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-center object-cover hover:scale-105 transition-transform duration-700"
                />
            </div>
            {/* Thumbnails placeholder for future */}
            <div className="mt-4 grid grid-cols-4 gap-4">
                 {[1, 2, 3].map((i) => (
                     <div key={i} className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                         <img src={product.image} className="w-full h-full object-cover" alt="" />
                     </div>
                 ))}
            </div>
          </ScrollReveal>

          {/* Product Info */}
          <ScrollReveal delay={200} className="mt-10 px-2 sm:px-0 sm:mt-16 lg:mt-0">
            <p className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} fill={i < 4 ? "currentColor" : "none"} className="w-5 h-5" />
                    ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">({product.reviews.length} reviews)</span>
            </div>

            <p className="text-3xl text-gray-900 font-medium mb-8">₹{product.price}</p>
            
            <div className="prose prose-sm text-gray-600 mb-8 leading-relaxed">
              <p>{product.shortDescription}</p>
            </div>

            {/* Quantity */}
            <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center w-32 border border-gray-300 rounded-md">
                    <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                    >-</button>
                    <div className="flex-1 text-center font-medium text-gray-900">{quantity}</div>
                    <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                    >+</button>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
               <button
                onClick={handleAddToCart}
                className="flex-1 bg-white border-2 border-brand-600 text-brand-600 rounded-lg py-4 px-8 flex items-center justify-center text-base font-bold hover:bg-brand-50 transition-all transform active:scale-95"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-brand-600 border-2 border-transparent rounded-lg py-4 px-8 flex items-center justify-center text-base font-bold text-white hover:bg-brand-700 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 active:scale-95 active:translate-y-0"
              >
                Buy Now
              </button>
            </div>
            
            <div className="flex items-center text-sm text-green-600 bg-green-50 p-3 rounded-md mb-8">
              <CheckCircleIcon className="flex-shrink-0 mr-2 h-5 w-5" />
              <p className="font-medium">In stock. Ready to ship in 24 hours.</p>
            </div>

            {/* Tabs */}
            <div className="border-t border-gray-200">
                <div className="flex border-b border-gray-200">
                    <button 
                        onClick={() => setActiveTab('desc')}
                        className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${activeTab === 'desc' ? 'border-brand-600 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        Description
                    </button>
                    <button 
                        onClick={() => setActiveTab('handmade')}
                        className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${activeTab === 'handmade' ? 'border-brand-600 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        Handmade Details
                    </button>
                    <button 
                        onClick={() => setActiveTab('reviews')}
                        className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${activeTab === 'reviews' ? 'border-brand-600 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        Reviews
                    </button>
                </div>
                <div className="py-6 animate-fade-in-up">
                    {activeTab === 'desc' && (
                        <p className="text-gray-600 leading-relaxed">{product.fullDescription}</p>
                    )}
                    {activeTab === 'handmade' && (
                        <div className="bg-brand-50 p-6 rounded-lg">
                            <h4 className="font-serif font-bold text-brand-800 mb-2">The Process</h4>
                            <p className="text-gray-700 italic">{product.handmadeDetails}</p>
                        </div>
                    )}
                    {activeTab === 'reviews' && (
                        <div className="space-y-6">
                            {product.reviews.length > 0 ? product.reviews.map(review => (
                                <div key={review.id} className="pb-6 border-b border-gray-100 last:border-0">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-bold text-gray-900">{review.user}</span>
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <StarIcon key={i} fill={i < review.rating ? "currentColor" : "none"} className="w-4 h-4" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-600">{review.comment}</p>
                                </div>
                            )) : <p className="text-gray-500">No reviews yet.</p>}
                        </div>
                    )}
                </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
