import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'LEISTUNGEN', href: '#leistungen' },
  { label: 'REFERENZEN', href: '#referenzen' },
  { label: 'ÜBER MICH', href: '#ueber-mich' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group select-none">
          <div className="relative">
            <div className="w-8 h-8 bg-[#FF006E] rounded flex items-center justify-center shadow-md shadow-[#FF006E]/30 group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-sm">D</span>
            </div>
          </div>
          <div className="leading-tight">
            <div className="text-white font-black text-sm tracking-widest flex items-center gap-1">
              DNKLDSGN
            </div>
            <div className="text-gray-400 text-[9px] tracking-wider uppercase font-medium">
              Webdesign • Branding • Marketing
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link relative py-1 hover:text-[#FF006E] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#kontakt"
            className="btn-pink text-xs uppercase tracking-wider py-2.5 px-6"
          >
            Kontakt
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} className="text-[#FF006E]" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-black/98 border-t border-white/10 px-6 pt-2 pb-6 overflow-hidden"
          >
            <div className="flex flex-col divide-y divide-white/5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-3.5 text-white/90 hover:text-[#FF006E] font-medium text-sm tracking-wider transition-colors flex items-center justify-between"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{link.label}</span>
                  <span className="text-[#FF006E] text-xs opacity-60">→</span>
                </a>
              ))}
            </div>
            <div className="pt-4 mt-2">
              <a
                href="#kontakt"
                className="btn-pink w-full justify-center text-sm py-3"
                onClick={() => setMobileOpen(false)}
              >
                Jetzt anfragen
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
