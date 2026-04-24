import { Leaf } from 'lucide-react';
import { useState } from 'react';
import QuoteModal from '../components/QuoteModal';
import Header from '../components/Header';

export default function PaperStraws() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const sizes = [
    { size: '6mm x 197mm', type: 'Standard', pattern: 'Solid/Striped' },
    { size: '6mm x 210mm', type: 'Regular', pattern: 'Solid/Striped' },
    { size: '8mm x 197mm', type: 'Wide', pattern: 'Solid/Striped' },
    { size: '10mm x 210mm', type: 'Smoothie', pattern: 'Solid/Striped' },
    { size: '12mm x 210mm', type: 'Bubble Tea', pattern: 'Solid/Striped' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-20">
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-green-800 to-green-900">
          <div className="absolute inset-0 bg-[url('/image.png')] bg-cover bg-center opacity-20"></div>

          <div className="relative z-10 layout-site text-center">
            <div className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-bold rounded-full shadow-lg mb-6">
              Manufactured by Shanzo Pack
            </div>

            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Leaf className="h-12 w-12 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Paper <span className="text-blue-300">Straws</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Eco-friendly, biodegradable paper straws manufactured in-house for a sustainable future
            </p>

            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
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
                Shanzo Pack proudly manufactures premium paper straws in-house, combining sustainability with
                functionality. Our paper straws are 100% biodegradable and made from responsibly sourced paper
                materials. Designed to maintain their structure in both hot and cold beverages, our paper straws
                provide an eco-friendly alternative without compromising on quality. Available in various sizes,
                colors, and customizable designs, they're perfect for environmentally conscious businesses looking
                to reduce their plastic footprint.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Sizes</h3>
                <div className="space-y-4">
                  {sizes.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">{item.size}</span>
                        <span className="text-sm px-3 py-1 bg-green-100 text-blue-700 rounded-full">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">Pattern: {item.pattern}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">100% Biodegradable</h4>
                      <p className="text-gray-600 text-sm">Fully compostable and environmentally friendly</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Hot & Cold Compatible</h4>
                      <p className="text-gray-600 text-sm">Durable in both hot and cold beverages</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Customizable Designs</h4>
                      <p className="text-gray-600 text-sm">Custom colors, patterns, and branding available</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">FDA Approved</h4>
                      <p className="text-gray-600 text-sm">Food-safe materials that meet all safety standards</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Strong & Durable</h4>
                      <p className="text-gray-600 text-sm">Won't get soggy quickly - lasts for hours</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Responsibly Sourced</h4>
                      <p className="text-gray-600 text-sm">Made from sustainable paper materials</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 md:p-12 mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Environmental Benefits</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Sustainable Choice</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our paper straws decompose naturally within 2-6 months, compared to plastic straws that can
                    take up to 200 years. By choosing paper straws, you're actively contributing to reducing
                    plastic pollution in our oceans and landfills.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Eco-Conscious Business</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Show your customers that you care about the environment. Paper straws demonstrate your
                    commitment to sustainability and can enhance your brand's reputation as an environmentally
                    responsible business.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Perfect For</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-gray-900 mb-2">Eco-Friendly Cafés</h4>
                  <p className="text-gray-600 text-sm">
                    Perfect for businesses committed to sustainability and reducing plastic waste.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-gray-900 mb-2">Juice Bars</h4>
                  <p className="text-gray-600 text-sm">
                    Ideal for fresh juices, smoothies, and healthy beverage establishments.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-gray-900 mb-2">Events & Catering</h4>
                  <p className="text-gray-600 text-sm">
                    Great for weddings, parties, and corporate events seeking sustainable options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="layout-site text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Go Green?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a custom quote for your paper straw needs. Join us in making a positive environmental impact.
            </p>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105"
            >
              Request Quote
            </button>
          </div>
        </section>

        <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      </div>
    </div>
  );
}
