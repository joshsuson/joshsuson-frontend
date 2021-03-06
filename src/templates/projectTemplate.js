import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import PortableText from "react-portable-text"
import Img from "gatsby-image"
import Heading from "../components/Heading"
import SEO from "../components/SEO"

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
      <SEO title={`${project.name}`} />
      <div className="mb-20">
        <div>
          <Img
            className="rounded-t-lg"
            fluid={project.featuredImage.asset.fluid}
          />
        </div>
        <Heading text={project.name} align="text-center my-16" />
        <div className="mt-12 px-4 lg:px-14 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:grid-flow-col gap-12 mb-12">
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
                <Img
                  className="w-4/12 md:w-3/12 lg:w-36"
                  fluid={tech.logo.asset.fluid}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mb-12">
          <a
            className="bg-gradient-to-r from-customRed to-orange p-4 w-11/12 md:w-4/12 block mx-auto text-center uppercase text-white rounded-lg hover:shadow-2xl shadow-xl tracking-wide"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            View Live Site
          </a>
        </div>
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
