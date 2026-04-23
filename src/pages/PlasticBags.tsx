import { ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import QuoteModal from '../components/QuoteModal';
import Header from '../components/Header';

export default function PlasticBags() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const bagTypes = [
    {
      type: 'T-Shirt Bags',
      sizes: ['Small (6x9")', 'Medium (11x17")', 'Large (12x22")', 'X-Large (15x25")'],
      thickness: '15-25 microns'
    },
    {
      type: 'Flat Bags',
      sizes: ['Small (6x9")', 'Medium (9x12")', 'Large (12x18")'],
      thickness: '20-30 microns'
    },
    {
      type: 'Gusseted Bags',
      sizes: ['Small (8x5x15")', 'Medium (12x8x21")', 'Large (16x10x24")'],
      thickness: '25-35 microns'
    },
    {
      type: 'Zipper Bags',
      sizes: ['Small (4x6")', 'Medium (6x9")', 'Large (8x10")'],
      thickness: '40-50 microns'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-gray-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <ShoppingBag className="h-12 w-12 text-white" />
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Plastic <span className="text-gray-300">Bags</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Durable and versatile plastic bags for all your packaging and carrying needs
            </p>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
            >
              Request Quote
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Product </span>
              <span className="text-gray-600">Overview</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Shanzo Pack offers a comprehensive range of plastic bags designed for various commercial and retail
              applications. Our bags are manufactured from high-quality materials, ensuring strength, durability,
              and reliability. From grocery stores to retail shops, our plastic bags provide the perfect packaging
              solution. Available in multiple sizes, thicknesses, and styles, we have the right bag for every need.
              Whether you need t-shirt bags, flat bags, gusseted bags, or zipper bags, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bag Types & Sizes</h3>
              <div className="space-y-6">
                {bagTypes.map((bag, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-bold text-gray-900">{bag.type}</h4>
                      <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {bag.thickness}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {bag.sizes.map((size, idx) => (
                        <span key={idx} className="text-sm px-3 py-1 bg-white text-gray-700 rounded-md border border-gray-200">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">High Strength</h4>
                    <p className="text-gray-600 text-sm">Strong and durable construction for heavy loads</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Waterproof</h4>
                    <p className="text-gray-600 text-sm">Protects contents from moisture and water</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Printing</h4>
                    <p className="text-gray-600 text-sm">Add your logo and branding for marketing</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Multiple Colors</h4>
                    <p className="text-gray-600 text-sm">Available in various colors to match your brand</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cost-Effective</h4>
                    <p className="text-gray-600 text-sm">Affordable pricing for bulk orders</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Food Safe Options</h4>
                    <p className="text-gray-600 text-sm">Food-grade bags available for grocery use</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">T-Shirt Bags</h4>
              <p className="text-gray-600 text-sm">
                Classic carry bags with handles, perfect for retail and grocery stores.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Flat Bags</h4>
              <p className="text-gray-600 text-sm">
                Simple, versatile bags ideal for packaging small items and products.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Gusseted Bags</h4>
              <p className="text-gray-600 text-sm">
                Expandable bags with side and bottom gussets for larger capacity.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Zipper Bags</h4>
              <p className="text-gray-600 text-sm">
                Resealable bags perfect for food storage and product packaging.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Perfect For</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-gray-900 mb-2">Retail Stores</h4>
                <p className="text-gray-600 text-sm">
                  Ideal for clothing stores, gift shops, and general retail establishments.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-gray-900 mb-2">Grocery Stores</h4>
                <p className="text-gray-600 text-sm">
                  Food-safe bags perfect for fruits, vegetables, and packaged goods.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-gray-900 mb-2">E-commerce Shipping</h4>
                <p className="text-gray-600 text-sm">
                  Durable bags for packaging and shipping products to customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Order?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a custom quote for your plastic bag needs. We offer competitive pricing for bulk orders.
          </p>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-gray-900 text-white rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105"
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
