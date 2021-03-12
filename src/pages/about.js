import React from "react"
import AboutBlurb from "../components/AboutBlurb"
import Layout from "../components/Layout"
import MissionSection from "../components/MissionSection"
import ProfilePicture from "../components/ProfilePicture"
import FactsSection from "../components/FactsSection"

export default function AboutPage() {
  return (
    <Layout>
      <ProfilePicture />
      <AboutBlurb />
      <MissionSection />
      <FactsSection />
    </Layout>
  )
}
