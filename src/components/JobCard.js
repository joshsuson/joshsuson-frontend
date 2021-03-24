import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default function JobCard({ name, image, tech, slug, desc, type }) {
  return (
    <div className="shadow-2xl rounded-lg flex flex-col card-glass">
      <Img
        className="rounded-t-lg h-48"
        fluid={image}
        alt={`${name} screenshot`}
      />
      <div className="grid grid-rows-2 px-4 gap-2">
        <div className="mt-4">
          <h2 className="text-center text-sm font-bold tracking-wide mb-2">
            {name}
          </h2>
          <p className="italic text-sm text-gray-400">{desc}</p>
        </div>
        <div className="flex flex-row flex-wrap mb-6">
          {tech.map(t => (
            <div
              className="py-1 px-2 my-1 mr-2  text-sm rounded-sm"
              key={t.name}
              style={{ backgroundColor: t.color }}
            >
              {t.name}
            </div>
          ))}
        </div>
      </div>
      <div className="mb-6 mt-auto   p-0.5 mx-auto transition-all">
        <Link
          className="bg-gradient-to-r from-customRed to-orange block text-center bg-clip-text text-transparent uppercase text-base font-semibold tracking-wide p-1"
          to={`/${type}/${slug}`}
        >
          <span className="underline-hover">Read the case study</span>
        </Link>
      </div>
    </div>
  )
}
