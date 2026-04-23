import Header from '../components/Header';
import { Leaf, Factory, LineChart, CheckCircle2, ShieldCheck } from 'lucide-react';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-20">
        {/* Hero */}
        <section className="bg-[#0F4C81] text-white min-h-[220px] py-12 md:py-14 flex items-center">
          <div className="max-w-[1080px] mx-auto px-4 sm:px-6 w-full">
            <h1 className="text-[26px] md:text-4xl font-medium mb-2">
              About Shanzo Pack
            </h1>
            <p className="text-[11px] md:text-base max-w-2xl text-blue-100">
              A trusted leader in biodegradable packaging manufacturing with over 15 years of
              experience serving businesses worldwide.
            </p>
          </div>
        </section>

        {/* Mission + image + stats */}
        <section className="py-12 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 md:px-12">
            <div className="grid gap-8 lg:grid-cols-2 items-stretch mb-6">
              <div className="flex flex-col">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#2A2A2A] mb-6">
                  Our Mission
                </h2>
                <p className="text-base text-[#5E6A78] leading-relaxed mb-4 max-w-[560px]">
                  Shanzo Pack is committed to providing sustainable packaging solutions that help
                  businesses reduce their environmental footprint without compromising on quality,
                  performance, or reliability.
                </p>
                <p className="text-base text-[#5E6A78] leading-relaxed mb-12 max-w-[560px]">
                  Founded in 2011, we&apos;ve grown from a small regional supplier to a global
                  manufacturer serving clients across North America, Europe, and Asia. Our
                  state-of-the-art facility produces over 500 million units annually, backed by
                  rigorous quality control and industry-leading certifications.
                </p>

                <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                  <div className="border-l-4 border-[#0F4C81] pl-4">
                    <p className="text-3xl font-semibold text-[#2A2A2A] leading-none mb-1">2011</p>
                    <p className="text-[#6B7280] text-sm">Founded</p>
                  </div>
                  <div className="border-l-4 border-[#0F4C81] pl-4">
                    <p className="text-3xl font-semibold text-[#2A2A2A] leading-none mb-1">500M+</p>
                    <p className="text-[#6B7280] text-sm">Annual Production</p>
                  </div>
                  <div className="border-l-4 border-[#0F4C81] pl-4">
                    <p className="text-3xl font-semibold text-[#2A2A2A] leading-none mb-1">2,500+</p>
                    <p className="text-[#6B7280] text-sm">Business Clients</p>
                  </div>
                  <div className="border-l-4 border-[#0F4C81] pl-4">
                    <p className="text-3xl font-semibold text-[#2A2A2A] leading-none mb-1">50,000</p>
                    <p className="text-[#6B7280] text-sm">Sqft Facility</p>
                  </div>
                </div>
              </div>

              <div className="h-[420px] md:h-[700px] w-full">
                <img
                  src="/our-mission/2593acdd449e688992c7c739f84e4c5457550de3.png"
                  alt="Shanzo Pack manufacturing facility"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-12 bg-white">
          <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-semibold text-[#2A2A2A] mb-3">
                Industries We Serve
              </h2>
              <p className="text-sm md:text-base text-gray-500 max-w-3xl mx-auto">
                Providing sustainable packaging solutions across diverse business sectors.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="border border-gray-200 rounded-xl p-6 min-h-[230px]">
                <p className="text-xl font-semibold text-[#2A2A2A] leading-tight mb-4">Food Service &amp; Hospitality</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#6f8ca3]" />Restaurants &amp; Quick Service</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#6f8ca3]" />Catering &amp; Events</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#6f8ca3]" />Hotels &amp; Resorts</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#6f8ca3]" />Coffee Shops &amp; Cafes</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-xl p-6 min-h-[230px]">
                <p className="text-xl font-semibold text-[#2A2A2A] leading-tight mb-4">Retail &amp; eCommerce</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#6f8ca3]" />Online Retailers</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#6f8ca3]" />Specialty Food Stores</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#6f8ca3]" />Health &amp; Wellness Brands</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#6f8ca3]" />Gift &amp; Subscription Boxes</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-xl p-6 min-h-[230px]">
                <p className="text-xl font-semibold text-[#2A2A2A] leading-tight mb-4">Corporate &amp; Institutional</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#6f8ca3]" />Corporate Cafeterias</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#6f8ca3]" />Universities &amp; Schools</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#6f8ca3]" />Healthcare Facilities</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#6f8ca3]" />Government Agencies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* Our Commitment to Sustainability */}
        <section className="bg-[#0F4C81] min-h-[386px] flex items-center">
          <div className="max-w-[1280px] mx-auto px-4 md:px-12 w-full">
            <div className="max-w-[760px] mx-auto text-center text-white">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full border border-blue-200/70 flex items-center justify-center">
                <Leaf className="w-7 h-7 text-blue-100" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Our Commitment to Sustainability
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-blue-100">
                We&apos;re dedicated to reducing environmental impact through responsible
                manufacturing, renewable materials, and circular economy principles. Every
                product we create is designed with end-of-life in mind.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
