import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Star } from 'lucide-react'

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  // Parallax subtle offset for desktop
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2])

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    })
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[92vh] sm:min-h-screen flex items-center overflow-hidden hero-gradient pt-28 pb-16 sm:pb-24"
    >
      {/* Background glow orbs */}
      <motion.div
        className="absolute top-20 right-10 md:right-24 w-72 md:w-96 h-72 md:h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,110,0.25) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-16 left-1/4 w-60 md:w-80 h-60 md:h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(120,20,220,0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Decorative geometric shapes (hidden on mobile to avoid overlap) */}
      <div className="absolute top-28 right-8 lg:right-16 hidden md:flex gap-3 pointer-events-none opacity-80">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
          className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-[5px] lg:border-[6px] border-yellow-400"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, type: 'spring' }}
          className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-[5px] lg:border-[6px] border-[#FF006E]"
        />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full"
        style={{ y, opacity }}
      >
        <div className="max-w-4xl">
          {/* Tag badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 sm:mb-6"
          >
            <span className="tag-badge">Webdesign &amp; Branding Köln</span>
          </motion.div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.02] tracking-tight mb-6">
            <motion.div custom={0} variants={textVariants} initial="hidden" animate="visible">
              Mehr Anfragen.
            </motion.div>
            <motion.div custom={1} variants={textVariants} initial="hidden" animate="visible">
              Bessere Kunden.
            </motion.div>
            <motion.div
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-2 text-white/95"
            >
              Mit effektivem{' '}
              <span className="text-[#FF006E] drop-shadow-[0_0_25px_rgba(255,0,110,0.4)]">
                Design.
              </span>
            </motion.div>
          </h1>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-6"
          >
            Maßgeschneidertes Webdesign, professionelles Branding und strategisches Marketing, das Ihre Besucher begeistert und planbar in treue Kunden verwandelt.
          </motion.p>

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-300 mb-8"
          >
            <span className="font-semibold text-white">99% Weiterempfehlung</span>
            <span className="text-white/40">•</span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-400 font-medium">4.9 bei Google &amp; ProvenExpert</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none"
          >
            <motion.a
              href="#kontakt"
              className="btn-pink text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 shadow-lg shadow-[#FF006E]/30"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Jetzt unverbindlich anfragen
              <ArrowUpRight size={18} />
            </motion.a>
            <motion.a
              href="#referenzen"
              className="btn-outline text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Referenzen ansehen
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator for desktop */}
      <motion.div
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <span className="text-white/40 text-[10px] tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          className="w-0.5 h-7 bg-gradient-to-b from-white/40 to-transparent rounded-full"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.8, 0.3, 0.8] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
