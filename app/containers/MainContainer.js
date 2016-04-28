import React, {Component} from 'react'
import "../sass/main.scss"

class MainContainer extends Component {
  render() {
    return (
      <div className="boop">Hello there!
        {this.props.children}
      </div>
    )
  }
}

export default MainContainer
