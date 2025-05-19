import Image from '@/components/ui/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { productCategories, getFeaturedProducts } from '@/src/data';
import ProductCard from '@/components/products/ProductCard';
import CategoryCard from '@/components/products/CategoryCard';
import ProductsPageClient from '@/components/products/ProductsPageClient';

// Get featured products
const featuredProducts = getFeaturedProducts(3);

// Define metadata for the products page
export const metadata: Metadata = {
  title: 'Products | Star Hi Herbs',
  description: 'Explore our comprehensive range of high-quality herbal extracts and nutraceutical ingredients for health and wellness products.',
  keywords: 'herbal extracts, organic extracts, nutraceutical ingredients, standardized extracts, probiotics',
  openGraph: {
    title: 'Products | Star Hi Herbs',
    description: 'Explore our comprehensive range of high-quality herbal extracts and nutraceutical ingredients for health and wellness products.',
    images: [
      {
        url: '/images/hero/standardized-herbal-extracts.jpeg',
        width: 1200,
        height: 630,
        alt: 'Star Hi Herbs Products',
      },
    ],
    type: 'website',
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image src="/images/hero/standardized-herbal-extracts.jpeg"
          alt="Our Products"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#214842]/30"></div>
        <div className="relative z-10 container-custom text-white">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-shadow-sm">Our Products</h1>
            <p className="text-xl text-white text-shadow-sm">
              Discover our comprehensive range of high-quality herbal extracts and nutraceutical ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container-custom">
          <ProductsPageClient
            categories={productCategories}
            featuredProducts={featuredProducts}
          />
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Browse By Category</h6>
            <h2 className="text-[#214842] mb-4">Product Categories</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Featured Products</h6>
            <h2 className="text-[#214842] mb-4">Popular Ingredients</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Request Custom Solution */}
      <section className="section-padding bg-[#214842] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Our team of experts can help develop custom formulations tailored to your specific needs.
          </p>
          <Button asChild className="cta-primary">
            <Link href="/contact" className="flex items-center">
              Request Custom Solution
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}