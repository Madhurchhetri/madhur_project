import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Smile, ThumbsUp, Heart, BarChart2, Users, Star } from 'lucide-react'

const benefits = [
  {
    icon: Smile,
    title: 'Mehr qualifizierte Anfragen',
    desc: 'Ihr Auftritt spricht gezielter die Menschen an, die wirklich zu Ihrem Angebot passen. Statt zufälliger Kontakte entstehen Anfragen von Kunden, die besser verstehen, warum Sie die richtige Wahl sind.',
  },
  {
    icon: ThumbsUp,
    title: 'Die Konkurrenz abhängen',
    desc: 'Mit einem effektiven Design zeigen Sie auf den ersten Blick, dass Ihr Unternehmen nicht von gestern ist. Sie wirken relevanter, hochwertiger und präsenter – noch bevor das erste Gespräch stattfindet.',
  },
  {
    icon: Heart,
    title: 'Endlich sichtbar im Internet',
    desc: 'Eine strukturierte Website, klare Inhalte und gezieltes SEO sorgen dafür, dass Ihr Unternehmen online sichtbarer wird. Bei Google und überall dort, wo potenzielle Kunden nach Lösungen suchen.',
  },
  {
    icon: BarChart2,
    title: 'Planbarer neue Kunden gewinnen',
    desc: 'Empfehlungen bleiben wertvoll, aber sie sollten nicht Ihr einziger Wachstumsmotor sein. Mit Website, Branding und Marketing entsteht ein System, das gezielt neue Kontakte, Anfragen und Kunden erzeugt.',
  },
  {
    icon: Users,
    title: 'Mitarbeiter gewinnen und halten',
    desc: 'Ein professioneller Außenauftritt wirkt nicht nur auf Kunden. Er zeigt auch Bewerbern und Mitarbeitern, wofür Ihr Unternehmen steht. Eine starke Website und ein moderner Auftritt machen Sie attraktiv.',
  },
  {
    icon: Star,
    title: 'Präzision auf den ersten Blick',
    desc: 'Ihr Design wird zum digitalen Qualitätssiegel. Ihre Außendarstellung entspricht Ihrer Leistung und der Widerspruch zwischen erstklassiger Arbeit und zweitklassiger Optik wird beendet.',
  },
]

export default function BenefitsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="leistungen"
      ref={ref}
      className="py-16 sm:py-20 md:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #150024 0%, #0c0017 50%, #05000a 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,0,110,0.12) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
        >
          <span className="tag-badge mb-4">IHRE VORTEILE</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Was ein starker Auftritt für Ihr{' '}
            <span className="text-[#FF006E]">Business</span> bewirkt
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Sechs messbare Resultate, die ein durchdachter digitaler Markenauftritt für Ihr Unternehmen schafft.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6 sm:p-7 border border-white/10 group cursor-default transition-all shadow-md"
              style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(8px)' }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                style={{ background: 'rgba(255, 0, 110, 0.15)' }}
              >
                <b.icon size={20} className="text-[#FF006E]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2.5 leading-snug">{b.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
