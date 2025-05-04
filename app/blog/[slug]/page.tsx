import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getBlogPostBySlug,
  getRelatedBlogPosts,
  getTagsByIds,
  blogPosts
} from '@/src/data/blog';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import BlogHeader from '@/components/blog/BlogHeader';
import SimpleBlogContent from '@/components/blog/SimpleBlogContent';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';
import BlogTags from '@/components/blog/BlogTags';
import BlogRelatedPosts from '@/components/blog/BlogRelatedPosts';

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Star Hi Herbs',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | Star Hi Herbs Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// Set dynamic to force-static for static export
export const dynamic = 'force-static';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const tags = getTagsByIds(post.tagIds);
  const relatedPosts = getRelatedBlogPosts(post.slug, 3);

  return (
    <>
      <section className="pt-8 lg:pt-12">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title, href: `/blog/${post.slug}`, isCurrent: true }
            ]}
          />
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents Sidebar */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <BlogTableOfContents items={post.tableOfContents} />
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <BlogHeader post={post} className="mb-8" />

              <SimpleBlogContent content={post.content} className="mb-12" />

              <BlogTags tags={tags} className="mb-16" />

              {relatedPosts.length > 0 && (
                <BlogRelatedPosts posts={relatedPosts} className="mt-16" />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
