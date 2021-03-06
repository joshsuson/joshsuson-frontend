import React from "react"
import Heading from "./Heading"

export default function AboutBlurb() {
  return (
    <div className="px-2 lg:px-14">
      <Heading
        text="Development With Purpose"
        align="text-center w-7/12 mx-auto md:w-auto lg:mx-0"
      />
      <p className="leading-relaxed mt-2 py-8 px-2 lg:px-8 text-center">
        My name is Josh Suson. I'm a frontend web developer from Concord, North
        Carolina. I believe that the internet and digital products are some of
        the greatest tools mankind has ever invented. Unfortunately, these
        things are being used for the wrong reasons in a lot of people's lives.
        I want to change that. When I decided to become a developer, it wasn't
        just so I could make cool things. It was so I could make cool things
        with a purpose. So I decided to develop on a mission. I want to create
        beautiful, simple products that create a positive impact on people's
        lives. If you'd like to know more how I do that or find out some fun
        things about me, please keep reading.
      </p>
    </div>
  )
}
