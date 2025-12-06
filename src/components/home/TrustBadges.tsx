import { Award, CheckCircle2, Shield, Star } from "lucide-react";

const badges = [
  {
    icon: Award,
    title: "Google Ads Certified",
    description: "Official Google Partner",
  },
  {
    icon: Shield,
    title: "Meta Certified",
    description: "Facebook Advertising Expert",
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
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Trusted by Clients Worldwide
          </h2>
          <p className="text-muted-foreground">
            Certified expertise you can count on
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="group text-center p-6 rounded-2xl bg-card hover:bg-accent/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <badge.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{badge.title}</h3>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
