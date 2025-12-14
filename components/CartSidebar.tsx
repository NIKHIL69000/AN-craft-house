import React from 'react';
import { useCart } from '../context/CartContext';
import { XIcon } from './Icons';
import { Link, useNavigate } from 'react-router-dom';

export const CartSidebar = () => {
  const { cart, removeFromCart, updateQuantity, total, isCartOpen, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsCartOpen(false)}
      ></div>
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full animate-slide-in">
          
          <div className="flex items-center justify-between px-6 py-6 bg-white border-b border-gray-100">
            <h2 className="text-xl font-serif font-bold text-gray-900">Your Cart</h2>
            <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
              <XIcon />
            </button>
          </div>

          <div className="flex-1 py-6 px-6 overflow-y-auto">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mb-4 text-brand-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                </div>
                <p className="text-gray-500 text-lg">Your cart is empty.</p>
                <p className="text-sm text-gray-400 mt-2">Looks like you haven't added any unique pieces yet.</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 px-6 py-2 bg-brand-600 text-white rounded-full hover:bg-brand-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {cart.map((item) => (
                  <li key={item.id} className="py-6 flex group">
                    <div className="flex-shrink-0 w-24 h-24 border border-gray-100 rounded-lg overflow-hidden bg-gray-50">
                      <img src={item.image} alt={item.name} className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3 className="font-serif"><Link to={`/shop/${item.id}`} onClick={() => setIsCartOpen(false)}>{item.name}</Link></h3>
                          <p className="ml-4 font-bold text-brand-600">₹{item.price * item.quantity}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm mt-4">
                        <div className="flex items-center border border-gray-200 rounded-md">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-2 py-1 text-gray-600 hover:bg-gray-50"
                          >-</button>
                          <span className="px-2 font-medium text-gray-900">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-2 py-1 text-gray-600 hover:bg-gray-50"
                          >+</button>
                        </div>
                        <button 
                          type="button" 
                          onClick={() => removeFromCart(item.id)}
                          className="font-medium text-red-400 hover:text-red-500 transition-colors text-xs uppercase tracking-wide"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-gray-100 py-6 px-6 bg-gray-50/50">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
                <p>Subtotal</p>
                <p className="font-bold text-lg">₹{total}</p>
              </div>
              <p className="text-sm text-gray-500 mb-6">Shipping and taxes calculated at checkout.</p>
              <button
                onClick={handleCheckout}
                className="w-full flex justify-center items-center px-6 py-4 border border-transparent rounded-lg shadow-lg text-base font-medium text-white bg-gray-900 hover:bg-gray-800 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
