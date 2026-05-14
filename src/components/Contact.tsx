"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from "lucide-react";

const locations = [
  {
    city: "Lehigh Acres",
    address: "410 Lee Blvd",
    state: "Lehigh Acres, FL 33936",
    label: "Headquarters",
  },
  {
    city: "Boca Raton",
    address: "3200 N Federal Hwy, Suite 224",
    state: "Boca Raton, FL 33431",
    label: "South Florida",
  },
  {
    city: "Doral",
    address: "2500 NW 79th Ave, Suite 266",
    state: "Doral, FL 33122",
    label: "Miami Area",
  },
];

const insuranceTypes = ["Auto Insurance", "Home / Property", "Commercial", "Auto Dealer Services", "Bundle (Multi-Policy)", "Other"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1e35] to-[#0a1628]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c9a84c] rounded-full blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full mb-5">
            <MessageCircle className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-[#c9a84c] text-sm font-medium">Get in Touch</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-[#f8f9fc] mb-5">
            Get Your Free <span className="gradient-text">Insurance Quote</span>
          </h2>
          <p className="text-[#8892a4] text-lg max-w-xl mx-auto">
            Call us, walk in, or fill out the form. Our team responds within 24 hours.
          </p>
        </motion.div>

        {/* Locations strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid lg:grid-cols-3 gap-4 mb-14"
        >
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#112240] border border-[#1a3a6b]/60 rounded-2xl p-5 hover:border-[#c9a84c]/30 transition-colors duration-300 group"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a84c]/20 transition-colors">
                  <MapPin className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <div>
                  <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-wider block mb-1">{loc.label}</span>
                  <p className="text-[#f8f9fc] font-semibold text-sm">{loc.address}</p>
                  <p className="text-[#8892a4] text-xs">{loc.state}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              {
                icon: Phone,
                label: "Call Us",
                value: "(239) 204-2208",
                sub: "Mon–Fri, 9am–6pm EST",
                href: "tel:+12392042208",
              },
              {
                icon: Mail,
                label: "Email Us",
                value: "admin@universalinsurancebroker.com",
                sub: "We reply within 24 hours",
                href: "mailto:admin@universalinsurancebroker.com",
              },
            ].map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 bg-[#112240] border border-[#1a3a6b]/60 rounded-2xl p-5 hover:border-[#c9a84c]/30 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a84c]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="text-[#8892a4] text-xs uppercase tracking-wider mb-1">{info.label}</div>
                    <div className="text-[#f8f9fc] font-semibold text-sm">{info.value}</div>
                    <div className="text-[#8892a4] text-xs mt-0.5">{info.sub}</div>
                  </div>
                </motion.a>
              );
            })}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-[#c9a84c]/20 to-[#1a3a6b]/20 border border-[#c9a84c]/30 rounded-2xl p-6"
            >
              <h4 className="text-[#f8f9fc] font-bold mb-3">Why Choose Universal?</h4>
              <ul className="space-y-2">
                {[
                  "No-cost consultation",
                  "15+ carrier options",
                  "Same-day quotes",
                  "3 Florida locations",
                  "Bilingual service",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[#8892a4] text-sm">
                    <CheckCircle className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#112240] border border-[#1a3a6b]/60 rounded-3xl p-8 lg:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e8c96a] flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-[#0a1628]" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#f8f9fc] mb-3">Quote Request Sent!</h3>
                  <p className="text-[#8892a4]">
                    Thank you! One of our team members will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#8892a4] text-xs uppercase tracking-wider mb-2">Full Name *</label>
                      <input required type="text" placeholder="John Smith"
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-[#0a1628] border border-[#1a3a6b] rounded-xl px-4 py-3 text-[#f8f9fc] placeholder-[#8892a4]/50 text-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[#8892a4] text-xs uppercase tracking-wider mb-2">Email Address *</label>
                      <input required type="email" placeholder="john@example.com"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-[#0a1628] border border-[#1a3a6b] rounded-xl px-4 py-3 text-[#f8f9fc] placeholder-[#8892a4]/50 text-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#8892a4] text-xs uppercase tracking-wider mb-2">Phone Number</label>
                      <input type="tel" placeholder="+1 (239) 000-0000"
                        value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-[#0a1628] border border-[#1a3a6b] rounded-xl px-4 py-3 text-[#f8f9fc] placeholder-[#8892a4]/50 text-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[#8892a4] text-xs uppercase tracking-wider mb-2">Insurance Type *</label>
                      <select required value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                        className="w-full bg-[#0a1628] border border-[#1a3a6b] rounded-xl px-4 py-3 text-[#f8f9fc] text-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors">
                        <option value="">Select type...</option>
                        {insuranceTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#8892a4] text-xs uppercase tracking-wider mb-2">Tell Us More</label>
                    <textarea rows={4} placeholder="Briefly describe your coverage needs..."
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-[#0a1628] border border-[#1a3a6b] rounded-xl px-4 py-3 text-[#f8f9fc] placeholder-[#8892a4]/50 text-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors resize-none" />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(201,168,76,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#e8c96a] text-[#0a1628] font-black rounded-xl text-base gold-glow"
                  >
                    <Send className="w-5 h-5" />
                    Send Quote Request
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
