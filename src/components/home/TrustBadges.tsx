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
    <section className="py-12 border-b border-border">
      <div className="container-custom px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="flex items-center gap-3 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                <badge.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{badge.title}</h3>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
