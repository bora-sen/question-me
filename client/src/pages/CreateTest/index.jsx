import React, { useState } from "react"
import Question from "./Question"

function CreateTest() {
  const [questionIds, setQuestionIds] = useState([])
  const [questions,setQuestions] = useState([])
  const [testObj,setTestObj] = useState({})

  function createQuestion(e) {
    e.preventDefault()
    let newId = Math.floor(Math.random() * 10000)
    setQuestionIds((old) => [...old, { id: newId }])
  }
  function createTest(e){
    e.preventDefault()

    let testTitle = document.getElementById("test_title_input").value

    let newTest = {
      title:testTitle,
      questions
    }
    console.log(newTest);
  }

  return (
    <div className="container text-center">
      <h1 className="display-3 fw-bold text-center">Hello World</h1>
      <p className="w-50 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut debitis quos esse excepturi modi autem quam id recusandae voluptas impedit iste mollitia
        porro, totam dignissimos consectetur eveniet optio aliquid eligendi cupiditate? Dicta, cupiditate. Excepturi!
      </p>
      <input type="text" className="form-control w-25 mx-auto mb-4 fs-5" placeholder="Enter your test's name.." id="test_title_input" />
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
