import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Award, BarChart3, CheckCircle, MessageCircle, FileText, ArrowRight, Sparkles } from "lucide-react";

const skills = [
  "SEO & Content Strategy",
  "Google Ads & PPC",
  "Meta Advertising",
  "Social Media Marketing",
  "Analytics & Reporting",
  "Conversion Optimization",
];

const whyMe = [
  { icon: Award, text: "Google Ads & Meta Certified" },
  { icon: BarChart3, text: "Data-driven & result-oriented" },
  { icon: MessageCircle, text: "Transparent communication" },
  { icon: FileText, text: "Weekly reports & clear KPIs" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative animate-fade-in-up">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/20 via-accent to-secondary overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-card rounded-full flex items-center justify-center shadow-hero">
                    <span className="font-display text-6xl md:text-8xl font-bold gradient-text">FI</span>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 md:bottom-8 md:right-8 bg-card rounded-2xl shadow-card p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Sparkles className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">5+ Years</div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-in-up animation-delay-200">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Meet Faisal Iqbal –{" "}
                <span className="gradient-text">Your Digital Growth Partner</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm a certified digital marketing expert with over 5 years of experience helping businesses grow their online presence. I specialize in crafting results-driven marketing strategies that deliver leads, sales, and sustainable brand growth.
              </p>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={16} className="text-primary shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg">
                <Link to="/contact" className="gap-2">
                  Let's Work Together
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why Work With Me?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I don't just offer services — I deliver results that move the needle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMe.map((item, index) => (
              <div
                key={item.text}
                className="bg-card rounded-2xl p-6 text-center card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-primary" />
                </div>
                <p className="font-medium text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-medium italic leading-relaxed">
              "I don't just offer services — I deliver results that move the needle."
            </blockquote>
            <div className="mt-6 text-muted-foreground">— Faisal Iqbal</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
