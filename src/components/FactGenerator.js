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
      <h2>Random Facts</h2>
      <div>
        <h4>{fact}</h4>
      </div>
      <button onClick={handleClick}>Generate Fact</button>
    </>
  )
}
