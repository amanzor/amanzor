"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Search, FileCheck, HeartHandshake, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Tell Us Your Needs",
    desc: "Fill out our quick quote form or give us a call. We learn about your coverage needs, budget, and situation in minutes.",
  },
  {
    icon: Search,
    step: "02",
    title: "We Shop 50+ Carriers",
    desc: "Our experts compare rates and policies from over 50 top-rated insurance companies to find your best options.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Review Your Options",
    desc: "We present the top matches side-by-side with clear explanations — no jargon, no pressure, just honest guidance.",
  },
  {
    icon: HeartHandshake,
    step: "04",
    title: "Stay Protected",
    desc: "Once enrolled, our team remains your dedicated advocate for renewals, claims, and any coverage questions.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080f1d] to-[#0a1628]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />

      {/* Background number watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-black text-[#c9a84c]/[0.02] leading-none select-none pointer-events-none">
        HOW
      </div>

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
            <span className="text-[#c9a84c] text-sm font-medium">Simple Process</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#f8f9fc] mb-5">
            Coverage in <span className="gradient-text">4 Easy Steps</span>
          </h2>
          <p className="text-[#8892a4] text-lg max-w-xl mx-auto">
            Getting the right insurance has never been simpler. We do the heavy lifting so you don&apos;t have to.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="h-full origin-left"
              style={{
                background: "linear-gradient(90deg, #c9a84c 0%, #e8c96a 50%, #c9a84c 100%)",
                opacity: 0.3,
              }}
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="relative group text-center"
                >
                  {/* Arrow between steps (desktop) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-14 z-10">
                      <ArrowRight className="w-5 h-5 text-[#c9a84c]/40" />
                    </div>
                  )}

                  {/* Icon circle */}
                  <div className="relative inline-flex mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-28 h-28 rounded-3xl bg-gradient-to-br from-[#112240] to-[#1a3a6b] border border-[#c9a84c]/20 flex items-center justify-center group-hover:border-[#c9a84c]/50 transition-colors duration-300 shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
                    >
                      <Icon className="w-10 h-10 text-[#c9a84c]" />
                    </motion.div>
                    {/* Step number badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e8c96a] flex items-center justify-center text-[#0a1628] text-xs font-black shadow-lg">
                      {i + 1}
                    </div>
                    {/* Glow on hover */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(201,168,76,0.2)]" />
                  </div>

                  {/* Step number text */}
                  <div className="text-[#c9a84c]/30 text-xs font-black tracking-[0.3em] uppercase mb-2">
                    Step {step.step}
                  </div>

                  <h3 className="text-lg font-bold text-[#f8f9fc] mb-3 group-hover:text-[#c9a84c] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#8892a4] text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(201,168,76,0.35)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#c9a84c] to-[#e8c96a] text-[#0a1628] font-bold rounded-xl text-base gold-glow"
          >
            Start Your Quote Today
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
