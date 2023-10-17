import React from "react"

function Footer() {
  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Create a Test
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Solve a Test
          </a>
        </li>

        <li className="nav-item">
          <a href="https://github.com/bora-sen/question-me" className="nav-link px-2 text-body-secondary">
            See Source-Code
          </a>
        </li>
      </ul>
      <p className="text-center text-body-secondary">
        Made With &#10084; - <a href="https://github.com/bora-sen">bora-sen@github</a>
      </p>
    </footer>
  )
}

export default Footer
