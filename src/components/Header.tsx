import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Calendar, Menu, X } from 'lucide-react'
import { NAV_LINKS, WHATSAPP_LINK } from '../content'
import { Link } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass shadow-card' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl text-primaryDark">RAHAT SOPMS</span>
          <span className="text-[11px] tracking-[0.2em] uppercase text-secondary mt-1">
            Rahat  Simple Organopathic Medical Science
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm text-primaryDark/80 hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline !px-5 !py-2.5">
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a href="#contact" className="btn-primary !px-5 !py-2.5">
            <Calendar size={16} />
            Book Consultation
          </a>
        </div>

        <button
          className="lg:hidden text-primaryDark"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden glass mt-3 mx-4 rounded-2xl overflow-hidden"
        >
          <div className="flex flex-col p-5 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-primaryDark"
              >
                {link.label}
              </Link>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary justify-center">
              Book Consultation
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}