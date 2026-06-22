"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Award, Heart, Leaf, Users } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Farm-to-Table Freshness",
    description:
      "We source our produce daily from local farms and trusted artisan suppliers.",
  },
  {
    icon: Heart,
    title: "Cooked with Passion",
    description:
      "Every plate is a reflection of our chefs&apos; deep love for authentic, soulful cooking.",
  },
  {
    icon: Award,
    title: "Award-Winning Quality",
    description:
      "Recognised by top food critics and rated among the city&apos;s finest dining experiences.",
  },
  {
    icon: Users,
    title: "Warm Hospitality",
    description:
      "We treat every guest as family — because that is what great dining is all about.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function About() {
  const { ref: textRef, inView: textInView } = useInView();
  const { ref: imageRef, inView: imageInView } = useInView();

  return (
    <section id="about" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-40 h-40 border-2 border-brand-orange/10 rounded-full" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-60 h-60 border-2 border-brand-orange/10 rounded-full" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/3 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Our Story
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-brown mb-4">
            More Than Just a Restaurant
          </h2>
          <div className="flex items-center justify-center gap-2" aria-hidden="true">
            <div className="h-px w-16 bg-brand-orange/30" />
            <div className="w-2 h-2 bg-brand-orange rounded-full" />
            <div className="h-px w-16 bg-brand-orange/30" />
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 ${
              imageInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-2xl shadow-brand-brown/20">
              <Image
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=600&fit=crop"
                alt="Brasato restaurant dining room — warm, elegant interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/30 to-transparent" aria-hidden="true" />
            </div>

            {/* Floating accent image */}
            <div className="absolute -bottom-8 -right-8 w-44 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop"
                alt="Brasato chef carefully preparing a dish in the kitchen"
                fill
                className="object-cover"
                sizes="176px"
              />
            </div>

            {/* Years badge */}
            <div
              className="absolute -top-6 -left-6 hidden sm:flex w-28 h-28 bg-brand-orange rounded-full items-center justify-center shadow-xl shadow-brand-orange/30 flex-col"
              aria-label="25 years of excellence"
            >
              <span className="text-white font-bold text-2xl font-display leading-none">25</span>
              <span className="text-white/90 text-xs font-medium">years of</span>
              <span className="text-white/90 text-xs font-medium">excellence</span>
            </div>
          </div>

          {/* Text side */}
          <div
            ref={textRef}
            className={`transition-all duration-1000 delay-200 ${
              textInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h3 className="font-display text-3xl font-bold text-brand-brown mb-6 leading-tight">
              A Legacy Born in the{" "}
              <span className="text-brand-orange">Heart of Karachi</span>
            </h3>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Brasato was born in 1998 from a simple but powerful idea — that the
                best meals are the ones shared with people you love, around a table
                filled with food made from the heart.
              </p>
              <p>
                Our founder, Chef Marco Rossetti, grew up watching his grandmother
                transform humble ingredients into extraordinary dishes. He carried
                those lessons — and her handwritten recipe book — all the way to
                Karachi, where he built a dining room that feels like home.
              </p>
              <p>
                Today, Brasato sources the finest seasonal produce, works with
                trusted local suppliers, and honours those original recipes while
                weaving in contemporary technique. Every dish tells a story.
              </p>
            </div>

            {/* Values grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((val, i) => (
                <div
                  key={val.title}
                  className={`flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-brand-cream-dark hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${
                    textInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center">
                    <val.icon className="w-5 h-5 text-brand-orange" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown text-sm mb-1">
                      {val.title}
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
