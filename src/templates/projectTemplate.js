import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import PortableText from "react-portable-text"
import Img from "gatsby-image"
import Heading from "../components/Heading"

export default function JobTemplate({ data: { project } }) {
  const serializers = {
    li: ({ children }) => (
      <li className="list-disc ml-6 leading-relaxed mt-2">{children}</li>
    ),
    normal: ({ children }) => (
      <p className="mb-2 leading-loose text-md">{children}</p>
    ),
    ul: ({ children }) => <ul className="list-inside mt-4">{children}</ul>,
  }

  return (
    <Layout>
      <div className="mb-12">
        <Img
          className="rounded-t-lg"
          fluid={project.featuredImage.asset.fluid}
        />
      </div>
      <Heading text={project.name} align="text-center" />
      <div className="mt-12 w-11/12 mx-auto grid grid-cols-2 grid-rows-2 grid-flow-col gap-12 mb-12">
        <div>
          <h5 className="mb-4">
            <span className="text-xl text-bold custom-underline">
              Project Task
            </span>
          </h5>
          <PortableText
            content={project._rawProjectTask}
            serializers={serializers}
          />
        </div>
        <div>
          <h5 className="mb-4">
            <span className="text-xl text-bold custom-underline">
              Project Solution
            </span>
          </h5>
          <PortableText
            content={project._rawProjectSolution}
            serializers={serializers}
          />
        </div>
        <div>
          <h5 className="mb-4">
            <span className="text-xl text-bold custom-underline">
              Tech Used For Project
            </span>
          </h5>
          <div className="flex flex-row flex-wrap justify-between">
            {project.technologiesUsed.map(tech => (
              <Img className="w-36" fluid={tech.logo.asset.fluid} />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-12">
        <a
          className="bg-gradient-to-r from-customRed to-orange p-4 w-4/12 block mx-auto text-center uppercase text-white rounded-lg hover:shadow-2xl shadow-xl tracking-wide"
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
        >
          View Live Site
        </a>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      name
      description
      _rawProjectTask
      _rawProjectSolution
      liveUrl
      featuredImage {
        asset {
          fluid(maxWidth: 1500) {
            ...GatsbySanityImageFluid
          }
        }
      }
      technologiesUsed {
        logo {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
