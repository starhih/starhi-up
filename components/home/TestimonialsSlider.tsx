"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    text: "Star Hi Herbs has been an invaluable partner for our supplement line. Their turmeric extract delivers consistent potency and their technical support is outstanding.",
    author: "Sarah Johnson",
    position: "Product Development Manager",
    company: "VitaWell Supplements",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 2,
    text: "The quality of organic extracts from Star Hi Herbs is unmatched. Their commitment to sustainability aligns perfectly with our brand values, making them our preferred supplier.",
    author: "Michael Chen",
    position: "Chief Operating Officer",
    company: "NatureCore Nutraceuticals",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    id: 3,
    text: "We've worked with many herbal extract suppliers, but Star Hi Herbs stands out for their advanced R&D capabilities and ability to customize formulations to our specific needs.",
    author: "Emily Rodriguez",
    position: "Director of Innovation",
    company: "Herbal Solutions Inc.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
];

export default function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Testimonials</h6>
          <h2 className="text-[#214842] mb-4">What Our Clients Say</h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-10">
          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/3 transform -translate-y-1/2 z-10 rounded-full border-gray-200"
            onClick={prevSlide}
            disabled={isAnimating}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/3 transform -translate-y-1/2 z-10 rounded-full border-gray-200"
            onClick={nextSlide}
            disabled={isAnimating}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          
          {/* Testimonials slider */}
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 flex"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 flex flex-col items-center">
                  <div className="bg-gray-50 rounded-2xl p-8 mb-8 relative">
                    <Quote className="absolute top-6 left-6 text-[#EFC368] opacity-20 h-12 w-12" />
                    <div className="relative">
                      <p className="text-xl text-gray-700 italic text-center mt-4">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-[#214842]">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm font-medium text-[#258F67]">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentSlide === index ? "bg-[#214842] w-6" : "bg-gray-300"
                )}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}