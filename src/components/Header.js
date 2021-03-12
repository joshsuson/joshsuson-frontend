import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import Nav from "./Nav"

export default function Header() {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <motion.div style={{ scaleY: scale, opacity }}>
      <header>
        <h2 className="sticky top-0 text-center text-4xl py-4 uppercase text-white">
          Josh Suson
        </h2>
        <Nav />
      </header>
    </motion.div>
  )
}
