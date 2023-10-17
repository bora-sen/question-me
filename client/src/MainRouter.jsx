import React from "react"
import { Route, Routes } from "react-router-dom"
import { CreateTest, Landing, Result, SolveTest, SolveTestLink } from "./pages"
import { Header, Footer } from "./components"

function MainRouter() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create-test" element={<CreateTest />} />
        <Route path="/solve-test/:accessLink/:name" element={<SolveTestLink />} />
        <Route path="/solve-test" element={<SolveTest />} />
        <Route path="/get-result/:accessLink" element={<Result />} />
      </Routes>
      <Footer />
    </>
  )
}

export default MainRouter
