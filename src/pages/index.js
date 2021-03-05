import React from "react"
import Layout from "../components/Layout"
import AboutSection from "../components/AboutSection"
import JobSection from "../components/JobSection"

export default function Home() {
  return (
    <Layout>
      <AboutSection />
      <JobSection />
    </Layout>
  )
}
