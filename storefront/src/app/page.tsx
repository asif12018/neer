import Cart from '@/components/Cart';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Leaf, ShieldCheck, Droplets } from 'lucide-react';
import { getFeaturedProducts, urlFor } from '@/sanity/client';

export const revalidate = 10; // Revalidate every 10 seconds

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="min-h-screen bg-[#FAFAFA] selection:bg-emerald-100 selection:text-emerald-900 font-sans text-gray-900">
      <Navbar />
      <Cart />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/neer-hero.png" 
              alt="Neer Natural Care Products" 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
            <span className="inline-block py-1 px-4 border border-white/40 rounded-full text-white/90 text-xs uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
              100% Organic Ingredients
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
              Pure Nature. <br/> Pure You.
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Discover the power of nature with our restorative hair oils and masks. Handcrafted with traditional herbs, coconut, amla, and aloe vera for strong, healthy, beautiful hair.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/shop" 
                className="group relative px-8 py-4 bg-white text-emerald-900 font-semibold tracking-wider uppercase text-sm transition-all hover:bg-emerald-50 overflow-hidden flex items-center gap-3 rounded-sm shadow-xl"
              >
                <span className="relative z-10">Shop Collection</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Promotional Section */}
        <section className="bg-emerald-900 text-emerald-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-2 mb-4 text-emerald-300">
                  <Leaf className="w-5 h-5 fill-current" />
                  <span className="text-sm font-semibold uppercase tracking-widest">Bestseller</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                  Repair & Restore <br/> Hair Mask
                </h2>
                <p className="text-emerald-100/80 text-lg mb-8 font-light leading-relaxed">
                  Infused with the pure goodness of coconut, amla, hibiscus, and aloe vera. Our Repair & Restore Hair Mask penetrates deep into the roots to nourish, strengthen, and bring back your hair&apos;s natural shine. Free from harsh chemicals, sulfates, and parabens.
                </p>
                <Link href="/shop" className="inline-block border-b border-emerald-300 text-emerald-300 pb-1 font-medium tracking-wide hover:text-white hover:border-white transition-colors">
                  Shop Now
                </Link>
              </div>
              <div className="order-1 md:order-2 relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
                <Image 
                  src="/neer-product.png" 
                  alt="Neer Natural Hair Oil" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-[#F2F5F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 mb-3">Our Promise</h2>
            <h3 className="text-4xl font-serif text-gray-900 mb-16">Nature&apos;s Goodness</h3>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="p-8 bg-white rounded-xl shadow-sm border border-emerald-50">
                <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-serif mb-4 text-gray-900">100% Natural Ingredients</h4>
                <p className="text-gray-500 font-light">We source only the finest natural herbs, pure cold-pressed oils, and raw ingredients directly from nature.</p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-emerald-50">
                <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-serif mb-4 text-gray-900">Paraben & Sulfate Free</h4>
                <p className="text-gray-500 font-light">Absolutely no harsh chemicals. Our formulas are gentle on your scalp and safe for all hair types.</p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-emerald-50">
                <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                  <Droplets className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-serif mb-4 text-gray-900">Nourishes Deeply</h4>
                <p className="text-gray-500 font-light">Designed to penetrate the hair shaft to repair damage, strengthen roots, and add a healthy, natural shine.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid (Featured) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 mb-3">Highlights</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-gray-900">Featured Products</h3>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {featuredProducts.map((product) => (
              <Link 
                href={`/product/${product._id}`} 
                key={product._id} 
                className="group flex flex-col"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 bg-gray-100 rounded-sm">
                  <Image 
                    src={product.image ? urlFor(product.image).width(600).height(800).url() : '/placeholder.jpg'} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                </div>
                
                <div className="text-center px-4 flex-1 flex flex-col">
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2">{product.category}</p>
                  <h4 className="text-xl font-serif text-gray-900 mb-2 group-hover:text-emerald-800 transition-colors">{product.name}</h4>
                  <div className="mt-auto pt-4 flex items-center justify-center gap-3">
                    <span className="text-lg text-gray-900">৳{product.price}</span>
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
          
          <div className="text-center mt-16">
            <Link 
              href="/shop" 
              className="inline-block border border-gray-900 text-gray-900 font-semibold tracking-widest uppercase text-sm px-8 py-4 hover:bg-gray-900 hover:text-white transition-colors rounded-sm"
            >
              View Full Collection
            </Link>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-t border-gray-100">
          <h3 className="text-3xl font-serif mb-4">Join Neer Natural Care</h3>
          <p className="text-gray-500 font-light mb-8">Subscribe to receive exclusive offers, organic beauty tips, and early access to new product launches.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 border-b border-gray-300 py-3 focus:outline-none focus:border-emerald-600 bg-transparent text-center sm:text-left"
            />
            <button 
              type="button"
              className="px-8 py-3 bg-gray-900 text-white text-sm font-semibold tracking-widest uppercase hover:bg-emerald-800 transition-colors rounded-sm"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
