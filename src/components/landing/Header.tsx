import { useState } from "react";
import { Phone, Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-primary-foreground/10 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Zap className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="leading-tight">
              <span className="text-lg md:text-xl font-extrabold text-primary-foreground tracking-tight">
                JACO ELECTRIC
              </span>
              <div className="text-[10px] text-primary-foreground/50 tracking-wider">
                OK Lic #094652
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors rounded-md hover:bg-primary-foreground/5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Phone + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
            >
              <a href="tel:9188941622">
                <Phone className="mr-2 h-4 w-4" />
                (918) 894-1622
              </a>
            </Button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-primary-foreground/70 hover:text-primary-foreground"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden border-t border-primary-foreground/10 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-primary-foreground/70 hover:text-accent hover:bg-primary-foreground/5 rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                asChild
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
              >
                <a href="tel:9188941622">
                  <Phone className="mr-2 h-4 w-4" />
                  (918) 894-1622
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
