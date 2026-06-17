import Navbar from '@/components/Navbar';
import Cart from '@/components/Cart';
import Image from 'next/image';
import { Leaf, Heart, Droplets } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      <Navbar />
      <Cart />
      
      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Our Story</h1>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            Neer Natural Care was born from a simple belief: nature provides the best solutions for our body. We craft organic, chemical-free hair care products that bring traditional Ayurvedic wisdom to modern beauty routines.
          </p>
        </section>

        {/* Feature Image */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="relative h-[400px] md:h-[600px] w-full rounded-sm overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1615396899839-c99c121888b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Natural ingredients" 
              fill 
              className="object-cover"
            />
          </div>
        </section>

        {/* Core Values */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-4">Purity First</h3>
              <p className="text-gray-500 font-light">We use only cold-pressed oils and pure botanical extracts. If we wouldn't put it on our own skin, we don't put it in our products.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-4">Cruelty Free</h3>
              <p className="text-gray-500 font-light">We love animals. Our products are never tested on animals, and we source our ingredients ethically and sustainably.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                <Droplets className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-4">Effective Results</h3>
              <p className="text-gray-500 font-light">Nature isn't just gentle; it's powerful. Our formulas are rigorously tested to ensure they deliver visible, long-lasting results for your hair.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
