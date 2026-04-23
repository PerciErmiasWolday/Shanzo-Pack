import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  getCatalogProductById,
  getCatalogTypeForProductId,
  type BagProduct,
  type CatalogProduct,
  type CutleryProduct,
  type StrawProduct
} from '../data/merchantsCatalog';

function isStraw(p: CatalogProduct): p is StrawProduct {
  return 'wrapType' in p && 'diameter' in p;
}

function isBag(p: CatalogProduct): p is BagProduct {
  return 'strength' in p && !('wrapType' in p);
}

function isCutlery(p: CatalogProduct): p is CutleryProduct {
  return 'packaging' in p;
}

export default function ProductDetail() {
  const { productId = '' } = useParams();
  const product = getCatalogProductById(productId);
  const catalogType = product ? getCatalogTypeForProductId(product.id) : null;
  const backHref = catalogType ? `/products/catalog/${catalogType}` : '/products';

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="pt-20 flex-1 flex items-center justify-center px-6 bg-[#F3F3F3]">
          <div className="text-center max-w-md bg-white border border-gray-200 rounded-xl p-10">
            <h1 className="text-xl font-semibold text-[#2A2A2A] mb-2">Product not found</h1>
            <p className="text-sm text-gray-600 mb-6">
              That product may have been moved. Try the catalog or main product list.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#0F4C81] text-white text-sm font-medium hover:bg-[#0b3961] hover:shadow-sm hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 ease-out"
              >
                All products
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-sm font-medium text-[#2A2A2A] hover:bg-gray-50 hover:shadow-sm hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 ease-out"
              >
                Go back
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="pt-20 flex-1 bg-[#F3F3F3]">
        <section className="bg-[#0F4C81] text-white pt-8 pb-10 border-b border-[#0d4372]">
          <div className="max-w-[1280px] mx-auto px-6">
            <Link
              to={backHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-100 hover:text-white transition-colors duration-200 mb-6 group/back"
            >
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/10 border border-white/15 group-hover/back:bg-white/20 group-hover/back:-translate-x-1 transition-all duration-300 ease-out">
                <ArrowLeft className="h-4 w-4" />
              </span>
              Back to catalog
            </Link>
            <h1 className="text-[34px] md:text-[42px] font-semibold leading-tight">{product.title}</h1>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-[1280px] mx-auto px-6 grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden p-8 shadow-sm group">
              <div className="aspect-square max-h-[560px] mx-auto bg-[#fafafa] rounded-xl flex items-center justify-center p-6 border border-gray-100 transition duration-500 group-hover:bg-[#f0f5f0]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain mix-blend-multiply transition duration-500 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-sm sticky top-[110px]">
              <h2 className="text-xl font-semibold text-[#2A2A2A] mb-5">Specifications</h2>
              <ul className="space-y-3.5 text-[15px] text-gray-700 leading-relaxed">
                {product.specifications.map((line, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-[#0F4C81] shrink-0 mt-1">•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              {isStraw(product) && (
                <dl className="mt-8 grid gap-3 text-sm border-t border-gray-100 pt-6">
                  <Attr label="Type" value={product.type} />
                  <Attr label="Material" value={product.material} />
                  <Attr label="Wrap" value={product.wrapType} />
                  <Attr label="Diameter" value={product.diameter} />
                  <Attr label="Length" value={product.length} />
                  <Attr label="Style" value={product.style} />
                  <Attr label="Color" value={product.color} />
                </dl>
              )}

              {isBag(product) && (
                <dl className="mt-8 grid gap-3 text-sm border-t border-gray-100 pt-6">
                  <Attr label="Material" value={product.material} />
                  <Attr label="Size / format" value={product.size} />
                  <Attr label="Strength" value={product.strength} />
                  <Attr label="Color" value={product.color} />
                </dl>
              )}

              {isCutlery(product) && (
                <dl className="mt-8 grid gap-3 text-sm border-t border-gray-100 pt-6">
                  <Attr label="Type" value={product.type} />
                  <Attr label="Material" value={product.material} />
                  <Attr label="Color" value={product.color} />
                  <Attr label="Packaging" value={product.packaging} />
                </dl>
              )}

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#0F4C81] text-white text-sm font-medium hover:bg-[#0b3961] stretch text-center hover:shadow-md hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 ease-out"
                >
                  Request a quote
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-gray-300 bg-white text-[#2A2A2A] text-sm font-medium hover:bg-gray-50 stretch text-center hover:shadow-md hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 ease-out"
                >
                  Contact sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Attr({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-gray-100 last:border-0 last:pb-0">
      <dt className="text-[14px] text-gray-500 font-medium shrink-0">{label}</dt>
      <dd className="font-semibold text-[14px] text-[#2A2A2A] sm:text-right">{value}</dd>
    </div>
  );
}
