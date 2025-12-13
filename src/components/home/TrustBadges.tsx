import { Award, CheckCircle2, Shield, Star } from "lucide-react";

const badges = [
  {
    icon: Award,
    title: "Google Certified",
    description: "Official Google Partner",
  },
  {
    icon: Shield,
    title: "Meta Certified",
    description: "Facebook Advertising",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "On Fiverr & Upwork",
  },
  {
    icon: CheckCircle2,
    title: "Results Driven",
    description: "Data-Backed Strategies",
  },
];

export function TrustBadges() {
  return (
    <section className="pt-6 pb-16 border-b border-border bg-gradient-to-b from-background to-secondary/20">
      <div className="container-custom px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20 group animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                <badge.icon size={24} className="text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1">{badge.title}</h3>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
