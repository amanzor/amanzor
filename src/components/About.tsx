"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect as useReactEffect } from "react";
import { Award, Users, TrendingUp, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: 20, suffix: "+", label: "Years of Experience", color: "#c9a84c" },
  { icon: Users, value: 500, suffix: "+", label: "Clients Protected", color: "#e8c96a" },
  { icon: Award, value: 98, suffix: "%", label: "Client Satisfaction", color: "#c9a84c" },
  { icon: TrendingUp, value: 50, suffix: "+", label: "Carrier Partners", color: "#e8c96a" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });

  useReactEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useReactEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const pillars = [
  {
    title: "Independent Expertise",
    desc: "As an independent broker, we work for you — not the insurance companies. That means unbiased advice and the best options on the market.",
  },
  {
    title: "Personalized Service",
    desc: "Every client gets a dedicated advisor who understands your unique needs and finds coverage that fits your life and budget.",
  },
  {
    title: "Carrier Network",
    desc: "We partner with 50+ top-rated carriers, giving us the leverage to negotiate competitive rates and comprehensive policies.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#0d1e35]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full mb-6">
              <Award className="w-4 h-4 text-[#c9a84c]" />
              <span className="text-[#c9a84c] text-sm font-medium">About Us</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#f8f9fc] leading-tight mb-6">
              Your Trusted Partner in{" "}
              <span className="gradient-text">Insurance Protection</span>
            </h2>

            <p className="text-[#8892a4] text-lg leading-relaxed mb-8">
              Universal Insurance Broker has been serving families and businesses
              for over two decades. We believe that great insurance isn&apos;t just
              about policies — it&apos;s about peace of mind, knowing someone has your
              back when it matters most.
            </p>

            <div className="space-y-6">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e8c96a] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#0a1628] text-xs font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-[#f8f9fc] font-semibold mb-1">{pillar.title}</h4>
                    <p className="text-[#8892a4] text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-[#112240] border border-[#1a3a6b]/60 rounded-2xl p-6 hover:border-[#c9a84c]/30 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-1">
                    {inView ? (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </div>
                  <div className="text-[#8892a4] text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
