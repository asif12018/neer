import Link from 'next/link';
import { Leaf, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-50 py-16 border-t border-emerald-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Leaf className="w-6 h-6 text-emerald-400" />
              <span className="text-2xl font-serif tracking-wide text-white">Neer</span>
            </Link>
            <p className="text-emerald-200/80 font-light text-sm leading-relaxed mb-6">
              Pure nature, pure you. We craft organic, chemical-free beauty products that bring traditional Ayurvedic wisdom to modern routines.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-800 transition-colors text-emerald-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-800 transition-colors text-emerald-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-800 transition-colors text-emerald-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-emerald-200/80 hover:text-emerald-400 transition-colors text-sm font-light">Home</Link></li>
              <li><Link href="/shop" className="text-emerald-200/80 hover:text-emerald-400 transition-colors text-sm font-light">Shop All</Link></li>
              <li><Link href="/about" className="text-emerald-200/80 hover:text-emerald-400 transition-colors text-sm font-light">Our Story</Link></li>
              <li><Link href="#" className="text-emerald-200/80 hover:text-emerald-400 transition-colors text-sm font-light">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-serif text-white mb-6">Customer Care</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-emerald-200/80 hover:text-emerald-400 transition-colors text-sm font-light">Shipping Policy</Link></li>
              <li><Link href="#" className="text-emerald-200/80 hover:text-emerald-400 transition-colors text-sm font-light">Returns & Refunds</Link></li>
              <li><Link href="#" className="text-emerald-200/80 hover:text-emerald-400 transition-colors text-sm font-light">FAQs</Link></li>
              <li><Link href="#" className="text-emerald-200/80 hover:text-emerald-400 transition-colors text-sm font-light">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif text-white mb-6">Join Our Newsletter</h3>
            <p className="text-emerald-200/80 font-light text-sm leading-relaxed mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-emerald-900 border border-emerald-800 text-white placeholder-emerald-400/50 px-4 py-3 rounded-sm focus:outline-none focus:border-emerald-500 text-sm w-full"
              />
              <button 
                type="button"
                className="bg-emerald-400 text-emerald-950 font-medium px-4 py-3 rounded-sm hover:bg-emerald-300 transition-colors text-sm uppercase tracking-wider"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-emerald-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-emerald-400/60 text-sm font-light">
            &copy; {new Date().getFullYear()} Neer Natural Care. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-light text-emerald-400/60">
            <Link href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
