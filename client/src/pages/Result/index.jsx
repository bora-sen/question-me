import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Result() {
  const params = useParams()
  const [result, setResult] = useState(false)
  useEffect(() => {
    async function main() {
      try {
        const resp = await axios.get(`${import.meta.env.VITE_API_URL}/result/${params.accessLink}`)
        setResult(await resp.data)
        console.log(resp.data)
      } catch (error) {
        console.log(error)
        setResult(false)
      }
    }
    main()
  }, [])
  if (result !== false) {
    return (
      <div className="">
        <div className="col-lg-5 mx-auto text-center">
          <h2 className="fw-bold text-center display-4">{result.isPassed === true ? "Congrats!" :"Oh No!" }</h2>
          <span className="d-block fs-3 fw-semibold">{result.isPassed === true ? "You Passed The Test!" :"You Couldn't Pass The Test!" }</span>

          <span className="d-block fs-3 fw-semibold">{result.name}</span>
          <span className="d-block fs-4">{result.score}/100</span>
          <span className="d-block">Access Test With This Code</span>
          <span className="d-block">{params.accessLink}</span>
        </div>

        <div className="row justify-content-center align-items-center gap-1 my-4 ">
          <div className="col col-auto">
            <a href="/" className="btn btn-secondary">
              Go To Homepage
            </a>
          </div>

          <div className="col col-auto">
            <a href={`/solve-test/${result.testAccessLink}/${result.name}`} className="btn btn-primary">
              Solve This Test Again
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Result
