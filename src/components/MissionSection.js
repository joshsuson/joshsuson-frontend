import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function MissionSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityProfile {
        edges {
          node {
            mission
          }
        }
      }
      allSanityValues {
        edges {
          node {
            name
            description
          }
        }
      }
    }
  `)
  return (
    <div className="px-8 py-8">
      <div className="mb-8">
        <h2 className="text-center uppercase pb-3 text-3xl font-semibold">
          My Mission
        </h2>
        <p>{data.allSanityProfile.edges[0].node.mission}</p>
      </div>
      <div className="pt-8">
        <h2 className="text-center uppercase pb-3 text-3xl font-semibold">
          My Values
        </h2>
        <ul>
          {data.allSanityValues.edges.map(({ node }) => (
            <li className="mb-4 leading-relaxed" key={node.name}>
              <span className="text-lg font-semibold mr-2 mb-2 custom-underline">
                {node.name}:{" "}
              </span>
              <p className="inline">{node.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
