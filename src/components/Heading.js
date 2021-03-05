import React from "react"

export default function Heading({ text }) {
  return (
    <h1 className="text-5xl text-center">
      <span className="relative">
        <span className="z-20 relative">{text}</span>
        <span className="highlight h-3 w-full absolute bottom-1 left-0 z-10" />
      </span>
    </h1>
  )
}
