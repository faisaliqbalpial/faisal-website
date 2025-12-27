import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TrustBadges } from "@/components/home/TrustBadges";
import { PromotionalBanner } from "@/components/home/PromotionalBanner";
import { BlogPreview } from "@/components/home/BlogPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustBadges />
      <PromotionalBanner />
      <ServicesPreview />
      <BlogPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
