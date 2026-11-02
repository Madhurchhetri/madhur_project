import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function AboutIntroSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section className="section-white py-16 sm:py-20 md:py-28 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left – Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1 max-w-lg lg:max-w-none mx-auto w-full"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 shadow-xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop"
                alt="Moritz Dunkel im Team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Pink overlay accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF006E]/15 to-transparent pointer-events-none" />
            </div>

            {/* Floating badge with responsive positioning */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5, type: 'spring' }}
              className="absolute -bottom-4 right-3 sm:-bottom-5 sm:-right-5 bg-[#FF006E] text-white rounded-xl p-3.5 sm:p-4 shadow-xl shadow-[#FF006E]/30"
            >
              <div className="text-2xl sm:text-3xl font-black">22+</div>
              <div className="text-xs sm:text-sm font-medium opacity-90">Jahre Erfahrung</div>
            </motion.div>
          </motion.div>

          {/* Right – Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="order-1 lg:order-2"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="tag-badge">DNKLDSGN</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4 text-gray-900">
              <span className="text-[#FF006E]">Starkes Design für</span>{' '}
              starke Unternehmen
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
              Für qualifizierte Leads, echte Wunschkunden und mehr Umsatz.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
              Dunkel Design entwickelt Markenauftritte mit Wow-Effekt und strategischer Wirkung. Keine schöne Beliebigkeit. Sondern klares,
              professionelles Design, das Kompetenz sichtbar macht und besser verkauft.{' '}
              <span className="text-[#FF006E] font-medium">
                Für Selbstständige, Dienstleister, Berater und kleine Unternehmen
              </span>
              , die endlich so auftreten wollen, wie sie arbeiten: professionell, hochwertig und besser als die Konkurrenz.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-900 font-bold text-sm sm:text-base mb-8">
              Denn wer nicht auffällt, fällt weg.
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.a
                href="#ueber-mich"
                className="btn-pink text-sm sm:text-base px-6 py-3.5"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Lernen Sie mich kennen
                <ArrowUpRight size={17} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
