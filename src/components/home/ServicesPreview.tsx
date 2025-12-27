import { Link } from "react-router-dom";
import { Search, Target, Facebook, Share2, ArrowRight, Mail } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Rank higher on Google and get more organic traffic with technical SEO and content strategy.",
    gradient: "from-emerald-50 to-teal-100",
    slug: "seo",
  },
  {
    icon: Target,
    title: "Google Ads",
    description: "High-intent campaigns focused on performance & ROI. Get more leads without wasting budget.",
    gradient: "from-blue-50 to-sky-100",
    slug: "google-ads",
  },
  {
    icon: Facebook,
    title: "Meta Advertising",
    description: "Laser-targeted campaigns on Facebook and Instagram with smart audience segmentation.",
    gradient: "from-violet-50 to-purple-100",
    slug: "facebook-ads",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Full control of your social media – content, posting, engagement, and analytics.",
    gradient: "from-indigo-50 to-blue-100",
    slug: "social-media-management",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Expert Mailchimp newsletters, automation flows, and responsive design for higher ROI.",
    gradient: "from-green-50 to-emerald-100",
    slug: "email-marketing",
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
              to={`/services/${service.slug}`}
              key={service.title}
              className={`group relative h-[320px] rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${service.gradient}`}
              style={{ animationDelay: `${(index + 1) * 50}ms` }}
            >
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full p-8">
                {/* Icon */}
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={28} />
                </div>

                <h3 className="text-2xl font-bold mb-3 tracking-tight text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 group-hover:text-foreground/80 transition-colors">
                  {service.description}
                </p>

                <div className="mt-auto flex items-center text-sm font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary">
                  View Case Study <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
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
