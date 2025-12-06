import { Link } from "react-router-dom";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative bg-foreground text-background rounded-3xl overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-40 w-60 h-60 bg-primary-glow rounded-full blur-3xl" />
          </div>

          <div className="relative px-8 md:px-16 py-16 md:py-20 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full text-sm font-medium text-primary mb-6">
              <Rocket size={16} />
              <span>Ready to Grow?</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto mb-6">
              Want a Custom Strategy Tailored to Your Business?
            </h2>

            <p className="text-background/70 text-lg max-w-xl mx-auto mb-10">
              Let's discuss your goals and create a marketing plan that delivers real, measurable results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/contact" className="gap-2">
                  Request a Free Marketing Audit
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-background/20 text-background hover:bg-background/10 hover:text-background">
                <Link to="/portfolio">
                  View My Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
