import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Science Behind Turmeric\'s Anti-inflammatory Properties',
    excerpt: 'Discover how curcumin in turmeric extract works at the cellular level to reduce inflammation and support joint health.',
    image: 'https://images.pexels.com/photos/4113162/pexels-photo-4113162.jpeg',
    category: 'Research',
    date: 'May 12, 2025',
    slug: '/blog/turmeric-anti-inflammatory-properties',
  },
  {
    id: 2,
    title: 'Sustainable Farming Practices for Medicinal Herbs',
    excerpt: 'How our regenerative farming techniques preserve biodiversity while producing potent medicinal herbs.',
    image: 'https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg',
    category: 'Sustainability',
    date: 'April 28, 2025',
    slug: '/blog/sustainable-farming-medicinal-herbs',
  },
  {
    id: 3,
    title: 'Quality Control in Herbal Extract Manufacturing',
    excerpt: 'An inside look at our rigorous testing protocols that ensure consistency and safety in every batch.',
    image: 'https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg',
    category: 'Quality',
    date: 'March 15, 2025',
    slug: '/blog/quality-control-herbal-extracts',
  },
];

export default function BlogInsights() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Knowledge Center</h6>
            <h2 className="text-[#214842]">Latest Insights & Research</h2>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 cta-outline">
            <Link href="/blog" className="flex items-center">
              View All Articles
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#214842] text-white px-3 py-1 text-xs rounded-full">
                  {post.category}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold text-[#214842] mb-3 group-hover:text-[#258F67] transition-colors line-clamp-2">
                  <Link href={post.slug}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  href={post.slug}
                  className="inline-flex items-center text-[#258F67] font-medium hover:text-[#214842] transition-colors"
                >
                  Read Article
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