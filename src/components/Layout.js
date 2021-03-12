import React from "react"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto rounded-xl relative z-10 main-glass">
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  )
}
