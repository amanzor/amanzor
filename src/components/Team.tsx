"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Users } from "lucide-react";

const team = [
  {
    name: "Randy Diaz",
    role: "Chief Operating Officer",
    dept: "Leadership",
    description:
      "Oversees daily operations and drives strategic growth across all three Universal locations. Randy ensures every client receives the same high standard of service — whether in Lehigh Acres, Boca Raton, or Doral.",
    email: "randy@universalinsurancebroker.com",
    initials: "RD",
    color: "from-[#c9a84c] to-[#e8c96a]",
  },
  {
    name: "Alberto Manzor",
    role: "Director of Operations",
    dept: "Operations",
    description:
      "Alberto manages carrier relationships, licensing compliance, and cross-office coordination. With experience at leading Florida agencies, he ensures Universal's team has the tools and partnerships to deliver unbeatable coverage.",
    email: "admin@universalinsurancebroker.com",
    initials: "AM",
    color: "from-[#1a3a6b] to-[#c9a84c]",
  },
  {
    name: "Lazaro Reigosa",
    role: "Commercial Lines Specialist",
    dept: "Commercial",
    description:
      "Lazaro is our go-to expert for business coverage. From general liability to workers' comp and cyber policies, he crafts tailored commercial packages for businesses of every size across Florida.",
    email: "commercial@universalinsurancebroker.com",
    initials: "LR",
    color: "from-[#c9a84c] to-[#1a3a6b]",
  },
  {
    name: "Alianna Mujica",
    role: "Customer Service",
    dept: "Personal Lines",
    description:
      "Alianna is often the first voice clients hear. She handles personal auto and home quotes, policy changes, and renewals with warmth and precision — making insurance feel simple.",
    email: "service@universalinsurancebroker.com",
    initials: "AM",
    color: "from-[#e8c96a] to-[#c9a84c]",
  },
  {
    name: "Amanda Montano",
    role: "Customer Service",
    dept: "Personal Lines",
    description:
      "Amanda supports clients throughout their entire policy lifecycle. From getting a same-day quote to guiding a claim, she's committed to making sure clients always feel taken care of.",
    email: "service@universalinsurancebroker.com",
    initials: "AM",
    color: "from-[#c9a84c] to-[#e8c96a]",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1e35] to-[#0a1628]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full mb-5">
            <Users className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-[#c9a84c] text-sm font-medium">Our Team</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-[#f8f9fc] mb-5">
            Meet the People <span className="gradient-text">Behind Universal</span>
          </h2>
          <p className="text-[#8892a4] text-lg max-w-2xl mx-auto">
            A dedicated team of Florida-licensed professionals committed to finding you the right coverage at the right price.
          </p>
        </motion.div>

        {/* Top row — 3 cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {team.slice(0, 3).map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Bottom row — 2 cards centered */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.slice(3).map((member, i) => (
            <TeamCard key={member.name} member={member} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group bg-[#112240] border border-[#1a3a6b]/60 rounded-3xl p-8 hover:border-[#c9a84c]/40 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
    >
      <div className="relative mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-[#0a1628] text-2xl font-black shadow-lg`}
        >
          {member.initials}
        </motion.div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-[#112240]" />
      </div>

      <span className="inline-block px-3 py-1 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-full text-[#c9a84c] text-xs font-semibold tracking-wide mb-3">
        {member.dept}
      </span>

      <h3 className="text-xl font-black text-[#f8f9fc] mb-1">{member.name}</h3>
      <p className="text-[#c9a84c] text-sm font-medium mb-4">{member.role}</p>
      <p className="text-[#8892a4] text-sm leading-relaxed mb-6">{member.description}</p>

      <div className="flex items-center gap-3 border-t border-[#1a3a6b]/40 pt-5">
        <motion.a
          href={`mailto:${member.email}`}
          whileHover={{ scale: 1.1 }}
          className="w-9 h-9 rounded-xl bg-[#1a3a6b] flex items-center justify-center hover:bg-[#c9a84c]/20 transition-colors"
        >
          <Mail className="w-4 h-4 text-[#c9a84c]" />
        </motion.a>
        <motion.a
          href="tel:+12392042208"
          whileHover={{ scale: 1.1 }}
          className="w-9 h-9 rounded-xl bg-[#1a3a6b] flex items-center justify-center hover:bg-[#c9a84c]/20 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#c9a84c]" />
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ x: 2 }}
          className="ml-auto text-sm text-[#c9a84c] font-semibold hover:underline"
        >
          Get a Quote →
        </motion.a>
      </div>
    </motion.div>
  );
}
