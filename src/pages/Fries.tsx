import { Box } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';
import Header from '../components/Header';
import { useState } from 'react';

export default function Fries() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const friesVariants = [
    {
      brand: 'KFC',
      description: 'Classic red and white striped design with KFC branding',
      style: 'Scoop style container'
    },
    {
      brand: 'Hardees',
      description: 'Vibrant yellow-orange gradient with Hardees logo',
      style: 'Sleek scoop design'
    },
    {
      brand: 'GDK',
      description: 'Bold purple and orange design with GDK branding',
      style: 'Modern angular container'
    },
    {
      brand: 'Custom',
      description: 'Customizable designs for your brand identity',
      style: 'Various styles available'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-20">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-blue-500">
        <div className="absolute inset-0 bg-[url('/image.png')] bg-cover bg-center opacity-20"></div>

        <div className="relative z-10 layout-site text-center">

          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl flex items-center justify-center shadow-2xl">
              <Box className="h-12 w-12 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Fries <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-200">Packaging</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Premium fries containers designed to keep your fries crispy and fresh
          </p>

          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold hover:shadow-2xl transition transform hover:scale-105"
          >
            Request Quote
          </button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="layout-site">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Product </span>
              <span className="text-blue-600">Overview</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Shanzo Pack proudly presents its exquisite line of Fries Packaging, designed to keep your
              fries crispy and fresh while elevating presentation. Crafted with the finest materials and
              meticulous attention to detail, our fries containers are the perfect choice for fast food
              restaurants, cafes, and food service establishments. Whether you're serving classic french
              fries, sweet potato fries, or seasoned variations, our packaging ensures optimal freshness and
              maintains the perfect temperature. With a range of sizes and designs to choose from, our
              containers not only enhance the visual appeal but also ensure a delightful eating experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Box className="h-8 w-8 text-blue-600" />
                Key Features
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Keeps fries crispy and fresh longer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Grease-resistant food-grade materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Multiple sizes for different portion needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Custom branding and design options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Easy-to-hold ergonomic design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Perfect for takeout and dine-in service</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Applications</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Fast food restaurants and chains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Food trucks and street vendors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Cafes and casual dining establishments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Sporting events and stadiums</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Movie theaters and entertainment venues</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Catering services and events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="layout-site">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Design </span>
              <span className="text-blue-600">Options</span>
            </h2>
            <p className="text-xl text-gray-600">Available in multiple styles and custom branding</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {friesVariants.map((variant, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-blue-900">{variant.brand}</h3>
                  <p className="text-sm text-gray-600 mt-1">{variant.style}</p>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {variant.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Available Sizes</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-blue-600 mb-2">Small</h4>
                <p className="text-gray-700">Perfect for kids meals and snack portions</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-blue-600 mb-2">Medium</h4>
                <p className="text-gray-700">Standard size for regular meal servings</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-blue-600 mb-2">Large</h4>
                <p className="text-gray-700">Generous portions for sharing or large appetites</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="layout-site">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Custom </span>
              <span className="text-blue-600">Branding</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer full customization options to match your brand identity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-blue-600 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Printing</h3>
              <p className="text-gray-600">Full-color printing with your logo and brand colors</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-blue-600 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Sizes</h3>
              <p className="text-gray-600">Tailored dimensions to meet your specific needs</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-blue-600 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Design Support</h3>
              <p className="text-gray-600">Professional design assistance for your packaging</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500">
        <div className="mx-auto w-full max-w-4xl site-px text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Fries Packaging?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Contact us today for custom solutions and bulk pricing
          </p>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-2xl transition transform hover:scale-105"
          >
            Get a Quote
          </button>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      </div>
    </div>
  );
}
