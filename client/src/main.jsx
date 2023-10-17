import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import MainRouter from "./MainRouter"
import "./scss/styles.scss"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainRouter />
  </BrowserRouter>
)
