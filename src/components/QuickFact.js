import React from "react"

export default function QuickFact({ fact, children }) {
  return (
    <div className="flex items-center">
      {children}
      <h4 className="text-xl">{fact}</h4>
    </div>
  )
}
