import Link from 'next/link';
import Image from '@/components/ui/image';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getLatestBlogPosts } from '@/src/data/blog';
import { formatDate } from '@/utils/date';

export default function NewsUpdates() {
  // Get latest blog posts
  const latestPosts = getLatestBlogPosts(3);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Latest Updates</h6>
            <h2 className="text-[#214842]">News & Announcements</h2>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 cta-outline">
            <Link href="/blog" className="flex items-center">
              View All News
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 bg-[#214842] text-white px-4 py-1 text-sm">
                  {formatDate(post.publishedAt)}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#214842] mb-3 group-hover:text-[#258F67] transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#258F67] font-medium hover:text-[#214842] transition-colors"
                >
                  Read More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}