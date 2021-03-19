import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import PortableText from "react-portable-text"

export default function JobTemplate({ data: { job } }) {
  const serializers = {
    li: ({ children }) => <li className="text-green-500">{children}</li>,
  }

  return (
    <Layout>
      <h1>{job.name}</h1>
      <div>
        <PortableText content={job._rawProjectTask} serializers={serializers} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    job: sanityJob(slug: { current: { eq: $slug } }) {
      name
      skillsUsed
      description
      _rawProjectTask
      featuredImage {
        asset {
          fluid {
            src
          }
        }
      }
      projectTask {
        _rawChildren
      }
      projectSolution {
        _rawChildren
      }
      technologiesUsed {
        logo {
          asset {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
