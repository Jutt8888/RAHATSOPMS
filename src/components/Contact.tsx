import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle } from 'lucide-react'
import { WHATSAPP_LINK, PHONE_LINK } from '../content'

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 bg-primaryDark text-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow !text-gold"
          >
            Connect With Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-cream mt-4 mb-6"
          >
            Schedule Your Consultation
          </motion.h2>
          <p className="text-cream/60 max-w-md leading-relaxed mb-9">
            Hakeem Saadat Ali Rahat  is available for in-person consultations at 
            Rahat Shifa Khana and remote guidance for students and patients worldwide.
          </p>

          <div className="space-y-5 mb-9">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center shrink-0">
                <MapPin size={17} />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-cream/40">Clinic Address</p>
                <p className="text-cream">Madina Green Valley, Faisalabad, Pakistan</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center shrink-0">
                <Phone size={17} />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-cream/40">Direct Contact</p>
                <p className="text-cream">+92 339 5591312</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary !bg-gold !text-primaryDark">
              <MessageCircle size={16} />
              Message on WhatsApp
            </a>
            <a href={PHONE_LINK} className="btn-outline !border-cream/30 !text-cream hover:!bg-cream/5">
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden glass-dark aspect-[4/3] flex items-center justify-center relative"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d809.1171979673894!2d73.14082626958991!3d31.41570999839139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI0JzU2LjYiTiA3M8KwMDgnMjkuMyJF!5e1!3m2!1sen!2som!4v1784309121747!5m2!1sen!2som" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            title="Clinic Location"
          />
        </motion.div>
      </div>
    </section>
  )
}