import React from "react"

export default function FactIcon({ children }) {
  return (
    <div className="text-5xl">
      <svg width="0" height="0">
        <linearGradient id="main-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#ffbd76" offset="0%" />
          <stop stopColor="#fb4140" offset="100%" />
        </linearGradient>
      </svg>
      {children}
    </div>
  )
}
