import Navbar from '@/components/Navbar';
import Cart from '@/components/Cart';
import Image from 'next/image';

export default function CustomOrdersPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-amber-100 selection:text-amber-900 text-gray-900">
      <Navbar />
      <Cart />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Custom Orders</h1>
          <p className="text-gray-500 font-light max-w-2xl mx-auto">
            Bring your vision to life. From elegant tiered wedding cakes to personalized birthday centerpieces, our pastry chefs are ready to create something extraordinary for your special occasion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Information Section */}
          <div>
            <div className="relative aspect-[4/3] mb-12 bg-gray-100">
              <Image 
                src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Custom Cake Preparation" 
                fill 
                className="object-cover"
              />
            </div>
            
            <h2 className="text-2xl font-serif mb-6">The Process</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <span className="text-xl font-serif text-amber-600">01</span>
                <div>
                  <h3 className="font-semibold uppercase tracking-widest text-sm mb-2">Inquiry & Consultation</h3>
                  <p className="text-gray-500 font-light text-sm">Fill out the form with your event details. We&apos;ll schedule a consultation to discuss flavors, design, and budget.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-xl font-serif text-amber-600">02</span>
                <div>
                  <h3 className="font-semibold uppercase tracking-widest text-sm mb-2">Tasting & Design</h3>
                  <p className="text-gray-500 font-light text-sm">Sample our signature sponges and fillings. We&apos;ll sketch out the design to ensure it matches your exact vision.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-xl font-serif text-amber-600">03</span>
                <div>
                  <h3 className="font-semibold uppercase tracking-widest text-sm mb-2">Execution & Delivery</h3>
                  <p className="text-gray-500 font-light text-sm">Our master bakers craft your cake. We handle careful delivery and setup at your venue for complete peace of mind.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white p-8 lg:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif mb-8">Start Your Inquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                  <input type="text" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-amber-600 transition-colors bg-transparent" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                  <input type="text" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-amber-600 transition-colors bg-transparent" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input type="email" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-amber-600 transition-colors bg-transparent" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Event Date</label>
                  <input type="date" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-amber-600 transition-colors bg-transparent text-gray-900" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Guest Count</label>
                  <input type="number" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-amber-600 transition-colors bg-transparent" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Event Type</label>
                <select className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-amber-600 transition-colors bg-transparent text-gray-900">
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Corporate Event</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Tell us about your vision</label>
                <textarea 
                  rows={4}
                  className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-amber-600 transition-colors bg-transparent resize-none"
                  placeholder="Design ideas, favorite flavors, dietary restrictions..."
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full py-4 mt-4 bg-gray-900 text-white text-sm font-semibold uppercase tracking-widest hover:bg-amber-700 transition-colors"
              >
                Submit Inquiry
              </button>
              <p className="text-center text-xs text-gray-400 font-light mt-4">
                Please allow 48 hours for our team to review your request and get back to you.
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
