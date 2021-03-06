import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TechLogo from "./TechLogo"
import Heading from "./Heading"

export default function LogoSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityTechnology {
        edges {
          node {
            logo {
              asset {
                fluid(maxWidth: 300) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            _id
            name
          }
        }
      }
    }
  `)
  return (
    <div className="py-14">
      <Heading text="Tech I Use" align="text-center" />
      <div className="flex flex-row flex-wrap justify-around px-12 gap-2 pt-14">
        {data.allSanityTechnology.edges.map(({ node }) => (
          <TechLogo
            key={node._id}
            image={node.logo.asset.fluid}
            name={node.name}
          />
        ))}
      </div>
    </div>
  )
}
