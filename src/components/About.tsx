import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { saadatImage } from "../content";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
        
        {/* Left: Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto lg:mx-0 w-full max-w-sm"
        >
          <div className="rounded-3xl overflow-hidden glass shadow-soft aspect-[4/5] flex items-center justify-center bg-gradient-to-b from-primary/10 to-secondary/20">
             <img
  src={saadatImage}
  alt="Saadat"
  className="w-full h-full object-cover"
/>
          </div>
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 shadow-card">
            <p className="font-display text-2xl text-primary">Successor</p>
            <p className="text-[11px] uppercase tracking-widest text-primaryDark/60">Legacy Carrier</p>
          </div>
        </motion.div>

        {/* Right: Bio */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow"
          >
            The Researcher & Successor
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mt-4 mb-6"
          >
            Hakeem Saadat Ali Rahat 
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primaryDark/70 leading-relaxed max-w-2xl"
          >
            Hakeem Saadat Ali Rahat  is a renowned Pakistani Unani physician and researcher. 
            Following in the footsteps of his father, Hakeem Rahmat Ali Rahat , he has 
            dedicated his career to advancing the Qanoon-e-Arba and developing what is 
            now known as Rahat  Simple Organopathic Medical Science (SOPMS).
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28 }}
            className="mt-4 text-primaryDark/70 leading-relaxed max-w-2xl"
          >
            After completing his Fazil-ut-Tibb Wal Jarahat in 1992, he joined his father 
            to master advanced diagnostic methods. Since 2004, he has continued to 
            modernize this medical framework, teaching practitioners and conducting 
            clinical research to keep the legacy of his father alive and relevant.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-10"
          >
            <Link 
              to="/founder/saadat-ali" 
              className="btn-primary group inline-flex items-center gap-2"
            >
              View Full Biography
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}