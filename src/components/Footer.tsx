"use client";

import { motion } from "framer-motion";
import { Shield, Phone, Mail, MapPin, ArrowUpRight, Globe, Share2, Rss, Link2 } from "lucide-react";

const services = [
  { label: "Auto Insurance", href: "#services" },
  { label: "Home Insurance", href: "#services" },
  { label: "Commercial Lines", href: "#services" },
  { label: "Get a Quote", href: "#contact" },
];

const company = [
  { label: "About Us", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { Icon: Globe, href: "#" },
  { Icon: Share2, href: "#" },
  { Icon: Rss, href: "#" },
  { Icon: Link2, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#1a3a6b]/40">
      <div className="absolute inset-0 bg-[#060f1e]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-[#c9a84c] to-[#e8c96a] rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#0a1628]" />
              </div>
              <div>
                <span className="block text-sm font-bold text-[#f8f9fc] tracking-wider uppercase">Universal</span>
                <span className="block text-xs text-[#c9a84c] tracking-widest uppercase">Insurance Broker</span>
              </div>
            </a>
            <p className="text-[#8892a4] text-sm leading-relaxed mb-6">
              Your trusted independent insurance broker — protecting families
              and businesses for over 20 years.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg bg-[#112240] border border-[#1a3a6b]/60 flex items-center justify-center text-[#8892a4] hover:text-[#c9a84c] hover:border-[#c9a84c]/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#f8f9fc] font-semibold mb-5 uppercase text-xs tracking-widest">Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="text-[#8892a4] text-sm hover:text-[#c9a84c] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c9a84c]/40 group-hover:bg-[#c9a84c] transition-colors" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#f8f9fc] font-semibold mb-5 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="text-[#8892a4] text-sm hover:text-[#c9a84c] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c9a84c]/40 group-hover:bg-[#c9a84c] transition-colors" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#f8f9fc] font-semibold mb-5 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+18000000000" className="flex items-start gap-3 text-[#8892a4] hover:text-[#c9a84c] transition-colors group">
                  <Phone className="w-4 h-4 text-[#c9a84c] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm">+1 (800) 000-0000</div>
                    <div className="text-xs text-[#8892a4]/60">Mon–Fri, 8am–6pm</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@universalinsurancebroker.com" className="flex items-start gap-3 text-[#8892a4] hover:text-[#c9a84c] transition-colors">
                  <Mail className="w-4 h-4 text-[#c9a84c] mt-0.5 flex-shrink-0" />
                  <span className="text-sm break-all">info@universalinsurancebroker.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#8892a4]">
                <MapPin className="w-4 h-4 text-[#c9a84c] mt-0.5 flex-shrink-0" />
                <span className="text-sm">Licensed Nationwide, USA</span>
              </li>
            </ul>

            {/* Quote CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#c9a84c] to-[#e8c96a] text-[#0a1628] text-sm font-bold rounded-lg"
            >
              Get Free Quote
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a3a6b]/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8892a4] text-sm">
            © {new Date().getFullYear()} Universal Insurance Broker. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Licensing"].map((item) => (
              <a key={item} href="#" className="text-[#8892a4] text-xs hover:text-[#c9a84c] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
