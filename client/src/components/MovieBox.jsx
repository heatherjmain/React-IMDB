import React from "react"
import MovieList from "./MovieList"
import ShowTimesButton from "./ShowTimesButton"

class MovieBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 1,
          title: "Sausage Party"
        },
        {
          id: 2,
          title: "Cafe Society"
        },
        {
          id: 3,
          title: "Morgan"
        },
        {
          id: 4,
          title: "The 9th Life of Louis Drax"
        },
        {
          id: 5,
          title: "Naam Hai Akira"
        },
        {
          id: 6,
          title: "Equity"
        },
        {
          id: 7,
          title: "Things To Come"
        }
      ]
    }
  }

  render() {
    return (
      <div className="movie-box">
        <div id="line"></div>
        <h1 className="title" id="title">UK Opening This Week</h1>
        <MovieList data={this.state.data} />
        <ShowTimesButton />
      </div>
    )
  }
}

export default MovieBox
