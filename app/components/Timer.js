import React, { PropTypes } from 'react'
import '../sass/components/Timer.scss'

const Timer = (props) => {
  return (
    <div className="timer">
      {props.time == undefined ? '' : <h1 className="timer__text">{parseInt(props.time / 60)} : {('0' + (props.time % 60)).slice(-2)}</h1>}
      <button className={props.paused ? 'timer__button timer__button--start' : 'timer__button timer__button--pause'} onClick={props.onToggleTimer}>{props.paused ? "Start Timer": "Pause Timer"}</button>
    </div>
  )
}

export default Timer
