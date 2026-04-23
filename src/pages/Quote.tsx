import { useState } from 'react';
import { Upload, FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabase';

export default function Quote() {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    phone: '',
    packaging_type: '',
    quantity: '',
    message: ''
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const uploadedFileUrls: string[] = [];

      if (files.length > 0) {
        for (const file of files) {
          const fileExt = file.name.split('.').pop();
          const fileName = `${Date.now()}-${Math.random()
            .toString(36)
            .substring(7)}.${fileExt}`;
          const filePath = `quote-attachments/${fileName}`;

          const { error: uploadError } = await supabase.storage
            .from('quote-files')
            .upload(filePath, file);

          if (uploadError) {
            console.error('Error uploading file:', uploadError);
            throw uploadError;
          }

          const {
            data: { publicUrl }
          } = supabase.storage.from('quote-files').getPublicUrl(filePath);

          uploadedFileUrls.push(publicUrl);
        }
      }

      const { error } = await supabase.from('quote_requests').insert([
        {
          ...formData,
          attachment_urls: uploadedFileUrls.length > 0 ? uploadedFileUrls : null
        }
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        company_name: '',
        contact_name: '',
        email: '',
        phone: '',
        packaging_type: '',
        quantity: '',
        message: ''
      });
      setFiles([]);
    } catch (error) {
      console.error('Error submitting quote:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="pt-20 flex-1">
        {/* Form */}
        <section className="py-10 bg-white">
          <div className="max-w-[1176px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-5">
              <h1 className="text-3xl md:text-4xl font-semibold text-[#2A2A2A] mb-2">
                Request a Quote
              </h1>
              <p className="text-sm text-gray-600">
                Tell us about your packaging needs and our team will provide a detailed quote
                within 24 hours.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-md border border-[#BFD0E2] p-8 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    name="contact_name"
                    value={formData.contact_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition"
                    placeholder="email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Packaging Type *
                  </label>
                  <select
                    name="packaging_type"
                    value={formData.packaging_type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition"
                  >
                    <option value="">Select type</option>
                    <option value="straws">Straws (plastic / paper)</option>
                    <option value="cups">Cold drink cups</option>
                    <option value="boxes">Buckets / boxes</option>
                    <option value="bags">Plastic bags</option>
                    <option value="custom">Custom solution</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Estimated Quantity *
                  </label>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition"
                  >
                    <option value="">Select quantity</option>
                    <option value="100-500">100–500 units</option>
                    <option value="500-1000">500–1,000 units</option>
                    <option value="1000-5000">1,000–5,000 units</option>
                    <option value="5000-50000">5,000–50,000 units</option>
                    <option value="50000+">50,000+ units</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition"
                  placeholder="Please describe your packaging requirements, estimated quantities, timeline, and any certifications you need."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Attach Files (Optional)
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  Upload specifications, drawings, or reference files (PDF, Excel, Word,
                  images, etc.).
                </p>
                <div className="border-2 border-dashed border-gray-300 rounded p-6 text-center hover:border-[#0F4C81] transition">
                  <input
                    type="file"
                    id="quote-file-upload"
                    multiple
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.jpg,.jpeg,.png,.gif,.txt"
                    className="hidden"
                  />
                  <label
                    htmlFor="quote-file-upload"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <Upload className="h-10 w-10 text-gray-400 mb-3" />
                    <span className="text-sm font-semibold text-gray-700 mb-1">
                      Click to upload files
                    </span>
                    <span className="text-xs text-gray-500">
                      PDF, Excel, Word, Images (Max 10MB each)
                    </span>
                  </label>
                </div>

                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((file, index) => (
                      <div
                        key={file.name + index.toString()}
                        className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <FileText className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {file.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {formatFileSize(file.size)}
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="ml-3 text-gray-400 hover:text-red-600 transition flex-shrink-0 text-xs font-semibold"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {submitStatus === 'success' && (
                <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg text-sm">
                  Thank you! Your quote request has been submitted. Our team will reach
                  out shortly.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                  Something went wrong while submitting your request. Please try again.
                </div>
              )}

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-[#0F4C81] text-white rounded font-semibold hover:bg-[#0b3961] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </button>
                <p className="text-center text-xs text-gray-500 mt-3">
                  Our team will review your request and respond within 24 business hours.
                </p>
              </div>
            </form>

            <div className="mt-6 border border-gray-200 rounded-md p-6 bg-[#fafbfc]">
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-2">Need Immediate Assistance?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our sales team is available to discuss your packaging needs in detail.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="tel:+16305472401"
                  className="inline-flex items-center justify-center h-11 rounded bg-[#0F4C81] text-white text-sm font-semibold hover:bg-[#0b3961] transition"
                >
                  Call: +1 (630) 547-2401
                </a>
                <a
                  href="mailto:info@shanzopack.com"
                  className="inline-flex items-center justify-center h-11 rounded border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition"
                >
                  Email Sales Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


