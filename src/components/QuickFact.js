import React from "react"

export default function QuickFact({ fact, children }) {
  return (
    <div className="flex items-center mb-4">
      {children}
      <h6 className="lg:text-xl font-semibold ml-4">{fact}</h6>
    </div>
  )
}
