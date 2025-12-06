import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Calendar, Facebook, Linkedin } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@faisaliqbal.com", href: "mailto:hello@faisaliqbal.com" },
  { icon: Phone, label: "Phone", value: "+880 1951 336251", href: "tel:+8801951336251" },
  { icon: MapPin, label: "Location", value: "Rajshahi, Bangladesh", href: null },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/Fayshal27/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mdfaisaliqbal" },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Let's Talk About Your{" "}
            <span className="gradient-text">Marketing Goals</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Ready to take your business to the next level? Whether you need SEO, paid ads, or help with social media, let's find the right solution together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="animate-fade-in-up">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="font-medium hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-medium">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-10">
                <div className="text-sm text-muted-foreground mb-4">Serving clients worldwide 🌍</div>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-accent/50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar size={20} className="text-primary" />
                  <span className="font-semibold">Book a Free Session</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Schedule a 30-minute call to discuss your marketing needs.
                </p>
                <Button variant="outline" className="w-full">
                  Schedule a Call
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up animation-delay-200">
              <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card">
                <h2 className="font-display text-2xl font-bold mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="rounded-xl h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="rounded-xl h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="text-sm font-medium mb-2 block">
                      What service are you interested in?
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="google-ads">Google Ads Management</option>
                      <option value="meta-ads">Facebook & Instagram Ads</option>
                      <option value="social-media">Social Media Management</option>
                      <option value="strategy">Full Digital Strategy</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      required
                      className="rounded-xl min-h-[150px] resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
