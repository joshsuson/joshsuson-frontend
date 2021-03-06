import React from "react"
import Layout from "../components/Layout"
import AllJobs from "../components/AllJobs"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default function AllProjectsPage({ data }) {
  return (
    <Layout>
      <SEO title="All Projects" />
      <AllJobs
        data={data.allSanityProject.nodes}
        heading="All Projects"
        type="project"
      />
    </Layout>
  )
}

export const query = graphql`
  {
    allSanityProject(sort: { fields: _createdAt, order: DESC }) {
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
