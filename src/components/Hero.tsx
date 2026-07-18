import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Calendar, MessageCircle, ArrowRight } from 'lucide-react'
import FloatingCards from './FloatingCards'
import AnimatedCounter from './AnimatedCounter'
import { TRUST_STATS, WHATSAPP_LINK } from '../content'
import { saadatImage } from "../content";


const HEADLINE_LINES = ['Modernizing Traditional', 'Unani Wisdom', 'Through Research']

function SplitLine({ text, lineDelay }: { text: string; lineDelay: number }) {
  const words = text.split(' ')
  return (
    <span className="block overflow-hidden">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-3 last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.9, delay: lineDelay + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 80, damping: 15 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 80, damping: 15 })
  const shiftX = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 60, damping: 15 })
  const shiftY = useSpring(useTransform(my, [-0.5, 0.5], [-14, 14]), { stiffness: 60, damping: 15 })

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = sceneRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      id="home"
      className="relative h-screen min-h-[720px] w-full overflow-hidden flex items-center bg-background"
    >
      {/* Animated botanical background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(63,125,88,0.14),transparent_55%),radial-gradient(ellipse_at_85%_80%,rgba(200,155,60,0.14),transparent_55%)]" />
        {[...Array(8)].map((_, i) => (
          <motion.svg
            key={i}
            width="46"
            height="46"
            viewBox="0 0 46 46"
            className="absolute opacity-30 animate-floatSlow"
            style={{
              top: `${(i * 47) % 90}%`,
              left: `${(i * 31) % 92}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          >
            <path
              d="M23 3 C38 11 41 30 23 43 C5 30 8 11 23 3 Z"
              fill={i % 2 === 0 ? '#3F7D58' : '#C89B3C'}
            />
          </motion.svg>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center w-full">
        {/* Left: Storytelling */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow mb-5 inline-block"
          >
            Rahat Simple Organopathic Medical Science &middot; Faisalabad, Pakistan
          </motion.span>

          <h1 className="font-display text-[2.6rem] leading-[1.05] sm:text-5xl md:text-6xl text-primaryDark">
            <SplitLine text={HEADLINE_LINES[0]} lineDelay={0.15} />
            <SplitLine text={HEADLINE_LINES[1]} lineDelay={0.35} />
            <span className="text-secondary">
              <SplitLine text={HEADLINE_LINES[2]} lineDelay={0.55} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-7 max-w-xl text-base md:text-[17px] text-primaryDark/70 leading-relaxed"
          >
            Led by Hakeem Saadat Ali Rahat, we continue the legacy of Qanoon-e-Arba, 
            developing Rahat Simple Organopathic Medical Science (SOPMS) to provide 
            precise, personalized treatments based on deep clinical research and traditional wisdom.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="btn-primary group">
              <Calendar size={17} />
              Book Appointment
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#treatments" className="btn-outline">
              Explore Treatments
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl"
          >
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl px-4 py-4 shadow-card">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-1 text-[11px] leading-snug text-primaryDark/60 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Portrait Composition */}
        <div
          ref={sceneRef}
          onMouseMove={onMouseMove}
          onMouseLeave={() => {
            mx.set(0)
            my.set(0)
          }}
          className="relative h-[420px] sm:h-[480px] lg:h-[560px] mx-auto w-full max-w-md"
          style={{ perspective: 1200 }}
        >
          {/* Botanical halo */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center -z-10"
            style={{ rotateX, rotateY }}
          >
            <svg width="420" height="420" viewBox="0 0 420 420" className="animate-[spin_60s_linear_infinite]">
              <circle cx="210" cy="210" r="170" fill="none" stroke="#3F7D58" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 10" />
              <circle cx="210" cy="210" r="140" fill="none" stroke="#C89B3C" strokeOpacity="0.3" strokeWidth="1" />
            </svg>
          </motion.div>

          <motion.div
            style={{ rotateX, rotateY, x: shiftX, y: shiftY }}
            className="relative mx-auto w-[78%] h-full rounded-[2.5rem] glass shadow-soft overflow-hidden animate-float"
          >
            <div className="w-full h-full bg-gradient-to-b from-primary/15 to-secondary/25 flex items-end justify-center">
              <div className="w-full h-full flex items-center justify-center">
                <img
  src={saadatImage}
  alt="Saadat"
  className="w-full h-full object-cover"
/>
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-primaryDark/70 to-transparent">
              <p className="text-cream font-display text-xl">Hakeem Saadat Ali Rahat</p>
              <p className="text-cream/70 text-xs tracking-wide">Researcher & Successor &middot; SOPMS</p>
            </div>
          </motion.div>

          <FloatingCards />
        </div>
      </div>
    </section>
  )
}