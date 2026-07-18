import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

const ROWS = [
  { label: 'Clinic Classes', time: 'Monday – Thursday · 10:00 AM – 12:00 PM' },
  { label: 'Online Classes', time: 'Monday – Thursday · 10:00 PM – 11:00 PM' },
]

export default function Schedule() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      )
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="schedule" className="py-28 md:py-36 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <span className="section-eyebrow flex items-center justify-center gap-2">
          <Clock size={14} /> Class Schedule
        </span>
        <h2 className="section-title mt-4 mb-4">When Classes Run</h2>
        
        {/* Real-time Clock Display */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 text-secondary font-medium tracking-widest uppercase text-xs"
        >
          Current Local Time: {currentTime || '--:--:--'}
        </motion.div>

        <div className="glass rounded-3xl shadow-card divide-y divide-primaryDark/10 overflow-hidden text-left">
          {ROWS.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-between gap-6 px-7 py-6 flex-wrap"
            >
              <div className="flex items-center gap-4">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 text-primary"
                >
                  <Clock size={18} />
                </motion.span>
                <span className="font-display text-xl text-primaryDark">{row.label}</span>
              </div>
              <span className="text-sm text-primaryDark/60 font-medium">{row.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}