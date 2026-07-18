import { motion } from 'framer-motion'
import { HeartPulse, FlaskConical, Wheat, Activity } from 'lucide-react'

const cards = [
  {
    icon: HeartPulse,
    title: 'Pulse Reading',
    subtitle: 'Nabz Assessment',
    position: '-top-6 -left-6 md:-left-14',
    delay: 0.2,
  },
  {
    icon: FlaskConical,
    title: 'Unani Medicine',
    subtitle: 'Ilaj bid Dawa',
    position: 'top-1/4 -right-6 md:-right-16',
    delay: 0.4,
  },
  {
    icon: Wheat,
    title: 'Dietary Therapy',
    subtitle: 'Ilaj bil Ghiza',
    position: 'bottom-16 -left-8 md:-left-20',
    delay: 0.6,
  },
  {
    icon: Activity,
    title: 'SOPMS Framework',
    subtitle: 'Physiological Balancing',
    position: '-bottom-6 -right-4 md:-right-10',
    delay: 0.8,
  },
]

export default function FloatingCards() {
  return (
    <>
      {cards.map(({ icon: Icon, title, subtitle, position, delay }) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay, duration: 0.7, ease: 'easeOut' }}
          className={`hidden sm:flex absolute ${position} z-20 items-center gap-3 glass rounded-2xl px-4 py-3 shadow-card animate-float`}
          style={{ animationDelay: `${delay}s` }}
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary shrink-0">
            <Icon size={18} />
          </span>
          <span className="leading-tight">
            <span className="block text-xs font-semibold text-primaryDark">{title}</span>
            <span className="block text-[11px] text-secondary">{subtitle}</span>
          </span>
        </motion.div>
      ))}
    </>
  )
}