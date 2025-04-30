import HeroSection from '@/components/home/HeroSection';
import FeaturedProduct from '@/components/home/FeaturedProduct';
import NewsUpdates from '@/components/home/NewsUpdates';
import CertificationCarousel from '@/components/home/CertificationCarousel';
import ProductCategories from '@/components/home/ProductCategories';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import GlobalPresence from '@/components/home/GlobalPresence';
import VideoStory from '@/components/home/VideoStory';
import BlogInsights from '@/components/home/BlogInsights';
import CatalogueDownload from '@/components/home/CatalogueDownload';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProduct />
      <NewsUpdates />
      <CertificationCarousel />
      <ProductCategories />
      <WhyChooseUs />
      <GlobalPresence />
      <TestimonialsSlider />
      <VideoStory />
      <BlogInsights />
      <CatalogueDownload />
    </>
  );
}