"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const carriers = [
  "State Farm", "Allstate", "Progressive", "GEICO", "Travelers",
  "Liberty Mutual", "Nationwide", "Farmers", "USAA", "Hartford",
  "Chubb", "AIG", "Zurich", "CNA", "Markel",
];

function CarrierItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 px-6 py-2 mx-4 shrink-0">
      <div className="w-7 h-7 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center">
        <Shield className="w-3.5 h-3.5 text-[#c9a84c]" />
      </div>
      <span className="text-[#8892a4] text-sm font-semibold tracking-wide whitespace-nowrap hover:text-[#c9a84c] transition-colors duration-200">
        {name}
      </span>
    </div>
  );
}

export default function Marquee() {
  const doubled = [...carriers, ...carriers];

  return (
    <section className="relative py-6 overflow-hidden border-y border-[#1a3a6b]/40">
      {/* Background */}
      <div className="absolute inset-0 bg-[#080f1d]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080f1d] via-transparent to-[#080f1d] z-10 pointer-events-none" />

      {/* Label */}
      <div className="relative z-20 flex items-center justify-center mb-4">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
          <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">
            50+ Trusted Carrier Partners
          </span>
        </motion.div>
      </div>

      {/* Marquee track */}
      <div className="relative z-0 flex overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((name, i) => (
            <CarrierItem key={`${name}-${i}`} name={name} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
