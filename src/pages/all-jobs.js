import React from "react"
import Layout from "../components/Layout"
import AllJobs from "../components/AllJobs"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default function AllJobsPage({ data }) {
  return (
    <Layout>
      <SEO title="All Jobs" />
      <AllJobs data={data.allSanityJob.nodes} heading="All Jobs" type="job" />
    </Layout>
  )
}

export const query = graphql`
  {
    allSanityJob(sort: { fields: _createdAt, order: DESC }) {
      nodes {
        featuredImage {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        description
        name
        slug {
          current
        }
        technologiesUsed {
          color
          name
        }
      }
    }
  }
`
