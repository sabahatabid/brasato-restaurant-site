"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, UtensilsCrossed } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["home", "menu", "about", "testimonials", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-brand-brown/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="#home"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <UtensilsCrossed className="w-5 h-5 text-white" />
            </div>
            <span
              className={`font-display text-xl font-bold tracking-wide transition-colors duration-300 ${
                scrolled ? "text-brand-brown" : "text-white"
              }`}
            >
              Bra<span className="text-brand-orange">sato</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${
                    scrolled
                      ? isActive
                        ? "text-brand-orange"
                        : "text-gray-700 hover:text-brand-orange"
                      : isActive
                      ? "text-brand-orange"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-brand-orange transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#contact")}
              className="hidden md:inline-flex items-center gap-2 bg-brand-orange text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-orange-dark transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/30 hover:-translate-y-0.5"
            >
              Book a Table
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/98 backdrop-blur-md rounded-2xl mx-2 mb-4 p-4 shadow-xl border border-brand-cream-dark">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-brand-orange/10 text-brand-orange"
                      : "text-gray-700 hover:bg-brand-cream hover:text-brand-orange"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick("#contact")}
              className="w-full mt-2 bg-brand-orange text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-brand-orange-dark transition-colors duration-200"
            >
              Book a Table
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
