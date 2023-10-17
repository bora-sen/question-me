import React from "react"

function Header() {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg width={46} height={46} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="me-1">
          <path d="M12 4.2a1.8 1.8 0 1 1 3.6 0v.6A1.2 1.2 0 0 0 16.8 6h3.6a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-.6a1.8 1.8 0 0 0 0 3.6h.6a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-3.6a1.2 1.2 0 0 1-1.2-1.2v-.6a1.8 1.8 0 1 0-3.6 0v.6a1.2 1.2 0 0 1-1.2 1.2H7.2A1.2 1.2 0 0 1 6 20.4v-3.6a1.2 1.2 0 0 0-1.2-1.2h-.6a1.8 1.8 0 1 1 0-3.6h.6A1.2 1.2 0 0 0 6 10.8V7.2A1.2 1.2 0 0 1 7.2 6h3.6A1.2 1.2 0 0 0 12 4.8v-.6Z" />
        </svg>
        <span className="fs-4 fw-bold">questionMe</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="/create-test" className="nav-link" aria-current="page">
            Create a Test
          </a>
        </li>
        <li className="nav-item">
          <a href="/solve-test" className="nav-link">
            Solve a Test
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
