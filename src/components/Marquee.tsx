"use client";

import { motion } from "framer-motion";

const carriers = [
  { name: "Progressive",     logo: "https://logo.clearbit.com/progressive.com" },
  { name: "Travelers",       logo: "https://logo.clearbit.com/travelers.com" },
  { name: "Allstate",        logo: "https://logo.clearbit.com/allstate.com" },
  { name: "State Farm",      logo: "https://logo.clearbit.com/statefarm.com" },
  { name: "GEICO",           logo: "https://logo.clearbit.com/geico.com" },
  { name: "Nationwide",      logo: "https://logo.clearbit.com/nationwide.com" },
  { name: "Liberty Mutual",  logo: "https://logo.clearbit.com/libertymutual.com" },
  { name: "Farmers",         logo: "https://logo.clearbit.com/farmers.com" },
  { name: "Hartford",        logo: "https://logo.clearbit.com/thehartford.com" },
  { name: "Citizens",        logo: "https://logo.clearbit.com/citizensfla.com" },
  { name: "Slide Insurance", logo: "https://logo.clearbit.com/slideinsurance.com" },
  { name: "Heritage",        logo: "https://logo.clearbit.com/heritagepci.com" },
  { name: "CNA",             logo: "https://logo.clearbit.com/cna.com" },
  { name: "AIG",             logo: "https://logo.clearbit.com/aig.com" },
  { name: "Bristol West",    logo: "https://logo.clearbit.com/bristolwest.com" },
];

function CarrierItem({ carrier }: { carrier: typeof carriers[0] }) {
  return (
    <div className="flex items-center gap-3 px-8 py-3 mx-4 shrink-0">
      <div className="w-32 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center px-3 overflow-hidden">
        <img
          src={carrier.logo}
          alt={carrier.name}
          className="max-h-7 max-w-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `<span style="color:#c9a84c;font-size:11px;font-weight:700;letter-spacing:0.05em;text-align:center">${carrier.name}</span>`;
            }
          }}
        />
      </div>
    </div>
  );
}

export default function Marquee() {
  const doubled = [...carriers, ...carriers];

  return (
    <section className="relative py-8 overflow-hidden border-y border-[#1a3a6b]/40">
      <div className="absolute inset-0 bg-[#080f1d]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080f1d] via-transparent to-[#080f1d] z-10 pointer-events-none" />

      <div className="relative z-20 flex items-center justify-center mb-5">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
          <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">
            Our Carrier Partners
          </span>
        </motion.div>
      </div>

      <div className="relative z-0 flex overflow-hidden">
        <motion.div
          className="flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((carrier, i) => (
            <CarrierItem key={`${carrier.name}-${i}`} carrier={carrier} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
