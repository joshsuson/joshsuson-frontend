import React from "react"
import Img from "gatsby-image"

export default function TechLogo({ image }) {
  return <Img className="w-2/12" fluid={image} />
}
