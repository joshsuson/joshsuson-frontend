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
  type,
}) {
  return (
    <div className="pt-14 px-4 lg:px-14">
      <Heading text={heading} align="text-center" />
      {subtitle && (
        <h4 className="text-center italic text-gray-700 text-xl mt-4">
          {subtitle}
        </h4>
      )}
      <div className="pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-around mb-20">
        {data.map(({ node }) => {
          return (
            <JobCard
              key={node.name}
              name={node.name}
              image={node.featuredImage.asset.fluid}
              slug={node.slug.current}
              tech={node.technologiesUsed}
              desc={node.description}
              type={type}
            />
          )
        })}
      </div>
      <MainButton page={page} text={buttonText} />
    </div>
  )
}
