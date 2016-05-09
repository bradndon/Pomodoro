import React, { PropTypes } from 'react'
import '../sass/components/Timer.scss'

const Timer = (props) => {
  window.setTimeout(()=>{
    document.getElementById('timer').classList.remove('timer__text--transparent');
  },10);
  return (
    <div className="timer">
      {props.time == undefined ? '' : <h1 id='timer' className="timer__text timer__text--transparent">{parseInt(props.time / 60)} : {('0' + (props.time % 60)).slice(-2)}</h1>}
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {/*<button className='timer__button timer__button--skip' onClick={props.onToggleTimer}>{"Go to Previous Timer"}</button>*/}
        <button className={props.paused ? 'timer__button timer__button--start' : 'timer__button timer__button--pause'} onClick={props.onToggleTimer}>{props.paused ? "Start Timer": "Pause Timer"}</button>
          {/*<button className='timer__button timer__button--skip' onClick={props.onToggleTimer}>{"Skip to Next Timer"}</button>*/}

    </div>
    </div>
  )
}

export default Timer
