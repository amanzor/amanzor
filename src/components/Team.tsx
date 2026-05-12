"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Link2, Users } from "lucide-react";

const team = [
  {
    name: "Customer Service Team",
    role: "Personal Lines Specialist",
    dept: "Customer Service",
    description:
      "Dedicated to helping individuals and families find the perfect auto and home insurance coverage. Always available to answer questions and process claims.",
    email: "service@universalinsurancebroker.com",
    initials: "CS",
    color: "from-[#c9a84c] to-[#e8c96a]",
  },
  {
    name: "Commercial Lines Team",
    role: "Commercial Insurance Expert",
    dept: "Commercial Lines",
    description:
      "Specializing in business insurance solutions, from small startups to large enterprises. Expert in crafting policies that protect every aspect of your business.",
    email: "commercial@universalinsurancebroker.com",
    initials: "CL",
    color: "from-[#1a3a6b] to-[#c9a84c]",
  },
  {
    name: "Claims Support",
    role: "Claims Advocate",
    dept: "Claims",
    description:
      "Your advocate when it matters most. Our claims team works tirelessly to ensure your claims are processed quickly and fairly, giving you peace of mind.",
    email: "claims@universalinsurancebroker.com",
    initials: "CA",
    color: "from-[#c9a84c] to-[#1a3a6b]",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1e35] to-[#0a1628]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />

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
            <Users className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-[#c9a84c] text-sm font-medium">Our Team</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#f8f9fc] mb-5">
            Experts Who <span className="gradient-text">Have Your Back</span>
          </h2>
          <p className="text-[#8892a4] text-lg max-w-2xl mx-auto">
            Our dedicated team of insurance professionals brings decades of combined
            experience to every client relationship.
          </p>
        </motion.div>

        {/* Team cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group bg-[#112240] border border-[#1a3a6b]/60 rounded-3xl p-8 hover:border-[#c9a84c]/40 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-[#0a1628] text-2xl font-bold shadow-lg`}
                >
                  {member.initials}
                </motion.div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-[#112240]" />
              </div>

              {/* Dept badge */}
              <span className="inline-block px-3 py-1 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-full text-[#c9a84c] text-xs font-semibold tracking-wide mb-3">
                {member.dept}
              </span>

              <h3 className="text-xl font-bold text-[#f8f9fc] mb-1">{member.name}</h3>
              <p className="text-[#c9a84c] text-sm font-medium mb-4">{member.role}</p>
              <p className="text-[#8892a4] text-sm leading-relaxed mb-6">{member.description}</p>

              {/* Contact */}
              <div className="flex items-center gap-3">
                <motion.a
                  href={`mailto:${member.email}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl bg-[#1a3a6b] flex items-center justify-center hover:bg-[#c9a84c]/20 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#c9a84c]" />
                </motion.a>
                <motion.a
                  href="tel:+1-800-000-0000"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl bg-[#1a3a6b] flex items-center justify-center hover:bg-[#c9a84c]/20 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#c9a84c]" />
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl bg-[#1a3a6b] flex items-center justify-center hover:bg-[#c9a84c]/20 transition-colors"
                >
                  <Link2 className="w-4 h-4 text-[#c9a84c]" />
                </motion.button>
                <motion.a
                  href="#contact"
                  whileHover={{ x: 2 }}
                  className="ml-auto text-sm text-[#c9a84c] font-semibold hover:underline"
                >
                  Contact →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
