import React from "react"
import Movie from "./Movie"
import SeeMoreLink from "./SeeMoreLink"

class MovieList extends React.Component {

  render() {

    const movieNodes = this.props.data.map(function(movie) {
      return (
        <Movie title={movie.title} key={movie.id}></Movie>
      )
    })

    return (
      <div className="movie-list" id="movie-list">
        {movieNodes}
        <SeeMoreLink />
      </div>
    )
  }
}

export default MovieList
