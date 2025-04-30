"use client"

import React from 'react';
import AnimatedTextCycle from '@/components/ui/animated-text-cycle';
import InteractiveBentoGallery from '@/components/ui/interactive-bento-gallery';

// Define the media items for the bento gallery
const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Certified Quality",
    desc: "FSSC, HACCP, WHO GMP, ISO, Halal, Kosher, Ayush GMP, and SCOPE certifications ensuring the highest standards.",
    url: "https://images.pexels.com/photos/4021262/pexels-photo-4021262.jpeg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "video",
    title: "Research-Backed",
    desc: "DSIR-recognized R&D lab with 12+ publications and 27+ patents for clinically-studied ingredients.",
    url: "https://cdn.pixabay.com/video/2023/05/22/15-10-58-710_large.mp4",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Sustainable Sourcing",
    desc: "Contract farming on ~10,000 acres across South India with agricultural university partnerships.",
    url: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "Advanced Facilities",
    desc: "3,000+ tons/year capacity in Bangalore and specialized probiotic facility in Hassan SEZ Pharma Zone.",
    url: "/images/hassan-plant.jpg",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 5,
    type: "video",
    title: "Specialized Expertise",
    desc: "Over 30 years of industry experience with dedicated teams for herbal extraction and formulation.",
    url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 6,
    type: "image",
    title: "Global Compliance",
    desc: "Products meeting regulatory requirements across global markets with specialized partnerships.",
    url: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
];

export default function BrandsChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Industry Choice</h6>
          <h2 className="text-[#214842] mb-4">
            Why Top <AnimatedTextCycle
              words={[
                "Pharmaceutical",
                "Cosmeceutical",
                "Supplement",
                "Nutraceutical"
              ]}
              interval={3000}
              className="text-[#258F67]"
            /> Brands Choose Star Hi Herbs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine ancient herbal wisdom with cutting-edge science to deliver ingredients that set your products apart.
          </p>
        </div>

        <InteractiveBentoGallery
          mediaItems={mediaItems}
          title=""
          description=""
        />
      </div>
    </section>
  );
}
