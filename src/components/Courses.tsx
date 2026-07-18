import { motion } from 'framer-motion'
import { GraduationCap, ArrowRight } from 'lucide-react'
import { COURSE_SYLLABUS, EDUCATION_ITEMS, WHATSAPP_LINK } from '../content'

export default function Courses() {
  return (
    <section id="courses" className="py-28 md:py-36 bg-primary text-cream relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(circle_at_10%_10%,#C89B3C,transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <span className="section-eyebrow !text-gold flex items-center gap-2">
            <GraduationCap size={14} /> Academic Training
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-cream mt-4 mb-6">
            Mastering the Science of SOPMS
          </h2>
          <p className="text-cream/75 mb-8 leading-relaxed">
            Hakeem Saadat Ali Rahat  continues his father's mission by providing 
            comprehensive clinical training. These programs are designed to equip 
            practitioners with the diagnostic precision required to master 
            Rahat  Simple Organopathic Medical Science.
          </p>
          <ul className="space-y-3">
            {EDUCATION_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-3 text-cream/75 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-cream text-primaryDark p-9 md:p-11 shadow-soft"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 rounded-t-3xl bg-gradient-to-r from-gold to-primary" />
          <p className="font-display text-3xl mb-1">Clinical SOPMS Training</p>
          <div className="flex flex-wrap gap-3 mb-7">
            <span className="text-[11px] uppercase tracking-widest bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
              Professional Mentorship
            </span>
            <span className="text-[11px] uppercase tracking-widest bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
              Clinical Research
            </span>
          </div>

          <ul className="space-y-2.5 mb-8">
            {COURSE_SYLLABUS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-primaryDark/70">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex items-end justify-between border-t border-primaryDark/10 pt-6">
            <div>
              <p className="font-display text-4xl text-primary">Join Us</p>
              <p className="text-[11px] uppercase tracking-widest text-primaryDark/50">Apply for Mentorship</p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group !px-5"
            >
              Enroll
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}