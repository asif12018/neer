import Navbar from '@/components/Navbar';
import Cart from '@/components/Cart';
import { getCakeById } from '@/sanity/client';
import ProductClient from './ProductClient';
import Link from 'next/link';

export default async function ProductDetails({ params }: { params: { id: string } }) {
  // Await the params object in Next.js 15+ compatible way
  const resolvedParams = await params;
  const product = await getCakeById(resolvedParams.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center font-sans">
        <h1 className="text-3xl font-serif mb-4">Product Not Found</h1>
        <Link href="/" className="text-amber-700 underline">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <Cart />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductClient product={product} />
      </main>
    </div>
  );
}
