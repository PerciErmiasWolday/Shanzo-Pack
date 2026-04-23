import { Package } from 'lucide-react';
import { useState } from 'react';
import QuoteModal from '../components/QuoteModal';
import Header from '../components/Header';

export default function Buckets() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const bucketSizes = [
    { size: '250 ml', image: '/featured-products/06573c6850f845568b8e0dee77f6423d48391c43.jpg' },
    { size: '300 ml', image: '/featured-products/aec2c2b6ebf6a558573ea647b74136f65f090b5e.jpg' },
    { size: '400 ml', image: '/featured-products/c544da36b245fb10f136e3c7f9520a828bad7d14.jpg' },
    { size: '500 ml', image: '/image.png' },
    { size: '800 ml', image: '/featured-products/06573c6850f845568b8e0dee77f6423d48391c43.jpg' },
    { size: '1 Ltr', image: '/featured-products/aec2c2b6ebf6a558573ea647b74136f65f090b5e.jpg' },
    { size: '2 Ltr', image: '/featured-products/c544da36b245fb10f136e3c7f9520a828bad7d14.jpg' },
    { size: '5 Ltr', image: '/image.png' },
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
                <h1 className="text-5xl font-bold">Buckets</h1>
              </div>
              <p className="text-xl text-white leading-relaxed mb-6">
                Shanzo Pack proudly presents our versatile range of Buckets, designed to cater to all your packaging needs with style and functionality. These durable buckets are engineered to handle a variety of products, from food items to industrial materials, and are constructed with the highest quality materials to ensure long-lasting reliability.
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
                alt="Buckets Hero"
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
              <span className="text-blue-600">Sizes</span>
            </h2>
            <p className="text-xl text-gray-600">Choose from our wide range of bucket sizes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {bucketSizes.map((bucket, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <img
                  src={bucket.image}
                  alt={bucket.size}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center">
                  <p className="font-bold text-lg">{bucket.size}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Printing</h3>
              <p className="text-gray-600">Full-color custom printing to showcase your brand identity</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Food Grade Material</h3>
              <p className="text-gray-600">Safe for direct food contact, meeting all safety standards</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Durable Design</h3>
              <p className="text-gray-600">Built to withstand handling and maintain product integrity</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              Whether you're in the catering business, managing a construction project, or simply seeking a convenient storage solution, Shanzo Pack's Buckets are the perfect choice. Our commitment to excellence shines through in every product, providing you with superior packaging options that meet your demands.
            </p>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      </div>
    </div>
  );
}
