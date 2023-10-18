import axios from "axios"
import React, { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import Question from "./Question"

function SolveTestLink() {
  const navigate = useNavigate()
  const [test, setTest] = useState(false)
  const params = useParams()
  const [questionSolveRequests, setQuestionSolveRequests] = useState([])

  useEffect(() => {
    async function main() {
      try {
        const resp = await axios.get(`${import.meta.env.VITE_API_URL}/test/${params.accessLink}`)
        setTest(await resp.data)
      } catch (error) {
        console.log(error.response.status)
        setTest(false)
      }
    }
    main()
  }, [])

  async function handleSubmitTest(e) {
    e.preventDefault(e)
    console.log("clicked!")
    const testSolveRequestObject = {
      accessLink: params.accessLink,
      name:params.name,
      questions: questionSolveRequests,
    }
    const testResultRes = await axios.post(`${import.meta.env.VITE_API_URL}/result/create`, testSolveRequestObject)
    const {accessLink} = await testResultRes.data
      //TODO: Fix redirection
      navigate(`/get-result/${await accessLink}`)
  }

  if (test) {
    return (
      <div>
        <div className="row text-center">
          <h2 className="display-4 fw-bold">{test.title}</h2>
        </div>
        <div id="questions_container">
          {test.questions.map((question, key) => (
            <Question setQuestionSolveRequests={setQuestionSolveRequests} key={key} data={question} />
          ))}

          <div className="col-lg-6 text-center mx-auto">
            <button onClick={(e) => handleSubmitTest(e)} className="btn btn-primary fs-5">
              Submit The Test!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default SolveTestLink
