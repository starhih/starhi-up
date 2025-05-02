import { Metadata } from 'next';
import Image from 'next/image';
import { blogCategories, blogPosts, getLatestBlogPosts } from '@/src/data/blog';
import BlogCard from '@/components/blog/BlogCard';
import BlogCategoryList from '@/components/blog/BlogCategoryList';
import BlogSearchBar from '@/components/blog/BlogSearchBar';

export const metadata: Metadata = {
  title: 'Blog | Star Hi Herbs',
  description: 'Latest insights, research, and industry news from Star Hi Herbs. Explore our articles on herbal extracts, nutraceuticals, and sustainable practices.',
};

// Set dynamic to force-static for static export
export const dynamic = 'force-static';

export default function BlogPage() {
  // Get all posts
  const allPosts = blogPosts;

  // Get featured posts (latest 3)
  const featuredPosts = getLatestBlogPosts(3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <div className="absolute inset-0 bg-[#214842]"></div>
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
                {allPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
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
