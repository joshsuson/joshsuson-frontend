import React from "react"
import Heading from "./Heading"
import MainButton from "./MainButton"

export default function AboutSection() {
  return (
    <div className="pt-14">
      <Heading text="Hi. I'm Glad You're Here" />
      <p className="text-center mt-10 max-w-2xl mx-auto leading-7">
        My name is Josh Suson (in case you missed the title). I'm a Front End
        Web Developer that's learning to develop applications as well. I spend
        most of my time in Javascript. However, I love learning new things so
        it's not strange to find me spending time dabbling in other languages.
        I've always loved all things digital and am passionate about new
        technologies. The most important thing to know about me is that I'm on a
        mission to create products that help the world be a better place through
        the internet.
      </p>
      <MainButton page="/about" text="More About Me" />
    </div>
  )
}
