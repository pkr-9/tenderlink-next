"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Added to detect current page
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  // Check if we are on the homepage
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // LOGIC: Use "Solid" style if we are NOT on home OR if we have scrolled
  const useSolidStyle = !isHome || isScrolled;

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Market Gap", href: "/market-gap" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  // Dynamic Styles based on Page & Scroll State
  const textColor = useSolidStyle ? "text-foreground" : "text-white";
  const navLinkColor = useSolidStyle
    ? "text-foreground/80 hover:text-primary"
    : "text-white/90 hover:text-white";
  const logoBorderColor = useSolidStyle
    ? "border-primary/20"
    : "border-white/20";
  const underlineColor = useSolidStyle ? "bg-primary" : "bg-white";

  // Button styles
  const buttonClass = useSolidStyle
    ? "border-primary text-primary hover:bg-primary hover:text-white"
    : "border-white/40 text-primary hover:bg-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        useSolidStyle
          ? "bg-white/95 border-b border-[#1F1E5E]/10 shadow-md backdrop-blur-md py-2" // Solid look
          : "bg-transparent py-4" // Transparent look (Only on Home Top)
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 transition-all duration-300">
          {/* Logo on left */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div
              className={`relative w-10 h-10 rounded-sm overflow-hidden border ${logoBorderColor} transition-transform group-hover:scale-105`}
            >
              <img
                src="/logo.png"
                alt="TenderLink Logo"
                className="w-full h-full object-cover"
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
                className={`text-[11px] font-heading font-medium uppercase tracking-[0.2em] transition-all relative group ${navLinkColor}`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-px transition-all group-hover:w-full ${underlineColor}`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              className={`hidden md:inline-flex transition-all rounded-none uppercase text-[12px] tracking-widest px-6 ${buttonClass}`}
            >
              <Link href="/contact">Start Trial</Link>
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 bg-white border-t border-border animate-slide-up px-6 shadow-xl">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-heading text-xs uppercase tracking-widest text-[#1F1E5E]/80 hover:text-[#1F1E5E] transition-colors py-2 border-b border-border/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full bg-[#1F1E5E] text-white rounded-none uppercase text-[10px] tracking-widest font-bold">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
