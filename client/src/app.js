import React from "react"
import ReactDOM from "react-dom"
import MovieBox from "./components/MovieBox"



window.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <MovieBox/>,
    document.getElementById("app")
  )
})
