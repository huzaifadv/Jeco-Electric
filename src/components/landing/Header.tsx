import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-primary-foreground/10 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/ble-logo.png" alt="Bright Light Electric Logo" className="h-9 md:h-10 w-auto" />
            <div className="leading-none">
              <span className="text-base md:text-lg font-extrabold text-primary-foreground tracking-wide">BRIGHT LIGHT</span>
              <span className="text-base md:text-lg font-extrabold text-accent tracking-wide ml-1">ELECTRIC</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-primary-foreground/5 ${
                  location.pathname === link.href
                    ? "text-accent"
                    : "text-primary-foreground/70 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
            >
              <a href="tel:9182457555">
                <Phone className="mr-2 h-4 w-4" />
                (918) 245-7555
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
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.href
                    ? "text-accent bg-primary-foreground/5"
                    : "text-primary-foreground/70 hover:text-accent hover:bg-primary-foreground/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
                <a href="tel:9182457555">
                  <Phone className="mr-2 h-4 w-4" />
                  (918) 245-7555
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
