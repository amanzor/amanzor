"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a1628]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-[#c9a84c]/10"
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
            <div className="w-10 h-10 bg-gradient-to-br from-[#c9a84c] to-[#e8c96a] rounded-lg flex items-center justify-center gold-glow">
              <Shield className="w-5 h-5 text-[#0a1628]" />
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-bold text-[#f8f9fc] tracking-wider uppercase">Universal</span>
              <span className="block text-xs text-[#c9a84c] tracking-widest uppercase">Insurance Broker</span>
            </div>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="relative text-sm font-medium text-[#8892a4] hover:text-[#f8f9fc] transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c9a84c] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 bg-gradient-to-r from-[#c9a84c] to-[#e8c96a] text-[#0a1628] text-sm font-bold rounded-lg gold-glow hover:shadow-[0_0_20px_rgba(201,168,76,0.5)] transition-shadow duration-300"
            >
              Get a Quote
            </motion.a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-[#c9a84c] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-0 right-0 z-40 bg-[#0a1628]/98 backdrop-blur-lg border-b border-[#c9a84c]/10 px-6 py-6 flex flex-col gap-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#f8f9fc] text-lg font-medium py-2 border-b border-[#112240] hover:text-[#c9a84c] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center px-5 py-3 bg-gradient-to-r from-[#c9a84c] to-[#e8c96a] text-[#0a1628] font-bold rounded-lg"
            >
              Get a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
