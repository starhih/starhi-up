import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Sample news data
const newsItems = [
  {
    id: 1,
    title: 'Star Hi Herbs Achieves FSSC 22000 Certification',
    excerpt: 'Our manufacturing facility has received the prestigious FSSC 22000 certification, marking another milestone in our quality assurance journey.',
    image: 'https://images.pexels.com/photos/3807318/pexels-photo-3807318.jpeg',
    date: 'June 15, 2025',
    slug: '/blog/fssc-22000-certification',
  },
  {
    id: 2,
    title: 'New Research Partnership with Stanford University',
    excerpt: 'Star Hi Herbs announces a groundbreaking research partnership with Stanford University to explore novel applications of herbal compounds.',
    image: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg',
    date: 'May 28, 2025',
    slug: '/blog/stanford-research-partnership',
  },
  {
    id: 3,
    title: 'Expanding Our Organic Farming Initiative',
    excerpt: 'We\'re proud to announce the expansion of our organic farming program, adding 500 more acres of sustainable cultivation.',
    image: 'https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg',
    date: 'April 10, 2025',
    slug: '/blog/organic-farming-expansion',
  },
];

export default function NewsUpdates() {
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
          {newsItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 bg-[#214842] text-white px-4 py-1 text-sm">
                  {item.date}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#214842] mb-3 group-hover:text-[#258F67] transition-colors">
                  <Link href={item.slug}>
                    {item.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.excerpt}
                </p>
                <Link 
                  href={item.slug}
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