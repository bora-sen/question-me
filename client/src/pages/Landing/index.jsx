import React from "react"

function Landing() {
  return (
    <div>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-2 fw-bold text-secondary">Welcome To questionMe &#128075;</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 text-primary fw-semibold">Quickly create & solve tests with questionme</p>
        </div>
        <div className="overflow-hidden">
          <img
            src="/assets/images/online_survey.svg"
            className="img-fluid rounded-2 shadow-lg mb-4"
            width="700"
            height="500"
            alt="Example image"
            loading="lazy"
          />
        </div>
      </div>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg width={46} height={46} fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0ZM12 8.4a1.2 1.2 0 0 0-1.04.6 1.2 1.2 0 1 1-2.078-1.2 3.6 3.6 0 1 1 4.318 5.196v.204a1.2 1.2 0 1 1-2.4 0V12a1.2 1.2 0 0 1 1.2-1.2 1.2 1.2 0 1 0 0-2.4Zm0 9.6a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">Create Tests Easily</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run
              out of words.
            </p>
            <a href="#" className="btn btn-primary">
              Create a Test
            </a>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg
              width={46}
              height={46}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m15.232 5.232 3.536 3.536m-2.036-5.036a2.5 2.5 0 0 1 3.536 3.536L6.5 21.036H3v-3.572L16.732 3.732Z" />
            </svg>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">Solve Tests Easily</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run
              out of words.
            </p>
            <a href="#" className="btn btn-primary">
              Solve a Test
            </a>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg
              width={46}
              height={46}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.055 11H5a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v2.945" />
              <path d="M8 3.935V5.5A2.5 2.5 0 0 0 10.5 8h.5a2 2 0 0 1 2 2 2 2 0 1 0 4 0 2 2 0 0 1 2-2h1.064" />
              <path d="M15 20.488V18a2 2 0 0 1 2-2h3.064" />
              <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">Share Tests With Your Friends</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run
              out of words.
            </p>
            <a href="#" className="btn btn-primary">
              Share a Test
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
