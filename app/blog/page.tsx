import { Metadata } from 'next';
import Image from 'next/image';
import { blogCategories, blogPosts, getLatestBlogPosts } from '@/src/data/blog';
import BlogCard from '@/components/blog/BlogCard';
import BlogCategoryList from '@/components/blog/BlogCategoryList';
import BlogSearchBar from '@/components/blog/BlogSearchBar';
import BlogPagination from '@/components/blog/BlogPagination';

export const metadata: Metadata = {
  title: 'Blog | Star Hi Herbs',
  description: 'Latest insights, research, and industry news from Star Hi Herbs. Explore our articles on herbal extracts, nutraceuticals, and sustainable practices.',
};

interface BlogPageProps {
  searchParams: {
    page?: string;
    search?: string;
  };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  // Pagination
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const postsPerPage = 6;
  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Get posts for current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = blogPosts.slice(startIndex, endIndex);

  // Get featured posts (latest 3)
  const featuredPosts = getLatestBlogPosts(3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="/images/blog/blog-hero.jpg"
          alt="Star Hi Herbs Blog"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#214842]/70"></div>
        <div className="relative z-10 container-custom text-white">
          <h1 className="mb-4">Knowledge Center</h1>
          <p className="text-xl max-w-2xl text-white/90">
            Latest insights, research, and industry news from Star Hi Herbs
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
              <BlogCategoryList categories={blogCategories} />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-[#214842] mb-8">All Articles</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {paginatedPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                baseUrl="/blog"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Featured</h6>
            <h2 className="text-[#214842] mb-4">Latest Research & Insights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our most recent publications and technical guides
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
