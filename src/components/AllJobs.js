import React from "react"
import Heading from "./Heading"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default function AllJobs({ data, heading, type }) {
  return (
    <div>
      <Heading text={heading} align="text-center my-16" />
      <div className="px-12">
        {data.map(job => (
          <div className="grid gap-4 mb-20 grid-cols-3">
            <div>
              <div className="w-80 h-60 bg-gradient-to-r from-customRed to-orange">
                <Img
                  className="h-full transform translate-x-2 translate-y-2"
                  fluid={job.featuredImage.asset.fluid}
                />
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="text-xl tracking-wide mb-1">{job.name}</h2>
              <h4 className="italic text-gray-700 mb-4">{job.description}</h4>
              <div className="grid grid-rows-4 grid-cols-6 grid-flow-col gap-2 mb-4">
                {job.technologiesUsed.map(tech => (
                  <p
                    className="rounded-sm text-center py-1 text-sm"
                    style={{ backgroundColor: `${tech.color}` }}
                  >
                    {tech.name}
                  </p>
                ))}
              </div>
              <div className="p-0.5 transition-all">
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
