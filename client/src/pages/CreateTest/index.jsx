import React, { useState } from "react"
import Question from "./Question"
import axios from "axios"

function CreateTest() {
  const [questionIds, setQuestionIds] = useState([])
  const [questions, setQuestions] = useState([])

  function createQuestion(e) {
    e.preventDefault()
    let newId = Math.floor(Math.random() * 10000)
    setQuestionIds((old) => [...old, { id: newId }])
  }

  async function createTest(e) {
    e.preventDefault()
    let testTitle = document.getElementById("test_title_input").value
    let newTest = {
      title: testTitle,
      questions,
    }
    const resp = await axios.post(`${import.meta.env.VITE_API_URL}/test/create`, newTest)
    if ((await resp.status) === 200) {
      console.log("new test is created!")
      console.log(resp.data.accessLink)
    } else {
      console.error("new test is not created!")
    }
  }

  return (
    <div className="container text-center">
      <h1 className="display-3 fw-bold text-center">Hello World</h1>
      <div className="col-lg-5 mx-auto">
        <p className="mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut debitis quos esse excepturi modi autem quam id recusandae voluptas impedit iste mollitia
          porro, totam dignissimos consectetur eveniet optio aliquid eligendi cupiditate? Dicta, cupiditate. Excepturi!
        </p>
      </div>
      <div className="col-lg-5 mx-auto">
        <input type="text" className="form-control mx-auto mb-4 fs-5" placeholder="Enter your test's name.." id="test_title_input" />
      </div>
      <div id="questions_container">
        {questionIds.map((id, key) => (
          <Question setQuestions={setQuestions} id={id.id} key={key} />
        ))}

        <div className="d-flex gap-2 align-items-center justify-content-center">
          <button onClick={(e) => createQuestion(e)} className="btn btn-secondary">
            Add Question
          </button>

          <button onClick={(e) => createTest(e)} className="btn btn-primary">
            Complete Test!
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateTest
