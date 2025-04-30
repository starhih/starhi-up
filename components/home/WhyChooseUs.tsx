import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  Award,
  FlaskConical,
  Leaf,
  Globe,
  Microscope,
  Settings
} from 'lucide-react';

// Feature data
const features = [
  {
    id: 1,
    title: 'Certified Quality',
    description: 'ISO, FSSC, HACCP, and GMP certified production processes',
    icon: Award,
    position: 'top-left',
  },
  {
    id: 2,
    title: 'Research-Backed',
    description: 'Products supported by scientific research and clinical studies',
    icon: FlaskConical,
    position: 'top-right',
  },
  {
    id: 3,
    title: 'Global Compliance',
    description: 'Meeting regulatory standards in 30+ countries worldwide',
    icon: Globe,
    position: 'middle-left',
  },
  {
    id: 4,
    title: 'Sustainable Farming',
    description: 'Ethical sourcing with regenerative agricultural practices',
    icon: Leaf,
    position: 'middle-right',
  },
  {
    id: 5,
    title: 'Advanced R&D',
    description: 'Continuous innovation through our cutting-edge labs',
    icon: Microscope,
    position: 'bottom-left',
  },
  {
    id: 6,
    title: 'Customized Solutions',
    description: 'Tailored formulations to meet specific client needs',
    icon: Settings,
    position: 'bottom-right',
  },
];

// Position classes mapping
const positionClasses = {
  'top-left': 'lg:col-start-1 lg:row-start-1',
  'top-right': 'lg:col-start-3 lg:row-start-1',
  'middle-left': 'lg:col-start-1 lg:row-start-2',
  'middle-right': 'lg:col-start-3 lg:row-start-2',
  'bottom-left': 'lg:col-start-1 lg:row-start-3',
  'bottom-right': 'lg:col-start-3 lg:row-start-3',
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Our Advantage</h6>
          <h2 className="text-[#214842] mb-4">Why Choose Star Hi Herbs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what sets us apart in the global herbal extracts industry and why leading brands choose us as their trusted partner.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 relative">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={cn(
                "bg-white rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition-shadow duration-300 z-10",
                positionClasses[feature.position as keyof typeof positionClasses]
              )}
            >
              <div className="bg-[#214842]/10 p-3 rounded-lg mb-4">
                <feature.icon className="h-6 w-6 text-[#214842]" />
              </div>
              <h3 className="text-lg font-semibold text-[#214842] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}

          {/* Center image */}
          <div className="hidden lg:block lg:col-start-2 lg:row-span-3 lg:row-start-1 z-0">
            <div className="relative h-full w-full min-h-[400px] flex items-center justify-center">
              <div className="absolute w-[120%] h-[120%] bg-[#EFC368]/10 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hassan-plant.jpg"
                  alt="Star Hi Herbs Manufacturing Facility in Hassan"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}