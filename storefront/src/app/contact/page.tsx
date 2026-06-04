import Navbar from '@/components/Navbar';
import Cart from '@/components/Cart';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-amber-100 selection:text-amber-900 text-gray-900">
      <Navbar />
      <Cart />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Contact Us</h1>
          <p className="text-gray-500 font-light max-w-2xl mx-auto">
            Have a question about our menu, a recent order, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-serif mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 uppercase tracking-widest text-sm text-gray-900">Visit Our Patisserie</h3>
                  <p className="text-gray-500 font-light">123 Artisan Avenue<br/>Gulshan, Dhaka 1212</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 uppercase tracking-widest text-sm text-gray-900">Call Us</h3>
                  <p className="text-gray-500 font-light">+880 1XXX XXXXXX<br/>Mon-Sun, 9am - 9pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 uppercase tracking-widest text-sm text-gray-900">Email Us</h3>
                  <p className="text-gray-500 font-light">hello@lartisan.com<br/>orders@lartisan.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-amber-600 transition-colors bg-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-amber-600 transition-colors bg-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-amber-600 transition-colors bg-transparent resize-none"
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full py-4 bg-gray-900 text-white text-sm font-semibold uppercase tracking-widest hover:bg-amber-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
