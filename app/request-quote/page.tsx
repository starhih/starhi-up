import { Metadata } from 'next';
import RequestQuoteForm from '@/components/forms/RequestQuoteForm';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Request a Quote | Star Hi Herbs',
  description: 'Request pricing information for our herbal extracts, probiotics, and nutraceutical ingredients.',
  keywords: 'quote request, pricing, herbal extracts, probiotics, nutraceutical ingredients',
  openGraph: {
    title: 'Request a Quote | Star Hi Herbs',
    description: 'Request pricing information for our herbal extracts, probiotics, and nutraceutical ingredients.',
    images: [
      {
        url: 'https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg',
        width: 1200,
        height: 630,
        alt: 'Star Hi Herbs - Request a Quote',
      },
    ],
    type: 'website',
  },
};

export default function RequestQuotePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[250px] flex items-center">
        <Image
          src="https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg"
          alt="Request a Quote"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-[#214842]/70"></div>
        <div className="relative z-10 container-custom text-white">
          <h1 className="mb-4">Request a Quote</h1>
          <p className="text-xl max-w-2xl text-white/90">
            Get pricing information for our high-quality herbal extracts and nutraceutical ingredients.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold text-[#214842] mb-4">Request Pricing Information</h2>
              <p className="text-gray-600">
                Please fill out the form below with your requirements, and our team will provide you with a 
                customized quote as soon as possible.
              </p>
            </div>
            
            <RequestQuoteForm />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#214842] mb-4">Why Choose Star Hi Herbs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We pride ourselves on delivering premium quality products with exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#214842]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#214842]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#214842] mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                All our products undergo rigorous testing to ensure they meet the highest quality standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#214842]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#214842]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#214842] mb-2">Fast Response</h3>
              <p className="text-gray-600">
                Our dedicated team ensures quick turnaround times for quotes and order processing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#214842]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#214842]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#214842] mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Our technical team provides expert guidance to help you select the right products for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
