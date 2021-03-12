import React from "react"
import { Link } from "gatsby"

export default function MainButton({ text, page }) {
  return (
    <div className="my-16 mx-auto max-w-sm text-center p-1 bg-gradient-to-r from-customRed to-orange rounded-md shadow-lg hover:shadow-2xl hover-scale">
      <Link
        to={page}
        className="bg-gradient-to-r from-customRed to-orange p-3 rounded-md block text-center text-gray-100 uppercase text-base"
      >
        {text}
      </Link>
    </div>
  )
}
