import { NAV_LINKS } from '../content'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primaryDark text-cream py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-12">
        
        {/* Brand Column */}
        <div className="space-y-3">
          <p className="font-display italic text-2xl text-gold">Rahat Shifa Khana</p>
          <p className="text-sm text-cream/60 leading-relaxed max-w-[240px]">
            Advancing the legacy of Qanoon-e-Arba through Rahat  Simple Organopathic Medical Science (SOPMS).
          </p>
        </div>

        {/* Links Column */}
        <div className="md:col-start-2">
          <h4 className="font-display text-lg text-gold mb-4">Navigation</h4>
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.filter((l) => l.label !== 'Home').map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-cream/70 hover:text-gold transition-colors text-sm w-fit"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="font-display text-lg text-gold mb-4">Clinic Info</h4>
          <div className="flex flex-col gap-3 text-cream/70 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-secondary" />
              <span>Faisalabad, Pakistan</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-secondary" />
              <span>+92 339 5591312</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-cream/40">
          © {new Date().getFullYear()} Rahat Shifa Khana. All Rights Reserved.
        </p>
       
      </div>
    </footer>
  )
}