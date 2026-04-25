import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, SlidersHorizontal } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  bagProducts,
  bagSubFilters,
  cutleryProducts,
  cutlerySubFilters,
  strawProducts,
  strawSubFilters,
  type BagProduct,
  type CutleryProduct,
  type StrawProduct
} from '../data/merchantsCatalog';

export default function ProductTypeCatalog() {
  const { type = '' } = useParams();
  const pageTitle = type.toUpperCase();
  const isStraws = type.toLowerCase() === 'straws';
  const isBags = type.toLowerCase() === 'bags';
  const isCutlery = type.toLowerCase() === 'cutlery';

  const [selected, setSelected] = useState<Record<string, string[]>>({});

  const toggleFilter = (group: string, value: string) => {
    setSelected((prev) => {
      const current = prev[group] ?? [];
      const next = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [group]: next };
    });
  };

  const filtered = useMemo(() => {
    if (!isStraws) return [];
    return strawProducts.filter((item) => {
      const typeMatch = (selected.Type ?? []).length === 0 || (selected.Type ?? []).includes(item.type);
      const materialMatch =
        (selected.Material ?? []).length === 0 ||
        (selected.Material ?? []).includes(item.material);
      const wrapMatch =
        (selected['Wrap Type'] ?? []).length === 0 ||
        (selected['Wrap Type'] ?? []).includes(item.wrapType);
      const diameterMatch =
        (selected.Diameter ?? []).length === 0 ||
        (selected.Diameter ?? []).includes(item.diameter);
      const lengthMatch =
        (selected.Length ?? []).length === 0 ||
        (selected.Length ?? []).includes(item.length);
      const styleMatch = (selected.Style ?? []).length === 0 || (selected.Style ?? []).includes(item.style);
      const colorMatch = (selected.Color ?? []).length === 0 || (selected.Color ?? []).includes(item.color);

      return (
        typeMatch &&
        materialMatch &&
        wrapMatch &&
        diameterMatch &&
        lengthMatch &&
        styleMatch &&
        colorMatch
      );
    });
  }, [isStraws, selected]);

  const filteredBags = useMemo(() => {
    if (!isBags) return [];
    return bagProducts.filter((item) => {
      const materialMatch =
        (selected.Material ?? []).length === 0 ||
        (selected.Material ?? []).includes(item.material);
      const sizeMatch = (selected.Size ?? []).length === 0 || (selected.Size ?? []).includes(item.size);
      const strengthMatch =
        (selected['Thickness / Strength'] ?? []).length === 0 ||
        (selected['Thickness / Strength'] ?? []).includes(item.strength);
      const colorMatch = (selected.Color ?? []).length === 0 || (selected.Color ?? []).includes(item.color);

      return materialMatch && sizeMatch && strengthMatch && colorMatch;
    });
  }, [isBags, selected]);

  const filteredCutlery = useMemo(() => {
    if (!isCutlery) return [];
    return cutleryProducts.filter((item) => {
      const typeMatch = (selected.Type ?? []).length === 0 || (selected.Type ?? []).includes(item.type);
      const materialMatch =
        (selected.Material ?? []).length === 0 ||
        (selected.Material ?? []).includes(item.material);
      const colorMatch = (selected.Color ?? []).length === 0 || (selected.Color ?? []).includes(item.color);
      const packagingMatch =
        (selected.Packaging ?? []).length === 0 ||
        (selected.Packaging ?? []).includes(item.packaging);

      return typeMatch && materialMatch && colorMatch && packagingMatch;
    });
  }, [isCutlery, selected]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="pt-20 flex-1 bg-[#F3F3F3]">
        <section className="bg-[#0F4C81] text-white py-7 border-b border-[#0d4372]">
          <div className="layout-site">
            <h1 className="text-[34px] leading-none font-medium mb-2">{pageTitle}</h1>
            <p className="text-sm text-blue-100">
              Filter by attributes or expand each card for full specifications.
            </p>
            <Link
              to="/products"
              className="inline-flex mt-4 items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition"
            >
              <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 transition">
                <ArrowLeft className="h-4 w-4" />
              </span>
              Back to All Productd
            </Link>
          </div>
        </section>

        <section className="py-8">
          <div className="layout-site">
            {!isStraws && !isBags && !isCutlery ? (
              <div className="bg-white border border-gray-200 rounded p-6 text-sm text-gray-700">
                Sub-filters for `{type}` will be added next.
              </div>
            ) : (
              <div className="grid gap-9 lg:grid-cols-[240px,minmax(0,1fr)] items-start">
                <aside className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm self-start text-sm lg:sticky lg:top-[110px] lg:z-10">
                  <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-gray-100">
                    <SlidersHorizontal className="h-4.5 w-4.5 text-[#0F4C81]" />
                    <p className="text-sm font-semibold text-[#2A2A2A]">Filters</p>
                  </div>
                  {Object.entries(
                    isStraws ? strawSubFilters : isBags ? bagSubFilters : cutlerySubFilters
                  ).map(([group, options]) => (
                    <div key={group} className="mb-5 last:mb-0">
                      <p className="text-[13px] font-semibold text-[#2A2A2A] mb-3">{group}</p>
                      <div className="space-y-2.5">
                        {options.map((option: string) => (
                          <label key={option} className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={(selected[group] ?? []).includes(option)}
                              onChange={() => toggleFilter(group, option)}
                              className="h-4 w-4 rounded border-gray-300 text-[#0F4C81] focus:ring-[#0F4C81]"
                            />
                            <span className="text-[13px] text-gray-600 group-hover:text-[#0F4C81] transition">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  {Object.values(selected).some(arr => arr.length > 0) && (
                    <button
                      onClick={() => setSelected({})}
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 mt-4 text-[13px] font-medium text-gray-600 hover:bg-gray-100 hover:text-[#0F4C81] hover:shadow-sm hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 ease-out"
                    >
                      Reset Filters
                    </button>
                  )}
                </aside>

                <div>
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {(isStraws ? filtered : isBags ? filteredBags : filteredCutlery).map((item) => (
                      <Link
                        key={item.id}
                        to={`/products/${item.id}`}
                        className="group bg-white rounded-xl border border-[#D9D9D9] overflow-hidden hover-lift block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C81]/35"
                      >
                        <div className="bg-[#e4efdf] border-b border-gray-200 p-2 h-[170px] flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain bg-white"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="p-4">
                          <p className="text-base leading-snug font-semibold text-[#2A2A2A] mb-3">{item.title}</p>
                          <div className="mb-3">
                            <p className="text-[11px] font-semibold text-[#2A2A2A] uppercase tracking-wide mb-1.5 opacity-70">
                              Specifications
                            </p>
                            <ul className="list-disc pl-4 space-y-1 text-[13px] text-gray-600 leading-relaxed">
                              {item.specifications.map((line, idx) => (
                                <li key={`${item.id}-spec-${idx}`}>{line}</li>
                              ))}
                            </ul>
                          </div>
                          {isStraws ? (
                            <p className="text-[11px] text-gray-500 pt-3 border-t border-gray-100">
                              <span className="opacity-70">Tags:</span> {(item as StrawProduct).type} · {(item as StrawProduct).material}
                            </p>
                          ) : isBags ? (
                            <p className="text-[11px] text-gray-500 pt-3 border-t border-gray-100">
                              <span className="opacity-70">Tags:</span> {(item as BagProduct).size} · {(item as BagProduct).strength}
                            </p>
                          ) : (
                            <p className="text-[11px] text-gray-500 pt-3 border-t border-gray-100">
                              <span className="opacity-70">Tags:</span> {(item as CutleryProduct).type} · {(item as CutleryProduct).color}
                            </p>
                          )}
                          <p className="text-[13px] font-medium text-[#0F4C81] mt-3 group-hover:underline flex items-center">
                            View Details <ArrowLeft className="w-3.5 h-3.5 ml-1 rotate-180" />
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-gray-500">
                    Showing {isStraws ? filtered.length : isBags ? filteredBags.length : filteredCutlery.length}{' '}
                    {isStraws ? 'straw' : isBags ? 'bag' : 'cutlery'} products
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

