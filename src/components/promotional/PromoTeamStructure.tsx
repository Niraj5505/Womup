import React from 'react'
import { motion } from 'framer-motion'
import { Users, Layers, ShieldAlert } from 'lucide-react'

export const PromoTeamStructure: React.FC = () => {
  const levels = [
    { level: 'Level 1', members: '30 Members', tag: 'Direct Referrals', color: 'from-[#FD849F] to-[#FFC4D1]' },
    { level: 'Level 2', members: '500 Members', tag: 'Team Growth', color: 'from-[#FFC4D1] to-[#6651BF]' },
    { level: 'Level 3', members: '2,000 Members', tag: 'Community Tier', color: 'from-[#6651BF] to-[#3048C8]' },
    { level: 'Level 4', members: '5,000 Members', tag: 'Regional Network', color: 'from-[#3048C8] to-[#6651BF]' },
    { level: 'Level 5', members: '25,000 Members', tag: 'Zonal Milestone', color: 'from-[#6651BF] to-[#FD849F]' },
    { level: 'Level 6', members: '100,000 Members', tag: 'National Scale', color: 'from-[#FD849F] to-[#3048C8]' },
    { level: 'Level 7', members: '100,000 Members', tag: 'Executive Tier', color: 'from-[#FFC4D1] to-[#6651BF]' },
  ]

  return (
    <section id="team" className="py-20 sm:py-28 bg-[#05062A] relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[400px] bg-[#3048C8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#171843] border border-[#292A52] text-[#D8C9ED] text-xs font-extrabold uppercase tracking-wider inline-block mb-3">
            Program Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Illustrative <span className="text-[#FD849F]">Team Structure</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D8D8E8] leading-relaxed">
            Understanding the multi-tier community model and milestone milestones across the WOMUP promotional framework.
          </p>
        </div>

        {/* 7-Level Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
          {levels.map((item, index) => (
            <motion.div
              key={item.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-[20px] bg-[#0C0D35] border border-[#292A52] hover:border-[#6651BF] transition-all duration-300 flex flex-col justify-between shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-[#FD849F]">
                    {item.level}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#171843] border border-[#292A52] flex items-center justify-center text-[#D8C9ED]">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-2xl font-black text-white group-hover:text-[#FFC4D1] transition-colors">
                  {item.members}
                </div>

                <div className="text-xs text-[#D8C9ED] mt-1 font-medium">
                  {item.tag}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#292A52] flex items-center gap-2 text-[11px] text-[#D8D8E8]/70">
                <Users className="w-3.5 h-3.5 text-[#FD849F]" />
                <span>Program Tier</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informational Disclaimer Box */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-[#171843]/80 border border-[#292A52] flex items-center gap-4 text-xs text-[#D8D8E8] shadow-md">
          <ShieldAlert className="w-6 h-6 text-[#FACC15] shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-white font-semibold">Important Disclaimer:</strong> All member counts and tiers are presented solely as illustrative program structure information. WOMUP does not guarantee that participants will achieve these numbers. Participation is free with zero mandatory deposits.
          </p>
        </div>
      </div>
    </section>
  )
}
