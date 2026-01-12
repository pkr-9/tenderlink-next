"use client";

import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const footerLinks = {
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Press Kit", href: "/press-kit" },
    ],
    Services: [
      { name: "Tender Search", href: "/services/tender-alerts" },
      { name: "Bid Support", href: "/services/bid-support" },
      { name: "GeM Registration", href: "/services/gem-registration" },
      { name: "MSME Certification", href: "/services/gem-registration" },
    ],
    Contact: [
      { name: "Contact@tenderinfo.in", href: "mailto:Contact@tenderinfo.in" },
      { name: "+91-7774 911330", href: "tel:+917774911330" },
      { name: "Pune | Delhi", href: "#contact" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "#" },
      { name: "Refund Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-foreground text-white border-t border-white/10 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo on left */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div
                className="
    relative w-11 h-11 
    rounded-xl 
    border
    border-white/20
    bg-primary
    p-[2px]
    shadow-sm
    transition-all duration-300
    group-hover:shadow-md"
              >
                <img
                  src="/logo.png"
                  alt="TenderLink Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <span className="font-heading font-bold text-2xl uppercase tracking-tighter transition-colors text-white">
                TenderLink
              </span>
            </Link>

            <p className="text-lg text-white/60 mb-8 max-w-sm font-light leading-relaxed">
              India's leading AI-powered platform for government, private, and
              NGO tenders. Find, bid, and win with confidence.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:border-white transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-white/70 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading font-bold text-md uppercase tracking-widest text-white/60 mb-6">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-md text-white hover:translate-x-1 transition-all duration-300 inline-block font-light"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40 uppercase tracking-wider font-medium">
            © {new Date().getFullYear()} TenderLink. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-sm text-white/40 uppercase tracking-wider">
              Made in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
