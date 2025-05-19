import Image from '@/components/ui/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getProductOfTheMonth, productOfTheMonthConfig } from '@/src/data';

export default function FeaturedProduct() {
  // Get the product of the month from central data
  const product = getProductOfTheMonth();

  // If no product is found, don't render the section
  if (!product) return null;

  // Extract the tagline from the config
  const { tagline } = productOfTheMonthConfig;

  // Extract key product details
  const { name, standardization, shortDescription, benefits, slug, image } = product;

  // Get the first 4 benefits or create placeholder benefits if none exist
  const displayBenefits = benefits?.slice(0, 4) || [
    'High Quality',
    'Standardized Extract',
    'Rigorously Tested',
    'Premium Ingredients'
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Featured Product</h6>
          <h2 className="text-[#214842] mb-4">Product of the Month</h2>
          <div className="w-20 h-1 bg-[#EFC368] mx-auto"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative h-72 md:h-auto overflow-hidden">
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
              <div className="absolute top-4 right-4 bg-[#EFC368] text-[#214842] px-3 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
            </div>

            {/* Product Details */}
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-[#214842] mb-4">
                {name}
              </h3>
              <div className="flex items-center mb-4">
                <div className="px-3 py-1 bg-[#258F67]/10 text-[#258F67] rounded-full text-sm font-medium mr-2">{standardization}</div>
                <div className="px-3 py-1 bg-[#214842]/10 text-[#214842] rounded-full text-sm font-medium">{tagline}</div>
              </div>
              <p className="text-gray-700 mb-6">
                {shortDescription}
              </p>
              <ul className="mb-6 grid grid-cols-2 gap-2">
                {displayBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-[#EFC368] rounded-full mr-2"></span>
                    {typeof benefit === 'string' && benefit.includes(':')
                      ? benefit.split(':')[0]
                      : benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button asChild className="cta-secondary group">
                  <Link href={`/products/${slug}`} className="flex items-center">
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}