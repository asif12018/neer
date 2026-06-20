'use client';

import { Product, urlFor } from '@/sanity/client';
import { useCartStore } from '@/store/useCart';
import { Minus, Plus, ShoppingBag, ArrowLeft, Leaf, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ProductClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizeOptions?.[0] || '100ml');
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem({
      id: product._id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image ? urlFor(product.image).url() : '/placeholder.jpg',
      quantity
    });
    toast.success(`${quantity}x ${product.name} added to cart!`);
  };

  return (
    <div className="bg-white rounded-sm shadow-xl overflow-hidden border border-gray-100">
      <div className="grid md:grid-cols-2">
        {/* Product Image */}
        <div className="relative aspect-square md:aspect-auto md:h-full bg-gray-50">
          <Image 
            src={product.image ? urlFor(product.image).url() : '/placeholder.jpg'} 
            alt={product.name} 
            fill 
            className="object-cover"
            priority
          />
          <Link href="/shop" className="absolute top-6 left-6 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-colors shadow-sm">
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>

        {/* Product Info */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600 mb-4">{product.category}</p>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">{product.name}</h1>
          <p className="text-2xl text-gray-900 mb-8 font-light">৳{product.price}</p>
          
          <div className="prose prose-sm text-gray-500 font-light leading-relaxed mb-10">
            <p>{product.description}</p>
          </div>

          <div className="space-y-8 mb-10">
            {/* Size Options */}
            {product.sizeOptions && product.sizeOptions.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-900 mb-4">Select Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizeOptions.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 text-sm font-medium transition-colors border ${
                        selectedSize === size 
                          ? 'border-emerald-900 bg-emerald-900 text-white' 
                          : 'border-gray-200 text-gray-600 hover:border-emerald-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-900 mb-4">Quantity</h3>
              <div className="inline-flex items-center border border-gray-200 rounded-sm">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium text-gray-900">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full py-4 bg-emerald-900 text-white font-semibold tracking-widest uppercase hover:bg-emerald-950 transition-colors flex items-center justify-center gap-3 shadow-md"
          >
            <ShoppingBag className="w-5 h-5" />
            Add to Cart - ৳{product.price * quantity}
          </button>

          {/* Guarantees */}
          <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Leaf className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900">100% Natural</h4>
                <p className="text-xs text-gray-500 mt-1 font-light">Ethically sourced herbs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900">Safe for All</h4>
                <p className="text-xs text-gray-500 mt-1 font-light">No harmful chemicals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
