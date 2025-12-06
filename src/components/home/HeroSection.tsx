import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  "SEO Optimization",
  "Google Ads",
  "Facebook Ads",
  "Social Media",
  "Digital Strategy",
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-foreground text-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-foreground/95" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-custom relative z-10 px-4 md:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
            Scale your business<br />
            with <span className="text-primary">digital marketing</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-background/70 max-w-2xl mb-8 leading-relaxed animate-fade-in-up animation-delay-100">
            Expert strategies in SEO, Google Ads, Facebook Ads & social media management. Get more customers and grow your revenue.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-12 animate-fade-in-up animation-delay-200">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact" className="gap-2">
                Get a Free Consultation
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg" className="border-background/30 text-background hover:bg-background hover:text-foreground">
              <Link to="/services">
                View Services
              </Link>
            </Button>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-300">
            {categories.map((category) => (
              <Link
                key={category}
                to="/services"
                className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 hover:bg-background/20 rounded-full text-sm font-medium text-background/80 hover:text-background transition-colors"
              >
                {category}
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted by section */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/5 border-t border-background/10">
        <div className="container-custom px-4 md:px-8 py-6">
          <div className="flex items-center gap-8 flex-wrap">
            <span className="text-sm text-background/50">Trusted by:</span>
            <div className="flex items-center gap-8 text-background/40">
              <span className="font-semibold">50+ Clients</span>
              <span className="font-semibold">15+ Countries</span>
              <span className="font-semibold">100+ Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
