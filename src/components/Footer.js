import React from "react"
import FooterNav from "./FooterNav"
import FooterForm from "./FooterForm"
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { motion, useViewportScroll, useTransform } from "framer-motion"

export default function Footer() {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0.8, 1], [0, 1])
  const opacity = useTransform(scrollYProgress, [0.7, 1], [0, 1])

  return (
    <motion.div
      style={{ scaleY: scale, opacity }}
      className="max-w-5xl mt-14 mx-auto text-center sticky bottom-0"
    >
      <footer>
        <FooterForm />
        <FooterNav />
        <div className="flex justify-center mt-8 text-white gap-6">
          <a
            className="border border-transparent hover:border-gray-300 p-1"
            href="https://twitter.com/joshsuson"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size="2em" />
          </a>
          <a
            className="border border-transparent hover:border-gray-300 p-1"
            href="https://github.com/joshsuson"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size="2em" />
          </a>
          <a
            className="border border-transparent hover:border-gray-300 p-1"
            href="https://www.linkedin.com/in/joshsuson"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn size="2em" />
          </a>
        </div>
        <div className="text-white text-sm font-thin tracking-wide mt-6 mb-4 opacity-75">
          © 2021 joshsuson.com | All Rights Reserved
        </div>
      </footer>
    </motion.div>
  )
}
