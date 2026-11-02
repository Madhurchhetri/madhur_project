import { Instagram, Linkedin, Youtube, Twitter, Globe } from 'lucide-react'

const footerLinks = {
  col1: {
    label: 'Leistungen',
    links: ['Webdesign', 'Logodesign', 'Corporate Design', 'Grafikdesign', 'SEO & Sichtbarkeit', 'Website Service'],
  },
  col2: {
    label: 'Unternehmen',
    links: ['Projekte', 'Kundenstimmen', 'Über mich', 'FAQ', 'Blog'],
  },
  col3: {
    label: 'Rechtliches',
    links: ['Impressum', 'Datenschutz', 'AGB', 'Cookie-Einstellungen'],
    extra: ['Mo.–Do.: 8 bis 18 Uhr', 'Fr.: 8 bis 13 Uhr'],
  },
}

const seoLinks = [
  'Webdesign Köln', 'Webdesign Bonn', 'Webdesign Düsseldorf',
  'Webdesign Bergisch Gladbach', 'Webdesign Leverkusen', 'Webdesign Neuss',
]

const socials = [
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
  { Icon: Globe, href: '#', label: 'Website' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 py-12 sm:py-16">
          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-[#FF006E] rounded flex items-center justify-center shadow-md shadow-[#FF006E]/20">
                <span className="text-white font-black text-sm">D</span>
              </div>
              <div className="leading-tight">
                <div className="text-gray-900 font-black text-sm tracking-widest">DNKLDSGN</div>
                <div className="text-gray-400 text-[9px] tracking-wider uppercase">Moritz Dunkel</div>
              </div>
            </a>
            
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
              Dunkel Design entwickelt hochwertige Markenauftritte und Websites für Selbstständige und kleine Unternehmen mit Strategie, Design und SEO.
            </p>
            
            <div className="space-y-1.5 text-xs sm:text-sm text-gray-700 mb-6 font-medium">
              <p>
                <a href="mailto:hallo@moritzdunkel.de" className="hover:text-[#FF006E] transition-colors">
                  hallo@moritzdunkel.de
                </a>
              </p>
              <p>
                <a href="tel:+4922197243876" className="hover:text-[#FF006E] transition-colors">
                  +49 221 972 438 76
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#FF006E] hover:text-white transition-all shadow-sm"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((col, i) => (
            <div key={i}>
              <h4 className="text-gray-900 font-bold text-sm mb-4 tracking-wider uppercase">
                {col.label}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 text-xs sm:text-sm hover:text-[#FF006E] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              {col.extra && (
                <div className="mt-5 pt-4 border-t border-gray-100 space-y-1">
                  <p className="text-xs font-semibold text-gray-700">Öffnungszeiten:</p>
                  {col.extra.map((e) => (
                    <p key={e} className="text-gray-500 text-xs">{e}</p>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* SEO links col */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm mb-4 tracking-wider uppercase">
              Regionen
            </h4>
            <ul className="space-y-2.5">
              {seoLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 text-xs sm:text-sm hover:text-[#FF006E] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Dunkel Design – Moritz Dunkel. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['Impressum', 'Datenschutz', 'AGB'].map((link) => (
              <a key={link} href="#" className="text-gray-500 text-xs hover:text-[#FF006E] transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
