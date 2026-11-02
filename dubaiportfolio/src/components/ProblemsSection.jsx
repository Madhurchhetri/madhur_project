import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AlertTriangle, Users, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Aufträge kommen nur durch Empfehlungen',
    desc: 'Mundpropaganda ist sehr wertvoll. Aber als alleinige Strategie ist sie nur Hoffnung. Ohne eigenes Marketing sitzen Sie auf dem Beifahrersitz Ihres Unternehmens und warten darauf, dass jemand anderes Gas gibt.',
  },
  {
    icon: Users,
    title: 'Mitarbeiter finden und halten',
    desc: 'A-Player suchen ein Unternehmen, das professionell und modern wirkt. Ein Betrieb, der beliebig oder unprofessionell wirkt, schreckt sowohl potenzielle Bewerber als auch bestehende Mitarbeiter ab.',
  },
  {
    icon: TrendingDown,
    title: 'Spitzenleistung im Billig-Look',
    desc: 'Ihre Arbeit ist stark. Ihr Auftritt erzählt aber etwas anderes. Genau das kostet Anfragen, Umsatz und bessere Kunden. Denn wer nach Außen hin wie Kreisklasse aussieht, wird selten für Weltklasse gehalten.',
  },
]

export default function ProblemsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="section-black py-16 sm:py-20 md:py-28 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="tag-badge mb-4">HERAUSFORDERUNGEN</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight">
            Die meisten Unternehmer kennen die folgenden{' '}
            <span className="text-[#FF006E]">Herausforderungen:</span>
          </h2>
        </motion.div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="rounded-2xl p-6 sm:p-8 border border-white/10 bg-[#121212] flex flex-col justify-between hover:border-[#FF006E]/40 transition-colors shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FF006E]/10 flex items-center justify-center mb-6 border border-[#FF006E]/20">
                  <p.icon size={22} className="text-[#FF006E]" />
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10"
        >
          <h3 className="text-white font-bold text-lg sm:text-2xl mb-4">
            Schluss mit der optischen Unterwertung Ihres Könnens
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Wenn Ihre Arbeit 5 Sterne verdient, darf Ihr Marketing nicht nach Durchschnitt aussehen. Jede Minute, die Sie mit einem
            veralteten Auftritt online sind, kostet Sie bares Geld, erstklassige Mitarbeiter und den Respekt, den Sie sich hart erarbeitet haben.
            Es ist Zeit, dass Ihre Außendarstellung endlich so professionell wird wie Ihre Arbeit.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
