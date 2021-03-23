import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export default function ProfilePicture() {
  const data = useStaticQuery(graphql`
    {
      allSanityProfile {
        edges {
          node {
            altText
            picture {
              asset {
                fluid(maxWidth: 400) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="my-14">
      <div className="mx-auto bg-gradient-to-r from-customRed to-orange h-64 w-64 circle grid place-content-center ">
        <Img
          className="h-60 w-60 circle"
          fluid={data.allSanityProfile.edges[0].node.picture.asset.fluid}
          alt={data.allSanityProfile.edges[0].node.altText}
        />
      </div>
    </div>
  )
}
