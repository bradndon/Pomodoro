import React, {Component} from 'react'
import CenterImage from '../components/CenterImage'
import Timer from '../components/Timer'
import ProgressBar from '../components/ProgressBar'
import {Link} from 'react-router'

class TimerContainer extends Component {
  constructor() {
    super()
    this.state = {
      width: 100,
      height: 100,
      paused: false
    }
  }
  componentDidMount() {
    const milliseconds = this.props.location.state.milliseconds
    const deadline = (new Date(Date.parse(new Date()) + milliseconds)).getTime()
    this.setState({
      deadline,
      milliseconds
    })
    this.interval = setInterval(()=>this.updateTimer(), 100)
  }
  componentWillUnmount() {
    window.clearInterval(this.interval)
  }
  handleToggleTimer() {
    if (this.interval) {
      window.clearInterval(this.interval)
      this.interval = false
    } else {
      const deadline = (new Date(Date.parse(new Date()) + this.state.millisecondsLeft)).getTime()
      this.setState({deadline})
      this.interval = setInterval(()=>this.updateTimer(), 100)
    }
    this.setState({paused: !this.state.paused})
  }
  updateTimer() {
    const millisecondsLeft = this.state.deadline - (new Date()).getTime();
    this.setState({
      secondsLeft: parseInt(millisecondsLeft / 1000),
      millisecondsLeft,
      width: (millisecondsLeft-1000)/this.state.milliseconds*100,
      height:  (millisecondsLeft-1000)/this.state.milliseconds*100
    })
    if (this.state.secondsLeft <= 0) {
      //Do finish timer stuff
      console.log("ALL DONE")
      const cheering = new Audio('../../cheering.mp3');
      cheering.play();
      this.setState({
        width:0,
        height:0
      })
      if ((this.props.location.state.completed + 1) % 8 == 0){
        this.context.router.push({
          pathname: '/break',
          state: {
            milliseconds: 15*60*1000,
            completed: this.props.location.state.completed + 1
          }
        })
      } else {
        this.context.router.push({
          pathname: '/break',
          state: {
            milliseconds: 5*60*1000,
            completed: this.props.location.state.completed + 1
          }
        })
      }
      window.clearInterval(this.interval)
    }
  }
  render() {
    return (
      <div style={{width:"100%",height:"100%"}}>
        <CenterImage
          width={this.state.width}
          height={this.state.height}
          imagesrc={"../../tomato.svg"}/>

        <Timer
          onToggleTimer={()=>this.handleToggleTimer()}
          time={this.state.secondsLeft}
          paused={this.state.paused}/>
          <h1 className='timer__text timer__text--top'>Pomodoro Timer</h1>

        <ProgressBar
          progress={this.state.width}
          selected={this.props.location.state.completed} />
      </div>)
  }
}

TimerContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default TimerContainer
