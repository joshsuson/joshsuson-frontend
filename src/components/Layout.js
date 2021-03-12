import React from "react"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="mx-auto rounded-xl relative z-10 main-glass">
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
