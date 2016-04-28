import React, {Component} from 'react'
import "../sass/main.scss"

class Main extends Component {
  render() {
    return (
      <div className="boop">Hello there!
        {this.props.children}
      </div>
    )
  }
}

export default Main
