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
    <section className="relative min-h-[85vh] flex items-center bg-background overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-50">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            Digital Marketing Expert
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-100">
            Scale your business<br />
            with <span className="text-primary">digital marketing</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
            Expert strategies in SEO, Google Ads, Facebook Ads & social media management. Get more customers and grow your revenue.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-10 animate-fade-in-up animation-delay-300">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact" className="gap-2">
                Get a Free Consultation
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View Services
              </Link>
            </Button>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-400">
            {categories.map((category) => (
              <Link
                key={category}
                to="/services"
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-full text-sm font-medium text-foreground transition-colors"
              >
                {category}
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container-custom px-4 md:px-8 py-6">
          <div className="flex items-center gap-8 flex-wrap">
            <span className="text-sm text-muted-foreground">Trusted by:</span>
            <div className="flex items-center gap-8 text-foreground">
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
