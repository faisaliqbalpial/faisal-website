import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto mb-6 animate-fade-in-up">
          Ready to grow your business?
        </h2>

        <p className="text-background/60 text-lg max-w-xl mx-auto mb-8 animate-fade-in-up animation-delay-100">
          Get a free marketing audit and discover how to attract more customers online.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
          <Button asChild size="lg">
            <Link to="/contact" className="gap-2">
              Get Free Consultation
              <ArrowRight size={20} />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-background/30 text-background hover:bg-background hover:text-foreground">
            <Link to="/portfolio">
              View My Work
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
