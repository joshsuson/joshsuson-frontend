import React from "react"
import Heading from "./Heading"
import QuickFacts from "./QuickFacts"
import FactGenerator from "./FactGenerator"

export default function FactsSection() {
  return (
    <div>
      <Heading text="Even More About Me" />
      <div className="grid grid-cols-2 mt-10 px-8">
        <div>
          <QuickFacts />
        </div>
        <div>
          <FactGenerator />
        </div>
      </div>
    </div>
  )
}
