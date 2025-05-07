import HeroSection from '@/components/home/HeroSection';
import AboutIntroSection from '@/components/home/AboutIntroSection';
import StatisticsSection from '@/components/home/StatisticsSection';
import FeaturedHighlights from '@/components/home/FeaturedHighlights';
import CertificationCarousel from '@/components/home/CertificationCarousel';
import ProductCategories from '@/components/home/ProductCategories';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import AwardsSection from '@/components/home/AwardsSection';
import EventsSection from '@/components/home/EventsSection';
import VideoStory from '@/components/home/VideoStory';
import BlogInsights from '@/components/home/BlogInsights';
import CatalogueDownload from '@/components/home/CatalogueDownload';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutIntroSection />
      <FeaturedHighlights />
      <CertificationCarousel />
      <ProductCategories />
      <WhyChooseUs />
      <AwardsSection />
      <EventsSection />
      <VideoStory />
      <BlogInsights />
      <CatalogueDownload />
    </>
  );
}