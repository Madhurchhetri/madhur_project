import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function PinkTransitionSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="py-16 sm:py-24 px-5 sm:px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FF006E 0%, #D4005B 50%, #A30046 100%)' }}
    >
      {/* Background ambient glow shapes */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(ellipse at center, #ffffff 0%, transparent 65%)' }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-white/85 text-sm sm:text-base font-semibold tracking-widest uppercase mb-3"
        >
          Die Lösung?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8"
        >
          Ein{' '}
          <span className="bg-white text-[#FF006E] px-3 sm:px-4 py-0.5 sm:py-1 rounded shadow-lg inline-block">
            Auftritt
          </span>
          , der für Sie arbeitet.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-4">
            Und genau dafür bin ich da.
          </h3>
          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Nicht für hübsche Farben oder leere Versprechen. Sondern für einen Auftritt, der wirkt – im Kopf, im Herz und im
            Business. Ich verbinde Wirtschaftspsychologie, Online-Marketing und verkaufsförderndes Design zu einer Lösung, die
            Vertrauen aufbaut, Klarheit schafft und Ihre Konkurrenz alt aussehen lässt.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
