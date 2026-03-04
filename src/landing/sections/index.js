import MarqueeHeader from "./MarqueeHeader";
import HeroSection from "./HeroSection";
import TextBlock from "./TextBlock";
import SplitSection from "./SplitSection";
import ImageGrid from "./ImageGrid";
import FeatureList from "./FeatureList";
import StatsSection from "./StatsSection";
import ClientCase from "./ClientCase";
import CTASection from "./CTASection";
import GallerySwiper from "./GallerySwiper";
import ClientLogos from "./ClientLogos";
import ContactForm from "./ContactForm";

const sectionRegistry = {
  "marquee-header": MarqueeHeader,
  hero: HeroSection,
  "text-block": TextBlock,
  split: SplitSection,
  "image-grid": ImageGrid,
  "feature-list": FeatureList,
  stats: StatsSection,
  "client-case": ClientCase,
  cta: CTASection,
  "gallery-swiper": GallerySwiper,
  "client-logos": ClientLogos,
  "contact-form": ContactForm,
};

export default sectionRegistry;
