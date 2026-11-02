import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Play } from 'lucide-react'

const testimonials = [
  {
    name: 'Fabian Eich',
    role: 'Zahnarzt',
    content: '„Vom Webdesign über die Webentwicklung bis zur Instagram-Betreuung war die Zusammenarbeit jederzeit professionell, klar und angenehm. Das Ergebnis: deutlich qualifiziertere Anfragen, spannendere Projekte und zwei neue Mitarbeiter. Moritz Dunkel übernimmt deshalb jetzt auch das Redesign unseres Logos und Brandings."',
    stars: 5,
  },
  {
    name: 'Carsten Becker',
    role: 'Dachdeckerei Becker',
    content: '„Moritz Dunkel nimmt sich wirklich Zeit, um individuelle Wünsche zu verstehen und setzt diese mit einem beeindruckenden Sinn für Details um. Besonders überzeugt hat mich seine schnelle, klare Kommunikation und die Qualität der Ergebnisse. Uneingeschränkte Weiterempfehlung – ich werde definitiv wieder mit ihm zusammenarbeiten."',
    stars: 5,
  },
  {
    name: 'Andrea Jokic',
    role: 'Tiefbau & Erdarbeiten',
    content: '„Herr Dunkel ist auf alle unsere Wünsche eingegangen, hat eigene kreative Ideen eingebracht und alles zuverlässig umgesetzt. Unsere komplette Marke wurde neu entwickelt – vom Konzept bis zum finalen Design. Das Ergebnis: eine moderne, klar strukturierte Website und ein hochwertiger Gesamtauftritt."',
    stars: 5,
  },
]

const caseStudy = {
  company: 'NF Consulting',
  quote: '„Die neue Gestaltung hat meine Sichtbarkeit verbessert, und zu mehr Umsatz beigetragen."',
  person: 'Nis Fiedler, Inhaber',
  desc: 'Für NF Consulting entstand ein neuer Unternehmensauftritt, der auf den ersten Blick sichtbar macht. Logo, Corporate Design, Geschäftsausstattung, Präsentationsdesign und Website vermitteln Professionalität, Klarheit und Verlässlichkeit. Die neue Website verbesserte die Sichtbarkeit spürbar – mit messbarem Effekt auf qualifizierte Anfragen und Umsatz.',
  tags: ['Branding', 'Logodesign', 'Geschäftspapiere', 'Pitch Deck', 'Webdesign', 'SEO', 'Website Wartung'],
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop',
}

export default function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section id="kundenstimmen" ref={ref} className="section-white py-16 sm:py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Case Study Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="tag-badge mb-4">FALLSTUDIE</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
              <span className="text-[#FF006E]">Zufriedene Kunden?</span>{' '}
              <span className="highlight-yellow">Unbezahlbar.</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Keine leeren Versprechen, sondern echte Resultate. Design und Strategie müssen am Ende eines tun: Für Ihr Unternehmen funktionieren.
            </p>
          </div>

          {/* Case study card */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-white max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
              {/* Left – Person */}
              <div className="bg-gray-50/80 p-6 sm:p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-200">
                <div className="relative mb-4">
                  <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full overflow-hidden border-3 border-[#FF006E] shadow-md">
                    <img src={caseStudy.image} alt={caseStudy.person} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex justify-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-bold text-gray-900 text-base">{caseStudy.company}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{caseStudy.person}</p>
              </div>

              {/* Right – Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <blockquote className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 italic leading-snug mb-5">
                    {caseStudy.quote}
                  </blockquote>
                  <div className="w-12 h-1 bg-[#FF006E] rounded-full mb-5" />
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {caseStudy.desc}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                  {caseStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                    >
                      <span className="text-[#FF006E] font-bold">✓</span>
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="tag-badge mb-4">KUNDENSTIMMEN</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3">
            130+ Bewertungen mit 5 Sternen
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Rückmeldungen von Unternehmern, die ihren Auftritt mit Dunkel Design sichtbar nach vorne gebracht haben.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-gray-50 rounded-2xl p-6 sm:p-7 border border-gray-200 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-bold text-gray-900 text-base">{t.name}</p>
                    <p className="text-gray-500 text-xs sm:text-sm">{t.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed italic">
                  {t.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
