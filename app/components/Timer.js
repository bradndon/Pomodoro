import React, {PropTypes} from 'react'
import '../sass/main.scss'


function Timer({width, height}) {
  return (<img
    style={{width: width + "%", height:height + "%"}}
    src="../../tomato.svg"/>)
}

export default Timer
