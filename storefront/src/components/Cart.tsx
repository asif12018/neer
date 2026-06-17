'use client';

import { useCartStore } from '@/store/useCart';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

export default function Cart() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, getTotalPrice } = useCartStore();

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-white shadow-2xl z-50 flex flex-col transform transition-transform">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-serif text-gray-900">Your Cart</h2>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
              <ShoppingBag className="w-12 h-12 text-gray-200" />
              <p className="font-light tracking-wide">Your cart is empty</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold uppercase tracking-widest text-emerald-600 hover:text-emerald-700"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4 group">
                  <div className="relative w-20 h-24 bg-gray-50 flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-serif text-gray-900 pr-4">{item.name}</h3>
                        <button 
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 font-light tracking-wider">{item.size}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-gray-200 rounded-sm bg-white">
                        <button 
                          onClick={() => updateQuantity(item.id, item.size, Math.max(0, item.quantity - 1))}
                          className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-gray-900">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-medium text-gray-900">৳{item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between text-base font-serif text-gray-900 mb-6">
              <span>Subtotal</span>
              <span>৳{getTotalPrice()}</span>
            </div>
            <button className="w-full py-4 bg-emerald-800 text-white text-sm font-semibold tracking-widest uppercase hover:bg-emerald-900 transition-colors shadow-sm">
              Proceed to Checkout
            </button>
            <p className="text-center text-xs text-gray-500 mt-4 font-light">
              Shipping and taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
}
