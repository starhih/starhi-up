import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getProductCategoryBySlug, getProductsByCategorySlug, productCategories, products } from '@/src/data';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import ProbioticsTable from '@/components/products/ProbioticsTable';
import StorgProductFamily from '@/components/products/StorgProductFamily';
import StorgIndicationsChart from '@/components/products/StorgIndicationsChart';
import ProductListingClient from '@/components/products/ProductListingClient';

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
          url: category.heroImage || category.image,
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
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image
          src={category.heroImage || category.image}
          alt={category.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#214842]/30"></div>
        <div className="relative z-10 container-custom text-white">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-shadow-sm">{category.name}</h1>
            <p className="text-xl text-white text-shadow-sm">
              {category.description}
            </p>
          </div>
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
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {params.category === 'probiotics' && (
            <ProbioticsTable />
          )}

          {params.category === 'vitamins-minerals' ? (
            <>
              {/* Storg Product Family */}
              {(() => {
                const mainProduct = products.find(p => p.id === 'storg-main');
                if (!mainProduct || !mainProduct.childProducts) return null;

                const childProducts = products.filter(p =>
                  mainProduct.childProducts?.includes(p.id as string)
                );

                return (
                  <>
                    <StorgProductFamily
                      mainProduct={mainProduct}
                      childProducts={childProducts}
                    />

                    {/* Storg Indications Chart */}
                    <div className="mt-16 w-full">
                      <StorgIndicationsChart products={childProducts} />
                    </div>
                  </>
                );
              })()}
            </>
          ) : (
            <ProductListingClient
              category={category}
              initialProducts={categoryProducts}
            />
          )}
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
