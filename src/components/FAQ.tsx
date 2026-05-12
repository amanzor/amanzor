"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How is an insurance broker different from an insurance agent?",
    a: "An insurance agent represents one company and sells only their products. As an independent broker, we work for YOU — not any single carrier. We shop 50+ top-rated companies to find you the best coverage at the best price with zero bias.",
  },
  {
    q: "How much does it cost to use Universal Insurance Broker?",
    a: "Nothing. Our services are completely free to you. We're compensated by the insurance carriers when you purchase a policy, so there's no fee to shop, compare, or get advice. You get expert guidance at no cost.",
  },
  {
    q: "How quickly can I get a quote?",
    a: "Most quotes are ready within 24 hours. For straightforward auto or home policies, we can often get you options same-day. Commercial policies may take a little longer depending on the complexity of your business.",
  },
  {
    q: "Can you help if I already have insurance and just want to compare?",
    a: "Absolutely. We recommend reviewing your coverage every year. We'll analyze your current policy, identify any gaps or overpayments, and show you what's available — with zero pressure to switch unless it makes financial sense for you.",
  },
  {
    q: "What types of insurance do you offer?",
    a: "We specialize in Auto, Home & Property, and Commercial insurance. Within those categories we cover liability, collision, comprehensive, dwelling, personal property, general liability, workers' compensation, cyber liability, business interruption, and more.",
  },
  {
    q: "What if I need to file a claim?",
    a: "We're your advocate throughout the entire claims process. Call us first and we'll guide you through what to document, how to file, and what to expect. We work directly with the carrier on your behalf to ensure your claim is handled fairly and quickly.",
  },
  {
    q: "Do you serve clients outside my state?",
    a: "Yes — we're licensed to operate nationwide. Whether you're in California, Texas, Florida, New York, or anywhere else in the US, our team can find you the right coverage from carriers approved in your state.",
  },
  {
    q: "How do I know I'm getting the best rate?",
    a: "We run your information through 50+ carriers simultaneously and present the top matches side-by-side. You see the actual options, not a curated selection. Our only goal is finding you the right coverage at the right price — that's what keeps clients coming back for 20+ years.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
        open ? "border-[#c9a84c]/40 bg-[#112240]" : "border-[#1a3a6b]/50 bg-[#0d1e35] hover:border-[#c9a84c]/20"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
      >
        <span className={`text-base font-semibold leading-snug transition-colors duration-200 ${open ? "text-[#c9a84c]" : "text-[#f8f9fc] group-hover:text-[#c9a84c]"}`}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-200 ${
            open ? "border-[#c9a84c] bg-[#c9a84c]/10" : "border-[#1a3a6b] group-hover:border-[#c9a84c]/40"
          }`}
        >
          {open
            ? <Minus className="w-3.5 h-3.5 text-[#c9a84c]" />
            : <Plus className="w-3.5 h-3.5 text-[#8892a4] group-hover:text-[#c9a84c]" />
          }
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-5">
              <div className="h-px bg-[#c9a84c]/10 mb-4" />
              <p className="text-[#8892a4] text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080f1d] to-[#0a1628]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />

      {/* Decorative orb */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c] blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full mb-5">
            <HelpCircle className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-[#c9a84c] text-sm font-semibold tracking-wide">FAQ</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-[#f8f9fc] mb-5 leading-tight">
            Questions We Get <span className="gradient-text">All the Time</span>
          </h2>
          <p className="text-[#8892a4] text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need to know before getting started. Still have questions? Call us — we&apos;re real people.
          </p>
        </motion.div>

        {/* Accordion */}
        <div ref={ref} className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center bg-gradient-to-br from-[#112240] to-[#0d1e35] border border-[#c9a84c]/20 rounded-3xl p-10"
        >
          <p className="text-[#f8f9fc] text-xl font-bold mb-2">Still have questions?</p>
          <p className="text-[#8892a4] mb-7">Our team answers the phone — no bots, no hold music.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="tel:+18000000000"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201,168,76,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-gradient-to-r from-[#c9a84c] to-[#e8c96a] text-[#0a1628] font-black rounded-xl text-sm"
            >
              Call (800) 000-0000
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 border border-[#c9a84c]/30 hover:border-[#c9a84c] text-[#f8f9fc] font-semibold rounded-xl text-sm transition-colors duration-200"
            >
              Send a Message
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
