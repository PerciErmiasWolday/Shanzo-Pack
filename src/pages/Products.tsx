import { ChevronLeft, ChevronRight, Search, SlidersHorizontal } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  allCatalogProducts,
  getCatalogTypeForProductId,
  type CatalogProduct
} from '../data/merchantsCatalog';

const PAGE_SIZE = 6;

const productTypeOptions = ['Straws', 'Bags', 'Cutlery', 'Others'] as const;

type ProductRow = {
  id: string;
  href: string;
  title: string;
  description: string;
  image: string;
  moq: string;
  productType: (typeof productTypeOptions)[number];
  tags: string[];
};

function catalogProductType(p: CatalogProduct): ProductRow['productType'] {
  const cat = getCatalogTypeForProductId(p.id);
  if (cat === 'straws') return 'Straws';
  if (cat === 'bags') return 'Bags';
  if (cat === 'cutlery') return 'Cutlery';
  return 'Others';
}

function rowFromCatalog(p: CatalogProduct): ProductRow {
  const spec = p.specifications[0] ?? '';
  const tags = [p.material];
  return {
    id: p.id,
    href: `/products/${p.id}`,
    title: p.title,
    description: spec,
    image: p.image,
    moq: 'MOQ: per specification',
    productType: catalogProductType(p),
    tags: tags.slice(0, 3)
  };
}

const STATIC_OTHERS: ProductRow[] = [
  {
    id: 'buckets',
    href: '/products/buckets',
    title: 'Compostable Food Containers',
    description: 'Sugarcane fiber containers — multiple sizes for food service and takeaway.',
    image: '/featured-products/c544da36b245fb10f136e3c7f9520a828bad7d14.jpg',
    moq: 'MOQ: 1,000 units',
    productType: 'Others',
    tags: ['BPI Certified', 'ASTM D6400']
  },
  {
    id: 'chicken-box',
    href: '/products/chicken-box',
    title: 'Biodegradable Takeout Boxes',
    description: 'PLA takeout boxes — medium and custom sizes for restaurants and catering.',
    image: '/featured-products/aec2c2b6ebf6a558573ea647b74136f65f090b5e.jpg',
    moq: 'MOQ: 2,500 units',
    productType: 'Others',
    tags: ['ASTM D6400']
  }
];

const ALL_PRODUCT_ROWS: ProductRow[] = [
  ...allCatalogProducts.map(rowFromCatalog),
  ...STATIC_OTHERS
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  const toggleValue = (value: string, list: string[], setter: (values: string[]) => void) => {
    setter(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
  };

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return ALL_PRODUCT_ROWS.filter((product) => {
      const matchesSearch =
        q.length === 0 ||
        product.title.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.tags.some((t) => t.toLowerCase().includes(q));
      const matchesProductType =
        selectedProductTypes.length === 0 ||
        selectedProductTypes.includes(product.productType);

      return matchesSearch && matchesProductType;
    });
  }, [searchQuery, selectedProductTypes]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [searchQuery, selectedProductTypes]);

  useEffect(() => {
    setPage((p) => Math.min(Math.max(1, p), totalPages));
  }, [totalPages]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredProducts.slice(start, start + PAGE_SIZE);
  }, [filteredProducts, page]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedProductTypes([]);
  };

  const showingFrom = filteredProducts.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const showingTo = Math.min(page * PAGE_SIZE, filteredProducts.length);

  const pageNumbers = useMemo(() => {
    const maxButtons = 5;
    if (totalPages <= maxButtons) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    let start = Math.max(1, page - 2);
    const end = Math.min(totalPages, start + maxButtons - 1);
    if (end - start < maxButtons - 1) start = Math.max(1, end - maxButtons + 1);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [page, totalPages]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="pt-20 flex-1 bg-[#F3F3F3]">
        <section className="bg-[#0F4C81] text-white py-7 border-b border-[#0d4372]">
          <div className="layout-site">
            <h1 className="text-[34px] leading-none font-medium mb-2">All Products</h1>
            <p className="text-sm text-blue-100 max-w-xl">
              Browse our selection of packaging solutions.
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="layout-site">
            <div className="grid gap-9 lg:grid-cols-[240px,minmax(0,1fr)] items-start">
              <aside className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm self-start lg:sticky lg:top-[110px] lg:z-10">
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
                            onChange={() =>
                              toggleValue(option, selectedProductTypes, setSelectedProductTypes)
                            }
                            className="h-4 w-4 rounded border-gray-300 text-[#0F4C81] focus:ring-[#0F4C81]"
                          />
                          <span className="text-[13px] text-gray-600 group-hover:text-[#0F4C81] transition">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={resetFilters}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 text-[13px] font-medium text-gray-600 hover:bg-gray-100 hover:text-[#0F4C81] hover:shadow-sm hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 ease-out"
                  >
                    Reset Filters
                  </button>
                </div>
              </aside>

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
                  {pageItems.map((product) => (
                    <Link
                      key={product.id}
                      to={product.href}
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
                          {product.tags.map((tag) => (
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
                        <p className="text-[13px] text-gray-500 mb-2 line-clamp-2">{product.description}</p>
                        <p className="text-[13px] text-gray-400 mb-3">{product.moq}</p>
                        <span className="flex w-full items-center justify-center px-4 py-2 rounded-lg border border-[#8ca3bf] text-[13px] font-medium text-[#0F4C81] bg-white group-hover:bg-[#f0f5ff] group-hover:shadow-md group-hover:-translate-y-0.5 group-active:scale-[0.97] transition-all duration-200 ease-out">
                          View Details
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="mt-4 bg-white border border-gray-200 rounded p-6 text-center text-sm text-gray-600">
                    No products found. Try changing your search or filters.
                  </div>
                )}

                {filteredProducts.length > 0 && totalPages > 1 && (
                  <nav
                    className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-gray-200 pt-6"
                    aria-label="Pagination"
                  >
                    <p className="text-sm text-gray-600 order-2 sm:order-1">
                      Page <span className="font-medium text-[#2A2A2A]">{page}</span> of{' '}
                      <span className="font-medium text-[#2A2A2A]">{totalPages}</span>
                      <span className="text-gray-400 mx-2">·</span>
                      Showing {showingFrom}–{showingTo} of {filteredProducts.length}
                    </p>
                    <div className="flex items-center justify-center gap-1 order-1 sm:order-2">
                      <button
                        type="button"
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page <= 1}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-[#0F4C81]/30 disabled:opacity-40 disabled:pointer-events-none transition"
                        aria-label="Previous page"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <div className="flex items-center gap-1 px-1">
                        {pageNumbers.map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setPage(num)}
                            className={`min-w-[2.25rem] h-9 rounded-lg text-sm font-medium transition ${
                              num === page
                                ? 'bg-[#0F4C81] text-white shadow-sm'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page >= totalPages}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-[#0F4C81]/30 disabled:opacity-40 disabled:pointer-events-none transition"
                        aria-label="Next page"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </nav>
                )}
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              {filteredProducts.length === ALL_PRODUCT_ROWS.length
                ? `Showing all ${ALL_PRODUCT_ROWS.length} products (${PAGE_SIZE} per page)`
                : `Filtered: ${filteredProducts.length} of ${ALL_PRODUCT_ROWS.length} products (${PAGE_SIZE} per page)`}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
