import { Search, SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { bagProducts, cutleryProducts, strawProducts } from '../data/merchantsCatalog';

export default function Products() {
  const navigate = useNavigate();
  const productTypeOptions = ['Straws', 'Bags', 'Cutlery', 'Others'];

  const products = [
    {
      id: 'buckets',
      title: 'Compostable Food Containers',
      description: 'Sugarcane Fiber + Multiple',
      image: '/featured-products/c544da36b245fb10f136e3c7f9520a828bad7d14.jpg',
      moq: 'MOQ: 1,000 units',
      productType: 'Others',
      material: 'Sugarcane Fiber',
      size: 'Multiple',
      industry: 'Food Service',
      compostability: ['BPI Certified', 'ASTM D6400']
    },
    {
      id: 'chicken-box',
      title: 'Biodegradable Takeout Boxes',
      description: 'PLA + Medium',
      image: '/featured-products/aec2c2b6ebf6a558573ea647b74136f65f090b5e.jpg',
      moq: 'MOQ: 2,500 units',
      productType: 'Others',
      material: 'PLA',
      size: 'Medium',
      industry: 'Food Service',
      compostability: ['ASTM D6400']
    },
    {
      id: 'plastic-bags',
      title: 'Plastic Bags',
      description: 'T-shirt, food, garbage & thank-you lines (HDPE)',
      image: bagProducts[0].image,
      moq: 'MOQ: per spec',
      productType: 'Bags',
      material: 'Plastic (HDPE)',
      size: 'Multiple',
      industry: 'Retail',
      compostability: ['Food-grade']
    },
    {
      id: 'paper-straws',
      title: 'Paper Straws',
      description: 'Wrapped, shakes/smoothies & Tetra U-Shape lines',
      image: strawProducts[0].image,
      moq: 'MOQ: per spec',
      productType: 'Straws',
      material: 'Paper',
      size: 'Multiple',
      industry: 'Hospitality',
      compostability: ['Food-grade']
    },
    {
      id: 'cutlery',
      title: 'Plastic & Wooden Cutlery',
      description: 'Black, white PP and wooden lines',
      image: cutleryProducts[0].image,
      moq: 'MOQ: per spec',
      productType: 'Cutlery',
      material: 'PP / Wood',
      size: 'Multiple',
      industry: 'Food Service',
      compostability: ['Food-grade']
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);

  const toggleValue = (value: string, list: string[], setter: (values: string[]) => void) => {
    setter(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesProductType =
        selectedProductTypes.length === 0 ||
        selectedProductTypes.includes(product.productType);

      return matchesSearch && matchesProductType;
    });
  }, [products, searchQuery, selectedProductTypes]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedProductTypes([]);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="pt-20 flex-1 bg-[#F3F3F3]">
        {/* Header bar */}
        <section className="bg-[#0F4C81] text-white py-7 border-b border-[#0d4372]">
          <div className="max-w-[1280px] mx-auto px-6">
            <h1 className="text-[34px] leading-none font-medium mb-2">All Products</h1>
            <p className="text-sm text-blue-100 max-w-xl">
              Browse our selection of packaging solutions.
            </p>
          </div>
        </section>

        {/* Filters + product grid */}
        <section className="py-8">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid gap-9 lg:grid-cols-[240px,minmax(0,1fr)] items-start">
              {/* Filters */}
              <aside className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm sticky top-[110px] self-start">
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-gray-100">
                  <SlidersHorizontal className="h-4.5 w-4.5 text-[#0F4C81]" />
                  <p className="text-sm font-semibold text-[#2A2A2A]">Filters</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-[13px] font-semibold text-[#2A2A2A] mb-3">Product Type</p>
                    <div className="space-y-2.5">
                      {productTypeOptions.map((option) => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={selectedProductTypes.includes(option)}
                            onChange={(e) => {
                              const checked = e.target.checked;
                              toggleValue(option, selectedProductTypes, setSelectedProductTypes);
                              if (checked) {
                                navigate(`/products/catalog/${option.toLowerCase()}`);
                              }
                            }}
                            className="h-4 w-4 rounded border-gray-300 text-[#0F4C81] focus:ring-[#0F4C81]"
                          />
                          <span className="text-[13px] text-gray-600 group-hover:text-[#0F4C81] transition">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={resetFilters}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 text-[13px] font-medium text-gray-600 hover:bg-gray-100 hover:text-[#0F4C81] hover:shadow-sm hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 ease-out"
                  >
                    Reset Filters
                  </button>
                </div>
              </aside>

              {/* Product results */}
              <div>
                <div className="mb-4 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full bg-white border border-gray-300 rounded py-2 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/20"
                  />
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      className="group bg-white rounded-xl border border-[#D9D9D9] overflow-hidden hover-lift"
                    >
                      <div className="bg-[#e4efdf] border-b border-gray-200 p-2 flex items-center justify-center h-[170px]">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-contain bg-white"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="p-4">
                        <div className="mb-2 flex gap-2 flex-wrap">
                          {product.compostability.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-md bg-[#edf3ff] text-[#0F4C81] text-[11px] font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-base leading-snug font-semibold text-[#2A2A2A] mb-1.5">
                          {product.title}
                        </p>
                        <p className="text-[13px] text-gray-500 mb-2">
                          {product.description}
                        </p>
                        <p className="text-[13px] text-gray-400 mb-3">{product.moq}</p>
                        <button type="button" className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[#8ca3bf] text-[13px] font-medium text-[#0F4C81] bg-white hover:bg-[#f0f5ff] hover:shadow-md hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 ease-out">
                          View Details
                        </button>
                      </div>
                    </Link>
                  ))}
                </div>
                {filteredProducts.length === 0 && (
                  <div className="mt-4 bg-white border border-gray-200 rounded p-6 text-center text-sm text-gray-600">
                    No products found. Try changing your search or filters.
                  </div>
                )}
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
