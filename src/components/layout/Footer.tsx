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
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="font-display text-3xl font-bold">
              Faisal<span className="text-primary">.</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              From Clicks to Customers – I Make It Happen. Helping businesses grow digitally with smart strategies and measurable results.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>SEO Optimization</li>
              <li>Google Ads Management</li>
              <li>Facebook & Instagram Ads</li>
              <li>Social Media Management</li>
              <li>Full Digital Strategy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-background/70">
                <Mail size={18} className="mt-0.5 shrink-0" />
                <a href="mailto:hello@faisaliqbal.com" className="hover:text-primary transition-colors">
                  hello@faisaliqbal.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <Phone size={18} className="mt-0.5 shrink-0" />
                <a href="tel:+8801951336251" className="hover:text-primary transition-colors">
                  +880 1951 336251
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>Rajshahi, Bangladesh<br />Serving clients worldwide 🌍</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© 2025 Faisal Iqbal – All rights reserved</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
