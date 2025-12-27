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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((study, index) => {
              const Icon = getIcon(study.id);
              const results = study.afterResults.length > 0
                ? study.afterResults.slice(0, 3)
                : (study.subCaseStudies?.[0]?.results?.slice(0, 3) || []);

              return (
                <Link
                  key={study.id}
                  to={`/portfolio/${study.id}`}
                  className="group relative flex flex-col h-full bg-card hover:bg-gradient-to-br hover:from-card hover:to-secondary/20 rounded-3xl border border-border/60 hover:border-primary/20 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${(index % 6) * 100}ms` }}
                >
                  {/* Top Gradient Line Effect */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

                  {/* Background Blob Effect */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />

                  <div className="p-8 flex flex-col h-full relative z-10">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-secondary dark:from-zinc-800 dark:to-zinc-900 shadow-[0_8px_16px_-6px_rgba(0,0,0,0.1)] border border-white/50 dark:border-white/5 flex items-center justify-center group-hover:scale-105 group-hover:shadow-[0_8px_20px_-6px_rgba(var(--primary),0.2)] transition-all duration-300">
                        <Icon strokeWidth={1.5} className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors" />
                      </div>
                      <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/10 shadow-sm">
                        {study.serviceTitle.split(' ')[0]}
                      </span>
                    </div>

                    {/* Title & Intro */}
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8 line-clamp-3">
                      {study.intro.goal}
                    </p>

                    {/* Results Cards */}
                    <div className="mt-auto space-y-3 mb-8">
                      {results.map((res, i) => (
                        <div key={i} className="flex justify-between items-center py-2.5 px-4 rounded-xl bg-secondary/40 border border-transparent group-hover:border-primary/5 group-hover:bg-secondary/60 transition-all duration-300">
                          <span className="text-xs font-semibold text-muted-foreground/80 uppercase tracking-wide">{res.metric}</span>
                          <span className="text-sm font-bold text-foreground">{res.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-sm font-bold text-primary">
                      <span className="border-b-2 border-transparent group-hover:border-primary/30 pb-0.5 transition-colors">Read Case Study</span>
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 duration-300" />
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
