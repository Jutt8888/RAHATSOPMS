import { motion } from 'framer-motion'
import { Microscope } from 'lucide-react'

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-28 md:py-36 bg-primaryDark text-cream relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-[0.06] bg-[radial-gradient(circle_at_20%_20%,#3F7D58,transparent_60%),radial-gradient(circle_at_80%_70%,#C89B3C,transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="section-eyebrow !text-gold flex items-center gap-2">
              <Microscope size={14} /> Core Methodology
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-cream">
              The Science of <br />
              <span className="text-secondary">Physiological Balance</span>
            </h2>
            <p className="text-cream/70 leading-relaxed text-lg">
              Hakeem Saadat Ali Rahat ’s research posits that every disease originates 
              from a state of stimulation (Tehreek). Our practice focuses on 
              correcting functional imbalances rather than merely treating symptoms.
            </p>
            <blockquote className="border-l-4 border-gold pl-6 py-2 italic text-cream/80">
              "Every disease is the result of a single dominant physiological function, 
              and understanding that function is the key to successful diagnosis."
            </blockquote>
          </motion.div>

          {/* Right Cards: The Four Functions */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Tehreek', desc: 'Stimulation (Muscular System)' },
              { title: 'Tahleel', desc: 'Analysis (Breakdown)' },
              { title: 'Taskeen', desc: 'Sedation (Calming)' },
              { title: 'Takhdeer', desc: 'Anesthesia (Numbing)' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-gold/50 transition-colors"
              >
                <h3 className="text-gold font-display text-xl mb-1">{item.title}</h3>
                <p className="text-cream/60 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}