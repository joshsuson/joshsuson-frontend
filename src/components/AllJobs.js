import React from "react"
import Heading from "./Heading"
import Img from "gatsby-image"

export default function AllJobs({ data, heading }) {
  return (
    <div>
      <Heading text={heading} align="text-center my-16" />
      <div className="px-12">
        {data.map(job => (
          <div className="grid gap-4 mb-8 grid-cols-3">
            <div>
              <div className="w-80 h-60 bg-gradient-to-r from-customRed to-orange">
                <Img
                  className="h-full transform translate-x-2 translate-y-2"
                  fluid={job.featuredImage.asset.fluid}
                />
              </div>
            </div>
            <h2 className="col-span-2">{job.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
