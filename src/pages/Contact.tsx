import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="pt-20 flex-1">
        <section className="relative py-10 bg-[#0F4C81] border-b border-[#0d4372]">
          <div className="max-w-[1080px] mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-3">
              Contact <span className="text-white">Us</span>
            </h1>
            <p className="text-sm md:text-base text-blue-100 max-w-3xl mx-auto">
              Get in touch with us for custom packaging solutions and inquiries
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-semibold text-[#2A2A2A] mb-5">
                  Let&apos;s <span className="text-[#0F4C81]">Connect</span>
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-8">
                  Have questions about our products or need a custom packaging solution? Our team is here to help.
                  Fill out the form and we&apos;ll get back to you as soon as possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#0F4C81]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-700">info@shanzopack.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#0F4C81]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-700">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#0F4C81]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-700">
                        123 Packaging Boulevard<br />
                        Business District<br />
                        City, State 12345
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-[#F4F8FC] border border-[#dce7f3] rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F9FC] border border-gray-200 rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent transition"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent transition resize-none"
                      placeholder="Tell us about your packaging needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-[#0F4C81] text-white rounded-lg font-semibold hover:bg-[#0b3961] hover:shadow-lg hover:-translate-y-1 active:scale-[0.97] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-center gap-2 group"
                  >
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
