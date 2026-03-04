import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/ble-logo.png" alt="Bright Light Electric Logo" className="h-8 w-auto" />
              <div className="leading-none">
                <span className="text-base font-extrabold text-background tracking-wide">BRIGHT LIGHT</span>
                <span className="text-base font-extrabold text-accent tracking-wide ml-1">ELECTRIC</span>
              </div>
            </div>
            <p className="text-background/50 text-sm leading-relaxed">
              Quality electrical solutions since 2017. Serving Sand Springs, Tulsa, and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-background font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block text-sm text-background/50 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-background font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-background/50">
                <MapPin className="h-4 w-4 text-accent shrink-0" />
                1031 W 4th St, Sand Springs, OK 74063
              </div>
              <div className="flex items-center gap-2 text-sm text-background/50">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a href="tel:9182457555" className="hover:text-accent transition-colors">
                  (918) 245-7555
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/50">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a href="mailto:info@brightlightelectric.com" className="hover:text-accent transition-colors">
                  info@brightlightelectric.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Bright Light Electric, LLC
          </p>
          <a href="#" className="text-xs text-background/40 hover:text-accent transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
