"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Homeowner",
    location: "California",
    rating: 5,
    text: "Universal Insurance Broker saved me over $800 a year on my home and auto bundle. Their team walked me through every option and made sure I was fully covered. I couldn't be happier!",
    service: "Home & Auto Bundle",
    initials: "SM",
  },
  {
    name: "James T.",
    role: "Small Business Owner",
    location: "Texas",
    rating: 5,
    text: "When my business faced an unexpected liability claim, the team at Universal was there every step of the way. Their commercial coverage saved my company. Truly exceptional service.",
    service: "Commercial Liability",
    initials: "JT",
  },
  {
    name: "Maria L.",
    role: "Family of 4",
    location: "Florida",
    rating: 5,
    text: "Switching to Universal was the best insurance decision I've made. They found us a better auto policy at a fraction of what we were paying. The process was seamless and fast.",
    service: "Auto Insurance",
    initials: "ML",
  },
  {
    name: "Robert K.",
    role: "Real Estate Investor",
    location: "New York",
    rating: 5,
    text: "I have multiple properties and Universal handles all of them. One point of contact, competitive rates across all my policies, and incredible responsiveness. Highly recommend.",
    service: "Property Portfolio",
    initials: "RK",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + total) % total);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#0d1e35]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />

      {/* Background quote decoration */}
      <Quote className="absolute top-20 right-20 w-64 h-64 text-[#c9a84c]/3 hidden lg:block" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full mb-5">
            <MessageSquare className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-[#c9a84c] text-sm font-medium">Client Stories</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#f8f9fc] mb-5">
            Don&apos;t Take Our <span className="gradient-text">Word for It</span>
          </h2>
          <p className="text-[#8892a4] text-lg max-w-xl mx-auto">
            Real stories from real clients who chose Universal Insurance Broker.
          </p>
        </motion.div>

        {/* Main testimonial */}
        <div className="relative min-h-[320px] flex items-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="w-full bg-[#112240] border border-[#c9a84c]/20 rounded-3xl p-10 lg:p-14 shadow-[0_0_60px_rgba(0,0,0,0.4)]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#c9a84c] fill-current" />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-10 h-10 text-[#c9a84c]/30 mb-4" />
              <p className="text-[#f8f9fc] text-xl lg:text-2xl leading-relaxed font-light mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e8c96a] flex items-center justify-center text-[#0a1628] font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[#f8f9fc] font-semibold">{t.name}</div>
                    <div className="text-[#8892a4] text-sm">{t.role} · {t.location}</div>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-full text-[#c9a84c] text-xs font-semibold">
                  {t.service}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-[#c9a84c]" : "w-2 bg-[#1a3a6b] hover:bg-[#c9a84c]/40"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <motion.button
              onClick={() => go(-1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-xl border border-[#1a3a6b] hover:border-[#c9a84c]/50 flex items-center justify-center text-[#8892a4] hover:text-[#c9a84c] transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => go(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-xl border border-[#1a3a6b] hover:border-[#c9a84c]/50 flex items-center justify-center text-[#8892a4] hover:text-[#c9a84c] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
