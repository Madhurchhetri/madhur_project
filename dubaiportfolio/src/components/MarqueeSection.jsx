export default function MarqueeSection({ dark = true }) {
  const words = [
    'Webdesign', '•', 'Logodesign', '•', 'Branding', '•', 'Grafikdesign', '•',
    'Corporate Design', '•', 'SEO', '•', 'Print Design', '•', 'Social Media', '•',
    'Landingpages', '•', 'Wordpress', '•', 'Responsive Design', '•',
  ]

  // Duplicate list to achieve continuous loop without blank spaces
  const repeatedWords = [...words, ...words]

  return (
    <div
      className="py-4 sm:py-5 overflow-hidden w-full relative select-none border-y"
      style={{
        background: dark ? '#0a0a0a' : '#fafafa',
        borderColor: dark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
      }}
    >
      <div className="marquee-inner">
        {repeatedWords.map((word, i) => (
          <span
            key={i}
            className={`text-xs sm:text-sm font-bold tracking-wider uppercase px-3 sm:px-4 whitespace-nowrap flex items-center ${
              word === '•'
                ? 'text-[#FF006E] text-base'
                : dark
                ? 'text-white/70'
                : 'text-gray-700'
            }`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}
