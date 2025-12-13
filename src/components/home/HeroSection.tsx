import { Link } from "react-router-dom";
import { ArrowRight, Search, Target, Facebook, Share2, Lightbulb, Mail, Users, Globe, FolderCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { label: "SEO Optimization", icon: Search, color: "text-blue-500", bg: "bg-blue-500/10", border: "hover:border-blue-500/50" },
  { label: "Google Ads", icon: Target, color: "text-orange-500", bg: "bg-orange-500/10", border: "hover:border-orange-500/50" },
  { label: "Facebook Ads", icon: Facebook, color: "text-indigo-500", bg: "bg-indigo-500/10", border: "hover:border-indigo-500/50" },
  { label: "Social Media", icon: Share2, color: "text-pink-500", bg: "bg-pink-500/10", border: "hover:border-pink-500/50" },
  { label: "Digital Strategy", icon: Lightbulb, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "hover:border-emerald-500/50" },
  { label: "Email Marketing", icon: Mail, color: "text-amber-500", bg: "bg-amber-500/10", border: "hover:border-amber-500/50" },
];

const stats = [
  { label: "Clients", value: "70+", icon: Users },
  { label: "Countries", value: "15+", icon: Globe },
  { label: "Projects", value: "100+", icon: FolderCheck },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-background overflow-hidden pt-20 pb-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-50 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-3xl order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Digital Marketing Expert
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-100 tracking-tight">
              Scale your business<br />
              with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">digital marketing</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
              Expert strategies in SEO, Google Ads, Facebook Ads & social media management. Get more customers and grow your revenue.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12 animate-fade-in-up animation-delay-300">
              <Button asChild variant="hero" size="lg" className="shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300">
                <Link to="/contact" className="gap-2">
                  Get a Free Consultation
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 hover:bg-secondary/50">
                <Link to="/services">
                  View Services
                </Link>
              </Button>
            </div>

            {/* Service Pills */}
            <div className="animate-fade-in-up animation-delay-400">
              <p className="text-sm font-medium text-muted-foreground mb-4">Specialized in:</p>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Link
                    key={category.label}
                    to="/services"
                    className={`group inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md ${category.border} hover:bg-secondary/30`}
                  >
                    <div className={`p-1 rounded-full ${category.bg} ${category.color}`}>
                      <category.icon size={12} />
                    </div>
                    <span>{category.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up animation-delay-500 mt-10 lg:mt-0 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[350px] sm:w-[340px] sm:h-[420px] md:w-[400px] md:h-[500px] transition-all duration-500 hover:scale-[1.02]">
              {/* Background Blob */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-purple-500 to-secondary rounded-2xl rotate-6 opacity-20 blur-3xl animate-pulse"></div>

              {/* Image Gradient Border Wrapper */}
              <div className="relative w-full h-full rounded-2xl p-1.5 bg-gradient-to-br from-primary/30 via-white/20 to-primary/10 shadow-2xl backdrop-blur-sm">
                <img
                  src="/faisal.jpg"
                  alt="Faisal Iqbal"
                  className="w-full h-full object-cover rounded-xl shadow-inner bg-muted"
                />
              </div>

              {/* Stats Cards - Floating */}
              <div className="absolute -left-6 top-10 w-32 bg-card/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/10 animate-fade-in-up animation-delay-300 hidden md:block">
                <div className="flex flex-col items-center text-center">
                  <span className="text-2xl font-bold text-primary">5+</span>
                  <span className="text-xs text-muted-foreground font-medium">Years Exp.</span>
                </div>
              </div>

              <div className="absolute -right-6 bottom-20 w-36 bg-card/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/10 animate-fade-in-up animation-delay-400 hidden md:block">
                <div className="flex flex-col items-center text-center">
                  <span className="text-2xl font-bold text-green-500">100+</span>
                  <span className="text-xs text-muted-foreground font-medium">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Banner */}
        <div className="mt-20 pt-8 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider hidden md:block">Trusted by <br />businesses in:</span>
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-secondary/30 p-4 rounded-xl border border-border/50">
                <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center shadow-sm text-primary">
                  <stat.icon size={20} />
                </div>
                <div>
                  <div className="text-2xl font-bold leading-none">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
