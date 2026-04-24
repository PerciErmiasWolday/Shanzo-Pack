import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E5E0]">
      <nav className="layout-site-wide">
        <div className="flex justify-between items-center h-[89px]">
          <Link to="/" className="flex items-center gap-3 min-w-0">
            <img
              src="/logo.jpg"
              alt="Shanzo Pack"
              className="h-[72px] w-auto shrink-0"
            />
            <span className="hidden sm:inline text-xl md:text-2xl font-semibold text-[#2A2A2A] tracking-tight">
              Shanzo Pack
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium relative group transition-colors duration-200 ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
              <span className="absolute -bottom-0.5 left-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out w-0 group-hover:w-full" />
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium relative group transition-colors duration-200 ${
                isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About Us
              <span className="absolute -bottom-0.5 left-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out w-0 group-hover:w-full" />
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium relative group transition-colors duration-200 ${
                isActive('/products') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Products
              <span className="absolute -bottom-0.5 left-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out w-0 group-hover:w-full" />
            </Link>
            <Link
              to="/resources"
              className={`text-sm font-medium relative group transition-colors duration-200 ${
                isActive('/resources') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Resources
              <span className="absolute -bottom-0.5 left-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out w-0 group-hover:w-full" />
            </Link>
            <Link
              to="/quote"
              className="ml-1 px-6 py-2 rounded text-sm font-medium bg-[#0F4C81] text-white hover:bg-[#0b3961] hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97] transition-all duration-200 ease-out"
            >
              Request Quote
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium relative group transition-colors duration-200 ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
              <span className="absolute -bottom-0.5 left-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out w-0 group-hover:w-full" />
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 hover:rotate-90 active:scale-90 transition-all duration-300 ease-out"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm font-medium transition ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm font-medium transition ${
                isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm font-medium transition ${
                isActive('/products') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Products
            </Link>
            <Link
              to="/resources"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm font-medium transition ${
                isActive('/resources') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Resources
            </Link>
            <Link
              to="/quote"
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm font-medium text-white bg-[#0F4C81] px-4 py-2 rounded text-center hover:bg-[#0b3961] active:scale-[0.97] transition-all duration-200"
            >
              Request Quote
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm font-medium transition ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
