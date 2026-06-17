'use client';

import { useCartStore } from '@/store/useCart';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { getTotalItems, setIsOpen } = useCartStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isDarkText = isScrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 -ml-2 transition-colors ${isDarkText ? 'text-gray-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start flex-1 md:flex-none">
            <Link href="/" className={`font-serif text-3xl tracking-wider transition-colors ${isDarkText ? 'text-emerald-900' : 'text-white'}`}>
              Neer
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-12">
            <Link 
              href="/" 
              className={`text-sm uppercase tracking-[0.2em] transition-colors relative group ${isDarkText ? 'text-gray-600 hover:text-emerald-700' : 'text-gray-200 hover:text-white'}`}
            >
              Home
              <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-emerald-500 scale-x-0 transition-transform group-hover:scale-x-100 ${isActive('/') ? 'scale-x-100' : ''}`}></span>
            </Link>
            <Link 
              href="/shop" 
              className={`text-sm uppercase tracking-[0.2em] transition-colors relative group ${isDarkText ? 'text-gray-600 hover:text-emerald-700' : 'text-gray-200 hover:text-white'}`}
            >
              Shop
              <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-emerald-500 scale-x-0 transition-transform group-hover:scale-x-100 ${isActive('/shop') ? 'scale-x-100' : ''}`}></span>
            </Link>
            <Link 
              href="/about" 
              className={`text-sm uppercase tracking-[0.2em] transition-colors relative group ${isDarkText ? 'text-gray-600 hover:text-emerald-700' : 'text-gray-200 hover:text-white'}`}
            >
              About Us
              <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-emerald-500 scale-x-0 transition-transform group-hover:scale-x-100 ${isActive('/about') ? 'scale-x-100' : ''}`}></span>
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm uppercase tracking-[0.2em] transition-colors relative group ${isDarkText ? 'text-gray-600 hover:text-emerald-700' : 'text-gray-200 hover:text-white'}`}
            >
              Contact
              <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-emerald-500 scale-x-0 transition-transform group-hover:scale-x-100 ${isActive('/contact') ? 'scale-x-100' : ''}`}></span>
            </Link>
          </div>

          {/* Icons (Search + Cart) */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link 
              href="/shop"
              className={`transition-colors ${isDarkText ? 'text-gray-900 hover:text-emerald-700' : 'text-white hover:text-emerald-200'}`}
              aria-label="Search Shop"
            >
              <Search className="w-5 h-5" />
            </Link>
            <button 
              onClick={() => setIsOpen(true)}
              className={`relative flex items-center transition-colors group ${isDarkText ? 'text-gray-900 hover:text-emerald-700' : 'text-white hover:text-emerald-200'}`}
            >
              <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out origin-top ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
        <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-sm uppercase tracking-widest py-3 border-b border-gray-100 ${isActive('/') ? 'text-emerald-600 font-semibold' : 'text-gray-600'}`}
          >
            Home
          </Link>
          <Link 
            href="/shop" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-sm uppercase tracking-widest py-3 border-b border-gray-100 ${isActive('/shop') ? 'text-emerald-600 font-semibold' : 'text-gray-600'}`}
          >
            Shop
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-sm uppercase tracking-widest py-3 border-b border-gray-100 ${isActive('/about') ? 'text-emerald-600 font-semibold' : 'text-gray-600'}`}
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-sm uppercase tracking-widest py-3 border-b border-gray-100 ${isActive('/contact') ? 'text-emerald-600 font-semibold' : 'text-gray-600'}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
