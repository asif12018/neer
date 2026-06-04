import Navbar from '@/components/Navbar';
import Cart from '@/components/Cart';
import { getAllCakes } from '@/sanity/client';
import MenuClient from './MenuClient';

export default async function MenuPage() {
  const cakes = await getAllCakes();

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-amber-100 selection:text-amber-900 text-gray-900">
      <Navbar />
      <Cart />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MenuClient initialCakes={cakes} />
      </main>
    </div>
  );
}
