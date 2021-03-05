import React from "react"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <div className="text-center pb-4">
      <nav>
        <Link
          className="text-white uppercase px-3 py-1 border border-transparent hover:border-gray-300 transition"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-white uppercase px-3 py-1 border border-transparent hover:border-gray-300 transition"
          to="/about"
        >
          About Me
        </Link>
        <Link
          className="text-white uppercase px-3 py-1 border border-transparent hover:border-gray-300 transition"
          to="/project"
        >
          Projects
        </Link>
      </nav>
    </div>
  )
}
