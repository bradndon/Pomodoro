import React, { PropTypes } from 'react'

const Timer = (props) => {
  return (
    <div className="timer">
      {props.time && <h1 className="timer__text">{parseInt(props.time / 60)} : {props.time % 60}</h1>}
      <button onClick={props.onToggleTimer}>Pause timer</button>
    </div>
  )
}

export default Timer
