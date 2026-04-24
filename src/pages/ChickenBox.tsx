import { Package } from 'lucide-react';
import { useState } from 'react';
import QuoteModal from '../components/QuoteModal';
import Header from '../components/Header';

export default function ChickenBox() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const models = [
    { model: 'FC-0', image: '/featured-products/06573c6850f845568b8e0dee77f6423d48391c43.jpg' },
    { model: 'FC-1', image: '/featured-products/aec2c2b6ebf6a558573ea647b74136f65f090b5e.jpg' },
    { model: 'FC-3', image: '/featured-products/c544da36b245fb10f136e3c7f9520a828bad7d14.jpg' },
    { model: 'FC-4', image: '/image.png' },
    { model: 'HP-6', image: '/featured-products/06573c6850f845568b8e0dee77f6423d48391c43.jpg' },
    { model: 'HP-9', image: '/featured-products/aec2c2b6ebf6a558573ea647b74136f65f090b5e.jpg' },
    { model: 'HP-10', image: '/featured-products/c544da36b245fb10f136e3c7f9520a828bad7d14.jpg' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
        <div className="layout-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <h1 className="text-5xl font-bold">Chicken Box</h1>
              </div>
              <p className="text-xl text-white leading-relaxed mb-6">
                Shanzo Pack is thrilled to introduce our delectable range of Fast Food packaging solutions, tailored to enhance the presentation and convenience of your quick bites. We understand the fast-paced nature of the food industry. With Shanzo Pack, you can be confident that your customers will enjoy a satisfying, mess-free experience.
              </p>
              <p className="text-xl text-white leading-relaxed mb-6">
                From burgers to fries, tacos to wraps, our packaging is not only practical but aesthetically pleasing, making your fast food offerings stand out in a crowded market.
              </p>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Request Quote
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl order-1 lg:order-2">
              <img
                src="/image.png"
                alt="Chicken Box Hero"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="layout-site">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Available </span>
              <span className="text-orange-500">Models</span>
            </h2>
            <p className="text-xl text-gray-600">FC Series and HP Series designed for all your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {models.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <img
                  src={item.image}
                  alt={item.model}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center">
                  <p className="font-bold text-lg">{item.model}</p>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-8 flex items-center justify-center text-white shadow-lg">
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-3">Fast Food Solutions</h4>
                <p className="text-orange-100 text-sm mb-4">Multiple models for all your needs</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">FC Series (0-4)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">HP Series (6-10)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Custom Branding</span>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Heat Retention</h3>
              <p className="text-gray-600">Keeps food hot and fresh during delivery and service</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Grease Resistant</h3>
              <p className="text-gray-600">Special coating prevents oil and grease from seeping through</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Printing</h3>
              <p className="text-gray-600">Full-color printing to showcase your brand identity</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              Whether you run a quick service restaurant, food truck, or catering business, our chicken box packaging ensures your food stays fresh, hot, and presentable. Available in multiple sizes and designs to match your brand identity.
            </p>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      </div>
    </div>
  );
}
