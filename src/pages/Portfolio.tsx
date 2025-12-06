import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target, Share2 } from "lucide-react";

const projects = [
  {
    title: "E-commerce SEO Growth",
    category: "SEO",
    icon: TrendingUp,
    description: "Increased organic traffic by 300% in 6 months through technical SEO and content optimization.",
    results: ["+300% Organic Traffic", "+150% Revenue", "Page 1 Rankings"],
  },
  {
    title: "SaaS Lead Generation",
    category: "Google Ads",
    icon: Target,
    description: "Generated 500+ qualified leads per month with an optimized Google Ads campaign.",
    results: ["500+ Leads/Month", "-40% Cost per Lead", "+200% Conversions"],
  },
  {
    title: "Restaurant Chain Social Growth",
    category: "Social Media",
    icon: Share2,
    description: "Grew Instagram following from 2K to 50K+ with engaging content and community management.",
    results: ["50K+ Followers", "+400% Engagement", "Viral Content"],
  },
  {
    title: "Fitness Brand Awareness",
    category: "Meta Ads",
    icon: Users,
    description: "Launched successful Facebook & Instagram campaigns reaching 2M+ potential customers.",
    results: ["2M+ Reach", "+500% Brand Awareness", "8x ROAS"],
  },
  {
    title: "Local Business SEO",
    category: "Local SEO",
    icon: TrendingUp,
    description: "Helped a local business rank #1 for key local search terms in their city.",
    results: ["#1 Local Rankings", "+200% Calls", "+150% Foot Traffic"],
  },
  {
    title: "B2B LinkedIn Campaign",
    category: "Social Media",
    icon: Share2,
    description: "Developed LinkedIn strategy that generated high-quality B2B leads for consulting firm.",
    results: ["100+ B2B Leads", "+300% Profile Views", "Industry Authority"],
  },
];

export default function Portfolio() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-4 md:px-8 border-b border-border">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Portfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-up animation-delay-100">
            Real results from real projects. See how I've helped businesses grow.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-all duration-200 animate-fade-in-up"
                style={{ animationDelay: `${(index % 6) * 50}ms` }}
              >
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <project.icon size={20} className="text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                {/* Results */}
                <div className="flex flex-wrap gap-2">
                  {project.results.map((result) => (
                    <span
                      key={result}
                      className="text-xs bg-secondary px-2 py-1 rounded font-medium"
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want similar results?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Let's discuss how I can help grow your business with data-driven digital marketing.
          </p>
          <Button asChild size="lg">
            <Link to="/contact" className="gap-2">
              Start Your Project
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
