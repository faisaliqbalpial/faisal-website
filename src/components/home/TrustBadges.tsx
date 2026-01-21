import { Award, CheckCircle2, Shield, Star, ShieldCheck, Zap } from "lucide-react";

const badges = [
  {
    icon: Award,
    title: "Google Certified",
    description: "Official Google Partner",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Meta Certified",
    description: "Facebook Advertising",
    color: "text-blue-600",
    bg: "bg-blue-600/10",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Top Rated Performance",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Zap,
    title: "Results Driven",
    description: "Data-Backed Strategies",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export function TrustBadges() {
  return (
    <section className="py-12 border-b border-border bg-gradient-to-b from-background to-secondary/10">
      <div className="container-custom px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="flex items-center gap-4 p-5 bg-card/50 backdrop-blur-sm border border-border/60 rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 ${badge.bg} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                <badge.icon size={24} className={`${badge.color}`} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-sm md:text-base mb-0.5 tracking-tight">{badge.title}</h3>
                <p className="text-[11px] md:text-xs text-muted-foreground font-medium uppercase tracking-wider">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
