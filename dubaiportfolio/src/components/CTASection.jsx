import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="kontakt"
      ref={ref}
      className="section-black py-16 sm:py-20 md:py-28 relative overflow-hidden"
    >
      {/* Glow bg */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[300px] sm:h-[400px] rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,0,110,0.4) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="tag-badge mb-4">KONTAKT</span>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-3 leading-tight">
            Bereit für Ihren neuen Auftritt?
          </h2>
          
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90 mb-6">
            Mehr Anfragen. Bessere Kunden. Mehr Umsatz.
          </p>
          
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            Bereit für einen visuellen Auftritt, der nicht nur gut aussieht, sondern messbare Ergebnisse bringt?
            Lassen Sie uns unverbindlich darüber sprechen, wie wir Ihre Marke sichtbarer und erfolgreicher machen.
          </p>

          <motion.a
            href="mailto:hallo@moritzdunkel.de"
            className="btn-pink text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-4.5 inline-flex shadow-xl shadow-[#FF006E]/30"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Jetzt unverbindlich anfragen
            <ArrowUpRight size={20} />
          </motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mt-12 sm:mt-16 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400"
        >
          {['99% Weiterempfehlung', '4.9 bei Google & ProvenExpert', '22+ Jahre Erfahrung', '130+ Zufriedene Kunden'].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF006E] inline-block" />
              <span>{t}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
