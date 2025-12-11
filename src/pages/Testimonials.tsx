import { Layout } from "@/components/layout/Layout";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "gazam_khan",
    country: "Bangladesh",
    code: "bd",
    rating: 5,
    review: "Excellent work! The seller professionally organized my YouTube channel, updated the branding, handled SEO, and delivered everything perfectly. Highly recommended!",
    budget: "$200",
    duration: "1 day",
  },
  {
    name: "scottcervine",
    country: "United States",
    code: "us",
    rating: 5,
    review: "Excellent work! Very effective. I'll be back!",
    budget: "$250–$300",
    duration: "4 weeks",
  },
  {
    name: "dolce86",
    country: "United States",
    code: "us",
    rating: 5,
    review: "Absolute pleasure to work with! Transparent, dedicated, easy to communicate with. You're not 5 stars — you're 10/10. Thank you for helping bring my vision to life.",
    budget: "$300–$400",
    duration: "3 weeks",
  },
  {
    name: "mattchase88",
    country: "United States",
    code: "us",
    rating: 5,
    review: "Great work delivered daily!",
    budget: "$250–$350",
    duration: "4 weeks",
    repeat: true,
  },
  {
    name: "gcpizzainc",
    country: "United States",
    code: "us",
    rating: 5,
    review: "It has been amazing working with Faisal for 5 months! Excellent artwork, very responsive, and incredibly adaptive to our changing needs.",
    budget: "$300–$350",
    duration: "5 months",
    repeat: true,
  },
  {
    name: "lennardsteeman",
    country: "Netherlands",
    code: "nl",
    rating: 5,
    review: "Great job, saved me a lot of time.",
    budget: "$200–$300",
    duration: "2 weeks",
  },
  {
    name: "saltaire",
    country: "Austria",
    code: "at",
    rating: 5,
    review: "Excellent communication, precise work. Highly recommended. Professional work! Very good communication. Problem solver.",
    budget: "$400–$500",
    duration: "4 weeks",
    repeat: true,
  },
  {
    name: "michelleyreese",
    country: "United States",
    code: "us",
    rating: 5,
    review: "Very professional and talented creator — extremely pleased with the results.",
    budget: "$250–$350",
    duration: "2 weeks",
    repeat: true,
  },
  {
    name: "atuljaiswal1246",
    country: "India",
    code: "in",
    rating: 5,
    review: "I gave him a custom order and asked for 24-hour delivery. He took on the challenge and completed it like a pro!",
    budget: "$200",
    duration: "2 days",
  },
  {
    name: "asimaliloski",
    country: "France",
    code: "fr",
    rating: 5,
    review: "Faisal does exactly what you ask. Clear instructions lead to great results. Thanks!",
    budget: "$200–$300",
    duration: "1 week",
  },
  {
    name: "aim2plezu704",
    country: "United States",
    code: "us",
    rating: 5,
    review: "Fast and great communication — thanks!",
    budget: "$200",
    duration: "3 days",
  },
  {
    name: "eegordon",
    country: "United States",
    code: "us",
    rating: 5,
    review: "We'll definitely do more work — Twitter and Instagram next!",
    budget: "$350–$450",
    duration: "6 weeks",
    repeat: true,
  },
];

export default function Testimonials() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-4 md:px-8 border-b border-border">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Client Reviews
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-up animation-delay-100">
            Real reviews from real clients. See why businesses trust me with their digital marketing.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 border-b border-border">
        <div className="container-custom px-4 md:px-8">
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">4.9</span>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">(70+ reviews)</span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">15+</span> countries served
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">100+</span> projects completed
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="p-5 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${(index % 6) * 50}ms` }}
              >
                {/* Rating */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < testimonial.rating ? "fill-primary text-primary" : "text-muted"}
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  "{testimonial.review}"
                </p>

                {/* Client Info */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <img
                      src={`https://flagcdn.com/${testimonial.code}.svg`}
                      alt={testimonial.country}
                      className="w-6 h-auto rounded-sm object-cover"
                    />
                    <div>
                      <div className="text-sm font-medium flex items-center gap-2">
                        {testimonial.name}
                        {testimonial.repeat && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                            Repeat
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">{testimonial.country}</div>
                    </div>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    <div>{testimonial.budget}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
