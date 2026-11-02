import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const categories = ['Alle', 'Branding', 'Digital Marketing', 'Grafikdesign', 'Logodesign', 'Print Design', 'Web Design']

const projects = [
  {
    title: 'Website für Beratungsunternehmen',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop',
    tag: 'Web & SEO',
  },
  {
    title: 'Website für Tischlerei & Handwerk',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop',
    tag: 'Relaunch',
  },
  {
    title: 'Website-Relaunch Consulting-Firma',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop',
  },
  {
    title: 'Broschüre für Projektentwickler',
    category: 'Print Design',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop',
  },
  {
    title: 'Anzeigenkampagne für Großflughafen',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&auto=format&fit=crop',
  },
  {
    title: 'Broschüre für Finanzdienstleister',
    category: 'Print Design',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop',
  },
  {
    title: 'Unternehmensflyer für Apotheke',
    category: 'Print Design',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&auto=format&fit=crop',
  },
  {
    title: 'Werbekampagne für Bauprojekt',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&auto=format&fit=crop',
  },
  {
    title: 'WordPress-Website für Agentur',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop',
  },
  {
    title: 'AEG Broschüre: Markenkommunikation',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1526628953301-3cd7650e7284?w=600&auto=format&fit=crop',
  },
  {
    title: 'Prospekt für GlasKlar GmbH',
    category: 'Print Design',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop',
  },
  {
    title: 'Logoentwicklung für Lekkerland',
    category: 'Logodesign',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&auto=format&fit=crop',
  },
]

export default function PortfolioSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [activeCategory, setActiveCategory] = useState('Alle')

  const filtered = activeCategory === 'Alle'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="referenzen" ref={ref} className="section-black py-16 sm:py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="tag-badge mb-4">PORTFOLIO</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Von Website bis Corporate Design:{' '}
            <span className="text-[#FF006E]">Projekte mit Wirkung.</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Ein starker Auftritt entsteht nicht durch Zufall, sondern durch zielgerichtetes Design, klare Struktur und ein Gespür für Zielgruppe und Markenidentität.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#FF006E] text-white shadow-md shadow-[#FF006E]/30'
                  : 'text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-xl aspect-[4/3] sm:aspect-square group bg-gray-900 border border-white/10 shadow-lg cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#FF006E] text-[11px] font-bold uppercase tracking-wider mb-1">
                    {project.category}
                  </span>
                  <p className="text-white text-sm font-semibold leading-snug drop-shadow-md">
                    {project.title}
                  </p>
                </div>

                {/* Tag badge if exists */}
                {project.tag && (
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded border border-white/10">
                    {project.tag}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
