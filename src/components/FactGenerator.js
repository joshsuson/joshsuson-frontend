import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function FactGenerator() {
  const [fact, setFact] = useState("Click the button to see a random fact")
  const [facts, setFacts] = useState([])
  const data = useStaticQuery(graphql`
    {
      allSanityProfile {
        edges {
          node {
            facts
          }
        }
      }
    }
  `)

  useEffect(() => {
    const factArray = []
    data.allSanityProfile.edges[0].node.facts.map(fact => factArray.push(fact))
    setFacts(factArray)
  }, [])

  const handleClick = () => {
    const random = Math.floor(Math.random() * facts.length)
    setFact(facts[random])
  }
  return (
    <>
      <h2 className="text-center uppercase text-xl lg:text-2xl mb-8 mt-8 lg:mt-0">
        Random Facts
      </h2>
      <div className="card-glass h-48 lg:h-60  grid place-content-center shadow-xl rounded-md text-center p-6">
        <h6 className="leading-loose text-lg lg:text-xl bg-gradient-to-r from-customRed to-orange bg-clip-text text-transparent text-shadow">
          {fact}
        </h6>
      </div>
      <button
        onClick={handleClick}
        className="bg-gradient-to-r from-customRed to-orange py-3 px-5 tracking-wide rounded-md block my-6 lg:w-6/12 mx-auto text-white uppercase"
      >
        Generate Fact
      </button>
    </>
  )
}
