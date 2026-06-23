"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Star } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Small delay so CSS animations feel intentional
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat object-cover transition-opacity duration-[10s] ease-out"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2400&h=1600&fit=crop&q=90')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: loaded ? 1 : 0.8,
        }}
      />

      {/* Multi-layer overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/40 via-transparent to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-brand-red/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange-light text-sm font-medium px-4 py-2 rounded-full mb-8 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Star className="w-4 h-4 fill-brand-orange text-brand-orange" />
          <span>Award-Winning Italian Cuisine Since 1998</span>
          <Star className="w-4 h-4 fill-brand-orange text-brand-orange" />
        </div>

        {/* Headline */}
        <h1
          className={`font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight mb-6 text-shadow transition-all duration-700 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Bra<span className="text-brand-orange relative">sato
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6 Q50 0 100 4 Q150 8 200 2"
                stroke="#E8650A"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.7"
              />
            </svg>
          </span>
        </h1>

        {/* Tagline */}
        <p
          className={`text-xl sm:text-2xl lg:text-3xl text-white/85 font-light tracking-wide mb-4 text-shadow-sm transition-all duration-700 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Delicious Food, Unforgettable Experience
        </p>

        <p
          className={`text-base sm:text-lg text-white/60 max-w-xl mx-auto mb-12 transition-all duration-700 delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Handcrafted recipes passed down through generations, reimagined with
          the finest seasonal ingredients.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={() => scrollTo("menu")}
            className="group relative overflow-hidden bg-brand-orange text-white font-semibold text-base px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-brand-orange/50 transition-all duration-300 hover:-translate-y-1 min-w-[180px]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Menu
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </span>
            <div className="absolute inset-0 bg-brand-orange-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="group bg-white/10 backdrop-blur-sm border-2 border-white/60 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-white hover:text-brand-brown transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl min-w-[180px]"
          >
            <span className="flex items-center justify-center gap-2">
              Book a Table
            </span>
          </button>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 flex flex-wrap items-center justify-center gap-8 transition-all duration-700 delay-600 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "25+", label: "Years of Taste" },
            { value: "4.9★", label: "Average Rating" },
            { value: "50K+", label: "Happy Guests" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-brand-orange font-display">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/60 mt-1 tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("menu")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Explore</span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
}
