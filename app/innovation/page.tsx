import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, FlaskRound as Flask, Microscope, Lightbulb, Award } from 'lucide-react';

export default function InnovationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image
          src="https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg"
          alt="Research and Development"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#214842]/70"></div>
        <div className="relative z-10 container-custom text-white">
          <h1 className="mb-4">Innovation & Research</h1>
          <p className="text-xl max-w-2xl text-white/90">
            Advancing herbal science through cutting-edge research and development.
          </p>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Our Focus</h6>
            <h2 className="text-[#214842] mb-4">Research Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our research initiatives focus on discovering new applications for traditional herbs 
              and developing innovative extraction technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Flask,
                title: 'Novel Extraction Methods',
                description: 'Developing eco-friendly extraction processes that preserve bioactive compounds.',
              },
              {
                icon: Microscope,
                title: 'Bioavailability Studies',
                description: 'Enhancing the absorption and efficacy of herbal compounds.',
              },
              {
                icon: Lightbulb,
                title: 'New Applications',
                description: 'Exploring novel applications for traditional herbal ingredients.',
              },
            ].map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#214842]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <area.icon className="h-7 w-7 text-[#214842]" />
                </div>
                <h3 className="text-xl font-semibold text-[#214842] mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Research */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Latest Work</h6>
            <h2 className="text-[#214842] mb-4">Recent Research</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Enhanced Curcumin Bioavailability',
                category: 'Clinical Study',
                image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg',
                description: 'Novel formulation showing 5x better absorption compared to standard extracts.',
              },
              {
                title: 'Green Extraction Technology',
                category: 'Technology',
                image: 'https://images.pexels.com/photos/3825526/pexels-photo-3825526.jpeg',
                description: 'Sustainable extraction method reducing solvent usage by 60%.',
              },
              {
                title: 'Standardization Methods',
                category: 'Methodology',
                image: 'https://images.pexels.com/photos/3825528/pexels-photo-3825528.jpeg',
                description: 'New analytical methods for complex herbal matrices.',
              },
            ].map((research, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md group">
                <div className="relative h-48">
                  <Image
                    src={research.image}
                    alt={research.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#214842] text-white px-3 py-1 text-sm rounded-full">
                    {research.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#214842] mb-3">{research.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{research.description}</p>
                  <Link 
                    href="#" 
                    className="inline-flex items-center text-[#258F67] font-medium hover:text-[#214842] transition-colors"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Facilities */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Our Labs</h6>
              <h2 className="text-[#214842] mb-6">State-of-the-Art Facilities</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our research facilities are equipped with the latest analytical instruments and 
                  staffed by experienced scientists. Key features include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#EFC368] rounded-full mr-2"></span>
                    HPLC-MS/MS for compound identification
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#EFC368] rounded-full mr-2"></span>
                    Pilot-scale extraction units
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#EFC368] rounded-full mr-2"></span>
                    Stability testing chambers
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#EFC368] rounded-full mr-2"></span>
                    Microbiology laboratory
                  </li>
                </ul>
              </div>
              <Button asChild className="mt-6 cta-secondary">
                <Link href="/contact" className="flex items-center">
                  Schedule a Lab Tour
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg"
                alt="Research Laboratory"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Partners */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Collaboration</h6>
            <h2 className="text-[#214842] mb-4">Research Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with leading universities and research institutions worldwide to advance 
              herbal science and develop innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((partner) => (
              <div 
                key={partner} 
                className="bg-white rounded-lg p-6 flex items-center justify-center shadow-md"
              >
                <div className="w-32 h-32 relative">
                  <Image
                    src={`https://images.pexels.com/photos/38910${partner}/pexels-photo-38910${partner}.jpeg`}
                    alt={`Research Partner ${partner}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents & Publications */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Recognition</h6>
            <h2 className="text-[#214842] mb-4">Patents & Publications</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-[#214842]/10 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-[#214842]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#214842] mb-2">Patents</h3>
                  <ul className="space-y-4">
                    <li>
                      <div className="font-medium text-[#214842]">
                        Novel Curcumin Formulation (US Patent 12345678)
                      </div>
                      <p className="text-sm text-gray-600">
                        Enhanced bioavailability formulation using natural carriers
                      </p>
                    </li>
                    <li>
                      <div className="font-medium text-[#214842]">
                        Green Extraction Process (EU Patent 87654321)
                      </div>
                      <p className="text-sm text-gray-600">
                        Eco-friendly extraction method for medicinal herbs
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-[#214842]/10 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-[#214842]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#214842] mb-2">Publications</h3>
                  <ul className="space-y-4">
                    <li>
                      <div className="font-medium text-[#214842]">
                        Journal of Natural Products (2024)
                      </div>
                      <p className="text-sm text-gray-600">
                        Standardization of herbal extracts using novel analytical methods
                      </p>
                    </li>
                    <li>
                      <div className="font-medium text-[#214842]">
                        Phytochemistry (2023)
                      </div>
                      <p className="text-sm text-gray-600">
                        Identification of new bioactive compounds in traditional herbs
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}