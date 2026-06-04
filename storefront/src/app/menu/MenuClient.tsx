'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Cake, urlFor } from '@/sanity/client';

export default function MenuClient({ initialCakes }: { initialCakes: Cake[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Defensive check for category uniqueness since Sanity data might be missing categories initially
  const categoryNames = initialCakes
    .map(c => c.category)
    .filter(Boolean); // removes undefined/null
  
  const categories = ['All', ...Array.from(new Set(categoryNames))];

  const filteredCakes = initialCakes.filter(cake => {
    const matchesSearch = 
      (cake.name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) || 
      (cake.description?.toLowerCase() || '').includes(searchQuery.toLowerCase());
      
    const matchesCategory = activeCategory === 'All' || cake.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Menu</h1>
        <p className="text-gray-500 font-light max-w-2xl mx-auto">
          Explore our artisanal collection of hand-crafted cakes, baked fresh daily with premium ingredients.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium tracking-wide uppercase transition-colors ${
                activeCategory === cat 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-amber-600 hover:text-amber-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <input 
            type="text" 
            placeholder="Search cakes..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Product Grid */}
      {filteredCakes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {filteredCakes.map((cake) => (
            <Link 
              href={`/product/${cake._id}`} 
              key={cake._id} 
              className="group flex flex-col"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
                <Image 
                  src={cake.image ? urlFor(cake.image).width(600).height(800).url() : '/placeholder.jpg'} 
                  alt={cake.name || 'Cake'} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              
              <div className="text-center px-4 flex-1 flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">{cake.category || 'Cake'}</p>
                <h4 className="text-xl font-serif text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">{cake.name}</h4>
                <div className="mt-auto pt-4 flex items-center justify-center gap-3">
                  <span className="text-lg text-gray-900">৳{cake.price || 0}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="text-sm text-gray-500">{cake.weightOptions?.[0] || '1 lb'}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-2xl font-serif text-gray-900 mb-2">No cakes found</h3>
          <p className="text-gray-500 font-light">
            {initialCakes.length === 0 
              ? "Your Sanity database is empty. Add some cakes in the admin dashboard!" 
              : `We couldn't find anything matching "${searchQuery}".`
            }
          </p>
          <button 
            onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
            className="mt-6 text-amber-600 uppercase tracking-widest text-sm font-semibold hover:underline"
          >
            Clear Filters
          </button>
        </div>
      )}
    </>
  );
}
