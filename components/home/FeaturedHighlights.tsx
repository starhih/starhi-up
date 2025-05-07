"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getProductOfTheMonth, productOfTheMonthConfig, newsItems } from '@/src/data';
import { formatDate } from '@/utils/date';

export default function FeaturedHighlights() {
  // Get the product of the month from central data
  const product = getProductOfTheMonth();

  // State for the news ticker
  const [isPaused, setIsPaused] = useState(false);

  // If no product is found, don't render the section
  if (!product) return null;

  // Extract the tagline from the config
  const { tagline } = productOfTheMonthConfig;

  // Extract key product details
  const { name, standardization, shortDescription, slug, image } = product;

  // Handle mouse enter/leave for pausing the ticker
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Create a duplicate array of news items for continuous scrolling
  const duplicatedNewsItems = [...newsItems, ...newsItems];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product of the Month Column */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="relative">
              <div className="absolute top-0 left-0 bg-[#214842] text-white px-4 py-2 rounded-br-lg z-10">
                <span className="text-sm font-medium">Product Of The Month</span>
              </div>
              <div className="relative h-64 w-full">
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#214842] mb-2">{name}</h3>
              <div className="flex items-center mb-3">
                <div className="px-3 py-1 bg-[#258F67]/10 text-[#258F67] rounded-full text-xs font-medium mr-2">
                  {standardization}
                </div>
                <div className="px-3 py-1 bg-[#214842]/10 text-[#214842] rounded-full text-xs font-medium">
                  {tagline}
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {shortDescription}
              </p>
              <Link
                href={`/products/${slug}`}
                className="inline-flex items-center text-[#258F67] font-medium hover:text-[#214842] transition-colors"
              >
                Read More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* News & Updates Ticker Column */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="bg-[#214842] text-white px-4 py-2">
              <h3 className="text-lg font-medium">News & Updates</h3>
            </div>
            <div
              className="h-[calc(100%-48px)] min-h-[300px] overflow-hidden relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`news-ticker-container ${isPaused ? 'paused' : ''}`}
                style={{
                  height: 'auto',
                  position: 'absolute',
                  width: '100%',
                  animation: isPaused ? 'none' : 'ticker-scroll 40s linear infinite'
                }}
              >
                {duplicatedNewsItems.map((newsItem, index) => {
                  // Create a URL slug from the title
                  const titleSlug = newsItem.title
                    .toLowerCase()
                    .replace(/[^\w\s]/g, '')
                    .replace(/\s+/g, '-');

                  // Create a URL based on category and title
                  const newsUrl = newsItem.url || `/news/${newsItem.category.toLowerCase()}/${titleSlug}`;

                  return (
                    <div
                      key={`${newsItem.id}-${index}`}
                      className="news-ticker-item border-b last:border-b-0 border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <Link href={newsUrl} className="block">
                        <div className="p-5 flex items-start gap-4">
                          <div className="relative h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={newsItem.image}
                              alt={newsItem.title}
                              fill
                              sizes="96px"
                              className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center text-xs text-[#258F67] mb-2">
                              <span>{formatDate(newsItem.date)}</span>
                              <span className="mx-2">•</span>
                              <span className="bg-[#258F67]/10 px-2 py-1 rounded-full text-xs">{newsItem.category}</span>
                            </div>
                            <h4 className="text-[#214842] font-semibold mb-2 line-clamp-2 group-hover:text-[#258F67] transition-colors">
                              {newsItem.title}
                            </h4>
                            <p className="text-gray-600 text-sm line-clamp-2">
                              {newsItem.excerpt}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add the CSS animation for the ticker */}
      <style jsx global>{`
        @keyframes ticker-scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .news-ticker-container.paused {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
