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
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-white">
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
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex-shrink-0 bg-white text-brand-orange font-bold px-8 py-3.5 rounded-full hover:bg-brand-cream transition-colors duration-200 shadow-lg"
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
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold tracking-wide">
                Bra<span className="text-brand-orange">sato</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Authentic Italian cuisine crafted with passion, tradition, and the
              finest seasonal ingredients. A dining experience like no other.
              Welcome to Brasato.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm tracking-wider uppercase text-white/80 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-brand-orange transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Bella Cucina. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Crafted with ❤️ and a pinch of Italian soul — Brasato.
          </p>
        </div>
      </div>
    </footer>
  );
}
