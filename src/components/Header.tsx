"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Solid header when scrolled or not on homepage
  const useSolidStyle = !isHome || isScrolled;

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Market Gap", href: "/market-gap" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  /* ===== Dynamic Semantic Classes ===== */

  const textColor = useSolidStyle ? "text-foreground" : "text-white";
  const navLinkColor = useSolidStyle ? "text-foreground" : "text-white";

  const logoBorderColor = useSolidStyle
    ? "border-primary-10"
    : "border-white/20";

  const underlineColor = useSolidStyle ? "bg-primary" : "bg-white";

  const buttonClass = useSolidStyle
    ? "border-primary text-primary bg-primary text-white"
    : "border-white/40 text-primary hover:bg-white hover:text-primary";

  const headerStyle = useSolidStyle
    ? "bg-white/95 border-b border-primary-10 shadow-glow backdrop-blur-md py-2"
    : "bg-transparent py-4";

  /* ===================================== */

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerStyle}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 transition-all duration-300">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div
              className={`
    relative w-11 h-11 
    rounded-xl 
    border ${logoBorderColor}
    bg-primary
    p-[2px]
    shadow-sm
    transition-all duration-300
    group-hover:shadow-md
  `}
            >
              <img
                src="/logo.png"
                alt="TenderLink Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            <span
              className={`font-heading font-bold text-xl uppercase tracking-tighter transition-colors ${textColor}`}
            >
              TenderLink
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[12px] font-heading font-bold uppercase tracking-[0.2em] transition-all relative group ${navLinkColor}`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-px transition-all group-hover:w-full ${underlineColor}`}
                />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              className={`hidden md:inline-flex rounded-xl text-lg font-bold tracking-widest shadow-glow px-6 py-2 transition-all ${buttonClass}`}
            >
              <Link href="/contact">Get Consultation</Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${textColor}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* ===== Mobile Menu ===== */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 bg-surface border-t border-border animate-slide-up px-6 shadow-glow">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-heading text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <Button className="w-full bg-primary text-white rounded-none uppercase text-[10px] tracking-widest font-bold hover:bg-primary-dark">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
