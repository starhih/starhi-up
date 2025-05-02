import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  blogCategories,
  getCategoryBySlug,
  getBlogPostsByCategory
} from '@/src/data/blog';
import BlogCard from '@/components/blog/BlogCard';
import BlogCategoryList from '@/components/blog/BlogCategoryList';
import BlogSearchBar from '@/components/blog/BlogSearchBar';
import Breadcrumbs from '@/components/ui/breadcrumbs';

// Generate static params for all categories
export function generateStaticParams() {
  return blogCategories.map((category) => ({
    category: category.slug,
  }));
}

// Generate metadata for each category page
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = getCategoryBySlug(params.category);

  if (!category) {
    return {
      title: 'Category Not Found | Star Hi Herbs Blog',
      description: 'The requested blog category could not be found.',
    };
  }

  return {
    title: `${category.name} | Star Hi Herbs Blog`,
    description: category.description,
  };
}

// Set dynamic to force-static for static export
export const dynamic = 'force-static';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  const posts = getBlogPostsByCategory(params.category);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[250px] flex items-center">
        <div className="absolute inset-0 bg-[#214842]"></div>
        <div className="relative z-10 container-custom text-white">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: category.name, href: `/blog/category/${category.slug}`, isCurrent: true }
            ]}
            className="mb-4 text-white/80"
          />
          <h1 className="mb-4">{category.name}</h1>
          <p className="text-xl max-w-2xl text-white/90">
            {category.description}
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <BlogSearchBar className="mb-6" />
              <BlogCategoryList
                categories={blogCategories}
                activeCategory={params.category}
              />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-[#214842] mb-8">
                {category.name} Articles
              </h2>

              {posts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {posts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 p-8 rounded-xl text-center">
                  <h3 className="text-xl font-semibold text-[#214842] mb-2">No Articles Found</h3>
                  <p className="text-gray-600">
                    There are currently no articles in this category. Please check back later.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
