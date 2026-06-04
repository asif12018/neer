'use client';

import { useCartStore } from '@/store/useCart';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

export default function Cart() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, getTotalPrice } = useCartStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Cart Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col font-sans">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-700" />
            <h2 className="text-xl font-serif text-gray-900">Your Cart</h2>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500">
              <ShoppingBag className="w-12 h-12 mb-4 text-gray-300" />
              <p className="font-medium text-gray-900 mb-1">Your cart is empty</p>
              <p className="text-sm font-light">Looks like you haven&apos;t added any cakes yet.</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-6 text-amber-600 uppercase tracking-widest text-xs font-semibold hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="relative w-24 h-24 bg-gray-100 flex-shrink-0">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-1 py-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium text-gray-900 line-clamp-1">{item.name}</h3>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">{item.weight}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-gray-200">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 text-sm text-gray-900 font-medium">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-semibold text-gray-900">৳{item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 uppercase tracking-widest text-xs font-semibold">Subtotal</span>
              <span className="text-2xl font-serif text-gray-900">৳{getTotalPrice()}</span>
            </div>
            <p className="text-xs text-gray-500 font-light mb-6">Shipping and taxes calculated at checkout.</p>
            <button className="w-full py-4 bg-gray-900 text-white text-sm font-semibold uppercase tracking-widest hover:bg-amber-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
