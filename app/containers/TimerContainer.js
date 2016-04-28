import React, {Component} from 'react'
import Timer from '../components/Timer'
import '../sass/main.scss'

class TimerContainer extends Component {
  constructor() {
    super()
    this.state = {
      width: 100,
      height: 100,
    }
  }
  componentDidMount() {
    const deadline = new Date(Date.parse(new Date()) + this.props.routeParams.time*60*1000)
    const milliseconds = this.props.routeParams.time * 60 * 1000;
    this.interval = setInterval(() => {
      const millisecondsLeft = deadline.getTime() - (new Date()).getTime();
      this.setState({
        width: millisecondsLeft/milliseconds*100,
        height: millisecondsLeft/milliseconds*100
      })
      if (this.state.width <= 0) {
        //Do finish timer stuff
        console.log("ALL DONE")
        window.clearInterval(this.interval)
      }
    }, 100)
  }
  componentWillUnmount() {
    window.clearInterval(this.interval)
  }
  render() {
    return (<div className="container">
      <Timer
        width={this.state.width}
        height={this.state.height}/>
    </div>)
  }
}

export default TimerContainer
