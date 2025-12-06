import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Award, BarChart3, CheckCircle, MessageCircle, FileText, ArrowRight } from "lucide-react";

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
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-4 md:px-8 border-b border-border">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-up animation-delay-100">
            Your digital growth partner with 5+ years of experience.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Bio */}
            <div className="animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Meet Faisal Iqbal
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a certified digital marketing expert with over 5 years of experience helping businesses grow their online presence. I specialize in crafting results-driven marketing strategies that deliver leads, sales, and sustainable brand growth.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're a startup or an established brand, I create customized strategies that work. My approach is data-driven, transparent, and focused on delivering real, measurable results.
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

              <Button asChild>
                <Link to="/contact" className="gap-2">
                  Let's Work Together
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>

            {/* Why Me Cards */}
            <div className="animate-fade-in-up animation-delay-200">
              <h3 className="text-xl font-bold mb-6">Why work with me?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyMe.map((item, index) => (
                  <div
                    key={item.text}
                    className="p-5 bg-card border border-border rounded-lg"
                  >
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mb-3">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <p className="font-medium text-sm">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-8 p-6 bg-secondary rounded-lg border-l-4 border-primary">
                <p className="text-lg font-medium italic">
                  "I don't just offer services — I deliver results that move the needle."
                </p>
                <cite className="text-sm text-muted-foreground mt-2 block">— Faisal Iqbal</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
