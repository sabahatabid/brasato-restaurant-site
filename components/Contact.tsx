"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "42 Via Roma, Little Italy District, New York, NY 10013",
    href: "https://maps.google.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (212) 555-0189",
    href: "tel:+12125550189",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@bellacucina.com",
    href: "mailto:hello@bellacucina.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Thu 12pm–10pm · Fri–Sun 11am–11pm",
    href: null,
  },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  date: string;
  guests: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "2",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email address";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = (field: keyof FormState) =>
    `w-full bg-white border rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange ${
      errors[field]
        ? "border-red-400 bg-red-50"
        : "border-brand-cream-dark hover:border-brand-orange/40"
    }`;

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cream rounded-full translate-x-1/2 -translate-y-1/2 opacity-80" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-orange/5 rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-brown mb-4">
            Reserve Your Table
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Whether it's a quiet dinner for two or a celebration for twenty, we're
            ready to make it memorable.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-brand-orange/30" />
            <div className="w-2 h-2 bg-brand-orange rounded-full" />
            <div className="h-px w-16 bg-brand-orange/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-brand-brown rounded-3xl p-8 h-full text-white relative overflow-hidden">
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-orange/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <h3 className="font-display text-2xl font-bold mb-2">
                  Contact Information
                </h3>
                <p className="text-white/60 text-sm mb-8 leading-relaxed">
                  We'd love to hear from you. Reach out and our team will respond
                  within 24 hours.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-brand-orange/20 rounded-xl flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <div className="text-white/50 text-xs uppercase tracking-wider mb-1">
                          {info.label}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white text-sm hover:text-brand-orange transition-colors duration-200 leading-relaxed"
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-white text-sm leading-relaxed">
                            {info.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="mt-8 rounded-2xl overflow-hidden border border-white/10">
                  <iframe
                    title="Bella Cucina location map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9736!2d-74.0060!3d40.7282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzQxLjUiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-16">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h3 className="font-display text-3xl font-bold text-brand-brown mb-3">
                    Reservation Received!
                  </h3>
                  <p className="text-gray-500 text-lg max-w-md mx-auto mb-6">
                    Thank you, {form.name.split(" ")[0]}! We'll confirm your table
                    within 2 hours. We look forward to welcoming you.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", date: "", guests: "2", message: "" });
                    }}
                    className="bg-brand-orange text-white font-semibold px-8 py-3 rounded-full hover:bg-brand-orange-dark transition-colors duration-200"
                  >
                    Make Another Reservation
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Marco Rossi"
                      className={inputClass("name")}
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="marco@example.com"
                      className={inputClass("email")}
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={inputClass("phone")}
                      autoComplete="tel"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className={inputClass("date")}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className={`${inputClass("guests")} cursor-pointer`}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                      <option key={n} value={n}>
                        {n} {Number(n) === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Message / Special Requests <span className="text-brand-orange">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Let us know about any dietary requirements, special occasions, or other requests..."
                    className={`${inputClass("message")} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 bg-brand-orange text-white font-bold text-base py-4 rounded-xl hover:bg-brand-orange-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-orange/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Reservation Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
