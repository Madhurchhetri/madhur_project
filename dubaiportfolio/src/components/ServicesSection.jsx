import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, ArrowUpRight } from 'lucide-react'

const services = [
  {
    title: 'Webdesign',
    tag: 'DIGITAL',
    desc: 'Eine starke Website ist kein digitales Schaufenster, sondern Ihr wichtigster Verkäufer. Sie überzeugt potenzielle Kunden, generiert qualifizierte Anfragen und steigert Ihren Umsatz.',
    items: [
      'Effektives WordPress Webdesign',
      'Website-Relaunch & Optimierung',
      'Google SEO & GEO Optimierung',
      'Wartung & laufende Betreuung',
    ],
  },
  {
    title: 'Logodesign',
    tag: 'BRANDING',
    desc: 'Ein professionelles Logo ist keine Option, sondern die Basis einer erfolgreichen Marke. Ohne ein starkes Logo wirkt selbst das beste Unternehmen beliebig und austauschbar.',
    items: [
      'Individuelles Logodesign',
      'Farbwelt & Schriftkonzept',
      'Varianten für Print & Digital',
      'Sachgemäße Datenaufbereitung',
    ],
  },
  {
    title: 'Grafikdesign',
    tag: 'PRINT & MEDIA',
    desc: 'Starkes Grafikdesign steigert den wahrgenommenen Wert Ihres Unternehmens. So gewinnen Sie potenzielle Kunden, generieren mehr Anfragen und steigern Ihren Umsatz.',
    items: [
      'Außenauftritt von A bis Z',
      'Geschäftsausstattung',
      'Flyer, Broschüren, Folder',
      'Social Media & digitale Grafiken',
    ],
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="section-black py-16 sm:py-20 md:py-28 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="tag-badge mb-4">LEISTUNGEN</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            <span className="text-[#FF006E]">Mein Workaround.</span> Ihr Vorteil.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Webdesign, Branding und Marketing aus einer Hand – für Unternehmen, die online
            gefunden werden und überzeugen wollen. Von der Logogestaltung über die Erstellung einer
            Homepage bis zum kompletten Firmenauftritt.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="rounded-2xl p-6 sm:p-8 border border-white/10 bg-[#121212] flex flex-col justify-between group hover:border-[#FF006E]/40 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold tracking-wider text-[#FF006E] uppercase bg-[#FF006E]/10 px-3 py-1 rounded-full border border-[#FF006E]/20">
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-white font-bold text-2xl mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{s.desc}</p>

                <ul className="space-y-3 mb-8">
                  {s.items.map((item, j) => (
                    <li key={j} className="check-item">
                      <CheckCircle2 size={16} className="text-[#FF006E] flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a
                href="#kontakt"
                className="btn-pink w-full justify-center text-sm py-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Mehr erfahren
                <ArrowUpRight size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
