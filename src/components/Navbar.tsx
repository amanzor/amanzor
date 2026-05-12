"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.4 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 z-[60] origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #c9a84c, #e8c96a)",
        }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0.5 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#070e1a]/95 backdrop-blur-xl shadow-[0_4px_40px_rgba(0,0,0,0.5)] border-b border-[#c9a84c]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              className="w-10 h-10 bg-gradient-to-br from-[#c9a84c] to-[#e8c96a] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(201,168,76,0.3)]"
            >
              <Shield className="w-5 h-5 text-[#0a1628]" strokeWidth={2.5} />
            </motion.div>
            <div className="leading-tight">
              <span className="block text-sm font-black text-[#f8f9fc] tracking-wider uppercase">Universal</span>
              <span className="block text-[10px] text-[#c9a84c] tracking-[0.25em] uppercase">Insurance Broker</span>
            </div>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.2 }}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    isActive ? "text-[#c9a84c]" : "text-[#8892a4] hover:text-[#f8f9fc]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#c9a84c]/10 rounded-lg border border-[#c9a84c]/20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </motion.a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="tel:+1-800-000-0000"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-sm text-[#8892a4] hover:text-[#c9a84c] transition-colors font-medium"
            >
              (800) 000-0000
            </motion.a>
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(201,168,76,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 bg-gradient-to-r from-[#c9a84c] to-[#e8c96a] text-[#0a1628] text-sm font-black rounded-xl"
            >
              Get a Quote
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-10 h-10 rounded-xl border border-[#1a3a6b] flex items-center justify-center text-[#c9a84c] hover:border-[#c9a84c]/40 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[84px] left-4 right-4 z-40 bg-[#070e1a]/98 backdrop-blur-2xl rounded-2xl border border-[#c9a84c]/15 px-6 py-6 flex flex-col gap-2 lg:hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 text-[#f8f9fc] text-base font-semibold py-3 border-b border-[#1a3a6b]/40 last:border-0 hover:text-[#c9a84c] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/40" />
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-3 text-center px-5 py-3.5 bg-gradient-to-r from-[#c9a84c] to-[#e8c96a] text-[#0a1628] font-black rounded-xl text-sm"
            >
              Get a Free Quote →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
