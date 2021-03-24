import React from "react"
import FooterNav from "./FooterNav"
import FooterForm from "./FooterForm"
import { FaTwitter, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa"
import { motion, useViewportScroll, useTransform } from "framer-motion"

export default function Footer() {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0.8, 1], [0, 1])
  const opacity = useTransform(scrollYProgress, [0.7, 1], [0, 1])

  return (
    <motion.div
      style={{ scaleY: scale, opacity }}
      className="max-w-5xl mt-10 mx-auto text-center sticky bottom-0"
    >
      <footer>
        <h2 className="text-white text-2xl md:text-3xl">Connect with me</h2>
        <h4 className="text-gray-700 italic mt-2 text-lg md:text-xl">
          I'd love to hear from you
        </h4>
        <div className="flex justify-center mt-4 mb-8 text-white gap-6">
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
          <a
            className="border border-transparent hover:border-gray-300 p-1"
            href="mailto:josh.suson@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope size="2em" />
          </a>
        </div>
        <FooterNav />
        <div className="text-white text-sm md:text-lg font-thin tracking-wide mt-6 mb-4 opacity-75">
          Built with{" "}
          <span className="bg-white text-center hover:bg-transparent">
            <a
              className="font-semibold bg-gradient-to-r from-customRed to-orange bg-clip-text text-transparent p-1 text-center hover:text-white tracking-wider"
              href="https://www.gatsbyjs.com/"
            >
              Gatsby.
            </a>
          </span>{" "}
          Content managed with{" "}
          <span className="bg-white text-center hover:bg-transparent">
            <a
              className="font-semibold bg-gradient-to-r from-customRed to-orange bg-clip-text text-transparent p-1 text-center hover:text-white tracking-wider"
              href="https://www.sanity.io/"
            >
              Sanity.io.
            </a>
          </span>{" "}
          Hosted on{" "}
          <span className="bg-white text-center hover:bg-transparent">
            <a
              className="font-semibold bg-gradient-to-r from-customRed to-orange bg-clip-text text-transparent p-1 text-center hover:text-white tracking-wider"
              href="https://www.gatsbyjs.com/cloud/"
            >
              Gatsby Cloud.
            </a>
          </span>
        </div>
      </footer>
    </motion.div>
  )
}
