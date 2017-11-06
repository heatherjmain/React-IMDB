import React from "react"

class ShowTimesButton extends React.Component {

  render() {
    return (
      <div className="show-times-button">
        <button id="show-times-button">Get Showtimes</button>
        <div id="line"></div>
      </div>
    )
  }
}

export default ShowTimesButton
