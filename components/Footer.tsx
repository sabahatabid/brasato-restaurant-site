"use client";

import { UtensilsCrossed, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "About Us", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "Dine In", href: "#" },
    { label: "Private Dining", href: "#" },
    { label: "Catering Events", href: "#" },
    { label: "Wine Pairing", href: "#" },
    { label: "Cooking Classes", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
};

const socials = [
  { icon: Instagram, href: "#", label: "Follow Brasato on Instagram" },
  { icon: Facebook, href: "#", label: "Follow Brasato on Facebook" },
  { icon: Twitter, href: "#", label: "Follow Brasato on Twitter" },
  { icon: Youtube, href: "#", label: "Watch Brasato on YouTube" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-brown text-white" aria-label="Site footer">
      {/* Top CTA strip */}
      <div className="bg-brand-orange py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">
              Ready for an Unforgettable Dining Experience?
            </h3>
            <p className="text-white/80 text-sm mt-1">
              Book a table today and let us take care of the rest.
            </p>
          </div>
          <button
            onClick={() => scrollTo("contact")}
            className="flex-shrink-0 bg-white text-brand-orange font-bold px-8 py-3.5 rounded-full hover:bg-brand-cream transition-colors duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-orange"
          >
            Book a Table
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-2 mb-5 group"
              aria-label="Brasato — back to top"
            >
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <UtensilsCrossed className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="font-display text-xl font-bold tracking-wide">
                Brasato
              </span>
            </button>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Premium dining crafted with passion, tradition, and the finest
              seasonal ingredients. An experience like no other — welcome to
              Brasato.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6" aria-label="Social media links">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                >
                  <s.icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <nav key={title} aria-label={title}>
              <h4 className="font-semibold text-sm tracking-wider uppercase text-white/80 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-brand-orange transition-colors duration-200 focus:outline-none focus:text-brand-orange"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Brasato. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Crafted with passion — Gulshan-e-Iqbal, Karachi, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
