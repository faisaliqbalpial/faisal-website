import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Search, Target, Facebook, Share2, Lightbulb, ArrowRight, CheckCircle, Mail } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "SEO is the foundation of your online success. I help you rank higher on Google, get more organic traffic, and increase visibility with technical audits, on-page optimization, content strategy, and link-building campaigns.",
    features: ["Technical SEO Audits", "On-Page Optimization", "Content Strategy", "Link Building", "Local SEO", "Performance Tracking"],
    slug: "seo",
  },
  {
    icon: Target,
    title: "Google Ads Management",
    description: "Tap into high-intent audiences with Google Ads. I create, launch, and optimize search, Display, YouTube, and remarketing campaigns focused on performance & ROI. You'll get more leads without wasting your budget.",
    features: ["Search Campaigns", "Display Advertising", "YouTube Ads", "Remarketing", "Conversion Tracking", "ROI Optimization"],
    slug: "google-ads",
  },
  {
    icon: Facebook,
    title: "Facebook & Instagram Ads (Meta Advertising)",
    description: "Run laser-targeted campaigns across social platforms with Meta Ads. I build powerful ads with compelling visuals, persuasive copy, and smart audience segmentation so you can grow faster on Facebook and Instagram.",
    features: ["Audience Targeting", "Ad Creative Design", "A/B Testing", "Retargeting Campaigns", "Lead Generation", "Sales Funnels"],
    slug: "facebook-ads",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "No more stress about what to post or how to manage your accounts. I take full control of your social media – content creation, posting calendar, community engagement, and analytics reporting – to help you grow your brand and audience.",
    features: ["Content Creation", "Posting Calendar", "Community Management", "Analytics & Reporting", "Brand Building", "Engagement Growth"],
    slug: "social-media-management",
  },
  {
    icon: Lightbulb,
    title: "Full Digital Strategy",
    description: "Let's build a complete digital marketing strategy aligned with your business goals. From awareness to conversion, I help you unify all your channels for maximum impact and results.",
    features: ["Market Research", "Competitor Analysis", "Channel Strategy", "Campaign Planning", "Performance Metrics", "Growth Roadmap"],
    slug: "digital-strategy",
  },
  {
    icon: Mail,
    title: "Email Marketing & Automation",
    description: "Maximize your ROI with expert Mailchimp email marketing. I provide end-to-end services—from setting up accounts and designing responsive templates to crafting automated flows and analyzing performance for higher engagement.",
    features: ["Mailchimp Setup & Integration", "Responsive Email Design", "Automation Flows", "Campaign Management", "Landing Pages & Forms", "Analytics & Reporting"],
    slug: "email-marketing",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-4 md:px-8 border-b border-border">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            My Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-up animation-delay-100">
            Smart strategies. Measurable results. Tailored services designed to help you attract, convert, and retain more customers.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom space-y-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="grid lg:grid-cols-3 gap-8 items-start p-6 md:p-8 bg-card border border-border rounded-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon & Title */}
              <div>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-primary" />
                </div>
                <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              </div>

              {/* Description */}
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>

                <Button variant="outline" size="sm" asChild className="mb-6 group">
                  <Link to={`/services/${service.slug}`}>
                    Read Case Study
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={14} className="text-primary shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Let's discuss your business goals and create a marketing plan that delivers results.
          </p>
          <Button asChild size="lg">
            <Link to="/contact" className="gap-2">
              Get Free Consultation
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
