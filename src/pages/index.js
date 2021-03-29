import React from "react"
import Layout from "../components/Layout"
import AboutSection from "../components/AboutSection"
import JobSection from "../components/JobSection"
import LogoSection from "../components/LogoSection"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <AboutSection />
      <JobSection
        data={data.allSanityJob.edges}
        heading="My Latest Work"
        page="/project"
        buttonText="See More of my Work"
        type="job"
      />
      <LogoSection />
    </Layout>
  )
}

export const query = graphql`
  {
    allSanityJob(sort: { fields: _createdAt, order: DESC }, limit: 3) {
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
`
