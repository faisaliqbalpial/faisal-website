import { Link } from "react-router-dom";
import { Search, Target, Facebook, Share2, Lightbulb, ArrowRight, Mail } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Rank higher on Google and get more organic traffic with technical SEO and content strategy.",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    gradient: "from-blue-500/5 to-indigo-500/5",
    border: "group-hover:border-blue-500/30",
  },
  {
    icon: Target,
    title: "Google Ads",
    description: "High-intent campaigns focused on performance & ROI. Get more leads without wasting budget.",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-950/30",
    gradient: "from-orange-500/5 to-red-500/5",
    border: "group-hover:border-orange-500/30",
  },
  {
    icon: Facebook,
    title: "Meta Advertising",
    description: "Laser-targeted campaigns on Facebook and Instagram with smart audience segmentation.",
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-950/30",
    gradient: "from-indigo-500/5 to-purple-500/5",
    border: "group-hover:border-indigo-500/30",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Full control of your social media – content, posting, engagement, and analytics.",
    color: "text-pink-600 dark:text-pink-400",
    bg: "bg-pink-50 dark:bg-pink-950/30",
    gradient: "from-pink-500/5 to-rose-500/5",
    border: "group-hover:border-pink-500/30",
  },
  {
    icon: Lightbulb,
    title: "Digital Strategy",
    description: "Complete marketing strategy aligned with your goals for maximum impact.",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    gradient: "from-emerald-500/5 to-teal-500/5",
    border: "group-hover:border-emerald-500/30",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Expert Mailchimp newsletters, automation flows, and responsive design for higher ROI.",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    gradient: "from-amber-500/5 to-yellow-500/5",
    border: "group-hover:border-amber-500/30",
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
              className={`group relative p-8 h-full rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${service.border} overflow-hidden`}
              style={{ animationDelay: `${(index + 1) * 50}ms` }}
            >
              {/* Gradient Background Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon with colored background */}
                <div className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} className={service.color} />
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <div className={`flex items-center text-sm font-semibold ${service.color} opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}>
                  Learn more <ArrowRight size={16} className="ml-2" />
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
