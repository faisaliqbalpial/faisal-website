import { Link } from "react-router-dom";
import { Search, Target, Facebook, Share2, Lightbulb, ArrowRight, Mail } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Rank higher on Google and get more organic traffic with technical SEO and content strategy.",
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Target,
    title: "Google Ads",
    description: "High-intent campaigns focused on performance & ROI. Get more leads without wasting budget.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Facebook,
    title: "Meta Advertising",
    description: "Laser-targeted campaigns on Facebook and Instagram with smart audience segmentation.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Full control of your social media – content, posting, engagement, and analytics.",
    image: "/faisaliqbal.png",
  },
  {
    icon: Lightbulb,
    title: "Digital Strategy",
    description: "Complete marketing strategy aligned with your goals for maximum impact.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Expert Mailchimp newsletters, automation flows, and responsive design for higher ROI.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <Link
              to="/services"
              key={service.title}
              className="group relative h-[320px] rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${(index + 1) * 50}ms` }}
            >
              {/* Full Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:via-black/50 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full p-8 text-white">
                {/* Icon Glassmorphism */}
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl flex items-center justify-center mb-6 text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg">
                  <service.icon size={24} />
                </div>

                <h3 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h3>
                <p className="text-white/80 leading-relaxed mb-6 line-clamp-3 group-hover:text-white/90 transition-colors">
                  {service.description}
                </p>

                <div className="mt-auto flex items-center text-sm font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary-foreground">
                  View Case Study <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
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
