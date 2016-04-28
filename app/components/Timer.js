import React, {PropTypes} from 'react'
import '../sass/main.scss'


function Timer({width, height, time}) {
  return (<div><p>{parseInt((time/1000),10)}</p><img
    style={{width: width + "%", height:height + "%"}}
    src="../../tomato.svg"/></div>)
}

export default Timer
