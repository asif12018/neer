import Navbar from '@/components/Navbar';
import { getAllProducts } from '@/sanity/client';
import ShopClient from './ShopClient';

export const revalidate = 10;

export default async function ShopPage() {
  const products = await getAllProducts();

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      <Navbar />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Shop Collection</h1>
          <p className="text-gray-500 font-light max-w-2xl mx-auto">
            Discover our entire range of natural, organic hair care products designed to nourish, strengthen, and repair your hair.
          </p>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mt-8"></div>
        </div>

        <ShopClient initialProducts={products} />
      </main>
    </div>
  );
}
