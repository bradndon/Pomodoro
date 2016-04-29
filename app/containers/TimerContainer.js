import React, {Component} from 'react'
import TimerImage from '../components/TimerImage'
import Timer from '../components/Timer'
import '../sass/main.scss'
import '../sass/components/timer.scss'


class TimerContainer extends Component {
  constructor() {
    super()
    this.state = {
      width: 100,
      height: 100
    }
  }
  componentDidMount() {
    const deadline = (new Date(Date.parse(new Date()) + this.props.routeParams.time*60*1000)).getTime()
    const milliseconds = this.props.routeParams.time * 60 * 1000
    this.setState({
      deadline,
      milliseconds
    })
    this.handleStartTimer()
  }
  componentWillUnmount() {
    window.clearInterval(this.interval)
  }
  handlePauseTimer() {
    window.clearInterval(this.interval)
  }
  handleToggleTimer() {
    if (this.interval) {
      window.clearInterval(this.interval)
      this.interval = false
    } else {
      const deadline = (new Date(Date.parse(new Date()) + this.state.millisecondsLeft)).getTime()
      this.setState({
        deadline
      })
      this.interval = setInterval(()=>this.updateTimer(), 100)
    }
  }
  handleStartTimer() {
    this.interval = setInterval(()=>this.updateTimer(), 100)
  }
  updateTimer() {
    const millisecondsLeft = this.state.deadline - (new Date()).getTime();
    this.setState({
      secondsLeft: parseInt(millisecondsLeft / 1000),
      millisecondsLeft,
      width: millisecondsLeft/this.state.milliseconds*100,
      height: millisecondsLeft/this.state.milliseconds*100
    })
    if (this.state.width <= 0) {
      //Do finish timer stuff
      console.log("ALL DONE")
      window.clearInterval(this.interval)
    }
  }
  render() {
    return (
      <div style={{width:"100%",height:"100%"}}>
        <div className="timerImage">
          <TimerImage
            width={this.state.width}
            height={this.state.height}/>
        </div>
        <Timer
          onToggleTimer={()=>this.handleToggleTimer()}
          time={this.state.secondsLeft}/>
      </div>)
  }
}

export default TimerContainer
