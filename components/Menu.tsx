"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { menuItems, MenuCategory } from "@/lib/data";
import { ShoppingBag, Flame } from "lucide-react";

const categories: MenuCategory[] = ["Starters", "Main Course", "Desserts", "Drinks"];

const categoryIcons: Record<MenuCategory, string> = {
  Starters: "🥗",
  "Main Course": "🍝",
  Desserts: "🍮",
  Drinks: "🍷",
};

function MenuCard({ item, index }: { item: (typeof menuItems)[0]; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-brand-cream-dark ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        {item.badge && (
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-brand-orange text-white text-xs font-bold px-2.5 py-1 rounded-full">
            <Flame className="w-3 h-3" />
            {item.badge}
          </div>
        )}

        {/* Price tag on image */}
        <div className="absolute bottom-3 right-3 bg-white/95 text-brand-brown font-bold text-sm px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {item.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-lg font-bold text-brand-brown leading-snug group-hover:text-brand-orange transition-colors duration-200">
            {item.name}
          </h3>
          <span className="text-brand-orange font-bold text-base whitespace-nowrap">
            {item.price}
          </span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>

        {/* Order button */}
        <button className="mt-4 w-full flex items-center justify-center gap-2 border-2 border-brand-orange/30 text-brand-orange text-sm font-semibold py-2 rounded-xl hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300">
          <ShoppingBag className="w-4 h-4" />
          Add to Order
        </button>
      </div>
    </div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("Starters");

  const filtered = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cream rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Our Offerings
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-brown mb-4">
            Explore Our Menu
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Every dish is a love letter to Italian culinary tradition, crafted
            with the finest seasonal produce.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-brand-orange/30" />
            <div className="w-2 h-2 bg-brand-orange rounded-full" />
            <div className="h-px w-16 bg-brand-orange/30" />
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/30 scale-105"
                  : "bg-brand-cream text-brand-brown-light hover:bg-brand-cream-dark hover:text-brand-brown border border-brand-cream-dark"
              }`}
            >
              <span className="text-base">{categoryIcons[cat]}</span>
              {cat}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-500 mb-4">
            Interested in a private dining experience or special event?
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 bg-brand-brown text-white font-semibold px-8 py-3.5 rounded-full hover:bg-brand-brown-light transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Make a Reservation
          </button>
        </div>
      </div>
    </section>
  );
}
