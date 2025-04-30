import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Globe, Leaf } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image
          src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg"
          alt="Star Hi Herbs Laboratory"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#214842]/70"></div>
        <div className="relative z-10 container-custom text-white">
          <h1 className="mb-4">About Star Hi Herbs</h1>
          <p className="text-xl max-w-2xl text-white/90">
            Leading the way in herbal extract innovation and sustainable manufacturing since 1995.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Our Purpose</h6>
              <h2 className="text-[#214842] mb-6">Mission & Vision</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#214842] mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To provide the highest quality herbal extracts and nutraceutical ingredients 
                    while promoting sustainable practices and supporting global health and wellness.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#214842] mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the world's most trusted partner in natural ingredient solutions, 
                    leading innovation in herbal science while preserving traditional wisdom.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg"
                alt="Star Hi Herbs Laboratory"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="bg-[#214842] text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-white/80">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/80">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Our Values</h6>
            <h2 className="text-[#214842] mb-4">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Quality Excellence',
                description: 'Unwavering commitment to the highest quality standards in every product.',
              },
              {
                icon: Users,
                title: 'Customer Focus',
                description: 'Building lasting partnerships through exceptional service and support.',
              },
              {
                icon: Globe,
                title: 'Global Responsibility',
                description: 'Operating ethically and sustainably across our global operations.',
              },
              {
                icon: Leaf,
                title: 'Innovation',
                description: 'Continuously advancing herbal science through research and development.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#214842]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-[#214842]" />
                </div>
                <h3 className="text-lg font-semibold text-[#214842] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Our Team</h6>
            <h2 className="text-[#214842] mb-4">Leadership</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Thomas Lee',
                position: 'Founder & Chief Scientific Officer',
                image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg',
                bio: '25+ years experience in phytochemistry and natural products research.',
              },
              {
                name: 'Sarah Chen',
                position: 'Chief Executive Officer',
                image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg',
                bio: 'Former VP at leading pharmaceutical company, MBA from Harvard Business School.',
              },
              {
                name: 'Dr. Michael Rodriguez',
                position: 'Head of R&D',
                image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg',
                bio: 'PhD in Medicinal Chemistry, leading our innovation initiatives.',
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#214842] mb-1">{member.name}</h3>
                  <div className="text-[#258F67] font-medium mb-2">{member.position}</div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Our Responsibility</h6>
              <h2 className="text-[#214842] mb-6">Corporate Social Responsibility</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At Star Hi Herbs, we believe in giving back to the communities where we operate. 
                  Our CSR initiatives focus on sustainable farming education, environmental conservation, 
                  and supporting local healthcare programs.
                </p>
                <p>
                  Through our "Green Future" program, we've helped over 1,000 farmers adopt organic 
                  farming practices and provided educational scholarships to their children.
                </p>
              </div>
              <Button asChild className="mt-6 cta-secondary">
                <Link href="/sustainability" className="flex items-center">
                  Learn More About Our Initiatives
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg"
                alt="Sustainable Farming"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}