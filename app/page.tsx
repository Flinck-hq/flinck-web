import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Metrics } from "@/components/metrics";
import { FeatureSection } from "@/components/feature-section";
import { WhyFlinck } from "@/components/why-flinck";
import { ProductEcosystem } from "@/components/product-ecosystem";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f2e8]">
      <Navbar />

      <Hero />

      <Metrics />

      <FeatureSection
        id="marketplace"
        eyebrow="Marketplace"
        title="Buy and sell. Directly."
        description="List your harvest, set your price, and connect with verified buyers — no middlemen, no friction."
        imageSrc="/hero-mockup.png"
        imageAlt="Flinck Marketplace"
        ctaText="Explore Marketplace"
        ctaHref="/how-it-works"
      />

      <FeatureSection
        id="features"
        eyebrow="Weather Intelligence"
        title="Know before you grow."
        description="Hyper-local weather forecasts and crop guidance that help you plan planting, irrigation, and harvest with confidence."
        imageSrc="/marketplace-vibe.png"
        imageAlt="Flinck Weather Intelligence"
        reversed
        bgColor="bg-[#f5f0e5]"
        ctaText="See Weather Features"
        ctaHref="/how-it-works"
      />

      <FeatureSection
        id="ai"
        eyebrow="AI Assistant"
        title="Farming, supercharged."
        description="Get instant answers on pest control, soil health, market prices, and best practices — powered by AI trained for agriculture."
        imageSrc="/platform-dashboard.png"
        imageAlt="Flinck AI Assistant"
        ctaText="Meet Your AI Assistant"
        ctaHref="/how-it-works"
      />

      <FeatureSection
        id="community"
        eyebrow="Community"
        title="Where farmers connect."
        description="Follow, share, and learn from a network of farmers, buyers, and agribusinesses — built for agriculture, not generic social media."
        imageSrc="/farmer-lifestyle.png"
        imageAlt="Flinck Community"
        reversed
        bgColor="bg-[#f7f2e8]"
        ctaText="Join the Community"
        ctaHref="/how-it-works"
      />

      <WhyFlinck />

      <ProductEcosystem />

      <TestimonialCarousel />

      <CTA />

      <FAQ />

      <Footer />
    </main>
  );
}
