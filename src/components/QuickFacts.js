import React, { useState, useEffect } from "react"
import FactIcon from "./FactIcon"
import QuickFact from "./QuickFact"
import { MdLocationOn } from "react-icons/md"
import { BsFillPeopleFill, BsFillPuzzleFill } from "react-icons/bs"
import { FaReact, FaLightbulb } from "react-icons/fa"

export default function QuickFacts() {
  const year = new Date().getFullYear()
  const [marriedYears, setMarriedYears] = useState(null)

  useEffect(() => {
    setMarriedYears(year - 2012)
  }, [year])
  return (
    <>
      <h2 className="text-center uppercase text-2xl mb-4">Quick Facts</h2>
      <QuickFact fact="I live in Concord, NC">
        <FactIcon>
          <MdLocationOn style={{ fill: "url(#main-gradient)" }} />
        </FactIcon>
      </QuickFact>
      <QuickFact fact={`I've been married ${marriedYears} years`}>
        <FactIcon>
          <BsFillPeopleFill style={{ fill: "url(#main-gradient)" }} />
        </FactIcon>
      </QuickFact>
      <QuickFact fact="I have 3 kids, 2 girls and 1 boy">
        <FactIcon>
          <BsFillPuzzleFill style={{ fill: "url(#main-gradient)" }} />
        </FactIcon>
      </QuickFact>
      <QuickFact fact="React is currently my go to framework/language">
        <FactIcon>
          <FaReact style={{ fill: "url(#main-gradient)" }} />
        </FactIcon>
      </QuickFact>
      <QuickFact fact="I'm always learning something new">
        <FactIcon>
          <FaLightbulb style={{ fill: "url(#main-gradient" }} />
        </FactIcon>
      </QuickFact>
    </>
  )
}
