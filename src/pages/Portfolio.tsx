import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target, Search, Mail, FolderOpen, Share2 } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

// Helper to get icon based on ID
const getIcon = (id: string) => {
  switch (id) {
    case 'seo': return Search;
    case 'google-ads': return Target;
    case 'facebook-ads': return Facebook; // Facebook is not imported, let's use Users or define it
    case 'social-media-management': return Share2;
    case 'email-marketing': return Mail;
    default: return FolderOpen;
  }
};

// We need to import Facebook if we use it, but lucide-react exports it as Facebook.
// Let's stick to the imports we have or add Facebook.
import { Facebook } from "lucide-react";

export default function Portfolio() {
  const projects = Object.values(caseStudies);

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((study, index) => {
              const Icon = getIcon(study.id);
              // Extract top 3 results from afterResults, or beforeResults if after is empty
              const results = study.afterResults.length > 0
                ? study.afterResults.slice(0, 3)
                : (study.subCaseStudies?.[0]?.results?.slice(0, 3) || []);

              return (
                <Link
                  key={study.id}
                  to={`/portfolio/${study.id}`}
                  className="group p-6 bg-card border border-border rounded-xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up flex flex-col h-full"
                  style={{ animationDelay: `${(index % 6) * 100}ms` }}
                >
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Icon size={24} className="text-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {study.serviceTitle.split(' ')[0]} {/* Approximate short category */}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-grow">
                    {study.intro.goal}
                  </p>

                  {/* Results */}
                  <div className="mt-auto space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {results.map((res, i) => (
                        <span
                          key={i}
                          className="text-xs bg-secondary/80 px-2.5 py-1.5 rounded-md font-medium border border-border/50 text-foreground/80"
                        >
                          <span className="font-bold">{res.value}</span> {res.metric}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 mt-2 border-t border-border/50 flex items-center text-sm font-semibold text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      View Case Study <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </Link>
              );
            })}
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
