import { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import Header from '../components/Header';

export default function PlasticStraws() {
  const [scrollY, setScrollY] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const prefersReducedMotion = useRef(false);

  const [quantity, setQuantity] = useState(50000);
  const [size, setSize] = useState('8mm x 197mm');
  const [wrapping, setWrapping] = useState('individually-wrapped');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });

    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      setMounted(true);
    }, 10);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-section') || '0');
            setVisibleSections((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.25 }
    );

    setTimeout(() => {
      document.querySelectorAll('[data-section]').forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, quantity, size, wrapping });
    setShowForm(false);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const clamp = (value: number, min: number, max: number) => {
    return Math.min(Math.max(value, min), max);
  };

  const getParallaxOffset = (speed: number) => {
    if (prefersReducedMotion.current) return 0;
    return clamp(scrollY * speed, -200, 200);
  };

  const isVisible = (index: number) => visibleSections.has(index);

  const timeline = [
    { label: 'Material', description: 'Bio-based plastic' },
    { label: 'Production', description: 'Safe manufacturing' },
    { label: 'Usage', description: 'Durable performance' },
    { label: 'Biodegradation', description: 'Natural decomposition' }
  ];

  const lifecycle = ['Made', 'Used', 'Disposed', 'Naturally Decomposed'];

  const certifications = [
    'Food grade safe',
    'ASTM D6400 compliant',
    'BPA free',
    'Non toxic',
    'Compostable material'
  ];

  const benefits = [
    { icon: '🌍', text: 'Reduce environmental footprint' },
    { icon: '💰', text: 'Lower waste management costs' },
    { icon: '🤝', text: 'Meet sustainability commitments' }
  ];

  const testimonials = [
    '"Our café switched to Shanzo biodegradable straws. Great quality."',
    '"No sogginess and eco friendly."',
    '"Customizable and sturdy. Perfect for events."'
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#e8f2ff] to-white transition-transform duration-75"
          style={{
            transform: prefersReducedMotion.current ? 'none' : `translateY(${getParallaxOffset(0.15)}px)`
          }}
        />

        <div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full"
          style={{
            filter: 'blur(80px)',
            opacity: 0.1,
            transform: prefersReducedMotion.current ? 'none' : `translateY(${getParallaxOffset(0.1)}px)`
          }}
        />
        <div
          className="absolute bottom-40 right-20 w-96 h-96 bg-blue-300 rounded-full"
          style={{
            filter: 'blur(100px)',
            opacity: 0.1,
            transform: prefersReducedMotion.current ? 'none' : `translateY(${getParallaxOffset(0.08)}px)`
          }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-48 h-48 bg-blue-100 rounded-full"
          style={{
            filter: 'blur(60px)',
            opacity: 0.1,
            transform: prefersReducedMotion.current ? 'none' : `translateY(${getParallaxOffset(0.12)}px)`
          }}
        />

        <div
          className="relative z-10 max-w-5xl mx-auto w-full site-px text-center transition-all duration-700"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <h1
            className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight transition-transform duration-75"
            style={{
              transform: prefersReducedMotion.current ? 'none' : `translateY(${getParallaxOffset(0.3)}px)`
            }}
          >
            100% Biodegradable<br />Plastic Straws
          </h1>

          <p
            className="text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto transition-opacity duration-500"
            style={{
              opacity: mounted ? 1 : 0
            }}
          >
            Eco-friendly straws that combine durability with complete biodegradability.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white" data-section="0">
        <div className="layout-site">
          <div
            className="text-center mb-16 transition-all duration-700"
            style={{
              opacity: isVisible(0) ? 1 : 0,
              transform: isVisible(0) ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Product </span>
              <span className="text-blue-600">Overview</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Shanzo Pack manufactures 100% biodegradable plastic straws using advanced eco-safe materials that maintain the strength and feel of traditional plastic while being completely compostable. Designed for both hot and cold beverages, our straws provide a clean, durable, and sustainable drinking experience. Produced in-house under strict quality standards, they are ideal for restaurants, cafés, and food-service businesses that prioritize environmental responsibility without compromising on performance.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
              Available in multiple sizes, finishes, and custom colors, Shanzo biodegradable plastic straws are a modern solution for sustainable packaging and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div
              className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
              style={{
                opacity: isVisible(0) ? 1 : 0,
                transform: isVisible(0) ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '100ms'
              }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Sizes</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4 hover:bg-gray-50 transition-colors duration-200 px-2 -mx-2 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">6mm x 197mm</span>
                    <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                      Standard
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">Pattern: Solid/Clear</p>
                </div>
                <div className="border-b border-gray-200 pb-4 hover:bg-gray-50 transition-colors duration-200 px-2 -mx-2 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">6mm x 210mm</span>
                    <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                      Regular
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">Pattern: Solid/Clear</p>
                </div>
                <div className="border-b border-gray-200 pb-4 hover:bg-gray-50 transition-colors duration-200 px-2 -mx-2 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">8mm x 197mm</span>
                    <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                      Wide
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">Pattern: Solid/Clear</p>
                </div>
                <div className="border-b border-gray-200 pb-4 hover:bg-gray-50 transition-colors duration-200 px-2 -mx-2 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">10mm x 210mm</span>
                    <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                      Smoothie
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">Pattern: Solid/Clear</p>
                </div>
                <div className="pb-4 hover:bg-gray-50 transition-colors duration-200 px-2 -mx-2 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">12mm x 210mm</span>
                    <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                      Bubble Tea
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">Pattern: Solid/Clear</p>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
              style={{
                opacity: isVisible(0) ? 1 : 0,
                transform: isVisible(0) ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '200ms'
              }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">100% Biodegradable</h4>
                    <p className="text-gray-600 text-sm">Made with eco-safe biodegradable plastic for full compostability.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Food-Grade Certified</h4>
                    <p className="text-gray-600 text-sm">Safe for all beverage types and compliant with FDA standards.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hot & Cold Compatible</h4>
                    <p className="text-gray-600 text-sm">Retains strength and flexibility in both hot and cold drinks.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Customizable Design</h4>
                    <p className="text-gray-600 text-sm">Available in multiple sizes, colors, and branding options.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Strong & Flexible</h4>
                    <p className="text-gray-600 text-sm">Performs like traditional plastic while remaining environmentally friendly.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Individually Wrapped Options</h4>
                    <p className="text-gray-600 text-sm">Hygienically packaged for retail and food-service use.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white relative" data-section="1">
        <div className="max-w-6xl mx-auto w-full site-px">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {timeline.map((stage, index) => (
              <div
                key={index}
                className="text-center transition-all duration-500"
                style={{
                  opacity: isVisible(1) ? 1 : 0,
                  transform: isVisible(1) ? 'translateX(0)' : 'translateX(-30px)',
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stage.label}</h3>
                <p className="text-lg text-gray-600">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-white to-[#f8fbff] relative overflow-hidden" data-section="2">
        <div className="max-w-6xl mx-auto w-full site-px">
          <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
            <div
              className="flex-1 transition-all duration-500 ease-out hover:scale-105"
              style={{
                opacity: isVisible(2) ? 1 : 0,
                transform: isVisible(2) ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)'
              }}
            >
              <div className="bg-[#f2f6ff] p-12 rounded-2xl h-full flex flex-col justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 leading-tight">Conventional Plastic</h3>
                <p className="text-lg md:text-xl text-blue-700 leading-relaxed">Takes 400+ years to decompose</p>
              </div>
            </div>

            <div
              className="flex-1 transition-all duration-500 ease-out hover:scale-105"
              style={{
                opacity: isVisible(2) ? 1 : 0,
                transform: isVisible(2) ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                transitionDelay: '150ms'
              }}
            >
              <div className="bg-[#f4fbf4] p-12 rounded-2xl h-full flex flex-col justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-4 leading-tight">Shanzo BioPlastic</h3>
                <p className="text-lg md:text-xl text-green-700 leading-relaxed">Fully biodegrades within months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-white to-[#f8fbff] relative" data-section="3">
        <div className="max-w-6xl mx-auto w-full site-px">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">Certifications & Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                style={{
                  opacity: isVisible(3) ? 1 : 0,
                  transform: isVisible(3) ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <p className="text-center text-lg font-semibold text-gray-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white relative" data-section="4">
        <div className="max-w-6xl mx-auto w-full site-px">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">Business Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center transition-all duration-700"
                style={{
                  opacity: isVisible(4) ? 1 : 0,
                  transform: isVisible(4)
                    ? 'translateX(0)'
                    : index % 2 === 0 ? 'translateX(-30px)' : 'translateX(30px)',
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="text-6xl mb-6">{benefit.icon}</div>
                <p className="text-2xl font-semibold text-gray-900">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-white to-[#f8fbff] relative" data-section="5">
        <div className="max-w-4xl mx-auto w-full site-px">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">Quote Estimator</h2>

          <div
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl space-y-8 transition-all duration-700"
            style={{
              opacity: isVisible(5) ? 1 : 0,
              transform: isVisible(5) ? 'scale(1)' : 'scale(0.95)'
            }}
          >
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Quantity: {quantity.toLocaleString()} units
              </label>
              <input
                type="range"
                min="10000"
                max="500000"
                step="10000"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">Straw Size</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-lg"
              >
                <option value="6mm x 197mm">6mm x 197mm - Standard</option>
                <option value="6mm x 210mm">6mm x 210mm - Regular</option>
                <option value="8mm x 197mm">8mm x 197mm - Wide</option>
                <option value="10mm x 210mm">10mm x 210mm - Smoothie</option>
                <option value="12mm x 210mm">12mm x 210mm - Bubble Tea</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">Wrapping</label>
              <select
                value={wrapping}
                onChange={(e) => setWrapping(e.target.value)}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-lg"
              >
                <option value="individually-wrapped">Individually Wrapped</option>
                <option value="bulk">Bulk Packaging</option>
              </select>
            </div>

            <div className="p-6 bg-blue-50 rounded-2xl">
              <p className="text-xl text-gray-900">
                You are estimating for <strong>{quantity.toLocaleString()}</strong>{' '}
                <strong>{wrapping.replace('-', ' ')}</strong> <strong>{size}</strong> straws.
              </p>
            </div>

            {!showForm ? (
              <button
                onClick={() => setShowForm(true)}
                className="w-full px-12 py-6 bg-blue-600 text-white text-xl font-semibold rounded-2xl shadow-lg hover:shadow-2xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Request Quote
              </button>
            ) : (
              <div
                className="mt-6"
                style={{
                  animation: 'expandForm 250ms ease-out'
                }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-lg"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-lg"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-lg"
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-lg resize-none"
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 px-8 py-4 bg-gray-200 text-gray-700 text-lg font-semibold rounded-xl hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white relative" data-section="6">
        <div className="max-w-4xl mx-auto w-full site-px">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">What Our Customers Say</h2>
          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="text-center transition-all duration-700"
                style={{
                  opacity: isVisible(6) ? 1 : 0,
                  transform: isVisible(6) ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <p className="text-2xl md:text-3xl text-gray-900 italic">
                  {testimonial}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-40 overflow-hidden" data-section="7">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-white" />
        <div className="relative z-10 max-w-5xl mx-auto w-full site-px text-center">
          <h2
            className="text-5xl md:text-7xl font-bold text-white leading-relaxed transition-all duration-700 px-4"
            style={{
              opacity: isVisible(7) ? 1 : 0,
              transform: isVisible(7) ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            Shanzo Pack - Creating sustainability through innovation.
          </h2>
        </div>
      </section>

      <style>{`
        @keyframes expandForm {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: #2563eb;
          cursor: pointer;
          border-radius: 50%;
        }

        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: #2563eb;
          cursor: pointer;
          border-radius: 50%;
          border: none;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
