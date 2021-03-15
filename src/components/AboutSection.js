import React from "react"
import Heading from "./Heading"
import MainButton from "./MainButton"
import { StaticImage } from "gatsby-plugin-image"

export default function AboutSection() {
  return (
    <div className="flex gap-10 pt-16 px-10 mb-12">
      <div className="w-6/12">
        <div className="bg-gradient-to-r from-customRed to-orange ">
          <StaticImage
            className="relative transform -translate-x-3 -translate-y-2"
            src="../assets/images/josh-pc.jpg"
            alt="Josh on his laptop"
          />
        </div>
      </div>
      <div className="w-6/12">
        <Heading text="Hi. I'm Glad You're Here" align="text-left" />
        <p className=" leading-7 my-10">
          My name is Josh Suson (in case you missed the title). I'm a Front End
          Web Developer that's learning to develop applications as well. I spend
          most of my time in Javascript. The most important thing to know about
          me is that I'm on a mission to create products that help the world be
          a better place through the internet.
        </p>
        <MainButton page="/about" text="More About Me" />
      </div>
    </div>
  )
}
