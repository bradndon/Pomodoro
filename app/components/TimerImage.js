import React, {PropTypes} from 'react'
import '../sass/main.scss'
import '../sass/components/TimerImage.scss'

const TimerImage = ({width, height}) => {
  return (
    <div className="timerImage">

      <img
      style={{width: width + "%", height:height + "%"}}
      src="../../tomato.svg"/>
    </div>)
}

export default TimerImage
