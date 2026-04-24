import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#17191C] text-gray-300 pt-16 pb-8 md:min-h-[480px]">
      <div className="layout-site h-full flex flex-col justify-between">
        <div className="grid gap-10 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="/logo2.png"
                alt="Shanzo Pack"
                className="h-24 w-auto sm:h-28 md:h-32 max-w-[min(100%,280px)] object-contain object-left"
              />
            </div>
            <p className="text-base leading-relaxed max-w-xs text-gray-200">
              Leading manufacturer of biodegradable and non-biodegradable packaging solutions for
              businesses worldwide.
            </p>
          </div>

          {/* Products */}
          <div className="text-sm">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wide mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Disposable Packaging
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-white transition-colors">
                  OEM Custom Solutions
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">
                  Biodegradable Solutions
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Product Catalog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="text-sm">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wide mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">
                  Resources &amp; FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-sm">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wide mb-4">CONTACT</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-gray-400" />
                <span>info@shanzopack.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-gray-400" />
                <span>+1 (630) 547-2401</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gray-400" />
                <span>
                  799 Roosevelt Rd
                  <br />
                  Suite 311
                  <br />
                  Glen Ellyn, IL 60137
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social + bottom bar */}
        <div className="flex items-center justify-between border-t border-gray-800 pt-6 mt-6 text-sm">
          <div className="flex items-center gap-4 text-gray-400">
            <button className="hover:text-white">
              <Linkedin className="w-4 h-4" />
            </button>
            <button className="hover:text-white">
              <Facebook className="w-4 h-4" />
            </button>
            <button className="hover:text-white">
              <Instagram className="w-4 h-4" />
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Shanzo Pack. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <button className="hover:text-white">Privacy Policy</button>
            <button className="hover:text-white">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}


