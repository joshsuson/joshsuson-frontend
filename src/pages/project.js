import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import JobSection from "../components/JobSection"
import SEO from "../components/SEO"

export default function ProjectPage({ data }) {
  return (
    <Layout>
      <SEO title="Projects" />
      <div className="mb-20">
        <JobSection
          data={data.allSanityJob.edges}
          heading="My Recent Work"
          page="/all-jobs"
          buttonText="See All of my Work"
          subtitle="The most recent jobs I've completed"
          type="job"
        />
        <JobSection
          data={data.allSanityProject.edges}
          heading="Practice Projects"
          subtitle="Projects, for fun, to help me learn"
          page="/all-projects"
          buttonText="See all my Projects"
          type="project"
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allSanityJob(sort: { fields: _createdAt, order: DESC }, limit: 6) {
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
    allSanityProject(sort: { fields: _createdAt, order: DESC }, limit: 6) {
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
