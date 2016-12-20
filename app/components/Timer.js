import React, { PropTypes } from 'react'
import '../sass/components/Timer.scss'

const Timer = ({time, paused, onToggleTimer}) => {
  return (
    <div className="timer">
      {time == undefined ? '' : <h1 id='timer' className="timer__text">{parseInt(time / 60)} : {('0' + (time % 60)).slice(-2)}</h1>}
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {/*<button className='timer__button timer__button--skip' onClick={onToggleTimer}>{"Go to Previous Timer"}</button>*/}
        <button className={paused ? 'timer__button timer__button--start' : 'timer__button timer__button--pause'} onClick={onToggleTimer}>{paused ? "Start Timer": "Pause Timer"}</button>
        {/*<button className='timer__button timer__button--skip' onClick={onToggleTimer}>{"Skip to Next Timer"}</button>*/}

    </div>
    </div>
  )
}

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  paused: PropTypes.bool.isRequired,
  onToggleTimer: PropTypes.func.isRequired
}

export default Timer
