import React, { useState } from "react"

function Question({ data, setQuestionSolveRequests }) {
  const [truePrefix, setTruePrefix] = useState("")
  const choiceA = data.choices.find((choice) => choice.prefix === "a")
  const choiceB = data.choices.find((choice) => choice.prefix === "b")
  const choiceC = data.choices.find((choice) => choice.prefix === "c")
  const choiceD = data.choices.find((choice) => choice.prefix === "d")

  function handleAnswerQuestion(e) {
    e.preventDefault()
    e.target.disabled = true
    const requestObject = {
      id: data.id,
      truePrefix,
    }
    setQuestionSolveRequests((old) => [...old, requestObject])
  }
  return (
    <div className="col-lg-6 px-4 py-4 my-4 border rounded mx-auto">
      <div className="row g-3 align-items-center">
        <div className="col col-auto">
          <span className="fw-semibold fs-5">{data.title}</span>
        </div>
      </div>

      {/* Choice a */}
      <div className="row g-3 align-items-center my-2">
        <div className="col col-auto">
          <input type="radio" onChange={(e) => setTruePrefix("a")} name={`choice_of_${data.id}`} id={`choice_of_${data.id}_a`} className="form-check-input" />
        </div>
        <div className="col col-auto">
          <span>a ) </span>
        </div>
        <div className="col">
          <span id={`choice_of_${data.id}_title_a`}>{choiceA.title}</span>
        </div>
      </div>

      {/* Choice b */}
      <div className="row g-3 align-items-center my-2">
        <div className="col col-auto">
          <input type="radio" onChange={(e) => setTruePrefix("b")} name={`choice_of_${data.id}`} id={`choice_of_${data.id}_b`} className="form-check-input" />
        </div>
        <div className="col col-auto">
          <span>b ) </span>
        </div>
        <div className="col">
          <span id={`choice_of_${data.id}_title_b`}>{choiceB.title}</span>
        </div>
      </div>

      {/* Choice c */}
      <div className="row g-3 align-items-center my-2">
        <div className="col col-auto">
          <input type="radio" onChange={(e) => setTruePrefix("c")} name={`choice_of_${data.id}`} id={`choice_of_${data.id}_c`} className="form-check-input" />
        </div>
        <div className="col col-auto">
          <span>c ) </span>
        </div>
        <div className="col">
          <span id={`choice_of_${data.id}_title_c`}>{choiceC.title}</span>
        </div>
      </div>

      {/* Choice d */}
      <div className="row g-3 align-items-center my-2">
        <div className="col col-auto">
          <input type="radio" onChange={(e) => setTruePrefix("d")} name={`choice_of_${data.id}`} id={`choice_of_${data.id}_d`} className="form-check-input" />
        </div>
        <div className="col col-auto">
          <span>d ) </span>
        </div>
        <div className="col">
          <span id={`choice_of_${data.id}_title_d`}>{choiceD.title}</span>
        </div>
      </div>

      {/* Save Question Button */}
      <div className="row pt-4 pb-2 justify-content-end">
        <div className="col col-auto">
          <button className="btn btn-secondary" onClick={(e) => handleAnswerQuestion(e)}>
            Answer Question
          </button>
        </div>
      </div>
    </div>
  )
}

export default Question
