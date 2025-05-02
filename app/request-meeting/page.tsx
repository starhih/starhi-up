import { Metadata } from 'next';
import RequestMeetingForm from '@/components/forms/RequestMeetingForm';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Request a Meeting | Star Hi Herbs',
  description: 'Schedule a meeting with our team at upcoming industry events to discuss your herbal extract requirements.',
  keywords: 'meeting request, industry events, trade shows, herbal extracts, nutraceutical ingredients',
  openGraph: {
    title: 'Request a Meeting | Star Hi Herbs',
    description: 'Schedule a meeting with our team at upcoming industry events to discuss your herbal extract requirements.',
    images: [
      {
        url: '/images/events/event-meeting.jpg',
        width: 1200,
        height: 630,
        alt: 'Star Hi Herbs - Request a Meeting',
      },
    ],
    type: 'website',
  },
};

export default function RequestMeetingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[250px] flex items-center">
        <Image
          src="/images/events/event-meeting.jpg"
          alt="Request a Meeting"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-[#214842]/70"></div>
        <div className="relative z-10 container-custom text-white">
          <h1 className="mb-4">Request a Meeting</h1>
          <p className="text-xl max-w-2xl text-white/90">
            Connect with our team at industry events to discuss your specific requirements and explore our herbal extract solutions.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold text-[#214842] mb-4">Schedule a Meeting at an Event</h2>
              <p className="text-gray-600">
                Please fill out the form below to request a meeting with our team at an upcoming industry event.
                We'll contact you to confirm the details and schedule a specific time.
              </p>
            </div>
            
            <RequestMeetingForm />
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#214842] mb-6">Why Meet With Us</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#214842]/10 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#214842]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#214842]">Product Expertise</h3>
                    <p className="text-gray-600">Discuss your specific requirements with our technical experts who can recommend the right herbal extracts for your application.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#214842]/10 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#214842]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#214842]">Custom Solutions</h3>
                    <p className="text-gray-600">Learn about our custom extraction capabilities and how we can develop tailored ingredients for your specific needs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#214842]/10 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#214842]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#214842]">Quality Assurance</h3>
                    <p className="text-gray-600">Discover our rigorous quality control processes and how we ensure consistent, high-quality extracts batch after batch.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#214842]/10 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#214842]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#214842]">Partnership Opportunities</h3>
                    <p className="text-gray-600">Explore potential collaboration opportunities, from contract manufacturing to exclusive distribution arrangements.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-[#214842] mb-4">Meeting Request Process</h3>
                <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                  <li>Submit your meeting request using the form on this page</li>
                  <li>Our team will review your request within 1-2 business days</li>
                  <li>We'll contact you to confirm availability and schedule a specific time</li>
                  <li>You'll receive a calendar invitation with meeting details</li>
                  <li>Meet with our team at the designated booth or meeting area</li>
                </ol>
                <p className="mt-4 text-sm text-gray-500">
                  Note: Meeting requests are subject to availability. We recommend submitting your request at least two weeks before the event to ensure we can accommodate your preferred time.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
                <h3 className="text-xl font-semibold text-[#214842] mb-4">Can't Attend an Event?</h3>
                <p className="text-gray-600 mb-4">
                  If you're unable to meet us at an industry event, we're still happy to connect with you. You can:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#258F67] rounded-full mr-2"></span>
                    <span>Request a virtual meeting</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#258F67] rounded-full mr-2"></span>
                    <span>Contact our sales team directly</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#258F67] rounded-full mr-2"></span>
                    <span>Request product samples</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
