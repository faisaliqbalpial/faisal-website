import { Link } from "react-router-dom";
import { Search, Target, Facebook, Share2, Lightbulb, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Rank higher on Google and get more organic traffic with technical SEO and content strategy.",
  },
  {
    icon: Target,
    title: "Google Ads",
    description: "High-intent campaigns focused on performance & ROI. Get more leads without wasting budget.",
  },
  {
    icon: Facebook,
    title: "Meta Advertising",
    description: "Laser-targeted campaigns on Facebook and Instagram with smart audience segmentation.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Full control of your social media – content, posting, engagement, and analytics.",
  },
  {
    icon: Lightbulb,
    title: "Digital Strategy",
    description: "Complete marketing strategy aligned with your goals for maximum impact.",
  },
];

export function ServicesPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Popular services
          </h2>
          <p className="text-muted-foreground animate-fade-in-up animation-delay-100">
            Smart strategies. Measurable results. Services designed to grow your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
          {services.map((service, index) => (
            <Link
              to="/services"
              key={service.title}
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary/30 hover:shadow-card-hover transition-all duration-200 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 50}ms` }}
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <service.icon size={24} className="text-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center animate-fade-in-up animation-delay-300">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View all services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
