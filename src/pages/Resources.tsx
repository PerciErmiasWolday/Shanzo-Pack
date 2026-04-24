import { Download, FileText, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const faqs = [
  {
    question: 'Do you provide custom branding and colors?',
    answer:
      'Yes, we provide customized printing, colors, and private labeling based on your requirements.'
  },
  {
    question: 'Are your materials food-safe?',
    answer:
      'All products are made with PP injection food-grade and certified kraft paper compliant with international food safety standards.'
  },
  {
    question: 'What is your minimum order quantity (MOQ)?',
    answer:
      'MOQ depends on the product type — typically 50,000 straws or 200 rolls for films.'
  },
  {
    question: 'Do you export products outside Pakistan?',
    answer:
      'Yes, we export globally with complete documentation and compliant packaging standards.'
  },
  {
    question: 'What are your payment and delivery terms?',
    answer:
      'Flexible payment terms for long-term clients. Lead times range from 7–21 days depending on the order size.'
  }
];

export default function Resources() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="pt-20 flex-1 bg-[#F3F3F3]">
        {/* Hero */}
        <section className="py-9 bg-[#0F4C81] border-b border-[#0d4372]">
          <div className="layout-site">
            <h1 className="text-4xl font-medium text-white mb-2">
              Resources
            </h1>
            <p className="text-sm text-blue-100 max-w-xl">
              Explore our product catalogs, view our manufacturing capabilities, and find
              answers to common questions.
            </p>
          </div>
        </section>

        {/* Downloadable Catalogs */}
        <section className="py-10 bg-[#F3F3F3]">
          <div className="layout-site">
            <h2 className="text-[36px] font-semibold text-[#2A2A2A] mb-6">
              Downloadable Catalogs
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-white rounded-lg border border-gray-200 p-5 flex flex-col min-h-[300px]">
                <div className="w-10 h-10 mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-[#0F4C81]" />
                </div>
                <p className="text-[20px] font-semibold text-[#2A2A2A] mb-2">
                  2026 Product Catalog
                </p>
                <p className="text-sm text-gray-600 mb-6 flex-1 leading-relaxed">
                  Complete catalog featuring all our biodegradable disposable packaging
                  products with specifications and certifications.
                </p>
                <button className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#0F4C81] rounded hover:bg-[#0b3961] transition">
                  <Download className="h-3 w-3" />
                  Download PDF (3.5 MB)
                </button>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-5 flex flex-col min-h-[300px]">
                <div className="w-10 h-10 mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-[#0F4C81]" />
                </div>
                <p className="text-[20px] font-semibold text-[#2A2A2A] mb-2">
                  Certifications &amp; Standards
                </p>
                <p className="text-sm text-gray-600 mb-6 flex-1 leading-relaxed">
                  Detailed documentation of our ISO, BPI, FDA, and other certifications
                  demonstrating product quality and compliance.
                </p>
                <button className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#0F4C81] rounded hover:bg-[#0b3961] transition">
                  <Download className="h-3 w-3" />
                  Download PDF (3.5 MB)
                </button>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-5 flex flex-col min-h-[300px]">
                <div className="w-10 h-10 mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-[#0F4C81]" />
                </div>
                <p className="text-[20px] font-semibold text-[#2A2A2A] mb-2">
                  OEM Capabilities Guide
                </p>
                <p className="text-sm text-gray-600 mb-6 flex-1 leading-relaxed">
                  Learn about our custom manufacturing capabilities, material options, and
                  customization possibilities for OEM projects.
                </p>
                <button className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#0F4C81] rounded hover:bg-[#0b3961] transition">
                  <Download className="h-3 w-3" />
                  Download PDF (3.5 MB)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-8 bg-[#F3F3F3] border-t border-gray-200">
          <div className="layout-site">
            <div className="flex items-center gap-3 mb-5">
              <HelpCircle className="h-5 w-5 text-[#0F4C81]" />
              <h2 className="text-[32px] font-semibold text-[#2A2A2A]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isActive = activeFaq === index;
                  return (
                    <button
                      key={faq.question}
                      type="button"
                      onClick={() =>
                        setActiveFaq((prev) => (prev === index ? null : index))
                      }
                      className="w-full text-left bg-white rounded border border-gray-200 hover:border-[#0F4C81] transition p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="font-medium text-gray-900 text-sm">
                          {faq.question}
                        </p>
                        <span className="text-gray-400 text-lg leading-none">
                          {isActive ? '−' : '+'}
                        </span>
                      </div>
                      {isActive && (
                        <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            <div className="mt-10 text-center text-sm text-gray-500">
              <p className="mb-4">Can&apos;t find what you&apos;re looking for?</p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2 rounded text-sm font-semibold text-white bg-[#0F4C81] hover:bg-[#0b3961] transition hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
