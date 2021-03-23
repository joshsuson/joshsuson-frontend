import React from "react"
import Heading from "./Heading"
import QuickFacts from "./QuickFacts"
import FactGenerator from "./FactGenerator"

export default function FactsSection() {
  return (
    <div className="mb-20 px-4 lg:px-14">
      <Heading text="Even More About Me" align="text-center" />
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-16">
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
