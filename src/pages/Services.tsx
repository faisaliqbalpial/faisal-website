import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Search, Target, Facebook, Share2, Lightbulb, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "SEO is the foundation of your online success. I help you rank higher on Google, get more organic traffic, and increase visibility with technical audits, on-page optimization, content strategy, and link-building campaigns.",
    features: ["Technical SEO Audits", "On-Page Optimization", "Content Strategy", "Link Building", "Local SEO", "Performance Tracking"],
    color: "from-secondary to-secondary/50",
  },
  {
    icon: Target,
    title: "Google Ads Management",
    description: "Tap into high-intent audiences with Google Ads. I create, launch, and optimize search, Display, YouTube, and remarketing campaigns focused on performance & ROI. You'll get more leads without wasting your budget.",
    features: ["Search Campaigns", "Display Advertising", "YouTube Ads", "Remarketing", "Conversion Tracking", "ROI Optimization"],
    color: "from-accent to-accent/50",
  },
  {
    icon: Facebook,
    title: "Facebook & Instagram Ads (Meta Advertising)",
    description: "Run laser-targeted campaigns across social platforms with Meta Ads. I build powerful ads with compelling visuals, persuasive copy, and smart audience segmentation so you can grow faster on Facebook and Instagram.",
    features: ["Audience Targeting", "Ad Creative Design", "A/B Testing", "Retargeting Campaigns", "Lead Generation", "Sales Funnels"],
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "No more stress about what to post or how to manage your accounts. I take full control of your social media – content creation, posting calendar, community engagement, and analytics reporting – to help you grow your brand and audience.",
    features: ["Content Creation", "Posting Calendar", "Community Management", "Analytics & Reporting", "Brand Building", "Engagement Growth"],
    color: "from-muted to-muted/50",
  },
  {
    icon: Lightbulb,
    title: "Full Digital Strategy",
    description: "Let's build a complete digital marketing strategy aligned with your business goals. From awareness to conversion, I help you unify all your channels for maximum impact and results.",
    features: ["Market Research", "Competitor Analysis", "Channel Strategy", "Campaign Planning", "Performance Metrics", "Growth Roadmap"],
    color: "from-secondary to-accent/30",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            My Digital Marketing{" "}
            <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Smart strategies. Measurable results. Tailored services designed to help you attract, convert, and retain more customers.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding pt-0">
        <div className="container-custom space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon Card */}
              <div className="lg:w-2/5">
                <div className={`bg-gradient-to-br ${service.color} rounded-3xl p-12 md:p-16 flex items-center justify-center`}>
                  <div className="w-24 h-24 bg-card rounded-2xl shadow-card flex items-center justify-center">
                    <service.icon size={48} className="text-primary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-3/5 space-y-6">
                <h2 className="font-display text-2xl md:text-3xl font-bold">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Want a Custom Strategy?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Let's discuss your business goals and create a marketing plan that delivers results.
          </p>
          <Button asChild size="lg">
            <Link to="/contact" className="gap-2">
              Request a Free Marketing Audit
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
