import { Link } from "react-router-dom";
import { Search, Target, Facebook, Share2, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Rank higher on Google, get more organic traffic, and increase visibility with technical audits and content strategy.",
    color: "bg-secondary",
  },
  {
    icon: Target,
    title: "Google Ads",
    description: "Tap into high-intent audiences with search, display, and remarketing campaigns focused on performance & ROI.",
    color: "bg-accent",
  },
  {
    icon: Facebook,
    title: "Meta Advertising",
    description: "Run laser-targeted campaigns across Facebook and Instagram with compelling visuals and smart audience segmentation.",
    color: "bg-primary/10",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Full control of your social media – content creation, posting calendar, community engagement, and analytics.",
    color: "bg-muted",
  },
  {
    icon: Lightbulb,
    title: "Digital Strategy",
    description: "Complete marketing strategy aligned with your business goals, unifying all channels for maximum impact.",
    color: "bg-secondary",
  },
];

export function ServicesPreview() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
            Digital Marketing{" "}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in-up animation-delay-100">
            Smart strategies. Measurable results. Tailored services designed to help you attract, convert, and retain more customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-card rounded-3xl p-8 card-hover animate-fade-in-up`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up animation-delay-500">
          <Button asChild size="lg">
            <Link to="/services" className="gap-2">
              View All Services
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
