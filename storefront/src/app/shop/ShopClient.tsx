'use client';

import { Product, urlFor } from '@/sanity/client';
import { useCartStore } from '@/store/useCart';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Cart from '@/components/Cart';
import { Plus } from 'lucide-react';

export default function ShopClient({ initialProducts }: { initialProducts: Product[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { addItem } = useCartStore();

  const categories = ['All', ...Array.from(new Set(initialProducts.map(p => p.category)))];

  const filteredProducts = activeCategory === 'All' 
    ? initialProducts 
    : initialProducts.filter(p => p.category === activeCategory);

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); // Prevent link navigation
    addItem({
      id: product._id,
      name: product.name,
      price: product.price,
      size: product.sizeOptions?.[0] || '100ml',
      image: product.image ? urlFor(product.image).url() : '/placeholder.jpg',
    });
  };

  return (
    <>
      <Cart />
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 text-sm tracking-widest uppercase transition-colors rounded-full ${
              activeCategory === category 
                ? 'bg-emerald-900 text-white' 
                : 'bg-white text-gray-500 hover:bg-emerald-50 hover:text-emerald-900 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filteredProducts.map((product) => (
          <Link 
            href={`/product/${product._id}`} 
            key={product._id} 
            className="group flex flex-col bg-white rounded-sm overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full aspect-[4/5] bg-gray-50 overflow-hidden">
              <Image 
                src={product.image ? urlFor(product.image).width(600).height(800).url() : '/placeholder.jpg'} 
                alt={product.name} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Quick Add Button */}
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <button 
                  onClick={(e) => handleQuickAdd(e, product)}
                  className="w-full py-3 bg-white/90 backdrop-blur-sm text-emerald-900 text-sm font-semibold uppercase tracking-widest hover:bg-emerald-900 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" /> Quick Add
                </button>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2">{product.category}</p>
              <h4 className="text-xl font-serif text-gray-900 mb-4">{product.name}</h4>
              <div className="mt-auto flex items-center justify-center gap-3">
                <span className="text-lg font-medium text-gray-900">৳{product.price}</span>
                {product.sizeOptions && product.sizeOptions.length > 0 && (
                  <>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-sm text-gray-500">{product.sizeOptions[0]}</span>
                  </>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
