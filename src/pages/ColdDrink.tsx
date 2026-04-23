import { Droplets } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';
import Header from '../components/Header';
import { useState } from 'react';

export default function ColdDrink() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const cupSizes = [
    {
      size: '6 OZ',
      height: '76 ± 3',
      internalHeight: '76.33 ± 3',
      topInternalDia: '61.98 ± 3',
      topExternalDia: '66.42 ± 3',
      bottomExternalDia: '47.63 ± 3',
      bottomInternalDia: '44.85 ± 3'
    },
    {
      size: '7 OZ',
      height: '90.36 ± 3',
      internalHeight: '87 ± 3',
      topInternalDia: '64.58 ± 3',
      topExternalDia: '68.39 ± 3',
      bottomExternalDia: '47.05 ± 3',
      bottomInternalDia: '44.52 ± 3'
    },
    {
      size: '8 OZ',
      height: '92 ± 3',
      internalHeight: '87.33 ± 3',
      topInternalDia: '68.47 ±',
      topExternalDia: '72 ± 3',
      bottomExternalDia: '51.84 ±',
      bottomInternalDia: '49 ± 3'
    },
    {
      size: '12 OZ',
      height: '115 ± 3',
      internalHeight: '109.64 ± 3',
      topInternalDia: '75.44 ± 3',
      topExternalDia: '80.55 ± 3',
      bottomExternalDia: '52 ± 3',
      bottomInternalDia: '49.96 ± 3'
    },
    {
      size: '16 OZ',
      height: '139 ± 3',
      internalHeight: '122.05 ± 3',
      topInternalDia: '82 ± 3',
      topExternalDia: '86.48 ± 3',
      bottomExternalDia: '61.82 ± 3',
      bottomInternalDia: '58.37 ± 3'
    },
    {
      size: '22 OZ',
      height: '165 ± 3',
      internalHeight: '151 ± 3',
      topInternalDia: '82.82 ± 3',
      topExternalDia: '87.02 ± 3',
      bottomExternalDia: '61.38 ± 3',
      bottomInternalDia: '57.73 ± 3'
    },
    {
      size: '24 OZ',
      height: '175 ± 3',
      internalHeight: '169 ± 3',
      topInternalDia: '86.93 ±',
      topExternalDia: '91.09 ± 3',
      bottomExternalDia: '65.83 ± 3',
      bottomInternalDia: '61.58 ± 3'
    },
    {
      size: '32 OZ',
      height: '188 ± 3',
      internalHeight: '168 ± 3',
      topInternalDia: '96.43 ±',
      topExternalDia: '101.16 ± 3',
      bottomExternalDia: '72.29 ± 3',
      bottomInternalDia: '66.20 ± 3'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-20">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-blue-500">
        <div className="absolute inset-0 bg-[url('/image.png')] bg-cover bg-center opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl flex items-center justify-center shadow-2xl">
              <Droplets className="h-12 w-12 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Cold <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-200">Drink</span> Cups
          </h1>

          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            Eco-friendly cold drink cups designed to elevate your refreshment experience
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Product </span>
              <span className="text-blue-600">Overview</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Shanzo Pack is delighted to introduce our exceptional Cold Drink Cups, designed to elevate your
              refreshment experience to new heights. Crafted with precision and care, our cold drink cups are made
              from eco-friendly materials, they perfect for keeping your beverages chilled and your drink experience
              fresh. From bustling cafes to picnics in the park, our cups are your chilled beverage companion for
              all your smoothie needs. Innovation meets sustainability, ensuring a leak-free experience where
              maintaining hydration with Shanzo Pack is the optimal temperature.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Droplets className="h-8 w-8 text-blue-600" />
                Key Features
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Made from eco-friendly materials for sustainability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Optimal temperature retention for chilled beverages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Leak-free design for worry-free enjoyment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Perfect for cafes, restaurants, and events</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Available in multiple sizes from 6 OZ to 32 OZ</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Applications</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Soft drinks and carbonated beverages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Iced coffee and cold brew</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Smoothies and milkshakes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Fresh juices and fruit drinks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Iced tea and flavored water</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Available </span>
              <span className="text-blue-600">Sizes</span>
            </h2>
            <p className="text-xl text-gray-600">Detailed specifications for all cup sizes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cupSizes.map((cup, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center mb-4">
                  <h3 className="text-3xl font-bold text-blue-900">{cup.size}</h3>
                  <p className="text-sm text-gray-600">Specifications</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-blue-200 pb-2">
                    <span className="text-gray-600">Height:</span>
                    <span className="font-semibold text-gray-900">{cup.height}</span>
                  </div>
                  <div className="flex justify-between border-b border-blue-200 pb-2">
                    <span className="text-gray-600">Internal Height:</span>
                    <span className="font-semibold text-gray-900">{cup.internalHeight}</span>
                  </div>
                  <div className="flex justify-between border-b border-blue-200 pb-2">
                    <span className="text-gray-600">Top Internal Dia:</span>
                    <span className="font-semibold text-gray-900">{cup.topInternalDia}</span>
                  </div>
                  <div className="flex justify-between border-b border-blue-200 pb-2">
                    <span className="text-gray-600">Top External Dia:</span>
                    <span className="font-semibold text-gray-900">{cup.topExternalDia}</span>
                  </div>
                  <div className="flex justify-between border-b border-blue-200 pb-2">
                    <span className="text-gray-600">Bottom External Dia:</span>
                    <span className="font-semibold text-gray-900">{cup.bottomExternalDia}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bottom Internal Dia:</span>
                    <span className="font-semibold text-gray-900">{cup.bottomInternalDia}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Order Cold Drink Cups?
          </h2>
          <p className="text-xl text-white mb-8">
            Contact us today for custom solutions and bulk pricing
          </p>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold hover:shadow-2xl transition transform hover:scale-105"
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
