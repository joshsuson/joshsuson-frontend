import React from "react"
import Img from "gatsby-image"

export default function TechLogo({ image, name }) {
  return (
    <Img className="w-5/12 md:w-3/12 lg:w-2/12" fluid={image} alt={`${name}`} />
  )
}
