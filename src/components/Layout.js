import React from "react"
import Nav from "./Nav"
import { motion, useViewportScroll, useTransform } from "framer-motion"

export default function Layout({ children }) {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  return (
    <div>
      <motion.div className="sticky top-0" style={{ scaleY: scale, opacity }}>
        <header>
          <h2 className="text-center text-4xl py-4 uppercase text-white">
            Josh Suson
          </h2>
          <Nav />
        </header>
      </motion.div>
      <main className="bg-white max-w-5xl h-screen mx-auto rounded-t-xl">
        {children}
      </main>
    </div>
  )
}
