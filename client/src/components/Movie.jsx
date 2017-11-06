import React from "react"

class Movie extends React.Component {

  render() {
    return (
      <div className="movie">
        <h4 className = "movie-title">
          {this.props.title}
        </h4>
        
      </div>
    )
  }
}

export default Movie
