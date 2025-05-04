import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { getProductCategoryBySlug, getProductsByCategorySlug, productCategories } from '@/src/data';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import ProductCard from '@/components/products/ProductCard';

// Generate static params for all categories
export function generateStaticParams() {
  return productCategories.map((category) => ({
    category: category.slug,
  }));
}

// Generate metadata for each category page
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = getProductCategoryBySlug(params.category);

  if (!category) {
    return {
      title: 'Category Not Found | Star Hi Herbs',
      description: 'The requested product category could not be found.',
    };
  }

  return {
    title: `${category.name} | Star Hi Herbs`,
    description: category.description || `Explore our range of high-quality ${category.name.toLowerCase()} products by Star Hi Herbs.`,
    keywords: [category.name, 'herbal extracts', 'nutraceutical ingredients', 'Star Hi Herbs'].join(', '),
    openGraph: {
      title: category.name,
      description: category.description || `Explore our range of high-quality ${category.name.toLowerCase()} products by Star Hi Herbs.`,
      images: [
        {
          url: category.image,
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
      type: 'website',
    },
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = getProductCategoryBySlug(params.category);
  const categoryProducts = getProductsByCategorySlug(params.category);

  if (!category) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F/PQAJpgOUCc6crwAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0 bg-[#214842]/70"></div>
        <div className="relative z-10 container-custom text-white">
          <h1 className="mb-4">{category.name}</h1>
          <p className="text-xl max-w-2xl text-white/90">
            {category.description}
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/products' },
              { label: category.name, href: `/collections/${category.slug}`, isCurrent: true }
            ]}
            showHomeLink={true}
          />
          <div className="flex flex-col md:flex-row gap-4 items-center mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="search"
                placeholder={`Search ${category.name.toLowerCase()}...`}
                className="pl-10 w-full"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={20} />
              Filter Products
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Request Quote CTA */}
      <section className="section-padding bg-[#214842] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Interested in Our Products?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Get in touch with our team for pricing, samples, and technical documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="cta-primary">
              <Link href="/request-quote">Request Quote</Link>
            </Button>
            <Button asChild className="bg-white text-[#214842] hover:bg-[#EFC368]">
              <Link href="/request-sample">Request Sample</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
