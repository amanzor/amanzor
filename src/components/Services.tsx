"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { Car, Home, Building2, ArrowRight, Shield, Star, Check, CarFront } from "lucide-react";

// 3-D tilt hook
function useTilt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return { rotateX, rotateY, handleMove, handleLeave };
}

const services = [
  {
    icon: Car,
    title: "Auto Insurance",
    tagline: "Drive with confidence",
    description: "We shop 15+ top Florida carriers to find you the best liability, collision, and comprehensive rates — saving you money without sacrificing protection.",
    features: ["Liability & Collision", "Comprehensive Coverage", "Uninsured Motorist", "Roadside Assistance", "Rental Reimbursement"],
    gradient: "from-[#0d1e35] to-[#112240]",
    glowColor: "rgba(26,58,107,0.5)",
    featured: false,
  },
  {
    icon: Home,
    title: "Home Insurance",
    tagline: "Protect your sanctuary",
    description: "Safeguard your Florida home, belongings, and liability with the right policy. We match your property to the ideal carrier at the best value.",
    features: ["Dwelling Coverage", "Personal Property", "Liability Protection", "Loss of Use", "Hurricane & Flood Add-ons"],
    gradient: "from-[#1a2e18] to-[#112240]",
    glowColor: "rgba(201,168,76,0.25)",
    featured: true,
  },
  {
    icon: Building2,
    title: "Commercial Insurance",
    tagline: "Business built on trust",
    description: "Custom coverage for every Florida business. From general liability to workers' comp, we build comprehensive packages that protect your enterprise.",
    features: ["General Liability", "Commercial Property", "Workers' Compensation", "Business Interruption", "Cyber Liability"],
    gradient: "from-[#0d1e35] to-[#112240]",
    glowColor: "rgba(26,58,107,0.5)",
    featured: false,
  },
  {
    icon: CarFront,
    title: "Auto Dealer Services",
    tagline: "Built for dealerships",
    description: "We place licensed agents inside dealerships to streamline the sales process, increase product penetration, and drive customer retention for car dealers.",
    features: ["In-Dealership Agent Placement", "F&I Product Integration", "Customer Retention Programs", "Dealer-Branded Policies", "Same-Day Coverage"],
    gradient: "from-[#0d1e35] to-[#112240]",
    glowColor: "rgba(26,58,107,0.5)",
    featured: false,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;
  const tilt = useTilt();

  return (
    <motion.div
      variants={cardVariants}
      style={{ perspective: 1000 }}
      className="relative"
    >
      <motion.div
        style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={tilt.handleMove}
        onMouseLeave={tilt.handleLeave}
        className={`relative group rounded-3xl border overflow-hidden cursor-default h-full ${
          service.featured
            ? "border-[#c9a84c]/50"
            : "border-[#1a3a6b]/50 hover:border-[#c9a84c]/30"
        } transition-colors duration-500`}
        whileHover={{ boxShadow: `0 30px 80px ${service.glowColor}` }}
      >
        {/* Featured glow ring */}
        {service.featured && (
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-[#c9a84c]/40 via-[#c9a84c]/10 to-transparent pointer-events-none" />
        )}

        {/* Card background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
        <div className="absolute inset-0 bg-[#0a1628]/50" />

        {/* Animated shimmer on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: "linear-gradient(135deg, transparent 40%, rgba(201,168,76,0.06) 50%, transparent 60%)",
            backgroundSize: "200% 200%",
          }}
          animate={{ backgroundPosition: ["200% 200%", "0% 0%"] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        />

        {/* Popular badge */}
        {service.featured && (
          <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-gradient-to-r from-[#c9a84c] to-[#e8c96a] text-[#0a1628] text-xs font-black px-3 py-1.5 rounded-full z-20 shadow-lg">
            <Star className="w-3 h-3 fill-current" />
            Most Popular
          </div>
        )}

        <div className="relative z-10 p-8 flex flex-col h-full">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.12, rotate: -5 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c9a84c] to-[#e8c96a] flex items-center justify-center mb-6 shadow-[0_8px_30px_rgba(201,168,76,0.35)]"
          >
            <Icon className="w-8 h-8 text-[#0a1628]" strokeWidth={2} />
          </motion.div>

          {/* Tagline */}
          <p className="text-[#c9a84c] text-xs font-black uppercase tracking-[0.2em] mb-2">{service.tagline}</p>
          <h3 className="text-2xl font-black text-[#f8f9fc] mb-4">{service.title}</h3>
          <p className="text-[#8892a4] text-sm leading-relaxed mb-7">{service.description}</p>

          {/* Feature list */}
          <ul className="space-y-2.5 mb-8 flex-1">
            {service.features.map((feat, fi) => (
              <motion.li
                key={feat}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + fi * 0.08 }}
                className="flex items-center gap-2.5 text-sm text-[#f8f9fc]/80"
              >
                <div className="w-4 h-4 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#c9a84c]" />
                </div>
                {feat}
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <motion.a
            href="#contact"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-[#c9a84c] font-bold text-sm group/cta border-t border-[#c9a84c]/10 pt-6 mt-auto"
          >
            Get a Quote
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#070e1a] via-[#0a1628] to-[#070e1a]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#c9a84c]/[0.04] -translate-x-1/2" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#c9a84c]/[0.06] -translate-x-1/2" />

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
            <Shield className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-[#c9a84c] text-sm font-semibold tracking-wide">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-[#f8f9fc] mb-5 leading-tight">
            Coverage for Every{" "}
            <span className="gradient-text">Chapter of Life</span>
          </h2>
          <p className="text-[#8892a4] text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re protecting your car, home, or business — we deliver
            expert guidance and competitive rates from the industry&apos;s best carriers.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
