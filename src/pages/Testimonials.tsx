import { Layout } from "@/components/layout/Layout";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "gazam_khan",
    country: "Bangladesh",
    flag: "🇧🇩",
    rating: 5,
    review: "Excellent work! The seller professionally organized my YouTube channel, updated the branding, handled SEO, and delivered everything perfectly. Highly recommended!",
    budget: "Up to $50",
    duration: "1 day",
  },
  {
    name: "scottcervine",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    review: "Excellent work! Very effective. I'll be back!",
    budget: "$50–$100",
    duration: "4 weeks",
  },
  {
    name: "dolce86",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    review: "Absolute pleasure to work with! Transparent, dedicated, easy to communicate with. You're not 5 stars — you're 10/10. Thank you for helping bring my vision to life.",
    budget: "$100–$200",
    duration: "3 weeks",
  },
  {
    name: "mattchase88",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    review: "Great work delivered daily!",
    budget: "$100–$200",
    duration: "4 weeks",
    repeat: true,
  },
  {
    name: "gcpizzainc",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    review: "It has been amazing working with Faisal for 5 months! Excellent artwork, very responsive, and incredibly adaptive to our changing needs.",
    budget: "$50–$100",
    duration: "5 months",
    repeat: true,
  },
  {
    name: "lennardsteeman",
    country: "Netherlands",
    flag: "🇳🇱",
    rating: 5,
    review: "Great job, saved me a lot of time.",
    budget: "$50–$100",
    duration: "2 weeks",
  },
  {
    name: "saltaire",
    country: "Austria",
    flag: "🇦🇹",
    rating: 5,
    review: "Excellent communication, precise work. Highly recommended. Once again, professional work! Very good communication. Problem solver.",
    budget: "$100–$200",
    duration: "4 weeks",
    repeat: true,
  },
  {
    name: "michelleyreese",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    review: "Very professional and talented creator — extremely pleased with the results.",
    budget: "$50–$100",
    duration: "2 weeks",
    repeat: true,
  },
  {
    name: "atuljaiswal1246",
    country: "India",
    flag: "🇮🇳",
    rating: 5,
    review: "I gave him a custom order and asked for 24-hour delivery. He took on the challenge and completed it like a pro. He took feedback well and did a great job!",
    budget: "Up to $50",
    duration: "2 days",
  },
  {
    name: "asimaliloski",
    country: "France",
    flag: "🇫🇷",
    rating: 5,
    review: "Faisal does exactly what you ask. Clear instructions lead to great results. Thanks!",
    budget: "$50–$100",
    duration: "1 week",
  },
  {
    name: "aim2plezu704",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    review: "Fast and great communication — thanks!",
    budget: "Up to $50",
    duration: "3 days",
  },
  {
    name: "eegordon",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    review: "We'll definitely do more work — Twitter and Instagram next!",
    budget: "$100–$200",
    duration: "6 weeks",
    repeat: true,
  },
];

export default function Testimonials() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            What My Clients{" "}
            <span className="gradient-text">Say</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Real reviews from real clients. See why businesses trust me with their digital marketing.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="bg-card rounded-3xl p-6 md:p-8 card-hover animate-fade-in-up"
                style={{ animationDelay: `${(index % 6) * 100}ms` }}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote size={32} className="text-primary/20" />
                </div>

                {/* Review */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.review}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < testimonial.rating ? "fill-primary text-primary" : "text-muted"}
                    />
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-lg">
                      {testimonial.flag}
                    </div>
                    <div>
                      <div className="font-medium text-sm flex items-center gap-2">
                        {testimonial.name}
                        {testimonial.repeat && (
                          <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                            Repeat Client
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">{testimonial.country}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">{testimonial.budget}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Happy Clients" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "15+", label: "Countries" },
              { value: "100+", label: "Projects" },
            ].map((stat, index) => (
              <div key={stat.label} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
