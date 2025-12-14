import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { MenuIcon, XIcon, ShoppingCartIcon } from './Icons';
import { Logo } from './Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, setIsCartOpen } = useCart();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path ? "text-brand-800 font-bold" : "text-gray-600 hover:text-brand-600 font-medium";

  return (
    <nav className="sticky top-0 z-50 bg-brand-50/80 backdrop-blur-md border-b border-brand-200/50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center animate-slide-in-down" style={{ animationDelay: '0ms' }}>
             <Link to="/" className="group flex items-center gap-2" aria-label="A&N Craft House Home">
               {/* Using SVG Component for perfect rendering */}
               <Logo className="h-20 w-auto transition-transform duration-500 ease-out group-hover:scale-105 group-hover:drop-shadow-md" />
             </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {['/', '/shop', '/inclusion', '/contact'].map((path, idx) => (
              <div key={path} className="animate-slide-in-down" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <Link 
                  to={path} 
                  className={`relative px-1 py-1 ${isActive(path)} hover-underline-animation transition-colors duration-200`}
                >
                  {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </div>
            ))}
            
            <div className="animate-slide-in-down" style={{ animationDelay: '500ms' }}>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-3 text-brand-700 hover:text-brand-900 transition-all hover:bg-brand-100/50 rounded-full group"
                aria-label="Open Cart"
              >
                <ShoppingCartIcon className="transition-transform group-hover:scale-110" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 inline-flex items-center justify-center min-w-[20px] h-5 px-1 text-xs font-bold leading-none text-white transform translate-x-0 translate-y-0 bg-brand-600 rounded-full shadow-sm animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 mr-2 text-brand-700 relative"
            >
              <ShoppingCartIcon />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 inline-flex w-2.5 h-2.5 rounded-full bg-brand-600 ring-2 ring-white"></span>
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-brand-700 hover:text-brand-900 focus:outline-none hover:bg-brand-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-brand-50/95 backdrop-blur-xl border-b border-brand-200 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {['/', '/shop', '/inclusion', '/contact'].map((path) => (
            <Link 
              key={path}
              to={path} 
              onClick={closeMenu} 
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-800 hover:bg-brand-100 transition-all"
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};