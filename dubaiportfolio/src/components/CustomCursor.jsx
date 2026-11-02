import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [isPointerDevice, setIsPointerDevice] = useState(true)

  const mouseX = useSpring(-100, { stiffness: 500, damping: 30 })
  const mouseY = useSpring(-100, { stiffness: 500, damping: 30 })
  const followerX = useSpring(-100, { stiffness: 150, damping: 20 })
  const followerY = useSpring(-100, { stiffness: 150, damping: 20 })

  useEffect(() => {
    // Check if the device has a mouse / fine pointer
    const matchMedia = window.matchMedia('(hover: hover) and (pointer: fine)')
    setIsPointerDevice(matchMedia.matches)

    const handlePointerChange = (e) => {
      setIsPointerDevice(e.matches)
    }
    matchMedia.addEventListener('change', handlePointerChange)

    const moveCursor = (e) => {
      if (!visible) setVisible(true)
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      followerX.set(e.clientX)
      followerY.set(e.clientY)
    }

    const handleMouseLeave = () => setVisible(false)
    const handleMouseEnter = () => setVisible(true)

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      matchMedia.removeEventListener('change', handlePointerChange)
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [visible])

  if (!isPointerDevice || !visible) return null

  return (
    <>
      <motion.div
        className="cursor"
        style={{ left: mouseX, top: mouseY }}
      />
      <motion.div
        className="cursor-follower"
        style={{ left: followerX, top: followerY }}
      />
    </>
  )
}
