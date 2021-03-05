import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function JobSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityJob {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allSanityJob.edges.map(({ node }) => (
        <h1>{node.name}</h1>
      ))}
    </div>
  )
}
