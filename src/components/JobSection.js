import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import JobCard from "./JobCard"
import Heading from "./Heading"
import MainButton from "./MainButton"

export default function JobSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityJob {
        edges {
          node {
            name
            description
            featuredImage {
              asset {
                fluid(maxWidth: 400) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            technologiesUsed {
              name
              color
            }
            slug {
              current
            }
          }
        }
      }
    }
  `)

  return (
    <div className="pt-14">
      <Heading text="My Latest Work" align="text-center" />
      <div className="px-12 pt-16 grid grid-cols-3 gap-10 justify-around mb-16">
        {data.allSanityJob.edges.map(({ node }) => {
          return (
            <JobCard
              key={node.name}
              name={node.name}
              image={node.featuredImage.asset.fluid}
              slug={node.slug.current}
              tech={node.technologiesUsed}
              desc={node.description}
            />
          )
        })}
      </div>
      <MainButton page="/project" text="See More of my Work" />
    </div>
  )
}
