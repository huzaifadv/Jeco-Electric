import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center">
                <Zap className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-lg font-extrabold text-background tracking-tight">
                JACO ELECTRIC
              </span>
            </div>
            <p className="text-background/50 text-sm leading-relaxed">
              Leaders in quality electrical service and construction. Serving Broken Arrow, Tulsa, Bixby, Jenks, and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-background font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Services", "About Us", "Testimonials", "Contact Us"].map((link) => (
                <button
                  key={link}
                  onClick={() =>
                    document
                      .querySelector(`#${link.toLowerCase().replace(/\s/g, "")}` === "#services" ? "#services" : `#${link.toLowerCase().replace(/\s+/g, "")}`)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-sm text-background/50 hover:text-accent transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-background font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-background/50">
                <MapPin className="h-4 w-4 text-accent shrink-0" />
                PO Box 2751, Broken Arrow, OK 74013
              </div>
              <div className="flex items-center gap-2 text-sm text-background/50">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a href="tel:9188941622" className="hover:text-accent transition-colors">(918) 894-1622</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/50">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a href="mailto:tyson.jacobs@jacoelec.com" className="hover:text-accent transition-colors">tyson.jacobs@jacoelec.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Jaco Electric LLC · Oklahoma License #094652
          </p>
          <a href="#" className="text-xs text-background/40 hover:text-accent transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
