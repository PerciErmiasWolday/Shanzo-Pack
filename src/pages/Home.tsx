import { ArrowRight, ShieldCheck, Leaf, Factory, Timer, CheckCircle2, Recycle, Shield, Box, UtensilsCrossed, ShoppingBag, Building2, Leaf as LeafIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteModal from '../components/QuoteModal';
import Header from '../components/Header';
import LogoAnimation from '../components/LogoAnimation';
import Footer from '../components/Footer';
import { useState, useEffect, useRef } from 'react';
import loadingVideo from '../loading.MP4';

const heroSlides = [
  { src: '/hero/slide-1.png', alt: 'Hero slide 1' },
  { src: '/hero/slide2.png', alt: 'Hero slide 2' },
  { src: '/hero/slide3.png', alt: 'Hero slide 3' }
];

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showLoadingVideo, setShowLoadingVideo] = useState(() => {
    try {
      return sessionStorage.getItem('homeIntroPlayed') !== '1';
    } catch {
      return true;
    }
  });
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setHeroSlide((i) => (i + 1) % heroSlides.length),
      3500
    );
    return () => window.clearInterval(id);
  }, []);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {showLoadingVideo && (
        <div className="fixed inset-0 z-[120] bg-white flex items-center justify-center">
          <video
            ref={videoRef}
            src={loadingVideo}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
            onEnded={() => {
              try {
                sessionStorage.setItem('homeIntroPlayed', '1');
              } catch {
                // ignore
              }
              setShowLoadingVideo(false);
            }}
            onError={() => {
              try {
                sessionStorage.setItem('homeIntroPlayed', '1');
              } catch {
                // ignore
              }
              setShowLoadingVideo(false);
            }}
            onLoadedMetadata={() => {
              const v = videoRef.current;
              if (!v) return;

              // Start from 3 seconds and play until the actual end.
              v.currentTime = Math.max(0, 3);
              const p = v.play();
              if (p && typeof (p as Promise<void>).catch === 'function') {
                (p as Promise<void>).catch(() => {
                  try {
                    sessionStorage.setItem('homeIntroPlayed', '1');
                  } catch {
                    // ignore
                  }
                  setShowLoadingVideo(false);
                });
              }
            }}
          />
        </div>
      )}

      {!animationComplete && !showLoadingVideo && (
        <LogoAnimation onAnimationComplete={handleAnimationComplete} />
      )}

      <div className={`transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Header />

      {/* Hero Section — image carousel */}
      <section className="relative min-h-[760px] flex items-center overflow-hidden bg-gray-900 pt-28">
        <div className="absolute inset-0">
          {heroSlides.map((slide, i) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out ${
                i === heroSlide ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/45 z-[1]" />

        <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() =>
              setHeroSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length)
            }
            className="p-2 rounded-full bg-white/15 text-white hover:bg-white/25 transition backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i.toString()}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setHeroSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  i === heroSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => setHeroSlide((s) => (s + 1) % heroSlides.length)}
            className="p-2 rounded-full bg-white/15 text-white hover:bg-white/25 transition backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-2 sm:px-4 md:px-6 w-full">
          <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 items-center">
            <div className="text-white max-w-2xl py-8">
              <h1 className="text-4xl sm:text-5xl md:text-[3rem] leading-snug md:leading-[1.3] font-bold mb-8">
                <span className="block">Everything Your Business</span>
                <span className="block mt-1">Needs</span>
                <span className="block mt-3">From Packaging to</span>
                <span className="block">Essential Supplies.</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-8 leading-relaxed max-w-lg">
                Certified biodegradable and compostable packaging solutions. From stock
                products to custom OEM manufacturing at scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 h-14 rounded-xl text-base font-medium bg-[#0F4C81] text-white hover:bg-[#0b3961] shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-[0.96] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                >
                  Shop Products
                </Link>
                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="inline-flex items-center justify-center px-8 h-14 rounded-xl text-base font-medium bg-white text-[#2A2A2A] border border-gray-200 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 active:scale-[0.96] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                >
                  Request Custom Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Certifications Strip */}
      <section className="border-b border-[#E5E5E0] bg-white">
        <div className="max-w-[1600px] mx-auto px-2 sm:px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-[#E5E5E0] flex items-center justify-center bg-white">
                <ShieldCheck className="w-5 h-5 text-[#0F4C81]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#2A2A2A]">ISO 9001 Certified</p>
                <p className="text-sm text-gray-500">Quality Management</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-[#E5E5E0] flex items-center justify-center bg-white">
                <Leaf className="w-5 h-5 text-[#0F4C81]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#2A2A2A]">BPI Certified</p>
                <p className="text-sm text-gray-500">Compostable Products</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-[#E5E5E0] flex items-center justify-center bg-white">
                <Factory className="w-5 h-5 text-[#0F4C81]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#2A2A2A]">50,000+ sqft</p>
                <p className="text-sm text-gray-500">Manufacturing Facility</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-[#E5E5E0] flex items-center justify-center bg-white">
                <Timer className="w-5 h-5 text-[#0F4C81]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#2A2A2A]">15+ Years</p>
                <p className="text-sm text-gray-500">Industry Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-16 bg-[#F3F3F3]">
        <div className="max-w-[1600px] mx-auto px-2 sm:px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#2A2A2A] mb-3">
              Featured Products
            </h2>
            <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Ready-to-ship biodegradable packaging solutions for foodservice, retail, and
              hospitality industries.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white rounded-xl border border-[#D9D9D9] overflow-hidden flex flex-col hover-lift">
              <div className="h-[235px]">
                <img
                  src="/featured-products/c544da36b245fb10f136e3c7f9520a828bad7d14.jpg"
                  alt="Compostable Food Containers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3 text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-[#0F4C81] font-semibold">
                    BPI Certified
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-[#0F4C81] font-semibold">
                    FDA Approved
                  </span>
                </div>
                <h3 className="text-[18px] font-semibold text-[#2A2A2A] leading-tight mb-2">
                  Compostable
                  <br />
                  Food Containers
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">
                  Premium sugarcane fiber containers, available in multiple sizes.
                </p>
                <p className="text-[13px] text-gray-500 mb-5">MOQ: 1,000 units</p>
                <button type="button" className="w-full h-11 border border-[#8CA3BF] rounded text-sm font-medium text-[#0F4C81] hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 ease-out">
                  View Details
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl border border-[#D9D9D9] overflow-hidden flex flex-col hover-lift">
              <div className="h-[235px]">
                <img
                  src="/featured-products/aec2c2b6ebf6a558573ea647b74136f65f090b5e.jpg"
                  alt="Biodegradable Takeout Boxes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3 text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-[#0F4C81] font-semibold">
                    Compostable
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-[#0F4C81] font-semibold">
                    ASTM D6400
                  </span>
                </div>
                <h3 className="text-[18px] font-semibold text-[#2A2A2A] leading-tight mb-2">
                  Biodegradable
                  <br />
                  Takeout Boxes
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">
                  Durable PLA-lined kraft boxes for hot and cold foods.
                </p>
                <p className="text-[13px] text-gray-500 mb-5">MOQ: 2,500 units</p>
                <button type="button" className="w-full h-11 border border-[#8CA3BF] rounded text-sm font-medium text-[#0F4C81] hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 ease-out">
                  View Details
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl border border-[#D9D9D9] overflow-hidden flex flex-col hover-lift">
              <div className="h-[235px]">
                <img
                  src="/featured-products/06573c6850f845568b8e0dee77f6423d48391c43.jpg"
                  alt="Eco-Friendly Mailers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3 text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-[#0F4C81] font-semibold">
                    Recyclable
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-[#0F4C81] font-semibold">
                    FSC Certified
                  </span>
                </div>
                <h3 className="text-[18px] font-semibold text-[#2A2A2A] leading-tight mb-2">
                  Eco-Friendly Mailers
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">
                  Sustainable kraft paper mailers with tear-resistant design.
                </p>
                <p className="text-[13px] text-gray-500 mb-5">MOQ: 5,000 units</p>
                <button type="button" className="w-full h-11 border border-[#8CA3BF] rounded text-sm font-medium text-[#0F4C81] hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 ease-out">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-[#0F4C81] hover:text-[#0b3961]"
            >
              Browse All Products
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Packaging Manufacturing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-2 sm:px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#2A2A2A] mb-4">
                Custom Packaging
                <br />
                Manufacturing
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-8 max-w-xl">
                Partner with our experienced team to design and manufacture custom biodegradable
                packaging solutions tailored to your brand and specifications.
              </p>

              <div className="space-y-5 mb-8 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0F4C81] mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#2A2A2A]">Custom Design &amp; Branding</p>
                    <p className="text-gray-600">
                      Full customization with your logo, colors, and messaging.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0F4C81] mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#2A2A2A]">Flexible MOQ</p>
                    <p className="text-gray-600">
                      Minimum order quantities starting at 10,000 units.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0F4C81] mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#2A2A2A]">Fast Turnaround</p>
                    <p className="text-gray-600">
                      Production lead times from 4–6 weeks depending on complexity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0F4C81] mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#2A2A2A]">Material Expertise</p>
                    <p className="text-gray-600">
                      Wide selection of sustainable materials and certifications.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="group inline-flex items-center justify-center px-8 h-12 rounded-xl text-sm font-medium bg-[#0F4C81] text-white hover:bg-[#0b3961] shadow-sm hover:shadow-lg hover:-translate-y-1 active:scale-[0.97] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                Learn About OEM Services
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="h-[420px] w-full">
              <img
                src="/custom-packaging/Image (Custom Packaging Design).png"
                alt="Custom packaging boxes"
                className="w-full h-full object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Biodegradable Packaging Section */}
      <section className="py-16 md:min-h-[543px] bg-[#647E94] flex items-center">
        <div className="max-w-[1600px] mx-auto px-2 sm:px-4 md:px-6">
          <div className="text-center text-white mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">
              Why Biodegradable Packaging?
            </h2>
            <p className="text-sm md:text-base max-w-2xl mx-auto text-blue-100">
              Our sustainable materials break down naturally, reducing environmental impact
              while maintaining product integrity.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-8 items-stretch">
            <div className="bg-white rounded-lg shadow-sm px-6 py-8 min-h-[300px] flex flex-col">
              <div className="w-10 h-10 mb-3 rounded-full bg-blue-50 flex items-center justify-center">
                <Recycle className="w-5 h-5 text-[#0F4C81]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#2A2A2A] leading-tight min-h-[52px] mb-3">
                Compostable Materials
              </h3>
              <p className="text-sm text-gray-600 leading-7">
                Made from renewable resources like sugarcane, bamboo, and PLA that fully
                decompose in commercial composting facilities.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm px-6 py-8 min-h-[300px] flex flex-col">
              <div className="w-10 h-10 mb-3 rounded-full bg-blue-50 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#0F4C81]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#2A2A2A] leading-tight min-h-[52px] mb-3">
                Industry Compliance
              </h3>
              <p className="text-sm text-gray-600 leading-7">
                All products meet ASTM D6400 and EN 13432 standards, plus FDA approval for food
                contact safety.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm px-6 py-8 min-h-[300px] flex flex-col">
              <div className="w-10 h-10 mb-3 rounded-full bg-blue-50 flex items-center justify-center">
                <Box className="w-5 h-5 text-[#0F4C81]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#2A2A2A] leading-tight min-h-[52px] mb-3">
                Performance &amp; Durability
              </h3>
              <p className="text-sm text-gray-600 leading-7">
                Engineered to handle hot, cold, wet, and greasy foods without compromising
                structural integrity.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white hover:text-blue-100"
            >
              Learn More About Our Solutions
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* Partners Section */}
      {/* Industries We Serve */}
      <section className="py-20 bg-[#5D7F9D]">
        <div className="max-w-[1600px] mx-auto px-2 sm:px-4 md:px-6">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">
              Industries We Serve
            </h2>
            <p className="text-sm md:text-base max-w-2xl mx-auto">
              Trusted by businesses across multiple sectors for sustainable packaging solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4 mb-4">
            <div className="bg-white rounded-2xl shadow-sm px-6 py-8 text-center">
              <div className="w-10 h-10 mb-4 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
                <UtensilsCrossed className="w-5 h-5 text-[#0F4C81]" />
              </div>
              <p className="text-sm font-semibold text-[#2A2A2A] mb-1">Food Service</p>
              <p className="text-xs text-gray-500">
                Restaurants, cafés,
                <br />
                catering
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm px-6 py-8 text-center">
              <div className="w-10 h-10 mb-4 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-5 h-5 text-[#0F4C81]" />
              </div>
              <p className="text-sm font-semibold text-[#2A2A2A] mb-1">Retail &amp; eCommerce</p>
              <p className="text-xs text-gray-500">
                Product packaging,
                <br />
                shipping
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm px-6 py-8 text-center">
              <div className="w-10 h-10 mb-4 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
                <Building2 className="w-5 h-5 text-[#0F4C81]" />
              </div>
              <p className="text-sm font-semibold text-[#2A2A2A] mb-1">Hospitality</p>
              <p className="text-xs text-gray-500">
                Hotels, events,
                <br />
                venues
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm px-6 py-8 text-center">
              <div className="w-10 h-10 mb-4 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
                <LeafIcon className="w-5 h-5 text-[#0F4C81]" />
              </div>
              <p className="text-sm font-semibold text-[#2A2A2A] mb-1">Grocery &amp; Specialty</p>
              <p className="text-xs text-gray-500">
                Organic markets,
                <br />
                delis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0F4C81]">
        <div className="max-w-[1600px] mx-auto px-2 sm:px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                Ready to Make the Switch to
                <br />
                Sustainable Packaging?
              </h2>
              <p className="text-sm md:text-base text-blue-100 max-w-xl">
                Our team is ready to help you find the perfect biodegradable solution for your
                business.
              </p>
            </div>
            <div className="flex gap-4 justify-start md:justify-end">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-6 h-12 rounded-xl bg-white text-[#0F4C81] text-sm font-medium shadow-sm hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1 active:scale-[0.96] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                Request a Quote
              </button>
              <Link
                to="/contact"
                className="px-6 h-12 rounded-xl border border-blue-100 text-sm font-medium text-white flex items-center justify-center hover:bg-[#0b3961] hover:shadow-lg hover:-translate-y-1 active:scale-[0.96] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      </div>
    </div>
  );
}
