import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import Nav from "./Nav"

export default function Header() {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  return (
    <motion.div
      className="sticky top-0 py-8"
      style={{ scaleY: scale, opacity }}
    >
      <header>
        <h2 className="text-center text-4xl lg:text-5xl py-4 uppercase text-white">
          Josh Suson
        </h2>
        <Nav />
      </header>
    </motion.div>
  )
}
