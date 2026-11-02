import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const steps = [
  { num: '01', title: 'Erstgespräch', desc: 'Wir sprechen unverbindlich über Ihr Unternehmen, Ihre Ziele und Ihre aktuelle Situation. Kein Verkaufsgespräch – sondern ein ehrliches Kennenlernen.' },
  { num: '02', title: 'Analyse & Konzept', desc: 'Ich analysiere Ihren Auftritt, Ihre Mitbewerber und Ihre Zielgruppe. Daraus entsteht ein klares Konzept, das strategisch auf Ihre Ziele einzahlt.' },
  { num: '03', title: 'Gestaltung', desc: 'Hier beginnt die kreative Arbeit. Sie sehen erste Entwürfe, geben Feedback – und wir entwickeln gemeinsam etwas, das wirklich zu Ihnen passt.' },
  { num: '04', title: 'Umsetzung', desc: 'Vom Layout zur fertigen Website, vom Logokonzept zur vollständigen Geschäftsausstattung: Ich setze konsequent um, was wir gemeinsam entwickelt haben.' },
  { num: '05', title: 'Launch & Betreuung', desc: 'Ihr Auftritt geht live. Und ich bleibe dabei. Ob laufende Betreuung, Optimierung oder Erweiterungen – Sie sind nie allein gelassen.' },
]

const faqs = [
  { q: 'Wie läuft die Zusammenarbeit ab?', a: 'Die Zusammenarbeit beginnt mit einem kostenlosen Erstgespräch. Danach erarbeiten wir gemeinsam ein Konzept, das auf Ihre Ziele einzahlt. Sie haben jederzeit Einblick in den Prozess und wissen immer, was der nächste Schritt ist.' },
  { q: 'Was brauche ich vor Projektstart?', a: 'Nicht viel. Idealerweise haben Sie eine Vorstellung von Ihren Zielen und wissen, wer Ihre Zielgruppe ist. Den Rest entwickeln wir gemeinsam im Prozess.' },
  { q: 'Übernehmen Sie auch Texte und Fotos?', a: 'Ja – auf Wunsch übernehmen wir auch die Erstellung von Texten und die Koordination von Fotoshootings. Alles aus einer Hand, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.' },
  { q: 'Was kosten Webdesign, Branding oder Grafikdesign?', a: 'Die Investition hängt vom Umfang ab. Nach unserem Erstgespräch erhalten Sie ein transparentes, individuelles Angebot ohne versteckte Kosten.' },
  { q: 'Wie lange dauert ein Projekt?', a: 'Je nach Komplexität dauert ein Projekt zwischen 4 und 12 Wochen. Einen konkreten Zeitplan erhalten Sie nach dem Briefing.' },
  { q: 'Gibt es auch laufende Betreuung nach Projektabschluss?', a: 'Ja. Ich biete verschiedene Wartungs- und Betreuungspakete an, damit Ihr Auftritt langfristig aktuell und leistungsfähig bleibt.' },
  { q: 'Ist Dunkel Design eine Agentur oder ein Einzelanbieter?', a: 'Dunkel Design ist ein schlankes Team unter meiner Führung. Sie haben immer mich als direkten Ansprechpartner – ohne Umwege über verschiedene Abteilungen.' },
  { q: 'Was unterscheidet Sie von anderen Designern oder Agenturen?', a: 'Ich verbinde Gestaltung, Strategie und Wirtschaftspsychologie. Das bedeutet: Ihre Außendarstellung ist nicht nur schön, sondern verkauft. Ich denke wie ein Unternehmer – nicht wie ein Künstler.' },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center py-4 sm:py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-bold text-gray-900 text-sm sm:text-base pr-4 group-hover:text-[#FF006E] transition-colors">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#FF006E] group-hover:text-[#FF006E] transition-colors"
        >
          <Plus size={14} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed pb-5 pr-6">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ProcessAndFAQSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div id="faq" className="section-white">
      {/* Process section */}
      <section className="py-16 sm:py-20 md:py-28 relative overflow-hidden" ref={ref}>
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="tag-badge mb-4">PROZESS</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              <span className="text-[#FF006E]">5 Schritte</span> für Ihren neuen Auftritt
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
              Transparent, professionell organisiert und ohne Umwege – vom ersten Gespräch bis zum messbaren Erfolg.
            </p>
          </motion.div>

          <div className="space-y-4 sm:space-y-5">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 6 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start p-5 sm:p-6 rounded-2xl border border-gray-200/80 hover:border-[#FF006E]/40 transition-all bg-gray-50/50 hover:bg-white shadow-sm"
              >
                <div className="flex-shrink-0 w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-[#FF006E]/10 flex items-center justify-center">
                  <span className="text-[#FF006E] font-black text-sm sm:text-base">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-14 sm:py-20 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10">
            <span className="tag-badge mb-3">FAQ</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
              Häufig gestellte Fragen
            </h2>
          </div>

          <div className="space-y-1">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
