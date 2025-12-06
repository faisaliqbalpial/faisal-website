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
    color: "from-secondary to-secondary/50",
  },
  {
    title: "SaaS Lead Generation",
    category: "Google Ads",
    icon: Target,
    description: "Generated 500+ qualified leads per month with an optimized Google Ads campaign.",
    results: ["500+ Leads/Month", "-40% Cost per Lead", "+200% Conversions"],
    color: "from-accent to-accent/50",
  },
  {
    title: "Restaurant Chain Social Growth",
    category: "Social Media",
    icon: Share2,
    description: "Grew Instagram following from 2K to 50K+ with engaging content and community management.",
    results: ["50K+ Followers", "+400% Engagement", "Viral Content"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Fitness Brand Awareness",
    category: "Meta Ads",
    icon: Users,
    description: "Launched successful Facebook & Instagram campaigns reaching 2M+ potential customers.",
    results: ["2M+ Reach", "+500% Brand Awareness", "8x ROAS"],
    color: "from-muted to-muted/50",
  },
  {
    title: "Local Business SEO",
    category: "Local SEO",
    icon: TrendingUp,
    description: "Helped a local business rank #1 for key local search terms in their city.",
    results: ["#1 Local Rankings", "+200% Calls", "+150% Foot Traffic"],
    color: "from-secondary to-accent/30",
  },
  {
    title: "B2B LinkedIn Campaign",
    category: "Social Media",
    icon: Share2,
    description: "Developed LinkedIn strategy that generated high-quality B2B leads for consulting firm.",
    results: ["100+ B2B Leads", "+300% Profile Views", "Industry Authority"],
    color: "from-accent to-secondary/50",
  },
];

export default function Portfolio() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            My{" "}
            <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Real results from real projects. See how I've helped businesses grow their digital presence.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card rounded-3xl overflow-hidden card-hover animate-fade-in-up"
                style={{ animationDelay: `${(index % 6) * 100}ms` }}
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${project.color} p-8`}>
                  <div className="w-14 h-14 bg-card rounded-2xl flex items-center justify-center shadow-card group-hover:scale-110 transition-transform duration-300">
                    <project.icon size={24} className="text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="text-xs font-medium text-primary mb-2">{project.category}</div>
                  <h3 className="font-display text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{project.description}</p>

                  {/* Results */}
                  <div className="flex flex-wrap gap-2">
                    {project.results.map((result) => (
                      <span
                        key={result}
                        className="text-xs bg-muted px-3 py-1.5 rounded-full font-medium"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Similar Results?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
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
