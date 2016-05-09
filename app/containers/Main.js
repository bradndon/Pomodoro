import React, {Component} from 'react'
import "../sass/main.scss"

class Main extends Component {
  render() {
    return (
      <div>
        <a target="_blank" href="http://secondsyllable.com"><img className='logo' src="../../secondsyllable.png"/></a>
      {this.props.children}
      </div>
    )
  }
}

export default Main
