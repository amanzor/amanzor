"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Car, Home, Building2, ArrowRight, Shield, Star } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Auto Insurance",
    tagline: "Drive with confidence",
    description:
      "Comprehensive auto coverage tailored to your needs. From liability to full collision, we find the best rates across top-rated carriers.",
    features: [
      "Liability & Collision",
      "Comprehensive Coverage",
      "Uninsured Motorist",
      "Roadside Assistance",
    ],
    gradient: "from-[#1a3a6b] to-[#112240]",
    accent: "#c9a84c",
  },
  {
    icon: Home,
    title: "Home Insurance",
    tagline: "Protect your sanctuary",
    description:
      "Safeguard your home and belongings with the right homeowner's policy. We compare top insurers to give you maximum protection at the best value.",
    features: [
      "Dwelling Coverage",
      "Personal Property",
      "Liability Protection",
      "Natural Disaster Add-ons",
    ],
    gradient: "from-[#c9a84c]/20 to-[#112240]",
    accent: "#e8c96a",
    featured: true,
  },
  {
    icon: Building2,
    title: "Commercial Insurance",
    tagline: "Business built on trust",
    description:
      "Protect your business assets, employees, and operations with our commercial lines expertise. Custom solutions for businesses of every size.",
    features: [
      "General Liability",
      "Commercial Property",
      "Workers' Compensation",
      "Business Interruption",
    ],
    gradient: "from-[#1a3a6b] to-[#112240]",
    accent: "#c9a84c",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1e35] to-[#0a1628]" />

      {/* Section decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full mb-5">
            <Shield className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-[#c9a84c] text-sm font-medium tracking-wide">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#f8f9fc] mb-5">
            Coverage for Every{" "}
            <span className="gradient-text">Chapter of Life</span>
          </h2>
          <p className="text-[#8892a4] text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re protecting your car, home, or business — we deliver
            expert guidance and competitive rates from the industry&apos;s best carriers.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative group rounded-3xl border overflow-hidden ${
                  service.featured
                    ? "border-[#c9a84c]/50 shadow-[0_0_40px_rgba(201,168,76,0.15)]"
                    : "border-[#1a3a6b]/60"
                }`}
              >
                {/* Featured badge */}
                {service.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#c9a84c] text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full z-10">
                    <Star className="w-3 h-3 fill-current" />
                    Popular
                  </div>
                )}

                {/* Card background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
                <div className="absolute inset-0 bg-[#112240]/60" />

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#c9a84c]/5 to-transparent" />

                <div className="relative p-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a84c] to-[#e8c96a] flex items-center justify-center mb-6 gold-glow"
                  >
                    <Icon className="w-7 h-7 text-[#0a1628]" />
                  </motion.div>

                  {/* Text */}
                  <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-2">
                    {service.tagline}
                  </p>
                  <h3 className="text-2xl font-bold text-[#f8f9fc] mb-3">{service.title}</h3>
                  <p className="text-[#8892a4] leading-relaxed mb-6 text-sm">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-[#f8f9fc]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.a
                    href="#contact"
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold text-sm group/link"
                  >
                    Get a Quote
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
