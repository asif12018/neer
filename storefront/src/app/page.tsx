import Cart from '@/components/Cart';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { getFeaturedCakes, urlFor } from '@/sanity/client';

export default async function Home() {
  const featuredCakes = await getFeaturedCakes();

  return (
    <div className="min-h-screen bg-[#FAFAFA] selection:bg-amber-100 selection:text-amber-900 font-sans text-gray-900">
      <Navbar />
      <Cart />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Bakery background" 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/90 text-xs uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
              Est. 2026
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
              The Art of <br/> Fine Pastry
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the perfect harmony of premium ingredients, masterful technique, and elegant presentation. Every cake is a masterpiece.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/menu" 
                className="group relative px-8 py-4 bg-white text-gray-900 font-semibold tracking-wider uppercase text-sm transition-all hover:bg-amber-50 overflow-hidden flex items-center gap-3"
              >
                <span className="relative z-10">Discover Our Menu</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Promotional Section */}
        <section className="bg-amber-900 text-amber-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-2 mb-4 text-amber-300">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-sm font-semibold uppercase tracking-widest">Seasonal Special</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                  Summer Berry <br/> Collection
                </h2>
                <p className="text-amber-100/80 text-lg mb-8 font-light leading-relaxed">
                  Celebrate the season with our limited edition summer collection. 
                  Featuring freshly picked local berries, light airy sponges, and delicate chantilly creams. 
                  Enjoy 20% off all custom orders placed this month.
                </p>
                <Link href="/menu" className="inline-block border-b border-amber-300 text-amber-300 pb-1 font-medium tracking-wide hover:text-white hover:border-white transition-colors">
                  Order Now
                </Link>
              </div>
              <div className="order-1 md:order-2 relative h-[500px] w-full rounded-none overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Summer Berry Cake" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Craftsmanship Section */}
        <section className="py-24 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600 mb-3">Our Process</h2>
            <h3 className="text-4xl font-serif text-gray-900 mb-16">The Art of Craftsmanship</h3>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="p-6">
                <div className="w-16 h-16 mx-auto bg-amber-50 rounded-full flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="text-xl font-serif mb-4">Premium Ingredients</h4>
                <p className="text-gray-500 font-light">We source only the finest Belgian chocolates, Madagascar vanilla beans, and organic local dairy for our creations.</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 mx-auto bg-amber-50 rounded-full flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="text-xl font-serif mb-4">Masterful Baking</h4>
                <p className="text-gray-500 font-light">Every cake is baked to order in small batches to ensure the perfect crumb, supreme moisture, and optimal flavor profile.</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 mx-auto bg-amber-50 rounded-full flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="text-xl font-serif mb-4">Artistic Finishing</h4>
                <p className="text-gray-500 font-light">Our decorators treat each cake as a blank canvas, applying intricate piping and delicate hand-crafted sugar elements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid (Featured) */}
        <section id="menu" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600 mb-3">Highlights</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-gray-900">Featured Creations</h3>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {featuredCakes.map((cake) => (
              <Link 
                href={`/product/${cake._id}`} 
                key={cake._id} 
                className="group flex flex-col"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
                  <Image 
                    src={cake.image ? urlFor(cake.image).width(600).height(800).url() : '/placeholder.jpg'} 
                    alt={cake.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                
                <div className="text-center px-4 flex-1 flex flex-col">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">{cake.category}</p>
                  <h4 className="text-xl font-serif text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">{cake.name}</h4>
                  <div className="mt-auto pt-4 flex items-center justify-center gap-3">
                    <span className="text-lg text-gray-900">৳{cake.price}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-sm text-gray-500">{cake.weightOptions?.[0] || '1 lb'}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="/menu" 
              className="inline-block border border-gray-900 text-gray-900 font-semibold tracking-widest uppercase text-sm px-8 py-3 hover:bg-gray-900 hover:text-white transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-24 border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Quote className="w-12 h-12 text-amber-300 mx-auto mb-8" />
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 leading-relaxed">
              &quot;The wedding cake was absolutely breathtaking, and it tasted even better than it looked. L&apos;Artisan exceeded every single expectation we had.&quot;
            </h3>
            <p className="text-sm uppercase tracking-widest font-semibold text-gray-500">— Sarah & James, Happy Couple</p>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-serif mb-4">Join Our VIP List</h3>
          <p className="text-gray-500 font-light mb-8">Subscribe to receive exclusive offers, early access to seasonal menus, and baking tips from our chefs.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 border-b border-gray-300 py-3 focus:outline-none focus:border-amber-600 bg-transparent text-center sm:text-left"
            />
            <button 
              type="button"
              className="px-8 py-3 bg-gray-900 text-white text-sm font-semibold tracking-widest uppercase hover:bg-amber-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h4 className="text-white font-serif text-xl mb-4">L&apos;Artisan Patisserie</h4>
            <p className="font-light text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Elevating the art of baking with premium ingredients and unmatched craftsmanship.
            </p>
          </div>
          <div>
            <h4 className="text-white font-serif text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><Link href="/menu" className="hover:text-amber-500 transition-colors">Our Menu</Link></li>
              <li><Link href="/custom-orders" className="hover:text-amber-500 transition-colors">Custom Orders</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif text-xl mb-4">Contact</h4>
            <ul className="space-y-2 text-sm font-light">
              <li>123 Artisan Avenue, Dhaka</li>
              <li>+880 1XXX XXXXXX</li>
              <li>hello@lartisan.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs font-light tracking-wider">
          <p>© 2026 L&apos;Artisan Patisserie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
