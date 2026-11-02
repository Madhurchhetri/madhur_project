import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { number: '22+', label: 'Erfahrungsjahre' },
  { number: '130+', label: 'Erfolgreiche Projekte' },
  { number: '1', label: 'Fester Ansprechpartner' },
]

export default function AboutMeSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="ueber-mich"
      ref={ref}
      className="py-16 sm:py-20 md:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #240033 0%, #150022 50%, #0a0012 100%)' }}
    >
      {/* Glow background */}
      <div
        className="absolute top-0 right-0 w-full max-w-xl h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(255,0,110,0.15) 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="tag-badge mb-4">ÜBER MICH</span>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white/70 text-base sm:text-lg mb-1">Darf ich mich vorstellen?</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 leading-tight">
                Ich bin Moritz Dunkel.
              </h2>
              <p className="text-[#FF006E] font-bold text-lg sm:text-xl mb-6">
                Spezialist. Generalist. Pragmatist.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed mb-8"
            >
              <p>
                Grafikdesigner, Webdesigner und Macher. Und jemand, der weiß wie Unternehmen ticken.
                Seit 2004 helfe ich Selbstständigen und mittelständischen Betrieben, nach außen hin so
                zu wirken, wie sie wirklich sind: kompetent, vertrauenswürdig und besser als der Wettbewerb.
              </p>
              <p>
                Ich sehe mich verantwortlich dafür, dass Unternehmen nicht nur gut aussehen, sondern Vertrauen
                aufbauen, die richtigen Kunden anziehen und Umsatz generieren. Als Stratege, Designer und Berater
                in Personalunion haben Sie immer direkte, unkomplizierte Kommunikationswege.
              </p>
            </motion.div>

            {/* Stats - responsive grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 py-6 border-y border-white/10 mb-8"
            >
              {stats.map((s, i) => (
                <div key={i} className="text-left">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-1">
                    {s.number}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm font-medium leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-400 text-xs sm:text-sm leading-relaxed"
            >
              Wenn ich nicht gerade Websites baue oder Marken entwickle, laufe ich durch den Kölner Norden
              und leide mit dem 1. FC Köln. Wer einer Fahrstuhlmannschaft treu bleibt, der gibt auch bei Ihrem Projekt niemals auf.
            </motion.p>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-md lg:max-w-none mx-auto w-full"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop"
                alt="Moritz Dunkel"
                className="w-full object-cover aspect-[3/4]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
