import Image from '@/components/ui/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Download, Award, FlaskRound as Flask, Leaf } from 'lucide-react';
import { getProductBySlug, products, getRelatedProducts } from '@/src/data';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import ProductCard from '@/components/products/ProductCard';
import SupplierInfo from '@/components/products/SupplierInfo';
import ProductionDetails from '@/components/products/ProductionDetails';
import Packaging from '@/components/products/Packaging';
import Factory from '@/components/products/Factory';
import CertificationsSection from '@/components/products/CertificationsSection';
import Events from '@/components/products/Events';
import Research from '@/components/products/Research';
import ProductFAQs from '@/components/products/ProductFAQs';
import StorgChildProducts from '@/components/products/StorgChildProducts';
import StorgIndications from '@/components/products/StorgIndications';

// Generate static params for all products
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate metadata for each product page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Product Not Found | Star Hi Herbs',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: `${product.name} | ${product.categoryName} | Star Hi Herbs`,
    description: product.description || `${product.name} - ${product.standardization} - High-quality herbal extract by Star Hi Herbs.`,
    keywords: [product.name, product.categoryName, product.standardization, 'herbal extract', 'nutraceutical', ...product.certifications].join(', '),
    openGraph: {
      title: `${product.name} | ${product.categoryName}`,
      description: product.description || `${product.name} - ${product.standardization} - High-quality herbal extract by Star Hi Herbs.`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: 'website',
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Redirect to specialized templates based on product type
  if (product.productType === 'branded') {
    return (
      <div className="container-custom py-12 text-center">
        <p className="text-lg mb-4">Redirecting to branded ingredient page...</p>
        <meta httpEquiv="refresh" content={`0;url=/branded-ingredients/${product.slug}`} />
      </div>
    );
  }

  if (product.productType === 'vitamin-mineral') {
    return (
      <div className="container-custom py-12 text-center">
        <p className="text-lg mb-4">Redirecting to vitamins & minerals page...</p>
        <meta httpEquiv="refresh" content={`0;url=/vitamins-minerals/${product.slug}`} />
      </div>
    );
  }

  return (
    <>
      {/* Product Hero */}
      <section className="pt-8 lg:pt-12">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/products' },
              { label: product.categoryName || 'Category', href: `/collections/${product.categorySlug || ''}` },
              { label: product.name, href: `/products/${product.slug}`, isCurrent: true }
            ]}
            showHomeLink={true}
          />
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                  quality={85}
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.gallery?.map((image, index) => (
                  <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${product.name} gallery image ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 33vw, 16vw"
                      loading="lazy"
                      className="object-cover"
                      quality={80}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <Link href={`/collections/${product.categorySlug}`} className="text-[#258F67] mb-2 hover:underline inline-block">
                  {product.categoryName}
                </Link>
                <h1 className="text-[#214842] mb-2">{product.name}</h1>

                {/* Latin Name and Plant Part */}
                {(product.latinName || product.plantPart) && (
                  <div className="mb-4">
                    {product.latinName && (
                      <p className="text-gray-700 italic">
                        {product.latinName}
                        {product.plantPart && ` (${product.plantPart})`}
                      </p>
                    )}
                    {!product.latinName && product.plantPart && (
                      <p className="text-gray-700">
                        Plant Part: {product.plantPart}
                      </p>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#214842]/10 text-[#214842] rounded-full">
                    {product.standardization}
                  </span>
                  {product.certifications.map((cert) => (
                    <span key={cert} className="px-3 py-1 bg-[#258F67]/10 text-[#258F67] rounded-full">
                      {cert}
                    </span>
                  ))}
                </div>

                {/* Short Description (if available) */}
                {product.shortDescription && (
                  <p className="text-[#258F67] font-medium mb-3">{product.shortDescription}</p>
                )}

                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1 cta-primary">
                  <Link href="/request-quote" className="flex items-center justify-center">
                    Request Quote
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link href="/request-sample" className="flex items-center justify-center">
                    Request Sample
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storg Indications Section (for Storg products) */}
      {product.categoryId === 'vitamins-minerals' && product.indications && product.indications.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Health Support</h6>
              <h2 className="text-[#214842] mb-4">Health Indications</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {product.name} is specifically formulated to support these key health areas.
              </p>
            </div>
            <StorgIndications product={product} />
          </div>
        </section>
      )}

      {/* Product Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Features */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#214842]/10 p-2 rounded-lg">
                  <Award className="h-6 w-6 text-[#214842]" />
                </div>
                <h3 className="text-xl font-semibold text-[#214842]">Key Features</h3>
              </div>
              <ul className="space-y-2">
                {product.benefits?.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#EFC368] rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#214842]/10 p-2 rounded-lg">
                  <Flask className="h-6 w-6 text-[#214842]" />
                </div>
                <h3 className="text-xl font-semibold text-[#214842]">Applications</h3>
              </div>
              <ul className="space-y-2">
                {product.applications?.map((application, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#EFC368] rounded-full mr-2"></span>
                    {application}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#214842]/10 p-2 rounded-lg">
                  <Leaf className="h-6 w-6 text-[#214842]" />
                </div>
                <h3 className="text-xl font-semibold text-[#214842]">Specifications</h3>
              </div>
              <div className="space-y-3">
                {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-sm font-medium text-gray-500 capitalize">
                      {key.replace(/[_]/g, ' ')}
                    </div>
                    <div className="text-gray-600">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Child Products Section (if this is a parent product) */}
      {product.isParentProduct && product.childProducts && product.childProducts.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <StorgChildProducts
              childProducts={products.filter(p => product.childProducts?.includes(p.id as string))}
            />
          </div>
        </section>
      )}

      {/* Parent Product Section (if this is a child product) */}
      {product.parentProductId && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Product Family</h6>
              <h2 className="text-[#214842] mb-4">Part of Storg® Product Line</h2>
            </div>

            {(() => {
              const parentProduct = products.find(p => p.id === product.parentProductId);
              if (!parentProduct) return null;

              return (
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-[300px] md:h-full">
                      <Image
                        src={parentProduct.image}
                        alt={parentProduct.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold text-[#214842] mb-4">{parentProduct.name}</h3>
                      <p className="text-gray-700 mb-6">{parentProduct.shortDescription}</p>
                      <Button asChild className="bg-[#214842] hover:bg-[#214842]/90">
                        <Link href={`/products/${parentProduct.slug}`} className="flex items-center gap-2">
                          View Product Family <ArrowRight size={16} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
      )}

      {/* Research Section (if available) */}
      {product.research && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <Research research={product.research} />
          </div>
        </section>
      )}

      {/* Production Process Section (if available) */}
      {product.productionDetails && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Our Process</h6>
              <h2 className="text-[#214842] mb-4">How We Make It</h2>
            </div>
            <ProductionDetails
              description={product.productionDetails.description}
              image={product.productionDetails.image}
            />
          </div>
        </section>
      )}

      {/* Packaging Section (if available) */}
      {product.packaging && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <Packaging
              description={product.packaging.description}
              image={product.packaging.image}
            />
          </div>
        </section>
      )}

      {/* Factory Section (if available) */}
      {product.factory && (
        <section className="section-padding">
          <div className="container-custom">
            <Factory
              description={product.factory.description}
              image={product.factory.image}
            />
          </div>
        </section>
      )}

      {/* Certifications Section (if available) */}
      {product.certificationsSection && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <CertificationsSection
              description={product.certificationsSection.description}
              image={product.certificationsSection.image}
              certifications={product.certifications}
            />
          </div>
        </section>
      )}

      {/* Events Section (if available) */}
      {product.events && (
        <section className="section-padding">
          <div className="container-custom">
            <Events
              description={product.events.description}
              image={product.events.image}
            />
          </div>
        </section>
      )}

      {/* Supplier Info Section (if available) */}
      {product.supplierInfo && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Supplier Guidelines</h6>
              <h2 className="text-[#214842] mb-4">Sourcing Recommendations</h2>
            </div>
            <SupplierInfo points={product.supplierInfo.points} />
          </div>
        </section>
      )}

      {/* FAQs Section (if available) */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Common Questions</h6>
              <h2 className="text-[#214842] mb-4">Frequently Asked Questions</h2>
            </div>
            <ProductFAQs faqs={product.faqs} />
          </div>
        </section>
      )}

      {/* Documentation */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Documentation</h6>
            <h2 className="text-[#214842] mb-4">Technical Documents</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download detailed technical information, specifications, and certificates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.documents?.map((doc, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
                <div className="bg-[#214842]/10 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-[#214842]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-[#214842] mb-1">{doc.name}</h4>
                  <div className="text-sm text-gray-500 mb-3">PDF • {doc.size}</div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download size={16} className="mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Explore More</h6>
            <h2 className="text-[#214842] mb-4">Related Products</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getRelatedProducts(product.id, 3).map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
