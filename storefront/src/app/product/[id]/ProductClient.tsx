'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Check, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/useCart';
import { useState } from 'react';
import { Cake, urlFor } from '@/sanity/client';

export default function ProductClient({ product }: { product: Cake }) {
  const router = useRouter();
  const { addItem } = useCartStore();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image ? urlFor(product.image).url() : '/placeholder.jpg',
      weight: product.weightOptions?.[0] || '1 lb',
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <button 
        onClick={() => router.push('/menu')}
        className="flex items-center gap-2 text-gray-500 hover:text-amber-700 transition-colors mb-12 text-sm uppercase tracking-wider font-medium group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Menu
      </button>

      <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
        {/* Image Gallery */}
        <div className="relative aspect-[4/5] w-full bg-gray-100 overflow-hidden shadow-sm">
          <Image 
            src={product.image ? urlFor(product.image).width(800).height(1000).url() : '/placeholder.jpg'} 
            alt={product.name || 'Cake image'} 
            fill 
            className="object-cover"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 mb-3">
              {product.category || 'Specialty'} Collection
            </p>
            <h1 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-4 leading-tight">
              {product.name}
            </h1>
            <div className="text-3xl font-medium text-gray-900 mb-6">
              ৳{product.price || 0}
            </div>
            <p className="text-gray-600 leading-relaxed font-light text-lg mb-8">
              {product.description}
            </p>
          </div>

          <div className="border-t border-b border-gray-200 py-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-gray-900 uppercase tracking-wider text-sm">Size Options</span>
              <span className="text-gray-500">
                {product.weightOptions?.join(', ') || 'Standard'}
              </span>
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            className={`w-full py-4 px-6 flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-widest transition-all ${
              added 
                ? 'bg-green-600 text-white hover:bg-green-700' 
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            {added ? (
              <>
                <Check className="w-5 h-5" />
                Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </>
            )}
          </button>
          <p className="text-center text-xs text-gray-400 mt-4 font-light">
            Made fresh to order. Requires 24h notice.
          </p>
        </div>
      </div>
    </>
  );
}
