import React from "react"
import Heading from "./Heading"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default function AllJobs({ data, heading, type }) {
  return (
    <div className="px-4 lg:px-14 pt-20 mb-20">
      <Heading text={heading} align="text-center mb-20" />
      <div>
        {data.map(job => (
          <div className="grid gap-6 lg:gap-14 xl:gap-20 mb-16 lg:mb-20 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <div className="xl:w-80 lg:h-60 bg-gradient-to-r from-customRed to-orange">
                <Img
                  className="h-full transform translate-x-2 translate-y-2"
                  fluid={job.featuredImage.asset.fluid}
                />
              </div>
            </div>
            <div className="xl:col-span-2">
              <h2 className="text-xl tracking-wide mb-1">{job.name}</h2>
              <h4 className="italic text-gray-700 mb-4">{job.description}</h4>
              <div className="grid lg:grid-rows-4 grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 lg:grid-flow-col gap-2 mb-4">
                {job.technologiesUsed.map(tech => (
                  <p
                    className="rounded-sm text-center py-1 text-sm"
                    style={{ backgroundColor: `${tech.color}` }}
                  >
                    {tech.name}
                  </p>
                ))}
              </div>
              <div className="p-0.5 transition-all  lg:text-left text-center mt-8">
                <Link
                  className="bg-gradient-to-r from-customRed to-orange block bg-clip-text text-transparent uppercase text-base font-semibold tracking-wide"
                  to={`/${type}/${job.slug.current}`}
                >
                  <span className="underline-hover">Read the case study</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
