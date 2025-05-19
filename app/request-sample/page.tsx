import { Metadata } from 'next';
import RequestSampleForm from '@/components/forms/RequestSampleForm';
import Image from '@/components/ui/image';

export const metadata: Metadata = {
  title: 'Request a Sample | Star Hi Herbs',
  description: 'Request product samples of our herbal extracts, probiotics, and nutraceutical ingredients for evaluation.',
  keywords: 'sample request, product samples, herbal extracts, probiotics, nutraceutical ingredients',
  openGraph: {
    title: 'Request a Sample | Star Hi Herbs',
    description: 'Request product samples of our herbal extracts, probiotics, and nutraceutical ingredients for evaluation.',
    images: [
      {
        url: '/images/hero/standardized-herbal-extracts.jpeg',
        width: 1200,
        height: 630,
        alt: 'Star Hi Herbs - Request a Sample',
      },
    ],
    type: 'website',
  },
};

export default function RequestSamplePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image src="/images/hero/standardized-herbal-extracts.jpeg"
          alt="Request a Sample"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#214842]/30"></div>
        <div className="relative z-10 container-custom text-white">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-shadow-sm">Request a Sample</h1>
            <p className="text-xl text-white text-shadow-sm">
              Evaluate our high-quality herbal extracts and nutraceutical ingredients before placing a bulk order.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold text-[#214842] mb-4">Request Product Samples</h2>
              <p className="text-gray-600">
                Please fill out the form below to request samples of our products. Our team will review your
                request and contact you to arrange delivery of the samples.
              </p>
            </div>

            <RequestSampleForm />
          </div>
        </div>
      </section>

      {/* Sample Policy Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-[#214842] mb-4">Our Sample Policy</h2>
              <p className="text-gray-600">
                We provide samples to qualified businesses to help you evaluate our products before placing a bulk order.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-[#214842] mb-4">What We Provide</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#258F67] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Standard sample size of 50-100g for most products</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#258F67] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Certificate of Analysis (COA) with each sample</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#258F67] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Technical data sheets and product specifications</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#258F67] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Technical support during your evaluation process</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-[#214842] mb-4">Sample Request Process</h3>
                <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                  <li>Submit your sample request using the form on this page</li>
                  <li>Our team will review your request within 1-2 business days</li>
                  <li>We'll contact you to confirm details and shipping information</li>
                  <li>Samples are typically shipped within 3-5 business days after confirmation</li>
                  <li>Our technical team will follow up to assist with your evaluation</li>
                </ol>
                <p className="mt-4 text-sm text-gray-500">
                  Note: Sample requests are subject to approval and availability. We reserve the right to limit sample quantities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
