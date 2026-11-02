import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function DesignPhilosophySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="section-white py-16 sm:py-20 md:py-28 relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left – text */}
          <div>
            <span className="tag-badge mb-4">PHILOSOPHIE</span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4"
            >
              Design, das überzeugt.{' '}
              <span className="text-[#FF006E]">Nicht nur gut aussieht.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-gray-800 font-bold text-base sm:text-lg mb-4"
            >
              Hübsch machen kann jeder. Ich entwickle Auftritte, die verkaufen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed mb-8"
            >
              <p>
                Es gibt viele Anbieter, die Websites bauen, Logos gestalten oder Social-Media-Posts erstellen.
                Die Frage ist nicht, ob jemand das technisch umsetzen kann. Die Frage ist, ob dabei ein Auftritt
                entsteht, der Ihr Unternehmen wirklich voranbringt.
              </p>
              <p>
                Seit 2004 arbeite ich mit Selbstständigen und Unternehmen, die mehr aus ihrem Auftritt herausholen wollen.
                Dabei setze ich auf psychologisch fundiertes Design: Gestaltung, die nicht nur gefällt, sondern unbewusst
                Vertrauen aufbaut, Aufmerksamkeit lenkt und zur Anfrage führt.
              </p>
            </motion.div>

            <motion.a
              href="#kontakt"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="btn-pink text-sm sm:text-base px-7 py-3.5"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Jetzt unverbindlich anfragen
              <ArrowUpRight size={17} />
            </motion.a>
          </div>

          {/* Right – image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-lg lg:max-w-none mx-auto w-full"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&auto=format&fit=crop"
                alt="Design process"
                className="w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-4 left-3 sm:-bottom-5 sm:-left-5 bg-white border border-gray-200 rounded-xl p-3.5 sm:p-4 shadow-xl"
            >
              <div className="text-2xl sm:text-3xl font-black text-gray-900 mb-0.5">130+</div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium">5-Sterne Bewertungen</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
