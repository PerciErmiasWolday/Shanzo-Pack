import { Package } from 'lucide-react';
import { useState } from 'react';
import QuoteModal from '../components/QuoteModal';
import Header from '../components/Header';

export default function BurgerBox() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const models = [
    { model: 'BB-Small', size: 'Small Burger', image: '/featured-products/06573c6850f845568b8e0dee77f6423d48391c43.jpg' },
    { model: 'BB-Medium', size: 'Medium Burger', image: '/featured-products/aec2c2b6ebf6a558573ea647b74136f65f090b5e.jpg' },
    { model: 'BB-Large', size: 'Large Burger', image: '/featured-products/c544da36b245fb10f136e3c7f9520a828bad7d14.jpg' },
    { model: 'BB-XL', size: 'Extra Large', image: '/image.png' },
    { model: 'BB-Double', size: 'Double Burger', image: '/featured-products/06573c6850f845568b8e0dee77f6423d48391c43.jpg' },
    { model: 'BB-Slider', size: 'Slider Size', image: '/featured-products/aec2c2b6ebf6a558573ea647b74136f65f090b5e.jpg' },
    { model: 'BB-Premium', size: 'Premium Box', image: '/featured-products/c544da36b245fb10f136e3c7f9520a828bad7d14.jpg' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <h1 className="text-5xl font-bold">Burger Box</h1>
              </div>
              <p className="text-xl text-white leading-relaxed mb-6">
                Shanzo Pack presents our premium Burger Box collection, specifically designed to keep your burgers fresh, hot, and perfectly presented. Our innovative packaging solutions combine functionality with eye-catching designs that make your brand stand out.
              </p>
              <p className="text-xl text-white leading-relaxed mb-6">
                Each burger box is crafted with food-safe materials and features grease-resistant coating to maintain the quality and appearance of your burgers during transport and service. Available in multiple sizes to accommodate everything from sliders to triple-stack burgers.
              </p>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Request Quote
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <img
                src="/image.png"
                alt="Burger Box Hero"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Available </span>
              <span className="text-orange-500">Models</span>
            </h2>
            <p className="text-xl text-gray-600">Perfect sizes for every burger type</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {models.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <img
                  src={item.image}
                  alt={item.model}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                  <p className="font-bold text-lg">{item.model}</p>
                  <p className="text-sm text-green-200">{item.size}</p>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-8 flex items-center justify-center text-white shadow-lg">
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-3">Burger Solutions</h4>
                <p className="text-orange-100 text-sm mb-4">Perfect for every burger size</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Slider to XL Sizes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Custom Printing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Grease Resistant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Food Safe Materials</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Closure</h3>
              <p className="text-gray-600">Interlocking design keeps burgers secure during transport</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ventilation Design</h3>
              <p className="text-gray-600">Smart ventilation prevents sogginess while retaining heat</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Eco-Friendly Options</h3>
              <p className="text-gray-600">Available in recyclable and biodegradable materials</p>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6">
              <h3 className="text-2xl font-bold">Size Specifications</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Model</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Dimensions</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-white">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">BB-Slider</td>
                    <td className="px-6 py-4 text-sm text-gray-600">3" x 3" x 2"</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Mini burgers, sliders</td>
                  </tr>
                  <tr className="hover:bg-white">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">BB-Small</td>
                    <td className="px-6 py-4 text-sm text-gray-600">4" x 4" x 3"</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Regular burgers</td>
                  </tr>
                  <tr className="hover:bg-white">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">BB-Medium</td>
                    <td className="px-6 py-4 text-sm text-gray-600">5" x 5" x 3.5"</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Quarter pound burgers</td>
                  </tr>
                  <tr className="hover:bg-white">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">BB-Large</td>
                    <td className="px-6 py-4 text-sm text-gray-600">5.5" x 5.5" x 4"</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Half pound burgers</td>
                  </tr>
                  <tr className="hover:bg-white">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">BB-XL</td>
                    <td className="px-6 py-4 text-sm text-gray-600">6" x 6" x 4.5"</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Triple stack, specialty burgers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              Our burger boxes are designed with both functionality and aesthetics in mind. Whether you operate a fast-food chain, food truck, or gourmet burger restaurant, we have the perfect packaging solution to elevate your brand and ensure customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      </div>
    </div>
  );
}
