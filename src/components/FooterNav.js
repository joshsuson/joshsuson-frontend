import React from "react"
import { Link } from "gatsby"

export default function FooterNav() {
  return (
    <div>
      <nav>
        <Link
          to="/"
          className="text-white uppercase px-3 py-1 border border-transparent hover:border-gray-300 transition"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white uppercase px-3 py-1 border border-transparent hover:border-gray-300 transition"
        >
          About
        </Link>
        <Link
          to="/project"
          className="text-white uppercase px-3 py-1 border border-transparent hover:border-gray-300 transition"
        >
          Projects
        </Link>
      </nav>
    </div>
  )
}
