import Navbar from '@/components/Navbar';

export const revalidate = 10; // Revalidate every 10 seconds
import Cart from '@/components/Cart';
import { getProductById } from '@/sanity/client';
import ProductClient from './ProductClient';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      <Navbar />
      <Cart />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductClient product={product} />
      </main>
    </div>
  );
}
