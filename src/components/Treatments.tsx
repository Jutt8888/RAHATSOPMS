import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'
import { TREATMENTS } from '../content'

export default function Treatments() {
  return (
    <section id="treatments" className="py-28 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-16"
        >
          <span className="section-eyebrow flex items-center gap-2">
            <Leaf size={14} /> Our Approach
          </span>
          <h2 className="section-title mt-4 mb-5">Rahat  Simple Organopathic Medical Science</h2>
          <p className="text-primaryDark/65 leading-relaxed">
            Hakeem Saadat Ali Rahat  utilizes a precise, research-driven framework to balance 
            physiological functions, moving beyond traditional methods into the refined 
            application of SOPMS.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-7 shadow-card hover:shadow-soft hover:border-secondary/30 transition-all"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-primary/10 text-primary mb-5">
                <Leaf size={20} />
              </span>
              <h3 className="font-display text-2xl text-primaryDark mb-2">{t.title}</h3>
              <p className="text-sm text-primaryDark/60 leading-relaxed">{t.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}