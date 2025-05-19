'use client';

import { Metadata } from 'next';
import Image from '@/components/ui/image';
import { useSearchParams } from 'next/navigation';
import { blogCategories, blogPosts, getLatestBlogPosts } from '@/src/data/blog';
import BlogCard from '@/components/blog/BlogCard';
import BlogCategoryList from '@/components/blog/BlogCategoryList';
import BlogSearchBar from '@/components/blog/BlogSearchBar';
import Breadcrumbs from '@/components/ui/breadcrumbs';

// Metadata is now in a separate file: app/blog/metadata.ts
// Set dynamic to force-static for static export
export const dynamic = 'force-static';

export default function BlogPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  // Filter posts based on search query
  const filteredPosts = searchQuery
    ? blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : blogPosts;

  // Get featured posts (latest 3)
  const featuredPosts = getLatestBlogPosts(3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image src="/images/hero/knowledge-center.jpeg"
          alt="Knowledge Center"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#214842]/30"></div>
        <div className="relative z-10 container-custom text-white">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-shadow-sm">Knowledge Center</h1>
            <p className="text-xl text-white text-shadow-sm">
              Latest insights, research, and industry news from Star Hi Herbs
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="border-b">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog', isCurrent: true }
            ]}
          />
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
              <h2 className="text-2xl font-semibold text-[#214842] mb-8">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'All Articles'}
              </h2>

              {filteredPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 p-8 rounded-xl text-center">
                  <h3 className="text-xl font-semibold text-[#214842] mb-2">No Articles Found</h3>
                  <p className="text-gray-600">
                    No articles match your search query. Please try a different search term.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section - Only show when not searching */}
      {!searchQuery && (
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
      )}
    </>
  );
}
