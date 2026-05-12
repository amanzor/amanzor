"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, Shield } from "lucide-react";

const floatingBadges = [
  { label: "20+ Years Experience", delay: 0.8 },
  { label: "500+ Clients Protected", delay: 1.0 },
  { label: "A+ Rated Carriers", delay: 1.2 },
];

const trustPoints = [
  "Auto Insurance",
  "Home & Property",
  "Commercial Coverage",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#112240] to-[#0a1628]" />

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#c9a84c] rounded-full blur-[120px] opacity-[0.12]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-[#1a3a6b] rounded-full blur-[100px]"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
              <span className="text-[#c9a84c] text-sm font-medium tracking-wide">
                Trusted Insurance Brokerage
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-5xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6"
            >
              <span className="text-[#f8f9fc]">Protect What</span>
              <br />
              <span className="gradient-text">Matters Most</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#8892a4] text-lg lg:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Universal Insurance Broker delivers tailored coverage solutions
              across Auto, Home, and Commercial lines — backed by decades of
              expertise and top-rated carriers.
            </motion.p>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                  <span className="text-[#f8f9fc] text-sm font-medium">{point}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201,168,76,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#e8c96a] text-[#0a1628] font-bold rounded-xl text-base gold-glow transition-all"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:+1-800-000-0000"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-4 border border-[#c9a84c]/40 text-[#f8f9fc] font-semibold rounded-xl text-base hover:border-[#c9a84c] hover:bg-[#c9a84c]/5 transition-all"
              >
                <Phone className="w-5 h-5 text-[#c9a84c]" />
                Call Us Now
              </motion.a>
            </motion.div>
          </div>

          {/* Right column — floating stats card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-gradient-to-br from-[#112240] to-[#1a3a6b] border border-[#c9a84c]/20 rounded-3xl p-10 gold-glow"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#c9a84c]/5 to-transparent pointer-events-none" />

              <Shield className="w-14 h-14 text-[#c9a84c] mb-6" />
              <h3 className="text-2xl font-bold text-[#f8f9fc] mb-2">
                Comprehensive Coverage
              </h3>
              <p className="text-[#8892a4] mb-8 leading-relaxed">
                One trusted broker for all your insurance needs. We shop
                multiple carriers to find you the best rates and coverage.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "20+", label: "Years" },
                  { value: "500+", label: "Clients" },
                  { value: "98%", label: "Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-[#8892a4] text-xs mt-1 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating badges */}
            {floatingBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: badge.delay, duration: 0.4 }}
                style={{
                  top: i === 0 ? "-1.5rem" : i === 1 ? "40%" : "auto",
                  bottom: i === 2 ? "-1.5rem" : "auto",
                  right: i === 0 ? "2rem" : "auto",
                  left: i === 1 ? "-2rem" : i === 2 ? "2rem" : "auto",
                }}
                className="absolute bg-[#0a1628] border border-[#c9a84c]/30 rounded-full px-4 py-2 text-xs font-semibold text-[#c9a84c] shadow-lg whitespace-nowrap"
              >
                ✦ {badge.label}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#8892a4] text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-8 bg-gradient-to-b from-[#c9a84c] to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
