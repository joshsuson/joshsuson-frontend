import React from "react"
import JobCard from "./JobCard"
import Heading from "./Heading"
import MainButton from "./MainButton"

export default function JobSection({
  data,
  heading,
  page,
  buttonText,
  subtitle,
}) {
  return (
    <div className="pt-14">
      <Heading text={heading} align="text-center" />
      {subtitle && (
        <h4 className="text-center italic text-gray-700 text-xl mt-4">
          {subtitle}
        </h4>
      )}
      <div className="px-12 pt-16 grid grid-cols-3 gap-10 justify-around mb-16">
        {data.map(({ node }) => {
          return (
            <JobCard
              key={node.name}
              name={node.name}
              image={node.featuredImage.asset.fluid}
              slug={node.slug.current}
              tech={node.technologiesUsed}
              desc={node.description}
            />
          )
        })}
      </div>
      <MainButton page={page} text={buttonText} />
    </div>
  )
}
