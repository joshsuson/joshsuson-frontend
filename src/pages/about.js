import React from "react"
import AboutBlurb from "../components/AboutBlurb"
import Layout from "../components/Layout"
import MissionSection from "../components/MissionSection"
import ProfilePicture from "../components/ProfilePicture"
import FactsSection from "../components/FactsSection"
import SEO from "../components/SEO"

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About Me" />
      <ProfilePicture />
      <AboutBlurb />
      <MissionSection />
      <FactsSection />
    </Layout>
  )
}
