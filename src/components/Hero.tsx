"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, Shield, Star } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const trustPoints = ["Auto Insurance", "Home & Property", "Commercial Coverage"];

const floatingBadges = [
  { label: "20+ Years Experience", x: "right-4", y: "top-0", delay: 0.8 },
  { label: "A+ Rated Carriers",    x: "-left-8", y: "top-1/3", delay: 1.0 },
  { label: "500+ Clients",         x: "right-8", y: "bottom-4", delay: 1.2 },
];

// Particle dot grid
function ParticleGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 80 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 rounded-full bg-[#c9a84c]"
          style={{
            left: `${(i % 10) * 10 + Math.random() * 8}%`,
            top: `${Math.floor(i / 10) * 12 + Math.random() * 8}%`,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Magnetic button hook
function useMagnet() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.25);
    y.set((e.clientY - cy) * 0.25);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return { sx, sy, handleMove, handleLeave };
}

// Typewriter words cycle
const WORDS = ["Your Family", "Your Business", "Your Future", "Your Assets"];

function TypewriterCycle() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[idx];
    if (!deleting && displayed.length < word.length) {
      const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === word.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % WORDS.length);
    }
  }, [displayed, deleting, idx]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="animate-pulse text-[#c9a84c]">|</span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const magnet = useMagnet();

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Deep layered background */}
      <div className="absolute inset-0 bg-[#070e1a]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1e35] to-[#070e1a]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }} />

      {/* Particle dots */}
      <ParticleGrid />

      {/* Large ambient orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-60 -left-40 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(26,58,107,0.3) 0%, transparent 70%)" }}
      />

      {/* Diagonal light streak */}
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: [0, 0.06, 0], x: ["−100%", "200%"] }}
        transition={{ duration: 3, delay: 1.5, repeat: Infinity, repeatDelay: 8 }}
        className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent transform -rotate-12 scale-y-[20]"
      />

      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── Left ── */}
            <div>
              {/* Trust badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full mb-8 backdrop-blur-sm"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-[#c9a84c] fill-current" />
                  ))}
                </div>
                <span className="text-[#c9a84c] text-sm font-semibold tracking-wide">Trusted by 500+ Clients</span>
              </motion.div>

              {/* Headline with typewriter */}
              <div className="mb-6 overflow-hidden">
                <motion.div
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h1 className="text-5xl lg:text-[72px] font-black leading-[1.0] tracking-tight">
                    <span className="text-[#f8f9fc] block">Protect</span>
                    <span className="block min-h-[1.1em]"><TypewriterCycle /></span>
                  </h1>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[#8892a4] text-lg lg:text-xl leading-relaxed mb-8 max-w-lg"
              >
                Universal Insurance Broker shops <span className="text-[#c9a84c] font-semibold">50+ top carriers</span> to
                find you unbeatable coverage across Auto, Home, and Commercial lines.
              </motion.p>

              {/* Trust checkmarks */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="flex flex-wrap gap-x-6 gap-y-3 mb-10"
              >
                {trustPoints.map((pt, i) => (
                  <motion.div
                    key={pt}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                    <span className="text-[#f8f9fc] text-sm font-medium">{pt}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                {/* Magnetic primary CTA */}
                <motion.a
                  href="#contact"
                  style={{ x: magnet.sx, y: magnet.sy }}
                  onMouseMove={magnet.handleMove}
                  onMouseLeave={magnet.handleLeave}
                  whileTap={{ scale: 0.96 }}
                  className="relative overflow-hidden flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#0a1628] text-base group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#c9a84c] to-[#e8c96a]" />
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-[#e8c96a] to-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.a>

                <motion.a
                  href="tel:+1-800-000-0000"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2.5 px-8 py-4 border border-[#c9a84c]/30 hover:border-[#c9a84c] text-[#f8f9fc] font-semibold rounded-xl text-base hover:bg-[#c9a84c]/5 transition-all duration-300 backdrop-blur-sm"
                >
                  <Phone className="w-4 h-4 text-[#c9a84c]" />
                  Call Us Now
                </motion.a>
              </motion.div>
            </div>

            {/* ── Right — Glassmorphism card ── */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
              style={{ perspective: 1000 }}
            >
              {/* Glow behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/20 to-[#1a3a6b]/20 rounded-3xl blur-3xl scale-110" />

              {/* Main glass card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-3xl overflow-hidden border border-[#c9a84c]/20"
                style={{
                  background: "linear-gradient(135deg, rgba(17,34,64,0.9) 0%, rgba(26,58,107,0.6) 100%)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Top shimmer bar */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent" />

                <div className="p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a84c] to-[#e8c96a] flex items-center justify-center shadow-[0_0_30px_rgba(201,168,76,0.4)]">
                      <Shield className="w-7 h-7 text-[#0a1628]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#f8f9fc]">Universal Coverage</h3>
                      <p className="text-[#c9a84c] text-sm">One broker. All your needs.</p>
                    </div>
                  </div>

                  {/* Coverage bars */}
                  {[
                    { label: "Auto Insurance", pct: 95 },
                    { label: "Home Insurance", pct: 98 },
                    { label: "Commercial Lines", pct: 92 },
                  ].map((item, i) => (
                    <div key={item.label} className="mb-5">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-[#f8f9fc]/80 font-medium">{item.label}</span>
                        <span className="text-[#c9a84c] font-bold">{item.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-[#1a3a6b]/60 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.pct}%` }}
                          transition={{ duration: 1.2, delay: 0.8 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-[#c9a84c] to-[#e8c96a]"
                        />
                      </div>
                    </div>
                  ))}

                  {/* Stats row */}
                  <div className="mt-8 pt-6 border-t border-[#c9a84c]/10 grid grid-cols-3 gap-4">
                    {[{ v: "20+", l: "Years" }, { v: "500+", l: "Clients" }, { v: "98%", l: "Satisfied" }].map((s) => (
                      <div key={s.l} className="text-center">
                        <div className="text-2xl font-black gradient-text">{s.v}</div>
                        <div className="text-[#8892a4] text-xs uppercase tracking-widest mt-0.5">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom shimmer bar */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
              </motion.div>

              {/* Floating badges */}
              {floatingBadges.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, scale: 0.7, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: b.delay, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className={`absolute ${b.x} ${b.y} bg-[#070e1a]/90 border border-[#c9a84c]/40 backdrop-blur-md rounded-full px-4 py-2 text-xs font-bold text-[#c9a84c] shadow-xl whitespace-nowrap cursor-default`}
                >
                  ✦ {b.label}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          >
            <span className="text-[#8892a4]/60 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="w-px h-10 bg-gradient-to-b from-[#c9a84c]/80 to-transparent rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
