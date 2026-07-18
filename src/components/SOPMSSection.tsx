import { motion } from 'framer-motion'
import { SOPMS } from "../content";

const PILLARS = [
  { label: 'Pulse Assessment', desc: 'Precise analysis of physiological function (Nabz).' },
  { label: 'Tehreek Identification', desc: 'Determining the dominant physiological stimulation.' },
  { label: 'Dietary Correction', desc: 'Ilaj bil Ghiza: Balancing humors through food.' },
  { label: 'Targeted Therapy', desc: 'Refined application of Rahat  Simple Organopathic remedies.' },
]

export default function SOPMSSection() {
  return (
    <section id="sopms" className="py-28 md:py-36 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow"
          >
            The Scientific Framework
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mt-4 mb-6"
          >
            Rahat  Simple <span className="text-secondary">Organopathic Science</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primaryDark/70 leading-relaxed max-w-lg"
          >
            Developed and refined by Hakeem Saadat Ali Rahat , this discipline modernizes 
            the legacy of Qanoon-e-Arba. It views disease as a disruption of physiological 
            functions, providing a systematic approach to diagnosis and treatment that 
            prioritizes internal balance.
          </motion.p>

          <div className="mt-10 space-y-5">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-start gap-4"
              >
                <span className="mt-1 w-7 h-7 shrink-0 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <p className="font-display text-xl text-primaryDark">{p.label}</p>
                  <p className="text-sm text-primaryDark/60">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-md aspect-square flex items-center justify-center"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full animate-[spin_50s_linear_infinite]">
            <circle cx="200" cy="200" r="180" fill="none" stroke="#3F7D58" strokeOpacity="0.15" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="180" fill="none" stroke="#C89B3C" strokeOpacity="0.6" strokeWidth="2" strokeDasharray="12 18" />
            <circle cx="200" cy="200" r="130" fill="none" stroke="#214B34" strokeOpacity="0.18" strokeWidth="1" />
          </svg>
          
          {/* Circular Image Container */}
          <div className="absolute w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
             <img
  src={SOPMS}
  alt="Saadat"
  className="w-full h-full object-cover"
/>
          </div>
        </motion.div>
      </div>
    </section>
  )
}