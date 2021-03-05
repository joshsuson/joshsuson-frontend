import React, { useEffect } from "react"
import Layout from "../components/Layout"
import { motion, useViewportScroll, useTransform } from "framer-motion"

export default function AboutPage() {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <Layout>
      <h1>This is the about page</h1>
      <motion.div
        style={{ scale: scale }}
        className="w-28 bg-red-500 h-28 mx-auto"
      />
    </Layout>
  )
}
