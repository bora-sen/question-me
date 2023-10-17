import React from "react"
import { Route, Routes } from "react-router-dom"
import { CreateTest, Landing } from "./pages"
import { Header, Footer } from "./components"

function MainRouter() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create-test" element={<CreateTest />} />
      </Routes>
      <Footer />
    </>
  )
}

export default MainRouter
