"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/data";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-brand-gold" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(
          ((index % testimonials.length) + testimonials.length) % testimonials.length
        );
        setIsAnimating(false);
      }, 200);
    },
    [isAnimating]
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next]);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 5000);
  };

  const handlePrev = () => { prev(); resetInterval(); };
  const handleNext = () => { next(); resetInterval(); };
  const handleDot = (i: number) => { goTo(i); resetInterval(); };

  const current = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="py-24 bg-brand-brown relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/3 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
      </div>

      {/* Large quote decoration */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-5">
        <Quote className="w-64 h-64 text-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Voices of Our Guests
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            What People Are Saying
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-brand-orange/50" />
            <div className="w-2 h-2 bg-brand-orange rounded-full" />
            <div className="h-px w-16 bg-brand-orange/50" />
          </div>
        </div>

        {/* Featured testimonial (carousel) */}
        <div className="max-w-3xl mx-auto mb-12">
          <div
            className={`bg-white/90 border border-white/20 rounded-3xl p-8 sm:p-12 text-center transition-all duration-200 ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <Quote className="w-10 h-10 text-brand-orange mx-auto mb-6 opacity-80" />

            <p className="text-gray-800 text-lg sm:text-xl leading-relaxed italic mb-8 font-light">
              &quot;{current.feedback}&quot;
            </p>

            <div className="flex flex-col items-center gap-3">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-3 border-brand-orange shadow-lg shadow-brand-orange/30">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-800 text-base">{current.name}</div>
                <div className="text-brand-orange text-sm">{current.role}</div>
                <div className="text-gray-600 text-xs mt-0.5">{current.date}</div>
              </div>
              <StarRating rating={current.rating} />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white hover:border-white/60 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDot(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-8 h-2.5 bg-brand-orange"
                      : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white hover:border-white/60 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mini cards grid — all reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => handleDot(i)}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                i === activeIndex
                  ? "bg-white/90 border-brand-orange/60 shadow-lg shadow-brand-orange/20"
                  : "bg-white/80 border-white/40 hover:bg-white/90 hover:border-white/60"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-gray-800 text-sm truncate">{t.name}</div>
                  <div className="text-gray-600 text-xs truncate">{t.role}</div>
                </div>
                <StarRating rating={t.rating} />
              </div>
              <p className="text-gray-700 text-xs leading-relaxed line-clamp-2">
                &quot;{t.feedback}&quot;
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
