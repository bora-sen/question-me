import React, { useState } from "react"

function SolveTest() {
  const [link, setLink] = useState("")
  const [name, setName] = useState("")
  return (
    <>
      <h2 className="fw-bold display-4 text-center">Solve Test</h2>
      <div className="col-lg-5 mx-auto">
        <p className="text-center w-50-lg mx-auto">
          Solve quiz with your name and share-link. You can view and share your results afterwards.
        </p>
      </div>
      <div className="container-lg text-center py-2">
        <div className="col-lg-4 mx-auto">
          <input
            onChange={(e) => setName(e.target.value)}
            className="form-control w-lg-25 mx-auto fs-4 my-2"
            placeholder="Enter your Name"
            type="text"
            name="redirectLinkInput"
            id="redirectLinkInput"
          />
          <input
            onChange={(e) => setLink(e.target.value)}
            className="form-control w-lg-25 mx-auto fs-4 my-2"
            placeholder="Enter your Access Code"
            type="text"
            name="redirectLinkInput"
            id="redirectLinkInput"
          />

          <a href={`/solve-test/${link}/${name}`} className="mx-auto btn btn-center btn-primary my-2 fs-3">
            Solve Test!
          </a>
        </div>
      </div>
    </>
  )
}

export default SolveTest
