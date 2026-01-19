import { Link } from "react-router-dom";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/Fayshal27/", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mdfaisaliqbal", label: "LinkedIn" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Main footer content with box design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          {/* Brand Box */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 p-6 rounded-2xl bg-background/5 backdrop-blur-sm border border-background/10 hover:bg-background/10 hover:border-primary/30 transition-all duration-300 group">
            <div className="space-y-4">
              <Link to="/" className="inline-block group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl md:text-3xl font-bold">
                  faisal
                  <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">.</span>
                </h3>
              </Link>
              <p className="text-background/70 text-sm leading-relaxed">
                From Clicks to Customers – I Make It Happen. Helping businesses grow digitally with smart strategies and measurable results.
              </p>
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-background/10 backdrop-blur-sm border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-primary/50"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Box */}
          <div className="p-6 rounded-2xl bg-background/5 backdrop-blur-sm border border-background/10 hover:bg-background/10 hover:border-primary/30 transition-all duration-300">
            <h4 className="text-base font-semibold mb-6 text-background flex items-center gap-2">
              Quick Links
              <span className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200 text-sm group"
                  >
                    <span className="inline-block group-hover:scale-105 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Box */}
          <div className="p-6 rounded-2xl bg-background/5 backdrop-blur-sm border border-background/10 hover:bg-background/10 hover:border-primary/30 transition-all duration-300">
            <h4 className="text-base font-semibold mb-6 text-background flex items-center gap-2">
              Services
              <span className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></span>
            </h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="hover:text-primary hover:translate-x-1 transition-all duration-200 cursor-default">SEO Optimization</li>
              <li className="hover:text-primary hover:translate-x-1 transition-all duration-200 cursor-default">Google Ads Management</li>
              <li className="hover:text-primary hover:translate-x-1 transition-all duration-200 cursor-default">Facebook & Instagram Ads</li>
              <li className="hover:text-primary hover:translate-x-1 transition-all duration-200 cursor-default">Social Media Management</li>
            </ul>
          </div>

          {/* Contact Box */}
          <div className="p-6 rounded-2xl bg-background/5 backdrop-blur-sm border border-background/10 hover:bg-background/10 hover:border-primary/30 transition-all duration-300">
            <h4 className="text-base font-semibold mb-6 text-background flex items-center gap-2">
              Contact
              <span className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></span>
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-background/70 group hover:text-primary transition-colors duration-200">
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                  <Mail size={16} />
                </div>
                <a href="mailto:hello@faisaliqbal.com" className="hover:text-primary transition-colors break-all">
                  hello@faisaliqbal.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70 group hover:text-primary transition-colors duration-200">
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                  <Phone size={16} />
                </div>
                <a href="tel:+8801951336251" className="hover:text-primary transition-colors">
                  +880 1951 336251
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70 group">
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                  <MapPin size={16} />
                </div>
                <span>Rajshahi, Bangladesh<br />Serving clients worldwide 🌍</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with glassmorphic design */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-background/50 text-center md:text-left">
              © 2025 <span className="text-background/70 font-medium">Faisal Iqbal</span> – All rights reserved
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-background/50 hover:text-primary transition-colors relative group"
              >
                Privacy Policy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/terms"
                className="text-background/50 hover:text-primary transition-colors relative group"
              >
                Terms of Use
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
